# Step 7 adjudication — group **b**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **26**, **27**, **28**: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

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
| 26 | `em-electrostatic-boundaries-and-conductors` | A | classical-electromagnetism | 331 | `em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum` |
| 26 | `em-electrostatic-boundaries-and-conductors-examples` | B | classical-electromagnetism | 332 | `em-electrostatic-boundaries-and-conductors` |
| 27 | `em-electrostatic-multipoles` | A | classical-electromagnetism | 333 | `em-boundary-and-spectral-prerequisites`, `em-electrostatics-in-vacuum`, `darboux-lhopital-and-taylor` |
| 27 | `em-electrostatic-multipoles-examples` | B | classical-electromagnetism | 334 | `em-electrostatic-multipoles` |
| 28 | `em-magnetostatics-in-vacuum` | A | classical-electromagnetism | 335 | `em-expanded-analysis-prerequisites`, `em-maxwell-integral-and-constraints` |
| 28 | `em-magnetostatics-in-vacuum-examples` | B | classical-electromagnetism | 336 | `em-magnetostatics-in-vacuum` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-electrostatic-boundaries-and-conductors` — Electrostatic boundaries and conductors (9 item(s))

- `lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface` · lemma — The boundary of a bounded smooth domain is a compact embedded hypersurface
- `lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain` · lemma — The vacuum region around compact smooth conductors is a bounded smooth domain
- `lem-em-half-space-harmonic-uniqueness-with-decay` · lemma — Uniqueness for harmonic functions on a punctured half-space with zero trace, decaying at the pole and at infinity
- `post-em-electrostatic-conductor-model` · postulate — The ideal electrostatic conductor model
- `pthm-em-conductor-surface-charge` · physics-theorem — Surface charge and normal field on an ideal conductor
- `pthm-em-electrostatic-bvp-uniqueness` · physics-theorem — Uniqueness and flux compatibility for the electrostatic boundary value problem
- `pthm-em-electrostatic-bvp-existence` · physics-theorem — Existence and regularity for the electrostatic boundary value problem
- `pthm-em-image-method-certificate` · physics-theorem — The image-method certificate for a point charge above a grounded plane
- `pthm-em-capacitance-energy` · physics-theorem — Capacitance and energy for specified linear conductor geometry

### `em-electrostatic-boundaries-and-conductors-examples` — Electrostatic boundaries and conductors — Examples (3 item(s))

- `ex-em-grounded-plane-image-force` · example — Force on a held charge above a grounded plane in the image model
- `ex-em-parallel-plate-capacitor` · example — The ideal infinite parallel-plate capacitor
- `ex-em-neumann-data-failure` · example — Incompatible total flux forbids a solution

### `em-electrostatic-multipoles` — Electrostatic multipoles (5 item(s))

- `def-em-electric-moments` · definition — Total charge, dipole moment, Cartesian moments and traceless quadrupole of a static charge distribution
- `pthm-em-moment-origin-change` · physics-theorem — Origin shift of the source moments: Q, the dipole p - Qb, the Cartesian expansion and the traceless quadrupole
- `pthm-em-electric-dipole-torque` · physics-theorem — External force and torque of prescribed charge data in a Lipschitz external field
- `pthm-em-electric-dipole-expansion` · physics-theorem — Uniform Coulomb dipole expansion of a compactly supported charge density with an explicit remainder
- `pthm-em-electric-general-multipoles` · physics-theorem — Convergent all-order spherical multipole expansion with monopole, dipole and quadrupole terms

### `em-electrostatic-multipoles-examples` — Electrostatic multipoles — Examples (2 item(s))

- `ex-em-quadrupole-symmetry` · example — Four stationary point charges with vanishing total charge and dipole moment and traceless quadrupole diag(6qa^2,-6qa^2,0)
- `ex-em-two-charge-dipole` · example — Exact two-charge dipole potential, its moments and the explicit far-field remainder

### `em-magnetostatics-in-vacuum` — Magnetostatics in vacuum (10 item(s))

- `lem-em-ideal-line-current-field` · lemma — The azimuthal line field $\rho^{-1}e_\varphi$: local integrability and distributional curl on the axis
- `lem-em-ideal-cylindrical-sheet-field` · lemma — The piecewise constant cylinder field $e_3\mathbf 1_{\{\rho<a\}}$: distributional curl on the cylinder
- `lem-em-newtonian-kernel-curl-identity` · lemma — Divergence and curl of the Newtonian potential of a smooth compact vector field
- `def-em-steady-current-regime` · definition — The steady-current (magnetostatic) regime, the compact smooth current class and the declared ideal noncompact models
- `post-em-ideal-magnetostatic-models` · postulate — Physical adoption of the declared ideal magnetostatic loop, line and cylindrical-sheet models
- `def-em-magnetic-moment` · definition — The magnetic dipole moment of a compact conserved current and of the declared ideal thin loop
- `pthm-em-magnetostatic-vector-potential` · physics-theorem — Coulomb-gauge Newtonian vector potential for a compact smooth conserved current
- `pthm-em-biot-savart` · physics-theorem — Biot-Savart representation for a compact smooth conserved current and its declared thin-loop limit
- `pthm-em-magnetic-dipole-field` · physics-theorem — Far-field dipole expansion of a compact conserved current with a uniform explicit remainder
- `pthm-em-magnetic-loop-force-torque` · physics-theorem — Force and torque on a declared ideal thin-wire loop in a prescribed external field

### `em-magnetostatics-in-vacuum-examples` — Magnetostatics in vacuum — Examples (3 item(s))

- `ex-em-circular-loop-axis-field` · example — Axis field of the declared ideal circular thin loop
- `ex-em-infinite-wire-and-solenoid` · example — Declared ideal infinite wire and cylindrical current sheet: explicit fields and their distributional equations
- `ex-em-wire-force-coupling` · example — Force per unit length between two declared ideal parallel wires

## Your seams

Your pages depend on another group's:

- `em-electrostatic-boundaries-and-conductors` requires `em-boundary-and-spectral-prerequisites` (group h, batch 18)
- `em-electrostatic-boundaries-and-conductors` requires `em-electrostatics-in-vacuum` (group a, batch 25)
- `em-electrostatic-multipoles` requires `em-boundary-and-spectral-prerequisites` (group h, batch 18)
- `em-electrostatic-multipoles` requires `em-electrostatics-in-vacuum` (group a, batch 25)
- `em-magnetostatics-in-vacuum` requires `em-expanded-analysis-prerequisites` (group h, batch 16)
- `em-magnetostatics-in-vacuum` requires `em-maxwell-integral-and-constraints` (group a, batch 24)

Another group's pages depend on yours:

- `em-induction-and-circuit-limits` (group c) requires your `em-electrostatic-boundaries-and-conductors`
- `em-induction-and-circuit-limits` (group c) requires your `em-magnetostatics-in-vacuum`
- `em-waveguides-and-cavities` (group e) requires your `em-electrostatic-boundaries-and-conductors`
- `em-retarded-fields-and-radiation` (group e) requires your `em-electrostatic-multipoles`

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
