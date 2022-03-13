// Make sure to put jsdom before vue!
import 'jsdom-global/register';
// use mount if you want to test also with child component
// use shallowmount if only want to test one component only without children
import { mount } from '@vue/test-utils';
import Colors from '../index.vue';

describe('Colors', () => {
  // render the component
  const wrapper = mount(Colors);

  it('renders primary colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-500').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-600').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-700').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-800').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-900').exists()).toBeTruthy();
  });
  it('renders secondary colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-500').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-600').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-700').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-800').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-900').exists()).toBeTruthy();
  });
  it('renders red colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
  });
  it('renders green colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
  });
  it('renders yellow colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
  });
  it('renders black colors', () => {
    expect(wrapper.find('.bg-primary-50').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-100').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-primary-400').exists()).toBeTruthy();
  });
  it('renders surface colors', () => {
    expect(wrapper.find('.bg-highEmphasis-dark').exists()).toBeTruthy();
    expect(wrapper.find('.bg-highEmphasis-light').exists()).toBeTruthy();
    expect(wrapper.find('.bg-medEmphasis-dark').exists()).toBeTruthy();
    expect(wrapper.find('.bg-medEmphasis-light').exists()).toBeTruthy();
    expect(wrapper.find('.bg-lowEmphasis-dark').exists()).toBeTruthy();
    expect(wrapper.find('.bg-lowEmphasis-light').exists()).toBeTruthy();
  });
  it('renders opacity colors', () => {
    expect(wrapper.find('.bg-opacity-hover').exists()).toBeTruthy();
    expect(wrapper.find('.bg-opacity-focused').exists()).toBeTruthy();
    expect(wrapper.find('.bg-opacity-pressed').exists()).toBeTruthy();
    expect(wrapper.find('.bg-opacity-dragged').exists()).toBeTruthy();
    expect(wrapper.find('.bg-opacity-selected').exists()).toBeTruthy();
    expect(wrapper.find('.bg-opacity-scrim').exists()).toBeTruthy();
  });
});
