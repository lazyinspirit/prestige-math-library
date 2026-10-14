# Step 5 adjudication — group **d**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/mathematical-statistics-foundations-37-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/mathematical-statistics-foundations-37-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/mathematical-statistics-foundations-37-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/mathematical-statistics-foundations-37-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `gaussian-orthogonal-decomposition-and-quadratic-forms` | A | mathematical-statistics | 1862 | `estimators-and-randomized-procedures`, `independence-borel-cantelli-and-zero-one-laws`, `weak-convergence-tightness-and-representation`, `central-limit-theorems`, `fourier-transform-convolution-and-approximate-identities`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `product-measures-and-the-fubini-tonelli-theorems`, `reeb-stability-and-global-foliation-constructions` |
| 10 | `gaussian-orthogonal-decomposition-and-quadratic-forms-examples` | B | mathematical-statistics | 1863 | `gaussian-orthogonal-decomposition-and-quadratic-forms` |
| 11 | `confidence-sets-pivots-and-test-inversion` | A | mathematical-statistics | 1864 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `dominated-experiments-likelihood-and-sufficiency`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `probability-spaces-random-variables-and-expectation` |
| 11 | `confidence-sets-pivots-and-test-inversion-examples` | B | mathematical-statistics | 1865 | `confidence-sets-pivots-and-test-inversion` |
| 12 | `conditional-and-finite-group-exact-inference` | A | mathematical-statistics | 1866 | `complete-sufficiency-exponential-families-and-basu`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `conditional-distributions-and-regular-conditional-probability`, `finite-probability-spaces-and-random-variables` |
| 12 | `conditional-and-finite-group-exact-inference-examples` | B | mathematical-statistics | 1867 | `conditional-and-finite-group-exact-inference` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gaussian-orthogonal-decomposition-and-quadratic-forms` — Gaussian Orthogonal Decomposition and Quadratic Forms (8 item(s))

- `thm-orthogonal-transform-preserves-standard-normal-product-law` · theorem — Orthogonal transformations preserve the standard normal product law
- `def-chi-square-law` · definition — Chi-square laws, including zero degrees
- `lem-positive-df-chi-square-has-density-and-regular-cdf` · lemma — Positive-degree chi-square laws have a positive density and regular CDF
- `thm-orthogonal-projection-has-independent-chi-square-sums` · theorem — Orthogonal projections split a standard Gaussian into independent chi-square sums
- `def-student-t-and-f-laws` · definition — Student t and Fisher F laws
- `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing` · lemma — Student t and Fisher F CDFs are continuous and strictly increasing on their supports
- `thm-normal-mean-residual-independence-and-exact-t-pivot` · theorem — Normal sample mean and residual are independent, giving the exact t pivot
- `thm-gaussian-linear-model-qr-and-exact-t-f-pivots` · theorem — QR decomposition gives exact t and F pivots in the fixed Gaussian linear model

### `gaussian-orthogonal-decomposition-and-quadratic-forms-examples` — Gaussian Orthogonal Decomposition and Quadratic Forms — Examples (3 item(s))

- `ex-one-sample-unknown-variance-t-interval` · example — An exact unknown-variance t interval for a four-point sample
- `ex-fixed-design-regression-contrast-and-f-test` · example — A fixed-design slope contrast and nested-model F statistic
- `cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f` · counterexample — Rademacher errors show orthogonality alone gives neither independence nor exact t and F laws

### `confidence-sets-pivots-and-test-inversion` — Confidence Sets and Inversion (4 item(s))

- `def-confidence-set-and-coverage` · definition — Confidence sets and coverage
- `def-pivot` · definition — Pivotal quantities
- `thm-pivot-inversion-exact-coverage` · theorem — Coverage from pivot inversion and exact calibration
- `thm-test-inversion-coverage` · theorem — Coverage from test inversion

### `confidence-sets-pivots-and-test-inversion-examples` — Confidence Sets and Inversion — Examples (5 item(s))

- `ex-discrete-pivot-inversion-is-conservative` · example — A discrete pivot can give conservative coverage
- `ex-known-variance-normal-mean-interval` · example — Known-variance normal mean interval
- `ex-exact-unknown-variance-normal-t-interval` · example — Exact unknown-variance normal t interval
- `ex-uniform-maximum-pivot-confidence-interval` · example — Uniform maximum pivot interval
- `ex-binomial-tail-test-inversion` · example — Binomial upper confidence limit by lower-tail test inversion

### `conditional-and-finite-group-exact-inference` — Conditional and Finite-Group Exact Inference (11 item(s))

- `lem-conditional-kernel-tail-and-atom-evaluations-are-measurable` · lemma — Conditional-kernel tail and atom evaluations are measurable
- `lem-randomized-probability-integral-transform` · lemma — Randomizing across CDF jumps gives a uniform variable
- `def-finite-group-randomization-test` · definition — Finite-group randomization setups
- `lem-finite-multiset-randomized-rank-is-uniform` · lemma — Tied upper ranks on a finite multiset
- `def-randomized-conditional-p-value` · definition — Randomized conditional upper-tail p-values
- `def-orbit-rank-p-value` · definition — Orbit upper-tail rank p-values
- `thm-conditional-randomized-p-uniformity` · theorem — Randomized conditional p-values are uniform
- `thm-finite-group-randomization-validity` · theorem — Finite-group orbit-rank validity
- `def-conditional-test-given-statistic` · definition — Conditional tests given a statistic
- `thm-conditioning-on-a-nuisance-sufficient-statistic` · theorem — Sufficiency makes the conditional rejection probability nuisance-free
- `thm-conditional-test-controls-unconditional-level` · theorem — Conditional level implies unconditional level

### `conditional-and-finite-group-exact-inference-examples` — Conditional and Finite-Group Exact Inference — Examples (3 item(s))

- `cex-noninvariant-null-invalidates-group-pvalue` · counterexample — Without null invariance a group-rank p-value can be anti-conservative
- `ex-finite-permutation-orbit-with-ties-and-stabilizers` · example — A permutation orbit with tied ranks and nontrivial stabilizers
- `ex-fishers-exact-test-from-two-binomial-samples` · example — Fisher's exact test from two Bernoulli samples

## Your seams

Your pages depend on another group's:

- `gaussian-orthogonal-decomposition-and-quadratic-forms` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `confidence-sets-pivots-and-test-inversion` requires `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c, batch 8)
- `confidence-sets-pivots-and-test-inversion` requires `dominated-experiments-likelihood-and-sufficiency` (group b, batch 4)
- `conditional-and-finite-group-exact-inference` requires `complete-sufficiency-exponential-families-and-basu` (group b, batch 5)
- `conditional-and-finite-group-exact-inference` requires `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c, batch 8)

Another group's pages depend on yours:

- `likelihood-asymptotics-wald-score-and-likelihood-ratio` (group h) requires your `gaussian-orthogonal-decomposition-and-quadratic-forms`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/mathematical-statistics-foundations-37-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `mathematical-statistics-foundations-37`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
