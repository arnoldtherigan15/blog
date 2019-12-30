<template>
  <div>
        <div class="portoBanner">
            <div
                data-aos="flip-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >
                <h1 class="portoMainTitle">Portofolio</h1>
            </div>
        </div>
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
        <!--  -->
        <div class="my-5 portofolio"
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/1lqckzxUEgc"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">MovieId</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>mobile apps,fetching data dari tmdb api. bisa melihat list movies dan tv series serta menambahkannya ke favorites</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>React-Native</li>
                                    <li>Redux ( state management )</li>
                                    <li>Native Base</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Firebase</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="https://expo.io/@arnoldtherigan15/client" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZWHjDknDvtA"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">LastPass</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,berfungsi sebagai password manager. Anda dapat menyimpan password yang anda gunakan pada media social anda.</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>React</li>
                                    <li>Redux ( state management )</li>
                                    <li>Material Ui</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Firebase</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="https://lastpass-4f74d.firebaseapp.com/" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/q0lc5rwag3Y"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">Verball</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,berfungsi sebagai dashboard untuk pemilik vendor futsal. membantu user mengelola keuangan.</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>Vuejs</li>
                                    <li>Vuex ( state management )</li>
                                    <li>Bootsrap</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Node Js</li>
                                    <li>Mongodb</li>
                                    <li>Mongoose</li>
                                    <li>JSON WEB TOKEN</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="http://verball.dadepe.online" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/SmkV9257JkQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">PokeCard</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,membantu user menyimpan kartu pokemon favoritnya.</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>React</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Firebase</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="https://pokemon-987a0.firebaseapp.com/" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/x8dIag1vl14"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">OrganiCommerce</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,eccomerce yang terinspirasi dari sayurbox untuk tampilannya. terdapat halaman admin. user dapat melakukan transaction dan checkout.</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>Vuejs</li>
                                    <li>Bootsrap</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Node Js</li>
                                    <li>Mongodb</li>
                                    <li>Mongoose</li>
                                    <li>JSON WEB TOKEN</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="http://organicommerce.arnoldtherigan.site" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Uk4SzUrq-sc"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">Kanban</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,Kanban memudahkan kita untuk memanage task task sehari kita</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>Vue Js</li>
                                    <li>Bootsrap</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Node Js</li>
                                    <li>Firebase</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="https://kanban-9499e.firebaseapp.com/" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UIXX92Nx2_I"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">OverFlow</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,clone dari stackoverflow. question and answer forum</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>Vuejs</li>
                                    <li>Vuex ( state management )</li>
                                    <li>Bootsrap</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Node Js</li>
                                    <li>Mongodb</li>
                                    <li>Mongoose</li>
                                    <li>JSON WEB TOKEN</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="http://overflowarnold.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="porto-card mx-2 my-4">
                <div class="porto-header">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/3zlC9nRrlvs"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
                <div class="porto-title p-2">
                    <h1 style="text-align:center">Im Done</h1>
                    <div class="porto-tooltip">
                        <div class="tooltip-card">
                            <div class="p-4">
                                <h5>aplikasi berbasis web,untuk membantu mengorganisir tugas tugas yang dimiliki user</h5>
                                <p style="margin:0;">FrontEnd:</p>
                                <ul>
                                    <li>Jquery</li>
                                    <li>Bootsrap</li>
                                </ul>
                                <p style="margin:0;">BackEnd:</p>
                                <ul>
                                    <li>Node Js</li>
                                    <li>Mongodb</li>
                                    <li>Mongoose</li>
                                    <li>JSON WEB TOKEN</li>
                                </ul>
                                <hr>
                                <a style="font-weight:bold;text-decoration:none;" href="http://imdone.arnoldtherigan.site/" target="_blank">See Portofolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Portofolio'
}
</script>

<style scoped>
.tooltip-card {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 100px;
    box-shadow: 1px 1px 10px white;
}
.porto-tooltip {
    visibility: hidden;
    position: absolute;
    top:1px;
    z-index: 9999;
    transition: 0.5s;
}
.porto-title:hover .porto-tooltip {
    visibility: visible;
}
.porto-title {
    margin: 0;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: justify;
}
.porto-header {
    margin: 0;
}
.porto-card {
    border-radius: 10px;
    border-style: dashed;
    border-color: #fff;
    position: relative;
}
.portofolio {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.portoMainTitle {
    color:white;
    font-size: 90px;
    text-shadow: 5px 5px 10px black;
}
.portoBanner {
    /* height:100%; */
    /* background-image: url('https://static.vecteezy.com/packs/media/components/home/masthead/img/lavakidneys_800x400@2x-2db5e5a0c944e2b16a11a18674570f76.jpg'); */
    /* background-size: cover; */
    /* height: 89vh; */
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-attachment: fixed;
    background-position: center; */
}

</style>
