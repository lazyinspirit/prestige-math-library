# Step 5 adjudication — group **b**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/mathematical-statistics-foundations-37-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/mathematical-statistics-foundations-37-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/mathematical-statistics-foundations-37-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 4 | `dominated-experiments-likelihood-and-sufficiency` | A | mathematical-statistics | 1850 | `statistical-experiments-models-and-identifiability`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `measurable-functions-and-simple-approximation` |
| 4 | `dominated-experiments-likelihood-and-sufficiency-examples` | B | mathematical-statistics | 1851 | `dominated-experiments-likelihood-and-sufficiency` |
| 5 | `complete-sufficiency-exponential-families-and-basu` | A | mathematical-statistics | 1852 | `dominated-experiments-likelihood-and-sufficiency`, `estimators-and-randomized-procedures`, `conditional-distributions-and-regular-conditional-probability`, `conditional-expectation`, `standard-borel-real-codings-and-determining-classes`, `infinite-product-measures-and-kolmogorov-extension`, `complete-metrizability-and-baire`, `fourier-transform-convolution-and-approximate-identities`, `the-identity-theorem-and-the-open-mapping-theorem` |
| 5 | `complete-sufficiency-exponential-families-and-basu-examples` | B | mathematical-statistics | 1853 | `complete-sufficiency-exponential-families-and-basu`, `brownian-motion-construction-and-continuity` |
| 6 | `finite-sample-point-estimation-and-unbiased-optimality` | A | mathematical-statistics | 1854 | `estimators-and-randomized-procedures`, `losses-risk-and-decision-rules`, `complete-sufficiency-exponential-families-and-basu`, `conditional-expectation` |
| 6 | `finite-sample-point-estimation-and-unbiased-optimality-examples` | B | mathematical-statistics | 1855 | `finite-sample-point-estimation-and-unbiased-optimality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dominated-experiments-likelihood-and-sufficiency` — Domination and Likelihood Ratios (7 item(s))

- `lem-positive-lebesgue-components-of-a-positive-measure` · lemma — Lebesgue components of a positive finite measure are positive
- `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative` · lemma — A sigma-finite positive measure has a nonnegative Radon–Nikodym density version
- `def-dominated-statistical-experiment` · definition — Dominated statistical experiments
- `def-likelihood-ratio-as-rn-derivative` · definition — Likelihood ratio as a Radon–Nikodym derivative
- `def-likelihood-density` · definition — Likelihood densities
- `thm-likelihood-ratio-change-of-measure` · theorem — Likelihood-ratio change of measure
- `thm-equivalent-dominators-give-equivalent-likelihood-ratios` · theorem — Equivalent dominating measures give equivalent likelihood ratios

### `dominated-experiments-likelihood-and-sufficiency-examples` — Domination and Likelihood Ratios — Examples (2 item(s))

- `cex-singular-pair-has-no-full-likelihood-ratio` · counterexample — A singular pair has no full likelihood ratio
- `ex-bernoulli-likelihood-ratio-and-change-of-measure` · example — Bernoulli likelihood ratio and change of measure

### `complete-sufficiency-exponential-families-and-basu` — Sufficiency, Completeness and Exponential Families (17 item(s))

- `lem-uniqueness-of-a-multivariate-exponential-transform` · lemma — Uniqueness of a multivariate exponential transform
- `def-likelihood-ratio-equivalence-on-common-discrete-support` · definition — Likelihood-ratio equivalence on common discrete support
- `thm-countable-mixture-dominates-sigmafinite-dominated-family` · theorem — A countable mixture dominates a sigma-finite dominated family
- `def-ancillary-statistic` · definition — Ancillary statistics
- `def-complete-statistic` · definition — Complete statistics
- `def-exponential-family` · definition — Exponential families and full rank
- `def-sufficient-statistic` · definition — Sufficient statistics
- `def-minimal-sufficient-sigma-field` · definition — Minimal sufficient sigma-fields
- `thm-basu-independence` · theorem — Basu’s independence theorem
- `thm-common-reference-factorization-criterion` · theorem — Common-reference factorization criterion for sufficiency
- `thm-completeness-of-full-exponential-family` · theorem — A full exponential family is complete
- `thm-countable-factorization-criterion-for-sufficiency` · theorem — Countable factorization criterion for sufficiency
- `def-minimal-sufficient-statistic` · definition — Minimal sufficient statistics
- `thm-full-rank-exponential-family-sufficiency` · theorem — The canonical statistic of an exponential family is sufficient
- `thm-standard-borel-dominated-factorization-criterion` · theorem — Standard Borel dominated factorization criterion
- `thm-countable-mixture-likelihood-ratio-vector-is-minimal-sufficient` · theorem — A countable mixture likelihood-ratio vector is minimal sufficient
- `thm-discrete-likelihood-ratio-classes-are-minimal-sufficient` · theorem — Likelihood-ratio classes are minimal sufficient on a common discrete support

### `complete-sufficiency-exponential-families-and-basu-examples` — Sufficiency, Completeness and Exponential Families — Examples (6 item(s))

- `ex-countable-mixture-dominates-bernoulli-scale-family` · example — Two endpoint laws dominate the Bernoulli scale family
- `cex-arbitrary-dominator-factorization-fails` · counterexample — An external dominating law need not be a valid sufficiency reference
- `cex-curved-normal-family-statistic-incomplete` · counterexample — A curved normal family can make a sufficient statistic incomplete
- `ex-normal-sample-mean-residual-independent-by-basu` · example — Normal sample mean and residuals are independent
- `ex-bernoulli-count-is-minimal-sufficient` · example — The Bernoulli count is minimal sufficient
- `ex-countable-likelihood-ratio-vector-on-point-mass-model` · example — Likelihood-ratio vector for a point-mass model

### `finite-sample-point-estimation-and-unbiased-optimality` — Finite-Sample Point Estimation (7 item(s))

- `lem-dirac-integral-evaluation` · lemma — Integration against a Dirac measure evaluates at its point
- `lem-statistic-induces-deterministic-procedure` · lemma — A statistic induces a deterministic probability kernel
- `def-bias-and-mean-squared-error` · definition — Bias and mean squared error
- `thm-bias-variance-decomposition` · theorem — Bias–variance decomposition
- `def-unbiased-estimator-and-umvu` · definition — Unbiased estimators and UMVU estimators
- `thm-rao-blackwell` · theorem — Rao–Blackwell theorem for scalar finite-variance estimators
- `thm-lehmann-scheffe` · theorem — Lehmann–Scheffé theorem

### `finite-sample-point-estimation-and-unbiased-optimality-examples` — Finite-Sample Point Estimation — Examples (3 item(s))

- `ex-binomial-sample-proportion` · example — The binomial sample proportion
- `ex-biased-estimator-lower-mse` · example — A biased estimator can have lower MSE
- `ex-rao-blackwell-bernoulli-observation` · example — Rao–Blackwellizing one Bernoulli observation by the sample sum

## Your seams

Your pages depend on another group's:

- `dominated-experiments-likelihood-and-sufficiency` requires `statistical-experiments-models-and-identifiability` (group a, batch 1)
- `complete-sufficiency-exponential-families-and-basu` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `finite-sample-point-estimation-and-unbiased-optimality` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `finite-sample-point-estimation-and-unbiased-optimality` requires `losses-risk-and-decision-rules` (group a, batch 3)

Another group's pages depend on yours:

- `fisher-information-and-finite-sample-information-bounds` (group c) requires your `dominated-experiments-likelihood-and-sufficiency`
- `fisher-information-and-finite-sample-information-bounds` (group c) requires your `finite-sample-point-estimation-and-unbiased-optimality`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c) requires your `dominated-experiments-likelihood-and-sufficiency`
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` (group c) requires your `complete-sufficiency-exponential-families-and-basu`
- `confidence-sets-pivots-and-test-inversion` (group d) requires your `dominated-experiments-likelihood-and-sufficiency`
- `conditional-and-finite-group-exact-inference` (group d) requires your `complete-sufficiency-exponential-families-and-basu`
- `minimax-lower-bounds-and-information-theoretic-methods` (group f) requires your `dominated-experiments-likelihood-and-sufficiency`
- `decision-theoretic-upper-bounds-and-oracle-risk` (group f) requires your `finite-sample-point-estimation-and-unbiased-optimality`
- `semiparametric-models-and-tangent-spaces` (group j) requires your `dominated-experiments-likelihood-and-sufficiency`

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
