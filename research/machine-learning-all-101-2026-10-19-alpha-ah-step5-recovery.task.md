# Step 5 adjudication — group **ah**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 1, 101: 2 A/B pair(s), 4 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/machine-learning-all-101-2026-10-19-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **101**: `research/machine-learning-all-101-2026-10-19-batch-101-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `gaussian-smoothing-densities-scores-and-endpoint-limits` | A | probability | 2668 | `characteristic-functions-inversion-and-continuity`, `forward-ito-sde-well-posedness`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `the-ito-integral-with-respect-to-brownian-motion`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-convergence-tightness-and-representation`, `wasserstein-metric-and-continuity-equation` |
| 1 | `gaussian-smoothing-densities-scores-and-endpoint-limits-examples` | B | probability | 2669 | `gaussian-smoothing-densities-scores-and-endpoint-limits` |
| 101 | `semi-supervised-graph-propagation-and-pseudolabeling-limits` | A | machine-learning | 2996 | `ml02-spectral-clustering`, `prediction-problems-risks-and-empirical-minimization` |
| 101 | `semi-supervised-graph-propagation-and-pseudolabeling-limits-examples` | B | machine-learning | 2997 | `semi-supervised-graph-propagation-and-pseudolabeling-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gaussian-smoothing-densities-scores-and-endpoint-limits` — Gaussian smoothing densities, scores, and endpoint limits (5 item(s))

- `lem-deterministic-ito-integral-has-gaussian-independent-increments` · lemma — A deterministic Itô integral has independent Gaussian increments
- `def-gaussian-smoothed-data-law-and-transition-density` · definition — Gaussian-smoothed data law and transition density
- `thm-gaussian-smoothing-density-and-forward-equation` · theorem — Gaussian smoothing density and forward equation
- `thm-gaussian-smoothing-endpoint-weak-limit` · theorem — Gaussian smoothing converges weakly at the endpoint
- `thm-gaussian-mixture-score-and-global-lipschitz-bound` · theorem — Gaussian-mixture score identities and a global Lipschitz bound

### `gaussian-smoothing-densities-scores-and-endpoint-limits-examples` — Gaussian smoothing densities, scores, and endpoint limits — Examples (4 item(s))

- `ex-gaussian-two-point-mixture-smoothing-density` · example — Smoothing a two-point data law
- `ex-singular-line-law-has-smooth-positive-time-density` · example — A singular line law has a smooth positive-time density
- `ex-gaussian-point-mass-endpoint-coupling-bound` · example — The Gaussian coupling bound is exact for a point mass
- `ex-gaussian-point-mass-score-lipschitz-blows-up-at-zero` · example — The score Lipschitz bound blows up for a point mass

### `semi-supervised-graph-propagation-and-pseudolabeling-limits` — Semi-supervised graph propagation and pseudo-labeling limits (7 item(s))

- `alg-finite-round-confidence-pseudolabeling` · algorithm — Finite-round confidence-threshold pseudo-labeling
- `lem-real-cholesky-recurrence-computes-factorization` · lemma — The real Cholesky recurrence computes the positive-diagonal factor
- `def-graph-harmonic-label-extension` · definition — Graph-harmonic label extension on a finite weighted graph
- `thm-unlabeled-law-alone-does-not-identify-labels` · theorem — The unlabeled marginal alone does not identify labels
- `thm-graph-harmonic-extension-uniqueness-and-maximum-principle` · theorem — Anchored graph-harmonic extensions are unique and obey a maximum principle
- `alg-graph-harmonic-label-propagation` · algorithm — Finite graph-harmonic label propagation with a residual status
- `rem-semisupervised-cluster-assumptions` · remark — Structural assumptions behind semi-supervised gains

### `semi-supervised-graph-propagation-and-pseudolabeling-limits-examples` — Semi-supervised graph propagation and pseudo-labeling limits — Examples (4 item(s))

- `ex-confident-pseudolabel-can-be-wrong` · example — A confident pseudo-label can be wrong and remain fixed
- `ex-unlabeled-law-two-point-lower-bound` · example — Two indistinguishable laws leave error on an unseen atom
- `ex-graph-harmonic-path-interpolation` · example — Harmonic extension on a three-vertex path
- `ex-graph-harmonic-unanchored-component-status` · example — An unanchored component is rejected before solving

## Your seams

Your pages depend on another group's:

- `gaussian-smoothing-densities-scores-and-endpoint-limits` requires `wasserstein-metric-and-continuity-equation` (group q, batch 50)
- `semi-supervised-graph-propagation-and-pseudolabeling-limits` requires `ml02-spectral-clustering` (group g, batch 21)
- `semi-supervised-graph-propagation-and-pseudolabeling-limits` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)

Another group's pages depend on yours:

- `anderson-reverse-time-diffusion` (group v) requires your `gaussian-smoothing-densities-scores-and-endpoint-limits`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

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
