# Step 5 adjudication — group **o**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/physics-remaining-80-2026-10-17-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/physics-remaining-80-2026-10-17-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/physics-remaining-80-2026-10-17-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 43 | `qsm-nonnormal-thermal-states` | A | quantum-statistical-mechanics | 583 | `qsm-kms-equilibrium` |
| 43 | `qsm-nonnormal-thermal-states-examples` | B | quantum-statistical-mechanics | 584 | `qsm-nonnormal-thermal-states` |
| 44 | `qsm-infinite-spin-physical-models` | A | quantum-statistical-mechanics | 585 | `qsm-commuting-quantum-phases`, `qsm-spin-thermodynamic-limits` |
| 44 | `qsm-infinite-spin-physical-models-examples` | B | quantum-statistical-mechanics | 586 | `qsm-infinite-spin-physical-models` |
| 45 | `qsm-bose-fermi-gases` | A | quantum-statistical-mechanics | 587 | `csm-exact-models`, `qm-math-oscillator`, `qm-framework-and-quantities` |
| 45 | `qsm-bose-fermi-gases-examples` | B | quantum-statistical-mechanics | 588 | `qsm-bose-fermi-gases` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qsm-nonnormal-thermal-states` — Finite-excitation vacuum spin representation and normality (4 item(s))

- `def-qsm-vacuum-spin-representation` · definition — Finite-excitation vacuum spin representation and normality
- `lem-qsm-vacuum-representation-irreducible` · lemma — Faithful irreducible finite-excitation representation
- `thm-qsm-onsite-product-kms` · theorem — Unique onsite product Gibbs KMS state
- `thm-qsm-product-thermal-state-nonnormal` · theorem — Thermal product state has no normal vacuum extension

### `qsm-nonnormal-thermal-states-examples` — Finite-excitation vacuum spin representation and normality — Examples (3 item(s))

- `cex-qsm-invariant-not-kms` · counterexample — Stationarity alone does not give quantum thermal equilibrium
- `cex-qsm-global-spin-thermal-trace-diverges` · counterexample — Infinite spin thermal trace diverges despite a unique KMS state
- `ex-qsm-nonnormal-tracial-spin-state` · example — Unique tracial KMS state is not vacuum normal

### `qsm-infinite-spin-physical-models` — Infinite quantum spin quantities and physical adoption (4 item(s))

- `def-qsm-infinite-spin-physical-quantities` · definition — Infinite quantum spin physical quantities
- `post-qsm-infinite-spin-equilibrium` · postulate — KMS equilibrium and local Born quantum spin model
- `pthm-qsm-infinite-spin-equilibrium-predictions` · physics-theorem — Conditional interacting spin dynamics and equilibrium predictions
- `pthm-qsm-diagonal-quantum-phase-predictions` · physics-theorem — Conditional quantum Ising uniqueness and phase predictions

### `qsm-infinite-spin-physical-models-examples` — Infinite quantum spin quantities and physical adoption — Examples (1 item(s))

- `ex-qsm-ising-phase-regimes` · example — Controlled diagonal quantum Ising regimes

### `qsm-bose-fermi-gases` — Explicit diagonal Fock domains and occupation trace (10 item(s))

- `def-qsm-identical-particle-fock-sectors` · definition — Symmetric and antisymmetric identical-particle Fock spaces
- `lem-qsm-fock-occupation-basis-and-car-relations` · lemma — Occupation bases and actual CCR/CAR domains
- `lem-qsm-models-diagonal-occupation-trace` · lemma — Explicit diagonal Fock domains and occupation trace
- `thm-qsm-models-lattice-riemann-bose-bound` · theorem — Lattice Gaussian Riemann limits and the singular Bose endpoint
- `post-qsm-models-statistics-and-preparation` · postulate — Quantum statistics and model equilibrium preparation
- `pthm-qsm-dilute-occupation-limit` · physics-theorem — Controlled dilute Bose/Fermi occupation limit
- `pthm-qsm-oscillator-spin-ensembles` · physics-theorem — Exact quantum oscillator and spin ensembles
- `pthm-qsm-periodic-ideal-occupation` · physics-theorem — Finite spectral periodic Bose/Fermi gas
- `pthm-qsm-fermi-zero-temperature` · physics-theorem — Ideal Fermi continuum and zero-temperature endpoint
- `pthm-qsm-homogeneous-bose-condensation` · physics-theorem — Dimension-restricted fixed-mean-density Bose condensation

### `qsm-bose-fermi-gases-examples` — Explicit diagonal Fock domains and occupation trace — Examples (5 item(s))

- `ex-qsm-dilute-occupation-limit` · example — Quantum occupation fluctuations and the classical approximation boundary
- `ex-qsm-oscillator-spin-ensembles` · example — Zero-point energy and ground-degeneracy entropy
- `ex-qsm-periodic-ideal-occupation` · example — A fixed-number constraint removes independent occupations
- `ex-qsm-fermi-zero-temperature` · example — Fermi sea energy and ideal degeneracy pressure
- `ex-qsm-homogeneous-bose-condensation` · example — Grand condensate variance remains macroscopic

## Your seams

Your pages depend on another group's:

- `qsm-nonnormal-thermal-states` requires `qsm-kms-equilibrium` (group n, batch 41)
- `qsm-infinite-spin-physical-models` requires `qsm-commuting-quantum-phases` (group n, batch 42)
- `qsm-infinite-spin-physical-models` requires `qsm-spin-thermodynamic-limits` (group n, batch 40)
- `qsm-bose-fermi-gases` requires `csm-exact-models` (group c, batch 34)

Another group's pages depend on yours:

- `qsm-interacting-exact-models` (group p) requires your `qsm-bose-fermi-gases`
- `tgr-mg01` (group y) requires your `qsm-bose-fermi-gases`
- `tgr-mhs04` (group aa) requires your `qsm-bose-fermi-gases`

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
