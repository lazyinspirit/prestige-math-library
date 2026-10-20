# Step 5 adjudication — group **a**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 2, 3, 4: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/machine-learning-all-101-2026-10-19-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/machine-learning-all-101-2026-10-19-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **4**: `research/machine-learning-all-101-2026-10-19-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 2 | `prediction-problems-risks-and-empirical-minimization` | A | machine-learning | 2698 | `conditional-distributions-and-regular-conditional-probability`, `conditional-expectation`, `losses-risk-and-decision-rules`, `probability-spaces-random-variables-and-expectation`, `statistical-experiments-models-and-identifiability` |
| 2 | `prediction-problems-risks-and-empirical-minimization-examples` | B | machine-learning | 2699 | `prediction-problems-risks-and-empirical-minimization`, `interference-exposure-mappings-and-design-based-effects`, `outward-rounded-interval-and-ball-arithmetic` |
| 3 | `finite-class-pac-learning-and-erm` | A | machine-learning | 2700 | `concentration-inequalities-and-tail-bounds`, `prediction-problems-risks-and-empirical-minimization`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 3 | `finite-class-pac-learning-and-erm-examples` | B | machine-learning | 2701 | `finite-class-pac-learning-and-erm` |
| 4 | `vc-dimension-growth-and-pac-classification` | A | machine-learning | 2702 | `finite-class-pac-learning-and-erm`, `linear-algebra-methods-in-combinatorics`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 4 | `vc-dimension-growth-and-pac-classification-examples` | B | machine-learning | 2703 | `vc-dimension-growth-and-pac-classification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `prediction-problems-risks-and-empirical-minimization` — Prediction problems, risks, and empirical minimization (10 item(s))

- `def-supervised-learning-problem` · definition — Supervised prediction problems
- `def-population-and-empirical-risk` · definition — Population and empirical risk
- `def-empirical-risk-minimizer` · definition — Empirical risk minimizers
- `lem-population-and-empirical-risk-are-measurable` · lemma — Population and empirical risks are measurable
- `thm-conditional-bayes-rule-minimizes-population-risk` · theorem — A conditional Bayes rule minimizes population risk
- `lem-standard-borel-label-kernel-over-arbitrary-instance-space` · lemma — A standard-Borel label has a conditional kernel over an arbitrary measurable instance space
- `def-bayes-predictor-and-excess-risk` · definition — Bayes predictors and excess risk
- `alg-finite-list-empirical-risk-minimizer` · algorithm — Finite-list empirical risk minimization
- `alg-approximate-erm` · algorithm — Approximate empirical risk minimization with a supplied selector
- `lem-finite-list-empirical-risk-selector-is-measurable` · lemma — The finite-list ERM selector is measurable

### `prediction-problems-risks-and-empirical-minimization-examples` — Prediction problems, risks, and empirical minimization — Examples (4 item(s))

- `ex-binary-zero-one-loss` · example — Binary zero-one loss and risk
- `ex-squared-loss-conditional-mean` · example — Squared loss and a conditional mean
- `ex-absolute-loss-conditional-median` · example — Absolute loss and conditional medians
- `ex-nonattained-risk-infimum` · example — A nonattained risk infimum

### `finite-class-pac-learning-and-erm` — Finite-class PAC learning and ERM guarantees (4 item(s))

- `def-realizable-and-agnostic-pac` · definition — Realizable and agnostic PAC learning
- `thm-finite-class-agnostic-erm-bound` · theorem — Finite-class agnostic ERM bound
- `thm-finite-class-realizable-pac-bound` · theorem — Finite-class realizable PAC bound
- `thm-finite-class-sample-complexity` · theorem — Finite-class realizable and agnostic sample complexity

### `finite-class-pac-learning-and-erm-examples` — Finite-class PAC learning and ERM guarantees — Examples (3 item(s))

- `ex-finite-lookup-table-pac-sample-complexities` · example — Finite lookup tables have explicit PAC sample bounds
- `ex-duplicate-predictors-and-distinct-class-size` · example — Duplicate predictors do not enlarge the finite class
- `ex-zero-training-error-can-have-positive-population-risk` · example — Zero training error can coexist with positive population risk

### `vc-dimension-growth-and-pac-classification` — VC dimension, growth functions, and classification sample complexity (9 item(s))

- `def-shattered-set-and-vc-dimension` · definition — Indexed shattering and VC dimension of a binary class
- `def-growth-function` · definition — Growth function of a binary hypothesis class
- `lem-vc-loss-rademacher-bound` · lemma — VC entropy bound for empirical Rademacher complexity
- `thm-sauer-shelah-growth-bound` · theorem — Sauer–Shelah growth bound for indexed samples
- `def-vc-pac-learning-criterion` · definition — Measurable PAC learning criteria for a possibly infinite VC class
- `thm-vc-uniform-convergence` · theorem — One-sided VC uniform convergence and the finite-class branch
- `thm-vc-entropy-uniform-convergence` · theorem — VC entropy uniform deviation without a logarithmic sample-size factor
- `thm-vc-realizable-sample-complexity` · theorem — Realizable sample complexity for finite-VC classes
- `thm-vc-agnostic-sample-complexity` · theorem — Agnostic sample complexity for finite-VC ERM

### `vc-dimension-growth-and-pac-classification-examples` — VC dimension, growth functions, and classification sample complexity — Examples (4 item(s))

- `ex-threshold-class-has-vc-dimension-one` · example — Thresholds on the real line have VC dimension one
- `ex-intervals-on-the-real-line-have-vc-dimension-two` · example — Intervals on the real line have VC dimension two
- `ex-affine-halfspaces-have-vc-dimension-p-plus-one` · example — Affine halfspaces in real p-space have VC dimension p plus one
- `ex-infinite-singleton-class-has-finite-vc-dimension` · example — An infinite singleton class has VC dimension one

## Your seams

Another group's pages depend on yours:

- `rademacher-complexity-and-generalization` (group b) requires your `finite-class-pac-learning-and-erm`
- `compression-and-pac-bayes-generalization` (group b) requires your `prediction-problems-risks-and-empirical-minimization`
- `calibration-proper-losses-and-surrogate-classification` (group c) requires your `prediction-problems-risks-and-empirical-minimization`
- `minimax-learning-lower-bounds-and-optimal-rates` (group c) requires your `prediction-problems-risks-and-empirical-minimization`
- `adversarial-robustness-and-robust-risk` (group d) requires your `finite-class-pac-learning-and-erm`
- `ml02-private-learning` (group j) requires your `finite-class-pac-learning-and-erm`
- `stochastic-gradient-descent-for-learning` (group m) requires your `prediction-problems-risks-and-empirical-minimization`
- `mean-field-training-and-feature-learning` (group q) requires your `prediction-problems-risks-and-empirical-minimization`
- `compression-generalization-for-trained-networks` (group r) requires your `finite-class-pac-learning-and-erm`
- `discrete-masked-diffusion-and-reverse-generation` (group af) requires your `prediction-problems-risks-and-empirical-minimization`
- `active-querying-version-spaces-and-abstention` (group ag) requires your `finite-class-pac-learning-and-erm`
- `active-querying-version-spaces-and-abstention` (group ag) requires your `prediction-problems-risks-and-empirical-minimization`
- `active-querying-version-spaces-and-abstention` (group ag) requires your `vc-dimension-growth-and-pac-classification`
- `semi-supervised-graph-propagation-and-pseudolabeling-limits` (group ah) requires your `prediction-problems-risks-and-empirical-minimization`

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

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
