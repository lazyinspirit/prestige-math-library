# Step 7 adjudication — group **c**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **29**, **30**, **31**: 3 A/B pair(s), 6 page(s), 29 item(s), 0 open rejection(s) over 0 item(s).

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
| 29 | `em-material-response` | A | classical-electromagnetism | 337 | `em-causal-response-and-radiation-prerequisites`, `em-maxwell-integral-and-constraints`, `density-separability-and-convolution-in-lp`, `cantor-set-baire-and-measure-zero`, `sard-theorem-and-transversality` |
| 29 | `em-material-response-examples` | B | classical-electromagnetism | 338 | `em-material-response` |
| 30 | `em-induction-and-circuit-limits` | A | classical-electromagnetism | 339 | `em-electrostatic-boundaries-and-conductors`, `em-magnetostatics-in-vacuum`, `em-material-response`, `picard-lindelof-and-first-order-odes`, `gaussian-elimination-and-row-reduction` |
| 30 | `em-induction-and-circuit-limits-examples` | B | classical-electromagnetism | 340 | `em-induction-and-circuit-limits` |
| 31 | `em-potentials-and-gauge` | A | classical-electromagnetism | 341 | `em-boundary-and-spectral-prerequisites`, `em-primitives-and-postulates`, `em-wave-equation-prerequisites`, `mixed-partials-taylor-and-extrema`, `partitions-of-unity-and-paracompactness`, `sine-cosine-and-the-definition-of-pi`, `the-seifert-van-kampen-theorem`, `em-causal-wave-kernel-prerequisites` |
| 31 | `em-potentials-and-gauge-examples` | B | classical-electromagnetism | 342 | `em-potentials-and-gauge` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-material-response` — Material response and stationary interfaces (7 item(s))

- `post-em-coarse-graining` · postulate — Declared averaging kernel, macroscopic scale assumptions and averaged fields
- `def-em-polarization-magnetization` · definition — Polarization, magnetization, bound and free sources, and the fields D and H
- `pthm-em-macroscopic-maxwell` · physics-theorem — The macroscopic Maxwell equations in terms of D, H and the free sources
- `post-em-material-closure` · postulate — Declared material-closure branches: linear nondispersive Ohmic response and the causal memory branch
- `pthm-em-material-stationary-jumps` · physics-theorem — Stationary macroscopic interface jump conditions for D, B, E and H
- `pthm-em-causal-dispersive-response` · physics-theorem — Specified causal material response: transfer function, dispersion relations and the passivity condition
- `pthm-em-restricted-material-energy` · physics-theorem — Energy balance and Ohmic dissipation for the constant nondispersive linear model

### `em-material-response-examples` — Material response and stationary interfaces — Examples (3 item(s))

- `ex-em-constitutive-unit-counterexample` · example — Matching units does not determine the permittivity or the response law
- `ex-em-dielectric-interface-example` · example — Planar dielectric interface with prescribed free surface charge
- `ex-em-dielectric-sphere-example` · example — Uniform-field dielectric sphere: candidate solution and its class

### `em-induction-and-circuit-limits` — Induction and circuit approximations (8 item(s))

- `lem-em-newtonian-linkage-symmetry` · lemma — Symmetry and Fubini representation of the Newtonian linkage pairing
- `lem-em-newtonian-curl-field-energy` · lemma — Curl-field energy identity for Newtonian potentials of divergence-free compact currents
- `def-em-moving-circuit-geometry` · definition — C2 moving material circuit: swept patch, single-valued material velocity, flux and electromotive force
- `post-em-circuit-approximation` · postulate — Electro- and magneto-quasistatic lumped circuit model
- `pthm-em-motional-emf` · physics-theorem — Moving-loop electromotive force equals the negative flux derivative
- `pthm-em-inductance-reciprocity` · physics-theorem — Linear flux linkage, reciprocal mutual inductance and magnetic energy of compact smooth conserved currents
- `pthm-em-inductor-energy` · physics-theorem — Restricted inductor energy LI^2/2 and its identification with the frozen magnetic field energy
- `pthm-em-rl-lc-dynamics` · physics-theorem — Restricted RL decay and LC oscillation under the adopted circuit model

### `em-induction-and-circuit-limits-examples` — Induction and circuit approximations — Examples (3 item(s))

- `texp-em-sliding-bar-emf` · thought-experiment — Sliding bar on fixed rails: motional emf and mechanical-electrical power balance
- `ex-em-transformer-idealization` · example — Two-circuit mutual inductance, the perfect-linkage bound and ideal-transformer limitations
- `ex-em-rl-time-response` · example — Exponential RL response under a constant terminal voltage

### `em-potentials-and-gauge` — Potentials and gauge (5 item(s))

- `pthm-em-spacetime-potentials` · physics-theorem — Smooth scalar and vector potentials on a star-shaped space-time region
- `def-em-gauge-transformation` · definition — Potential representations, gauge transformations and gauge equivalence of the framework's fields
- `pthm-em-gauge-invariance` · physics-theorem — Gauge transformations preserve the field pair: invariance of the electric and magnetic fields
- `pthm-em-lorenz-gauge-wave-form` · physics-theorem — Maxwell's equations in potential form: the Lorenz divergence, the decoupled wave equations and residual generators
- `pthm-em-gauge-reachability` · physics-theorem — Gauge reachability: Lorenz gauge on the all-space slab and Coulomb gauge on a bounded smooth domain, with residual freedom

### `em-potentials-and-gauge-examples` — Potentials and gauge — Examples (3 item(s))

- `ex-em-topological-potential-obstructions` · example — Topological obstructions to global potentials: a curl-free loop field and a divergence-free sphere-flux field
- `ex-em-pure-gauge-fields` · example — Nonzero pure-gauge potentials representing the zero field pair
- `ex-em-residual-lorenz-example` · example — A homogeneous-wave gauge generator changes Lorenz potentials without changing their fields

## Your seams

Your pages depend on another group's:

- `em-material-response` requires `em-causal-response-and-radiation-prerequisites` (group i, batch 19)
- `em-material-response` requires `em-maxwell-integral-and-constraints` (group a, batch 24)
- `em-induction-and-circuit-limits` requires `em-electrostatic-boundaries-and-conductors` (group b, batch 26)
- `em-induction-and-circuit-limits` requires `em-magnetostatics-in-vacuum` (group b, batch 28)
- `em-potentials-and-gauge` requires `em-boundary-and-spectral-prerequisites` (group h, batch 18)
- `em-potentials-and-gauge` requires `em-primitives-and-postulates` (group a, batch 23)
- `em-potentials-and-gauge` requires `em-wave-equation-prerequisites` (group h, batch 17)
- `em-potentials-and-gauge` requires `em-causal-wave-kernel-prerequisites` (group i, batch 21)

Another group's pages depend on yours:

- `em-wave-interfaces-and-conductors` (group d) requires your `em-material-response`
- `em-waveguides-and-cavities` (group e) requires your `em-material-response`
- `em-retarded-fields-and-radiation` (group e) requires your `em-potentials-and-gauge`
- `em-empirical-tests-and-scope` (group f) requires your `em-material-response`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-material-response`

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
