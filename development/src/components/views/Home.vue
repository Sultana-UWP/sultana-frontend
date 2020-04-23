<template>
    <v-container class="home">

        <v-container class="row">
            <v-container class="columnLarge">
                <h1>Our Museum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </v-container>
            <v-container class="columnSmall">
                <h1>Our Location</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </v-container>
        </v-container>

        <v-container class="grid">
            <router-link id="search" to="/search"><h1>Search our Victim Registry</h1></router-link>
            <v-container id="search_container">
                <img src="../../assets/search_btn.png">
            </v-container>
        </v-container>

    </v-container>
</template>

<script>

    export default {
        name: "Home",
    }
</script>

<style scoped>

    .home{
        padding: 0;
    }

    #search{
        z-index: 1;
        text-align: center;
        margin: 4% 0;
    }

    #search_container{
        max-width: 1100px;
        max-height: 200px;
        z-index: 0;
        padding: 0;
    }

    #search_container img{
        z-index: 0;
    }

</style>