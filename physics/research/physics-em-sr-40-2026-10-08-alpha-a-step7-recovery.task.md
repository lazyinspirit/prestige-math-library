# Step 7 adjudication — group **a**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **23**, **24**, **25**: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

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
| 23 | `em-primitives-and-postulates` | A | classical-electromagnetism | 325 | `em-minkowski-mathematical-prerequisites`, `linear-independence-bases-and-dimension`, `sr-forces-and-continuum`, `vector-spaces-and-subspaces`, `countability-and-uncountability`, `distributions-test-functions-and-differentiation`, `lebesgue-measure-on-euclidean-space`, `measures-and-their-basic-properties`, `sigma-algebras-and-borel-sets`, `the-divergence-theorem-and-classical-stokes`, `the-lebesgue-integral-and-the-convergence-theorems`, `em-elementary-mathematical-prerequisites` |
| 23 | `em-primitives-and-postulates-examples` | B | classical-electromagnetism | 326 | `em-primitives-and-postulates` |
| 24 | `em-maxwell-integral-and-constraints` | A | classical-electromagnetism | 327 | `em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates`, `inverse-and-implicit-function-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `topology-of-r`, `the-direct-method-and-euler-lagrange-equations` |
| 24 | `em-maxwell-integral-and-constraints-examples` | B | classical-electromagnetism | 328 | `em-maxwell-integral-and-constraints` |
| 25 | `em-electrostatics-in-vacuum` | A | classical-electromagnetism | 329 | `em-maxwell-integral-and-constraints`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lebesgue-integral-and-the-convergence-theorems`, `maximum-principles-harnack-and-liouville-in-rn`, `the-real-gamma-and-beta-functions`, `density-separability-and-convolution-in-lp`, `harmonic-functions-and-mean-values-in-rn` |
| 25 | `em-electrostatics-in-vacuum-examples` | B | classical-electromagnetism | 330 | `em-electrostatics-in-vacuum`, `improper-integrals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-primitives-and-postulates` — Primitives and postulates (10 item(s))

- `def-em-lab-geometry` · definition — Laboratory geometry: a restricted inertial chart, its spatial slices and fixed-time fields
- `def-em-si-conventions` · definition — Framework-local SI units, the vacuum constants and the exact/measured status of their values
- `def-em-sources` · definition — Charge parameter, frame charge and current densities, volume charge and flux, and the four-current
- `def-em-fields` · definition — The electric and magnetic fields as fixed-time spatial vector fields
- `post-em-minkowski-physical-model` · postulate — Adopted Minkowski physical model of the electromagnetic framework
- `def-em-relativistic-worldlines-frames` · definition — Worldlines, four-velocity, chart readings and the frame/observer distinction
- `post-em-vacuum-maxwell` · postulate — The microscopic vacuum Maxwell equations: smooth and weak branches
- `def-em-electromagnetic-tensor` · definition — The electromagnetic two-form, its observer decomposition and the four-current
- `pthm-em-linear-superposition` · physics-theorem — Superposition for prescribed Maxwell fields and sources
- `post-em-lorentz-coupling` · postulate — The Lorentz coupling: external force on a test charge and the continuum force and power densities

### `em-primitives-and-postulates-examples` — Primitives and postulates — Examples (2 item(s))

- `ex-em-smooth-and-point-source-types` · example — Smooth and point-source constructions: distinct for nonzero charge, both zero at zero charge
- `ex-em-unit-dimensional-checks` · example — Dimensional check of every Maxwell and Lorentz term in SI units

### `em-maxwell-integral-and-constraints` — Integral Maxwell and constraints (9 item(s))

- `lem-em-coordinate-cell-localization` · lemma — Localization of a continuous function by axis-parallel cube integrals
- `lem-em-surface-density-localization` · lemma — Surface densities with vanishing test pairings vanish
- `def-em-fixed-test-geometry` · definition — Fixed volume and patch test geometries, outward normals and induced orientations
- `def-em-weak-sources` · definition — Distributional Maxwell equations with point and stationary-sheet sources
- `post-em-distributional-vacuum-maxwell` · postulate — Vacuum Maxwell equations adopted for the declared distributional-source models
- `pthm-em-charge-continuity` · physics-theorem — Charge continuity as a compatibility condition of the Maxwell equations
- `pthm-em-integral-maxwell` · physics-theorem — Smooth differential-integral equivalence for every admissible test geometry
- `pthm-em-fixed-vacuum-jumps` · physics-theorem — Stationary-sheet jump conditions of the weak Maxwell equations
- `pthm-em-gauss-constraint-propagation` · physics-theorem — Evolution preserves the Gauss constraints

### `em-maxwell-integral-and-constraints-examples` — Integral Maxwell and constraints — Examples (2 item(s))

- `ex-em-nonconserved-switched-charge` · example — A suddenly appearing point charge with zero current is inadmissible
- `texp-em-displacement-current-surface-choice` · thought-experiment — Surface independence of the total current flux and the role of the displacement term

### `em-electrostatics-in-vacuum` — Electrostatics in vacuum (9 item(s))

- `lem-em-newtonian-far-field-gradient` · lemma — The far-field gradient of a compactly supported Newtonian potential
- `lem-em-distributional-gradient-smooth-off-a-point` · lemma — The distributional gradient of a locally integrable function smooth off one point
- `lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains` · lemma — Euclidean balls, annuli and spheres as bounded smooth domains and hypersurfaces
- `def-em-electrostatic-regime` · definition — The static and pure electrostatic regimes and their fixed-time reading
- `pthm-em-electrostatic-potential` · physics-theorem — Scalar potential and the Poisson equation in a star-shaped electrostatic region
- `pthm-em-coulomb-solution` · physics-theorem — The localized Newtonian potential and the ideal point-charge Coulomb field
- `pthm-em-electrostatic-work` · physics-theorem — Work of the electrostatic force is the potential difference and is path independent
- `pthm-em-electrostatic-field-energy` · physics-theorem — Finite-source assembly energy equals the electric field energy
- `pthm-em-point-self-energy-divergence` · physics-theorem — Divergence of the point-charge field energy and the limits of mass inference

### `em-electrostatics-in-vacuum-examples` — Electrostatics in vacuum — Examples (2 item(s))

- `ex-em-infinite-line-normalization` · example — The infinite line charge: logarithmic potential, flux normalization and divergent energy
- `ex-em-uniform-ball-coulomb` · example — The uniformly charged ball: interior and exterior fields, continuous potential and finite energy

## Your seams

Your pages depend on another group's:

- `em-primitives-and-postulates` requires `em-minkowski-mathematical-prerequisites` (group g, batch 14)
- `em-primitives-and-postulates` requires `sr-forces-and-continuum` (group m, batch 9)
- `em-primitives-and-postulates` requires `em-elementary-mathematical-prerequisites` (group g, batch 13)
- `em-maxwell-integral-and-constraints` requires `em-elementary-mathematical-prerequisites` (group g, batch 13)

Another group's pages depend on yours:

- `em-electrostatic-boundaries-and-conductors` (group b) requires your `em-electrostatics-in-vacuum`
- `em-electrostatic-multipoles` (group b) requires your `em-electrostatics-in-vacuum`
- `em-magnetostatics-in-vacuum` (group b) requires your `em-maxwell-integral-and-constraints`
- `em-material-response` (group c) requires your `em-maxwell-integral-and-constraints`
- `em-potentials-and-gauge` (group c) requires your `em-primitives-and-postulates`
- `em-energy-momentum-and-angular-balance` (group d) requires your `em-primitives-and-postulates`
- `em-vacuum-waves-and-polarization` (group d) requires your `em-maxwell-integral-and-constraints`

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
