import { configure, addDecorator } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';

import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

import CarbonComponentsVue from '@carbon/vue';

addDecorator(
  withOptions({
    name: `carbon components vue`,
    // sortStoriesByKind: true,
    url: 'https://github.com/carbon-design-system/carbon-components-vue',
    // hierarchyRootSeparator: /\|/,
  })
);

addDecorator(withKnobs);
addDecorator(withNotes);

Vue.use(CarbonComponentsVue);
Vue.use(VueHighlightJS);

function loadStories() {
  const req = require.context('../stories', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);