<template>
  <div>
    <div class="col-12">
        <router-link style="color:white;text-decoration:none;" to="/admin">
            <i style="font-size:35px;" class="fas fa-angle-double-left"></i>
        </router-link>
    </div>
      <div class="container">
      <h1 class="my-4" style="color:white;">Message</h1>
      <hr style="border-top:4px dashed white;">
          <div class="row">
              <div v-for="(message,i) in inbox" :key="i" class="col-12" style="color:white;">
                    <h4>Nama: {{message.nama}}</h4>
                    <h4>Email: {{message.email}}</h4>
                    <p>{{message.message}}</p>
                    <hr style="border-top:1px solid white;">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { firebaseConfig } from '../../config/firebase'
const { auth, firebase, db } = firebaseConfig
export default {
    name: 'Message',
    data () {
        return {
            inbox: []
        }
    },
    created () {
    db.collection("inbox").where("to", "==", 'arnold')
        .onSnapshot((querySnapshot) =>{
          querySnapshot.forEach((doc)=> {
            let obj = {
              nama:'',
              email:'',
              message: ''
            }
              obj.nama = doc.data().nama
              obj.email = doc.data().email
              obj.message = doc.data().message
              this.inbox.push(obj)
            })
        })
    }
}
</script>

<style>

</style>