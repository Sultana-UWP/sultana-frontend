<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" light shaped  class="mx-auto" max-width=1000>
<!--                        <v-avatar class="ma-3" size="125" tile>-->
<!--                            <v-img v-bind:src="require('@/assets/' + item.image)" />-->
<!--                        </v-avatar>-->

                        <span v-if="i === 1" v-html="item.image"/>
                        <v-img v-else v-bind:src="require('@/assets/' + item.image)"/>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="headline" v-text="item.title"></v-card-title>
                                <v-card-subtitle v-text="item.innerText"></v-card-subtitle>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card to="/search" ripple :color=thirdColor class="mx-auto" max-width="1000px" dark shaped>
                        <v-ripple>
                            <div>
                                <v-img src="@/assets/search_btn.png"></v-img>
                                <v-card-title>Click to search our registry</v-card-title>
                            </div>
                        </v-ripple>
                    </v-card>
                </v-col>
            </v-row>
            <v-card id="bottom" class="mx-auto" max-width="1000px" color="rgb(0,0,0,0)" elevation="0">
                <v-btn :color=buttonColor :height=60 width=300 href="https://www.facebook.com/sultanadisastermuseummarion/">
                    <v-img contain :height=30 width=300 src="@/assets/fb.svg"></v-img>
                </v-btn>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'Home',

        data: () => ({
            items: [
            {
                image: 'welcome.png',
                color: '#ebfffe',
                title: 'Welcome to the museum!',
                innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit. Sed augue lacus viverra vitae congue eu. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Eu consequat ac felis donec et odio. Adipiscing elit duis tristique sollicitudin nibh. Odio eu feugiat pretium nibh ipsum consequat. Sed id semper risus in hendrerit gravida rutrum quisque non. Morbi tristique senectus et netus et malesuada. Vel pretium lectus quam id leo in vitae turpis massa. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Ut lectus arcu bibendum at varius. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Aliquet nibh praesent tristique magna sit. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Leo integer malesuada nunc vel.',
            },
            {
                image: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.665230759371!2d-90.1984160847539!3d35.214806780305715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d59d87ffbad58d%3A0x24099e062f7cb315!2s104%20Washington%20St%2C%20Marion%2C%20AR%2072364!5e0!3m2!1sen!2sus!4v1589059963098!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
                color: '#ebfffe',
                title: 'Location',
                innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit. Sed augue lacus viverra vitae congue eu. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Eu consequat ac felis donec et odio. Adipiscing elit duis tristique sollicitudin nibh. Odio eu feugiat pretium nibh ipsum consequat. Sed id semper risus in hendrerit gravida rutrum quisque non. Morbi tristique senectus et netus et malesuada. Vel pretium lectus quam id leo in vitae turpis massa. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Ut lectus arcu bibendum at varius. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Aliquet nibh praesent tristique magna sit. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Leo integer malesuada nunc vel.',
            },
            ],
        }),
          props: {
            navButtons: {
                type: Array
            },
            primaryColor: {
                type: String
            },
            secondaryColor: {
                type: String
            },
            thirdColor: {
                type: String
            },
            buttonColor: {
              type: String
            }
        },
        computed: {
          getSecondaryColor() {
            return this.secondaryColor
          }
        }
    }
</script>
