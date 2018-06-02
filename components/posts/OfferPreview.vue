<template>
    <div>
        <div class="post-preview">
            <!--<nuxt-link :to="postLink" class="post-preview">-->
            <article data-toggle="modal" data-target="#exampleModal" @click="!displayModal">
                <div
                        class="post-thumbnail"
                        :style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>
                <div class="post-content">
                    <h1>{{offerLocation}}</h1>
                    <p>{{offerDescription | snippet}}...</p>
                    <p>{{ offerPrice }}</p>
                </div>
            </article>
            <!--</nuxt-link>-->


            <div class="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                 v-show="displayModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{ offerLocation }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div
                                    class="post-thumbnail"
                                    :style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>
                            <h1>{{offerLocation}}</h1>
                            <p>{{ offerDescription }}</p>

                            <div class="informations">
                            <p>Date: {{offerDateDay}} {{offerDateMonth}} {{offerDateYear}}</p>
                            <p>Price: {{ offerPrice }}</p>
                            <p class="spots">Available spots: {{ offerSpots }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <nuxt-link :to="postLink" type="button" class="btn btn-primary">Save changes</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'PostPreview',
        data() {
            return {
                displayModal: false
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
            }
        },
        computed: {
            postLink() {
                return this.isAdmin ? '/admin/' + this.id : '/Offers/' + this.id
            }
        },
        filters: {
            snippet: function (value) {
                return value.slice(0, 70)
            }
        }
    }
</script>


<style scoped>
    .informations {
        text-align: right;
        border-top: 1px solid #ccc
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

    @media (min-width: 850px) {
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
