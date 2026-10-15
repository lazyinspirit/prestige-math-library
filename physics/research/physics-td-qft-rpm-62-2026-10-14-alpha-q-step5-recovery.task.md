# Step 5 adjudication — group **q**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 10, 13, 15: 3 A/B pair(s), 6 page(s), 53 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/physics-td-qft-rpm-62-2026-10-14-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/physics-td-qft-rpm-62-2026-10-14-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/physics-td-qft-rpm-62-2026-10-14-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 10 | `td-cycles-and-low-temperature` | A | thermodynamics | 277 | `the-logarithm-and-general-powers`, `td-potentials-and-responses` |
| 10 | `td-cycles-and-low-temperature-examples` | B | thermodynamics | 278 | `td-cycles-and-low-temperature`, `the-exponential-function` |
| 13 | `td-phases-and-limits` | A | thermodynamics | 282 | `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses`, `td-math-continuum-pressure` |
| 13 | `td-phases-and-limits-examples` | B | thermodynamics | 283 | `td-phases-and-limits` |
| 15 | `td-finite-statistical-bridge` | A | thermodynamics | 284 | `qm-many-body-and-equilibrium-models`, `td-math-continuum-pressure`, `td-math-mixture-dynamics-and-shells`, `td-potentials-and-responses` |
| 15 | `td-finite-statistical-bridge-examples` | B | thermodynamics | 285 | `td-finite-statistical-bridge` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-cycles-and-low-temperature` — Cycles And Low Temperature (6 item(s))

- `def-td-reservoir-cycle` · definition — Ideal-reservoir thermodynamic cycles
- `pthm-td-carnot-engine-bound` · physics-theorem — Ideal-bath heat-engine efficiency bound
- `pthm-td-refrigerator-bound` · physics-theorem — Ideal-bath refrigerator coefficient-of-performance bound
- `post-td-nernst-scoped` · postulate — Uniform Nernst heat-theorem postulate on a compact family
- `post-td-unattainability-scoped` · postulate — Finite-protocol unattainability on a declared zero-temperature boundary
- `rem-td-residual-entropy` · remark — Residual entropy and the scope of the third-law postulates

### `td-cycles-and-low-temperature-examples` — Cycles And Low Temperature — Examples (5 item(s))

- `ex-td-carnot-engine-600-300` · example — A symbolic 600 K and 300 K engine bound
- `ex-td-refrigerator-cop-240-300` · example — A symbolic 240 K and 300 K refrigerator bound
- `cex-td-integrable-capacity-not-integer-power` · counterexample — Finite entropy integral does not force a heat-capacity power bound of order one or higher
- `ex-td-finite-canonical-ground-state-entropy` · example — Residual entropy in a finite canonical model
- `ex-td-geometric-cooling-protocol` · example — A finite-step geometric cooling protocol

### `td-phases-and-limits` — Phases And Limits (9 item(s))

- `def-td-thermodynamic-limit-contract` · definition — Finite-state thermodynamic-limit contract
- `pthm-td-fixed-tp-reaction-potential-minimum` · physics-theorem — Fixed-temperature and fixed-pressure potential minimum with internal reactions
- `def-td-phase-and-coexistence-domain` · definition — Phase branches and coexistence domains
- `pthm-td-intensive-coexistence-conditions` · physics-theorem — Intensive equilibrium conditions for coexisting phases
- `pthm-td-reaction-boundary-equilibrium` · physics-theorem — Reaction equilibrium conditions at interior and boundary amounts
- `pthm-td-clapeyron-local` · physics-theorem — Local Clapeyron slope on a regular pure-phase coexistence branch
- `pthm-td-compact-continuous-phase-mixture` · physics-theorem — Attained entropy-maximizing mixtures on compact phase domains
- `pthm-td-regular-gibbs-phase-rule` · physics-theorem — Local regular dimension of a reacting Gibbs phase-coexistence manifold
- `rem-td-nonsmooth-phase-scope` · remark — Scope at phase boundaries and in the thermodynamic limit

### `td-phases-and-limits-examples` — Phases And Limits — Examples (10 item(s))

- `ex-td-finite-two-state-partition-smooth` · example — Smooth free energy for a finite two-state model
- `ex-td-vdw-positive-slope` · example — A positive-slope segment in the reduced van der Waals model
- `ex-td-phase-fraction-lever-rule` · example — Phase fractions from an additive molar volume
- `ex-td-reaction-boundary-example` · example — A boundary reaction minimum with a one-sided extent
- `cex-td-noncompact-phase-mixture-no-attained-maximum` · counterexample — A noncompact phase domain with no attained mixture maximum
- `ex-td-compact-continuous-phase-mixture` · example — A compact two-generator mixture attains the d+1 support bound
- `ex-td-clapeyron-linear-branches` · example — A two-branch Gibbs model with a positive Clapeyron slope
- `cex-td-clapeyron-zero-volume-jump` · counterexample — Equal branch volumes do not give a Clapeyron graph
- `ex-td-phase-rule-single-component` · example — One component in two phases has one regular equation-set degree of freedom
- `ex-td-reactive-phase-rule-three-component` · example — A regular two-phase three-species reaction model

### `td-finite-statistical-bridge` — Finite Statistical Bridge (18 item(s))

- `def-td-finite-microstate-model` · definition — Finite statistical microstate model
- `def-td-regular-hamiltonian-shell-preparation` · definition — Regular Hamiltonian shell preparation data
- `post-td-canonical-sampling` · postulate — Canonical sampling assumption for finite and normalized statistical models
- `post-td-microcanonical-sampling` · postulate — Microcanonical sampling assumption
- `pthm-td-countable-canonical-identities` · physics-theorem — Countable canonical identities under a local moment envelope
- `pthm-td-differentiable-pressure-concentration` · physics-theorem — Energy-density concentration at differentiable lattice pressure
- `pthm-td-finite-bath-canonical-error` · physics-theorem — Finite-bath canonical error under a smooth shell-entropy model
- `pthm-td-finite-canonical-identities` · physics-theorem — Finite canonical partition, energy, variance, entropy and free-energy identities
- `pthm-td-finite-entropy-maximum` · physics-theorem — Canonical weights uniquely maximize finite-state entropy at their mean energy
- `pthm-td-general-quantum-canonical-identities` · physics-theorem — General quantum Gibbs normalization and canonical identities
- `pthm-td-independent-factorization` · physics-theorem — Partition, Gibbs-entropy and free-energy factorization for independent finite systems
- `pthm-td-invariant-regular-microcanonical-shell` · physics-theorem — Invariance of a regular-shell microcanonical preparation
- `pthm-td-lattice-bulk-pressure` · physics-theorem — Bulk log-partition pressure for a bounded finite-range lattice model
- `pthm-td-measurable-canonical-identities` · physics-theorem — Measurable canonical identities for a dimensionless reference measure
- `pthm-td-finite-quantum-free-energy-minimum` · physics-theorem — Finite-sector quantum Gibbs preparation minimizes the declared free-energy functional
- `pthm-td-finite-mode-occupation-and-trace-formulas` · physics-theorem — Finite bosonic and fermionic mode partition and occupation formulas
- `pthm-td-qualified-discrete-quantum-dephasing` · physics-theorem — Cesaro dephasing for a discrete trace-class quantum model
- `rem-td-ensemble-limit-hypotheses` · remark — Scope limits for finite ensembles, shells, pressure and dephasing

### `td-finite-statistical-bridge-examples` — Finite Statistical Bridge — Examples (5 item(s))

- `ex-td-finite-mode-thermal-ensemble` · example — One bosonic and one fermionic mode at a specified temperature
- `ex-td-two-site-thermal-ensemble` · example — Two independent two-level sites give a product thermal law
- `ex-td-infinite-mode-trace-divergence` · example — Identical bosonic modes do not have a finite infinite-mode Gibbs trace
- `ex-td-no-automatic-equilibration` · example — An identity dynamics leaves a noncanonical finite preparation unchanged
- `ex-td-two-site-no-thermalization` · example — Two isolated two-level sites do not relax an energy eigenstate to Gibbs form

## Your seams

Your pages depend on another group's:

- `td-cycles-and-low-temperature` requires `td-potentials-and-responses` (group p, batch 9)
- `td-phases-and-limits` requires `td-math-mixture-dynamics-and-shells` (group u, batch 12)
- `td-phases-and-limits` requires `td-potentials-and-responses` (group p, batch 9)
- `td-phases-and-limits` requires `td-math-continuum-pressure` (group u, batch 14)
- `td-finite-statistical-bridge` requires `td-math-continuum-pressure` (group u, batch 14)
- `td-finite-statistical-bridge` requires `td-math-mixture-dynamics-and-shells` (group u, batch 12)
- `td-finite-statistical-bridge` requires `td-potentials-and-responses` (group p, batch 9)

Another group's pages depend on yours:

- `td-irreversible-boundaries` (group r) requires your `td-finite-statistical-bridge`
- `td-stochastic-protocols` (group r) requires your `td-finite-statistical-bridge`
- `td-interacting-equilibrium-preparations` (group s) requires your `td-finite-statistical-bridge`

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
