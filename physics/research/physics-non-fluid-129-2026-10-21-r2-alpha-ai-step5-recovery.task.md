# Step 5 adjudication — group **ai**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 104, 105, 106: 3 A/B pair(s), 6 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **104**: `research/physics-non-fluid-129-2026-10-21-r2-batch-104-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **105**: `research/physics-non-fluid-129-2026-10-21-r2-batch-105-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **106**: `research/physics-non-fluid-129-2026-10-21-r2-batch-106-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 104 | `qsmx-topological-lattice` | A | quantum-statistical-mechanics | 905 | `qsm-quasilocal-states`, `qsmx-lieb-robinson-spectral-flow`, `orientations-poincare-lefschetz-and-alexander-duality`, `classification-of-compact-connected-surfaces` |
| 104 | `qsmx-topological-lattice-examples` | B | quantum-statistical-mechanics | 906 | `qsmx-topological-lattice` |
| 105 | `qsmx-quantum-double` | A | quantum-statistical-mechanics | 907 | `qsmx-topological-lattice`, `qsm-quasilocal-states`, `maschkes-theorem-and-complete-reducibility`, `bialgebras-convolution-and-antipode-identities`, `the-group-algebra-and-representations` |
| 105 | `qsmx-quantum-double-examples` | B | quantum-statistical-mechanics | 908 | `qsmx-quantum-double`, `qsmx-topological-lattice` |
| 106 | `qsmx-integrable-transfer` | A | quantum-statistical-mechanics | 909 | `qsm-local-ensemble-bridge`, `hopf-hecke-and-quantum-symmetry-interfaces` |
| 106 | `qsmx-integrable-transfer-examples` | B | quantum-statistical-mechanics | 910 | `qsmx-integrable-transfer` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qsmx-topological-lattice` — Toric-code Hamiltonians and local indistinguishability (4 item(s))

- `def-qsmx-toric-cellular-hamiltonian` · definition — Toric-code edge spins on closed-surface cellulations
- `thm-qsmx-toric-ground-space` · theorem — Commuting stabilizers and topological degeneracy
- `lem-qsmx-toric-local-pauli-centralizer` · lemma — Disk-supported Pauli centralizers are stabilizers
- `thm-qsmx-toric-strings-and-local-tests` · theorem — Crossing strings and local scalar compression

### `qsmx-topological-lattice-examples` — Toric-code Hamiltonians and local indistinguishability — Examples (1 item(s))

- `ex-qsmx-toric-defect-pair` · example — Open strings create endpoint defects

### `qsmx-quantum-double` — Finite-group Hopf algebra and lattice quantum-double sectors (6 item(s))

- `def-qsmx-finite-group-double` · definition — Explicit finite-group quantum-double data
- `thm-qsmx-double-hopf-structure` · theorem — Hopf-* structure of the finite-group double
- `def-qsmx-finite-group-lattice-operators` · definition — Oriented finite-group lattice gauge operators
- `thm-qsmx-double-lattice-projectors` · theorem — Gauge averaging and flatness commute
- `lem-qsmx-finite-group-irrep-dimension-square-sum` · lemma — Squared finite-group irreducible dimensions sum to the group order
- `thm-qsmx-double-sector-labels` · theorem — Irreducible sectors of the finite-group double

### `qsmx-quantum-double-examples` — Finite-group Hopf algebra and lattice quantum-double sectors — Examples (1 item(s))

- `ex-qsmx-double-z2` · example — The four electric and magnetic sectors of $D(\mathbb Z_2)$

### `qsmx-integrable-transfer` — Rational Yang–Baxter transfer matrices and Heisenberg charges (7 item(s))

- `def-qsmx-rational-monodromy` · definition — Ordered auxiliary-space monodromy
- `lem-qsmx-monodromy-rtt` · lemma — The rational Yang–Baxter equation lifts to RTT
- `lem-qsmx-transfer-regular-point` · lemma — Regular point and exchange logarithmic derivative
- `thm-qsmx-transfer-commutativity` · theorem — RTT gives commuting periodic transfer matrices
- `thm-qsmx-transfer-heisenberg-charge` · theorem — Logarithmic derivative is periodic exchange
- `def-qsmx-regular-bethe-data` · definition — Regular on-shell Bethe data without a completeness assumption
- `thm-qsmx-regular-bethe-eigenpair` · theorem — Regular Bethe data give transfer-family eigenpairs

### `qsmx-integrable-transfer-examples` — Rational Yang–Baxter transfer matrices and Heisenberg charges — Examples (1 item(s))

- `ex-qsmx-one-magnon` · example — One down-spin Fourier dispersion

## Your seams

Your pages depend on another group's:

- `qsmx-topological-lattice` requires `qsmx-lieb-robinson-spectral-flow` (group ah, batch 102)

Another group's pages depend on yours:

- `qsmx-hall-categorification-spin` (group aj) requires your `qsmx-integrable-transfer`
- `qsmx-transport-and-drude` (group ak) requires your `qsmx-integrable-transfer`

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
