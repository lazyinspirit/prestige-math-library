# Step 5 adjudication — group **e**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 34, 35, 64: 3 A/B pair(s), 6 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/physics-td-qft-rpm-62-2026-10-14-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/physics-td-qft-rpm-62-2026-10-14-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **64**: `research/physics-td-qft-rpm-62-2026-10-14-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 34 | `qft-mc01` | A | quantum-field-theory-mathematics | 507 | `hilbert-space-geometry-and-riesz-representation` |
| 34 | `qft-mc01-examples` | B | quantum-field-theory-mathematics | 508 | `qft-mc01` |
| 35 | `qft-mc02` | A | quantum-field-theory-mathematics | 509 | `qft-mc01`, `tempered-distributions-and-the-fourier-transform`, `schwartz-space-and-the-plancherel-theorem`, `density-separability-and-convolution-in-lp`, `countability-and-uncountability`, `poisson-summation-sampling-and-lattice-duality` |
| 35 | `qft-mc02-examples` | B | quantum-field-theory-mathematics | 510 | `qft-mc02` |
| 64 | `qft-pir01` | A | quantum-field-theory | 567 | `qft-c01`, `qft-ir01`, `qft-ir04` |
| 64 | `qft-pir01-examples` | B | quantum-field-theory | 568 | `qft-pir01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-mc01` — Unital star algebra and positive normalized state (4 item(s))

- `def-qft-involutive-algebra-state` · definition — Unital star algebra and positive normalized state
- `lem-qft-positive-state-cauchy-schwarz` · lemma — Positive-state Cauchy–Schwarz and left radical
- `thm-qft-algebraic-gns-domain` · theorem — GNS Hilbert reconstruction with invariant operator domain
- `lem-qft-state-symmetry-implementer` · lemma — State-preserving symmetries implemented unitarily

### `qft-mc01-examples` — Unital star algebra and positive normalized state — Examples (1 item(s))

- `cex-qft-nonregular-weyl-state` · counterexample — Positive Weyl state without a continuous field generator

### `qft-mc02` — Tensor test algebra and positive tempered moment data (6 item(s))

- `def-qft-positive-tempered-moments` · definition — Positive tempered moments on the tensor test algebra
- `def-qft-weak-operator-valued-tempered-distribution` · definition — Weak operator-valued tempered distribution on a common domain
- `def-qft-poincare-test-action` · definition — Proper-orthochronous Poincaré action and test pullback
- `def-qft-minkowski-fourier-transform` · definition — Minkowski Fourier transform and forward-cone support convention
- `lem-qft-poincare-pullback-continuity-on-schwartz` · lemma — Proper-orthochronous Poincaré pullbacks act continuously on Schwartz space
- `thm-qft-tempered-field-reconstruction` · theorem — Tested positive moments reconstruct closable smeared fields

### `qft-mc02-examples` — Tensor test algebra and positive tempered moment data — Examples (1 item(s))

- `cex-qft-yukawa-source-power` · counterexample — Radial Yukawa source power fails the homogeneous equation

### `qft-pir01` — Adopted finite-regulator bosonic polynomial model (6 item(s))

- `post-qft-regulated-polynomial-model` · postulate — Adopted finite-regulator polynomial model
- `def-qft-regulated-thermal-parameter` · definition — Finite-regulator temperature and inverse-energy parameter
- `pthm-qft-regulated-interacting-model-evolution` · physics-theorem — Constructed regulated polynomial-model evolution
- `post-qft-regulated-equilibrium-state` · postulate — Adopted finite-regulator equilibrium state
- `pthm-qft-regulated-equilibrium-predictions` · physics-theorem — Finite-regulator Gibbs predictions
- `pthm-qft-quartic-model-energy-bound` · physics-theorem — Controlled quartic-model ground-energy bound

### `qft-pir01-examples` — Adopted finite-regulator bosonic polynomial model — Examples (2 item(s))

- `ex-qft-one-mode-interacting-model` · example — Constructed one-coordinate positive-quartic example on full $L^2$
- `rem-qft-formal-renormalization-physical-status` · remark — Scope of the Euclidean distribution-extension identity

## Your seams

Your pages depend on another group's:

- `qft-pir01` requires `qft-c01` (group a, batch 40)
- `qft-pir01` requires `qft-ir01` (group j, batch 59)
- `qft-pir01` requires `qft-ir04` (group k, batch 62)

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
