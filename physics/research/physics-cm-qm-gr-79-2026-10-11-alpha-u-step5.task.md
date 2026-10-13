# Step 5 adjudication — group **u**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 54, 55, 56: 3 A/B pair(s), 6 page(s), 48 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **54**: `research/physics-cm-qm-gr-79-2026-10-11-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/physics-cm-qm-gr-79-2026-10-11-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **56**: `research/physics-cm-qm-gr-79-2026-10-11-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 54 | `qm-angular-momentum-and-spin` | A | non-relativistic-quantum-mechanics | 187 | `qm-symmetries-and-conservation`, `qm-uncertainty-and-compatibility`, `cm-math-rotation-double-cover`, `cm-math-geometry`, `cm-math-central`, `qm-massive-particle-kinematics`, `qm-math-orbital-and-spin`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-composites`, `qm-autonomous-dynamics`, `qm-math-magnetic-and-detection` |
| 54 | `qm-angular-momentum-and-spin-examples` | B | non-relativistic-quantum-mechanics | 188 | `qm-angular-momentum-and-spin`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-orbital-and-spin`, `qm-autonomous-dynamics` |
| 55 | `qm-composites-entanglement-and-reduced-states` | A | non-relativistic-quantum-mechanics | 189 | `qm-angular-momentum-and-spin`, `qm-measurement-and-instruments`, `compactness`, `qm-math-composites`, `qm-state-geometry`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-massive-particle-kinematics` |
| 55 | `qm-composites-entanglement-and-reduced-states-examples` | B | non-relativistic-quantum-mechanics | 190 | `qm-composites-entanglement-and-reduced-states`, `qm-angular-momentum-and-spin`, `qm-measurement-and-instruments`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-math-orbital-and-spin`, `qm-massive-particle-kinematics` |
| 56 | `qm-bell-models-and-measurement-limits` | A | non-relativistic-quantum-mechanics | 191 | `qm-composites-entanglement-and-reduced-states`, `qm-math-orbital-and-spin`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-observables-and-born-probabilities`, `qm-massive-particle-kinematics`, `qm-measurement-and-instruments`, `qm-angular-momentum-and-spin` |
| 56 | `qm-bell-models-and-measurement-limits-examples` | B | non-relativistic-quantum-mechanics | 192 | `qm-bell-models-and-measurement-limits`, `qm-math-composites`, `qm-composites-entanglement-and-reduced-states`, `qm-angular-momentum-and-spin`, `qm-math-orbital-and-spin`, `qm-framework-and-quantities` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-angular-momentum-and-spin` — Qm Angular Momentum And Spin (12 item(s))

- `lem-nrqm-angular-momentum-product-flow-generator` · lemma — Self-adjointness and the flow of a self-adjoint operator perturbed by a bounded operator commuting with its flow
- `lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action` · lemma — The SU(2) lift of the spatial rotation action on the component-valued wave-function space and its coordinate generators
- `lem-nrqm-angular-momentum-orbital-casimir-identity` · lemma — The orbital Casimir identity: the restrictions of the orbital generators to the degree-l blocks are spin-l models
- `def-nrqm-angular-momentum-framework-angular-momentum-observables` · definition — Orbital, spin and total angular momentum of the massive spin-s model: assigned sharp observables, units and readings
- `post-nrqm-angular-momentum-magnetic-moment-coupling` · postulate — Effective magnetic-moment coupling of the finite-spin model: gyromagnetic parameter, magnetic moment and Zeeman energy operator
- `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws` · physics-theorem — Spin spectra and outcome laws of the massive spin-s model: directional components, the Casimir law and the spin-half probabilities
- `pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers` · physics-theorem — Orbital angular momentum eigenstates of the massive model: spherical harmonics, the l,m quantum numbers and the Casimir value
- `pthm-nrqm-angular-momentum-total-conservation` · physics-theorem — Conservation of total angular momentum for a spin-independent rotation-invariant bounded-potential dynamics
- `pthm-nrqm-angular-momentum-zeeman-precession` · physics-theorem — Spin precession and the Zeeman splitting in a uniform magnetic field: Larmor angular frequency and the conservation of one component
- `pthm-nrqm-angular-momentum-stern-gerlach-conditional-force` · physics-theorem — The conditional Stern-Gerlach force prediction of the spin-half Zeeman model: transverse momentum rate in a smooth bounded gradient field
- `pthm-nrqm-angular-momentum-two-spin-composition` · physics-theorem — Composition of two spin labels: total spin operators, the Clebsch-Gordan block decomposition and the spin-half singlet
- `rem-nrqm-angular-momentum-scope-and-empirical-status` · remark — What the angular momentum and spin page adopts, proves and does not claim

### `qm-angular-momentum-and-spin-examples` — Qm Angular Momentum And Spin — Examples (5 item(s))

- `ex-nrqm-angular-momentum-spin-half-directional-probabilities` · example — Spin-half outcome probabilities along an arbitrary direction: the Bloch parametrization and worked cases
- `ex-nrqm-angular-momentum-l-eigenfunctions` · example — Orbital angular momentum eigenfunctions: the low spherical harmonics of the massive model
- `ex-nrqm-angular-momentum-zeeman-toy-model` · example — The two-level Zeeman toy model: sector energies, level splitting and spin precession
- `texp-nrqm-angular-momentum-stern-gerlach-splitting` · thought-experiment — The idealized Stern-Gerlach splitting: transverse momentum separation of the two spin sectors under a window hypothesis
- `rem-nrqm-angular-momentum-examples-scope-limits` · remark — What the angular momentum examples establish and what they do not

### `qm-composites-entanglement-and-reduced-states` — Qm Composites Entanglement And Reduced States (12 item(s))

- `lem-nrqm-composites-local-pvm-tensor-extension` · lemma — Local PVM extension: tensoring a projection-valued measure with the identity
- `lem-nrqm-composites-pure-state-separability-criterion` · lemma — Pure-state separability is equivalent to being a product: a Schmidt overlap witness
- `def-nrqm-composites-separable-and-entangled-states` · definition — Product vectors, separable states and entangled states of a two-factor composite
- `def-nrqm-composites-framework-composite-systems-and-local-readouts` · definition — Composite systems of the framework: product bases, local readouts, local effects and local instruments
- `def-nrqm-composites-framework-reduced-preparations` · definition — Reduced preparations of a declared composite: the subsystem states of the framework
- `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement` · physics-theorem — Schmidt reduction of a pure composite preparation, purity of the subsystems, and the product criterion
- `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations` · physics-theorem — Local readout laws and reduced preparations: the subsystem state determines, and is determined by, the local statistics
- `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations` · physics-theorem — Factorization of local statistics for product preparations, and its failure for non-product pure preparations
- `pthm-nrqm-composites-local-instruments-and-no-signalling` · physics-theorem — Local instruments and no-signalling: operations on one factor do not change the other factor's local statistics
- `def-nrqm-composites-marker-model-and-fringe-visibility` · definition — Declared marked two-component model: path components, marker states, phase family, detection weights and fringe visibility
- `pthm-nrqm-composites-marker-overlap-and-visibility-bound` · physics-theorem — Marker overlap contracts the cross term: the detection law and the visibility bound of an overlap-normalized marked model
- `rem-nrqm-composites-scope-and-empirical-status` · remark — Scope and empirical status of the composites page: adopted readings, derived results, and deferred content

### `qm-composites-entanglement-and-reduced-states-examples` — Qm Composites Entanglement And Reduced States — Examples (4 item(s))

- `texp-nrqm-composites-singlet-correlations` · thought-experiment — The spin singlet of two declared spin-half factors: directional correlations, perfect anti-correlation and setting-independent marginals
- `ex-nrqm-composites-marker-overlap-visibility` · example — A two-cell marked model: the fringe visibility equals the marker overlap exactly
- `ex-nrqm-composites-improper-versus-proper-mixtures` · example — Improper and proper mixtures with the same reduced preparation: the singlet marginal versus a fair random mixture
- `rem-nrqm-composites-examples-scope-limits` · remark — Scope of the composites examples page: what the singlet, marker and mixture computations establish

### `qm-bell-models-and-measurement-limits` — Qm Bell Models And Measurement Limits (11 item(s))

- `def-nrqm-bell-binary-correlation-models` · definition — Binary correlation models: setting-indexed tables of two-valued outcome laws, marginals and the CHSH functional
- `def-nrqm-bell-local-response-representation` · definition — Local-response representations of a binary correlation model: one setting-independent specification space and per-station response laws
- `prop-nrqm-bell-local-representations-are-no-signalling` · proposition — Local-response representability implies setting-independent marginals
- `thm-nrqm-bell-local-representations-satisfy-chsh` · theorem — The CHSH bound for every binary correlation model admitting a local-response representation
- `lem-nrqm-bell-setting-independent-selection-closure` · lemma — Conditioning on a setting-independent selection preserves local-response representability and the CHSH bound
- `lem-nrqm-bell-singlet-pairings` · lemma — Singlet pairings: the joint laws of the two spin-half factors along two directions
- `def-nrqm-bell-declared-spin-arrangement` · definition — Declared spin correlation arrangement of the framework: two spin-half factors, four directions, joint sign tables and local-response models
- `texp-nrqm-bell-singlet-arrangement-contrast` · thought-experiment — The singlet arrangement: directional sign tables, CHSH value 2 sqrt 2 and the failure of local-response models at violating settings
- `pthm-nrqm-bell-tsirelson-bound-for-arrangements` · physics-theorem — Tsirelson bound for every declared spin correlation arrangement of the framework
- `rem-nrqm-bell-boundaries-and-comparison-scope` · remark — Measurement-model boundaries of the singlet-local comparison: what the no-go excludes and what it does not
- `rem-nrqm-bell-scope-and-empirical-status` · remark — Scope and empirical status of the Bell-models page: conditional model results and the deferred experiment destination

### `qm-bell-models-and-measurement-limits-examples` — Qm Bell Models And Measurement Limits — Examples (4 item(s))

- `ex-nrqm-bell-worked-angles-and-product-mixture` · example — Worked Bell angles: the singlet against the EPR product mixture at the same directions
- `texp-nrqm-bell-finite-sample-chsh` · thought-experiment — Finite samples of a declared arrangement: the CHSH estimator, its concentration and the limits of a finite-sample verdict
- `rem-nrqm-bell-selection-loss-and-fair-sampling` · remark — Selection and loss: the precise hypothesis under which the CHSH bound transfers to recorded pairs
- `rem-nrqm-bell-examples-scope-limits` · remark — Scope of the examples page: conditional computations, no experiment, and the deferred Bell-test destination

## Your seams

Your pages depend on another group's:

- `qm-angular-momentum-and-spin` requires `qm-symmetries-and-conservation` (group t, batch 53)
- `qm-angular-momentum-and-spin` requires `qm-uncertainty-and-compatibility` (group s, batch 50)
- `qm-angular-momentum-and-spin` requires `cm-math-rotation-double-cover` (group q, batch 16)
- `qm-angular-momentum-and-spin` requires `cm-math-geometry` (group l, batch 1)
- `qm-angular-momentum-and-spin` requires `cm-math-central` (group m, batch 5)
- `qm-angular-momentum-and-spin` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-angular-momentum-and-spin` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-angular-momentum-and-spin` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-angular-momentum-and-spin` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-angular-momentum-and-spin` requires `qm-state-geometry` (group q, batch 44)
- `qm-angular-momentum-and-spin` requires `qm-math-composites` (group x, batch 35)
- `qm-angular-momentum-and-spin` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-angular-momentum-and-spin` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-angular-momentum-and-spin-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-angular-momentum-and-spin-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-angular-momentum-and-spin-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-angular-momentum-and-spin-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-angular-momentum-and-spin-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-angular-momentum-and-spin-examples` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-composites-entanglement-and-reduced-states` requires `qm-measurement-and-instruments` (group r, batch 46)
- `qm-composites-entanglement-and-reduced-states` requires `qm-math-composites` (group x, batch 35)
- `qm-composites-entanglement-and-reduced-states` requires `qm-state-geometry` (group q, batch 44)
- `qm-composites-entanglement-and-reduced-states` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-composites-entanglement-and-reduced-states` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-composites-entanglement-and-reduced-states` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-measurement-and-instruments` (group r, batch 46)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-bell-models-and-measurement-limits` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-bell-models-and-measurement-limits` requires `qm-math-composites` (group x, batch 35)
- `qm-bell-models-and-measurement-limits` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-bell-models-and-measurement-limits` requires `qm-state-geometry` (group q, batch 44)
- `qm-bell-models-and-measurement-limits` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-bell-models-and-measurement-limits` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-bell-models-and-measurement-limits` requires `qm-measurement-and-instruments` (group r, batch 46)
- `qm-bell-models-and-measurement-limits-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-bell-models-and-measurement-limits-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-bell-models-and-measurement-limits-examples` requires `qm-framework-and-quantities` (group q, batch 43)

Another group's pages depend on yours:

- `qm-identical-particles-and-exclusion` (group v) requires your `qm-composites-entanglement-and-reduced-states`
- `qm-identical-particles-and-exclusion-examples` (group v) requires your `qm-angular-momentum-and-spin`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-composites-entanglement-and-reduced-states`
- `qm-controlled-approximations-examples` (group v) requires your `qm-angular-momentum-and-spin`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
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

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
