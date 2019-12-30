<template>
  <div class="detail">
      <div class="container">
      <div v-if="isLoad" class="d-flex justify-content-center align-items-center">
        <img src="assets/gif/loading.gif" alt="loading">
      </div>
          <div class="row">
              <div class="col-12">
                  <router-link style="color:white;text-decoration:none;" to="/blog">
                      <i style="font-size:35px;" class="fas fa-angle-double-left"></i>
                  </router-link>
              </div>
              <div class="col-12">
                    <div class="post-card">
                        <div class="post-header">
                            <div class="post-img">
                                <img :src="url" alt="post image">
                            </div>
                        </div>
                    </div>
                    <div class="post-title my-5">
                        <div>
                            <h1>{{title}}</h1>
                            <p>{{date}}</p>
                        </div>
                        <hr style="border-top: 1px dashed white;">
                        <div>
                            <div v-html="content"></div>
                        </div>
                        <div class="my-4" style="text-align:center;">
                            <iframe 
                              width="660" 
                              height="415" 
                              :src="`https://www.youtube.com/embed/${videoLink}`" 
                              frameborder="0" 
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                              allowfullscreen/>
                        </div>
                    </div>
              </div>
              <div class="col-12">
                    <div style="float:right;margin-top:20px;">
                        <p class="post-share">
                            <Linkedin :url="`https://arnoldtherigan.site/post/${$route.params.title}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                            <Facebook :url="`https://arnoldtherigan.site/post/${$route.params.title}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                            <Twitter :title="title" :url="`https://arnoldtherigan.site/post/${$route.params.title}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                            <WhatsApp :title="title" :url="`https://arnoldtherigan.site/post/${$route.params.title}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                        </p>
                    </div>
              </div>
          </div>
      </div>
      <div class="mt-4 go-up animated infinite bounce delay-9s">
          <a href="#" style="color: #fff;">
              <i class="fas fa-arrow-circle-up"></i>
          </a>
      </div>
  </div>
</template>

<script>
import { Linkedin } from 'vue-socialmedia-share'
import { Facebook } from 'vue-socialmedia-share'
import { Twitter } from 'vue-socialmedia-share'
import { WhatsApp } from 'vue-socialmedia-share'
import { firebaseConfig } from '../../config/firebase'
const { auth, firebase, db } = firebaseConfig

export default {
  name: 'BlogDetail',
  data () {
    return {
      title: '',
      description: '',
      url: '',
      videoLink: '',
      content: '',
      date: ''
    }
  },
  components: {
    Linkedin,Facebook,Twitter,WhatsApp
  },
  created() {
    var docRef = db.collection("blog").doc(`${this.$route.params.title}`);
    docRef.get().then((doc)=> {
        if (doc.exists) {
            this.title = doc.data().title
            this.description = doc.data().description
            this.url = doc.data().url
            this.videoLink = doc.data().videoLink
            this.content = doc.data().content
            this.date = doc.data().date
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }
}
</script>

<style scoped>
pre {
  background-color:white !important;
  border-radius: 10px !important;
  padding: 10px !important;
}
.post-description {
  text-align: justify;
}
.post-share i{
  padding-right: 10px;
  font-size: 30px;
  color:white;
  cursor: pointer;
  transition: transform .2s;
}
.post-share i:hover {
  transform: scale(1.2);
}

.post-header {
  display: flex;
  width: 100%;
  justify-content: center;
  /* background-color: red; */
}
.post-title {
  padding-left: 20px;
}
.post-card {
  /* background-color: red; */
  /* height: 400px; */
  width: 100%;
}
.post-title {
  color:white;
}
.post-img img{
  width: 650px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
}
.post-img {
  border-radius: 10px;
  border-style: dashed;
  border-color: #fff;
  /* border-bottom: 2px; */
}
</style>
