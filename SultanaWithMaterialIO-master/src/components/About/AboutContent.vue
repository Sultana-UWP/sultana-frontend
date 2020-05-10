<template>
        <v-card color="#4A6572" class="mx-auto" max-width="1000px" dark>
            <v-container id="about">
                <v-container>
                    <v-container class="row">
                        <v-container class="columnSmall">
                            <v-container class="about-container">
                                <v-img contain src="@/assets/main_feature.png"/>
                            </v-container>
                        </v-container>
                        <v-container class="columnLarge">
                            <h1>The Disaster</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </v-container>
                    </v-container>
                </v-container>

                <div class="desktop-view">
                    <v-container class="row">
                        <v-container class="columnLarge ml-6">
                            <h1>Our Goal</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </v-container>
                        <v-container class="columnSmall">
                            <v-container class="about-container">
                                <v-img src="../../assets/about2.jpg"/>
                            </v-container>
                        </v-container>
                    </v-container>
                </div>

                <div class="mobile-view">
                    <v-container class="row">
                        <v-container class="columnSmall">
                            <v-container class="about-container">
                                <v-img src="../../assets/about2.jpg"/>
                            </v-container>
                        </v-container>
                        <v-container class="columnLarge ml-6">
                            <h1>Our Goal</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </v-container>
                    </v-container>
                </div>

            </v-container>
        </v-card>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

    #about{
        width: 96%;
    }
    .columnLarge h1{
        margin-top: 0;
    }

    .about-container{
        height: auto;
        max-width: 350px;
        padding: 0;
    }

    .columnLarge{
    float: left;
    width: 60%;
    padding: 0;
  }

  .columnSmall{
    float: left;
    width: 30%;
    padding: 0;
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

  }

  .desktop-view{
      margin: 0 !important;
      padding: 0;
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
    padding: 0;
    min-width: 100%;
  }
  .row:after {
      content: "";
      display: table;
      clear: both;
  }
</style>