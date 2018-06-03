<template>
    <div>
        <div class="post-preview">
            <article>
                <div
                        class="post-thumbnail"
                        :style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>
                <div class="post-content">
                    <h1>{{offerLocation}}</h1>
                    <p>{{offerDescription | snippet}}...</p>
                    <p>{{ offerPrice }}</p>
                </div>

                <b-btn class="more-details-btn" v-b-modal="id">See more details</b-btn>
            </article>


            <!-- Modal Component -->
            <b-modal :id="id" :title="offerLocation" ok-title="Continue" cancel-title="Go back"
                     @ok.prevent="displayCheckout = !displayCheckout">
                <b-container fluid>
                    <div v-if="displayCheckout">
                        <div
                                class="post-thumbnail"
                                :style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>
                        <h1>{{offerLocation}}</h1>
                        <p>{{ offerDescription }}</p>

                        <div class="informations">
                            <p>Date: {{offerDateDay}} {{offerDateMonth}} {{offerDateYear}}</p>
                            <p>Price: {{ offerPrice }}</p>
                            <p class="spots">Available spots: {{ offerSpots }}</p>
                            <p>Discount: {{ offerDiscount }}%</p>
                        </div>
                    </div>


                    <div class="checkout" v-else>
                        <form action="">

                            <div class="full-wrapper">
                                <h1 class="checkout-title">Card holder's name</h1>
                                <input type="text" placeholder=" Full name" class="full-width">
                            </div>
                            <div class="full-wrapper">
                                <h1 class="checkout-title">Card number</h1>
                                <input type="tel" class="full-width" maxlength="16">
                            </div>
                            <div class="full-wrapper">
                                <div class="half-wrapper">
                                    <h1 class="checkout-title">CVR</h1>
                                    <input type="tel" placeholder=" CVR" maxlength="3">
                                </div>
                                <div class="half-wrapper">
                                    <h1 class="checkout-title"> Expiry date</h1>
                                    <input type="date">
                                </div>
                            </div>


                            <div class="full-wrapper">
                                <h1 class="">Billing address</h1>
                                <input type="text" class="full-width"
                                       placeholder=" Address: Street, bldg., apt., zip code">
                            </div>
                            <div class="full-wrapper">
                                <input type="text" class="full-width" placeholder=" City">
                            </div>
                            <div class="full-wrapper">
                                <input type="text" class="full-width" placeholder=" Country">
                            </div>

                            <div class="full-wrapper">
                                <input type="email" class="full-width" placeholder=" Your e-mail">
                            </div>


                            <b-button variant="primary" class="buy-booking">Reserve spots</b-button>
                        </form>
                    </div>
                </b-container>

            </b-modal>


            <!--<div class="modal" id="exampleModa2" role="dialog"-->
            <!--v-if="displayModal">-->
            <!--<div class="modal-dialog" role="document">-->
            <!--<div class="modal-content">-->
            <!--<div class="modal-header">-->
            <!--<h5 class="modal-title" id="exampleModalLabel">{{ offerLocation }}</h5>-->
            <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
            <!--<span aria-hidden="true">&times;</span>-->
            <!--</button>-->
            <!--</div>-->
            <!--<div class="modal-body">-->
            <!--<div-->
            <!--class="post-thumbnail"-->
            <!--:style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>-->
            <!--<h1>{{offerLocation}}</h1>-->
            <!--<p>{{ offerDescription }}</p>-->

            <!--<div class="informations">-->
            <!--<p>Date: {{offerDateDay}} {{offerDateMonth}} {{offerDateYear}}</p>-->
            <!--<p>Price: {{ offerPrice }}</p>-->
            <!--<p class="spots">Available spots: {{ offerSpots }}</p>-->
            <!--<p>Discount: {{ offerDiscount }}%</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <!--<nuxt-link :to="postLink" type="button" class="btn btn-primary">Save changes</nuxt-link>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </div>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'HotOfferPreview',
        data() {
            return {
                displayModal: false,
                displayCheckout: true
            }
        },
        props: {
            id: {
                type: String,
                required: true
            },
            isAdmin: {
                type: Boolean,
                required: true
            },
            offerLocation: {
                type: String,
                required: true
            },
            offerPrice: {
                type: String,
                required: true
            },
            offerDescription: {
                type: String,
                required: true
            },
            offerImgLink: {
                type: String,
                required: true
            },
            offerDateDay: {
                type: String,
                required: true
            },
            offerDateMonth: {
                type: String,
                required: true
            },
            offerDateYear: {
                type: String,
                required: true
            },
            offerSpots: {
                type: String,
                required: true
            },
            offerDiscount: {
                type: String,
                required: true
            }
        },
        computed: {
            postLink() {
                return this.isAdmin ? '/admin/' + this.id : '/Offers/' + this.id
            },
        },
        filters: {
            snippet: function (value) {
                return value.slice(0, 70)
            }
        },

    }
</script>


<style scoped>
    .buy-booking {
        float: left;
        margin-left: 5%;
    }

    .full-wrapper {
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        font-size: 1rem;
        margin-bottom: 5%;
    }

    .half-wrapper {
        width: 45%;
        margin-right: 5%;
        float: left;
        margin-bottom: 5%;
    }

    .half-wrapper input {
        width: 80%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    .full-width {
        width: 90%;
    }

    .checkout-title {
        font-size: 1.2rem;
    }

    input {
        border-radius: 3px;
        border: 1px solid #ccc
    }

    .informations {
        text-align: right;
        border-top: 1px solid #ccc
    }

    .more-details-btn {
        margin-bottom: 10px;
        margin-left: 10px;

    }

    .post-preview {
        border: 1px solid #ccc;
        box-shadow: 0 2px 2px #ccc;
        background-color: white;
        width: 90%;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .post-preview {
        width: 350px;
        margin: 10px;
    }

    @media (min-width: 576px) {
        .post-preview {
            width: 350px;
            margin: 10px;
        }
    }

    /*// Medium devices (tablets, 768px and up)*/
    @media (min-width: 768px) {

    }

    /*// Large devices (desktops, 992px and up)*/
    @media (min-width: 992px) {
        .post-preview {
            width: 350px;
            margin: 10px;
        }
    }

    h1 {
        font-size: 1.7rem
    }

    .post-thumbnail {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: cover;
    }

    .post-content {
        padding: 10px;
        text-align: right;
    }

    a:hover .post-content,
    a:active .post-content {
        background-color: #ccc;
    }
</style>
