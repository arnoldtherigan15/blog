<template>
  <div>
    <section id="contact">
        <div class="contact-container">
            <div class="contact-form">
                <div class="contact-name"
                    data-aos="flip-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                >
                    <img src="assets/images/arnold.png" alt="arnoldtherigan">
                </div>
                <div class="contact-form-container">
                    <div class="contact-kolom1"
                        data-aos="flip-right"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <h1>Contact Me</h1>
                        <h2>Every message is read and responded to in 24 business hours, Monday - Friday 9am-6pm WIB. </h2>
                        <p>Your message is important to me, so if you feel i might have missed your email,
                            feel free to drop a note again. I'm here to take great care of you.</p>
                        <p>Email me: <span>arnoldtherigan15@gmail.com</span></p>
                        <p>Whatsapp me: <span>+62 812-1457-4782</span></p>
                    </div>
                    <div class="contact-kolom2"
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="1100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <form @submit.prevent="sendEmail()">
                            <input v-model="nama" type="text" placeholder="Name" required>
                            <input v-model="email" type="email" placeholder="Email" required>
                            <textarea v-model="message" cols="30" rows="10" placeholder="message" required></textarea>
                            <button class="sendEmail btn" style="background-color:rgba(178, 190, 195,.5)">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { firebaseConfig } from '../../config/firebase'
const { auth, firebase, db } = firebaseConfig
import Swal from 'sweetalert2'
// import

export default {
  name: 'Contact',
  data () {
    return {
      nama: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail () {
      db.collection("inbox").add({
          nama: this.nama,
          email: this.email,
          message: this.message,
          to: 'arnold'
      })
      .then((docRef)=> {
          Swal.fire('success', 'email sent', 'success')
          this.nama = ''
          this.email = ''
          this.message = ''
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      this.nama = ''
      this.message = ''
      this.email = ''
    }
  }
}
</script>

<style>
.sendEmail:hover {
    background-color: white !important;
}

</style>
