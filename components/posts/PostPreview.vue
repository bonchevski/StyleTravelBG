<template>
    <div class="post-preview">
    <!--<nuxt-link :to="postLink" class="post-preview">-->
        <article data-toggle="modal" data-target="#exampleModal" @click="!displayModal">
            <div
                    class="post-thumbnail"
                    :style="{backgroundImage: 'url(' + offerImgLink + ')'}"></div>
            <div class="post-content">
                <h1>{{offerLocation}}</h1>
                <p>{{offerDescription}}</p>
                <p>{{ offerPrice }}</p>
            </div>
        </article>
    <!--</nuxt-link>-->


    <div class="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" v-show="displayModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
            }
        },
        computed: {
            postLink() {
                return this.isAdmin ? '/admin/' + this.id : '/Offers/' + this.id
            }
        },
    }
</script>


<style scoped>
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
