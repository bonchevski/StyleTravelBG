<template>
    <div class="container-fluid">
        <div class="wrapper d-none d-md-block hidden-sm col-md-12"  :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <h1 class="greeting align-items-center">{{ postTitle }}</h1>
        </div>
    </div>
</template>

<script>
    import backgroundUrl from "@/static/images/dubai.png"

    export default {
        name: "banner",
        data() {
            return { backgroundUrl }
        },
        props: {
            postTitle: {
                type: String,
                default: "Welcome"
            }
        }
    }
</script>

<style scoped>
    .container-fluid {

        width: 100%;
        padding: 0;

    }

   .wrapper {
       width: 100vw;
       height: 250px;
       padding: 0;
   }

    .greeting {
        color: white;
        text-align: left;
        padding-left: 30px;
        padding-top: 10vh;
    }


</style>