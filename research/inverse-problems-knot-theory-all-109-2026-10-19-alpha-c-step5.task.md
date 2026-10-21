# Step 5 adjudication — group **c**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `statistical-inverse-experiments-and-white-noise` | A | inverse-problems | 3010 | `statistical-experiments-models-and-identifiability`, `weak-nonparametric-bernstein-von-mises` |
| 7 | `statistical-inverse-experiments-and-white-noise-examples` | B | inverse-problems | 3011 | `statistical-inverse-experiments-and-white-noise` |
| 8 | `gaussian-sequence-models-and-risk-decomposition` | A | inverse-problems | 3012 | `statistical-inverse-experiments-and-white-noise`, `linear-operators-pseudoinverses-and-picard-criteria`, `weak-convergence-tightness-and-representation`, `bochner-inversion-and-plancherel-on-lca-groups`, `orthonormal-bases-parseval-and-fourier-series` |
| 8 | `gaussian-sequence-models-and-risk-decomposition-examples` | B | inverse-problems | 3013 | `gaussian-sequence-models-and-risk-decomposition`, `orthonormal-bases-parseval-and-fourier-series`, `bochner-inversion-and-plancherel-on-lca-groups` |
| 9 | `minimax-estimation-over-inverse-source-classes` | A | inverse-problems | 3014 | `deterministic-source-conditions-and-optimal-recovery`, `gaussian-sequence-models-and-risk-decomposition`, `minimax-lower-bounds-and-information-theoretic-methods` |
| 9 | `minimax-estimation-over-inverse-source-classes-examples` | B | inverse-problems | 3015 | `minimax-estimation-over-inverse-source-classes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `statistical-inverse-experiments-and-white-noise` — Statistical inverse experiments and white noise (2 item(s))

- `def-ip-isonormal-white-noise-experiment` · definition — Isonormal Gaussian white-noise inverse experiment
- `thm-ip-white-noise-spectral-sequence-representation` · theorem — White-noise spectral sequence representation

### `statistical-inverse-experiments-and-white-noise-examples` — Statistical inverse experiments and white noise — Examples and Counterexamples (3 item(s))

- `ex-ip-white-noise-direct-functionals` · example — Two direct white-noise functionals
- `ex-ip-white-noise-coefficient-sequence` · example — Gaussian coefficient sequence
- `ex-ip-white-noise-finite-truncation-tail` · example — Finite truncation with its omitted white-noise tail

### `gaussian-sequence-models-and-risk-decomposition` — Gaussian sequence inversion and exact risk (4 item(s))

- `def-ip-gaussian-sequence-inverse-model` · definition — Gaussian sequence inverse model
- `def-ip-statistical-ellipsoid-class` · definition — Weighted ellipsoid class for sequence inversion
- `alg-ip-svd-truncated-estimator` · algorithm — Singular-value cutoff estimator
- `thm-ip-truncated-estimator-exact-risk` · theorem — Exact worst-case risk of the truncated estimator

### `gaussian-sequence-models-and-risk-decomposition-examples` — Gaussian sequence inversion and exact risk — Examples and Counterexamples (3 item(s))

- `ex-ip-polynomial-spectrum-risk-profile` · example — Exact cutoff risk for a polynomial singular spectrum
- `ex-ip-severely-ill-posed-risk-profile` · example — Exact cutoff risk for an exponentially decaying spectrum
- `ex-ip-zero-noise-truncated-risk-limit` · example — The zero-noise boundary of truncated risk

### `minimax-estimation-over-inverse-source-classes` — Minimax estimation over inverse source classes (4 item(s))

- `lem-ip-univariate-gaussian-projection-minimax-comparison` · lemma — A one-coordinate projection risk bound
- `lem-ip-power-source-class-as-statistical-ellipsoid` · lemma — Power source balls are weighted statistical ellipsoids
- `thm-ip-general-source-minimax-comparison` · theorem — Cutoff risk and minimax RMS error over statistical ellipsoids
- `cor-ip-mild-and-severe-estimation-rates` · corollary — Polynomial and exponential minimax estimation rates

### `minimax-estimation-over-inverse-source-classes-examples` — Minimax estimation over inverse source classes — Examples (3 item(s))

- `ex-ip-sobolev-minimax-rates` · example — Sobolev ellipsoid rates in polynomial and exponential spectra
- `ex-ip-analytic-minimax-rates` · example — Analytic ellipsoid rates in polynomial and exponential spectra
- `ex-ip-power-source-minimax-rates` · example — First-order power-source rates in polynomial and exponential spectra

## Your seams

Your pages depend on another group's:

- `gaussian-sequence-models-and-risk-decomposition` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `minimax-estimation-over-inverse-source-classes` requires `deterministic-source-conditions-and-optimal-recovery` (group a, batch 3)

Another group's pages depend on yours:

- `minimax-testing-and-detection-rates` (group d) requires your `statistical-inverse-experiments-and-white-noise`
- `minimax-testing-and-detection-rates` (group d) requires your `gaussian-sequence-models-and-risk-decomposition`
- `adaptive-spectral-regularization-and-solit` (group d) requires your `statistical-inverse-experiments-and-white-noise`
- `adaptive-spectral-regularization-and-solit` (group d) requires your `gaussian-sequence-models-and-risk-decomposition`
- `feature-inference-and-map-testing` (group d) requires your `statistical-inverse-experiments-and-white-noise`
- `network-tomography-and-experiment-design` (group e) requires your `statistical-inverse-experiments-and-white-noise`
- `statistical-inverse-model-misspecification` (group e) requires your `statistical-inverse-experiments-and-white-noise`
- `statistical-inverse-model-misspecification` (group e) requires your `gaussian-sequence-models-and-risk-decomposition`
- `posterior-contraction-in-gaussian-sequence-inversion` (group g) requires your `statistical-inverse-experiments-and-white-noise`
- `posterior-contraction-in-gaussian-sequence-inversion` (group g) requires your `gaussian-sequence-models-and-risk-decomposition`
- `posterior-contraction-in-gaussian-sequence-inversion` (group g) requires your `minimax-estimation-over-inverse-source-classes`
- `credible-sets-and-frequency-coverage-in-inverse-problems` (group g) requires your `statistical-inverse-experiments-and-white-noise`

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
