# Step 5 adjudication — group **ab**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 68, 69, 70: 3 A/B pair(s), 6 page(s), 23 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **68**: `research/physics-non-fluid-129-2026-10-21-r2-batch-68-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/physics-non-fluid-129-2026-10-21-r2-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **70**: `research/physics-non-fluid-129-2026-10-21-r2-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 68 | `qftx-local-algebras` | A | quantum-field-theory-mathematics | 833 | `qft-mf02`, `qftx-microlocal-products`, `qft-mc03`, `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` |
| 68 | `qftx-local-algebras-examples` | B | quantum-field-theory-mathematics | 834 | `qftx-local-algebras` |
| 69 | `qftx-reflection-positive-limits` | A | quantum-field-theory-mathematics | 835 | `qft-ir02`, `qft-mc02` |
| 69 | `qftx-reflection-positive-limits-examples` | B | quantum-field-theory-mathematics | 836 | `qftx-reflection-positive-limits` |
| 70 | `qftx-constructive-wick-two-dimensions` | A | quantum-field-theory-mathematics | 837 | `qftx-reflection-positive-limits`, `qft-ir02`, `qftx-analytic-prerequisites`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral-in-rn-and-jordan-content` |
| 70 | `qftx-constructive-wick-two-dimensions-examples` | B | quantum-field-theory-mathematics | 838 | `qftx-constructive-wick-two-dimensions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-local-algebras` — Causal propagators, time slice and algebraic locality (11 item(s))

- `def-qftx-green-hyperbolic-interface` · definition — Green-hyperbolic free scalar interface
- `lem-qftx-compact-green-support-overlap` · lemma — Compactness of closed advanced-retarded support overlaps under Countable Choice
- `lem-qftx-smooth-scalar-cauchy-evolution` · lemma — Smooth scalar Cauchy evolution, metric causal support and finite-slab estimates
- `thm-qftx-green-hyperbolic-existence` · theorem — Existence and uniqueness of continuous scalar Green maps on smooth globally hyperbolic spacetimes
- `lem-qftx-green-propagator-symplectic-quotient` · lemma — Causal propagator induces the free scalar symplectic quotient
- `def-qftx-free-weyl-net` · definition — Algebraic free Weyl net on Green backgrounds
- `lem-qftx-free-weyl-functoriality` · lemma — Green morphisms induce algebraic Weyl maps
- `lem-qftx-causal-time-slice-test-localization` · lemma — Compact test classes localize to a Cauchy neighborhood
- `lem-qftx-free-locality` · lemma — Causally disjoint free Weyl local algebras commute
- `thm-qftx-free-time-slice` · theorem — The free Weyl algebra obeys time slice
- `prop-qftx-local-projection-no-signal` · proposition — Local trace-preserving operations preserve commuting expectations

### `qftx-local-algebras-examples` — Causal propagators, time slice and algebraic locality — Examples (1 item(s))

- `ex-qftx-postselection-conditioning` · example — Bell-pair postselection changes a conditional remote expectation

### `qftx-reflection-positive-limits` — Euclidean positivity, controlled limits and reconstruction boundaries (4 item(s))

- `lem-qftx-tempered-tensor-products` · lemma — Tensor products of tempered distributions
- `def-qftx-euclidean-limit-data` · definition — Euclidean Schwinger hierarchies and controlled limit data
- `prop-qftx-reflection-positivity-limit` · proposition — Reflection positivity passes to a distributional limit
- `prop-qftx-free-euclidean-reflection-positive` · proposition — Massive free Euclidean covariance is reflection positive

### `qftx-reflection-positive-limits-examples` — Euclidean positivity, controlled limits and reconstruction boundaries — Examples (1 item(s))

- `cex-qftx-positive-not-reflection-positive` · counterexample — Ordinary positive measure need not be reflection positive

### `qftx-constructive-wick-two-dimensions` — Two-dimensional Wick limits and a constructive interaction interface (5 item(s))

- `lem-qftx-finite-cross-wick-covariance` · lemma — Cross-covariance of finite Gaussian Wick powers
- `def-qftx-two-dimensional-wick-cutoff` · definition — Mollified massive two-dimensional Gaussian Wick powers
- `lem-qftx-two-dimensional-covariance-log-integrability` · lemma — Logarithmic singularity and decay of the massive two-dimensional covariance
- `thm-qftx-two-dimensional-wick-l2` · theorem — Smeared Wick powers have a two-dimensional L² limit
- `def-qftx-p-phi-two-construction-contract` · definition — Stable $P(φ)_2$ construction contract

### `qftx-constructive-wick-two-dimensions-examples` — Two-dimensional Wick limits and a constructive interaction interface — Examples (1 item(s))

- `cex-qftx-l2-not-exponential-control` · counterexample — L² convergence alone does not control exponential tilts

## Your seams

Your pages depend on another group's:

- `qftx-local-algebras` requires `qftx-microlocal-products` (group x, batch 58)
- `qftx-constructive-wick-two-dimensions` requires `qftx-analytic-prerequisites` (group y, batch 59)

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
