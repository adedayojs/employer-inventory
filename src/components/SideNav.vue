<template>
  <div class="sidebar d-flex flex-column bg-white mt-1 align-items-center">
    <div>
      <router-link to="##"><i class="fa fa-fw fa-home"></i></router-link>
    </div>
    <div>
      <router-link to="/"><i class="fa fa-fw fa-home"></i></router-link>
    </div>
    <div>
      <router-link to="#"><i class="fa fa-fw fa-home"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar {
  height: 95vh;
  max-width: 5%;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 0.1em;

  div {
    padding: 1em;
    a {
      color: black;
    }
    .router-link-active {
      color: #66db55;
    }
  }
  div:hover {
    background: #f8f9fa;
  }
}
</style>
