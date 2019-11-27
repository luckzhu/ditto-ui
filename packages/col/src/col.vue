<script>
export default {
  name: "DtCol",
  props: {
    span: Number
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      if (parent && parent.$options.componentName !== "DtRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const gap = {};
      if (this.gutter) {
        gap.paddingLeft = `${this.gutter / 2}px`;
        gap.paddingRight = gap.paddingLeft;
      }
      return gap;
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: ["dt-col", this.span ? `dt-col-${this.span}` : ""],
        style: this.style
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss" scoped>
[class*="dt-col-"] {
  float: left;
  box-sizing: border-box;
}
@for $i from 1 through 24 {
  .dt-col-#{$i} {
    // width: #{$i / 24 * 100%};
    width: (1 / 24 * $i * 100) * 1%;
  }
}
</style>