<template>
    <div class="search">
        <form action="action_page.php">

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="First Name">

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Last Name">

            <label for="regi">Regiment</label>
            <input type="text" id="regi" name="regiment" placeholder="Regiment">

            <input type="submit" value="Search">

        </form>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>

    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }

    input[type=submit] {
        background-color: gray;
        color: white;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: lightgray;
    }

    .search {
        background-color: darkgray;
        padding: 20px;
        margin-top: 20px;
    }

</style>