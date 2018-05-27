<template>
    <main>
        <banner :background-url="require('~/static/images/dubai.png')" post-title="Welcome to StyleTravel"></banner>
        <div class="locations">
            <h1 class="section-title"> Top locations </h1>
            <section class="container">
                <div class="col-xs-12 offset-0 col-lg-3 offset-lg-1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 offset-0 col-lg-3 offset-lg-1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 offset-0 col-lg-3 offset-lg-1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <banner :background-url="require('~/static/images/dubai.png')" post-title=""></banner>
        <section class="offers">
            <h1 class="section-title">Hot offers</h1>
            <div class="row">
                <div class="col-lg-3 ">
                    <div class="card">
                        <img class="card-img-top" src="~/static/images/rome.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some content.</p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card">
                        <img class="card-img-top" src="~/static/images/rome.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quicks content.</p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card">
                        <img class="card-img-top" src="~/static/images/rome.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 ">
                    <div class="card">
                        <img class="card-img-top" src="~/static/images/rome.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </main>

</template>


<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Banner from "@/components/UI/banner"

    export default {
        components: {
            Banner
        },

    }

</script>

<style>
    .row {
        margin: 0 !important;
    }

    .offers {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .locations {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .section-title {
        text-align: center;
        padding-bottom: 20px;
    }

    .container {
        /*margin: 0 !important;*/
        display: flex;
        /*min-height: 100vh;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-align: center;*/
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
