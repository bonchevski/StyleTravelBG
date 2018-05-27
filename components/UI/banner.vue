<template>
    <div class="container">
        <div class="wrapper d-none d-md-block hidden-sm col-md-12"  :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <h1 class="greeting">{{ postTitle }}</h1>
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
    .container {
        min-width: 100vw;
        padding: 0;
    }

   .wrapper {
       width: 100vw;
       height: 250px;
   }

    .greeting {
        color: white;
        text-align: left;
        margin-left: 1.5vw;
        margin-top: 5vh
    }
</style>