# Step 5 adjudication — group **j**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 8, 11, 15: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **8**: `research/physics-remaining-80-2026-10-17-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/physics-remaining-80-2026-10-17-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/physics-remaining-80-2026-10-17-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 8 | `emg-cp03` | A | einstein-maxwell-models-mathematics | 451 | `emg-cp02` |
| 8 | `emg-cp03-examples` | B | einstein-maxwell-models-mathematics | 452 | `emg-cp03` |
| 11 | `emg-cp04` | A | einstein-maxwell-models-mathematics | 457 | `emg-cp02`, `emg-mg04` |
| 11 | `emg-cp04-examples` | B | einstein-maxwell-models-mathematics | 458 | `emg-cp04` |
| 15 | `emg-mm01` | A | einstein-maxwell-models-mathematics | 465 | `countability-and-uncountability`, `emg-mg04` |
| 15 | `emg-mm01-examples` | B | einstein-maxwell-models-mathematics | 466 | `emg-mm01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-cp03` — Strict charged barotropic tensor system (5 item(s))

- `def-emg-strict-charged-barotropic-system` · definition — Strict charged barotropic tensor system
- `lem-emg-charged-fluid-current-conservation` · lemma — Charged-fluid current and total stress conservation
- `lem-emg-charged-fluid-positive-symmetric-reduction` · lemma — Strict charged-fluid symmetric reduction
- `thm-emg-local-charged-barotropic-development` · theorem — Local charged Einstein–Maxwell–barotropic development
- `prop-emg-compact-charge-compatibility` · proposition — Compact no-boundary normal charge compatibility

### `emg-cp03-examples` — Strict charged barotropic tensor system — Examples (2 item(s))

- `ex-emg-linear-eos-variables` · example — Linear barotropic equation of state and its enthalpy coordinates
- `cex-emg-uniform-one-sign-torus-charge` · counterexample — A uniform one-sign charged fluid cannot satisfy Gauss on a compact torus

### `emg-cp04` — Trivial-potential classical charged scalar system (6 item(s))

- `def-emg-trivial-potential-charged-scalar-system` · definition — Trivial-potential classical charged-scalar Einstein–Maxwell system
- `def-emg-classical-charged-scalar-finite-regularity-system` · definition — Classical finite-regularity charged-scalar system and relative action
- `lem-emg-classical-charged-scalar-compact-variation` · lemma — Compact charged-scalar action variations at classical finite regularity
- `lem-emg-temporal-scalar-positive-symmetric-reduction` · lemma — Temporal-gauge first-order reduction of the charged scalar equation
- `lem-emg-charged-scalar-subsidiary-chain` · lemma — Charged-scalar compatibility, Maxwell constraints and Einstein gauge propagation
- `thm-emg-local-classical-charged-scalar-development` · theorem — Local classical Einstein–Maxwell–charged-scalar development

### `emg-cp04-examples` — Trivial-potential classical charged scalar system — Examples (2 item(s))

- `ex-emg-zero-scalar-controlled-reduction` · example — Zero scalar with V(0)=0 reduces to electrovacuum
- `rem-emg-classical-scalar-bundle-limit` · remark — Classical scalar sector and bundle limitation

### `emg-mm01` — Smooth formal matter, EM tensors and observer quantities (8 item(s))

- `def-emg-matter-formal-systems` · definition — Smooth formal matter, EM tensors and observer quantities
- `thm-emg-charged-dust-projection` · theorem — Charged dust balance equivalence and advected charge ratio
- `thm-emg-charged-fluid-projections` · theorem — Perfect-fluid exchange projections and conduction heating
- `def-emg-pointwise-energy-conditions` · definition — Pointwise Maxwell and matter energy-condition vocabulary
- `thm-emg-selected-matter-energy-conditions` · theorem — EM, dust and perfect-fluid energy inequalities
- `def-emg-c2-curve-covariant-acceleration` · definition — Covariant acceleration along a $C^2$ curve
- `lem-emg-c2-curve-covariant-acceleration-well-defined` · lemma — The covariant acceleration formula is well-defined along a $C^2$ curve
- `thm-emg-charged-symmetry-current` · theorem — Killing exchange current and gauge-compensated charged first integral

### `emg-mm01-examples` — Smooth formal matter, EM tensors and observer quantities — Examples (4 item(s))

- `ex-emgmath-ml-b01` · example — Advected nonconstant charge ratio without Maxwell closure
- `ex-emgmath-ml-b02` · example — Explicit local conduction-energy calculation
- `ex-emgmath-ml-b03` · example — Anisotropic magnetic stress and null energy-current vector
- `ex-emgmath-ml-b04` · example — Static electrostatic test-energy first integral

## Your seams

Your pages depend on another group's:

- `emg-cp03` requires `emg-cp02` (group i, batch 7)
- `emg-cp04` requires `emg-cp02` (group i, batch 7)
- `emg-cp04` requires `emg-mg04` (group i, batch 4)
- `emg-mm01` requires `emg-mg04` (group i, batch 4)

Another group's pages depend on yours:

- `emg-pcp02` (group e) requires your `emg-cp03`
- `emg-pcp03` (group e) requires your `emg-cp04`
- `emg-mp01` (group f) requires your `emg-mm01`
- `emg-mm03` (group k) requires your `emg-mm01`
- `emg-mm02` (group k) requires your `emg-mm01`

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
