# Step 5 adjudication — group **n**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 5, 6, 7: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **5**: `research/non-ml-math-remaining-81-2026-10-18-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/non-ml-math-remaining-81-2026-10-18-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **7**: `research/non-ml-math-remaining-81-2026-10-18-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `measure-theoretic-information-and-conditioning` | A | information-theory | 2502 | `finite-alphabet-entropy-and-divergence`, `conditional-distributions-and-regular-conditional-probability`, `numerical-optimization-for-statistical-computation` |
| 5 | `measure-theoretic-information-and-conditioning-examples` | B | information-theory | 2503 | `measure-theoretic-information-and-conditioning`, `fdr-control-under-dependence` |
| 6 | `method-of-types-and-finite-large-deviations` | A | information-theory | 2504 | `finite-alphabet-entropy-and-divergence`, `measure-theoretic-information-and-conditioning`, `concentration-inequalities-and-tail-bounds` |
| 6 | `method-of-types-and-finite-large-deviations-examples` | B | information-theory | 2505 | `method-of-types-and-finite-large-deviations` |
| 7 | `f-divergences-renyi-and-hypothesis-testing` | A | information-theory | 2506 | `measure-theoretic-information-and-conditioning`, `finite-sample-tests-neyman-pearson-and-valid-p-values` |
| 7 | `f-divergences-renyi-and-hypothesis-testing-examples` | B | information-theory | 2507 | `f-divergences-renyi-and-hypothesis-testing` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measure-theoretic-information-and-conditioning` — Measure-Theoretic Information and Conditioning (17 item(s))

- `lem-kl-invariant-under-measurable-bijections` · lemma — KL is invariant under a measurable bijection
- `lem-product-of-two-probability-kernels` · lemma — The product of two probability kernels is a probability kernel
- `def-measure-theoretic-mutual-information` · definition — Measure-theoretic mutual information
- `lem-same-marginal-conditional-product-law-well-defined` · lemma — The same-marginal conditional-product law is well-defined
- `thm-general-kl-variational-and-partition-formulas` · theorem — Variational and finite-partition formulas for measurable-space KL
- `def-finite-alphabet-conditional-entropy-given-observation` · definition — Finite-alphabet conditional entropy given an observation
- `def-law-entropy-as-self-mutual-information` · definition — Law entropy as self-mutual information
- `def-standard-borel-conditional-mutual-information` · definition — Conditional mutual information by a same-marginal product law
- `thm-conditional-kl-is-measurable` · theorem — Conditional KL is measurable for supplied kernels
- `def-conditional-kl-for-probability-kernels` · definition — Conditional KL for supplied probability kernels
- `rem-general-law-entropy-versus-differential-entropy` · remark — Law entropy and differential entropy are different quantities
- `thm-finite-alphabet-conditional-entropy-version-and-chain-rule` · theorem — Finite-alphabet conditional entropy is version-invariant and obeys its chain rule
- `thm-law-entropy-countable-support-characterization` · theorem — Self-mutual-information entropy on countable and non-atomic laws
- `thm-mutual-information-and-conditional-mutual-information-equality-conditions` · theorem — Zero information is exactly independence
- `thm-mutual-information-and-conditional-mutual-information-quantization` · theorem — Mutual information is recovered by finite coordinate quantizations
- `thm-general-kl-chain-rule-for-standard-borel-kernels` · theorem — KL chain rule for standard-Borel disintegrations
- `thm-mutual-information-chain-rule` · theorem — Mutual-information chain rule without subtracting infinities

### `measure-theoretic-information-and-conditioning-examples` — Measure-Theoretic Information and Conditioning — Examples (4 item(s))

- `ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy` · example — A finite deterministic copy has mutual information equal to entropy
- `ex-coarsening-conditioning-can-increase-conditional-mutual-information` · example — Coarsening the conditioning variable can increase conditional mutual information
- `ex-null-conditional-kernel-version-does-not-change-information` · example — Changing a conditional kernel on a null fiber leaves information unchanged
- `ex-uniform-law-has-infinite-self-information-entropy` · example — The uniform law has infinite self-information entropy and zero differential entropy

### `method-of-types-and-finite-large-deviations` — Method of Types and Finite Large Deviations (11 item(s))

- `def-it-empirical-type-and-type-class` · definition — Empirical types, n-types, and type classes
- `def-it-finite-alphabet-product-law` · definition — Finite product mass on words
- `lem-it-finite-relative-entropy-continuity-on-simplex` · lemma — Finite relative entropy is continuous on a simplex with positive reference law
- `lem-it-number-of-n-types-polynomial-bound` · lemma — The type classes partition the word space and have polynomial count
- `lem-it-n-type-approximation` · lemma — Every probability vector is approximated by n-types
- `lem-it-finite-product-law-is-iid` · lemma — The finite product law has iid coordinate maps
- `lem-it-type-probability-identity` · lemma — Exact probability of an empirical type class
- `lem-it-type-class-cardinality-bounds` · lemma — Polynomially sharp bounds for type-class cardinality
- `lem-it-type-class-probability-bounds` · lemma — Finite probability bounds for an empirical type
- `thm-it-type-class-entropy-approximation` · theorem — Uniform entropy approximation for type-class sizes
- `thm-it-finite-alphabet-sanov-theorem` · theorem — Finite-alphabet Sanov bounds on the support simplex

### `method-of-types-and-finite-large-deviations-examples` — Method of Types and Finite Large Deviations — Examples (3 item(s))

- `ex-it-binary-type-class-count` · example — Binary type classes at length ten
- `ex-it-finite-sanov-bernoulli-tail` · example — A finite Bernoulli large-deviation tail
- `cex-it-type-count-is-not-exactly-exponential` · counterexample — A balanced binary type class is not exactly exponential in entropy

### `f-divergences-renyi-and-hypothesis-testing` — F-Divergences, Rényi Information, and Hypothesis Testing (16 item(s))

- `def-finite-probability-vector` · definition — Finite probability vectors
- `lem-convex-generator-boundary-limits-exist` · lemma — Boundary limits of a normalized finite convex generator exist
- `lem-finite-kl-generator-is-admissible` · lemma — The finite KL generator has the required convex boundary extension
- `lem-finite-renyi-generators-are-convex` · lemma — The finite Rényi generators are convex with stated boundary values
- `def-finite-f-divergence` · definition — Finite f-divergence with support conventions
- `def-finite-hypothesis-testing-beta` · definition — Finite type-II testing function with explicit orientation
- `def-finite-stochastic-kernel` · definition — Finite stochastic kernels
- `def-finite-kullback-leibler-divergence` · definition — Finite Kullback–Leibler divergence
- `lem-convex-perspective-is-subadditive` · lemma — The closed convex perspective is subadditive
- `def-finite-renyi-divergence` · definition — Finite Rényi divergence
- `lem-finite-iid-log-likelihood-concentrates` · lemma — Finite iid log-likelihood averages concentrate
- `thm-finite-f-divergence-data-processing` · theorem — Finite data processing for f-divergences
- `thm-finite-kullback-leibler-data-processing` · theorem — Finite data processing for Kullback–Leibler divergence
- `thm-finite-renyi-data-processing` · theorem — Finite data processing for Rényi divergence
- `thm-finite-renyi-limit-is-kullback-leibler` · theorem — The finite Rényi divergence limit is KL
- `thm-kl-is-iid-type-ii-error-exponent` · theorem — KL is the iid type-II testing exponent

### `f-divergences-renyi-and-hypothesis-testing-examples` — F-Divergences, Rényi Information, and Hypothesis Testing — Examples (3 item(s))

- `ex-binary-neyman-pearson-randomized-threshold` · example — A binary Neyman–Pearson boundary randomization
- `ex-binary-f-and-renyi-divergences` · example — Binary f-, KL-, and Rényi divergences
- `ex-disjoint-support-f-and-renyi-divergences` · example — Disjoint supports and singular divergence values

## Your seams

Your pages depend on another group's:

- `measure-theoretic-information-and-conditioning` requires `finite-alphabet-entropy-and-divergence` (group m, batch 4)
- `method-of-types-and-finite-large-deviations` requires `finite-alphabet-entropy-and-divergence` (group m, batch 4)

Another group's pages depend on yours:

- `stationary-ergodic-sources-and-universal-coding` (group o) requires your `measure-theoretic-information-and-conditioning`
- `discrete-memoryless-channel-capacity` (group p) requires your `f-divergences-renyi-and-hypothesis-testing`
- `distributed-source-coding` (group q) requires your `method-of-types-and-finite-large-deviations`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
