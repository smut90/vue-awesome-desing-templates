<template>
    <div class="wrapper container">
        <div class="content-wrapper" style="padding-top: 70px; padding-bottom: 100px">
            <div class="row">
                <div id="nav-about" class="col-md-12 d-flex" style="justify-content: center">
                    <h2 style="font-family: Poppins SemiBold;">Our Team</h2>
                </div>
            </div>
            <div class="row" style="padding-top: 5px">
                <div class="col-md-12 d-flex" style="justify-content: center">
                    <p style="font-family: Poppins Regular;">We give the best support you need to transform your business to the next level</p>
                </div>
            </div>
            <div class="row" style="padding-top: 50px">
                <div class="card-deck">
                    <div class="card card-shadow"
                         data-aos="fade-up-right"
                         data-aos-delay="10"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                    >
                        <img src="../../assets/face-pic1.jpg" class="card-img-top" alt="..." style="height: 500px">
                        <div class="card-body"
                             @mouseover="mouseOver('1')"
                             @mouseout="mouseOut()"
                             :class="{'card-hover': isHovering && hoverCard === '1'}"
                             style="position: absolute; bottom: 0; z-index: 5; width: 100%; color: white"
                        >
                            <h5 class="card-title" style="font-family: Poppins SemiBold; padding-bottom: 0; margin-bottom: 0;">Arthur Mccoy</h5>
                            <p class="card-text" style="font-family: Poppins Regular;">CTO</p>
                        </div>
                    </div>
                    <div class="card card-shadow"
                         data-aos="fade-up"
                         data-aos-delay="10"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                    >
                        <img src="../../assets/face-pic2.jpeg" class="card-img-top" alt="..." style="height: 500px">
                        <div class="card-body"
                             @mouseover="mouseOver('2')"
                             @mouseout="mouseOut()"
                             :class="{'card-hover': isHovering && hoverCard === '2'}"
                             style="position: absolute; bottom: 0; z-index: 5; width: 100%; color: white"
                        >
                            <h5 class="card-title" style="font-family: Poppins SemiBold; padding-bottom: 0; margin-bottom: 0">Lisa Eliet</h5>
                            <p class="card-text" style="font-family: Poppins Regular;">Sr. Tech Lead</p>
                        </div>
                    </div>
                    <div class="card card-shadow"
                         data-aos="fade-up-left"
                         data-aos-delay="10"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                    >
                        <img src="../../assets/face-pic6.jpg" class="card-img-top" style="height: 500px">
                        <div class="card-body"
                             @mouseover="mouseOver('3')"
                             @mouseout="mouseOut()"
                             :class="{'card-hover': isHovering && hoverCard === '3'}"
                             style="position: absolute; bottom: 0; z-index: 5; width: 100%"
                        >
                            <h5 class="card-title" style="font-family: Poppins SemiBold; padding-bottom: 0; margin-bottom: 0">Tom Ragen</h5>
                            <p class="card-text" style="font-family: Poppins Regular;">Sr. Database Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamDesign01",
        data(){
            return {
                isHovering: false,
                hoverCard: null,
            }
        },
        methods: {
            mouseOver(cardNo){
                this.hoverCard = cardNo;
                this.isHovering = true;
            },
            mouseOut() {
                this.hoverCard = null;
                this.isHovering = false
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
    .wrapper {
        min-height: 50vh;
    }
    .card-shadow {
        box-shadow: rgba(0, 0, 0, 0.15) 0 12px 14px 10px;
    }
    .card-hover {
        background: linear-gradient(to right,#0067f4 0%,#2bdbdc 100%);
        color: white;
        padding-top: 50px;
        transition: all .3s ease-out 0s;
    }
</style>
