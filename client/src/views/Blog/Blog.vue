<template>
  <div>
      <div class="blogQuote"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        style="position:absolute;"
      >
        <div style="height:100%;">
          <img style="height:89vh" src="assets/wallpaper/abs2.png" alt="tornpaper">
        </div>
        <div
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
          <h1 style="color:white;">
            Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
          </h1>
          <p style="color:white">– Martin Fowler</p>
        </div>
      </div>
      <!--  -->
                      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        style="height:90vh;"
      >
      </vue-particles>
      <!-- blog -->
      <div class="blog container"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
      >
      <div v-if="isLoad" class="d-flex justify-content-center align-items-center">
        <img src="assets/gif/loading.gif" alt="loading">
      </div>
        <div v-for="post in posting.slice().reverse()" :key="post.id" class="post-card">
          <div class="post-header">
            <div class="post-img" style="position:relative;">
              <img :src="post.url" alt="post image" class="blog-image">
            </div>
            <div style="position:absolute;margin-left:20px; margin-top:20px;">
              <p class="post-share">
                  <Linkedin :url="`https://arnoldtherigan.site/post/${post.id}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                  <Facebook :url="`https://arnoldtherigan.site/post/${post.id}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                  <Twitter :title="post.title" :url="`https://arnoldtherigan.site/post/${post.id}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                  <WhatsApp :title="post.title" :url="`https://arnoldtherigan.site/post/${post.id}`" scale="2" style="background-color:white;border-radius:5px;cursor:pointer;" class="p-2 mr-2" />
                <!-- <i class="fab fa-medium"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i> -->
              </p>
            </div>
            <div class="post-title">
              <div>
                <h1>{{post.title}}</h1>
                <p>{{post.date}}</p>
              </div>
              <hr style="border-top: 1px dashed white;">
              <div class="post-description">
                <p>
                  {{post.description}}
                </p>
              </div>
              <div style="text-align:right; position:relative;top:10px;">
                <router-link :to="`/post/${post.id}`" style="color:white;text-decoration:none">
                  <p style="cursor:pointer">
                    Read More
                    <i class="fas fa-angle-double-right animated infinite heartBeat delay-2s"></i>
                  </p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
                            <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
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
  name: 'Blog',
  data () {
    return {
      posting: [],
      isLoad: true
    }
  },
  components: {
    Linkedin,Facebook,Twitter,WhatsApp
  },
  created() {
    db.collection("blog").where("email", "==", 'arnoldtherigan15@gmail.com')
        .onSnapshot((querySnapshot) =>{
          querySnapshot.forEach((doc)=> {
            let obj = {
              title: '',
              description: '',
              url: '',
              videoLink: '',
              content: '',
              date: '',
              id: ''
            }
              obj.title = doc.data().title
              obj.description = doc.data().description
              obj.url = doc.data().url
              obj.videoLink = doc.data().videoLink
              obj.content = doc.data().content
              obj.date = doc.data().date
              obj.id = doc.id
              this.posting.push(obj)
            })
            // console.log(this.posting,'?????????');
            this.isLoad = false
        })
  }
}
</script>

<style scoped>
.blog-image {
  object-fit: cover;
  height: 100% !important;
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
  /* background-color: red; */
}
.post-title {
  padding-left: 20px;
}
.post-card {
  /* background-color: red; */
  /* height: 400px; */
  margin-bottom: 40px;
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

.blog {
  margin-top: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.blogQuote {
  height: 90vh;
  display:flex;
  align-items:center;
  border-top: 0;
  border-bottom: 4px;
  border-right: 0;
  border-left: 0;
  border-style: dashed;
  border-color: #fff;
}

</style>
