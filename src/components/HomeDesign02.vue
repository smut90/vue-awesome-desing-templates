<template>
  <div>
    <NavDesign02 />
    <HeaderDesign02 />
    <MainContent02 />
    <TestimonialDesign02 />
    <FooterDesign01 />
  </div>
</template>

<script>
  import NavDesign02 from './topNavBars/NavDesign02'
  import HeaderDesign02 from './headers/HeaderDesign02'
  import MainContent02 from './mainContents/MainContent02'
  import TestimonialDesign02 from './testimonials/TestimonialDesign02'
  import FooterDesign01 from './footers/FooterDesign01'

  export default {
    name: 'HomeDesign02',
    props: {
      msg: String
    },
    components: {
        NavDesign02,
        HeaderDesign02,
        MainContent02,
        TestimonialDesign02,
        FooterDesign01
    }

}
</script>

<style scoped>
</style>
