<template>
    <div>
        <div class="container-fluid">
            <div class="trips-banner d-none d-md-block hidden-sm col-md-12">
                <h1 class="greeting align-items-center">Trips</h1>
            </div>

            <h1 class="greeting-mobile d-md-none hidden-md col-8 offset-2">Trips</h1>
        </div>

        <section>
            
        </section>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

    .container-fluid {

        width: 100%;
        padding: 0;

    }

    .trips-banner {
        width: 100vw;
        height: 230px;
        padding: 0;
        /*background-repeat: no-repeat;*/
        background-image: url("~/static/images/tripsBanner.jpg");
    }

    .greeting {
        color: white;
        text-align: left !important;
        padding-left: 30px;
        padding-top: 9vh;
        border: none;
    }

    .greeting-mobile {
        margin-top: 5%;
        text-align: center;
    }


</style>