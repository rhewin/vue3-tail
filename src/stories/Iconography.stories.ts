import PrxIcon from '@/components/foundations/Iconography/BaseIcon.vue';

const Template = (args: any) => ({
  components: { PrxIcon },
  setup() {
    return { args };
  },
  template: '<prx-icon v-bind="args" />',
});

export default {
  title: 'Iconography',
  component: PrxIcon,
  args: { name: 'Star', width: 24, height: 24 },
  argTypes: {
    name: {
      options: [
        'Star',
        'OpenEye',
        'Check',
        'Close',
        'CloseRounded',
        'HamburgerMenu',
        'MoreH',
        'MoreV',
      ],
      control: 'select',
    },
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

export const Icon = Template.bind({});
