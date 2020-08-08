<template>
  <section class="">
    <TopNav />
    <MainComponent />
  </section>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import MainComponent from "@/components/Main";
export default {
  name: "Home",
  components: {
    TopNav,
    MainComponent
  }
};
</script>

<style></style>
