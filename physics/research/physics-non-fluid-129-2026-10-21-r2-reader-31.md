# Step 3a Reader Report — Batch 31

Run: `physics-non-fluid-129-2026-10-21-r2`

## Opened inventory

Assigned pages read:

- `library/general-relativity/gr-fx03-geometric-cauchy-stability.md`
- `library/general-relativity/gr-fx03-geometric-cauchy-stability-examples.md`

Assigned items read:

- `def-gr-fx-fixed-gauge-data-topology`
- `def-gr-fx-metric-pullback-comparison`
- `thm-gr-fx-finite-slab-stability`
- `prop-gr-fx-geometric-observable-continuity`
- `ex-gr-fx03-1`
- `ex-gr-fx03-2`

Required page context read:

- `library/general-relativity/gr-gr14-full-high-regularity-symmetric-hyperbolic-proof.md`
- `library/general-relativity/gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability.md`
- `library/general-relativity/gr-connections-and-free-fall.md`

Selected additional supplier items read:

- `def-gr-periodic-torus-and-sobolev-spaces`; `def-gr-periodic-symmetric-hyperbolic-system`
- `def-countable-choice`; `def-dependent-choice`
- `thm-gr-periodic-symmetric-hyperbolic-existence`; `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`; `thm-gr-periodic-symmetric-hyperbolic-smooth-persistence`
- `lem-gr-smooth-composition-and-commutator-estimates`; `lem-gr-positive-definite-symmetric-matrix-bounds`; `lem-gr-periodic-sobolev-embedding`; `lem-gr-galerkin-projection-properties`
- `thm-gr-local-geometric-development`; `thm-gr-harmonic-constraint-propagation`; `thm-gr-constraint-equations-in-normal-frame`; `thm-gr-smooth-maximal-globally-hyperbolic-development`; `thm-gr-barotropic-fluid-local-evolution`
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`; `prop-coordinate-geodesic-equation`; `thm-gronwall-integral-inequality`
- `def-gr-timelike-worldline-and-proper-time`; `def-gr-smooth-lorentzian-objects`; `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`; `thm-smooth-inverse-function-theorem-on-manifolds`
- `thm-sine-and-cosine-derivatives`; `cor-trigonometric-parity-and-pythagorean-identity`; `thm-sine-cosine-zero-sets-and-fundamental-period`; `cor-mean-value-theorem`; `thm-intermediate-value`
- `def-real-exponential-function-and-e`; `thm-derivative-of-exponential`; `thm-exponential-addition-formula`; `def-factorial-and-falling-factorial`; `lem-of-naturals-positive`
- `def-gr-si-unit-and-coordinate-conventions`

## Review findings and page verdicts

### `gr-fx03-geometric-cauchy-stability`

The two definitions, finite-slab theorem and observables proposition give a common fixed-gauge comparison context, with state normalization, compact state margin and finite-slab hypotheses stated. The inhomogeneous energy argument subtracts the systems, controls coefficient differences using the prescribed state and time-derivative bounds, justifies the energy identity at the stated regularity, and regularizes the square root before applying Gronwall. The neighborhood argument uses a lower-norm bootstrap, higher-order energy control, a uniform local restart time and uniqueness on overlaps. The geometric conclusion is explicitly conditional on the fixed model, constraints, matter conservation, reconstruction and spacelike-slice hypotheses. I found no false deductive claim in the page summary. The SI form of the displayed estimate has the dimensional defect recorded below for `thm-gr-fx-finite-slab-stability`.

**Page verdict:** no page-prose defect found; the item-level unit issue remains open for owner disposition.

### `gr-fx03-geometric-cauchy-stability-examples`

The circle map proof establishes global invertibility from strict monotonicity and the translation identity, then verifies the pullback component and proper-time equality. The tikzcd triangle has the correct curve, pullback-metric and isometry arrows and commutes as claimed. The scalar example solves the stated ODE exactly and the growth comparison disproves a single `C e^{CT}` bound across all dimensionless horizons while preserving the finite-horizon qualification.

**Page verdict:** no page-prose or diagram defect found; an SI unit qualification in `ex-gr-fx03-1` remains open for owner disposition.

## Uneditable findings

1. In `thm-gr-fx-finite-slab-stability`, `## Statement`, the estimate uses the same `C` as a leading multiplicative factor and as the coefficient in `e^{Ct}`. The item’s fixed-gauge definition and the theorem’s SI remark set `t=x^0` in metres and the normalized state norm to be dimensionless. In the homogeneous case the leading factor must be dimensionless, while the exponent coefficient must have units `m^{-1}`. As written the same constant cannot have both dimensions. State separate constants with their units or nondimensionalize time and the forcing norm. This invalidates the stated SI interpretation, though the underlying inequality over real-valued coordinates is supported by the proof.

2. In `prop-gr-fx-geometric-observable-continuity`, `## Statement`, paragraph beginning “Fix a compact parameter interval”, the set `K` is called a compact subset of the “position-velocity phase space” without specifying the object. Define it, for example, as a compact subset of `TU={(p,v): p in U, v in T_pM}` in the stated chart. The later proof uses coordinates `(x,v)`, but that does not define the term before its first use in the claim.

3. In `ex-gr-fx03-1`, `## Statement`, the coordinate `x^0` and interval length `ℓ` are assigned metres, and the displayed result is called proper time `ℓ/c`. The mathematical proper-time definition declares `c` only as a positive real and explicitly defers its physical dimension; the separate SI convention sets `c` to `m s^{-1}`. Record that convention in this item’s physical reading (and identify `ℓ` in metres), so the stated result has units of seconds. The exact local convention source is `items/def-gr-si-unit-and-coordinate-conventions.md`, Definition clauses (a)–(c).

## Edits

None. This is a read-only reader assignment. All three findings are retained for owner disposition; no content carrier, contract or verification stamp was changed.

## Source checks and limitations

- Friedrich and Rendall, *The Cauchy Problem for the Einstein Equations*, arXiv:gr-qc/0002074, §3.1 (symmetric-hyperbolic energy/existence and common-time stability discussion) and §5.3 (compact-data Cauchy stability on a common region): https://arxiv.org/pdf/gr-qc/0002074. The paper is a survey/sketch at the cited PDE level; the local carrier supplies its own detailed argument.
- Hunter, *Notes on Partial Differential Equations*, Chapter 8, §§8.1–8.3, especially Proposition 8.3 and Theorem 8.6/Corollary 8.7: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf. These are energy and uniqueness results for symmetric systems on a bounded domain with boundary; the assigned periodic estimate is proved locally without a boundary term.
- Sbierski, arXiv:1309.7591, §2, Definition 2.1 and Remark 2.5: https://arxiv.org/pdf/1309.7591. The opened passage gives the induced-metric pullback convention and discusses diffeomorphism/isometry invariance.
- The cited Métivier PDF (`https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf`) timed out in retrieval. No finding depends on using it as proof evidence.

The declared `deps` closure for the six assigned items contains 2,277 item carriers. I reviewed the six assigned items and the direct mathematical suppliers listed above, but did not inspect the complete transitive closure in dependency order. In particular, the transitive proof chains below those suppliers remain outside this review’s verified coverage. This is a genuine coverage limitation; no full-closure review is claimed. There was no external blocker preventing the scoped page and item review.
