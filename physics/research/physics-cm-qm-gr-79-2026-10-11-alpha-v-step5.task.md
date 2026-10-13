# Step 5 adjudication — group **v**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 57, 58, 59: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **57**: `research/physics-cm-qm-gr-79-2026-10-11-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **58**: `research/physics-cm-qm-gr-79-2026-10-11-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/physics-cm-qm-gr-79-2026-10-11-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 57 | `qm-identical-particles-and-exclusion` | A | non-relativistic-quantum-mechanics | 193 | `qm-composites-entanglement-and-reduced-states`, `qm-math-fock-and-equilibrium`, `qm-harmonic-oscillator`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities` |
| 57 | `qm-identical-particles-and-exclusion-examples` | B | non-relativistic-quantum-mechanics | 194 | `qm-identical-particles-and-exclusion`, `qm-angular-momentum-and-spin`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-math-composites`, `qm-math-coulomb`, `qm-math-fock-and-equilibrium` |
| 58 | `qm-central-potentials-and-hydrogen` | A | non-relativistic-quantum-mechanics | 195 | `qm-composites-entanglement-and-reduced-states`, `qm-math-coulomb`, `qm-one-dimensional-potentials`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-autonomous-dynamics`, `qm-math-orbital-and-spin` |
| 58 | `qm-central-potentials-and-hydrogen-examples` | B | non-relativistic-quantum-mechanics | 196 | `qm-central-potentials-and-hydrogen`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-math-coulomb` |
| 59 | `qm-controlled-approximations` | A | non-relativistic-quantum-mechanics | 197 | `qm-central-potentials-and-hydrogen`, `qm-harmonic-oscillator`, `qm-math-fock-and-equilibrium`, `qm-math-controlled-dynamics`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-massive-particle-kinematics`, `qm-one-dimensional-potentials`, `qm-math-coulomb` |
| 59 | `qm-controlled-approximations-examples` | B | non-relativistic-quantum-mechanics | 198 | `qm-controlled-approximations`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-central-potentials-and-hydrogen`, `qm-math-coulomb`, `qm-math-orbital-and-spin`, `qm-angular-momentum-and-spin`, `qm-massive-particle-kinematics`, `qm-one-dimensional-potentials` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-identical-particles-and-exclusion` — Qm Identical Particles And Exclusion (9 item(s))

- `lem-nrqm-identical-particles-two-particle-exchange-operator` · lemma — The two-particle exchange operator and the symmetric and antisymmetric combinations
- `thm-nrqm-identical-particles-occupation-number-basis` · theorem — Slater and symmetric occupation-number bases of the finite-dimensional permutation sectors
- `thm-nrqm-identical-particles-finite-mode-occupation-counts` · theorem — Finite-mode occupation configurations: fermionic exclusion counts, bosonic counts and truncated dimensions
- `thm-nrqm-identical-particles-two-factor-symmetry-decomposition` · theorem — Regrouping two factors: the symmetry decomposition of a two-particle sector over an orbital and an internal factor
- `def-nrqm-identical-particles-framework-species-sectors-and-preparations` · definition — Declared species sectors and their preparations: the framework's reading of P6
- `def-nrqm-identical-particles-framework-orbital-occupation-model` · definition — The declared finite-mode model and its occupation readouts
- `pthm-nrqm-identical-particles-permutation-invariance` · physics-theorem — Permutation invariance of sector preparations and the indistinguishability of relabelled readouts
- `pthm-nrqm-identical-particles-orbital-occupation-exclusion` · physics-theorem — Pauli exclusion in the declared finite-mode occupation readout, with the bosonic contrast
- `rem-nrqm-identical-particles-scope-and-empirical-status` · remark — Scope and empirical status of the identical-particles page

### `qm-identical-particles-and-exclusion-examples` — Qm Identical Particles And Exclusion — Examples (3 item(s))

- `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry` · thought-experiment — The two spin-half fermion sector: the spin-singlet and spin-triplet parts and their orbital symmetry
- `ex-nrqm-identical-particles-exchange-versus-coulomb-terms` · example — Exchange versus direct Coulomb terms: the pair-energy split of the two-orbital spin-half model
- `rem-nrqm-identical-particles-examples-scope-limits` · remark — Scope of the identical-particles examples page

### `qm-central-potentials-and-hydrogen` — Qm Central Potentials And Hydrogen (10 item(s))

- `lem-nrqm-central-exponential-moments` · lemma — Moments of the exponential law on the half-line
- `lem-nrqm-central-free-operator-differential-identification` · lemma — The three-dimensional free Schrödinger operator as the weak Laplacian on its Sobolev domain
- `def-nrqm-central-framework-central-potential-model` · definition — The declared central-potential model: state space, assigned energy operator, spherical reading and bound-state vocabulary
- `pthm-nrqm-central-spherical-reduction-of-smooth-states` · physics-theorem — The declared central-potential model: spherical reduction of smooth compactly supported radial states
- `def-nrqm-central-framework-coulomb-and-hydrogen-model` · definition — The declared Coulomb and two-body hydrogen model: one-centre operator, relative problem, reduced mass and scope exclusions
- `pthm-nrqm-central-coulomb-energy-observable-and-flow` · physics-theorem — The one-centre Coulomb model: energy observable, flow, stationary states and spectral support
- `pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy` · physics-theorem — The one-centre Coulomb model: bound energies, n^2-degeneracy, completeness of the bound states in the negative spectral subspace and the continuum
- `pthm-nrqm-central-coulomb-bound-state-radial-distributions` · physics-theorem — The one-centre Coulomb model: position and radial distributions of the bound states, with the ground-state density and its scales
- `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum` · physics-theorem — The declared two-body Coulomb model: reduced-mass decomposition, relative levels as thresholds and the absence of stationary total states
- `rem-nrqm-central-scope-and-empirical-status` · remark — Scope and empirical status of the central-potential and hydrogen page

### `qm-central-potentials-and-hydrogen-examples` — Qm Central Potentials And Hydrogen — Examples (4 item(s))

- `ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass` · example — Bound-energy parametrisations of the Coulomb model: exact identities, units and the reduced-mass factor
- `ex-nrqm-central-hydrogen-radial-distributions-and-moments` · example — Low-lying radial distributions of the Coulomb model: normalisations, moments and the failure of cross-l orthogonality of reduced functions
- `rem-nrqm-central-hydrogen-spectroscopy-status` · remark — Empirical status of the hydrogen spectrum on this pair: pending spectroscopy evidence and the limits of the model's spectral statements
- `rem-nrqm-central-examples-scope-limits` · remark — Scope of the central-potential and hydrogen examples page

### `qm-controlled-approximations` — Qm Controlled Approximations (13 item(s))

- `lem-nrqm-approximations-scaled-line-model-correspondence` · lemma — Nondimensionalisation of the one-dimensional stationary equation and of the WKB exponent
- `lem-nrqm-approximations-finite-rank-gapped-cluster-projection` · lemma — Finite-rank gapped spectral cluster under a bounded perturbation
- `def-nrqm-approximations-framework-variational-trial-model` · definition — The declared variational trial reading: assigned energy observable, form domain, trial value, bottom and gap
- `def-nrqm-approximations-framework-perturbed-family-model` · definition — The declared perturbed-family model: bounded self-adjoint perturbation, isolated gapped label and followed spectral label
- `def-nrqm-approximations-framework-wkb-regime-model` · definition — The declared WKB regime model: nondimensionalised line equation, turning points, phase integrals and the declared barrier transmission reading
- `post-nrqm-approximations-static-finite-level-dipole-coupling` · postulate — Static finite-level electric-dipole coupling: compressed dipole of the declared two-body Coulomb model in a uniform field
- `pthm-nrqm-approximations-variational-bounds-and-min-max` · physics-theorem — Variational trial bounds, gap-overlap control and the min-max characterisation of the declared model's discrete eigenvalues
- `pthm-nrqm-approximations-nondegenerate-perturbation-expansion` · physics-theorem — Nondegenerate stationary perturbation of a simple gapped label: first- and second-order coefficients and an explicit cubic remainder
- `pthm-nrqm-approximations-degenerate-first-order-splitting` · physics-theorem — Degenerate stationary perturbation: the perturbed eigenvalues stay within 4 lambda^2 v^2/g of the first-order shifts, and no branch relaxation is asserted
- `pthm-nrqm-approximations-wkb-allowed-region-error` · physics-theorem — WKB approximation on an allowed interval of the declared regime model: explicit Gronwall error bound away from turning points
- `pthm-nrqm-approximations-turning-point-connection` · physics-theorem — Airy connection across a single simple turning point of the declared regime model, with envelope error control
- `pthm-nrqm-approximations-barrier-transmission-asymptotics` · physics-theorem — Separated smooth-barrier tunnelling: the declared transmission coefficient is exp(-2S/h) up to explicit small-h and barrier-thickness errors
- `rem-nrqm-approximations-scope-and-empirical-status` · remark — What the controlled-approximations page adopts, proves and does not claim: gaps, branch populations, turning points and the static-Stark limitation

### `qm-controlled-approximations-examples` — Qm Controlled Approximations — Examples (5 item(s))

- `ex-nrqm-approximations-two-level-finite-gap-correction` · example — A two-level finite-gap model: exact eigenvalues, the second-order correction and a finite check of the cubic remainder bound
- `ex-nrqm-approximations-stark-finite-level-shift` · example — A finite-level static Stark model: vanishing first-order shift, exact quadratic splitting and a finite check of the remainder bound
- `ex-nrqm-approximations-zeeman-multiplet-splitting` · example — A spin-one multiplet in a uniform field: the exact Zeeman spectrum and degenerate first-order check
- `ex-nrqm-approximations-smooth-barrier-tunnelling-limits` · example — Tunnelling asymptotic limits: the smooth-barrier semiclassical limit and the exact rectangular prefactor comparison
- `rem-nrqm-approximations-examples-scope-limits` · remark — What the controlled-approximations examples establish and what they do not

## Your seams

Your pages depend on another group's:

- `qm-identical-particles-and-exclusion` requires `qm-composites-entanglement-and-reduced-states` (group u, batch 55)
- `qm-identical-particles-and-exclusion` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-identical-particles-and-exclusion` requires `qm-harmonic-oscillator` (group t, batch 52)
- `qm-identical-particles-and-exclusion` requires `qm-math-composites` (group x, batch 35)
- `qm-identical-particles-and-exclusion` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-identical-particles-and-exclusion` requires `qm-state-geometry` (group q, batch 44)
- `qm-identical-particles-and-exclusion` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-identical-particles-and-exclusion` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-identical-particles-and-exclusion-examples` requires `qm-angular-momentum-and-spin` (group u, batch 54)
- `qm-identical-particles-and-exclusion-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-identical-particles-and-exclusion-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-identical-particles-and-exclusion-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-identical-particles-and-exclusion-examples` requires `qm-math-coulomb` (group z, batch 39)
- `qm-identical-particles-and-exclusion-examples` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-central-potentials-and-hydrogen` requires `qm-composites-entanglement-and-reduced-states` (group u, batch 55)
- `qm-central-potentials-and-hydrogen` requires `qm-math-coulomb` (group z, batch 39)
- `qm-central-potentials-and-hydrogen` requires `qm-one-dimensional-potentials` (group t, batch 51)
- `qm-central-potentials-and-hydrogen` requires `qm-math-composites` (group x, batch 35)
- `qm-central-potentials-and-hydrogen` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-central-potentials-and-hydrogen` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-central-potentials-and-hydrogen` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-central-potentials-and-hydrogen` requires `qm-state-geometry` (group q, batch 44)
- `qm-central-potentials-and-hydrogen` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-central-potentials-and-hydrogen` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-central-potentials-and-hydrogen-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-central-potentials-and-hydrogen-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-central-potentials-and-hydrogen-examples` requires `qm-math-coulomb` (group z, batch 39)
- `qm-controlled-approximations` requires `qm-harmonic-oscillator` (group t, batch 52)
- `qm-controlled-approximations` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-controlled-approximations` requires `qm-math-controlled-dynamics` (group z, batch 40)
- `qm-controlled-approximations` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-controlled-approximations` requires `qm-state-geometry` (group q, batch 44)
- `qm-controlled-approximations` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-controlled-approximations` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-controlled-approximations` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-controlled-approximations` requires `qm-one-dimensional-potentials` (group t, batch 51)
- `qm-controlled-approximations` requires `qm-math-coulomb` (group z, batch 39)
- `qm-controlled-approximations-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-controlled-approximations-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-controlled-approximations-examples` requires `qm-math-coulomb` (group z, batch 39)
- `qm-controlled-approximations-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-controlled-approximations-examples` requires `qm-angular-momentum-and-spin` (group u, batch 54)
- `qm-controlled-approximations-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-controlled-approximations-examples` requires `qm-one-dimensional-potentials` (group t, batch 51)

Another group's pages depend on yours:

- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-controlled-approximations`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-central-potentials-and-hydrogen`
- `qm-three-dimensional-scattering` (group w) requires your `qm-controlled-approximations`
- `qm-three-dimensional-scattering` (group w) requires your `qm-central-potentials-and-hydrogen`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-controlled-approximations`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-identical-particles-and-exclusion`
- `qm-many-body-and-equilibrium-models-examples` (group w) requires your `qm-identical-particles-and-exclusion`
- `qm-photons-and-radiation-modes` (group x) requires your `qm-identical-particles-and-exclusion`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-controlled-approximations`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-identical-particles-and-exclusion`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-central-potentials-and-hydrogen`
- `qm-light-matter-and-spectral-transitions-examples` (group x) requires your `qm-central-potentials-and-hydrogen`
- `qm-light-matter-and-spectral-transitions-examples` (group x) requires your `qm-controlled-approximations`

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
