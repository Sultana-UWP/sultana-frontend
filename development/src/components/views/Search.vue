<template>
    <v-app>
        <v-content>
            <!--      <Download/>-->
            <!--      <Upload/>-->
            <!--      <AddPerson/>-->
            <Get/>
            <!--      <GetAllPeople/>-->
        </v-content>
    </v-app>
</template>

<script>
    // import AddPerson from './components/AddPerson';
    // import GetAllPeople from './components/GetAllPeople';
    import Get from './Get';
    // import Upload from './components/Upload';
    // import Download from './components/Download';

    const firebase = require("firebase");
    require("firebase/functions");
    if(!firebase.apps.length){
        firebase.initializeApp({
            apiKey: 'AIzaSyAGrITGacZZagx9nXTYl7kLqWPpQ9AFYbM',
            authDomain: 'sultana-7f06a.firebaseapp.com',
            projectId: 'sultana-7f06a',
            databaseURL: 'https://sultana-7f06a.firebaseio.com',
            appId: '1:1005050625285:web:22295527eb8ab870ffcb6c',
            storageBucket: 'gs://sultana-7f06a.appspot.com'
        });
    }

    export default {
        name: 'App',

        components: {
            // AddPerson,
            // GetAllPeople,
            Get
            // Upload,
            // Download
        },

        data: () => ({
            //
        }),
    };
</script>