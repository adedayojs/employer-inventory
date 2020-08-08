<template>
  <section class="">
    <TopNav />
    <div class="d-flex mt-1">
      <SideNavComponent />
      <router-view />
    </div>
  </section>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import SideNavComponent from "@/components/SideNav";
export default {
  name: "Home",
  components: {
    TopNav,
    SideNavComponent
  }
};
</script>

<style></style>
