<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Icon from '@/components/foundations/Iconography/BaseIcon.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <h1>H1/Roboto/Regular/96px</h1>
  <h2>H2/Roboto/Bold/56px</h2>
  <h3>H3/Roboto/Bold/40px</h3>
  <h4>H4/Roboto/Bold/32px</h4>
  <h5>H5/Roboto/Medium/24px</h5>
  <h6>H6/Roboto/Medium/20px</h6>
  <p class="txt-subtitle-bold">Subtitle 1/Roboto/Bold/18px</p>
  <p class="txt-subtitle-400">Subtitle 1/Roboto/Regular/18px</p>
  <p class="txt-body1-400">Body 1/Roboto/Regular/16px</p>
  <p class="txt-body1-700">Body 1/Roboto/Bold/16px</p>
  <p class="txt-body2-400">Body 2/Roboto/Regular/16px</p>
  <p class="txt-body2-700">Body 2/Roboto/Bold/16px</p>
  <p class="txt-body3-400">Body 3/Roboto/Regular/16px</p>
  <p class="txt-body3-700">Body 3/Roboto/Bold/16px</p>
  <p class="txt-caption">Caption/Roboto/Italic/14px</p>
  <p class="txt-caption-sm">Caption/Roboto/Italic/12px</p>
  <p class="txt-caption-xs">Caption/Roboto/Italic/10px</p>
  <p class="txt-overline">OVERLINE/ROBOTO/Medium/10px</p>
  <p class="txt-text-field">Text Field/Roboto/Italic/14px</p>
  <Icon name="OpenEye" />
  <Icon name="Check" />
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
