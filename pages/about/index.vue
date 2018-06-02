<template>
    <div>
        <the-banner :background-url="require('~/static/images/aboutUsBanner.jpg')"
                    post-title="About us"></the-banner>
        <section class="about-info">
            <div class="col-xs-10 offset-1 col-lg-4 about-img">
                <img src="" alt="">
            </div>
            <div class="col-xs-10 offset-1 col-lg-7 offset-lg-1">
                <h1>Who we are</h1>
                <p>We are StyleTravel, we were found in 2001 by Bob and Albena Tonchevi. We’re a family business and we value the importance of having a good time together as families and friends. We organize all kinds of trips, some of our specialties are family and group vacations in our wonderful balkan region where we share the magical experience of embracing our culture and getting in touch with the nature that surrounds us.</p>
            </div>
        </section>
        <section class="about-info">
            <div class="col-xs-10 offset-1 col-lg-4 about-img">
                <img src="" alt="">
            </div>
            <div class="col-xs-10 offset-1 col-lg-7 offset-lg-1">
                <h1>What we do</h1>
                <p>Every season and holiday we have themed special trips to locations that are usually tied to the theme either in a historical way or a traditional way. We also organize photography trips with some of our friendly clients that do it professionally where we would have the group activity of taking pictures of the landscapes or landmarks and most importantly have fun together. We’re determined to not be just a travel agency but also educators ! We travel with students from schools all around the capital organized in partnership with the institutions. We value our youth and believe they should be familiar with their beautiful and rich in traditions country.</p>
            </div>
        </section>
        <section class="about-info">
            <div class="col-xs-10 offset-1 col-lg-4 about-img">
                <img src="" alt="">
            </div>
            <div class="col-xs-10 offset-1 col-lg-7 offset-lg-1">
                <h1>Join us!</h1>
                <p>Last but not least we’re huge fans of our athletes , so we organize groups for events around the world where our stars will have matches! We’re proud to say and to see the interest and passion of our people who join us on these adventures to cheer for their success!</p>
            </div>
        </section>
    </div>
</template>

<script>
    import TheBanner from '@/components/UI/banner'

    export default {
        name: "index",
        components: {
            TheBanner
        }
    }
</script>

<style scoped>
    .about-info {

    }

    h1 {
        border-bottom: 1px solid #ccc;
        text-align: center;
    }

</style>