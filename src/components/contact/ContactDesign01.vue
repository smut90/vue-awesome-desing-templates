<template>
    <div class="wrapper container-fluid">
        <div id="nav-contact" class="row" style="padding-bottom: 40px">
            <div class="col-md-2"></div>
            <div class="col-md-4" style="padding-top: 80px">
                <div class="row">
                    <h2 style="font-family: Poppins SemiBold; font-weight: 100">Contact Us</h2>
                </div>
                <div class="row" style="padding-top: 5px">
                    <p style="font-family: Poppins Regular;">Find us, send your questions and we will get back to you</p>
                </div>
                <div class="row" style="padding-top: 20px">
                    <h4 style="font-family: Poppins SemiBold;">Leave a Message</h4>
                </div>
                <div class="row" style="padding-top: 15px">
                    <div class="col-md-10">
                        <label for="name" style="padding-bottom: 0; margin-bottom: 2px; font-size: 14px; color: rgb(135, 146, 162); font-family: Poppins Regular">Name</label>
                        <input id="name" class="form-control" type="text" maxlength="32"
                               style=" border-style: none;color: #c1c9d2"
                               placeholder="Enter your name">
                    </div>
                </div>
                <div class="row" style="padding-top: 25px">
                    <div class="col-md-10">
                        <label for="email" style="padding-bottom: 0; margin-bottom: 2px; font-size: 14px; color: rgb(135, 146, 162); font-family: Poppins Regular">Email</label>
                        <input id="email" class="form-control" type="text" maxlength="32"
                               style=" border-style: none;color: #c1c9d2"
                               placeholder="Enter your email address">
                    </div>
                </div>
                <div class="row" style="padding-top: 25px">
                    <div class="col-md-12">
                        <label for="message" style="padding-bottom: 0; margin-bottom: 2px; font-size: 14px; color: rgb(135, 146, 162); font-family: Poppins Regular">Message</label>
                        <textarea class="form-control" id="message" rows="4"
                                  style=" border-style: none;color: #c1c9d2"
                                  placeholder="Message">
                        </textarea>
                    </div>
                </div>
                <div class="row" style="padding-top: 25px">
                    <div class="col-md-12">
                        <button type="submit" class="btn float-left" style="background-color: rgb(9, 9, 121); color: white; font-family: Poppins SemiBold">
                            <font-awesome-icon icon="paper-plane" /> Send Message
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style="padding-top: 100px">
                <div id="map"></div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="container" style="padding-bottom: 100px; border-top: 1px solid #cec6c6;">
            <div class="row" style="padding-top: 25px">
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-1">
                            <font-awesome-icon icon="map-pin" size="2x" style="color: red" />
                        </div>
                        <div class="col-md-11">
                            <p style="padding-bottom: 0; margin-bottom: 0; font-family: Poppins Regular">ABC St, Sydney</p>
                            <p style="font-family: Poppins Regular">5786 Australia.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-2">
                            <font-awesome-icon icon="envelope-open" size="2x" />
                        </div>
                        <div class="col-md-10">
                            <p style="padding-bottom: 0; margin-bottom: 0; font-family: Poppins Regular">support@xyz.com.au</p>
                            <p style="font-family: Poppins Regular">helpdesk@xyz.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-1">
                            <font-awesome-icon icon="phone-volume" size="2x" style="color: #090979"/>
                        </div>
                        <div class="col-md-11">
                            <p style="padding-bottom: 0; margin-bottom: 0; padding-left: 10px; font-family: Poppins Regular">+333 123-789-111</p>
                            <p style="padding-left: 10px; font-family: Poppins Regular">+118 758-212-953</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { init } from '../../util';

    export default {
        name: "ContactDesign01",
        async mounted() {
            try {
                const google = await init();

                let myLatLng = {lat: -25.363, lng: 131.044};

                let map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 6,
                    center: myLatLng,
                });

                new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });

            } catch (error) {
                console.error(error);
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../assets/Poppins-SemiBold.ttf");
    }
    @font-face {
        font-family: "Poppins Regular";
        src: url("../../assets/Poppins-Regular.ttf");
    }
    #map {
        height: 100%;
    }
    .wrapper {
        min-height: 50vh;
        background-color: #efefe8;
    }
</style>
