<template>
  <div>
    <div class="box">
      <dt-row :gutter="16">
        <dt-col :span="12">
          <div class="grid-content">1</div>
        </dt-col>
        <dt-col :span="12">
          <div class="grid-content">2</div>
        </dt-col>
      </dt-row>

      <dt-row type="flex" :gutter="16" align="middle">
        <dt-col :span="8">
          <div class="grid-content">1</div>
        </dt-col>
        <dt-col :span="8">
          <div class="grid-content">2</div>
        </dt-col>
        <dt-col :span="8">
          <div class="grid-content">3</div>
        </dt-col>
      </dt-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.box {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.dt-row {
  margin-bottom: 20px;
}
.grid-content {
  background: #ccc;
  height: 35px;
}
</style>