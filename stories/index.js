import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import MyButton from '../components/buttons/MyButton.vue';

storiesOf('MyButton', module)
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));