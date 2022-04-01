const TemplateSet = () => ({
  template: `
    <h1>H1/Roboto/Regular/96px</h1><br/>
    <h2>H2/Roboto/Bold/56px</h2><br/>
    <h3>H3/Roboto/Bold/40px</h3><br/>
    <h4>H4/Roboto/Bold/32px</h4><br/>
    <h5>H5/Roboto/Medium/24px</h5><br/>
    <h6>H6/Roboto/Medium/20px</h6><br/>
    <p class="txt-subtitle-bold">Subtitle 1/Roboto/Bold/18px</p>
    <code class="code"> ..class="txt-subtitle-bold" </code>

    <p class="txt-subtitle-400">Subtitle 1/Roboto/Regular/18px</p>
    <code class="code"> ..class="txt-subtitle-400" </code>

    <p class="txt-body1-400">Body 1/Roboto/Regular/16px</p>
    <code class="code"> ..class="txt-body1-400" </code>

    <p class="txt-body1-700">Body 1/Roboto/Bold/16px</p>
    <code class="code"> ..class="txt-body1-700" </code>

    <p class="txt-body2-400">Body 2/Roboto/Regular/14px</p>
    <code class="code"> ..class="txt-body2-400" </code>

    <p class="txt-body2-700">Body 2/Roboto/Bold/14px</p>
    <code class="code"> ..class="txt-body2-700" </code>

    <p class="txt-body3-400">Body 3/Roboto/Regular/12px</p>
    <code class="code"> ..class="txt-body3-400" </code>

    <p class="txt-body3-700">Body 3/Roboto/Bold/12px</p>
    <code class="code"> ..class="txt-body3-700" </code>

    <p class="txt-button">Button/Roboto/Bold/14px</p>
    <code class="code"> ..class="txt-button" </code>

    <p class="txt-caption">Caption/Roboto/Italic/14px</p>
    <code class="code"> ..class="txt-caption" </code>

    <p class="txt-caption-sm">Caption/Roboto/Italic/12px</p>
    <code class="code"> ..class="txt-caption-sm" </code>

    <p class="txt-caption-xs">Caption/Roboto/Italic/10px</p>
    <code class="code"> ..class="txt-caption-xs" </code>

    <p class="txt-overline">OVERLINE/ROBOTO/Medium/10px</p>
    <code class="code"> ..class="txt-overline" </code>

    <p class="txt-text-field">Text Field/Roboto/Italic/14px</p>
    <code class="code"> ..class="txt-text-field" </code>`,
});

const TemplateLineHeight = () => ({
  template: `
    <p class="leading-12">Line Height 12px</p>
    <code class="code"> ..class="leading-12" </code>
    <p class="leading-14">Line Height 14px</p>
    <code class="code"> ..class="leading-14" </code>
    <p class="leading-16">Line Height 16px</p>
    <code class="code"> ..class="leading-16" </code>
    <p class="leading-20">Line Height 20px</p>
    <code class="code"> ..class="leading-20" </code>
    <p class="leading-24">Line Height 24px</p>
    <code class="code"> ..class="leading-24" </code>
    <p class="leading-28">Line Height 28px</p>
    <code class="code"> ..class="leading-28" </code>
    <p class="leading-32">Line Height 32px</p>
    <code class="code"> ..class="leading-32" </code>
    <p class="leading-40">Line Height 40px</p>
    <code class="code"> ..class="leading-40" </code>
    <p class="leading-64">Line Height 64px</p>
    <code class="code"> ..class="leading-64" </code>
    <p class="leading-80">Line Height 80px</p>
    <code class="code"> ..class="leading-80" </code>
    <p class="leading-124">Line Height 124px</p>
    <code class="code"> ..class="leading-124" </code>`,
});

export default {
  title: 'Typography',
};

export const Set = TemplateSet.bind({});
export const LineHeight = TemplateLineHeight.bind({});
