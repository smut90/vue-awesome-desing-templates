<template>
    <nav class="navbar fixed-top navbar-expand-lg" style="background-color: black;">
        <div class="container-fluid navbar-area">
            <a class="navbar-brand" href="#" style="font-family: Poppins SemiBold; font-size: 35px; color: white; padding-bottom: 10px; margin-bottom: 0">
                Brand
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="font-family: Gotu Regular;">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" @click.stop.prevent="setActiveTab('home')">
                        <router-link class="nav-link" to="" v-scroll-to="'#nav-home'">
                            <p style="color: white; padding-bottom: 0; margin-bottom: 0;">
                                Home
                                <span v-if="activeTab === 'home'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('services')">
                        <router-link class="nav-link" to="" v-scroll-to="'#nav-services'">
                            <p style="color: white; padding-bottom: 0; margin-bottom: 0;">
                                Services
                                <span v-if="activeTab === 'services'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('about')">
                        <router-link class="nav-link" to="" v-scroll-to="'#nav-about'">
                            <p style="color: white; padding-bottom: 0; margin-bottom: 0;">
                                About
                                <span v-if="activeTab === 'about'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                    <li class="nav-item" @click.stop.prevent="setActiveTab('contact')">
                        <router-link class="nav-link" to="" v-scroll-to="'#nav-contact'">
                            <p style="color: white; padding-bottom: 0; margin-bottom: 0;">
                                Contact us
                                <span v-if="activeTab === 'contact'">
                                    <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">
                                </span>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavDesign02",
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
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
    }
    .header-area {
        max-width: 100%;
        min-height: 8vh;
        margin-right: auto;
        margin-left: auto;
    }
    .navbar-area {
        max-width: 75%;
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
