<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="name"
    :fill="color"
    :height="height"
    :width="width"
    role="img"
    viewBox="0 0 24 24"
    alt="icon"
    v-if="name!=''"
  >
    <title :id="name">{{ name }}</title>
    <g :fill="color">
      <component :is="dynamicComponent" />
    </g>
  </svg>
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'

  type Numberish = number | string
  interface Props {
    name: string,
    color?: string,
    width?: Numberish,
    height?: Numberish,
  }

  const props = withDefaults(defineProps<Props>(), {
    color: '#4C4F54',
    width: 24,
    height: 24,
  })

  const dynamicComponent = computed(() => {
    const name: string = props.name ? props.name.charAt(0).toUpperCase() + props.name.slice(1) : ''
    return defineAsyncComponent(() => import(`../Iconography/icons/${name}.vue`))
  })
</script>
