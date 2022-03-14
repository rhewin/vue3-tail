import Color from '../components/foundations/Color/index.vue';

export default {
  title: 'Color',
  component: Color,
};

const Template = () => ({
  components: { Color },
  template: '<color />',
});

export const Basic = Template.bind({});
