<template>
    <div class="bg-gray-50">
        <!-- <form @submit.prevent="getQRcode">
            <input type="text" v-model="QRValue">
        </form> -->
        <qrcode-vue v-if="QRValue" :value="QRValue" :size="300" />
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import axios from 'axios';

export default {
    data() {
        return{
            QRValue: "",
        }
    },
    components: {
        QrcodeVue
    },
     mounted() {
       this.getQRcode();
     },
     methods:{
      getQRcode(){
    
      axios.get('https://attendance-production-ce48.up.railway.app/api/rest/qr-generator')
      .then((response)=>{
        this.QRValue=response.data;
        console.log(response.status);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })          
     }
      },
}
</script>
