<template>
  <div class="login">
    <div class="login-con">
      <form @submit.prevent="login()">
        <input v-model="email" type="email" placeholder="email">
        <br>
        <input v-model="password" type="password" placeholder="password">
        <br>
        <input type="submit" value="login">
      </form>
    </div>
  </div>
</template>

<script>
import { firebaseConfig } from '../../config/firebase'
const { auth, firebase, db } = firebaseConfig
export default {
  name: 'Login',
  data () {
    return {
      email:'',
      password: ''
    }
  },
  methods: {
    async login () {
        let email = this.email
        let password = this.password
        await auth.signInWithEmailAndPassword(email,password)
        const user = await auth.currentUser
        const userId = user.uid
        localStorage.setItem('token',userId)
        localStorage.setItem('email',email)
        this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
.google {
    color: white;
    font-size: 100px;
    text-shadow: 5px 5px 10px black;
    transition: transform .2s;
}
.google:hover {
    transform: scale(1.5);
}
.login-con {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.login {
    background-image: url(gallery-5.jpg);
    background-size: cover;
    height: 100vh;
}
</style>
