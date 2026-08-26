# Assign batches to group Alphas

This dispatch produces only `research/<run>-alpha-groups.json`. It assigns the
run's existing batches to coherent Alpha groups; it does not review content,
author mathematics, or drive a workflow transition.

Read the current facts before choosing a partition:

```sh
node tools/alpha-groups.mjs --run <run> --facts
```

Write a JSON array of objects with `label`, `covers`, and `rationale` fields.
The validator requires a single lowercase-letter label, a nonempty batch list,
and a concrete rationale of at least 20 characters.

The partition must cover every actual batch exactly once, use at most four
groups, and give no group more than three batches. Keep a category together
whenever all of its batches fit in one group. Among valid partitions, minimise
cross-group dependency edges and prefer mathematically coherent groupings; say
why the particular batches belong together. Do not rely on batch-number order.

Validate the finished artifact before returning:

```sh
node tools/alpha-groups.mjs --run <run>
```

No permission prompts. Record a genuine blocker in the artifact's rationale or
your final report rather than broadening the scope.
