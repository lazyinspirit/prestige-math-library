# Step 5 adjudication — group **r**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 16, 19, 20: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/physics-td-qft-rpm-62-2026-10-14-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **19**: `research/physics-td-qft-rpm-62-2026-10-14-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/physics-td-qft-rpm-62-2026-10-14-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `td-irreversible-boundaries` | A | thermodynamics | 286 | `td-finite-statistical-bridge` |
| 16 | `td-irreversible-boundaries-examples` | B | thermodynamics | 287 | `td-irreversible-boundaries` |
| 19 | `td-stochastic-protocols` | A | thermodynamics | 299 | `convexity`, `td-finite-statistical-bridge` |
| 19 | `td-stochastic-protocols-examples` | B | thermodynamics | 300 | `td-stochastic-protocols` |
| 20 | `td-continuum-heat-model` | A | thermodynamics | 301 | `td-entropy-foundation`, `td-math-local-pfaff-geometry`, `td-math-mixture-dynamics-and-shells`, `the-heat-kernel-and-the-cauchy-problem` |
| 20 | `td-continuum-heat-model-examples` | B | thermodynamics | 302 | `td-continuum-heat-model` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-irreversible-boundaries` — Irreversible Boundaries (6 item(s))

- `def-td-macro-versus-micro-entropy-claim` · definition — Macroscopic and microscopic entropy quantities
- `rem-td-empirical-evidence-contract` · remark — Evidence records for irreversible and transport claims
- `rem-td-fluctuation-model-hypotheses` · remark — Hypotheses for microscopic fluctuation claims
- `rem-td-local-equilibrium-branch` · remark — Scope of a local-equilibrium continuum branch
- `pthm-td-unitary-entropy-invariance` · physics-theorem — Unitary invariance of finite-sector quantum entropy
- `rem-td-transport-branch` · remark — Scope of transport constitutive laws

### `td-irreversible-boundaries-examples` — Irreversible Boundaries — Examples (5 item(s))

- `ex-td-macrocell-and-gibbs-entropy` · example — A macrocell count and a nonuniform microscopic distribution
- `ex-td-mean-vs-trial-outcome` · example — Positive ensemble mean with a negative realization
- `ex-td-local-equilibrium-profile` · example — A nonconstant local-equilibrium temperature field
- `ex-td-transport-coefficient-model-input` · example — Different Fourier coefficients give different model fluxes
- `ex-td-empty-evidence-record-template` · example — Empty source-backed evidence record template

### `td-stochastic-protocols` — Stochastic Protocols (13 item(s))

- `def-td-driven-finite-path-model` · definition — Finite driven protocol and path work
- `def-td-detailed-balance-rate-model` · definition — Finite detailed-balance rate and transition models
- `post-td-canonical-protocol-preparation` · postulate — Canonical initial preparation for a finite protocol
- `post-td-stationary-bath-kernel` · postulate — Finite bath kernels preserve the stage canonical law
- `post-td-linear-ornstein-uhlenbeck-bath` · postulate — Linear Ornstein-Uhlenbeck bath model
- `def-td-finite-memory-reset-model` · definition — Finite memory and retained-register reset model
- `pthm-td-finite-pathwise-first-law` · physics-theorem — Pathwise energy balance for a finite driven protocol
- `pthm-td-markov-relative-entropy-and-convergence` · physics-theorem — Relative-entropy decrease and convergence for a finite detailed-balance chain
- `pthm-td-finite-jarzynski` · physics-theorem — Jarzynski equality for a finite protocol with stationary kernels
- `pthm-td-finite-crooks` · physics-theorem — Crooks path and work-distribution relation for a finite protocol
- `pthm-td-ornstein-uhlenbeck-thermal-fluctuations` · physics-theorem — Thermal fluctuations in the specified linear harmonic bath model
- `pthm-td-qualified-landauer-reset` · physics-theorem — Conditional work bound for finite memory reset
- `pthm-td-mean-dissipation` · physics-theorem — Mean work is at least the finite free-energy difference

### `td-stochastic-protocols-examples` — Stochastic Protocols — Examples (6 item(s))

- `ex-td-finite-quench-work-fluctuation` · example — A finite quench has a positive probability of work below delta F
- `ex-td-disconnected-markov-relaxation` · example — A disconnected detailed-balance chain does not converge to the full reference law
- `ex-td-biased-bath-shannon-entropy-decreases` · example — Shannon entropy decreases in a biased detailed-balance bath
- `ex-td-ornstein-uhlenbeck-spectrum` · example — The stationary harmonic bath has a Lorentzian position spectrum
- `ex-td-biased-memory-reset-bound` · example — Reset bound for a biased two-state memory
- `ex-td-correlated-memory-zero-conditional-reset-cost` · example — A perfectly retained bit gives zero conditional entropy reset bound

### `td-continuum-heat-model` — Continuum Heat Model (12 item(s))

- `def-td-rectangular-local-equilibrium-fields` · definition — Rectangular local-equilibrium field data
- `def-td-regular-elastic-collision-model` · definition — Regular single-species elastic collision data
- `post-td-fourier-conductivity` · postulate — Fourier heat-flux constitutive model
- `post-td-local-energy-balance` · postulate — Local energy balance for an insulated continuum body
- `post-td-local-equilibrium-entropy-density` · postulate — Local-equilibrium caloric entropy density
- `post-td-boltzmann-molecular-chaos-model` · postulate — Periodic Boltzmann model with incoming molecular chaos
- `lem-td-rectangular-poincare` · lemma — Mean-zero Poincare inequality on a rectangle
- `pthm-td-collision-h-theorem` · physics-theorem — Conditional entropy production in the periodic Boltzmann model
- `pthm-td-fourier-entropy-production` · physics-theorem — Entropy production in the local Fourier heat model
- `pthm-td-constant-conductivity-neumann-existence` · physics-theorem — Constant-conductivity heat evolution on an insulated rectangle
- `pthm-td-neumann-heat-relaxation` · physics-theorem — Exponential relaxation of the constant-conductivity Neumann heat model
- `rem-td-solution-existence-scope` · remark — Scope of the continuum heat solution results

### `td-continuum-heat-model-examples` — Continuum Heat Model — Examples (2 item(s))

- `ex-td-insulated-polynomial-relaxation` · example — A nonuniform insulated temperature profile relaxes to its mean
- `ex-td-diffusive-infinite-propagation` · example — The rectangular Fourier model has instantaneous spatial support

## Your seams

Your pages depend on another group's:

- `td-irreversible-boundaries` requires `td-finite-statistical-bridge` (group q, batch 15)
- `td-stochastic-protocols` requires `td-finite-statistical-bridge` (group q, batch 15)
- `td-continuum-heat-model` requires `td-entropy-foundation` (group o, batch 2)
- `td-continuum-heat-model` requires `td-math-local-pfaff-geometry` (group t, batch 5)
- `td-continuum-heat-model` requires `td-math-mixture-dynamics-and-shells` (group u, batch 12)

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
