# Step 7 adjudication — group **j**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **1**, **2**, **22**: 3 A/B pair(s), 6 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/physics-support/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/physics-em-sr-40-2026-10-08-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `sr-spacetime-primitives` | A | special-relativity | 209 | `connectedness`, `continuity-ivt-evt-and-uniform-continuity`, `determinants-of-matrices-over-a-commutative-ring`, `dual-spaces-bilinear-forms-and-inertia`, `exterior-powers-orientation-and-hodge-duality`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `manifolds-with-boundary-collars-and-orientations`, `matrices-and-the-matrix-of-a-linear-map`, `mixed-partials-taylor-and-extrema`, `rn-as-a-normed-space`, `smooth-manifolds-and-smooth-maps`, `tangent-cotangent-and-the-differential`, `the-total-derivative`, `topological-spaces-and-continuity`, `vector-spaces-and-subspaces`, `countability-axioms-and-cardinal-functions`, `metric-spaces`, `subspaces-products-and-quotients`, `the-derivative-and-mean-value-theorems`, `the-topology-of-euclidean-space`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-determinant-of-a-linear-operator`, `the-riemann-integral` |
| 1 | `sr-spacetime-primitives-examples` | B | special-relativity | 210 | `sr-spacetime-primitives`, `the-logarithm-and-general-powers`, `dual-spaces-bilinear-forms-and-inertia`, `mixed-partials-taylor-and-extrema`, `smooth-manifolds-and-smooth-maps`, `tangent-cotangent-and-the-differential`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-determinant-of-a-linear-operator`, `the-riemann-integral` |
| 2 | `sr-lorentz-transformations` | A | special-relativity | 211 | `sr-spacetime-primitives`, `banach-space-differential-calculus-and-banach-manifolds`, `bounded-linear-operators-and-quotient-spaces`, `construction-of-r-via-cauchy-sequences`, `finite-dimensional-normed-spaces-and-riesz-lemma`, `foundations-of-the-real-numbers`, `linear-maps-rank-nullity-and-quotient-spaces`, `normed-and-banach-spaces`, `roots-and-rational-powers`, `strongly-continuous-semigroups-and-hille-yosida`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-derivative-and-mean-value-theorems`, `the-determinant-of-a-linear-operator`, `the-exponential-function`, `the-inverse-function-theorem-completed`, `the-logarithm-and-general-powers`, `symmetric-groups-and-the-sign-homomorphism` |
| 2 | `sr-lorentz-transformations-examples` | B | special-relativity | 212 | `sr-lorentz-transformations` |
| 22 | `em-retarded-point-prerequisites` | A | classical-electromagnetism-mathematics | 323 | `em-causal-wave-kernel-prerequisites` |
| 22 | `em-retarded-point-prerequisites-examples` | B | classical-electromagnetism-mathematics | 324 | `em-retarded-point-prerequisites` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sr-spacetime-primitives` — Spacetime Primitives (19 item(s))

- `def-affine-space-and-displacement` · definition — Affine spaces over a real vector space and displacement vectors
- `def-lorentz-form-and-inertia` · definition — Lorentz forms of inertia (3,1,0) on a 4-dimensional real vector space
- `def-causal-classification-of-lorentz-vectors` · definition — Timelike, null, spacelike and causal vectors of a Lorentz vector space
- `lem-lorentz-form-has-orthonormal-basis` · lemma — Every Lorentz form admits an ordered basis with matrix diag(-1,1,1,1)
- `def-lorentz-orthogonality-and-orthogonal-complement` · definition — eta-orthogonality and orthogonal complements in a Lorentz vector space
- `def-time-orientation-and-future-causal-sets` · definition — Time orientation, future and past timelike/null/causal vectors, and the closed cones
- `lem-timelike-cone-has-two-convex-components` · lemma — The timelike set has exactly two convex components, described in orthonormal coordinates
- `def-sr-affine-minkowski-model` · definition — Oriented time-oriented affine Minkowski space (the spacetime primitives)
- `def-inertial-frame-and-inertial-chart` · definition — Inertial frames and inertial charts of the affine Minkowski model
- `lem-future-oriented-inertial-frames-exist` · lemma — Existence of future-oriented inertial frames at every event
- `lem-affine-minkowski-charts-form-a-smooth-atlas` · lemma — The affine atlas makes the Minkowski model a smooth 4-manifold diffeomorphic to R^4
- `lem-tangent-space-of-affine-minkowski-space-is-v` · lemma — The tangent space of the affine Minkowski model at any event is canonically V
- `def-oriented-minkowski-volume-form` · definition — The oriented volume form epsilon and the permutation symbols of an inertial frame
- `lem-volume-form-is-independent-of-the-oriented-frame` · lemma — The oriented volume form is independent of the positively oriented inertial frame
- `def-sr-si-units-and-coordinate-conventions` · definition — SI units and coordinate conventions of the special-relativity framework
- `post-sr-inertial-covariance` · postulate — Adopted inertial covariance of the model equations
- `post-sr-ideal-clocks-and-light` · postulate — Adopted ideal-clock and ideal-vacuum-light interpretation
- `def-spatial-euclidean-structure-of-an-inertial-frame` · definition — The Euclidean spatial structure and cross product of an inertial frame
- `rem-sr-primitive-and-derived-status` · remark — Primitive and derived notions of the spacetime-primitives page

### `sr-spacetime-primitives-examples` — Spacetime Primitives — Examples (8 item(s))

- `ex-sr-affine-chart-transition` · example — Worked affine transition between two inertial charts
- `ex-sr-causal-classification-computation` · example — Worked causal classification of explicit displacements
- `ex-sr-orthogonal-complement-of-a-timelike-vector` · example — Worked orthogonal complement of a timelike displacement is positive definite
- `cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite` · counterexample — The orthogonal complement of a null vector need not be positive definite
- `cex-sr-causal-vectors-are-not-closed-under-addition` · counterexample — The causal vectors of a Lorentz vector space are not closed under addition
- `ex-sr-volume-form-component-signs` · example — Worked component signs of the oriented volume form
- `cex-sr-lorentz-form-is-not-an-inner-product` · counterexample — The Lorentz form is not an inner product
- `ex-sr-constructing-an-oriented-inertial-frame` · example — Worked construction of a future-oriented inertial frame from an arbitrary orthonormal basis

### `sr-lorentz-transformations` — Lorentz Transformations (17 item(s))

- `def-lorentz-map-and-lorentz-group` · definition — Linear and affine Lorentz maps, and the Lorentz group
- `def-lorentz-boost` · definition — The passive Lorentz boost with parameter beta
- `def-spatial-rotation-of-an-inertial-frame` · definition — Spatial rotations of an inertial frame
- `lem-lorentz-map-preserves-metric-and-causal-structure` · lemma — Lorentz maps are isomorphisms of determinant +-1 that preserve causal character and permute the cones; the Lorentz sets are groups
- `lem-boost-is-proper-orthochronous-with-inverse` · lemma — The passive boost is a proper orthochronous Lorentz map with inverse B(-beta)
- `lem-collinear-boost-composition-and-velocity-addition` · lemma — Collinear boost composition and the relativistic velocity-addition law
- `lem-rapidity-parametrization-of-collinear-boosts` · lemma — Rapidity parametrization of collinear boosts
- `lem-boost-rotation-factorization` · lemma — Unique boost-rotation factorization of proper orthochronous Lorentz maps
- `thm-sr-proper-orthochronous-lorentz-algebra` · theorem — The proper orthochronous Lorentz group: boosts, rotations, unique factorization and invariants
- `lem-lorentz-lie-algebra-structure` · lemma — The Lie algebra of the Lorentz group: eta-antisymmetric endomorphisms and the generators M_ab
- `lem-lorentz-exponential-map-and-rapidity` · lemma — The Lorentz exponential: exp(sK) is proper orthochronous, and boosts are exponentials of generators
- `thm-sr-affine-isometry-classification` · theorem — C^2 eta-preserving maps of affine Minkowski space are affine Lorentz maps
- `lem-inertial-chart-transitions-are-affine-lorentz` · lemma — Inertial charts are related by proper orthochronous affine Lorentz maps, and every such map is a chart transition
- `pthm-sr-interval-and-cone-invariance` · physics-theorem — Interval, cone and orientation invariance across inertial descriptions
- `def-ck-tensor-field-on-minkowski-space` · definition — C^k tensor fields on affine Minkowski space and their inertial components
- `thm-sr-tensor-and-current-transformation` · theorem — Transformation of tensor, covector, derivative and current components under affine Lorentz maps
- `rem-sr-verbal-postulate-reconstruction-obligations` · remark — Verbal-postulate reconstruction obligations not discharged by this framework

### `sr-lorentz-transformations-examples` — Lorentz Transformations — Examples (9 item(s))

- `ex-sr-one-plus-one-boost-matrix` · example — Worked 1+1 boost matrix: metric, determinant, inverse and interval invariance
- `ex-sr-collinear-boost-composition-and-rapidity` · example — Worked collinear composition and rapidity addition at beta = 3/5
- `ex-sr-boost-rotation-factorization-worked` · example — Worked boost-rotation factorization of a composition of two perpendicular boosts
- `cex-sr-noncollinear-boosts-do-not-commute` · counterexample — Counterexample: noncollinear boosts do not commute
- `cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous` · counterexample — Counterexample: improper and non-orthochronous Lorentz maps, and det = 1 without orthochrony
- `ex-sr-tensor-component-transformation` · example — Worked covector and vector component transformation under a beta = 3/5 boost
- `ex-sr-four-current-boost` · example — Worked current boost law and coordinate versus rest density
- `ex-sr-primed-frame-origin-motion` · example — Worked motion of the primed frame's origin under a passive boost
- `cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost` · counterexample — Counterexample: a spatial rotation is a proper orthochronous Lorentz map that is not a boost

### `em-retarded-point-prerequisites` — Complete retarded point fields (1 item(s))

- `thm-em-retarded-root-and-fields` · theorem — Complete retarded point fields: unique retarded root, the delta substitution with denominator $1-n\cdot\beta$, Liénard-Wiechert potentials and fields, and a uniform far-zone remainder

### `em-retarded-point-prerequisites-examples` — Complete retarded point fields — Examples (1 item(s))

- `ex-em-wave-equation-prerequisites-hypothesis-boundaries` · example — Explicit mathematical hypothesis/convention examples

## Your seams

Your pages depend on another group's:

- `em-retarded-point-prerequisites` requires `em-causal-wave-kernel-prerequisites` (group i, batch 21)

Another group's pages depend on yours:

- `em-retarded-fields-and-radiation` (group e) requires your `em-retarded-point-prerequisites`
- `em-expanded-analysis-prerequisites` (group h) requires your `sr-spacetime-primitives`
- `sr-worldlines-and-clocks` (group k) requires your `sr-lorentz-transformations`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-em-sr-40-2026-10-08-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Historical Step-7 closure recovery, `physics-em-sr-40-2026-10-08`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
