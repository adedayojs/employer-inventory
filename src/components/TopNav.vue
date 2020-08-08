<template>
  <div>
    <nav class="nav bg-white p-2 justify-content-between">
      <div href="#" class="nav-item ">
        <img src="@/assets/img/getchange.png" alt="" class="" />
      </div>
      <div class="mr-4">
        <img
          src="https://via.placeholder.com/150"
          class="img-thumbnail round"
        />
        <b-dropdown text="Hi, Joshua   " variant="transparent" class="">
          <b-dropdown-item>Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bold {
  font-weight: bold;
}
.round {
  height: 2em;
  width: 2em;
  border-radius: 100% !important;
}
</style>
