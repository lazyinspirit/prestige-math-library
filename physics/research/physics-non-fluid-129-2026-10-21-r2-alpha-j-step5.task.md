# Step 5 adjudication — group **j**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 16, 28, 98: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/physics-non-fluid-129-2026-10-21-r2-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/physics-non-fluid-129-2026-10-21-r2-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **98**: `research/physics-non-fluid-129-2026-10-21-r2-batch-98-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `emg-fx01` | A | einstein-maxwell-models-mathematics | 729 | `emg-cp01`, `emg-c01`, `emg-ms01` |
| 16 | `emg-fx01-examples` | B | einstein-maxwell-models-mathematics | 730 | `emg-fx01` |
| 28 | `emg-fx13` | A | einstein-maxwell-models | 753 | `emg-g04`, `emg-pcp01`, `emg-fx07`, `emg-fx08`, `emg-fx11`, `emg-mp03`, `emg-c01` |
| 28 | `emg-fx13-examples` | B | einstein-maxwell-models | 754 | `emg-fx13`, `emg-c01` |
| 98 | `csm-frontier-rare-event-numerics` | A | classical-statistical-mechanics | 893 | `csm-frontier-sampling-certificates`, `csm-frontier-inverse-gibbs`, `importance-sampling-and-weight-diagnostics`, `interval-newton-krawczyk-and-polynomial-root-isolation`, `outward-rounded-interval-and-ball-arithmetic` |
| 98 | `csm-frontier-rare-event-numerics-examples` | B | classical-statistical-mechanics | 894 | `csm-frontier-rare-event-numerics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-fx01` — Conformal constraint weights and charged time-symmetric data (3 item(s))

- `def-emg-fx-conformal-seed` · definition — Conformal electrovacuum seed data
- `lem-emg-fx-conformal-constraints` · lemma — Exact conformal electrovacuum constraint transformation
- `prop-emg-fx-rn-isotropic-seed` · proposition — RN conformal data on a punctured exterior

### `emg-fx01-examples` — Conformal constraint weights and charged time-symmetric data — Examples (2 item(s))

- `ex-emg-fx-extremal-puncture-end` · example — Extremal cylindrical puncture end
- `cex-emg-fx-wrong-electric-weight` · counterexample — Unscaled electric vectors fail the transformed Gauss law

### `emg-fx13` — Adopted charged-background and effective-model regimes (5 item(s))

- `def-emg-fx-charged-scalar-stress-tensor` · definition — Complex scalar stress tensor with a supplied potential
- `post-emg-fx-classical-constitutive-adoption` · postulate — Selected effective classical constitutive regime
- `post-emg-fx-test-field-regime` · postulate — Fixed-background charged scalar regime
- `lem-emg-fx-asymptotic-scalar-energy-flux` · lemma — Asymptotic time-translation flux of a charged scalar mode
- `pthm-emg-fx-conditional-model-flux` · physics-theorem — Conditional charged-scalar flux amplification

### `emg-fx13-examples` — Adopted charged-background and effective-model regimes — Examples (1 item(s))

- `texp-emg-fx-test-to-coupled-error` · thought-experiment — A finite-time bound from a test-field residual

### `csm-frontier-rare-event-numerics` — Rare-event reweighting, overlap and certified partition ratios (5 item(s))

- `thm-csm-frontier-partition-ratio-overlap` · theorem — Finite partition-ratio estimator and overlap variance
- `alg-csm-frontier-independent-bridge-ratios` · algorithm — Independent finite bridge-ratio estimator
- `thm-csm-frontier-bridge-ratio-variance` · theorem — Mean and relative second moment of independent bridge ratios
- `alg-csm-frontier-interval-finite-partition` · algorithm — Certified finite partition and expectation enclosure
- `thm-csm-frontier-interval-partition-certificate` · theorem — Soundness and termination of finite partition enclosures

### `csm-frontier-rare-event-numerics-examples` — Rare-event reweighting, overlap and certified partition ratios — Examples (1 item(s))

- `ex-csm-frontier-product-overlap-explosion` · example — Product-law overlap explosion

## Your seams

Your pages depend on another group's:

- `emg-fx13` requires `emg-fx07` (group l, batch 22)
- `emg-fx13` requires `emg-fx08` (group m, batch 23)
- `emg-fx13` requires `emg-fx11` (group n, batch 26)
- `csm-frontier-rare-event-numerics` requires `csm-frontier-sampling-certificates` (group i, batch 95)
- `csm-frontier-rare-event-numerics` requires `csm-frontier-inverse-gibbs` (group i, batch 96)

Another group's pages depend on yours:

- `emg-fx02` (group k) requires your `emg-fx01`

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
