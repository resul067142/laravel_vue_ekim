<template>
    <div>

            <h2 >#{{soru.id}} {{soru.soru}}</h2>
            <p>
                Seçenek 1: {{soru.secenek_1}}
            </p>
        <p>

            Seçenek 2: {{soru.secenek_2}}
        </p>
        <p>
            Seçenek 3: {{soru.secenek_3}}
        </p>
        <p>
            Seçenek 4: {{soru.secenek_4}}
        </p>
        <p>
            Doğru Cevap: {{soru.dogru_cevap}}
        </p>
            <p>
                <router-link :to="'/sorular/' + soru.id">Düzenle</router-link>
                <button type="button" @click="deleteProduct(soru.id)">Sil</button>
            </p>
            <hr>
            <button @click.prevent="componentBtnClick">Tıkladım</button>
    </div>
</template>
<script>
    export default {
        props: {
            soru: {
                type: Object,
                required: true,
            },

        },
        methods: {
            deleteProduct(productId) {
                this.$emit('deleteProduct', productId)
            },
            componentBtnClick(){
                console.log('componentBtnClick');
                this.$emit('writeLog', [{name: 'Hüseyin', surname: 'Erbayat'}])
            }
        }
    }
</script>
