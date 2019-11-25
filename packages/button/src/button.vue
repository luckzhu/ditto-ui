<template>
  <button
    class="dt-button"
    :disabled="disabled || loading"
    :type="htmlType"
    :class="[
    type ? 'dt-button-' + type : '',
    size ? 'dt-button-' + size : '',
    shape ? 'dt-button-' + shape : '',
    {
      'is-loading': loading,
      'is-disabled': disabled,
      'is-ghost': ghost
    }
  ]"
    @click="handleClick()"
  >
  
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "DtButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: ""
    },
    ghost: Boolean,
    icon: String,
    size: String,
    loading: {
      type: [Boolean, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    htmlType: String
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.dt-button {
  line-height: 1.5;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: 0;
  //链接伪类先后顺序:link — :visited — :hover — :active
  &:hover,
  &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }
  //:active 表示在鼠标按下和松开的这段时间内的样式
  &:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }
}

.dt-button-primary {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  &:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  &:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }
}

.dt-button-danger {
  color: #f5222d;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
  }
  &:active {
    color: #fff;
    background-color: #cf1322;
    border-color: #cf1322;
  }
}

.dt-button-circle {
  border-radius: 50%;
}
</style>