# Assign batches to group Alphas

This dispatch produces only `research/<run>-alpha-groups.json`. It assigns the
run's existing batches to Alpha groups; it cannot create, split, merge, or
renumber batches. Step 0 creates batches, and Step 1 fills their item lists.
Do not review content, author mathematics, or drive a workflow transition.

Read the current facts before choosing a partition:

```sh
node tools/alpha-groups.mjs --run <run> --facts
```

Write a JSON array of objects with `label`, `covers`, and `rationale` fields.
The validator requires a single lowercase-letter label, a nonempty batch list,
and a concrete rationale of at least 20 characters.

The partition must cover every actual batch exactly once, use at most nine
groups, and give no group more than three batches. Keep a category together
whenever all of its batches fit in one group; the validator enforces this.

Use the `items` count for every batch in `--facts` to balance authoring load.
For each proposed group, sum the item counts of its covered batches and compare
the group totals. Prefer a partition with similar group totals: avoid combining
several large batches in one group while other groups have much less to author.
Within the category and capacity constraints, reduce the largest group total
and the spread between group totals before optimizing cross-group dependency
edges or residual mathematical affinity. Do not pretend an indivisible large
batch can be balanced by Step 2; report that limit explicitly. Include each
group's item total and the load/coherence tradeoff in its rationale. Do not
rely on batch-number order.

Validate the finished artifact before returning:

```sh
node tools/alpha-groups.mjs --run <run>
```

No permission prompts. Record a genuine blocker in the artifact's rationale or
your final report rather than broadening the scope.
