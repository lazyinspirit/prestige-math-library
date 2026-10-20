# Step 5 adjudication — group **i**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 26, 27, 28: 3 A/B pair(s), 6 page(s), 58 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **26**: `research/machine-learning-all-101-2026-10-19-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/machine-learning-all-101-2026-10-19-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/machine-learning-all-101-2026-10-19-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 26 | `ml02-causal-pc` | A | machine-learning | 2746 | `central-limit-theorems`, `independence-borel-cantelli-and-zero-one-laws`, `markov-kernels-and-markov-chains`, `structural-causal-models-dags-and-adjustment`, `mixed-effects-and-longitudinal-models` |
| 26 | `ml02-causal-pc-examples` | B | machine-learning | 2747 | `ml02-causal-pc` |
| 27 | `ml02-causal-anm` | A | machine-learning | 2748 | `independence-borel-cantelli-and-zero-one-laws`, `measurable-functions-and-simple-approximation`, `probability-spaces-random-variables-and-expectation`, `structural-causal-models-dags-and-adjustment`, `outward-rounded-interval-and-ball-arithmetic` |
| 27 | `ml02-causal-anm-examples` | B | machine-learning | 2749 | `ml02-causal-anm` |
| 28 | `ml02-differential-privacy` | A | machine-learning | 2750 | `conditional-distributions-and-regular-conditional-probability`, `measures-and-their-basic-properties`, `probability-spaces-random-variables-and-expectation`, `sigma-algebras-and-borel-sets`, `structural-causal-models-dags-and-adjustment`, `parametric-survival-and-reliability`, `feynman-kac-particle-filters`, `measure-theoretic-information-and-conditioning` |
| 28 | `ml02-differential-privacy-examples` | B | machine-learning | 2751 | `ml02-differential-privacy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-causal-pc` — PC algorithm and Markov-equivalence structure learning (15 item(s))

- `def-causal-discovery-oracle-regime` · definition — Causally sufficient perfect-oracle discovery regime
- `def-cpdag-markov-equivalence-class` · definition — DAG Markov equivalence, patterns, and CPDAGs
- `lem-pc-skeleton-separation` · lemma — DAG adjacency is equivalent to having no separating set
- `lem-covered-edge-reversal-preserves-d-separation` · lemma — Covered edge reversal preserves d-separation
- `lem-chordal-components-admit-both-orientations` · lemma — Edges of finite chordal graphs admit both collider-free orientations
- `def-gaussian-partial-correlation` · definition — Gaussian partial correlation
- `lem-pc-separating-set-collider` · lemma — A separating set identifies an unshielded collider
- `thm-dag-markov-equivalence-skeleton-vstructures` · theorem — DAG Markov equivalence is determined by skeletons and unshielded colliders
- `alg-pc-causal-discovery` · algorithm — Population PC causal-discovery algorithm
- `def-sample-partial-correlation` · definition — Sample partial correlation by residualization
- `thm-gaussian-zero-partial-correlation-is-conditional-independence` · theorem — Zero Gaussian partial correlation is conditional independence
- `lem-pc-fisher-transform-uniform-concentration` · lemma — Uniform concentration of Gaussian sample partial correlations
- `lem-meek-rules-complete-for-cpdag` · lemma — The background-free Meek rules complete a CPDAG
- `thm-pc-oracle-correctness` · theorem — The PC algorithm recovers the oracle CPDAG
- `thm-pc-high-dimensional-consistency` · theorem — High-dimensional consistency of Gaussian PC structure learning

### `ml02-causal-pc-examples` — PC algorithm and Markov-equivalence structure learning — Examples (3 item(s))

- `ex-pc-chain-versus-collider-separating-sets` · example — PC distinguishes a chain from an unshielded collider
- `ex-pc-latent-confounding-limitations` · example — A hidden common cause is observationally indistinguishable from an edge
- `ex-pc-markov-equivalent-dags` · example — A complete three-vertex skeleton has several equivalent DAGs

### `ml02-causal-anm` — Additive-noise causal discovery and identifiability (13 item(s))

- `def-additive-noise-model` · definition — Continuous additive-noise models on finite DAGs
- `lem-probability-measure-has-no-nonzero-period` · lemma — A probability measure on the line has no nonzero translation period
- `lem-smooth-residual-independence-has-pointwise-density-factorization` · lemma — A smooth independent residual gives a pointwise density factorization
- `alg-resit` · algorithm — RESIT: regression with subsequent independence testing
- `lem-anm-joint-density` · lemma — Positive joint density of a finite additive-noise model
- `lem-anm-noise-independent-of-nondescendants` · lemma — An ANM noise is independent of every set of nondescendants
- `def-restricted-additive-noise-model` · definition — Condition 19 and restricted additive-noise models
- `lem-anm-density-factorization-implies-dsep-conditional-independence` · lemma — An ANM density factorization implies conditional independence under d-separation
- `lem-anm-parent-dependence-persists-under-conditioning` · lemma — Parent dependence persists under nondescendant conditioning
- `lem-youngest-child-descendants-conditionally-independent` · lemma — Descendants of a youngest child are conditionally independent of its parent
- `lem-positive-minimal-dags-have-a-conditioned-reversal` · lemma — Distinct positive minimal ANM DAGs contain a conditionally reversible edge
- `thm-bivariate-additive-noise-identifiability` · theorem — Bivariate additive-noise direction identifiability under Condition 19
- `thm-restricted-anm-population-identification` · theorem — Population identifiability and RESIT correctness for restricted ANMs

### `ml02-causal-anm-examples` — Additive-noise causal discovery and identifiability — Examples (3 item(s))

- `ex-latent-confounding-mimics-anm-direction` · example — Latent confounding can mimic an observed ANM direction
- `ex-linear-gaussian-reversible-additive-noise-model` · example — A reversible linear-Gaussian additive-noise model
- `ex-identifiable-nonlinear-additive-noise-model` · example — An identifiable nonlinear ANM with a cubic cause-to-effect function

### `ml02-differential-privacy` — Differential privacy mechanisms and composition (20 item(s))

- `def-differential-privacy-and-adjacency` · definition — Differential privacy, databases, and add/remove adjacency
- `def-laplace-distribution` · definition — Laplace noise distribution
- `def-global-l1-sensitivity` · definition — Global L1 sensitivity
- `thm-laplace-density-from-exponential-law` · theorem — Laplace noise has its stated Lebesgue density
- `lem-laplace-product-density` · lemma — Finite independent Laplace noise has product density
- `alg-laplace-mechanism` · algorithm — Laplace mechanism
- `thm-laplace-mechanism-privacy` · theorem — Laplace mechanism privacy
- `def-exponential-mechanism-utility-sensitivity` · definition — Exponential-mechanism utility sensitivity
- `alg-exponential-mechanism` · algorithm — Exponential mechanism
- `thm-exponential-mechanism-privacy-and-utility` · theorem — Exponential mechanism privacy and utility
- `lem-dp-test-function-extension` · lemma — Differential privacy inequality for bounded measurable functions
- `thm-dp-postprocessing` · theorem — Differential privacy is preserved under randomized postprocessing
- `lem-dp-pure-privacy-loss-kl-bound` · lemma — Pure differential privacy bounds relative entropy
- `lem-dp-approximate-kernel-purification` · lemma — Approximate-DP kernels admit a nearby pure-DP kernel on standard-Borel targets
- `thm-basic-adaptive-composition` · theorem — Basic adaptive composition
- `thm-advanced-adaptive-composition-standard-borel-outputs` · theorem — Advanced adaptive composition for standard-Borel outputs
- `lem-dp-joint-measure-purification` · lemma — Approximate privacy admits purification of a joint measure with fixed history marginal
- `thm-advanced-adaptive-composition-arbitrary-measurable-outputs` · theorem — Advanced adaptive composition on arbitrary measurable output spaces
- `thm-basic-and-advanced-composition` · theorem — Basic and advanced adaptive composition
- `rem-differential-privacy-scope-and-limitations` · remark — Record-level scope and limits of differential privacy

### `ml02-differential-privacy-examples` — Differential privacy mechanisms and composition — Examples (4 item(s))

- `ex-add-remove-noisy-count` · example — Add/remove noisy count
- `ex-finite-range-private-selection` · example — Finite-range private selection
- `ex-postprocessing-private-noisy-count` · example — Thresholding a private noisy count
- `ex-record-level-versus-client-level-adjacency` · example — Record-level versus client-level adjacency

## Your seams

Another group's pages depend on yours:

- `ml02-private-learning` (group j) requires your `ml02-differential-privacy`
- `ml02-federated-optimization` (group j) requires your `ml02-differential-privacy`

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
