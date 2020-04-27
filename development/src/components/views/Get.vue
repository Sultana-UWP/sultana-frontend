<template>
    <v-card>
<!--        <v-card-title primary-title class="justify-center">-->
        <h1>Multiple Search</h1>
<!--            <div class="flex-grow-1"/>-->
            <v-container id="search-form">
                <v-container id="fname">
                    <v-text-field
                            v-model="firstname"
                            v-on:keyup.enter="searchFirstName"
                            label="First Name"
                            single-line />
                </v-container>
                <v-container id="lname">
                    <v-text-field
                            v-model="lastname"
                            v-on:keyup.enter="searchLastName"
                            label="Last Name"
                            single-line/>
                </v-container>
                <v-container id="unit">
                    <v-text-field
                            v-model="unitnumber"
                            v-on:keyup.enter="searchUnitNumber"
                            label="Unit Number"
                            single-line/>
                </v-container>
                <v-container id="state">
                    <v-select
                            @input="searchState"
                            v-model="state"
                            :items="stateSelect"
                            placeholder="State"/>
                </v-container>
                <v-container id="company">
                    <v-select
                            @input="searchCompany"
                            v-model="company"
                            :items="companySelect"
                            placeholder="Company"/>
                </v-container>
                <v-container id="prison">
                    <v-select
                            @input="searchPrison"
                            v-model="prison"
                            :items="prisonSelect"
                            placeholder="Prison"/>
                </v-container>
            </v-container>
<!--        </v-card-title>-->
        <v-container id="data-table">
            <v-data-table
                    :headers="headers"
                    :items="people"
                    :search="search"
                    :items-per-page="10"
                    class="elevation-1"
                    single-select
                    :must-sort="true"
                    sort-by="lastname"
                    :loading="loading"
                    loading-text="Loading... Please Wait"/>
        </v-container>
        <v-btn rounded color="rgb(40, 51, 67)" dark>Press to search</v-btn>


    </v-card>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'ViewPerson',
        data: () => ({
            firstname: "",
            lastname: "",
            state: "",
            unitnumber: "",
            company: "",
            prison: "",
            loading: false,
            search: '',
            people: [],
            stateSelect: [
                "Passenger",
                "Crew",
                "Guard - 58th Ohio Infantry",
                "Iowa Cavalry",
                "Illinois Infantry",
                "Indiana Artillery Battery",
                "Indiana Cavalry",
                "Indiana Infantry",
                "Kentucky Cavalry",
                "Kentucky Infantry",
                "Kentucky Light Artillery",
                "Kentucky Mounted Infantry",
                "Michigan Cavalry",
                "Michigan Engineers & Mechanics",
                "Michigan Infantry",
                "Michigan Light Artillery",
                "Michigan Sharpshooters",
                "New York Infantry",
                "Ohio Cavalry (McLaughlin)",
                "Ohio Cavalry",
                "Ohio Infantry",
                "Ohio Light Artillery",
                "Pennsylvania Cavalry",
                "Tennessee Cavalry",
                "Tennessee Infantry",
                "Tennessee Mounted Infantry",
                "United States Colored Troops",
                "Virginia (Louden County Virginia Rangers)",
                "West Virginia Cavalry",
                "West Virginia Infantry",
                "West Virginia Light Artillery"
            ],

            companySelect: [
                "F & S (Field and Staff)",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M"
            ],
            prisonSelect: [
                "Andersonville, GA",
                "Cahaba. AL",
                "City Jail, Eutaw, AL",
                "Macon, GA",
                "Marion, AL",
                "Meridian, MS",
                "Millen, GA",
                "Unknown",
                "N/A"
            ],
            headers: [
                // {
                //     text: 'Number',
                //     align: 'left',
                //     sortable: true,
                //     value: 'entrynum'
                // },
                {
                    text: 'Fate',
                    align: 'left',
                    sortable: true,
                    value: 'fate'
                },
                {
                    text: 'Regiment',
                    align: 'left',
                    sortable: true,
                    value: 'regiment'
                },
                {
                    text: 'State',
                    align: 'left',
                    sortable: true,
                    value: 'state'
                },
                {
                    text: 'Company',
                    align: 'left',
                    sortable: true,
                    value: 'company'
                },
                {
                    text: 'Rank',
                    align: 'left',
                    sortable: true,
                    value: 'rank'
                },
                {
                    text: 'Last Name',
                    align: 'left',
                    sortable: true,
                    value: 'lastname'
                },
                {
                    text: 'First Name',
                    align: 'left',
                    sortable: true,
                    value: 'firstname'
                },
                {
                    text: 'Age',
                    align: 'left',
                    sortable: true,
                    value: 'age'
                },
                {
                    text: 'Prison',
                    align: 'left',
                    sortable: true,
                    value: 'prison'
                },
                // {
                //     text: 'Comments',
                //     align: 'left',
                //     sortable: true,
                //     value: 'comments'
                // },
            ],
        }),

        methods: {
            searchFirstName: function () {
                this.people = [];
                this.loading = true;

                var searchFirst = firebase.functions().httpsCallable('searchFirst');
                searchFirst({
                    firstname: this.firstname,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            },
            searchLastName: function () {
                this.people = [];
                this.loading = true;

                var searchLast = firebase.functions().httpsCallable('searchLast');
                searchLast({
                    lastname: this.lastname,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            },
            searchState: function () {
                this.people = [];
                this.loading = true;

                var searchState = firebase.functions().httpsCallable('searchState');
                searchState({
                    state: this.state,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            },
            searchUnitNumber: function(){
                this.people = [];
                this.loading = true;

                var searchUnitNumber = firebase.functions().httpsCallable('searchUnitNumber');
                searchUnitNumber({
                    unitnumber: this.unitnumber,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            },
            searchCompany: function () {
                this.people = [];
                this.loading = true;

                var searchCompany = firebase.functions().httpsCallable('searchCompany');
                searchCompany({
                    company: this.company,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            },
            searchPrison: function () {
                this.people = [];
                this.loading = true;

                var searchPrison = firebase.functions().httpsCallable('searchPrison');
                searchPrison({
                    prison: this.prison,
                })
                    .then(response => {
                        response.data.forEach(doc => {
                            this.people.push(doc);
                        });
                        this.loading = false
                    })
                    .catch (err => {
                        console.log('Fetch failed', err)
                        this.loading = false
                    })
            }
        }
    }
</script>

<style scoped>

    #search-form{
        width: 100%;
        padding: 0;
        margin: 0 20px;
        height: 200px;
    }

    #search-form > *{
        float: left;
        padding: 0;
    }

    #fname{
        width: 31%;
    }

    #lname{
        margin-left: 2%;
        width: 31%;
    }

    #unit{
        margin-left: 2%;
        width: 31%;
        clear-after: both;
    }

    #state{
        width: 42%;
    }

    #company{
        margin-left: 2%;
        width: 27%;
    }

    #prison{
        margin-left: 2%;
        width: 20%;
    }

    #data-table{
        width: 100%;
        padding: 0;
    }
    #data-table > *{
        width: 100%;
    }

</style>
