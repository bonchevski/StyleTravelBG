<template>
    <footer class="container">
        <div class="the-footer">
            <div class="col-sm-6 col-md-4 col-lg-3 info">
            <h1 class="address">Where to find us: Lozenets 14, Vejhen, Sofia</h1>
            <p class="copyright"> &#169; All rights reserved.</p>
            </div>

            <div class="some d-none d-md-block col-md-4 offset-md-2 col-lg-2 offset-lg-5">

                <a href="www.facebook.com"><i class="fa fa-instagram fa-3x"></i></a>
                <a href="www.instagram.com"><i class="fa fa-facebook-f fa-3x"></i></a>

            </div>

        <div class="col-sm-2 offset-sm-3x col-md-2 offset-md-0 col-lg-1 offset-lg-0 arrow">
            <a href="#main"><i class="fa fa-angle-up fa-3x"></i></a>
        </div>
        </div>
    </footer>
</template>

<script>


    export default {
        name: "the-footer",

    }
</script>

<style scoped>
    .container {
        min-height: 0;
        max-width: 1920px;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .the-footer {
        color: white;
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: black;
        z-index: 100;
        box-sizing: border-box;

    }

    a {
        color: white;
    }

    i {
        width: 64px;

    }

    i:hover {
        background-color: white;
        color: black;
        border-radius: 5px;
    }

    .address {
        margin-top: 10px;
        font-size: .9rem;
        width: 100%;
        text-align: left;
    }

    .copyright {
        font-size: .7rem;
        margin-bottom: 5px !important;
        text-align: left;
    }
</style>