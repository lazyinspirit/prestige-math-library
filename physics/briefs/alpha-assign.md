# Physics content contract

This is a physics-workspace assignment. Read SCHEMA.md, CLAUDE.md, and
../PHYSICS-CONTENT-MODEL.md. The class-specific rules below override mathematical
proof-only wording in the inherited task:

- Use domain and library classifications, and dependency_roles on local items.
- postulate (post-): explicit adopted assumption, sources and physical_scope;
  review formulation, scope, sources, non_derivation. No proof required.
- experiment (exp-): reported setup, procedure, observations, uncertainty,
  interpretation and empirical_result. Review every field against retrieved
  source text. Do not fabricate observations or prove measured outcomes.
- physical-theorem (pthm-) and thought-experiment (texp-): identical complete
  conditional proofs, explicit physical_scope, and inherited empirical_premises.
- Mathematical items retain all ordinary mathematical proof obligations and
  cannot depend on physics. Imported mathematical items and pages are read-only.
- Nonproof item contracts use physics_review fields with verdict and concrete
  evidence as specified in SCHEMA.md; do not create fictitious proof worksheets.
- Relations (support/testing/motivation/replication/challenge) are not deps.
- Changes to Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications change the public physical interface and require direct-consumer review. Proofs, citations, and audit stamps alone do not propagate.
- Write only in this workspace. Never modify the root math engine, tools,
  briefs, items, or library. Any genuine math supplier defect is an escalation.

## Required experimental-evidence guidance

Before authoring, reviewing, judging, or adjudicating physical content, read
../PHYSICS-CONTENT-MODEL.md, especially "Statistical evidence and the double-slit
example". Apply its author/judge/adjudicator instructions to every statistical
claim. Separate theoretical distributions, finite observed data, and statistical
inference. Finite agreement does not prove a physical framework, and a rare
outcome or missing visible fringe does not automatically falsify one. Classical
waves also interfere: identify the specific competing model and apparatus
assumptions. Never invent sample sizes, uncertainties, p-values, or power.
Confidence in a source review or conditional proof is not certainty that a theory
is true. Carry sampling and measurement qualifications into downstream claims.

---

# Assign batches to group Alphas

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

This dispatch produces only `research/<run>-alpha-groups.json`. It assigns the
run's existing batches to Alpha groups; it cannot create, split, merge, or
renumber batches. Step 0 creates batches, and Step 1 fills their item lists.
Do not review content, author mathematics, or drive a workflow transition.

Read the current facts before choosing a partition:

```sh
node tools/physics-support/alpha-groups.mjs --run <run> --facts
```

Write a JSON array of objects with `label`, `covers`, and `rationale` fields.
The validator requires a single lowercase-letter label, a nonempty batch list,
and a concrete rationale of at least 20 characters.

The partition must cover every actual batch exactly once, use at most ten
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
node tools/physics-support/alpha-groups.mjs --run <run>
```

No permission prompts. Record a genuine blocker in the artifact's rationale or
your final report rather than broadening the scope.
