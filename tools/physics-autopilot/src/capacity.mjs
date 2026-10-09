// Shared run limits. A batch may contain one pair, so every lane and group
// ceiling must also accommodate a run with one batch per pair.
export const MAX_RUN_PAIRS = 80;
export const MAX_RUN_BATCHES = MAX_RUN_PAIRS;
export const MAX_BATCHES_PER_GROUP = 3;
// Small categories may each need their own group. This is inventory capacity;
// the independent global concurrency setting limits active workers.
export const MAX_GROUPS = MAX_RUN_BATCHES;
