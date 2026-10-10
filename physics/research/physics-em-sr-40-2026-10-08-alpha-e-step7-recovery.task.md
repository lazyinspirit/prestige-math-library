# Step 7 adjudication — group **e**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **35**, **36**, **37**: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

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
| 35 | `em-waveguides-and-cavities` | A | classical-electromagnetism | 349 | `em-electrostatic-boundaries-and-conductors`, `em-material-response`, `em-vacuum-waves-and-polarization`, `sine-cosine-and-the-definition-of-pi`, `limits-of-real-functions` |
| 35 | `em-waveguides-and-cavities-examples` | B | classical-electromagnetism | 350 | `em-waveguides-and-cavities`, `harmonic-functions-and-the-poisson-integral` |
| 36 | `em-retarded-fields-and-radiation` | A | classical-electromagnetism | 351 | `em-causal-response-and-radiation-prerequisites`, `em-electrostatic-multipoles`, `em-energy-momentum-and-angular-balance`, `em-potentials-and-gauge`, `em-retarded-point-prerequisites` |
| 36 | `em-retarded-fields-and-radiation-examples` | B | classical-electromagnetism | 352 | `em-retarded-fields-and-radiation` |
| 37 | `em-lorentz-covariant-formulation` | A | classical-electromagnetism | 353 | `em-vacuum-waves-and-polarization`, `sr-light-and-doppler` |
| 37 | `em-lorentz-covariant-formulation-examples` | B | classical-electromagnetism | 354 | `em-lorentz-covariant-formulation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-waveguides-and-cavities` — Waveguides and cavities (10 item(s))

- `lem-em-separated-phasor-calculus` · lemma — Calculus of separated phasor fields: real-part derivative identities and amplitude injectivity
- `lem-em-transverse-vector-identities` · lemma — Transverse vector-calculus identities for the splitting $\mathbb R^3=\mathbb R^2\oplus\mathbb R e_z$
- `lem-em-rectangle-mode-profile-identities` · lemma — The separated sine and cosine rectangle profiles: eigen-identities, boundary traces, orthogonality and Dirichlet integrals
- `lem-em-rectangular-transverse-mode-completeness` · lemma — The sine and cosine systems are complete orthogonal systems of L^2 on an interval and on a rectangle
- `def-em-guide-cavity-geometry` · definition — Rectangular PEC guide and cavity geometry, the zero-normal-B reflection class, and axis-relative TE/TM/TEM
- `pthm-em-rectangular-mode-candidates` · physics-theorem — The separated TE and TM candidate modes of the lossless rectangular PEC guide: exact verification, index restrictions and cutoff
- `pthm-em-guide-dispersion-energy` · physics-theorem — The propagating candidate branch: cutoff, phase and group speeds, cross-section energy and flux, and energy transport at the group velocity
- `pthm-em-uniform-ohmic-modal-decay` · physics-theorem — Constant-Ohmic PEC modal decay and exact energy-class completeness
- `pthm-em-open-rectangular-guide-completeness` · physics-theorem — Complete longitudinal Fourier energy evolution in a rectangular PEC guide
- `pthm-em-guide-completeness` · physics-theorem — Complete mode expansions of the declared guide and cavity classes: transverse profile completeness, the rectangular reflection class and the smooth PEC cavity eigenbasis

### `em-waveguides-and-cavities-examples` — Waveguides and cavities — Examples (3 item(s))

- `ex-em-te-ten-example` · example — The TE10 candidate of a lossless rectangular guide: explicit fields, cutoff and propagating branch
- `ex-em-rectangular-cavity-example` · example — A rectangular-cavity standing mode at resonance: explicit fields and the PEC end-cap check
- `ex-em-tem-topology-example` · example — TEM modes of a coaxial guide and the single-conductor obstruction for harmonic transverse potentials

### `em-retarded-fields-and-radiation` — Retarded fields and radiation (9 item(s))

- `post-em-radiation-selection` · postulate — Adopted retarded solution selection: the physical branch carries no incoming free field
- `def-em-retarded-point-geometry` · definition — Uniformly subluminal prescribed worldline, retarded root and retarded geometric data off the worldline
- `lem-em-sphere-zonal-moments` · lemma — Zonal and quadratic sphere moments for the polar surface measure on $S^2$
- `pthm-em-retarded-potentials` · physics-theorem — Retarded potentials, Lorenz gauge and Maxwell fields of a compactly supported conserved smooth source
- `pthm-em-dipole-radiation` · physics-theorem — Controlled electric-dipole far field and retarded-time radiated power of a compact smooth source
- `pthm-em-lienard-wiechert` · physics-theorem — Retarded point fields off the worldline: Lienard-Wiechert potentials, the velocity/acceleration split and the uniform far-zone remainder
- `pthm-em-larmor-nonrelativistic` · physics-theorem — Instantaneous-rest Larmor power and uniform low-speed comparison for a prescribed point charge
- `pthm-em-lienard-emitted-power` · physics-theorem — Relativistic emitted power of a prescribed point charge at a general emission event
- `rem-em-radiation-reaction-limits` · remark — Self-force, runaways and finite-size regularizations are not supplied by this page

### `em-retarded-fields-and-radiation-examples` — Retarded fields and radiation — Examples (3 item(s))

- `ex-em-no-retarded-root-example` · example — A smooth pointwise subluminal curve with no retarded root at an event
- `ex-em-dipole-antenna-example` · example — Harmonic dipole pattern and period-averaged power in the exact dipole law
- `texp-em-classical-orbit-instability` · thought-experiment — Conditional radius loss of a prescribed slowly orbiting charge in a reduced quasistatic model

### `em-lorentz-covariant-formulation` — Lorentz covariant formulation (5 item(s))

- `pthm-em-tensor-maxwell-equivalence` · physics-theorem — Tensor Maxwell equations equal the four laboratory Maxwell equations
- `pthm-em-lorentz-field-transform` · physics-theorem — Covariance, boosts and the two field invariants
- `pthm-em-observer-field-and-doppler` · physics-theorem — Observer field split and exact classical wave Doppler reading
- `pthm-em-relativistic-lorentz-force` · physics-theorem — The four-force equation reproduces the coordinate Lorentz force and power
- `pthm-em-covariant-stress-energy` · physics-theorem — The covariant field stress-energy tensor and its balance law

### `em-lorentz-covariant-formulation-examples` — Lorentz covariant formulation — Examples (2 item(s))

- `ex-em-boosted-fields-example` · example — Boosted uniform electric field and the mixed magnetic field
- `ex-em-constant-field-trajectory` · example — Exact trajectory in a uniform electric field and the failure of the unscoped Newtonian extrapolation

## Your seams

Your pages depend on another group's:

- `em-waveguides-and-cavities` requires `em-electrostatic-boundaries-and-conductors` (group b, batch 26)
- `em-waveguides-and-cavities` requires `em-material-response` (group c, batch 29)
- `em-waveguides-and-cavities` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-retarded-fields-and-radiation` requires `em-causal-response-and-radiation-prerequisites` (group i, batch 19)
- `em-retarded-fields-and-radiation` requires `em-electrostatic-multipoles` (group b, batch 27)
- `em-retarded-fields-and-radiation` requires `em-energy-momentum-and-angular-balance` (group d, batch 32)
- `em-retarded-fields-and-radiation` requires `em-potentials-and-gauge` (group c, batch 31)
- `em-retarded-fields-and-radiation` requires `em-retarded-point-prerequisites` (group j, batch 22)
- `em-lorentz-covariant-formulation` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-lorentz-covariant-formulation` requires `sr-light-and-doppler` (group l, batch 7)

Another group's pages depend on yours:

- `em-empirical-tests-and-scope` (group f) requires your `em-retarded-fields-and-radiation`
- `em-action-and-variational-formulation` (group f) requires your `em-lorentz-covariant-formulation`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-lorentz-covariant-formulation`
- `em-scattering-and-scalar-diffraction` (group f) requires your `em-retarded-fields-and-radiation`

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
