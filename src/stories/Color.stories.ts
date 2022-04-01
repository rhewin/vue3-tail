import PrxColor from '@/components/foundations/Color/index.vue';

const Template = () => ({
  components: { PrxColor },
  template: '<prx-color />',
});

export default {
  title: 'Color',
  component: PrxColor,
};

export const Base = Template.bind({});
