<template>
    <div class="wrapper container-fluid">
        <div class="row" style="padding-top: 100px">
            <div class="col-md-2"></div>
            <div class="col-md-4">
                <div class="row" style="padding-top: 5px">
                    <font-awesome-icon icon="quote-left" size="2x" style="color: #090979;"/>
                </div>
                <div class="row" style="padding-top: 5px">
                    <h3 style="font-family: Gotu Regular;">This platform allowed us to reach heights</h3>
                </div>
                <div class="row" style="padding-top: 5px">
                    <h3 style="font-family: Poppins SemiBold;"> we never thought would be possible </h3>
                </div>
                <div class="row" style="padding-top: 25px">
                    <p style="font-family: Gotu Regular;">
                        <span style="font-size: 25px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer tincidunt auctor auctor. Sed auctor semper nunc, at sagittis urna euismod consectetur. </span>
                        <font-awesome-icon icon="quote-right" size="2x" style="color: #090979;"/>
                    </p>
                </div>
                <div class="row" style="padding-top: 5px">
                    <p style="font-family: Gotu Regular; font-size: 20px; padding-bottom: 0; margin-bottom: 0"><span style="font-family: Poppins SemiBold;">Green Strauts,</span> CEO </p>
                </div>
                <div class="row">
                    <p style="font-family: Gotu Regular; font-size: 20px">Viable Tech </p>
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
                <div class="row" style="padding: 50px;">
                    <div style="background-color: #d7dce0; box-shadow: 0 30px 70px 0 rgba(0,0,0,.07);  width: 500px; height: 350px; position: absolute; top: 20px; left: 20px"></div>
                    <div class="card card-trans" style="width: 500px; height: 350px">
                        <img src="../../assets/wome-ceo.jpg" style="width: 500px; height: 350px;">
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
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
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
