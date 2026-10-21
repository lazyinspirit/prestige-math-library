# Step 5 adjudication — group **p**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `learned-reconstruction-targets-and-risk` | A | inverse-problems | 3088 | `inverse-problems-identifiability-and-stability`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `posterior-contraction-in-gaussian-sequence-inversion`, `losses-risk-and-decision-rules`, `conditional-distributions-and-regular-conditional-probability`, `posterior-prediction-and-bayesian-decision` |
| 46 | `learned-reconstruction-targets-and-risk-examples` | B | inverse-problems | 3089 | `learned-reconstruction-targets-and-risk` |
| 47 | `neural-operator-eit-inverse-map` | A | inverse-problems | 3090 | `eit-logarithmic-stability-and-conductivity-classes`, `learned-reconstruction-targets-and-risk`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 47 | `neural-operator-eit-inverse-map-examples` | B | inverse-problems | 3091 | `neural-operator-eit-inverse-map` |
| 48 | `unrolled-inverse-solvers-and-generalization` | A | inverse-problems | 3092 | `learned-reconstruction-targets-and-risk`, `iterative-regularization-and-early-stopping`, `automatic-differentiation-and-computational-graphs`, `proximal-gradient-and-accelerated-composite-optimization` |
| 48 | `unrolled-inverse-solvers-and-generalization-examples` | B | inverse-problems | 3093 | `unrolled-inverse-solvers-and-generalization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `learned-reconstruction-targets-and-risk` — Learned reconstruction targets and risk (3 item(s))

- `prop-ip-posterior-mean-is-square-loss-optimal` · proposition — The posterior mean is the unique squared-loss Bayes action in a Hilbert target
- `def-ip-learned-reconstruction-estimator` · definition — Learned inverse estimators and reconstruction targets
- `def-ip-inverse-risk-under-train-and-test-laws` · definition — Inverse reconstruction risk under train and test laws

### `learned-reconstruction-targets-and-risk-examples` — Learned reconstruction targets and risk — Examples and Counterexamples (3 item(s))

- `ex-ip-posterior-mean-outside-nonconvex-signal-class` · example — A posterior mean can lie outside a nonconvex signal class
- `ex-ip-train-test-prior-shift-changes-risk` · example — A train/test prior shift changes reconstruction risk
- `ex-ip-calibrated-posterior-sample` · example — An exact posterior sample need not minimize point risk

### `neural-operator-eit-inverse-map` — Noise-robust neural-operator approximation for EIT (19 item(s))

- `lem-ip-boundary-chart-lifting-and-fourier-projection` · lemma — Boundary chart lifting and compact-uniform Fourier projections
- `lem-ip-finite-dimensional-neural-universal-approximation` · lemma — Finite-dimensional universal approximation by smooth nonpolynomial activations
- `lem-ip-concave-modulus-hilbert-ball-intersection` · lemma — Concave-modulus intersection of Hilbert balls
- `lem-ip-boundary-spectral-counting-and-sobolev-scale` · lemma — Boundary spectral counting and Sobolev scale
- `def-ip-generalized-fourier-neural-operator` · definition — Generalized Fourier neural operator on a compact manifold
- `lem-ip-fno-torus-compact-universality` · lemma — Fourier neural operators approximate continuous maps uniformly on compact torus sets
- `thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel` · theorem — Hilbert–Schmidt operators on a compact boundary have square-integrable kernels
- `thm-ip-generalized-fno-uniform-approximation-on-compact-sets` · theorem — Generalized FNO approximation on compact sets
- `lem-ip-mean-zero-neumann-problem-wellposedness` · lemma — Mean-zero weak Neumann problem for uniformly elliptic conductivities
- `def-ip-mean-zero-ntd-and-smoothed-kernel-observation` · definition — Mean-zero NtD map and smoothed kernel observation
- `lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions` · lemma — Uniform interior higher integrability for conductivity solutions
- `lem-ip-ntd-boundary-smoothing-for-fixed-background-collar` · lemma — Uniform NtD estimates from a fixed harmonic boundary collar
- `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound` · lemma — NtD smoothing and Hilbert–Schmidt kernel bounds
- `lem-ip-interior-neumann-modes-and-kernel-forward-continuity` · lemma — Interior decay of Neumann modes and kernel forward continuity
- `lem-ip-eit-forward-continuity-and-class-compactness` · lemma — EIT forward continuity and compactness of conductivity classes
- `thm-ip-hilbert-map-extension-with-concave-modulus` · theorem — Hilbert-valued extension with a concave modulus
- `lem-ip-stable-extension-of-the-eit-inverse-map` · lemma — Stable extension of the EIT inverse map
- `thm-ip-eit-fno-noise-robust-existence` · theorem — Noise-robust existence of generalized FNO approximants for EIT
- `op-ip-finite-sample-generalization-of-neural-inverse-maps` · open-problem — Finite-sample generalization of learned inverse maps

### `neural-operator-eit-inverse-map-examples` — Noise-robust neural-operator approximation for EIT — Examples and Counterexamples (2 item(s))

- `ex-ip-finite-sample-outside-uniform-bv-bound` · example — Finite samples outside a uniform BV bound
- `ex-ip-eit-fno-continuum-vs-finite-element-experiment` · example — Continuum approximation theorem versus finite-element experiments

### `unrolled-inverse-solvers-and-generalization` — Unrolled reconstruction and finite-iteration limits (3 item(s))

- `lem-ip-unrolled-finite-domain-and-output-are-borel` · lemma — Finite unrolled domains and outputs are Borel
- `def-ip-unrolled-regularization-architecture` · definition — Unrolled regularization architecture
- `prop-ip-finite-unrolling-does-not-imply-regularization-convergence` · proposition — Finite unrolling alone gives no regularization convergence or risk guarantee

### `unrolled-inverse-solvers-and-generalization-examples` — Unrolled reconstruction and finite-iteration limits — Examples and Counterexamples (2 item(s))

- `ex-ip-truncated-landweber-versus-learned-unrolling` · example — Exact truncated Landweber and a learned finite-depth update
- `cex-ip-finite-training-fit-fails-under-operator-shift` · counterexample — Zero training loss can fail under an operator shift

## Your seams

Your pages depend on another group's:

- `learned-reconstruction-targets-and-risk` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `learned-reconstruction-targets-and-risk` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `learned-reconstruction-targets-and-risk` requires `posterior-contraction-in-gaussian-sequence-inversion` (group g, batch 20)
- `neural-operator-eit-inverse-map` requires `eit-logarithmic-stability-and-conductivity-classes` (group o, batch 45)

Another group's pages depend on yours:

- `plug-and-play-mmse-regularization` (group q) requires your `learned-reconstruction-targets-and-risk`
- `score-diffusion-inverse-solvers` (group q) requires your `learned-reconstruction-targets-and-risk`
- `score-diffusion-inverse-solvers` (group q) requires your `unrolled-inverse-solvers-and-generalization`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `learned-reconstruction-targets-and-risk`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `neural-operator-eit-inverse-map`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `unrolled-inverse-solvers-and-generalization`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `learned-reconstruction-targets-and-risk`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `neural-operator-eit-inverse-map`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `unrolled-inverse-solvers-and-generalization`

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
