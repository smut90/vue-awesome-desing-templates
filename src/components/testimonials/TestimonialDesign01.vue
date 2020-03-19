<template>
    <div class="wrapper container-fluid">
        <div class="row" style="padding-top: 100px">
            <div class="col-md-2"></div>
            <div class="col-md-4">
                <div class="row">
                    <h6 style="font-family: Poppins Regular; font-weight: 100">TESTIMONIALS</h6>
                </div>
                <div class="row" style="padding-top: 5px">
                    <h2 style="font-family: Poppins SemiBold;">What clients have to say about Us</h2>
                </div>
                <div class="row" style="padding-top: 5px; padding-bottom: 5px;">
                    <div class="col-md-4" style="border-bottom: 2px solid #090979"></div>
                </div>
                <div class="row" style="padding-top: 25px">
                    <p style="font-family: Poppins Regular;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer tincidunt auctor auctor. Sed auctor semper nunc, at sagittis urna euismod consectetur.
                        Sed feugiat vestibulum enim, ornare laoreet tellus egestas efficitur.
                    </p>
                    <p style="font-family: Poppins Regular;">
                        Aenean erat neque, interdum
                        eget sagittis at, ultrices vitae magna. Nam nisi risus, tempus nec diam sed, porttitor sodales metus.
                    </p>
                </div>
                <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
                    <p>
                        <span @click.stop.prevent="sliderMoveBack()"><font-awesome-icon icon="arrow-circle-left" size="2x" style="color: #090979; cursor: pointer"/></span>
                        <span> </span>
                        <span @click.stop.prevent="sliderMoveFront()"><font-awesome-icon icon="arrow-circle-right" size="2x" style="color: #090979; cursor: pointer"/></span>
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row" style="padding: 50px; margin-top: 25px">
                    <div style="background-color: #d7dce0; box-shadow: 0 30px 70px 0 rgba(0,0,0,.07); border-radius: 25px; width: 50vh; height: 30vh; position: absolute; top: 50px; left: 20px"></div>
                    <div class="card card-trans" style="width: 80vh; border-radius: 25px; transition: transform 800ms ease 0s">
                        <div class="card-body">
                            <div class="row" style="padding: 20px">
                                <p class="card-text" style="font-size: 20px; font-family: Poppins Regular;">
                                    <span style="font-size: 25px">"</span>{{slider[this.currentSliderIdx].quote}}<span style="font-size: 25px">"</span>
                                </p>
                            </div>
                            <hr />
                            <div class="row" style="padding-top: 5px">
<!--                                <div class="col-md-3 d-flex" style="align-content: center">-->
<!--                                    <img :src="slider[this.currentSliderIdx].img"   width="70" height="70" alt="" style="border-radius:50%;">-->
<!--                                </div>-->
                                <div class="col-md-12" style="padding-top: 5px">
                                    <p style="font-size: 20px; padding-bottom: 0; margin-bottom: 0; font-family: Poppins SemiBold;">{{slider[this.currentSliderIdx].name}}</p>
                                    <p style="font-size: 12px; font-family: Poppins Regular;">{{slider[this.currentSliderIdx].title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestimonialDesign01",
        data(){
            return {
                currentSliderIdx: 0,
                slider: [
                    {
                        idx: 0,
                        quote: 'This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.',
                        img: '../../assets/face-pic4.png',
                        name: 'Mr. James Mccovy',
                        title: 'CEO NextTick'
                    },
                    {
                        idx: 1,
                        quote: 'Aenean erat neque, interdum eget sagittis at, ultrices vitae magna. Nam nisi risus, tempus nec diam sed, porttitor sodales metus.',
                        img: '../../assets/face-pic4.png',
                        name: 'Mr. Paul Carder',
                        title: 'CEO Tech Designs'
                    },
                    {
                        idx: 2,
                        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt auctor auctor. Sed auctor semper nunc, at sagittis urna euismod consectetur.',
                        img: '../../assets/face-pic4.png',
                        name: 'Mrs. Jane Green',
                        title: 'CMO Future-Global'
                    }
                ]
            }
        },
        methods: {
            sliderMoveBack() {
                const currentSlider = this.currentSliderIdx;
                const sliderFirstIndex = 0;
                const sliderLastIndex = this.slider.length > 0 ? (this.slider.length - 1) : 0;
                if (currentSlider !== sliderFirstIndex) {
                    this.currentSliderIdx = currentSlider - 1;
                } else {
                    this.currentSliderIdx = sliderLastIndex;
                }
            },
            sliderMoveFront() {
                const currentSlider = this.currentSliderIdx;
                const sliderLastIndex = this.slider.length > 0 ? (this.slider.length - 1) : 0;
                if (currentSlider !== sliderLastIndex) {
                    this.currentSliderIdx = currentSlider + 1;
                } else {
                    this.currentSliderIdx = 0;
                }
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
        background-color: #efefe8;
    }
    .card-trans {
        animation: change 2s;
    }
    @keyframes change {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }

</style>
