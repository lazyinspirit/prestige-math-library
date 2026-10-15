# Step 5 adjudication — group **n**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/physics-td-qft-rpm-62-2026-10-14-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/physics-td-qft-rpm-62-2026-10-14-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/physics-td-qft-rpm-62-2026-10-14-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 28 | `rpm-exact-flat-orbits` | A | relativistic-particle-mechanics | 425 | `cm-math-dynamics`, `rpm-external-charge`, `sr-accelerated-observers`, `cm-math-central` |
| 28 | `rpm-exact-flat-orbits-examples` | B | relativistic-particle-mechanics | 426 | `rpm-exact-flat-orbits` |
| 29 | `rpm-curved-orbits-scattering` | A | relativistic-particle-mechanics | 427 | `cm-math-central`, `cm-math-dynamics`, `gr-spherical-vacuum-model`, `rpm-external-charge`, `the-integral-logarithm-and-its-characterisations` |
| 29 | `rpm-curved-orbits-scattering-examples` | B | relativistic-particle-mechanics | 428 | `rpm-curved-orbits-scattering` |
| 30 | `rpm-radiation-models` | A | relativistic-particle-mechanics | 429 | `rpm-spin-finite-size`, `rpm-external-charge` |
| 30 | `rpm-radiation-models-examples` | B | relativistic-particle-mechanics | 430 | `rpm-radiation-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rpm-exact-flat-orbits` — Right-wedge accelerated clocks and rays (5 item(s))

- `post-rpm-ideal-rindler-phase-reception` · postulate — Ideal local phase reception by stationary Rindler observers
- `pthm-rpm-rindler-clock-gradient` · physics-theorem — Right-wedge Rindler clocks, radial rays and frequency ratio
- `pthm-rpm-constant-electric-orbit` · physics-theorem — Exact relativistic orbit in a uniform electric field
- `pthm-rpm-constant-magnetic-helix` · physics-theorem — Exact relativistic helix in a uniform magnetic field
- `pthm-rpm-crossed-field-drift` · physics-theorem — Subcritical crossed fields and exact drift-frame orbits

### `rpm-exact-flat-orbits-examples` — Right-wedge accelerated clocks and rays — Examples (4 item(s))

- `ex-rpm-rindler-clock-gradient` · example — Two stationary clocks and one radial Rindler ray
- `ex-rpm-constant-electric-orbit` · example — Uniform electric field from rest
- `ex-rpm-constant-magnetic-helix` · example — A circular magnetic orbit with zero axial momentum
- `ex-rpm-crossed-field-drift` · example — The exact constant drift solution in subcritical crossed fields

### `rpm-curved-orbits-scattering` — Circular timelike orbit and reduced radial stability (9 item(s))

- `pthm-rpm-schwarzschild-circular-stability` · physics-theorem — Lyapunov stability of Schwarzschild circular orbits in the fixed-angular-momentum radial system
- `lem-rpm-schwarzschild-null-geodesic-reduction` · lemma — Null geodesic radial first integral in the Schwarzschild exterior
- `pthm-rpm-schwarzschild-null-scattering` · physics-theorem — Schwarzschild null scattering and critical impact, with conditional Kruskal capture
- `pthm-rpm-static-clock-redshift` · physics-theorem — Static-clock redshift, proper acceleration, and a controlled weak-field expansion in Schwarzschild
- `def-rpm-relativistic-coulomb-phase-system` · definition — Repulsive relativistic Coulomb Hamiltonian phase system
- `lem-rpm-sine-over-angle-limit` · lemma — The sine-to-angle limit at the origin
- `lem-rpm-arctangent-reciprocal-angle` · lemma — Reciprocal positive arguments of the principal inverse tangent
- `prop-rpm-relativistic-coulomb-scattering-branch` · proposition — Exact repulsive relativistic Coulomb scattering branch
- `pthm-rpm-relativistic-coulomb-scattering` · physics-theorem — Exact repulsive relativistic Coulomb scattering in the fixed-source test-body model

### `rpm-curved-orbits-scattering-examples` — Circular timelike orbit and reduced radial stability — Examples (4 item(s))

- `ex-rpm-schwarzschild-radial-stability-values` · example — Fixed-angular-momentum stability at 2s, 3s and 4s
- `ex-rpm-schwarzschild-null-critical-impact` · example — An exact turning ray and the critical Schwarzschild impact parameter
- `ex-rpm-schwarzschild-static-redshift-acceleration` · example — Static Schwarzschild clocks at 2s and 4s, and the near-horizon acceleration limit
- `ex-rpm-relativistic-coulomb-newtonian-limit` · example — Formal nonrelativistic limit of the repulsive Coulomb scattering angle

### `rpm-radiation-models` — Reduced-order LL local ODE and shell (4 item(s))

- `lem-rpm-ll-reduced-ode` · lemma — Reduced-order Landau–Lifshitz local ODE and mass shell
- `lem-rpm-reduction-residual` · lemma — Conditional LAD-to-LL residual and finite-interval stability
- `post-rpm-lad-effective-equation` · postulate — Flat Lorentz–Abraham–Dirac effective equation
- `rem-rpm-self-force-status` · remark — Self-force status and point-particle limits

### `rpm-radiation-models-examples` — Reduced-order LL local ODE and shell — Examples (2 item(s))

- `ex-rpm-al-future-boundary-preacceleration` · example — Future-boundary solution of the nonrelativistic Abraham–Lorentz equation
- `cex-rpm-lad-force-free-runaway` · counterexample — Force-free runaway solution of the LAD equation

## Your seams

Your pages depend on another group's:

- `rpm-exact-flat-orbits` requires `rpm-external-charge` (group l, batch 24)
- `rpm-curved-orbits-scattering` requires `rpm-external-charge` (group l, batch 24)
- `rpm-radiation-models` requires `rpm-spin-finite-size` (group m, batch 27)
- `rpm-radiation-models` requires `rpm-external-charge` (group l, batch 24)

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
