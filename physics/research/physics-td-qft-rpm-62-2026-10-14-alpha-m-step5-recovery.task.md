# Step 5 adjudication — group **m**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/physics-td-qft-rpm-62-2026-10-14-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/physics-td-qft-rpm-62-2026-10-14-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/physics-td-qft-rpm-62-2026-10-14-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-td-qft-rpm-62-2026-10-14-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 25 | `rpm-hamiltonian-constraints` | A | relativistic-particle-mechanics | 419 | `distributions-integral-manifolds-and-the-frobenius-theorem`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `hamiltonian-mechanics-and-completely-integrable-systems`, `rank-theorems-and-embedded-submanifolds`, `rpm-geometry-actions`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `cm-math-variations` |
| 25 | `rpm-hamiltonian-constraints-examples` | B | relativistic-particle-mechanics | 420 | `rpm-hamiltonian-constraints` |
| 26 | `rpm-symmetries-hamilton-jacobi` | A | relativistic-particle-mechanics | 421 | `moment-maps-and-symplectic-reduction`, `rpm-hamiltonian-constraints` |
| 26 | `rpm-symmetries-hamilton-jacobi-examples` | B | relativistic-particle-mechanics | 422 | `rpm-symmetries-hamilton-jacobi` |
| 27 | `rpm-spin-finite-size` | A | relativistic-particle-mechanics | 423 | `cm-math-dynamics`, `em-electrostatics-in-vacuum`, `gr-gr13-convex-normal-neighborhoods`, `rpm-external-charge`, `sr-accelerated-observers` |
| 27 | `rpm-spin-finite-size-examples` | B | relativistic-particle-mechanics | 424 | `rpm-spin-finite-size` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rpm-hamiltonian-constraints` — Cotangent phase data, observables and action dimensions (22 item(s))

- `def-rpm-h-cotangent-phase-space` · definition — Cotangent phase data, observables and action dimensions
- `def-rpm-h-temporal-chart-data` · definition — Temporal chart with lapse, shift and positive slice metric
- `def-rpm-h-almost-regular-legendre` · definition — Regular, hyperregular and almost-regular Legendre domains
- `def-rpm-h-background-and-model-quantities` · definition — Lorentz background, particle quantities and parameter units
- `def-rpm-h-regular-constraint-system` · definition — Regular primary constraints and total generator
- `thm-rpm-h-canonical-poisson-and-flow` · theorem — Canonical Poisson brackets and local Hamiltonian flow
- `post-rpm-h-free-test-particle-action` · postulate — Free massive test-particle action
- `post-rpm-h-massless-shell-action` · postulate — Separate massless shell action
- `thm-rpm-h-constraint-consistency` · theorem — Constraint consistency for a regular first-order model
- `thm-rpm-h-first-class-local-reduction` · theorem — Regular first-class constraints admit local symplectic reduction
- `thm-rpm-h-homogeneous-legendre-degeneracy` · theorem — Positive homogeneity forces Legendre degeneracy
- `thm-rpm-h-local-legendre-and-energy-descent` · theorem — Energy descends through an almost-regular Legendre map
- `thm-rpm-h-second-class-dirac-bracket` · theorem — Second-class constraints and the Dirac bracket
- `thm-rpm-h-flat-shell-global-reduction` · theorem — Flat future mass shell has an explicit global orbit quotient
- `thm-rpm-h-homogeneous-massive-shell` · theorem — Massive square-root Legendre map and its future shell
- `thm-rpm-h-regular-local-gauge-slice` · theorem — A transverse local gauge condition gives a second-class slice
- `thm-rpm-h-first-order-action-and-geodesics` · theorem — First-order shell action yields massive and null geodesics
- `thm-rpm-h-inertial-time-reduced-hamiltonian` · theorem — Free shell in inertial time has the square-root Hamiltonian
- `pthm-rpm-h-action-mechanical-momentum` · physics-theorem — Square-root action momentum equals massive mechanical momentum
- `pthm-rpm-h-massive-and-null-time-motion` · physics-theorem — Massive and null free particles in inertial time
- `thm-rpm-h-temporal-shell-reduction` · theorem — A curved temporal chart gives a local reduced Hamiltonian
- `pthm-rpm-h-coordinate-versus-observer-energy` · physics-theorem — Coordinate Hamiltonian and normal-observer energy differ by shift

### `rpm-hamiltonian-constraints-examples` — Cotangent phase data, observables and action dimensions — Examples (2 item(s))

- `cex-rpm-h-nonhausdorff-first-class-quotient` · counterexample — A regular first-class quotient can be non-Hausdorff
- `ex-rpm-h-shifted-chart-negative-energy` · example — Flat shifted chart with negative coordinate Hamiltonian

### `rpm-symmetries-hamilton-jacobi` — Poincare semidirect group, dual pairing and moment components (12 item(s))

- `def-rpm-h-poincare-charge-space` · definition — Poincare semidirect group, dual pairing and moment components
- `def-rpm-h-first-class-constraint-family` · definition — First-class closure for a regular constraint family
- `thm-rpm-h-local-hamilton-jacobi` · theorem — Local Hamilton-Jacobi solution by invertible characteristics
- `thm-rpm-h-poincare-moment-map-and-algebra` · theorem — Poincare cotangent moment map and full generator algebra
- `thm-rpm-h-positive-spin-orbit` · theorem — Positive classical spin Poincare orbit and stabilizer jump
- `post-rpm-h-classical-spin-orbit-model` · postulate — Optional adopted classical spinning-orbit model
- `thm-rpm-h-spinless-kks-identification` · theorem — Massive spinless shell reduction is a single KKS orbit
- `pthm-rpm-h-classical-orbit-evolution` · physics-theorem — Conditional classical orbit evolution and invariant labels
- `thm-rpm-h-killing-shell-first-integral` · theorem — Killing scalar conservation in cotangent shell form
- `pthm-rpm-h-free-symmetry-conservation` · physics-theorem — Conditional free Poincare and background Killing charges
- `thm-rpm-h-complete-integral-coordinates` · theorem — Complete integrals and covariant versus time Hamilton-Jacobi
- `pthm-rpm-h-hj-trajectories` · physics-theorem — Conditional particle trajectories from Hamilton-Jacobi characteristics

### `rpm-symmetries-hamilton-jacobi-examples` — Poincare semidirect group, dual pairing and moment components — Examples (4 item(s))

- `cex-rpm-h-instantaneous-potential-free-boost` · counterexample — Free boost plus instantaneous relativistic pair potential violates the charge algebra
- `ex-rpm-h-two-shell-consistency-obstruction` · example — Two scalar shell potentials fail first-class closure generically
- `cex-rpm-h-relativistic-hj-caustic` · counterexample — Smooth free relativistic Hamilton-Jacobi data form a caustic
- `ex-rpm-h-free-relativistic-complete-integral` · example — Explicit massive and nonzero-null free complete integral

### `rpm-spin-finite-size` — BMT constraint and restricted-ansatz algebra (13 item(s))

- `lem-rpm-bmt-transport-algebra` · lemma — BMT transport constraint and restricted-ansatz algebra
- `lem-rpm-body-spin-size-bound` · lemma — Positive-energy spin–size inequality
- `lem-rpm-charge-multipole-remainder` · lemma — Finite-size charge multipole remainder
- `lem-rpm-flat-centroid-shift` · lemma — Exact flat centroid translation and disk
- `lem-rpm-ssc-momentum-identity` · lemma — Differentiated SSC momentum–velocity identity
- `lem-rpm-td-local-closure` · lemma — Admissible TD pole-dipole local closure
- `def-rpm-body-moments` · definition — Body moments and transport convention
- `post-rpm-mpd-truncation` · postulate — Pole-dipole and closed multipole test-body models
- `pthm-rpm-bmt-constraints` · physics-theorem — BMT orthogonality and conserved spin length
- `pthm-rpm-spherical-charge-size-bound` · physics-theorem — Spherical charge exterior-energy size bound
- `pthm-rpm-hidden-momentum` · physics-theorem — SSC choices and hidden momentum
- `pthm-rpm-rest-spin-and-size-bound` · physics-theorem — Rest-frame spin transport and finite-body size bounds
- `pthm-rpm-td-invariants` · physics-theorem — TD spin and momentum norms

### `rpm-spin-finite-size-examples` — BMT constraint and restricted-ansatz algebra — Examples (4 item(s))

- `ex-rpm-bmt-fw-and-g-two` · example — BMT G=0 Fermi–Walker and G=1 shared-generator cases
- `ex-rpm-fixed-versus-scaled-charge` · example — Fixed-charge and scaled small-body limits
- `ex-rpm-rest-spin-and-size-bound` · example — Rest magnetic spin rotation and independent centroid disk
- `ex-rpm-spinless-td` · example — Spinless TD geodesic limit

## Your seams

Your pages depend on another group's:

- `rpm-hamiltonian-constraints` requires `rpm-geometry-actions` (group l, batch 22)
- `rpm-spin-finite-size` requires `rpm-external-charge` (group l, batch 24)

Another group's pages depend on yours:

- `rpm-radiation-models` (group n) requires your `rpm-spin-finite-size`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-td-qft-rpm-62-2026-10-14-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-td-qft-rpm-62-2026-10-14`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
