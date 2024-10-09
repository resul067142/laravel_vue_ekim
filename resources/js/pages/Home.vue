<template>
    <div>
        <form @submit.prevent="start">
            <input type="text" v-model="name" placeholder="Ad">
            <button type="submit">Yarışmaya Başla</button>
        </form>
        {{secilenSoru}}
        <div v-if="sorular && sorular.length && secilenSoru">
            {{secilenSoruSirasi + 1}} / {{sorular.length}}
            <div style="background-color: darkcyan; color: white; height: 30px">
                {{secilenSoru.soru}}
            </div>

            <div @click="sec(1)"
                 :class="'secenek' +  (secilenSoru.secilen_cevap && secilenSoru.secilen_cevap === 1 ? ' secilen' : '')">
                1 - {{secilenSoru.secenek_1}}
            </div>
            <div @click="sec(2)"
                 :class="'secenek' +  (secilenSoru.secilen_cevap && secilenSoru.secilen_cevap === 2 ? ' secilen' : '')">
                2 - {{secilenSoru.secenek_2}}
            </div>
            <div  @click="sec(3)"
                  :class="'secenek' +  (secilenSoru.secilen_cevap && secilenSoru.secilen_cevap === 3 ? ' secilen' : '')">
                3 - {{secilenSoru.secenek_3}}
            </div>
            <div  @click="sec(4)"
                  :class="'secenek' +  (secilenSoru.secilen_cevap && secilenSoru.secilen_cevap === 4 ? ' secilen' : '')">
                4 - {{secilenSoru.secenek_4}}
            </div>
            <div v-if="!bittiMi">
                {{secilenSoru.dogru_cevap === secilenSoru.secilen_cevap ? 'DOĞRU' : 'YANLIŞ'}}
            </div>

            <div style="margin-top: 10px;">
                <button v-if="secilenSoruSirasi != 0" type="button" @click="oncekiSoru"> {{ '<' }} </button>
                <button v-if="secilenSoruSirasi < sorular.length - 1" type="button" @click="sonrakiSoru"> {{ '>' }} </button>
            </div>
        </div>
        <div>
            <button @click="bitir" :disabled="bittiMi">Bitir</button>
            <div v-if="!bittiMi">
                {{yuzdeDogruCevap}}%
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            name: null,
            sorular: null,
            secilenSoru: {},
            secilenSoruSirasi: 0,
            bitirKapali: true,
            yuzdeDogruCevap: null,
            skorKaydedildi: false,
        }
    },
    computed: {
        bittiMi() {
            return this.sorular && !this.sorular.every(soru => soru.hasOwnProperty('secilen_cevap'))

        }
    },
    methods: {
        start() {
            this.secilenSoruSirasi = 0
            axios.get('/api/sorular').then(res => {
                console.log('res => ',res);
                this.sorular = res.data
                this.secilenSoru = this.sorular[0]
            })
            console.log('Products component created.')
        },
        oncekiSoru() {
            this.secilenSoruSirasi--
            this.secilenSoru = this.sorular[this.secilenSoruSirasi]
        },
        sonrakiSoru() {
            this.secilenSoruSirasi++
            this.secilenSoru = this.sorular[this.secilenSoruSirasi]
        },
        sec(secenek){
            if (!this.skorKaydedildi)
            {
                this.sorular[this.secilenSoruSirasi].secilen_cevap = secenek
            }
        },
        bitir() {
            const soruSayisi = this.sorular.length
            const dogruCevapSayisi = this.sorular.filter(soru => soru.dogru_cevap === soru.secilen_cevap).length
            this.yuzdeDogruCevap = Math.ceil(dogruCevapSayisi / soruSayisi* 100)
            this.skorKaydedildi = true
        }
    }
}
</script>
