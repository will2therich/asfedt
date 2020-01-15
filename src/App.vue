<template>
  <div class="v-app">
    <q-layout view="lHh Lpr lFf">
      <top-nav-bar></top-nav-bar>
      <intro-section></intro-section>
      <officer-section></officer-section>
      <priorities-section></priorities-section>
      <Footer></Footer>
    </q-layout>
  </div>
</template>

<script>
import TopNavBar from "./components/structual/TopNavBar";
import IntroSection from "./components/sections/IntroSection";
import OfficerSection from "./components/sections/OfficerSection";
import PrioritiesSection from "./components/sections/PrioritiesSection";
import Footer from "./components/structual/Footer";

export default {
  name: "LayoutDefault",
  components: {
    TopNavBar,
    IntroSection,
    OfficerSection,
    PrioritiesSection,
    Footer
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style></style>
