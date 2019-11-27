

<script>
export default {
  name: "DtRow",
  componentName: "DtRow",
  props: {
    //推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)
    gutter: {
      type: Number,
      default: 16
    },
    //布局模式，可选 flex
    type: {
      type: String,
      default: "flex"
    },
    //flex 布局下的垂直对齐方式：top middle bottom
    align: {
      type: String,
      default: "top"
    },
    //flex 布局下的水平排列方式：start end center space-around space-between
    justify: {
      type: String,
      default: "start"
    }
  },
  computed: {
    style() {
      const { gutter } = this;
      const gap = {};
      if (gutter) {
        gap.marginLeft = `-${gutter / 2}px`;
        gap.marginRight = gap.marginLeft;
      }
      console.log(gap);
      return gap;
    }
  },
  render(h) {
    const { justify, align } = this;
    return h(
      "div",
      {
        class: [
          "dt-row",
          justify !== "start" ? `is-justify-${justify}` : "",
          align !== "top" ? `is-align-${align}` : "",
          { "dt-row-flex": this.type === "flex" }
        ],
        style: this.style
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss" scoped>
.dt-row {
  position: relative;
  height: auto;
  margin-right: 0;
  margin-left: 0;
  zoom: 1;
  display: block;
  box-sizing: border-box;
}
.dt-row-flex {
  display: flex;
  flex-flow: row wrap;
}

.is-justify-end {
  justify-content: flex-end;
}
.is-justify-center {
  justify-content: center;
}
.is-justify-space-around {
  justify-content: space-around;
}
.is-justify-space-between {
  justify-content: space-between;
}

.is-align-middle {
  align-items: center;
}
.is-align-bottom {
  align-items: flex-end;
}
</style>