<template>
  <div>
    <div class="d-flex nav-admin align-items-center p-2">
        <div style="width:80%;cursor:pointer;">
            <router-link to="/message">
                <i style="font-size:25px;color:black;postion:relative;" class="fas fa-bell ml-4 bell"></i>
            </router-link>
            <div style="position:absolute;top:65px;left:50px;background-color:black;color:white;width:25px; text-align:center;border-radius:100%;">
                <h4 style="font-size:12px;font-weight:bold">{{inbox.length}}</h4>
            </div>
        </div>
        <div style="width:20%;text-align:right;" class="mr-4">
            <button @click.prevent="logout()" class="btn" style="background-color:black;color:white;">Logout</button>
        </div>
    </div>
    <div class="container">
        <div class="my-2">
            <h1 style="color:white;">Posting new Content</h1>
        </div>
        <div class="form-container">
            <form @submit.prevent="postContent()">
                <div class="form-group" style="text-align:left;">
                    <label for="title" style="text-align:left !important; margin:0;">Title</label>
                    <input v-model="title" type="text" placeholder="title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="title" style="text-align:left !important; margin:0;">Date</label>
                    <input v-model="date" type="text" placeholder="date contoh 27 December 2019" class="form-control">
                </div>
                <div class="form-group" style="text-align:left;">
                    <label for="title" style="text-align:left !important; margin:0;">Description</label>
                    <textarea v-model="description" type="text" placeholder="description" class="form-control"></textarea>
                </div>
                <div class="form-group">
                    <label for="title" style="text-align:left !important; margin:0;">Content</label>
                    <quill v-model="content" :config="config" output="html"></quill>
                </div>
                <div class="form-group">
                    <label for="title" style="text-align:left !important; margin:0;">Video Link</label>
                    <input v-model="videoLink" type="text" placeholder="video-link" class="form-control">
                </div>
                <div class="form-group">
                    <label for="title" style="text-align:left !important; margin:0;">Image Url</label>
                    <input v-model="url" type="text" placeholder="url-image" class="form-control">
                </div>
                <button type="submit" class="btn btn-light" style="padding:5px 10px;">Submit</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { firebaseConfig } from '../../config/firebase'
const { auth, firebase, db } = firebaseConfig
import Vue from 'vue'
import VueQuill from 'vue-quill'
import Swal from 'sweetalert2'

Vue.use(VueQuill)
export default {
    name: 'Admin',
    data () {
        return {
        title: '',
        content: '',
        description: '',
        videoLink: '',
        date: '',
        url:'',
        inbox:[],
        config: {
            modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }], // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
                [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
                [{ 'direction': 'rtl' }], // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean'] // remove formatting button
            ]
            },
            placeholder: 'content here'
        }
        }
    },
    methods: {
        logout () {
            auth.signOut()
            this.$router.push('/login')
            localStorage.clear()
        },
        postContent () {
            db.collection("blog").add({
                title: this.title,
                date: this.date,
                content: this.content,
                description: this.description,
                videoLink: this.videoLink,
                url:this.url,
                email:localStorage.getItem('email')
            })
            .then((docRef)=> {
                Swal.fire('success','content posted','success')
                this.title = ''
                this.content = ''
                this.description = ''
                this.date = ''
                this.videoLink = ''
                this.url = ''
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
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

<style scoped>
.bell {
    transition: transform .2s;
}
.bell:hover {
    transform: scale(1.5)
}
.nav-admin {
    background-color: white;
}
.form-container {
    border: 2px dashed white;
    margin: 20px 0;
    padding: 20px;
}

</style>