<template>
  <div class="sidebar d-none d-md-flex flex-column bg-white align-items-center">
    <router-link to="login">
      <i class="fa fa-fw fa-th-large"></i>
    </router-link>

    <router-link to="/">
      <i class="fa fa-fw fa-home"></i>
    </router-link>

    <router-link to="signup">
      <i class="fa fa-fw fa-card"></i>
    </router-link>
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

  a {
    padding: 2em 1em;
    color: rgb(117, 105, 105);
  }
  .router-link-exact-active {
    color: #66db55;
    border-left: solid 0.3em #66db55;
  }
  a:hover {
    background: #f8f9fa;
  }
}
</style>
