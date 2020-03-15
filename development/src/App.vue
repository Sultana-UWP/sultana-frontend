<template>
  <div id="wrapper">
    <div id="app">
        <div class="grid">
          <img id="feature" src="./assets/main_feature.png">
          <img id="logo" src="./assets/logo.png">
          <nav>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </nav>
        </div>
      <router-view />
      <div id="bottom">
        <h1>Follow us on Social Media</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

  a{
    text-decoration: none;
    color: black;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    z-index: 0;
  }

  #feature{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: -1;
  }

  #wrapper{
    width: 1140px;
    margin: 0 auto;
  }

  #logo{
    float: left;
    flex: none;
    margin: 1% 0 0 1%;
  }

  nav{
    float: left;
    margin: 1% 0 0 89%;
  }

  nav ul{
    list-style-type: none;
    margin: 0;
    padding: 0px;
    width: 25%;
    height: 100%;
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
    background-color: gray;
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

</style>
