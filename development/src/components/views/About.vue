<template>
    <v-container class="about">

        <v-container class="desktop-view">
            <v-container class="row">
                <v-container class="columnSmall">
                    <v-container class="about-container">
                        <img src="../../assets/about1.png">
                    </v-container>
                </v-container>
                <v-container class="columnLarge">
                    <h1>The Disaster</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-container>
            </v-container>
        </v-container>

        <v-container class="mobile-view">
            <v-container class="row">
                <v-container class="columnLarge">
                    <h1>The Disaster</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-container>
                <v-container class="columnSmall">
                    <v-container class="about-container">
                        <img src="../../assets/about1.png">
                    </v-container>
                </v-container>
            </v-container>
        </v-container>

        <v-container class="row">
            <v-container class="columnLarge">
                <h1>Our Goal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </v-container>
            <v-container class="columnSmall">
                <v-container class="about-container">
                    <img src="../../assets/about2.jpg">
                </v-container>
            </v-container>
        </v-container>

        <v-container class="desktop-view">
            <v-container class="row">
                <v-container class="columnSmall">
                    <v-container class="about-container">
                        <img src="../../assets/about1.png">
                    </v-container>
                </v-container>
                <v-container class="columnLarge">
                    <h1>Our Founder</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-container>
            </v-container>
        </v-container>

        <v-container class="mobile-view">
            <v-container class="row">
                <v-container class="columnLarge">
                    <h1>Our Founder</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-container>
                <v-container class="columnSmall">
                    <v-container class="about-container">
                        <img src="../../assets/about1.png">
                    </v-container>
                </v-container>
            </v-container>
        </v-container>

    </v-container>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

    .columnLarge h1{
        margin-top: 0;
    }

    .about-container{
        height: auto;
        max-width: 350px;
        padding: 0;
    }

</style>