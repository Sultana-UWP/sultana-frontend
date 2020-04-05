<template>
  <div id="wrapper">
    <div id="app">
      <div id="feature-container">
        <div class="grid">
          <img id="feature" src="./assets/main_feature.png">
          <img id="logo" src="./assets/logo.png">
          <nav>
            <div class="desktop-view">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/search">Search</router-link></li>
                <li><router-link to="/about">About</router-link></li>
              </ul>
            </div>
            <div class="mobile-view">
              <div id="burger">
                <Burger></Burger>
              </div>
            </div>
          </nav>
          <MobileNav>
            <div id="close">
              <Burger></Burger>
            </div>
            <ul class="mobile-menu" @click.prevent="toggle">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/search">Search</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </MobileNav>
        </div>
      </div>
      <div id="content-container">
        <router-view />
      </div>
      <div id="bottom">
        <h1>Follow us on Social Media</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </div>
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

  a{
    text-decoration: none;
    color: black;
  }

  img{
    height: 100%;
    width: 100%;
  }

  #feature-container{
    max-height: fit-content;
    max-width: 1140px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: hidden;
  }

  #content-container{
    padding: 20px;
  }

  #feature{
    display: flex;
    flex-flow: row nowrap;
    z-index: 0;
  }

  #wrapper{
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }

  #logo{
    float: left;
    flex: none;
    margin: 3% 0 0 3%;
    z-index: 1;
    clear-after: both;
    width: 22%;
    height: 16%;
  }

  nav{
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

  nav ul{
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

  .grid{
    display: grid;
    grid-template-columns: 1fr;
  }

  .grid img, .grid nav{
    grid-row-start: 1;
    grid-column-start: 1;
  }

  #bottom{
    margin-top: 20px;
    background-color: gray;
    overflow: hidden;
  }

  #bottom h1{
    float: left;
    margin-left: 1%;
  }

  #bottom ul{
    float: left;
    margin-left: 85%;
    list-style-type: none;
    padding: 0px;
    width: 25%;
    height: 100%;
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

  ul.mobile-menu {
    list-style-type: none;
  }

  ul.mobile-menu > li > a{
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
