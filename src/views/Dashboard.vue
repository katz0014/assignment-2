<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <h3>Welcome {{ forms.name }}!</h3>
      <p>You signed up with the {{ forms.email }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["forms"])
  }
};
</script>
<style lang="scss">
.dashboard {
  text-align: left;
  margin: auto;
  padding-top: 80px;
}
.dashboard-container {
  border-radius: 10px;
  text-align: center;
  border: 1px solid purple;
  width: 50%;
  margin: 0 auto;
}

.dashboard-container .button {
  padding: 10px;
  margin-top: 30px;
}

.dashboard-container p {
  margin-bottom: 15px;
}
</style>
