# Step 5 adjudication — group **s**, run `statistical-models-experiments-62`

You are the group Alpha for batches 55, 56, 57: 3 A/B pair(s), 6 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **55**: `research/statistical-models-experiments-62-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **56**: `research/statistical-models-experiments-62-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/statistical-models-experiments-62-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 55 | `fdr-control-under-dependence` | A | statistical-models-and-experiments | 2026 | `valid-p-values-bonferroni-and-simultaneous-coverage`, `benjamini-hochberg-independent-fdr-control`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `conditional-distributions-and-regular-conditional-probability`, `approximation-algorithms-and-gap-reductions` |
| 55 | `fdr-control-under-dependence-examples` | B | statistical-models-and-experiments | 2027 | `fdr-control-under-dependence` |
| 56 | `polyhedral-selective-inference` | A | statistical-models-and-experiments | 2028 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `central-limit-theorems`, `weak-convergence-tightness-and-representation` |
| 56 | `polyhedral-selective-inference-examples` | B | statistical-models-and-experiments | 2029 | `polyhedral-selective-inference` |
| 57 | `reproducibility-replication-and-transparent-reporting` | A | statistical-models-and-experiments | 2030 | — |
| 57 | `reproducibility-replication-and-transparent-reporting-examples` | B | statistical-models-and-experiments | 2031 | `reproducibility-replication-and-transparent-reporting` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fdr-control-under-dependence` — BY arbitrary dependence and BH PRDS (7 item(s))

- `alg-benjamini-yekutieli-step-up-procedure` · algorithm — Benjamini–Yekutieli step-up procedure
- `lem-unit-interval-is-standard-borel` · lemma — The unit interval with its Borel structure is standard Borel
- `lem-step-up-leave-one-out-rejection-partition` · lemma — Leave-one-coordinate rejection partition for a step-up rule
- `def-prds-on-true-null-coordinates` · definition — Positive regression dependence on true-null coordinates (PRDS)
- `thm-by-fdr-control-under-arbitrary-dependence` · theorem — BY controls FDR under arbitrary dependence
- `lem-bh-prds-null-contribution-bound` · lemma — A PRDS bound for each BH true-null contribution
- `thm-bh-fdr-control-under-prds` · theorem — BH controls FDR under PRDS

### `fdr-control-under-dependence-examples` — BY arbitrary dependence and BH PRDS — Examples (2 item(s))

- `cex-pairwise-positive-correlation-does-not-imply-prds` · counterexample — Positive covariance does not imply PRDS
- `ex-by-bh-threshold-comparison-under-independent-null-pvalues` · example — BY and BH thresholds for independent valid p-values

### `polyhedral-selective-inference` — Polyhedral selective inference (8 item(s))

- `def-polyhedral-selection-event-and-contrast-interval` · definition — Polyhedral selection event and contrast interval
- `lem-standard-normal-cdf-is-continuous-and-strictly-increasing` · lemma — The standard normal CDF is continuous and strictly increasing
- `def-exact-selective-confidence-set-for-a-functional` · definition — Exact selective confidence set for a parameter functional
- `def-polyhedral-selective-normal-pivot` · definition — Polyhedral selective normal pivot
- `lem-polyhedral-event-restricts-contrast-to-interval` · lemma — A polyhedral event restricts the contrast to a computable interval
- `thm-gaussian-contrast-independent-of-orthogonal-residual` · theorem — A Gaussian contrast is independent of its orthogonal residual
- `thm-truncated-normal-selective-pivot-is-conditionally-uniform` · theorem — The truncated normal selective pivot is conditionally uniform
- `cor-exact-polyhedral-selective-tests-and-confidence-sets` · corollary — Exact selective tests and confidence sets from the pivot

### `polyhedral-selective-inference-examples` — Polyhedral selective inference — Examples (1 item(s))

- `ex-selective-inference-after-choosing-the-larger-of-two-means` · example — Selective inference after choosing the larger of two means

### `reproducibility-replication-and-transparent-reporting` — Reproducibility and transparent reporting (1 item(s))

- `def-computational-reproducibility-replicability-and-transparent-reporting` · definition — Computational reproducibility, replicability, and transparent reporting

### `reproducibility-replication-and-transparent-reporting-examples` — Reproducibility and transparent reporting — Examples (1 item(s))

- `ex-transparent-analysis-plan-and-reproduction` · example — A documented grouping change and a new-data study

## Your seams

Your pages depend on another group's:

- `fdr-control-under-dependence` requires `valid-p-values-bonferroni-and-simultaneous-coverage` (group r, batch 52)
- `fdr-control-under-dependence` requires `benjamini-hochberg-independent-fdr-control` (group r, batch 54)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `statistical-models-experiments-62`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
