<template>
  <v-container id="wrapper">
    <v-app id="app">
      <v-container id="feature-container">
        <v-container class="grid">
          <img id="feature" alt="Sultana Mural" src="./assets/main_feature.png">
          <v-container id="logo">
            <router-link to="/">
              <img alt="Sultana Logo" src="./assets/logo.png">
            </router-link>
          </v-container>

          <v-toolbar id="nav">
            <v-container class="desktop-view">
              <v-container id="nav-buttons">
                <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/">Home</router-link></v-btn>
                <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/search">Search</router-link></v-btn>
                <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/about">About</router-link></v-btn>
              </v-container>
            </v-container>
            <v-container class="mobile-view">
              <v-container id="burger">
                <Burger></Burger>
              </v-container>
            </v-container>
          </v-toolbar>
          <MobileNav>
            <v-container id="close">
              <Burger></Burger>
            </v-container>

            <v-list class="mobile-menu" @click.prevent="toggle">
              <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/">Home</router-link></v-btn>
              <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/search">Search</router-link></v-btn>
              <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/about">About</router-link></v-btn>
            </v-list>
          </MobileNav>
        </v-container>
      </v-container>
      <v-container id="content-container">
        <router-view />
      </v-container>
      <v-container id="bottom">
        <a href="https://www.facebook.com/sultanadisastermuseummarion/">
          <v-container id="fb">
            <img alt="Facebook" src="./assets/fb.svg">
          </v-container>
        </a>
        <v-container id="bottom-buttons">
          <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/">Home</router-link></v-btn>
          <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/search">Search</router-link></v-btn>
          <v-btn color="rgba(0, 0, 0, 0)"><router-link to="/about">About</router-link></v-btn>
        </v-container>
      </v-container>
    </v-app>
  </v-container>
</template>

<script>

  import Burger from './components/Burger.vue';
  import MobileNav from './components/MobileNav.vue';
  import { mutations } from '@/store.js';

  export default {
    name: 'app',
    components: {
      Burger,
      MobileNav
    },
    methods: {
      toggle() {
        mutations.toggleNav()
      }
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Open+Sans&display=swap');



  a{
    text-decoration: none;
    /*color: rgb(194,172,181);*/
    color: rgb(229,220,223) !important;
  }

  #nav-buttons > *{
    font-size: 24px;
    margin: 0 10px;
  }

  h1, h2, h3, a{
    font-family: "Francois One", Arial, sans-serif;
  }

  h1{
    font-size: 42px;
  }

  img{
    height: 100%;
    width: 100%;
  }

  #feature-container{
    max-height: 821px;
    max-width: 1140px;
  }

  #app {
    font-family: "Open Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: hidden;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    background-color: white;
    font-size: 18px;
  }

  #content-container{
    padding: 20px;
  }

  #feature{
    display: flex;
    flex-flow: row nowrap;
    z-index: 0;
  }

  #wrapper {
    /*background-color: rgb(41,53,69);*/
    background-color: rgb(40, 51, 67) !important;
  }

  .grid{
    display: grid;
    height: auto;
    width: auto;
    grid-template-columns: auto;
    /*grid-template-rows: 821px;*/
    grid-template-rows: auto;
  }

  .grid > *{
    grid-row-start: 1;
    grid-column-start: 1;
    height: auto;
  }

  #logo{
    float: left;
    flex: none;
    margin: 3% 0 0 3%;
    z-index: 2;
    clear-after: both;
    width: 22%;
    height: 20%;
  }

  #nav{
    z-index: 1;
    clear-after: both;
  }

  #burger, #close{
    float: right;
    margin-right: 3%;
    clear-after: both;
  }

  #close{
    margin-left: 90%;
    margin-bottom: 60px;
    float: none;
  }

  #nav > *{
    float: right;
    list-style-type: none;
    margin: 9% 3% 0 0;
    padding: 0px;
    height: 100%;
    z-index: 1;
  }

  nav li{
    margin-left: 15px;
    display: inline;
  }

  /*.navbtn{*/
  /*  background-color: rgba(0,0,0,0) !important;*/
  /*}*/

  #bottom{
    margin-top: 20px;
    padding-top: 40px;
    /*background-color: rgb(41,53,69);*/
    background-color: rgb(40, 51, 67);
    overflow: hidden;
  }

  #bottom a{
    color: rgb(229,220,223);
    font-size: 24px;
  }

  #fb{
    margin: 0 0 0 20px;
    height: 23%;
    width: 23%;
    padding: 1%;
    background-color: white;
    border-radius: 15px;
    float: left;
  }

  #bottom-buttons{
    float: right;
    width: 72%;
  }

  #bottom-buttons > *{
    width: 33.33%;
  }

  .columnLarge{
    float: left;
    width: 60%;
  }

  .columnSmall{
    float: left;
    width: 30%;
  }

  .columnLarge:last-child{
    margin-left: 9%;
  }

  .columnSmall:last-child{
    margin-left: 9%;
  }

  @media screen and (max-width: 800px){
    .columnLarge, .columnSmall{
      width: 100%;
      margin: 0;
    }

    .columnLarge:last-child, .columnSmall:last-child{
      margin-left: 0;
    }

    .mobile-view{
      display: block;
    }

    .desktop-view{
      display: none;
    }

    #content-container{
      padding: 0;
    }

    #fb, #bottom-buttons, #bottom-buttons > *{
      width: 100%;
      height: auto;
      min-height: 60px;
      margin: 15px 0;
    }
  }

  @media screen and (min-width: 800px) {

    .mobile-view{
      display: none;
    }

    .desktop-view{
      display: block;
    }

  }
  .row{
    margin-top: 20px;
  }
  .row:after{
    content: "";
    display: table;
    clear: both;
  }

  .mobile-menu {
    list-style-type: none;
    margin-left: 25px;
  }

  .mobile-menu > *{
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    margin: 15px 0;
    padding: 15px 0;
  }

  /*ul.mobile-menu .burger{*/
  /*  float: none;*/
  /*  margin-left: 80%;*/
  /*}*/

</style>
