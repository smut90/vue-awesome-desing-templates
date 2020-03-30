<template>
    <div id="nav-contact" class="wrapper">
        <div class="container" style="min-height: 60vh">
            <div class="row" style="padding-top: 20vh">
                <div class="col-md-2"></div>
                <div class="col-md-8 d-flex" style="justify-content: flex-start">
                    <p style="font-size: 45px; font-family: Poppins SemiBold">Write to us with your enquiries</p>
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-6">
                    <input class="form-control" type="text" placeholder="Email" style="border: 1px solid black; height: 45px">
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn float-left" style="background-color: rgb(9, 9, 121); color: white; font-family: Gotu Regular; height: 45px;">
                        Get Started
                    </button>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
        <div class="container-fluid" style="background-color: black; min-height: 30vh">
            <div class="row" style="padding-top: 40px">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2" style="color: white">
                            <h5 style="font-family: Poppins SemiBold">Products</h5>
                            <p style="font-family: Gotu Regular">Studio</p>
                            <p style="font-family: Gotu Regular">Alpha</p>
                            <p style="font-family: Gotu Regular">UI Kit</p>
                            <p style="font-family: Gotu Regular">Analytics</p>
                            <p style="font-family: Gotu Regular">Chat</p>
                        </div>
                        <div class="col-md-2" style="color: white">
                            <h5 style="font-family: Poppins SemiBold">Community</h5>
                            <p style="font-family: Gotu Regular">Git</p>
                            <p style="font-family: Gotu Regular">Open Source</p>
                            <p style="font-family: Gotu Regular">Android</p>
                        </div>
                        <div class="col-md-2" style="color: white">
                            <h5 style="font-family: Poppins SemiBold">Support</h5>
                            <p style="font-family: Gotu Regular">Help Desk</p>
                            <p style="font-family: Gotu Regular">Terms of use</p>
                            <p style="font-family: Gotu Regular">Privacy policy</p>
                        </div>
                        <div class="col-md-2" style="color: white">
                            <h5 style="font-family: Poppins SemiBold">Company</h5>
                            <p style="font-family: Gotu Regular">About</p>
                            <p style="font-family: Gotu Regular">Customers</p>
                            <p style="font-family: Gotu Regular">Career</p>
                            <p style="font-family: Gotu Regular">Pricing</p>
                        </div>
                        <div class="col-md-4 d-flex" style="justify-content: flex-end">
                            <div class="container-fluid">
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4"></div>-->
<!--                                    <div class="col-md-2">-->
<!--                                        <p>fb</p>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-2">-->
<!--                                        <p>fb</p>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-2">-->
<!--                                        <p>fb</p>-->
<!--                                    </div>-->
<!--                                    <div class="col-md-2">-->
<!--                                        <p>fb</p>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <div class="row">
                                    <div class="col-md-12" style="color: #7d7d69">
                                        <p style="float: right; font-size: 15px; padding-bottom: 0; margin-bottom: 0">© 2021 GID, Inc. All Rights Reserved.</p>
                                        <p style="float: right; font-size: 15px">GID® is the property of GID, Inc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterDesign01"
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 0;
        margin-bottom: 0;
    }
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

</style>
