# Step 5 adjudication — group **m**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 37, 38, 39: 3 A/B pair(s), 6 page(s), 41 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `limited-angle-tomography-and-invisible-singularities` | A | inverse-problems | 3070 | `inverse-problems-identifiability-and-stability`, `radon-transform-and-fourier-slice-reconstruction`, `tempered-distributions-and-the-fourier-transform` |
| 37 | `limited-angle-tomography-and-invisible-singularities-examples` | B | inverse-problems | 3071 | `limited-angle-tomography-and-invisible-singularities` |
| 38 | `geodesic-x-ray-transforms-on-simple-manifolds` | A | inverse-problems | 3072 | `inverse-problems-identifiability-and-stability`, `radon-transform-and-fourier-slice-reconstruction`, `riemannian-metrics-length-distance-and-volume`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `hilbert-space-geometry-and-riesz-representation`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `riemann-curvature-and-riemannian-submanifolds` |
| 38 | `geodesic-x-ray-transforms-on-simple-manifolds-examples` | B | inverse-problems | 3073 | `geodesic-x-ray-transforms-on-simple-manifolds`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `riemann-curvature-and-riemannian-submanifolds` |
| 39 | `analytic-double-fibration-and-bolker-visibility` | A | inverse-problems | 3074 | `radon-transform-and-fourier-slice-reconstruction`, `limited-angle-tomography-and-invisible-singularities`, `geodesic-x-ray-transforms-on-simple-manifolds`, `power-series-and-real-analytic-functions`, `smooth-manifolds-and-smooth-maps`, `tempered-distributions-and-the-fourier-transform`, `the-de-rham-theorem-and-degree`, `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`, `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 39 | `analytic-double-fibration-and-bolker-visibility-examples` | B | inverse-problems | 3075 | `analytic-double-fibration-and-bolker-visibility`, `constant-rank-submersions-and-regular-level-sets`, `jacobi-fields-conjugate-points-and-the-cut-locus` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `limited-angle-tomography-and-invisible-singularities` — Limited-angle visibility and instability (10 item(s))

- `lem-ip-compact-support-fourier-laplace-is-entire` · lemma — The compact-support Fourier-Laplace transform is entire in each coordinate
- `def-ip-visible-covector-for-limited-angle-data` · definition — Visible covectors for limited-angle data
- `def-ip-schwartz-radon-transform` · definition — Radon transform on Schwartz functions
- `lem-ip-schwartz-radon-well-defined` · lemma — The Radon transform maps Schwartz functions to Schwartz offset data
- `lem-ip-limited-angle-radon-data-is-l2-on-compact-support` · lemma — Restricted Radon data are square-integrable on fixed compact support
- `cor-ip-limited-angle-compact-support-uniqueness` · corollary — Compactly supported smooth functions are unique from any open set of Radon angles
- `prop-ip-limited-angle-data-no-holder-stability` · proposition — Limited-angle inversion has no Hölder modulus on a fixed-support H1 ball
- `lem-ip-fourier-slice-identity-on-schwartz` · lemma — Fourier-slice identity for Schwartz inputs
- `prop-ip-limited-angle-fourier-visibility` · proposition — Limited-angle data sample the visible Fourier wedge and zero frequency
- `op-ip-stable-limited-angle-reconstruction` · open-problem — Sharp deterministic stability for limited-angle reconstruction

### `limited-angle-tomography-and-invisible-singularities-examples` — Limited-angle visibility and instability — Examples and Counterexamples (3 item(s))

- `ex-ip-compact-support-limited-angle-uniqueness` · example — A compactly supported bump remains uniquely determined from limited angles
- `ex-ip-high-frequency-limited-angle-instability` · example — Rapid oscillations make limited-angle data smaller than every power
- `ex-ip-invisible-wedge-null-function` · example — A nonzero Schwartz function invisible to a limited-angle Radon transform

### `geodesic-x-ray-transforms-on-simple-manifolds` — Geodesic X-ray transforms on simple surfaces (7 item(s))

- `def-ip-simple-surface-and-geodesic-xray-transform` · definition — Simple surface and geodesic X-ray transform
- `def-ip-tangent-orientation-double-cover` · definition — Tangent orientation double cover of a surface with boundary
- `op-ip-geodesic-xray-injectivity-with-conjugate-points` · open-problem — Geodesic X-ray injectivity beyond the absence of conjugate points
- `lem-ip-surface-geodesic-flow-index-form-and-transport` · lemma — Surface geodesic flow, index form, and transport primitive
- `lem-ip-orientation-cover-preserves-simplicity` · lemma — The tangent orientation cover preserves simple-surface X-ray data
- `lem-ip-pestov-identity-for-geodesic-data` · lemma — Pestov identity for geodesic data on a simple surface
- `thm-ip-2d-simple-surface-xray-injectivity` · theorem — Unweighted scalar geodesic X-ray injectivity on simple surfaces

### `geodesic-x-ray-transforms-on-simple-manifolds-examples` — Geodesic X-ray transforms on simple surfaces — Examples and Counterexamples (1 item(s))

- `ex-ip-38-scope-and-boundary-cases` · example — Simple disk, trapped annulus, and conjugate-point cancellation

### `analytic-double-fibration-and-bolker-visibility` — Analytic double fibrations and Bolker visibility (17 item(s))

- `def-ip-distributions-conormal-kernels-and-cotangent-relation` · definition — Distributions, conormal kernels, and cotangent relations
- `lem-ip-analytic-cutoff-sequence` · lemma — Finite-order analytic cutoff sequence
- `lem-ip-holomorphic-morse-normalization-and-gaussian-contour` · lemma — Holomorphic Morse normalization and Gaussian contour
- `def-ip-analytic-double-fibration-transform` · definition — Analytic double-fibration transform and canonical relation
- `def-ip-analytic-wavefront-fbi-transform` · definition — Analytic wavefront set by Gaussian FBI packets
- `thm-ip-analytic-stationary-phase-with-exponential-remainder` · theorem — Analytic stationary phase with optimal truncation
- `def-ip-bolker-condition` · definition — Bolker condition for a double-fibration transform
- `lem-ip-double-fibration-conormal-kernel` · lemma — Incidence-coordinate conormal kernel and canonical relation
- `lem-ip-local-analytic-elliptic-packet-calculus` · lemma — Local analytic elliptic packet reconstruction
- `lem-ip-analytic-nonstationary-incidence-localization` · lemma — Analytic incidence localization away from a data cotangent fiber
- `lem-ip-analytic-cutoff-sequence-and-fbi-invariance` · lemma — Analytic cutoff sequence and local FBI invariance
- `lem-ip-bolker-geometric-criteria` · lemma — Global fiber and local differential criteria for Bolker
- `lem-ip-flat-one-sided-analytic-support` · lemma — Both analytic normal directions at a flat support boundary
- `lem-ip-local-bolker-positive-packet-estimate` · lemma — Local Bolker incidence packets have a positive reduced phase
- `lem-ip-one-sided-analytic-support-continuation` · lemma — One-sided support forces its analytic conormal wavefront
- `thm-ip-analytic-wavefront-recovery-under-bolker` · theorem — Analytic wavefront recovery under Bolker
- `thm-ip-local-support-from-one-sided-vanishing` · theorem — Local support from one-sided vanishing and visible conormal data

### `analytic-double-fibration-and-bolker-visibility-examples` — Analytic double fibrations and Bolker visibility — Examples and Counterexamples (3 item(s))

- `ex-ip-analytic-missing-angle-covector` · example — A missing-angle covector has no data-side canonical pair
- `ex-ip-conjugate-point-violates-bolker` · example — A conjugate antipode breaks global Bolker injectivity
- `ex-ip-visible-conormal-under-bolker` · example — A visible Euclidean Radon conormal satisfies Bolker

## Your seams

Your pages depend on another group's:

- `limited-angle-tomography-and-invisible-singularities` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `limited-angle-tomography-and-invisible-singularities` requires `radon-transform-and-fourier-slice-reconstruction` (group l, batch 36)
- `geodesic-x-ray-transforms-on-simple-manifolds` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `geodesic-x-ray-transforms-on-simple-manifolds` requires `radon-transform-and-fourier-slice-reconstruction` (group l, batch 36)
- `analytic-double-fibration-and-bolker-visibility` requires `radon-transform-and-fourier-slice-reconstruction` (group l, batch 36)

Another group's pages depend on yours:

- `inverse-wave-problems-and-finite-time-observability` (group n) requires your `geodesic-x-ray-transforms-on-simple-manifolds`
- `calderon-problem-and-cgo-uniqueness` (group n) requires your `geodesic-x-ray-transforms-on-simple-manifolds`

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
