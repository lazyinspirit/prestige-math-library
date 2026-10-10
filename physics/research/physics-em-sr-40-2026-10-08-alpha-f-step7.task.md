# Step 7 adjudication — group **f**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **38**, **39**, **40**: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

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
| 38 | `em-empirical-tests-and-scope` | A | classical-electromagnetism | 355 | `em-experiment-analysis-prerequisites`, `em-material-response`, `em-retarded-fields-and-radiation`, `em-vacuum-waves-and-polarization` |
| 38 | `em-empirical-tests-and-scope-examples` | B | classical-electromagnetism | 356 | `em-empirical-tests-and-scope` |
| 39 | `em-action-and-variational-formulation` | A | classical-electromagnetism | 357 | `em-lorentz-covariant-formulation` |
| 39 | `em-action-and-variational-formulation-examples` | B | classical-electromagnetism | 358 | `em-action-and-variational-formulation` |
| 40 | `em-scattering-and-scalar-diffraction` | A | classical-electromagnetism | 359 | `em-lorentz-covariant-formulation`, `em-material-response`, `em-retarded-fields-and-radiation`, `signed-and-complex-measures-hahn-and-jordan` |
| 40 | `em-scattering-and-scalar-diffraction-examples` | B | classical-electromagnetism | 360 | `em-scattering-and-scalar-diffraction` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-empirical-tests-and-scope` — Empirical tests and limitations (6 item(s))

- `def-em-experiment-record-contract` · definition — Report-backed operational evidence with uncertainty
- `exp-em-induction-report` · experiment — Faraday's 1831 induction experiments: reported transients and the iron-ring apparatus
- `exp-em-wave-propagation-report` · experiment — Hertz's 1888 finite-velocity tests: sparks, wire nodes and qualitative interference
- `exp-em-inverse-square-report` · experiment — Cavendish's enclosed-globe inverse-square nulls with a sensitivity control
- `pthm-em-specified-model-comparison` · physics-theorem — Conditional predictions and qualified experimental comparison
- `rem-em-classical-validity-limits` · remark — Classical material, point-source and mechanical regimes and the quantum exclusions

### `em-empirical-tests-and-scope-examples` — Empirical tests and limitations — Examples (2 item(s))

- `ex-em-apparatus-model-ambiguity` · example — A discrepancy can test auxiliaries as well as field assumptions
- `ex-em-ideal-and-measured-fringes` · example — An ideal electric-field zero and a declared detector-bin response

### `em-action-and-variational-formulation` — Alternative action formulation (5 item(s))

- `def-em-field-action-definition` · definition — Smooth finite-region Maxwell action, compact variations and the fixed-endpoint particle functional
- `post-em-stationary-action-model` · postulate — Adopt stationary Maxwell action as alternative physical formulation
- `pthm-em-action-gauge-source-compatibility` · physics-theorem — Compact gauge variation is boundary-free for conserved source
- `pthm-em-action-maxwell-variation` · physics-theorem — Action stationarity implies the inhomogeneous Maxwell equations
- `pthm-em-particle-action-coupling` · physics-theorem — Relativistic prescribed-field particle action yields the Lorentz force

### `em-action-and-variational-formulation-examples` — Alternative action formulation — Examples (2 item(s))

- `ex-em-stationary-not-minimum` · example — Stationary functional need not be a minimum
- `ex-em-compact-variation-example` · example — A compact test variation and gauge-source sign check

### `em-scattering-and-scalar-diffraction` — Vector PEC scattering, dipole limits and controlled scalar diffraction (9 item(s))

- `def-em-monochromatic-source-free-phasors` · definition — Frequency-$\omega$ source-free vacuum phasor pairs and their real-field encoding
- `lem-em-phasor-real-part-calculus-and-equivalence` · lemma — Real parts of $e^{-i\omega t}$ phasors: calculus, injectivity and equivalence with the real Helmholtz-Maxwell system
- `lem-em-harmonic-forcing-periodic-response` · lemma — Periodic responses of $\ddot z=\operatorname{Re}(we^{-i\omega t})$ and the affine classification of all solutions
- `def-em-ideal-harmonic-dipole-model` · definition — The ideal harmonic electric-dipole radiation model
- `post-em-scalar-aperture-model` · postulate — Adopted scalar aperture-diffraction model (polarization-insensitive regime)
- `pthm-em-scalar-aperture-diffraction` · physics-theorem — Controlled scalar aperture diffraction: Fresnel and Fraunhofer approximations with explicit error terms
- `pthm-em-pec-monochromatic-exterior-scattering` · physics-theorem — Monochromatic scattering by a smooth perfect-electric-conductor obstacle
- `pthm-em-dipole-scattering-cross-section` · physics-theorem — Differential and total cross sections of the ideal harmonic dipole in a plane-wave field
- `pthm-em-weak-field-thomson-limit` · physics-theorem — Controlled first variation of the relativistic test-charge law: the leading Thomson-model cross section

### `em-scattering-and-scalar-diffraction-examples` — Vector PEC scattering, dipole limits and controlled scalar diffraction — Examples (1 item(s))

- `ex-em-rectangular-aperture` · example — Uniform rectangular aperture: the Fraunhofer sinc-squared pattern

## Your seams

Your pages depend on another group's:

- `em-empirical-tests-and-scope` requires `em-experiment-analysis-prerequisites` (group i, batch 20)
- `em-empirical-tests-and-scope` requires `em-material-response` (group c, batch 29)
- `em-empirical-tests-and-scope` requires `em-retarded-fields-and-radiation` (group e, batch 36)
- `em-empirical-tests-and-scope` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-action-and-variational-formulation` requires `em-lorentz-covariant-formulation` (group e, batch 37)
- `em-scattering-and-scalar-diffraction` requires `em-lorentz-covariant-formulation` (group e, batch 37)
- `em-scattering-and-scalar-diffraction` requires `em-material-response` (group c, batch 29)
- `em-scattering-and-scalar-diffraction` requires `em-retarded-fields-and-radiation` (group e, batch 36)

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

# Step 7 batch adjudication, `physics-em-sr-40-2026-10-08`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
