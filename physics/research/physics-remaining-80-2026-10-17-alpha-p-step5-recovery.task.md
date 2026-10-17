# Step 5 adjudication — group **p**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/physics-remaining-80-2026-10-17-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/physics-remaining-80-2026-10-17-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/physics-remaining-80-2026-10-17-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `qsm-interacting-exact-models` | A | quantum-statistical-mechanics | 589 | `csm-fluctuations-countermodels`, `qsm-bose-fermi-gases`, `holomorphic-functions-of-several-variables` |
| 46 | `qsm-interacting-exact-models-examples` | B | quantum-statistical-mechanics | 590 | `qsm-interacting-exact-models` |
| 47 | `qsm-dt-response` | A | quantum-statistical-mechanics | 591 | `qsm-finite-range-spin-dynamics`, `relations-functions-and-quotients`, `the-lebesgue-integral-and-the-convergence-theorems`, `cm-math-fluid` |
| 47 | `qsm-dt-response-examples` | B | quantum-statistical-mechanics | 592 | `qsm-dt-response` |
| 48 | `qsm-dt-channels` | A | quantum-statistical-mechanics | 593 | `qsm-dt-response` |
| 48 | `qsm-dt-channels-examples` | B | quantum-statistical-mechanics | 594 | `qsm-dt-channels` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qsm-interacting-exact-models` — Finite Pauli dimer spectrum and exact separability threshold (10 item(s))

- `def-qsm-pauli-two-qubit-conventions` · definition — Pauli matrices and the two-qubit exchange operator
- `def-qsm-finite-two-qubit-state-and-separability` · definition — Finite two-qubit density matrices and separability
- `lem-qsm-pauli-dimer-spectrum` · lemma — Spectrum of the two-qubit Pauli exchange matrix
- `lem-qsm-qubit-bloch-ball` · lemma — Bloch-ball representation of a qubit density matrix
- `lem-qsm-pauli-separable-correlation-bound` · lemma — Pauli exchange expectation bound for separable states
- `lem-qsm-pauli-boundary-mixture` · lemma — Explicit separable state at the Pauli dimer boundary
- `thm-qsm-models-dimer-entanglement` · theorem — Finite Pauli dimer spectrum and exact separability threshold
- `pthm-qsm-interacting-dimer-gibbs` · physics-theorem — Interacting Heisenberg dimer Gibbs model
- `pthm-qsm-commuting-lattice-countermodels` · physics-theorem — Commuting quantum Ising and nonadditive phase countermodel
- `pthm-qsm-onsite-interacting-atoms` · physics-theorem — Exact onsite Bose and Fermi interacting atoms

### `qsm-interacting-exact-models-examples` — Finite Pauli dimer spectrum and exact separability threshold — Examples (3 item(s))

- `ex-qsm-commuting-lattice-countermodels` · example — Finite analyticity versus the global-model cusp and shell inequivalence
- `ex-qsm-interacting-dimer-gibbs` · example — Entanglement threshold versus thermodynamic singularity
- `ex-qsm-onsite-interacting-atoms` · example — Repulsive Fermi covariance and zero-temperature Bose occupation step

### `qsm-dt-response` — Trace-class bounded-observable response (19 item(s))

- `lem-qsm-dt-banach-volterra-dyson` · lemma — Banach-space Volterra and Dyson series with a norm remainder
- `lem-qsm-dt-finite-matrix-trace-ideal` · lemma — Finite matrix trace-norm ideal inequalities
- `lem-qsm-dt-lorentzian-distribution-limits` · lemma — Lorentzian kernels converge to delta and principal-value distributions
- `lem-qsm-dt-stationary-variance-integral-identity` · lemma — Stationary-state covariance identity for time-integrated observables
- `thm-qsm-dt-normal-state-kubo` · theorem — Trace-class bounded-observable response
- `thm-qsm-dt-finite-unitary` · theorem — Finite unitary dynamics and stationary Gibbs states
- `thm-qsm-dt-cesaro-dephasing` · theorem — Finite Cesaro dephasing with degenerate energy blocks
- `thm-qsm-dt-finite-kubo` · theorem — Finite-time Kubo formula with norm remainder
- `thm-qsm-dt-finite-recurrence` · theorem — Arbitrarily late finite phase recurrences
- `thm-qsm-dt-strong-domain-response` · theorem — Bounded-commutator graph-domain Schrödinger response
- `post-qsm-dt-isolated-model` · postulate — Adopted isolated prepared unitary model
- `post-qsm-dt-physical-control` · postulate — Prepared control and expectation convention
- `thm-qsm-dt-spectral-fdt` · theorem — Finite spectral balance and distributional fluctuation response
- `lem-qsm-dt-trace-gibbs-correlation-series` · lemma — Absolute convergence of trace-Gibbs bounded correlation series
- `thm-qsm-dt-trace-gibbs-correlation-measure` · theorem — Trace-Gibbs bounded correlation measure and balance
- `pthm-qsm-dt-prepared-response` · physics-theorem — Conditional prepared finite quantum control response
- `thm-qsm-dt-algebraic-kubo` · theorem — Bounded C-star Dyson response for finite-range spin dynamics
- `thm-qsm-dt-isolated-dc-obstruction` · theorem — Nonzero pure-point equilibrium covariance is not integrable
- `thm-qsm-dt-variance-green-kubo` · theorem — Integrability-qualified quantum variance Green–Kubo limit

### `qsm-dt-response-examples` — Trace-class bounded-observable response — Examples (2 item(s))

- `ex-qsm-dt-bounded-oscillator-response` · example — Projected oscillator transition response
- `ex-qsm-dt-qubit-isolated-response` · example — Exactly computed two-level Kubo response

### `qsm-dt-channels` — Finite completely positive trace-preserving maps (11 item(s))

- `lem-qsm-dt-finite-trace-pairing-cyclicity` · lemma — Finite matrix trace cyclicity and nondegeneracy
- `def-qsm-dt-channel-definition` · definition — Finite completely positive trace-preserving maps
- `def-qsm-dt-gksl-definition` · definition — Finite GKSL generators and units
- `thm-qsm-dt-choi-kraus` · theorem — Complete finite Choi-Kraus equivalence
- `thm-qsm-dt-channel-duality` · theorem — Channel duals and norm closure
- `thm-qsm-dt-gksl-sufficient` · theorem — Finite GKSL generates CPTP semigroups
- `thm-qsm-dt-reduced-unitary` · theorem — Independent-preparation reduced unitary channel
- `thm-qsm-dt-trace-contraction` · theorem — Schwarz and trace-norm channel contraction
- `thm-qsm-dt-gksl-necessary` · theorem — Norm-continuous finite channel semigroups are GKSL
- `thm-qsm-dt-pinching-entropy` · theorem — Pinching raises finite entropy
- `thm-qsm-dt-time-dependent-gksl` · theorem — Continuous finite GKSL channel propagators

### `qsm-dt-channels-examples` — Finite completely positive trace-preserving maps — Examples (4 item(s))

- `cex-qsm-dt-damping-entropy` · counterexample — Amplitude damping can decrease system entropy
- `cex-qsm-dt-transpose-not-cp` · counterexample — Transpose positivity fails ancillary positivity
- `cex-qsm-dt-correlated-marginal` · counterexample — Correlated preparations with identical marginals diverge
- `cex-qsm-dt-finite-bath-memory` · counterexample — Finite-bath dephasing revival violates semigroup

## Your seams

Your pages depend on another group's:

- `qsm-interacting-exact-models` requires `csm-fluctuations-countermodels` (group d, batch 35)
- `qsm-interacting-exact-models` requires `qsm-bose-fermi-gases` (group o, batch 45)
- `qsm-dt-response` requires `qsm-finite-range-spin-dynamics` (group m, batch 39)

Another group's pages depend on yours:

- `qsm-dt-relaxation` (group q) requires your `qsm-dt-channels`
- `tgr-et03` (group y) requires your `qsm-dt-response`

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
