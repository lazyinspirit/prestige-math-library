# Step 5 adjudication — group **c**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 53, 54, 55: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **53**: `research/physics-td-qft-rpm-62-2026-10-14-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/physics-td-qft-rpm-62-2026-10-14-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/physics-td-qft-rpm-62-2026-10-14-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 53 | `qft-g02` | A | quantum-field-theory | 545 | `qft-g01`, `qft-mg02`, `qft-mg03` |
| 53 | `qft-g02-examples` | B | quantum-field-theory | 546 | `qft-g02` |
| 54 | `qft-x02` | A | quantum-field-theory | 547 | `qft-g02`, `qft-mx02`, `qft-x01` |
| 54 | `qft-x02-examples` | B | quantum-field-theory | 548 | `qft-x02` |
| 55 | `qft-x03` | A | quantum-field-theory | 549 | `qft-g01`, `qft-mx03`, `qft-mx04`, `qft-x01`, `em-primitives-and-postulates` |
| 55 | `qft-x03-examples` | B | quantum-field-theory | 550 | `qft-x03` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-g02` — Explicit formal QED vertex/free-line convention (5 item(s))

- `post-qft-formal-qed-coefficients` · postulate — Explicit formal QED vertex/free-line convention
- `post-qft-compact-lattice-gauge-model` · postulate — Specified finite spatial compact U(1) gauge regulator
- `pthm-qft-lattice-gauge-existence` · physics-theorem — Finite-regulator physical Gauss-sector existence and dynamics
- `pthm-qft-lattice-gauge-ward` · physics-theorem — Exact Ward/Gauss predictions in adopted regulator
- `pthm-qft-qed-formal-ward` · physics-theorem — Qualified formal/tree gauge-current identities

### `qft-g02-examples` — Explicit formal QED vertex/free-line convention — Examples (2 item(s))

- `texp-qft-qed-infrared-sequence` · thought-experiment — Explicit soft-profile family has no strong Fock state limit
- `texp-qft-lattice-charged-operator` · thought-experiment — Boundary-flux commutation obstructs charged regulator insertions

### `qft-x02` — Formal diagram coefficient-to-observable adoption (3 item(s))

- `post-qft-example-formal-observable-map` · postulate — Formal diagram coefficient-to-observable adoption
- `pthm-qft-example-formal-scattering-decay` · physics-theorem — Formal tree scattering and scalar-decay coefficients
- `pthm-qft-example-dirac-magnetic-benchmark` · physics-theorem — Minimal Dirac magnetic benchmark from the adopted action

### `qft-x02-examples` — Formal diagram coefficient-to-observable adoption — Examples (3 item(s))

- `ex-qft-x04` · example — Massless formal annihilation angular contrast
- `ex-qft-x05` · example — Scalar symmetry factor and conditional lifetime model
- `ex-qft-x09` · example — Minimal Dirac spin and orbital coefficient comparison

### `qft-x03` — Regulated soft coherent photon-count prediction (3 item(s))

- `def-qft-x03-photon-count-pvm` · definition — Bosonic Fock number operator and counting PVM
- `thm-qft-x03-photon-count-pvm` · theorem — The Fock number operator has its sector counting PVM
- `pthm-qft-example-soft-coherent-counts` · physics-theorem — Regulated soft coherent photon-count prediction

### `qft-x03-examples` — Regulated soft coherent photon-count prediction — Examples (3 item(s))

- `ex-qft-x06` · example — One-charge soft photon count example
- `exp-qft-fan-electron-moment-2022` · experiment — Fan2022 reported electron magnetic-moment determination
- `pthm-qft-reported-electron-anomaly-shift` · physics-theorem — Qualified reported anomaly by exact affine subtraction

## Your seams

Your pages depend on another group's:

- `qft-g02` requires `qft-g01` (group b, batch 52)
- `qft-g02` requires `qft-mg02` (group j, batch 50)
- `qft-g02` requires `qft-mg03` (group h, batch 45)
- `qft-x02` requires `qft-mx02` (group i, batch 46)
- `qft-x02` requires `qft-x01` (group b, batch 49)
- `qft-x03` requires `qft-g01` (group b, batch 52)
- `qft-x03` requires `qft-mx03` (group i, batch 47)
- `qft-x03` requires `qft-mx04` (group i, batch 48)
- `qft-x03` requires `qft-x01` (group b, batch 49)

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

# Step 5 batch adjudication, `physics-td-qft-rpm-62-2026-10-14`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
