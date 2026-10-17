# Step 5 adjudication — group **l**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 22, 23, 36: 3 A/B pair(s), 6 page(s), 53 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/physics-remaining-80-2026-10-17-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/physics-remaining-80-2026-10-17-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/physics-remaining-80-2026-10-17-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 22 | `emg-ms02` | A | einstein-maxwell-models-mathematics | 479 | `emg-ms01`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `emg-cp01` |
| 22 | `emg-ms02-examples` | B | einstein-maxwell-models-mathematics | 480 | `emg-ms02` |
| 23 | `emg-ms03` | A | einstein-maxwell-models-mathematics | 481 | `emg-mm02`, `emg-ms01` |
| 23 | `emg-ms03-examples` | B | einstein-maxwell-models-mathematics | 482 | `emg-ms03` |
| 36 | `qsm-states-ensembles` | A | quantum-statistical-mechanics | 569 | `qm-math-fock-and-equilibrium`, `spectral-measures-and-borel-functional-calculus`, `td-math-ensembles-and-limits`, `unbounded-self-adjoint-operators-and-stones-theorem`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `quantum-optimization-sdp-and-variational-algorithms`, `trace-distance-fidelity-and-information-limits`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `gelfand-theory-and-commutative-c-star-algebras`, `group-c-star-algebras-and-the-fell-unitary-dual`, `minimax-lower-bounds-and-information-theoretic-methods`, `numerical-optimization-for-statistical-computation`, `qm-composites-entanglement-and-reduced-states`, `countability-and-uncountability`, `rn-as-a-normed-space`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `construction-of-r-via-cauchy-sequences`, `the-topology-of-euclidean-space`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-dimensional-normed-spaces-and-riesz-lemma`, `matrices-and-the-matrix-of-a-linear-map`, `relations-functions-and-quotients`, `qm-math-composites` |
| 36 | `qsm-states-ensembles-examples` | B | quantum-statistical-mechanics | 570 | `qsm-states-ensembles` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-ms02` — Selected ingoing RN extension and time orientation (11 item(s))

- `def-emg-xs-ingoing-rn` · definition — Selected ingoing RN extension and time orientation
- `prop-emg-xs-rn-local-gauges` · proposition — Dyonic RN gauges and global exactness obstruction
- `prop-emg-xs-rn-horizon-data` · proposition — RN roots, Killing horizons and surface gravity
- `thm-emg-xs-rn-crossing` · theorem — Regular RN crossings and local bifurcation extension
- `thm-emg-xs-kn-extension` · theorem — Regular ingoing KN metric, field and sphere axes
- `prop-emg-xs-kn-horizon-data` · proposition — KN Killing generators, surface gravity, area and potential
- `prop-emg-xs-kn-ergoregion` · proposition — Specified time Killing ergosurfaces and geodesic constants
- `prop-emg-xs-charged-ring-obstruction` · proposition — Charged KN ring regularity obstruction
- `lem-emg-xs-null-barrier` · lemma — Smooth causal-cone collar barrier with screen directions
- `thm-emg-xs-rn-escape` · theorem — Outer RN escape boundary in selected model
- `thm-emg-xs-kn-escape` · theorem — Outer KN escape boundary on the selected ingoing model

### `emg-ms02-examples` — Selected ingoing RN extension and time orientation — Examples (4 item(s))

- `ex-emg-xs-superextremal-rn` · example — Superextremal RN absence of radial horizon
- `ex-emg-xs-extremal-horizon` · example — Extremal RN smooth horizon with zero kappa
- `ex-emg-xs-topological-charge` · example — Nonbounding sphere carries source-free charge flux
- `cex-emg-xs-ergo-is-not-horizon` · counterexample — Equatorial rotating ergosurface differs from horizon

### `emg-ms03` — Positive harmonic conformastatic electrovac data (10 item(s))

- `def-emg-xs-harmonic-mp` · definition — Positive harmonic conformastatic electrovac data
- `def-emg-xs-br-products` · definition — Constant-radius Bertotti-Robinson product data
- `def-emg-xs-null-wave` · definition — Smooth null electrovac wave candidate data
- `thm-emg-xs-mp-verification` · theorem — Full harmonic Majumdar-Papapetrou Einstein-Maxwell verification
- `thm-emg-xs-br-verification` · theorem — Product electrovacuum equations from full factor Ricci
- `thm-emg-xs-null-wave-verification` · theorem — Exact electrovac plane-wave family
- `prop-emg-xs-mp-multicenter` · proposition — Finite positive multicenter MP exterior and fluxes
- `prop-emg-xs-null-invariants` · proposition — Null wave curvature and zero quadratic invariants
- `prop-emg-xs-mp-extremal-rn` · proposition — Single-center MP is extremal Reissner-Nordström exterior
- `thm-emg-xs-rn-near-horizon` · theorem — Extremal RN to Bertotti-Robinson in C-infinity local scaling

### `emg-ms03-examples` — Positive harmonic conformastatic electrovac data — Examples (4 item(s))

- `cex-emg-xs-nonharmonic-vacuum` · counterexample — Nonharmonic conformastatic data fail the electrovac equation
- `cex-emg-xs-constant-radius` · counterexample — Bertotti-Robinson has no non-null areal-radius coordinate
- `cex-emg-xs-vanishing-scalars` · counterexample — Zero quadratic invariants need not mean flatness
- `ex-emg-xs-two-center` · example — Two-center exact exterior with same-sign fluxes

### `qsm-states-ensembles` — Normal density states and spectral moments (21 item(s))

- `def-qsm-density-trace-state` · definition — Trace-class normal density states
- `lem-qsm-matrix-state-calculus` · lemma — Finite matrix spectral and state calculus
- `lem-qsm-finite-matrix-cstar-and-state-duality` · lemma — Finite matrix C-star algebra and density-state duality
- `def-qsm-finite-gibbs-purification` · definition — Finite Gibbs density and its canonical purification
- `lem-qsm-matrix-exponential-response` · lemma — Duhamel derivative and finite Kubo–Mori response
- `lem-qsm-trace-state-calculus` · lemma — Trace-state cyclicity and spectral probability calculus
- `post-qsm-normal-measurement-state` · postulate — Normal-state quantum measurement interpretation
- `alg-qsm-finite-gibbs-state-preparation` · algorithm — Sparse-oracle finite Gibbs purification procedure
- `def-qsm-relative-entropy-domain` · definition — Quantum spectral entropy and relative-entropy domains
- `lem-qsm-finite-gibbs-kms` · lemma — Finite unitary dynamics and Gibbs KMS identity
- `thm-qsm-finite-gibbs-variational` · theorem — Finite Gibbs free-energy and entropy optimization
- `thm-qsm-finite-gibbs-circuit-marginal-error` · theorem — Finite Gibbs circuit marginal and trace-distance error
- `thm-qsm-trace-cross-log-inequality` · theorem — Trace-class cross-log entropy inequality
- `thm-qsm-finite-entropy-composition` · theorem — Finite mixing, product entropy, and bipartite subadditivity
- `thm-qsm-trace-gibbs-variational` · theorem — Self-adjoint trace-Gibbs normalization and form-energy optimization
- `post-qsm-band-and-grand-preparation` · postulate — Energy-band and grand quantum preparations
- `post-qsm-thermal-gibbs-preparation` · postulate — Canonical quantum thermal preparation
- `pthm-qsm-commuting-grand-response` · physics-theorem — Commuting quantum grand responses
- `pthm-qsm-equilibrium-unitary-entropy` · physics-theorem — Unitary entropy and Gibbs equilibrium identities
- `pthm-qsm-gibbs-energy-entropy` · physics-theorem — Gibbs energy, entropy and potential identities
- `pthm-qsm-static-quantum-response` · physics-theorem — Static finite quantum response and covariance

### `qsm-states-ensembles-examples` — Normal density states and spectral moments — Examples (3 item(s))

- `ex-qsm-entanglement-mixture` · example — Pure entanglement and correlated mixtures
- `ex-qsm-oscillator-trace-gibbs` · example — Oscillator trace Gibbs and divergent normalization
- `ex-qsm-two-level-noncommuting` · example — Two-level Gibbs and noncommuting susceptibility

## Your seams

Your pages depend on another group's:

- `emg-ms02` requires `emg-ms01` (group k, batch 21)
- `emg-ms02` requires `emg-cp01` (group i, batch 6)
- `emg-ms03` requires `emg-mm02` (group k, batch 17)
- `emg-ms03` requires `emg-ms01` (group k, batch 21)

Another group's pages depend on yours:

- `emg-s01` (group g) requires your `emg-ms02`
- `emg-s02` (group h) requires your `emg-ms03`
- `qsm-local-ensemble-bridge` (group m) requires your `qsm-states-ensembles`
- `qsm-quasilocal-states` (group m) requires your `qsm-states-ensembles`
- `tgr-mhs01` (group z) requires your `emg-ms02`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-remaining-80-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
