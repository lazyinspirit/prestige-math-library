# Step 5 adjudication — group **h**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 92, 93, 94: 3 A/B pair(s), 6 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **92**: `research/physics-non-fluid-129-2026-10-21-r2-batch-92-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **93**: `research/physics-non-fluid-129-2026-10-21-r2-batch-93-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **94**: `research/physics-non-fluid-129-2026-10-21-r2-batch-94-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 92 | `csm-frontier-macroscopic-fluctuations` | A | classical-statistical-mechanics | 881 | `csm-frontier-hydrodynamic-ssep`, `csm-frontier-large-deviation-ensembles` |
| 92 | `csm-frontier-macroscopic-fluctuations-examples` | B | classical-statistical-mechanics | 882 | `csm-frontier-macroscopic-fluctuations` |
| 93 | `csm-frontier-kinetic-scaling` | A | classical-statistical-mechanics | 883 | `csm-collision-transport`, `csm-mean-field-hierarchy`, `csm-frontier-probability-interfaces` |
| 93 | `csm-frontier-kinetic-scaling-examples` | B | classical-statistical-mechanics | 884 | `csm-frontier-kinetic-scaling`, `csm-mean-field-hierarchy` |
| 94 | `csm-frontier-fluctuation-theorems` | A | classical-statistical-mechanics | 885 | `csm-stochastic-response`, `csm-frontier-large-deviation-ensembles` |
| 94 | `csm-frontier-fluctuation-theorems-examples` | B | classical-statistical-mechanics | 886 | `csm-frontier-fluctuation-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-frontier-macroscopic-fluctuations` — Hydrodynamic fluctuation action and nonequilibrium quasipotential (6 item(s))

- `def-csm-frontier-ssep-current-action` · definition — Normalized SSEP macroscopic fluctuation action
- `def-csm-frontier-bernoulli-relative-free-energy` · definition — Bernoulli relative free-energy functional
- `def-csm-frontier-ssep-quasipotential` · definition — Fixed-mean action quasi-potential
- `thm-csm-frontier-mft-reversal-identity` · theorem — Equilibrium action time-reversal identity
- `lem-csm-frontier-mft-small-action-bridge` · lemma — Small-action bridge to a relaxed equilibrium profile
- `thm-csm-frontier-equilibrium-quasipotential` · theorem — Equilibrium SSEP quasi-potential on a torus

### `csm-frontier-macroscopic-fluctuations-examples` — Hydrodynamic fluctuation action and nonequilibrium quasipotential — Examples (1 item(s))

- `ex-csm-frontier-mft-nonlocal-warning` · example — Two-site boundary-driven SSEP has a nonproduct stationary law for unequal reservoir rates

### `csm-frontier-kinetic-scaling` — Kinetic relaxation, diffusive scaling and entropy dissipation (4 item(s))

- `def-csm-frontier-two-velocity-scaling` · definition — Two-velocity periodic diffusive-scaling model
- `def-csm-frontier-boltzmann-grad-scaling` · definition — Periodic hard-sphere Boltzmann–Grad scaling convention
- `lem-csm-frontier-two-velocity-contraction` · lemma — Well-posedness, positivity and contraction for two-velocity transport
- `thm-csm-frontier-two-velocity-heat-limit` · theorem — Periodic two-velocity heat limit for well-prepared data

### `csm-frontier-kinetic-scaling-examples` — Kinetic relaxation, diffusive scaling and entropy dissipation — Examples (1 item(s))

- `ex-csm-frontier-distinct-scaling-limits` · example — Distinct kinetic scaling limits

### `csm-frontier-fluctuation-theorems` — Path entropy production, fluctuation symmetry and work identities (8 item(s))

- `def-csm-frontier-finite-rate-process` · definition — Finite-state continuous-time Markov jump processes with bounded rates
- `lem-csm-frontier-finite-jump-path-density` · lemma — Path densities and finite jump counts for bounded finite-state rates
- `thm-csm-frontier-finite-rate-forward-equation` · theorem — Forward equation and stationary laws for finite-state rate processes
- `def-csm-frontier-stationary-path-entropy` · definition — Stationary path entropy for a finite-state jump process
- `lem-csm-frontier-finite-rate-jump-count-expectation` · lemma — Expected directed jump counts for a finite-state rate process
- `lem-csm-frontier-finite-jump-feynman-kac` · lemma — Finite-state Feynman-Kac evolution for continuous jump rates
- `thm-csm-frontier-finite-path-fluctuation` · theorem — Finite-time fluctuation identity for stationary path entropy
- `thm-csm-frontier-finite-jarzynski` · theorem — Jarzynski identity for a finite-state driven rate process

### `csm-frontier-fluctuation-theorems-examples` — Path entropy production, fluctuation symmetry and work identities — Examples (1 item(s))

- `ex-csm-frontier-biased-ring-entropy` · example — Entropy production on a finite biased ring

## Your seams

Your pages depend on another group's:

- `csm-frontier-macroscopic-fluctuations` requires `csm-frontier-hydrodynamic-ssep` (group g, batch 91)
- `csm-frontier-macroscopic-fluctuations` requires `csm-frontier-large-deviation-ensembles` (group f, batch 88)
- `csm-frontier-kinetic-scaling` requires `csm-frontier-probability-interfaces` (group e, batch 85)
- `csm-frontier-fluctuation-theorems` requires `csm-frontier-large-deviation-ensembles` (group f, batch 88)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-non-fluid-129-2026-10-21-r2`

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
