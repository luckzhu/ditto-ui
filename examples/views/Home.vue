<template>
  <div>
    <div class="box">
      <dt-button >按钮</dt-button>
      <dt-button type="primary">按钮</dt-button>
      <dt-button type="danger">按钮</dt-button>
    </div>
    <div class="box">
      <dt-button shape="circle"  type="primary" icon="search"></dt-button>
      <dt-button type="primary" size="large" icon="search">按钮</dt-button>
      <dt-button type="danger" size="large" icon="search">按钮</dt-button>
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
  * {
    margin-right: 20px;
  }
}
</style>