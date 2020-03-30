<template>
    <div class="container" style="padding-top: 50px; margin-top: 20px">
        <div class="row">
            <div id="nav-portfolio" class="col-md-12 d-flex" style="justify-content: center;">
                <h2 style="font-family: Poppins SemiBold;">Portfolio</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex" style="justify-content: center;">
                <p style="font-family: Poppins Regular;">see the amazing things I have to offer</p>
            </div>
        </div>

        <div class="row" style="padding-top: 20px; padding-bottom: 20px">
            <div class="card-deck"
                 data-aos="fade-up"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
            >
                <div class="card card-shadow"
                     @mouseover="mouseOver('1')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '1'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Shorter description</p>
                    </div>
                </div>
                <div class="card card-shadow"
                     @mouseover="mouseOver('2')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '2'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card card-shadow"
                     @mouseover="mouseOver('3')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '3'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 20px; padding-bottom: 20px">
            <div class="card-deck"
                 data-aos="fade-up"
                 data-aos-delay="75"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
            >
                <div class="card card-shadow"
                     @mouseover="mouseOver('4')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '4'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card card-shadow"
                     @mouseover="mouseOver('5')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '5'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card card-shadow"
                     @mouseover="mouseOver('6')"
                     @mouseout="mouseOut()"
                     :class="{'card-hover': isHovering && hoverCard === '6'}"
                >
                    <img class="card-img-top" src="../../assets/header-main-image.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PortfolioDesign01",
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
    .card-shadow {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    }
    .card-1 {
        animation: moveRight 2s;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    }
    .card-hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0 12px 14px 10px;
    }
    @keyframes moveRight {
        0% {
            opacity:0;
            margin-left: -100px;
        }
        100% {
            opacity:1;
        }
    }

</style>
