<template>
  <div>
    <NavDesign01 />
<!--    <div class="container">-->
<!--      <WhatsappConnect />-->
<!--    </div>-->
      <HeaderDesign01 />
      <MainContent01 />
      <PortfolioDesign01 />
      <TestimonialDesign01 />
      <TeamDesign01 />
  </div>
</template>

<script>
  import NavDesign01 from './topNavBars/NavDesign01'
  // import WhatsappConnect from './WhatsappConnect'
  import HeaderDesign01 from './headers/HeaderDesign01'
  import MainContent01 from './mainContents/MainContent01'
  import PortfolioDesign01 from './portfolios/PortfolioDesign01'
  import TestimonialDesign01 from './testimonials/TestimonialDesign01'
  import TeamDesign01 from './team/TeamDesign01'

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {
        NavDesign01,
        // WhatsappConnect,
        HeaderDesign01,
        MainContent01,
        PortfolioDesign01,
        TestimonialDesign01,
        TeamDesign01
    }

}
</script>

<style scoped>
</style>
