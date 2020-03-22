<template>
    <div class="container-fluid header-area">
        <div id="nav-home" class="row">
            <div class="col-md-6">
                <div class="row" style="background-color: white; height: 75vh; border-radius: 0 0 0 5%">
                    <div class="col-md-12 animated zoomIn delay-1s d-flex" style="justify-content: center;">
                        <img src="../../assets/img2.png" style="padding-top: 15vh;">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row" style="background-color: white; height: 75vh; border-radius: 0 0 30% 0">
                    <div class="col-md-10" style="padding-top: 30vh;">
                        <div class="row">
                            <h1 style="font-family: Poppins SemiBold;"><span>We will help you</span> <span class="text-animate-2">Grow</span></h1>
                        </div>
                        <div class="row">
                            <p style="font-family: Poppins Regular; font-weight: 400; font-size: 20px;">Tag line goes here</p>
                        </div>
                        <div class="row">
                            <p style="font-family: Poppins Regular; color: #7d7d69">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer tincidunt auctor auctor. Sed auctor semper nunc, at sagittis urna euismod consectetur.
                                Sed feugiat vestibulum enim, ornare laoreet tellus egestas efficitur. Aenean erat neque, interdum
                                eget sagittis at, ultrices vitae magna. Nam nisi risus, tempus nec diam sed, porttitor sodales metus.
                                Ut commodo lobortis leo eu malesuada. Fusce ac imperdiet velit. Fusce nec dolor eu justo ullamcorper aliquam at vel arcu.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderDesign01",
        data() {
            return{
                headerDisplayContent: 'Grow',
                headerContentList: ['Grow', 'Succeed', 'Prosper']
            }
        },
        methods: {
            typeDynamicHeaderContent() {


            },
            wait(ms) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, ms)
                })
            },
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
    .header-area {
        height: 90vh;
        /*background-color: rgb(243, 246, 249);*/
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%);
    }
    .text-animate-1 {
        animation: showup 5s 5s infinite;
    }
    .text-animate-2 {
        animation: showup 15s 10s infinite;
    }
    @keyframes showup {
        0% {
            opacity:0;
        }
        20% {
            opacity:1;
            border-bottom: 5px solid yellow;
        }
        80% {
            opacity:1;
            border-bottom: 5px solid yellow;
        }
        100% {
            opacity:0;
        }
    }
</style>
