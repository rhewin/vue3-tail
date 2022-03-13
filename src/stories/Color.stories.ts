import Color from '../components/foundations/Color/index.vue';

export default {
  title: 'Example/Color',
  component: Color,
};

const Template = () => ({
  components: { Color },
  template: '<color />',
});

export const Colors = Template.bind({});
