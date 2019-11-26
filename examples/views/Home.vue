<template>
  <div>
    <div class="box">
      <dt-button>按钮</dt-button>
      <dt-button type="primary">按钮</dt-button>
      <dt-button type="danger">按钮</dt-button>
    </div>
    <div class="box">
      <dt-button shape="circle" type="primary" icon="search"></dt-button>
      <dt-button type="primary" icon="search">按钮</dt-button>
      <dt-button type="primary" shape="round" icon="search">按钮</dt-button>
      <dt-button type="primary" icon="search" iconPosition="right">按钮</dt-button>
      <dt-button type="danger" icon="search" loading>加载中</dt-button>
      <dt-button type="danger" icon="search" :loading="{'delay':500}">点击延迟0.5s</dt-button>
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
  display: flex;
  padding: 20px;
  * {
    margin-right: 20px;
  }
}
</style>