# Step 5 adjudication — group **c**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/mathematical-statistics-foundations-37-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/mathematical-statistics-foundations-37-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/mathematical-statistics-foundations-37-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `fisher-information-and-finite-sample-information-bounds` | A | mathematical-statistics | 1856 | `dominated-experiments-likelihood-and-sufficiency`, `finite-sample-point-estimation-and-unbiased-optimality`, `the-lebesgue-integral-and-the-convergence-theorems`, `inner-product-spaces-and-orthogonality` |
| 7 | `fisher-information-and-finite-sample-information-bounds-examples` | B | mathematical-statistics | 1857 | `fisher-information-and-finite-sample-information-bounds`, `brownian-motion-construction-and-continuity` |
| 8 | `finite-sample-tests-neyman-pearson-and-valid-p-values` | A | mathematical-statistics | 1858 | `estimators-and-randomized-procedures`, `dominated-experiments-likelihood-and-sufficiency`, `losses-risk-and-decision-rules` |
| 8 | `finite-sample-tests-neyman-pearson-and-valid-p-values-examples` | B | mathematical-statistics | 1859 | `finite-sample-tests-neyman-pearson-and-valid-p-values` |
| 9 | `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` | A | mathematical-statistics | 1860 | `finite-sample-tests-neyman-pearson-and-valid-p-values`, `complete-sufficiency-exponential-families-and-basu` |
| 9 | `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples` | B | mathematical-statistics | 1861 | `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fisher-information-and-finite-sample-information-bounds` — Scores and Information Bounds (4 item(s))

- `def-score-and-fisher-information` · definition — Score and Fisher information
- `thm-score-mean-zero-and-information-identity` · theorem — Mean-zero score and the information identity
- `thm-cramer-rao-lower-bound` · theorem — Scalar Cramér–Rao lower bound
- `thm-multivariate-cramer-rao-bound` · theorem — Multivariate Cramér–Rao bound

### `fisher-information-and-finite-sample-information-bounds-examples` — Scores and Information Bounds — Examples (3 item(s))

- `ex-bernoulli-score-fisher-information-and-cramer-rao-attainment` · example — Bernoulli score, information, and attainment of the scalar bound
- `ex-normal-location-score-information-and-cramer-rao-attainment` · example — Normal location score, information, and attainment
- `cex-uniform-moving-support-invalidates-naive-cramer-rao-bound` · counterexample — Uniform moving support invalidates the naive score bound

### `finite-sample-tests-neyman-pearson-and-valid-p-values` — Tests, Neyman–Pearson and Valid P-values (11 item(s))

- `lem-integrable-signed-function-integration-against-density` · lemma — Bounded signed integrals obey the density formula
- `lem-likelihood-ratio-threshold-exists` · lemma — A likelihood-ratio threshold with boundary randomization exists
- `lem-common-support-likelihood-ratio-is-measurable` · lemma — The common-support likelihood ratio is measurable
- `def-p-value` · definition — Valid p-values
- `lem-measurable-rejection-function-defines-randomized-test` · lemma — Every measurable rejection function defines a randomized test
- `lem-test-zero-one-loss-risk-identities` · lemma — Binary zero-one loss risks are the testing error probabilities
- `def-test-size-and-power` · definition — Test size and power
- `def-likelihood-ratio-test-with-boundary-randomization` · definition — Likelihood-ratio tests with boundary randomization
- `thm-p-value-superuniformity` · theorem — Valid p-values yield level tests for nonempty disjoint alternatives
- `lem-likelihood-ratio-test-is-measurable-and-exact-size` · lemma — The likelihood-ratio rule is a measurable test of exact size
- `thm-neyman-pearson-lemma` · theorem — Neyman–Pearson lemma with singular alternative mass

### `finite-sample-tests-neyman-pearson-and-valid-p-values-examples` — Tests, Neyman–Pearson and Valid P-values — Examples (3 item(s))

- `cex-uniform-null-p-value-is-anti-conservative` · counterexample — A measurable [0,1]-valued statistic need not be a valid p-value
- `ex-discrete-neyman-pearson-randomized-boundary` · example — Randomize at a discrete likelihood-ratio boundary
- `ex-continuous-neyman-pearson-likelihood-ratio-test` · example — A continuous likelihood-ratio test

### `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` — UMP Tests (5 item(s))

- `lem-randomized-threshold-has-exact-level` · lemma — A randomized threshold attains every test size
- `def-monotone-likelihood-ratio-family` · definition — Families with a monotone likelihood ratio
- `lem-mlr-orders-randomized-thresholds` · lemma — MLR orders the power of randomized thresholds
- `thm-karlin-rubin-one-sided-ump-test` · theorem — The Karlin–Rubin theorem for one-sided tests
- `thm-ump-nonexistence-witness` · theorem — A two-sided normal alternative need not have a UMP test

### `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples` — UMP Tests — Examples (2 item(s))

- `ex-binomial-one-sided-ump-test` · example — A randomized UMP test for a binomial model
- `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests` · example — Opposed most powerful tests for two normal alternatives

## Your seams

Your pages depend on another group's:

- `fisher-information-and-finite-sample-information-bounds` requires `dominated-experiments-likelihood-and-sufficiency` (group b, batch 4)
- `fisher-information-and-finite-sample-information-bounds` requires `finite-sample-point-estimation-and-unbiased-optimality` (group b, batch 6)
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `dominated-experiments-likelihood-and-sufficiency` (group b, batch 4)
- `finite-sample-tests-neyman-pearson-and-valid-p-values` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` requires `complete-sufficiency-exponential-families-and-basu` (group b, batch 5)

Another group's pages depend on yours:

- `confidence-sets-pivots-and-test-inversion` (group d) requires your `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `conditional-and-finite-group-exact-inference` (group d) requires your `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` (group h) requires your `fisher-information-and-finite-sample-information-bounds`
- `pathwise-differentiability-influence-functions-and-efficient-scores` (group j) requires your `fisher-information-and-finite-sample-information-bounds`
- `sequential-testing-and-anytime-valid-inference` (group l) requires your `finite-sample-tests-neyman-pearson-and-valid-p-values`

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
