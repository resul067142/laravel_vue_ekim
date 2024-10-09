<template>
    <div>
        <h1>Ürün Düzenle</h1>
        <form @submit.prevent="updateProduct">
            <input type="text" v-model="soru" placeholder="SORU"> <br>
            <input type="text" v-model="secenek_1" placeholder="secenek_1"> <br>
            <input type="text" v-model="secenek_2" placeholder="secenek_2"> <br>
            <input type="text" v-model="secenek_3" placeholder="secenek_3"> <br>
            <input type="text" v-model="secenek_4" placeholder="secenek_4"> <br>

            <select v-model="dogru_cevap">
                <option value="1" >1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button type="submit">Güncelle</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            soru: '',
            secenek_1: '',
            secenek_2: '',
            secenek_3: '',
            secenek_4: '',
            dogru_cevap: 0,
        }
    },
    methods: {
        updateProduct() {

            const soru = this.soru
            const secenek_1 = this.secenek_1
            const secenek_2 = this.secenek_2
            const secenek_3 = this.secenek_3
            const secenek_4 = this.secenek_4

            const dogru_cevap = this.dogru_cevap


            axios.put('/api/sorular/' + this.$route.params.id,
                {soru, secenek_1,secenek_2,secenek_3,secenek_4,dogru_cevap }).then(res => {
                                console.log(res.data);
                            })
        }
    },
    created() {
        axios.get('/api/sorular/' + this.$route.params.id).then(response => {
            console.log(response.data);
            const soru =response.data
            this.soru = soru.soru
            this.secenek_1 = soru.secenek_1
            this.secenek_2 = soru.secenek_2
            this.secenek_3 = soru.secenek_3
            this.secenek_4 = soru.secenek_4

            this.dogru_cevap = soru.dogru_cevap
        })
    }
}
</script>
