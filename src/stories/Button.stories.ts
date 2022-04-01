import PrxButton from '@/components/materials/Button.vue';

const Template = (args: any) => ({
  components: { PrxButton },
  setup() {
    return { args };
  },
  template: '<prx-button v-bind="args" />',
});

export default {
  title: 'Materials/Button',
  component: PrxButton,
  args: {
    buttonType: 'contained',
    colorType: 'primary',
    icon: '',
    iconPosition: 'left',
    isDisabled: false,
    label: 'Text',
    size: 'small',
  },
  argTypes: {
    buttonType: {
      options: ['text', 'outlined', 'contained', 'flat'],
      control: 'select',
    },
    colorType: {
      options: ['primary', 'secondary', 'error'],
      control: 'select',
    },
    icon: {
      options: [
        '',
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
    iconPosition: {
      options: ['left', 'right'],
      control: 'select',
    },
    isDisabled: {
      control: 'boolean',
    },
    label: { control: 'text' },
    size: {
      options: ['small', 'large'],
      control: 'select',
    },
  },
};

export const Set = Template.bind({});


// export const Text = Template.bind({});
// Text.args = {
//   size: 'small',
//   label: 'Text',
//   buttonType: 'text',
//   onClickButton: (isDisabled: boolean) => {
//     if (!isDisabled) {
//       alert('text button clicked');
//     }
//   },
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   size: 'small',
//   label: 'Outline',
//   buttonType: 'outline',
//   colorType: 'primary',
//   onClickButton: (isDisabled: boolean) => {
//     if (!isDisabled) {
//       console.log('outline button clicked');
//     }
//   },
// };

// export const Contained = Template.bind({});
// Contained.args = {
//   size: 'small',
//   label: 'Contained',
//   buttonType: 'contained',
//   withIcon: 'left',
//   colorType: 'primary',
//   onClickButton: (isDisabled: boolean) => {
//     if (!isDisabled) {
//       console.log('contained button clicked');
//     }
//   },
// };

// export const Flat = Template.bind({});
// Flat.args = {
//   label: 'Flat',
//   buttonType: 'flat',
//   withIcon: 'none',
//   isDisabled: false,
//   colorType: 'primary',
//   onClickButton: (isDisabled) => {
//     if (!isDisabled) {
//       console.log('flat button clicked');
//     }
//   },
// };

// export const SampleButton = () => ({
//   components: { PrxButton },
//   template: `
//     <div>
//       <div style="display: flex; margin-bottom: 32px">
//         <prx-button @onClick="onClickButton1" label="Cancel" buttonType="text" colorType="secondary" style="margin-right: 8px" />
//         <prx-button @onClick="onClickButton2" label="Save" buttonType="text" colorType="primary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton1" label="Secondary" buttonType="text" colorType="secondary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton2" label="Disabled" buttonType="text" colorType="primary" isDisabled="true" />
//       </div>
//       <div style="display: flex; margin-bottom: 32px">
//         <prx-button @onClick="onClickButton1" label="Cancel" buttonType="outline" colorType="secondary" style="margin-right: 8px" />
//         <prx-button @onClick="onClickButton2" label="Save" buttonType="outline" colorType="primary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton1" label="Secondary" buttonType="outline" colorType="secondary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton2" label="Disabled" buttonType="outline" colorType="primary" isDisabled="true" />
//       </div>
//       <div style="display: flex; margin-bottom: 32px">
//         <prx-button @onClick="onClickButton1" label="Cancel" buttonType="contained" colorType="secondary" style="margin-right: 8px" />
//         <prx-button @onClick="onClickButton2" label="Save" buttonType="contained" colorType="primary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton1" label="Secondary" buttonType="contained" colorType="secondary" style="margin-right: 32px" />
//         <prx-button @onClick="onClickButton2" label="Disabled" buttonType="contained" colorType="primary" isDisabled="true" />
//       </div>
//     </div>
//   `,
//   methods: {
//     onClickButton1: (isDisabled: boolean) => {
//       if (!isDisabled) {
//         console.log('flat button one clicked');
//       }
//     },
//     onClickButton2: (isDisabled: boolean) => {
//       if (!isDisabled) {
//         console.log('flat button two clicked');
//       }
//     },
//   },
// });

// export const SampleFlat = () => ({
//   components: { PrxButton },
//   template: `
//     <div>
//       <div style="display: flex">
//         <prx-button @onClick="onClickButton1" label="Button1" buttonType="flat" colorType="primary" />
//         <prx-button @onClick="onClickButton2" label="Button2" buttonType="flat" colorType="secondary" />
//       </div>
//       <div style="display: flex; margin-top: 24px">
//         <prx-button @onClick="onClickButton1" label="Button1" buttonType="flat" colorType="primary" />
//         <prx-button @onClick="onClickButton2" label="Disabled" buttonType="flat" colorType="secondary" isDisabled="true" />
//       </div>
//       <div style="height: 200px; border: 1px solid black; margin-top: 24px; position: relative">
//         <div style="display: flex; position: absolute; bottom: 0; left: 0; right: 0;">
//           <prx-button @onClick="onClickButton1" label="Cancel" buttonType="flat" colorType="secondary" />
//           <prx-button @onClick="onClickButton2" label="Save" buttonType="flat" colorType="primary" />
//         </div>
//       </div>
//       <div style="height: 200px; border: 1px solid black; margin-top: 24px; position: relative">
//         <div style="display: flex; position: absolute; bottom: 0; left: 0; right: 0;">
//           <prx-button @onClick="onClickButton1" label="Conditional" buttonType="flat" colorType="conditional" />
//           <prx-button @onClick="onClickButton2" label="Delete" buttonType="flat" colorType="error" />
//         </div>
//       </div>
//     </div>
//   `,
//   methods: {
//     onClickButton1: (isDisabled: boolean) => {
//       if (!isDisabled) {
//         console.log('flat button one clicked');
//       }
//     },
//     onClickButton2: (isDisabled: boolean) => {
//       if (!isDisabled) {
//         console.log('flat button two clicked');
//       }
//     },
//   },
// });
