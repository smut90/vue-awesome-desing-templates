<template>
    <div class="header-area container-fluid">
        <nav class="navbar-area navbar fixed-top navbar-expand-lg ">
            <a class="navbar-brand" href="#" style="font-family: Poppins SemiBold; font-size: 20px; color: rgb(107, 107, 93)">
                <img src="../../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                Brand
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="font-family: Poppins SemiBold;">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" @click.stop.prevent="setActiveTab('home')">
                        <router-link class="nav-link" to="">
                            <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                                Home
                                <span v-if="activeTab === 'home'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('services')">
                        <router-link class="nav-link" to="">
                            <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                                Services
                                <span v-if="activeTab === 'services'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('portfolio')">
                        <router-link class="nav-link" to="">
                            <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                                Portfolio
                                <span v-if="activeTab === 'portfolio'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('about')">
                        <router-link class="nav-link" to="">
                            <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                                About
                                <span v-if="activeTab === 'about'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "NavDesign01",
        data() {
            return {
                activeTab: 'home'
            }
        },
        methods: {
            setActiveTab(tab) {
                this.activeTab = tab;
            },
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../assets/Poppins-SemiBold.ttf");
    }
    .header-area {
        max-width: 100%;
        min-height: 8vh;
        margin-right: auto;
        margin-left: auto;
    }
    .navbar-area{
        max-width: 60%;
        min-height: 8vh;
        margin-right: auto;
        margin-left: auto;
    }
    .active{
        border-bottom: 3px solid #dcd0c2;
    }
    .non-active {
        border-bottom: none;
    }
</style>
