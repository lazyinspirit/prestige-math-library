# Step 5 adjudication — group **j**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 50, 59, 60: 3 A/B pair(s), 6 page(s), 31 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **50**: `research/physics-td-qft-rpm-62-2026-10-14-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/physics-td-qft-rpm-62-2026-10-14-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/physics-td-qft-rpm-62-2026-10-14-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 50 | `qft-mg02` | A | quantum-field-theory-mathematics | 539 | `orthonormal-bases-parseval-and-fourier-series`, `qft-mf01`, `unbounded-self-adjoint-operators-and-stones-theorem` |
| 50 | `qft-mg02-examples` | B | quantum-field-theory-mathematics | 540 | `qft-mg02` |
| 59 | `qft-ir01` | A | quantum-field-theory-mathematics | 557 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `density-separability-and-convolution-in-lp`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `qm-math-oscillator` |
| 59 | `qft-ir01-examples` | B | quantum-field-theory-mathematics | 558 | `qft-ir01` |
| 60 | `qft-ir02` | A | quantum-field-theory-mathematics | 559 | `qft-ir01`, `central-limit-theorems`, `the-total-derivative` |
| 60 | `qft-ir02-examples` | B | quantum-field-theory-mathematics | 560 | `qft-ir02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-mg02` — Exact compact U1 rotor plus finite CAR data (9 item(s))

- `lem-qft-finite-mode-occupation-basis` · lemma — Finite fermion-mode occupation basis
- `def-qft-compact-lattice-gauge-data` · definition — Exact compact U(1) rotor plus finite CAR data
- `lem-qft-lattice-gauss-projection` · lemma — Gauss operators, gauge group and nonempty physical projection
- `lem-qft-lattice-hamiltonian-selfadjoint` · lemma — Rotor interacting Hamiltonian with exact domain
- `lem-qft-lattice-physical-evolution` · lemma — Global unitary dynamics in the Gauss sector
- `lem-qft-lattice-local-gauss-flux` · lemma — Region charge equals boundary electric flux
- `lem-qft-lattice-ward-identities` · lemma — Exact regulated gauge and infinitesimal Ward identities
- `lem-qft-qed-gauss-localization` · lemma — Gauss law and charged localization obstruction
- `lem-qft-lattice-ward-contact` · lemma — Time-ordered Ward contact relation

### `qft-mg02-examples` — Exact compact U1 rotor plus finite CAR data — Examples (3 item(s))

- `ex-qft-qed-nonempty-gauss` · example — Explicit physical electric/occupation basis state
- `cex-qft-qed-compact-charge-sector` · counterexample — Compact gauge model fixes total matter charge
- `ex-qft-qed-ward-selection` · example — Charged expectation vanishes by gauge averaging

### `qft-ir01` — Finite-lattice polynomial Hamiltonian data (9 item(s))

- `def-qft-regulated-polynomial-hamiltonian` · definition — Finite-lattice polynomial Hamiltonian data
- `lem-qft-coercive-polynomial-form-domain` · lemma — Coercive polynomial form completion and injection
- `lem-qft-cube-poincare-compact-form-inclusion` · lemma — Cube mean estimate and compact form inclusion
- `lem-qft-hermite-oscillator-research-supplier` · lemma — Anisotropic Hermite oscillator and quadratic form basis
- `lem-qft-polynomial-positive-compact-resolvent` · lemma — Positive injective compact polynomial form resolvent
- `thm-qft-self-adjoint-regulated-interaction` · theorem — Self-adjoint unbounded polynomial interaction at fixed regulator
- `thm-qft-regulated-global-unitary-evolution` · theorem — Global unitary evolution at fixed finite regulator
- `thm-qft-regulated-gibbs-trace` · theorem — Finite-regulator Gibbs trace and bounded expectations
- `lem-qft-regulated-ground-variational-bound` · lemma — Ground eigenvalue as the form variational infimum

### `qft-ir01-examples` — Finite-lattice polynomial Hamiltonian data — Examples (2 item(s))

- `rem-qft-cutoff-vs-continuum-interaction` · remark — Fixed finite-mode results do not establish a continuum limit
- `ex-qft-quartic-ground-energy-bound` · example — One-mode quartic ground-energy increment bound

### `qft-ir02` — Finite Euclidean quartic interacting measure (5 item(s))

- `def-qft-finite-euclidean-interacting-measure` · definition — Finite Euclidean quartic interacting measure
- `lem-qft-finite-gaussian-wick-moments` · lemma — Finite Gaussian normalization and Wick moments
- `thm-qft-finite-euclidean-polynomial-measure` · theorem — Actual finite Euclidean polynomial measure and moments
- `def-qft-finite-wick-normal-powers` · definition — Finite covariance Wick normal powers
- `thm-qft-finite-asymptotic-wick-expansion` · theorem — Finite interacting asymptotic Wick expansion with remainder

### `qft-ir02-examples` — Finite Euclidean quartic interacting measure — Examples (3 item(s))

- `cex-qft-zero-dimensional-perturbation-radius-zero` · counterexample — An existing interacting measure has zero-radius perturbation series
- `ex-qft-wick-quartic-coercivity` · example — Explicit stability of a Wick-subtracted quartic
- `ex-qft-finite-wick-quadratic-pair` · example — Finite Wick quadratic pairing

## Your seams

Your pages depend on another group's:

- `qft-mg02` requires `qft-mf01` (group f, batch 37)

Another group's pages depend on yours:

- `qft-g02` (group c) requires your `qft-mg02`
- `qft-pir01` (group e) requires your `qft-ir01`

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
