<template>
  <div
    :class="[
      `${carbonPrefix}--side-nav__header-navigation`,
      { [`${carbonPrefix}--side-nav__header-divider`]: divider },
    ]"
  >
    <slot />
  </div>
</template>

<script>
import carbonPrefixMixin from '../../mixins/carbon-prefix-mixin';
export default {
  name: 'CvHeaderSideNavItems',
  mixins: [carbonPrefixMixin],
  props: {
    divider: Boolean,
  },
};
</script>
