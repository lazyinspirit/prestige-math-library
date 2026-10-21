# Step 5 adjudication — group **r**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 52, 53, 54: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 52 | `open-frontiers-in-learned-inverse-problems` | A | inverse-problems | 3100 | `learned-reconstruction-targets-and-risk`, `neural-operator-eit-inverse-map`, `unrolled-inverse-solvers-and-generalization`, `plug-and-play-mmse-regularization`, `score-diffusion-inverse-solvers`, `inverse-problem-benchmarking-and-shift`, `statistical-inverse-model-misspecification`, `losses-risk-and-decision-rules` |
| 52 | `open-frontiers-in-learned-inverse-problems-examples` | B | inverse-problems | 3101 | `open-frontiers-in-learned-inverse-problems` |
| 53 | `real-phase-retrieval-and-complement-property` | A | inverse-problems | 3102 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `hilbert-space-geometry-and-riesz-representation`, `the-spectral-theorem-and-singular-value-decomposition`, `inverse-problems-identifiability-and-stability`, `linear-operators-pseudoinverses-and-picard-criteria`, `linear-algebra-methods-in-combinatorics` |
| 53 | `real-phase-retrieval-and-complement-property-examples` | B | inverse-problems | 3103 | `real-phase-retrieval-and-complement-property` |
| 54 | `bayesian-inverse-experimental-design-and-information-gain` | A | inverse-problems | 3104 | `minimax-lower-bounds-and-information-theoretic-methods`, `conditional-distributions-and-regular-conditional-probability`, `gaussian-process-priors-and-posterior-laws`, `feature-inference-and-map-testing`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `linear-gaussian-inverse-posteriors-and-tikhonov`, `posterior-computation-error-and-diagnostics`, `numerical-optimization-for-statistical-computation`, `finite-precision-direct-factorizations`, `numerical-identifiability-and-optimal-experiment-design` |
| 54 | `bayesian-inverse-experimental-design-and-information-gain-examples` | B | inverse-problems | 3105 | `bayesian-inverse-experimental-design-and-information-gain`, `numerical-optimization-for-statistical-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `open-frontiers-in-learned-inverse-problems` — Open frontiers in calibrated and robust learned inversion (2 item(s))

- `op-ip-calibration-under-score-and-solver-error` · open-problem — Coverage error under score, forward-solver, and finite-time error
- `op-ip-neural-operator-sample-complexity-for-inverse-maps` · open-problem — Joint sample and mesh rates for neural inverse maps

### `open-frontiers-in-learned-inverse-problems-examples` — Open frontiers in calibrated and robust learned inversion — Examples and Counterexamples (12 item(s))

- `ex-ip-score-coverage-baseline-gaussian-sequence` · example — Exact Gaussian credible-ball coverage with a score-error budget of zero
- `ex-ip-score-coverage-unbounded-truth-prior-bias` · example — A proper Gaussian prior gives nonuniform finite-sample coverage on an unbounded truth class
- `ex-ip-operator-shift-stable-scalar-risk` · example — A scalar inverse with a conditioning-dependent shift modulus
- `ex-ip-operator-shift-vanishing-singular-value` · example — Small absolute operator error does not give a uniform inverse bound without conditioning
- `ex-ip-diffusion-two-mode-finite-sample-weights` · example — Exact iid samples estimate two-mode posterior weights
- `ex-ip-diffusion-finite-budget-misses-rare-mode` · example — No fixed sample budget uniformly protects arbitrarily rare modes
- `ex-ip-neural-inverse-mesh-truncation-modulus` · example — A diagonal inverse has an explicit Fourier truncation error
- `ex-ip-neural-inverse-finite-samples-need-class-control` · example — Finite samples cannot identify every Lipschitz inverse map uniformly
- `ex-ip-integrated-score-error-misses-euler-grid-times` · example — Integrated score error can miss every Euler evaluation
- `ex-ip-robust-ellipsoid-minimax-shift-rate` · example — Worst-law ellipsoid recovery has no training-size rate
- `ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein` · example — Ideal-marginal score error allows unbounded finite-Euler Wasserstein error
- `ex-ip-coordinate-free-fno-inverse-risk-obstruction` · example — Coordinate-free Fourier inverse maps have an odd-mesh risk floor

### `real-phase-retrieval-and-complement-property` — Real phase retrieval and phaseless ambiguity (9 item(s))

- `lem-ip-vandermonde-determinant` · lemma — The Vandermonde determinant for real moment-curve vectors
- `def-ip-real-frame-phase-retrieval` · definition — Real phase retrieval via finite real measurements
- `lem-ip-real-phase-retrieval-quotient-metric` · lemma — The real sign quotient and its induced measurement maps
- `def-ip-frame-complement-property` · definition — Complement property for a real finite measurement family
- `def-ip-real-full-spark-measurement-family` · definition — Full-spark real measurement families
- `alg-ip-finite-sign-enumeration-phase-retrieval` · algorithm — Finite sign enumeration for real phase retrieval
- `thm-ip-real-phase-retrieval-complement-property` · theorem — Real phase retrieval is equivalent to the complement property
- `thm-ip-finite-sign-enumeration-correctness` · theorem — Correctness and amplitude-residual objective of finite sign enumeration
- `cor-ip-full-spark-sharp-real-phase-measurement-count` · corollary — The sharp real phase-retrieval count for full-spark measurements

### `real-phase-retrieval-and-complement-property-examples` — Real phase retrieval and phaseless ambiguity — Examples and Counterexamples (5 item(s))

- `ex-ip-fourier-translation-reflection-ambiguity` · example — Translation and reflection ambiguities for a finite Fourier magnitude map
- `cex-ip-real-failed-complement-partition` · counterexample — A two-vector real family with a failed partition and an ambiguous pair
- `ex-ip-sign-enumeration-budget-exhaustion` · example — A one-pattern sign budget misses the best amplitude fit
- `ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame` · example — A two-dimensional three-vector full-spark real frame
- `cex-ip-complex-complement-property-insufficient` · counterexample — The complement property is not sufficient for complex phase retrieval

### `bayesian-inverse-experimental-design-and-information-gain` — Bayesian measurement design and information gain (6 item(s))

- `def-ip-design-indexed-inverse-experiment` · definition — Design-indexed dominated inverse experiment
- `def-ip-expected-information-gain` · definition — Expected information gain
- `thm-ip-eig-is-joint-relative-entropy` · theorem — Expected information gain is joint relative entropy
- `thm-ip-linear-gaussian-information-gain-logdet` · theorem — Linear Gaussian information gain has a log-determinant formula
- `alg-ip-finite-candidate-information-design` · algorithm — Finite-candidate information design
- `thm-ip-finite-candidate-information-design-correctness` · theorem — Finite-candidate information design returns an exact or certified approximate optimum

### `bayesian-inverse-experimental-design-and-information-gain-examples` — Bayesian measurement design and information gain — Examples and Counterexamples (4 item(s))

- `cex-ip-eig-cannot-identify-wrong-forward-operator` · counterexample — Expected information gain under a wrong operator does not identify the operator-parameter pair
- `ex-ip-eig-high-prior-variance-direction` · example — Sensor placement along a high prior-variance direction
- `ex-ip-eig-repeated-correlated-noise` · example — Repeated measurements with correlated noise
- `ex-ip-eig-singular-prior-support` · example — Information gain on a singular prior support

## Your seams

Your pages depend on another group's:

- `open-frontiers-in-learned-inverse-problems` requires `learned-reconstruction-targets-and-risk` (group p, batch 46)
- `open-frontiers-in-learned-inverse-problems` requires `neural-operator-eit-inverse-map` (group p, batch 47)
- `open-frontiers-in-learned-inverse-problems` requires `unrolled-inverse-solvers-and-generalization` (group p, batch 48)
- `open-frontiers-in-learned-inverse-problems` requires `plug-and-play-mmse-regularization` (group q, batch 49)
- `open-frontiers-in-learned-inverse-problems` requires `score-diffusion-inverse-solvers` (group q, batch 50)
- `open-frontiers-in-learned-inverse-problems` requires `inverse-problem-benchmarking-and-shift` (group q, batch 51)
- `open-frontiers-in-learned-inverse-problems` requires `statistical-inverse-model-misspecification` (group e, batch 14)
- `real-phase-retrieval-and-complement-property` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `real-phase-retrieval-and-complement-property` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `bayesian-inverse-experimental-design-and-information-gain` requires `feature-inference-and-map-testing` (group d, batch 12)
- `bayesian-inverse-experimental-design-and-information-gain` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `bayesian-inverse-experimental-design-and-information-gain` requires `linear-gaussian-inverse-posteriors-and-tikhonov` (group f, batch 18)
- `bayesian-inverse-experimental-design-and-information-gain` requires `posterior-computation-error-and-diagnostics` (group h, batch 23)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
