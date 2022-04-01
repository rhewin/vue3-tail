<template>
  <div class="grid grid-cols-3 gap-2 text-center mb-4">
    <div class="bg-highEmphasis-dark text-highEmphasis-light">bg-highEmphasis-dark</div>
    <div class="bg-medEmphasis-dark" title="bg-medEmphasis-dark"></div>
    <div class="bg-lowEmphasis-dark" title="bg-lowEmphasis-dark"></div>
    <div class="bg-highEmphasis-light text-highEmphasis-dark">bg-highEmphasis-light</div>
    <div class="bg-medEmphasis-light text-highEmphasis-dark">bg-medEmphasis-light</div>
    <div class="bg-lowEmphasis-light text-highEmphasis-dark">bg-lowEmphasis-light</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'color',
};
</script>
