# Step 5 adjudication — group **ad**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 75, 76, 77: 3 A/B pair(s), 6 page(s), 13 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **75**: `research/physics-non-fluid-129-2026-10-21-r2-batch-75-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/physics-non-fluid-129-2026-10-21-r2-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **77**: `research/physics-non-fluid-129-2026-10-21-r2-batch-77-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 75 | `qftx-ribbon-braid-representations` | A | quantum-field-theory-mathematics | 847 | `qftx-renormalization-hopf`, `drinfeld-doubles-and-yetter-drinfeld-module-constructions`, `coxeter-artin-and-hecke-interfaces`, `noninvertible-symmetries-and-anyonic-chains`, `hecke-markov-traces-and-polynomial-link-invariants`, `tensor-and-fusion-categories`, `braided-and-symmetric-monoidal-categories`, `free-groups-and-presentations`, `principal-series-representations-of-gl-n-over-a-finite-field`, `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` |
| 75 | `qftx-ribbon-braid-representations-examples` | B | quantum-field-theory-mathematics | 848 | `qftx-ribbon-braid-representations` |
| 76 | `qftx-two-dimensional-sewing` | A | quantum-field-theory-mathematics | 849 | `frobenius-algebras-and-two-dimensional-sewing` |
| 76 | `qftx-two-dimensional-sewing-examples` | B | quantum-field-theory-mathematics | 850 | `qftx-two-dimensional-sewing`, `frobenius-algebras-and-two-dimensional-sewing` |
| 77 | `qftx-modular-tqft-sewing` | A | quantum-field-theory-mathematics | 851 | `modular-categories-verlinde-and-tqft`, `qftx-ribbon-braid-representations` |
| 77 | `qftx-modular-tqft-sewing-examples` | B | quantum-field-theory-mathematics | 852 | `qftx-modular-tqft-sewing`, `modular-categories-verlinde-and-tqft` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-ribbon-braid-representations` — Quantum doubles, Hecke quotients and physical braid operators (4 item(s))

- `def-qftx-braided-line-model` · definition — Braided line representation data
- `lem-qftx-anyonic-vacuum-reverse-adjacent-relation` · lemma — Vacuum projectors obey the reverse adjacent Temperley–Lieb relation
- `thm-qftx-tl-hecke-braid` · theorem — Temperley–Lieb projectors give a Hecke braid representation
- `prop-qftx-coxeter-specialization` · proposition — Coxeter statistics is a specialization of the Hecke model

### `qftx-ribbon-braid-representations-examples` — Quantum doubles, Hecke quotients and physical braid operators — Examples (1 item(s))

- `ex-qftx-vacuum-channel-exchange` · example — Vacuum-channel exchange operator on its invariant subspaces

### `qftx-two-dimensional-sewing` — Frobenius sewing and exact two-dimensional topological amplitudes (3 item(s))

- `def-qftx-frobenius-semisimple-model` · definition — Semisimple closed two-dimensional TQFT data
- `prop-qftx-frobenius-genus-amplitude` · proposition — Handle operators give explicit genus amplitudes
- `prop-qftx-frobenius-positive-reflection` · proposition — Positive weights characterize the specified Hermitian form

### `qftx-two-dimensional-sewing-examples` — Frobenius sewing and exact two-dimensional topological amplitudes — Examples (1 item(s))

- `ex-qftx-dual-number-topological-model` · example — Nonsemisimple Frobenius sewing is also possible

### `qftx-modular-tqft-sewing` — Weighted Reshetikhin–Turaev sewing, framing anomaly and state dimensions (3 item(s))

- `def-qftx-weighted-topological-model` · definition — Weighted modular TQFT model and physical interpretation boundary
- `prop-qftx-modular-dimension-sewing` · proposition — Modular dimensions follow from exact sewing
- `prop-qftx-weight-anomaly-obstruction` · proposition — A nontrivial weight anomaly obstructs forgetting the weights

### `qftx-modular-tqft-sewing-examples` — Weighted Reshetikhin–Turaev sewing, framing anomaly and state dimensions — Examples (1 item(s))

- `ex-qftx-su2-level-dimensions` · example — $SU(2)$ level $k$ has $k+1$ torus states

## Your seams

Your pages depend on another group's:

- `qftx-ribbon-braid-representations` requires `qftx-renormalization-hopf` (group y, batch 61)

Another group's pages depend on yours:

- `qftx-finite-group-bf` (group ae) requires your `qftx-two-dimensional-sewing`
- `qftx-kz-chiral-interface` (group ae) requires your `qftx-ribbon-braid-representations`
- `qftx-hall-bps-wall-crossing` (group af) requires your `qftx-ribbon-braid-representations`
- `qftx-categorified-line-operators` (group af) requires your `qftx-ribbon-braid-representations`

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

# Step 5 batch adjudication, `physics-non-fluid-129-2026-10-21-r2`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
