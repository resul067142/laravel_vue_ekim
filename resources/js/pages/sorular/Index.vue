<template>
    <div>

        <h1 :class="selectedColor">Sorular <router-link to="/sorular/ekle">Ekle</router-link></h1>


        <ListProduct v-for="soru in sorular" :key="soru.id"
            :soru="soru"
            :titleColor="selectedTitleColor"
            @deleteProduct="deleteProduct">
        </ListProduct>

    </div>
</template>
<script>
import axios from 'axios'
import ListProduct from '../../components/sorular/ListProduct.vue'
import ColorChanger from '../../components/general/ColorChanger.vue'
export default {
    components: {
        ListProduct,
        ColorChanger,
    },
    data(){
        return {
            sorular: [],
            selectedColor: 'red',
            selectedTitleColor: 'red',
        }
    },
    methods: {
        indexFunction(param) {
            console.log('indexFunction', param);
        },
        deleteProduct(productId) {
            axios.delete('/api/sorular/' + productId).then(res => {
                console.log(res);

                let productIndex = this.sorular.findIndex(product => product.id == productId)
                this.sorular.splice(productIndex, 1)
            })
        }
    },
    created() {
        axios.get('/api/sorular').then(res => {
            console.log('res => ',res);
            this.sorular = res.data
        })
        console.log('Products component created.')
    }
}
</script>
<style>
.red{
    color: red;
}
.blue{
    color: blue;
}
</style>
