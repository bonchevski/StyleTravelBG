<template>
    <footer class="container">
        <div class="the-footer">
            <div class="col- info">
            <h1 class="address">Where to find us: Lozenets 14, Vejhen, Sofia</h1>
            <p class="copyright"> &#169; All rights reserved.</p>
            </div>

        <div class="col-4 arrow">
            <i class="fa fa-angle-up fa-3x"></i>
        </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "the-footer"
    }
</script>

<style scoped>
    .container {
        min-height: 0;
    }
    .the-footer {
        color: white;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: black;
        z-index: 100;
        box-sizing: border-box;

    }
    .address {
        font-size: 20px;
        width: 100%;
    }

    .copyright {

    }
</style>