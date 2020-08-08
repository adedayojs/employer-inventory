<template>
  <div class="d-flex mt-1">
    <SideNavComponent />
    <ContainerComponent />
  </div>
</template>

<script>
import SideNavComponent from "@/components/SideNav";
import ContainerComponent from "@/components/Container";
export default {
  name: "Main",
  components: {
    SideNavComponent,
    ContainerComponent
  }
};
</script>

<style lang="scss"></style>
