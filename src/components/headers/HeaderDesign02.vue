<template>
    <div class="container-fluid header-area">
        <div id="nav-home" class="row">
            <div class="col-md-6">
                <div class="row" style="border-radius: 0 0 30% 0">
                    <div class="col-md-4"></div>
                    <div class="col-md-8" style="padding-top: 30vh;">
                        <div class="row">
                            <p style="font-family: Gotu Regular; font-weight: 400; font-size: 18px; color: white">TAGLINE</p>
                        </div>
                        <div class="row" style="padding-bottom: 20px">
<!--                            <h1 style="font-family: Poppins SemiBold; color: white"><span>We will help you</span> <span class="text-animate-2">Grow</span></h1>-->
                            <h1 style="font-family: Poppins SemiBold; color: white"><span>We will help you</span> <span>{{headerDisplayContent}}</span></h1>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: white; font-size: 25px; margin-bottom: 5px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p style="font-family: Gotu Regular; color: white; font-size: 25px">Aenean erat neque, interdum</p>
                        </div>
                        <div class="row">
                            <button type="submit" class="btn btn-lg float-left" style="background-color: rgb(9, 9, 121); color: white; font-family: Gotu Regular">
                                <font-awesome-icon icon="paper-plane" /> Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row" style="border-radius: 0 0 0 5%">
                    <div style="background-color: #231b1c; opacity: 0.8; box-shadow: 0 30px 70px 0 rgba(0,0,0,.07); border-radius: 50px 0 0 50px; width: 100%; height: 70vh; position: absolute; top: 95px; right: 30px"></div>
                    <div style="background-color: rgb(1, 1, 23); opacity: 0.8; box-shadow: 0 30px 70px 0 rgba(0,0,0,.07); border-radius: 50px 0 0 50px; width: 100%; height: 70vh; position: absolute; top: 110px; right: 10px"></div>
                    <div class="col-md-12 d-flex" style="justify-content: flex-start;">
                        <img src="../../assets/dashboard-crop.png" style="padding-top: 15vh; background: transparent">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderDesign02",
        data() {
            return{
                headerDisplayContent: '...',
                headerContentList: ['Grow', 'Succeed', 'Prosper']
            }
        },
        mounted() {
            this.typeDynamicHeaderContent();
        },
        methods: {
            async typeDynamicHeaderContent() {
                const wordList = [
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'G',
                        time: 500,
                    },
                    {
                        text: 'Gr',
                        time: 200,
                    },
                    {
                        text: 'Gro',
                        time: 200,
                    },
                    {
                        text: 'Grow',
                        time: 1000,
                    },
                    {
                        text: 'Gro',
                        time: 250,
                    },
                    {
                        text: 'Gr',
                        time: 200,
                    },
                    {
                        text: 'G',
                        time: 100,
                    },
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'S',
                        time: 500,
                    },
                    {
                        text: 'Su',
                        time: 200,
                    },
                    {
                        text: 'Suc',
                        time: 200,
                    },
                    {
                        text: 'Succ',
                        time: 200,
                    },
                    {
                        text: 'Succe',
                        time: 150,
                    },
                    {
                        text: 'Succee',
                        time: 150,
                    },
                    {
                        text: 'Succeed',
                        time: 1000,
                    },
                    {
                        text: 'Succee',
                        time: 200,
                    },
                    {
                        text: 'Succe',
                        time: 150,
                    },
                    {
                        text: 'Succ',
                        time: 140,
                    },
                    {
                        text: 'Suc',
                        time: 130,
                    },
                    {
                        text: 'Su',
                        time: 120,
                    },
                    {
                        text: 'S',
                        time: 100,
                    },
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'P',
                        time: 500,
                    },
                    {
                        text: 'Pr',
                        time: 200,
                    },
                    {
                        text: 'Pro',
                        time: 200,
                    },
                    {
                        text: 'Pros',
                        time: 200,
                    },
                    {
                        text: 'Prosp',
                        time: 150,
                    },
                    {
                        text: 'Prospe',
                        time: 150,
                    },
                    {
                        text: 'Prosper',
                        time: 1000,
                    },
                    {
                        text: 'Prospe',
                        time: 200,
                    },
                    {
                        text: 'Prosp',
                        time: 200,
                    },
                    {
                        text: 'Pros',
                        time: 150,
                    },
                    {
                        text: 'Pro',
                        time: 130,
                    },
                    {
                        text: 'Pr',
                        time: 120,
                    },
                    {
                        text: 'P',
                        time: 100,
                    }
                ];

                let i = 0;
                while (i < wordList.length) {
                    this.headerDisplayContent = wordList[i].text;
                    await this.wait(wordList[i].time);
                    if (i === (wordList.length - 1)) {
                        i = 0;
                    } else {
                        i = i + 1;
                    }
                }

            },
            wait(ms) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, ms)
                })
            },
            myMove() {
                const wordList = [
                    {
                        text: 'G',
                        timeout: 1000,
                    }
                ];
                let playBackIndex = 0;
                const numEntries = wordList.length;
                let startTime = new Date();
                let endMillis = 0;
                let text;
                let currentText;

                if (numEntries > 0) {
                    endMillis = wordList[playBackIndex].timeout;
                    text = wordList[playBackIndex].text;
                    console.log('HERE =>', text)
                }

                let id = setInterval(() => { frame();}, 1);

                function frame() {
                    // let elem = document.getElementById("container");
                    let currentTime = new Date();
                    if ((playBackIndex < numEntries)) {
                        while ((currentTime - startTime) > endMillis &&
                        (playBackIndex < numEntries)) {
                            // endMillis = wordList[playBackIndex].timeout;
                            // text = wordList[playBackIndex].text;
                            playBackIndex++;
                            console.log('HERE 2 ==> ');
                        }
                        console.log('HERE 3 ==> ');
                        if (text !== currentText) {
                            // elem.style.background = text;
                            this.headerDisplayContent = text;
                            currentText = text;
                        }
                    } else {
                        clearInterval(id);
                    }
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
    .header-area {
        min-height: 100vh;
        background-color: black;
        /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%);*/
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
