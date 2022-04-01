<template>
  <button
    :size="size"
    :class="buttonClass"
    :isDisabled="isDisabled"
    :colorType="colorType"
  >
    <div class="wrapper-button">
      <div v-if="icon != '' && iconPosition === 'left'" class="align-middle inline-block mr-2">
        <prx-icon :name="icon" :color="iconColor" width="16" height="16" />
      </div>
      <span class="align-middle inline-block">{{ label }}</span>
      <div v-if="icon != '' && iconPosition === 'right'" class="align-middle inline-block ml-2">
        <prx-icon :name="icon" :color="iconColor"  width="14" height="14" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import PrxIcon from '@/components/foundations/Iconography/BaseIcon.vue';
  interface Props {
    label: string,
    size?: 'small' | 'large',
    buttonType?: 'text' | 'outlined' | 'contained' | 'flat',
    icon?: string,
    iconPosition?: 'left' | 'right',
    isDisabled?: boolean,
    colorType?: 'primary' | 'secondary' | 'error' | 'conditional',
  }

  const props = withDefaults(defineProps<Props>(), {
    buttonType: 'contained',
    colorType: 'primary',
    iconPosition: 'left',
    isDisabled: false,
    size: 'small',
  })

  const buttonClass = computed(() => {
    const base: string = 'border-2 rounded-button txt-button'
    const baseFlat: string = 'border-2 txt-body1-700 relative w-full p-button-flat text-white'
    const baseDisabled: string = 'bg-lowEmphasis-dark border-lowEmphasis-dark text-white cursor-not-allowed'
    const baseError: string = 'bg-red-400 border-red-400 text-white hover:bg-red-300'
    var classMap: any = {
      'contained-primary': `${base} text-white bg-primary-400 border-primary-400 hover:bg-primary-300 hover:border-primary-300`,
      'contained-secondary': `${base} text-white bg-secondary-400 border-secondary-400 hover:bg-secondary-200 hover:border-secondary-200`,
      'outlined-primary': `${base} text-primary-400 border-primary-400 hover:border-primary-300 hover:text-primary-300`,
      'outlined-secondary': `${base} text-secondary-400 border-secondary-400 hover:border-secondary-200 hover:text-secondary-200`,
      'text-primary': `${base} text-primary-400 border-transparent hover:bg-surface-lightBlue`,
      'text-secondary': `${base} text-secondary-400 border-transparent hover:bg-surface-white`,
      'flat-primary': `${baseFlat} bg-primary-400 border-primary-400 hover:bg-primary-300 hover:border-primary-300`,
      'flat-secondary': `${baseFlat} bg-secondary-400 border-secondary-400 hover:bg-secondary-200 hover:border-secondary-200`,
    }

    var key: string = props.buttonType+'-'+props.colorType
    if (props.buttonType != 'flat') {
      classMap[key] = (props.colorType == 'error') ? `${base} ${baseError}`: classMap[key];
      classMap[key] = (props.isDisabled) ? `${base} ${baseDisabled}`: classMap[key];
    } else {
      classMap[key] = (props.colorType == 'error') ? `${baseFlat} ${baseError}`: classMap[key];
      classMap[key] = (props.isDisabled) ? `${baseFlat} ${baseDisabled}`: classMap[key];
    }
    classMap[key] += (props.size == 'large' && props.buttonType != 'flat')? ' p-button-lg' : ' p-button';
    return classMap[key];
  })

  const iconColor = computed(() => {
    var classMap: any = {
      'contained-primary': 'var(--color-surface-main)',
      'contained-secondary': 'var(--color-surface-main)',
      'outlined-primary': 'var(--color-primary-400)',
      'outlined-secondary': 'var(--color-secondary-400)',
      'text-primary': 'var(--color-primary-400)',
      'text-secondary': 'var(--color-secondary-400)',
      'flat-primary': 'var(--color-surface-main)',
      'flat-secondary': 'var(--color-surface-main)',
    }
    var key: string = props.buttonType+'-'+props.colorType
    classMap[key] = (props.isDisabled || props.colorType == 'error')? 'var(--color-surface-main)' : classMap[key];
    return classMap[key];
  })
</script>
