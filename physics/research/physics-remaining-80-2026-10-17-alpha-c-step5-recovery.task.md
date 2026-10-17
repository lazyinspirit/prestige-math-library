# Step 5 adjudication — group **c**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 32, 33, 34: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **32**: `research/physics-remaining-80-2026-10-17-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/physics-remaining-80-2026-10-17-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **34**: `research/physics-remaining-80-2026-10-17-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 32 | `csm-collision-transport` | A | classical-statistical-mechanics | 499 | `improper-and-parameter-dependent-multiple-integrals`, `product-measures-and-the-fubini-tonelli-theorems`, `td-math-mixture-dynamics-and-shells`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-spectral-theorem-and-singular-value-decomposition` |
| 32 | `csm-collision-transport-examples` | B | classical-statistical-mechanics | 500 | `csm-collision-transport` |
| 33 | `csm-stochastic-response` | A | classical-statistical-mechanics | 501 | `csm-collision-transport`, `csm-mean-field-hierarchy`, `cm01-framework-quantities-and-geometry` |
| 33 | `csm-stochastic-response-examples` | B | classical-statistical-mechanics | 502 | `csm-stochastic-response` |
| 34 | `csm-exact-models` | A | classical-statistical-mechanics | 503 | `csm-phase-ensembles`, `cm-math-continuum`, `mixed-partials-taylor-and-extrema`, `the-total-derivative`, `matrices-and-the-matrix-of-a-linear-map`, `fubini-and-change-of-variables`, `the-derivative-and-mean-value-theorems`, `continuity-ivt-evt-and-uniform-continuity`, `rpm-geometry-actions`, `the-logarithm-and-general-powers`, `td-math-ensembles-and-limits`, `product-measures-and-the-fubini-tonelli-theorems`, `countability-and-uncountability`, `power-series-and-real-analytic-functions` |
| 34 | `csm-exact-models-examples` | B | classical-statistical-mechanics | 504 | `csm-exact-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-collision-transport` — Cutoff elastic-reflection collision measure and gain (9 item(s))

- `def-csm-dk-reflection-collision-gain` · definition — Cutoff elastic-reflection collision measure and gain
- `lem-csm-dk-reflection-measure-and-gain-identities` · lemma — Well-defined elastic reflection gain and collision identities
- `def-csm-dk-kinetic-macroscopic-fields` · definition — Kinetic density, velocity, covariance stress and heat flux
- `post-csm-dk-selected-cutoff-kinetic-model` · postulate — Selected phenomenological cutoff collision model
- `lem-csm-dk-gaussian-mixture-regularity` · lemma — Regularity and invariance of the cutoff Gaussian-mixture class
- `thm-csm-dk-exact-kinetic-moments` · theorem — Exact kinetic moment balances and unclosed fluxes
- `thm-csm-dk-global-cutoff-collision-evolution` · theorem — Global finite-energy cutoff collision evolution
- `thm-csm-dk-regular-collision-h-and-equality` · theorem — H theorem and Maxwellian equality for the regular cutoff model
- `pthm-csm-dk-qualified-kinetic-entropy` · physics-theorem — Conditional one-particle kinetic entropy production

### `csm-collision-transport-examples` — Cutoff elastic-reflection collision measure and gain — Examples (1 item(s))

- `cex-csm-dk-moments-do-not-close-stress` · counterexample — Equal number density, mean velocity, and scalar energy do not determine covariance stress

### `csm-stochastic-response` — Finite reversible stochastic rate model and thermal coupling (11 item(s))

- `def-csm-dk-finite-reversible-rate-model` · definition — Finite reversible stochastic rate model
- `post-csm-dk-selected-thermal-langevin-bath` · postulate — Adopted inertial velocity Langevin bath
- `post-csm-dk-selected-reversible-bath-rates` · postulate — Adopted finite reversible bath rates and field coupling
- `thm-csm-dk-nonexplosive-ctmc-and-gap` · theorem — Nonexplosive finite continuous-time chain and reversible spectral gap
- `thm-csm-dk-ou-velocity-diffusion-response` · theorem — Exact OU velocity response, diffusion and Gaussian scaling
- `pthm-csm-dk-ou-green-kubo-einstein` · physics-theorem — Conditional Langevin Green–Kubo and Einstein relation
- `rem-csm-dk-hard-limit-dispositions` · remark — Scope of the selected finite stochastic and kinetic models
- `thm-csm-dk-finite-rate-fluctuation-response` · theorem — Finite-rate fluctuation response and Green–Kubo inverse
- `thm-csm-dk-markov-entropy-and-strong-averages` · theorem — Markov relative entropy decay and almost-sure time averages
- `thm-csm-dk-strong-lumpability` · theorem — Exact all-preparations coarse Markov criterion
- `pthm-csm-dk-finite-bath-response` · physics-theorem — Conditional finite-bath equilibration and fluctuation response

### `csm-stochastic-response-examples` — Finite reversible stochastic rate model and thermal coupling — Examples (1 item(s))

- `cex-csm-dk-hidden-state-rate-obstruction` · counterexample — Reversible finite chain with hidden-state exit-rate obstruction

### `csm-exact-models` — Gaussian and gamma product tools (11 item(s))

- `lem-csm-examples-gamma-gaussian-tools` · lemma — Gaussian, gamma and beta product integrals
- `lem-csm-examples-smooth-flow-jacobian` · lemma — Jacobian identity for a specified smooth diffeomorphic flow
- `thm-csm-examples-flow-fine-entropy` · theorem — Fine entropy under a specified incompressible periodic flow
- `thm-csm-examples-quadratic-covariance` · theorem — Gaussian covariance for positive quadratic forms and a boundary counterexample
- `thm-csm-examples-spherical-marginal` · theorem — Exact spherical-shell coordinate marginal and fixed-block Gaussian limit
- `post-csm-examples-ensemble-preparations` · postulate — Declared example preparations and thermodynamic interpretation
- `pthm-csm-harmonic-ensemble` · physics-theorem — Confined coupled quadratic canonical systems
- `pthm-csm-ideal-gas-ensemble` · physics-theorem — Exact canonical and grand ideal-gas preparations
- `pthm-csm-ising-ring-correlation` · physics-theorem — Finite periodic Ising-ring correlations and exact decay
- `pthm-csm-tonks-rod-ensemble` · physics-theorem — Exact Tonks hard-rod pressure and convergent virial series
- `pthm-csm-spherical-shell-gas` · physics-theorem — Finite spherical-shell gas and its exact marginal

### `csm-exact-models-examples` — Gaussian and gamma product tools — Examples (5 item(s))

- `ex-csm-harmonic-ensemble` · example — Unpinned translation zero-mode divergence
- `ex-csm-ideal-gas-ensemble` · example — Maxwell speed marginal and Poisson number example
- `ex-csm-ising-ring-correlation` · example — Exact finite-ring correlation length at a chosen coupling
- `ex-csm-tonks-rod-ensemble` · example — Packing boundary and exact truncated virial error
- `ex-csm-spherical-shell-gas` · example — Finite shell support versus canonical Gaussian tails

## Your seams

Your pages depend on another group's:

- `csm-stochastic-response` requires `csm-mean-field-hierarchy` (group b, batch 31)
- `csm-exact-models` requires `csm-phase-ensembles` (group a, batch 26)

Another group's pages depend on yours:

- `csm-fluctuations-countermodels` (group d) requires your `csm-exact-models`
- `qsm-bose-fermi-gases` (group o) requires your `csm-exact-models`
- `qsm-dt-relaxation` (group q) requires your `csm-stochastic-response`

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

# Historical Step-5 closure recovery, `physics-remaining-80-2026-10-17`

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
