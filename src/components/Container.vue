<template>
  <div class="container mx-4 pt-5 col">
    <div class="row justify-content-between m-4">
      <div class="col-md-8">
        <h6>Emloyees</h6>
      </div>
      <div class="col-md-4">
        <div class="add-new">
          <button class="ml-auto btn btn-small px-5 color">Add New</button>
        </div>
      </div>
    </div>

    <div class="row justify-content-between m-4 py-4 px-2 bg-white rounded">
      <div class="col-md-7">
        <h5>Josh Bakery Ventures</h5>
      </div>
      <div class="col-md-5">
        <div class="add-new">
          <span>62, Bode Thomas, Surulere, Lagos</span>
        </div>
      </div>
    </div>

    <div class="row justify-content-between m-4">
      <div class="col-md-8">
        <div class="row">
          <div class="col" style="max-width:fit-content">
            <select
              class="p-1 role text-secondary border-3 border-secondary small"
            >
              <option value=""> Change Role</option>
              <option>Admin</option>
              <option>Staff</option>
            </select>
            <button class="btn btn-sm color ml-2">Change</button>
          </div>

          <div class="col-6">
            <div class="input-group small">
              <input
                type="text"
                class="form-control small"
                placeholder="Enter staff name here"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-sm btn-outline-secondary small"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="add-new">
          <span class="img-thumbnail">1</span> of 2 <span> </span>
          <span> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  components: {}
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.color {
  color: white !important;
  background-color: $green !important;
}
.add-new {
  margin-left: auto;
  width: fit-content;
}
.role {
  //
  color: inherit;
}
</style>
