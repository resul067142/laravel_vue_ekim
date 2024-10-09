<template>
    <div>
        <h1>SORU EKLE</h1>
        <form @submit.prevent="Soruyu_Kayit_Et">
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


            <br>
            <button type="submit">Ekle</button>
        </form>
    </div>
</template>
<script>
    export default {
     data() {
        return {
            soru: '',
            secenek_1: '',
            secenek_2: '',
            secenek_3: '',
            secenek_4: '',
            dogru_cevap: 0,
            category: 2,
            categories: [
                {id: 1, name: 'Ev Eşyaları'},
                {id: 2, name: 'Bebek Ürünleri'},
                {id: 3, name: 'Teknolojik Ürünler'},
            ]
        }
     },
     methods: {
        async Soruyu_Kayit_Et() {
            const soru = this.soru
            const secenek_1 = this.secenek_1
            const secenek_2 = this.secenek_2
            const secenek_3 = this.secenek_3
            const secenek_4 = this.secenek_4

            const dogru_cevap = this.dogru_cevap


            await axios.post('/api/sorular', {soru, secenek_1,secenek_2,secenek_3,secenek_4,dogru_cevap }).then(res => {
                console.log(res);

                this.name = null
                this.qty = null
            })
            //const categoryID = this.category
            //const category = this.categories.find(item => item.id === categoryID)

            //console.log(name + ' isimli ürün ' + category.name + ' kategoriye eklendi');
            console.log('ürün oluşturuldu');
        }
     }
    }
</script>
