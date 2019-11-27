<template>
  <button
    class="dt-button"
    :disabled="disabled || isLoading"
    :type="htmlType"
    :class="[
    type ? `dt-button-${type}` : '',
    size ? `dt-button-${size}` : '',
    shape ? `dt-button-${shape}` : '',
    iconPosition ? `dt-button-${iconPosition}` :'',
    {
      'is-loading': isLoading,
      'is-disabled': disabled,
      'is-ghost': ghost
    }
    ]"
    @click="handleClick()"
  >
    <dt-icon :name="icon" v-if="icon && !isLoading"></dt-icon>
    <dt-icon name="loading" class="loading" v-if="isLoading"></dt-icon>
    <span v-if="$slots.default" class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import DtIcon from "../../icon/src/icon";
export default {
  components: { DtIcon },
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
    iconPosition: {
      type: String,
      default: "left",
      //验证 iconPosition 的值只能是left或right中一个
      validator(value) {
        return ["left", "right"].indexOf(value) !== -1;
      }
    },
    size: String,
    loading: {
      type: [Boolean, Object], //表示loading既可以是布尔值，也可以是对象
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    htmlType: String
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {},
  mounted() {
    const { loading } = this;
    this.isLoading = loading && !loading.delay;
  },
  methods: {
    handleClick(e) {
      if (this.loading.delay) {
        const { delay } = this.loading;
        setTimeout(() => {
          this.isLoading = true;
        }, delay);
      }
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
  &:focus,
  &.is-loading {
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
  &:focus,
  &.is-loading {
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
  color: #fff;
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  &:hover,
  &:focus,
  &.is-loading {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
  &:active {
    color: #fff;
    background-color: #cf1322;
    border-color: #cf1322;
  }
}

.is-loading {
  pointer-events: none;
}
.loading {
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dt-button-right {
  display: flex;
  align-items: center;
  .svg-icon {
    order: 2;
    margin-left: 4px;
  }
  .button-content {
    order: 1;
  }
}
.dt-button-left {
  display: flex;
  align-items: center;
  .svg-icon {
    order: 1;
    margin-right: 4px;
  }
  .button-content {
    order: 2;
  }
}
.dt-button-circle {
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
  .svg-icon {
    margin: 0;
  }
}
.dt-button-round {
  padding: 0 16px;
  border-radius: 32px;
}
</style>