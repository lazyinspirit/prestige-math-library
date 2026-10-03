// Shared run limits. A batch may contain one pair, so every lane and group
// ceiling must also accommodate a run with one batch per pair.
export const MAX_RUN_PAIRS = 30;
export const MAX_RUN_BATCHES = MAX_RUN_PAIRS;
export const MAX_BATCHES_PER_GROUP = 3;
export const MAX_GROUPS = Math.ceil(MAX_RUN_BATCHES / MAX_BATCHES_PER_GROUP);
