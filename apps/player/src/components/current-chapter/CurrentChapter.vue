<template>
  <span
    v-if="title"
    class="podlove-player--chapter-current truncate"
    :aria-label="t(state.label.key, state.label.attr)"
    tabindex="0"
    data-test="current-chapter"
  >
    {{ title }}
  </span>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { prop } from 'ramda';
import { mapState } from 'redux-vuex';

import select from '../../store/selectors/index.js';

const { t } = useI18n();

const state = mapState({
  currentGhostChapter: select.ghost.chapter,
  currentChapter: select.chapters.current,
  ghost: select.ghost.time,
  label: select.accessibility.currentChapter
});

const chapter = computed(() => {
  if (state.ghost) {
    return state.currentGhostChapter;
  }

  return state.currentChapter;
});

const title = computed(() => prop('title', chapter.value));
</script>

<style lang="postcss" scoped>
.podlove-player--chapter-current {
  color: var(--podlove-player--chapter-current--color);
}
</style>
