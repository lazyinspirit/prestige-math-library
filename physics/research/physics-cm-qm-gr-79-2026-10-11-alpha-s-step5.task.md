# Step 5 adjudication — group **s**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 48, 49, 50: 3 A/B pair(s), 6 page(s), 45 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **48**: `research/physics-cm-qm-gr-79-2026-10-11-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **49**: `research/physics-cm-qm-gr-79-2026-10-11-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/physics-cm-qm-gr-79-2026-10-11-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 48 | `qm-massive-particle-kinematics` | A | non-relativistic-quantum-mechanics | 175 | `qm-autonomous-dynamics`, `qm-math-composites`, `qm-math-magnetic-and-detection`, `qm-math-fock-and-equilibrium`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-orbital-and-spin` |
| 48 | `qm-massive-particle-kinematics-examples` | B | non-relativistic-quantum-mechanics | 176 | `qm-massive-particle-kinematics`, `the-heat-kernel-and-the-cauchy-problem`, `improper-and-parameter-dependent-multiple-integrals`, `qm-observables-and-born-probabilities`, `qm-math-composites`, `qm-math-intervals-and-contacts`, `qm-framework-and-quantities` |
| 49 | `qm-interference-and-local-detection` | A | non-relativistic-quantum-mechanics | 177 | `qm-massive-particle-kinematics`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics` |
| 49 | `qm-interference-and-local-detection-examples` | B | non-relativistic-quantum-mechanics | 178 | `qm-interference-and-local-detection`, `qm-framework-and-quantities` |
| 50 | `qm-uncertainty-and-compatibility` | A | non-relativistic-quantum-mechanics | 179 | `qm-massive-particle-kinematics`, `qm-measurement-and-instruments`, `qm-math-composites`, `qm-math-magnetic-and-detection`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry` |
| 50 | `qm-uncertainty-and-compatibility-examples` | B | non-relativistic-quantum-mechanics | 180 | `qm-uncertainty-and-compatibility`, `the-heat-kernel-and-the-cauchy-problem`, `improper-and-parameter-dependent-multiple-integrals`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-math-orbital-and-spin`, `qm-math-intervals-and-contacts`, `qm-autonomous-dynamics`, `qm-math-magnetic-and-detection`, `qm-measurement-and-instruments` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-massive-particle-kinematics` — Qm Massive Particle Kinematics (10 item(s))

- `lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators` · lemma — Finite orthogonal sums of self-adjoint operators and of bounded operators
- `lem-nrqm-kinematics-component-valued-wavefunction-identifications` · lemma — Unitary identifications of the component-valued wave-function space
- `lem-nrqm-kinematics-componentwise-position-and-momentum` · lemma — Componentwise position and momentum operators on the component-valued wave-function space
- `lem-nrqm-kinematics-ccr-and-internal-factor-commutation` · lemma — Canonical commutation relations on the component-valued core and commutation with the internal factor
- `lem-nrqm-kinematics-momentum-representation` · lemma — The momentum representation of the componentwise kinematics
- `def-nrqm-kinematics-framework-massive-spin-s-model` · definition — The massive spin-s particle model of the framework: state space, operators, units and frame readings
- `pthm-nrqm-kinematics-spin-s-outcome-laws` · physics-theorem — Position and momentum outcome laws of the massive spin-s model
- `pthm-nrqm-kinematics-translation-covariance` · physics-theorem — Translation covariance of the massive spin-s kinematics and of its bounded-potential dynamics
- `pthm-nrqm-kinematics-boost-covariance` · physics-theorem — Galilean boost covariance of the free massive spin-s model and the moving-frame reading
- `rem-nrqm-kinematics-scope-and-empirical-status` · remark — Scope and empirical status of the massive-particle kinematics items

### `qm-massive-particle-kinematics-examples` — Qm Massive Particle Kinematics — Examples (5 item(s))

- `ex-nrqm-kinematics-gaussian-position-momentum-packet` · example — The Gaussian position and momentum packet of the massive model
- `ex-nrqm-kinematics-plane-wave-generalized-eigenfunction` · example — The plane wave as a generalized momentum eigenfunctional
- `cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators` · counterexample — No bounded operators satisfy the canonical commutation relation with a nonzero commutator
- `texp-nrqm-kinematics-dirichlet-momentum-warning` · thought-experiment — A confined model with Dirichlet walls: the naive interval momentum is not an observable
- `rem-nrqm-kinematics-examples-scope-limits` · remark — What the worked items of the companion page establish

### `qm-interference-and-local-detection` — Qm Interference And Local Detection (8 item(s))

- `lem-nrqm-interference-component-cross-term-and-recorded-bin-laws` · lemma — Component amplitudes, coherent and incoherent bin laws, and recorded detector weights
- `def-nrqm-interference-two-path-preparation-and-detection-model` · definition — The declared two-path preparation model and its ideal detection bins
- `def-nrqm-interference-recorded-detector-and-sampling-model` · definition — The declared recorded detector and sampling model of the two-path arrangement
- `pthm-nrqm-interference-coherent-and-mixture-detection-laws` · physics-theorem — Coherent and which-path detection laws of the declared two-path model
- `pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning` · physics-theorem — Recorded bin laws, loss and conditioning of the declared two-path detector
- `pthm-nrqm-interference-continuity-and-local-probability-balance` · physics-theorem — Continuity equation and local balance for the massive-model position density
- `texp-nrqm-interference-finite-sample-fringe-failure` · thought-experiment — A finite sample can fail a criterion that rejects a positive-probability sequence
- `rem-nrqm-interference-scope-and-deferred-content` · remark — What the two-path detection page establishes, assumes and defers

### `qm-interference-and-local-detection-examples` — Qm Interference And Local Detection — Examples (4 item(s))

- `ex-nrqm-interference-ideal-flat-two-path-screen-distribution` · example — An ideal flat two-path distribution: exact coherent and which-path bin laws
- `ex-nrqm-interference-uniform-phase-averaging` · example — A declared finite phase-averaging model reproduces the which-path law for orthogonal components
- `exp-nrqm-interference-bach-electron-double-slit` · experiment — Reported controlled double-slit electron diffraction with single-electron detection (Bach, Pope, Liou and Batelaan)
- `rem-nrqm-interference-examples-scope-limits` · remark — What the worked items and the reported experiment of the examples page establish

### `qm-uncertainty-and-compatibility` — Qm Uncertainty And Compatibility (12 item(s))

- `def-nrqm-uncertainty-strong-spectral-commutation` · definition — Strong spectral commutation of self-adjoint operators
- `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound` · lemma — The Schroedinger-Robertson bound in anticommutator form and the Robertson bound on product domains
- `def-nrqm-uncertainty-preparation-spread` · definition — Preparation variance and spread of an assigned sharp observable
- `lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators` · lemma — Bounded Borel calculus of strongly commuting self-adjoint operators
- `thm-nrqm-uncertainty-joint-pvm-criterion` · theorem — Strong spectral commutation, joint projection-valued measures and bounded Borel calculus
- `lem-nrqm-uncertainty-product-domain-commutator-identity` · lemma — The position-momentum commutator identity on the product domain
- `lem-nrqm-uncertainty-approximation-by-product-domain-vectors` · lemma — Approximation of Q-P graph-domain vectors by product-domain vectors
- `pthm-nrqm-uncertainty-robertson-relation` · physics-theorem — The Robertson relation for preparation spreads of assigned sharp observables
- `pthm-nrqm-uncertainty-position-momentum-relation` · physics-theorem — The position-momentum preparation relation of the massive spin-s model
- `pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law` · physics-theorem — Compatible sharp observables, their joint law and the ideal joint instrument
- `pthm-nrqm-uncertainty-position-momentum-incompatible` · physics-theorem — Position and momentum of the massive model have no joint sharp observable
- `rem-nrqm-uncertainty-scope-and-empirical-status` · remark — What the uncertainty and compatibility page adopts, proves and does not claim

### `qm-uncertainty-and-compatibility-examples` — Qm Uncertainty And Compatibility — Examples (6 item(s))

- `ex-nrqm-uncertainty-gaussian-minimum-spread` · example — The Gaussian family attains the position-momentum bound in the massive model
- `texp-nrqm-uncertainty-spin-half-incompatibility` · thought-experiment — Spin one half: spread identity, incompatible component outcomes and saturated Robertson bounds
- `cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility` · counterexample — A commutator vanishing on a dense invariant domain does not imply strong spectral commutation
- `rem-nrqm-uncertainty-energy-time-caveat` · remark — Time is not an observable of the framework: the conditional timescale bound
- `rem-nrqm-uncertainty-error-disturbance-distinction` · remark — Preparation spread, apparatus resolution and disturbance are different objects
- `rem-nrqm-uncertainty-examples-scope-limits` · remark — What the examples companion records and what it does not

## Your seams

Your pages depend on another group's:

- `qm-massive-particle-kinematics` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-massive-particle-kinematics` requires `qm-math-composites` (group x, batch 35)
- `qm-massive-particle-kinematics` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-massive-particle-kinematics` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-massive-particle-kinematics` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-massive-particle-kinematics` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-massive-particle-kinematics` requires `qm-state-geometry` (group q, batch 44)
- `qm-massive-particle-kinematics` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-massive-particle-kinematics-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-massive-particle-kinematics-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-massive-particle-kinematics-examples` requires `qm-math-intervals-and-contacts` (group y, batch 38)
- `qm-massive-particle-kinematics-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-interference-and-local-detection` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-interference-and-local-detection` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-interference-and-local-detection` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-interference-and-local-detection-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-uncertainty-and-compatibility` requires `qm-measurement-and-instruments` (group r, batch 46)
- `qm-uncertainty-and-compatibility` requires `qm-math-composites` (group x, batch 35)
- `qm-uncertainty-and-compatibility` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-uncertainty-and-compatibility` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-uncertainty-and-compatibility` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-uncertainty-and-compatibility` requires `qm-state-geometry` (group q, batch 44)
- `qm-uncertainty-and-compatibility-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-uncertainty-and-compatibility-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-intervals-and-contacts` (group y, batch 38)
- `qm-uncertainty-and-compatibility-examples` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-uncertainty-and-compatibility-examples` requires `qm-measurement-and-instruments` (group r, batch 46)

Another group's pages depend on yours:

- `qm-one-dimensional-potentials` (group t) requires your `qm-interference-and-local-detection`
- `qm-one-dimensional-potentials` (group t) requires your `qm-massive-particle-kinematics`
- `qm-harmonic-oscillator` (group t) requires your `qm-uncertainty-and-compatibility`
- `qm-harmonic-oscillator` (group t) requires your `qm-massive-particle-kinematics`
- `qm-harmonic-oscillator-examples` (group t) requires your `qm-uncertainty-and-compatibility`
- `qm-harmonic-oscillator-examples` (group t) requires your `qm-massive-particle-kinematics`
- `qm-symmetries-and-conservation` (group t) requires your `qm-massive-particle-kinematics`
- `qm-symmetries-and-conservation-examples` (group t) requires your `qm-massive-particle-kinematics`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-uncertainty-and-compatibility`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-massive-particle-kinematics`
- `qm-angular-momentum-and-spin-examples` (group u) requires your `qm-massive-particle-kinematics`
- `qm-composites-entanglement-and-reduced-states` (group u) requires your `qm-massive-particle-kinematics`
- `qm-composites-entanglement-and-reduced-states-examples` (group u) requires your `qm-massive-particle-kinematics`
- `qm-bell-models-and-measurement-limits` (group u) requires your `qm-massive-particle-kinematics`
- `qm-identical-particles-and-exclusion` (group v) requires your `qm-massive-particle-kinematics`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-massive-particle-kinematics`
- `qm-central-potentials-and-hydrogen-examples` (group v) requires your `qm-massive-particle-kinematics`
- `qm-controlled-approximations` (group v) requires your `qm-massive-particle-kinematics`
- `qm-controlled-approximations-examples` (group v) requires your `qm-massive-particle-kinematics`
- `qm-three-dimensional-scattering` (group w) requires your `qm-massive-particle-kinematics`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-massive-particle-kinematics`

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
