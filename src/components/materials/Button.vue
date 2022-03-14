<template>
  <button
    :class="buttonClass"
    @click="onClick(isDisabled)"
  >
    <span
      v-if="withIcon === 'left' && buttonType !== 'flat'"
      :class="iconClass"
    >+</span>
    {{ label }}
    <span
      v-if="withIcon === 'right' && buttonType !== 'flat'"
      :class="iconClass"
    >+</span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'prx-button',
  data() {
    return {
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator: (value) => ['small', 'large'].indexOf(value) !== -1,
    },
    buttonType: {
      type: String,
      required: true,
      default: 'text',
      validator: (value) => ['text', 'outline', 'contained', 'flat'].indexOf(value) !== -1,
    },
    withIcon: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'left', 'right'].indexOf(value) !== -1,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    colorType: {
      type: String,
      required: true,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'error', 'conditional'].indexOf(value) !== -1,
    },
  },
  computed: {
    buttonClass() {
      if (this.buttonType === 'text') return this.textClass();
      if (this.buttonType === 'outline') return this.outlineClass();
      if (this.buttonType === 'contained') return this.containedClass();
      if (this.buttonType === 'flat') return this.flatClass();
      return this.textClass();
    },
    iconClass() {
      return this.classIcon();
    },
  },
  methods: {
    onClick(isDisabled) {
      this.$emit('onClick', isDisabled);
    },
    textClass() {
      return {
        'storybook-button': true,
        'inline-flex': true,
        'justify-center': true,
        'items-center': true,
        'py-2': this.size === 'small',
        'px-6': this.size === 'small' && this.withIcon === 'none',
        'pl-4 pr-4': this.size === 'small' && this.withIcon !== 'none',
        'py-3': this.size === 'large',
        'px-8': this.size === 'large' && this.withIcon === 'none',
        'pl-6 pr-6': this.size === 'large' && this.withIcon !== 'none',
        'font-bold': true,
        'text-secondary-400': !this.isDisabled && this.colorType === 'secondary',
        'text-primary-400': !this.isDisabled && this.colorType === 'primary',
        'text-white': this.isDisabled,
        'rounded-full': true,
        'bg-lowEmphasis-dark': this.isDisabled,
        'cursor-pointer': !this.isDisabled,
        'cursor-not-allowed': this.isDisabled,
        'hover:bg-primary-400 hover:bg-opacity-hover': !this.isDisabled,
      };
    },
    outlineClass() {
      return {
        'storybook-button': true,
        'inline-flex': true,
        'justify-center': true,
        'items-center': true,
        'py-2': this.size === 'small',
        'px-6': this.size === 'small' && this.withIcon === 'none',
        'pl-4 pr-4': this.size === 'small' && this.withIcon !== 'none',
        'py-3': this.size === 'large',
        'px-8': this.size === 'large' && this.withIcon === 'none',
        'pl-6 pr-6': this.size === 'large' && this.withIcon !== 'none',
        'font-bold': true,
        'text-secondary-400': !this.isDisabled && this.colorType === 'secondary',
        'text-primary-400': !this.isDisabled && this.colorType === 'primary',
        'text-white': this.isDisabled,
        'border-solid': !this.isDisabled,
        'border-2': !this.isDisabled,
        'border-secondary-400': !this.isDisabled && this.colorType === 'secondary',
        'border-primary-400': !this.isDisabled && this.colorType === 'primary',
        'rounded-full': true,
        'bg-lowEmphasis-dark': this.isDisabled,
        'cursor-pointer': !this.isDisabled,
        'cursor-not-allowed': this.isDisabled,
        'hover:bg-primary-400 hover:bg-opacity-hover': !this.isDisabled,
      };
    },
    containedClass() {
      return {
        'storybook-button': true,
        'inline-flex': true,
        'justify-center': true,
        'items-center': true,
        'py-2': this.size === 'small',
        'px-6': this.size === 'small' && this.withIcon === 'none',
        'pl-4 pr-4': this.size === 'small' && this.withIcon !== 'none',
        'py-3': this.size === 'large',
        'px-8': this.size === 'large' && this.withIcon === 'none',
        'pl-6 pr-6': this.size === 'large' && this.withIcon !== 'none',
        'font-bold': true,
        'text-white': true,
        'bg-secondary-400': !this.isDisabled && this.colorType === 'secondary',
        'bg-primary-400': !this.isDisabled && this.colorType === 'primary',
        'rounded-full': true,
        'bg-lowEmphasis-dark': this.isDisabled,
        'cursor-pointer': !this.isDisabled,
        'cursor-not-allowed': this.isDisabled,
        'hover:bg-secondary-200': !this.isDisabled && this.colorType === 'secondary',
        'hover:bg-primary-300': !this.isDisabled && this.colorType === 'primary',
      };
    },
    classIcon() {
      return {
        'pr-2': this.withIcon === 'left',
        'pl-2': this.withIcon === 'right',
      };
    },
    flatClass() {
      return {
        'storybook-button': true,
        relative: true,
        flex: true,
        'justify-center': true,
        'items-center': true,
        'w-full': true,
        'py-5': true,
        'font-bold': true,
        'text-white': true,
        'bg-secondary-400': !this.isDisabled && this.colorType === 'secondary',
        'bg-primary-400': !this.isDisabled && this.colorType === 'primary',
        'bg-red-400': !this.isDisabled && this.colorType === 'error',
        'text-highEmphasis-dark': !this.isDisabled && this.colorType === 'conditional',
        'bg-black-50': !this.isDisabled && this.colorType === 'conditional',
        'bg-lowEmphasis-dark': this.isDisabled,
        'cursor-pointer': !this.isDisabled,
        'cursor-not-allowed': this.isDisabled,
        'hover:bg-secondary-200': !this.isDisabled && this.colorType === 'secondary',
        'hover:bg-primary-300': !this.isDisabled && this.colorType === 'primary',
        'hover:bg-red-300': !this.isDisabled && this.colorType === 'error',
      };
    },
  },
};
</script>
