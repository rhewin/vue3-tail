<template>
  <div>
    <h1>Colors</h1>
    <primary />
    <secondary />
    <red />
    <green />
    <yellow />
    <black />
    <h1>Surface</h1>
    <surface />
    <h1>Opacity</h1>
    <opacity />
  </div>
</template>

<script lang="ts">
import Black from './Black.vue';
import Green from './Green.vue';
import Primary from './Primary.vue';
import Red from './Red.vue';
import Secondary from './Secondary.vue';
import Yellow from './Yellow.vue';
import Surface from './Surface.vue';
import Opacity from './Opacity.vue';

export default {
  name: 'color',
  components: {
    Primary,
    Secondary,
    Red,
    Green,
    Yellow,
    Black,
    Surface,
    Opacity,
  },
};
</script>
