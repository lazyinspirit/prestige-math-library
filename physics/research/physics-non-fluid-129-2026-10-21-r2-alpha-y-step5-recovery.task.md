# Step 5 adjudication — group **y**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 59, 60, 61: 3 A/B pair(s), 6 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **59**: `research/physics-non-fluid-129-2026-10-21-r2-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/physics-non-fluid-129-2026-10-21-r2-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **61**: `research/physics-non-fluid-129-2026-10-21-r2-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 59 | `qftx-analytic-prerequisites` | A | quantum-field-theory-mathematics | 815 | `spectral-measures-and-borel-functional-calculus`, `infinite-product-measures-and-kolmogorov-extension`, `qft-ir01`, `riemannian-metrics-length-distance-and-volume`, `fubini-and-change-of-variables`, `the-riemann-integral-in-rn-and-jordan-content`, `schwartz-space-and-the-plancherel-theorem`, `characteristic-functions-inversion-and-continuity` |
| 59 | `qftx-analytic-prerequisites-examples` | B | quantum-field-theory-mathematics | 816 | `qftx-analytic-prerequisites` |
| 60 | `qftx-causal-renormalization` | A | quantum-field-theory-mathematics | 817 | `qftx-microlocal-products`, `qft-ir04`, `qft-ir05`, `qftx-analytic-prerequisites` |
| 60 | `qftx-causal-renormalization-examples` | B | quantum-field-theory-mathematics | 818 | `qftx-causal-renormalization`, `qft-ir04` |
| 61 | `qftx-renormalization-hopf` | A | quantum-field-theory-mathematics | 819 | `qftx-causal-renormalization` |
| 61 | `qftx-renormalization-hopf-examples` | B | quantum-field-theory-mathematics | 820 | `qftx-renormalization-hopf` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-analytic-prerequisites` — Spectral calculus, Gaussian fields and covariance normalization prerequisites (4 item(s))

- `thm-qftx-positive-unbounded-spectral-calculus` · theorem — Positive unbounded spectral calculus from a bounded resolvent
- `lem-qftx-hermite-coefficient-decay` · lemma — Rapid Hermite coefficient decay for Schwartz functions
- `thm-qftx-tempered-massive-gaussian-field` · theorem — A massive Euclidean Gaussian generalized field exists
- `lem-qftx-finite-lorentz-cocycle-splitting` · lemma — Finite-dimensional Lorentz normalization cocycles split

### `qftx-analytic-prerequisites-examples` — Spectral calculus, Gaussian fields and covariance normalization prerequisites — Examples (1 item(s))

- `cex-qftx-resolvent-zero-continuous-spectrum` · counterexample — Injective resolvents need not be bounded below

### `qftx-causal-renormalization` — All-order scalar causal extension and finite renormalization (8 item(s))

- `def-qftx-off-shell-local-polynomial-functionals` · definition — Off-shell local polynomial scalar functionals
- `lem-qftx-local-polynomial-functionals-are-microcausal` · lemma — Local polynomial functionals are microcausal
- `lem-qftx-balanced-local-functional-representatives` · lemma — Balanced jets give unique local functional representatives
- `lem-qftx-transverse-center-scaling-bound` · lemma — Positive scaling bounds for products transverse at the scaling center
- `def-qftx-local-time-ordered-system` · definition — Local scalar time-ordered product contract
- `lem-qftx-finite-graph-scaling-degree` · lemma — Finite scalar graphs have finite scaling degree
- `thm-qftx-scalar-eg-induction` · theorem — Scalar Epstein–Glaser induction at finite perturbative order
- `prop-qftx-finite-renormalization-composition` · proposition — Renormalization maps form a formal composition group

### `qftx-causal-renormalization-examples` — All-order scalar causal extension and finite renormalization — Examples (2 item(s))

- `cex-qftx-exact-differentiated-scaling-degree` · counterexample — Differentiation can force a contact term from a zero punctured coefficient
- `ex-qftx-two-vertex-log` · example — Two-vertex scalar logarithm and its local ambiguity

### `qftx-renormalization-hopf` — Rooted forests, Hopf antipodes and subtraction recursion (5 item(s))

- `def-qftx-rooted-forest-hopf` · definition — Admissible-cut Hopf algebra for subdivergence forests
- `def-qftx-laurent-subtraction-target` · definition — Laurent-series target and pole projection for subtraction
- `lem-qftx-laurent-negative-projection-rota-baxter` · lemma — Laurent pole projection satisfies the weight-minus-one identity
- `thm-qftx-cut-hopf-antipode` · theorem — Admissible cuts give a connected graded Hopf algebra and recursive antipode
- `thm-qftx-subtraction-character-factorization` · theorem — Laurent subtraction factors a character into counterterm and finite characters

### `qftx-renormalization-hopf-examples` — Rooted forests, Hopf antipodes and subtraction recursion — Examples (1 item(s))

- `ex-qftx-nested-two-loop-subtraction` · example — Nested subdivergence has a nontrivial convolution counterterm

## Your seams

Your pages depend on another group's:

- `qftx-causal-renormalization` requires `qftx-microlocal-products` (group x, batch 58)

Another group's pages depend on yours:

- `qftx-bv-brst` (group z) requires your `qftx-causal-renormalization`
- `qftx-heavy-field-eft` (group z) requires your `qftx-analytic-prerequisites`
- `qftx-scale-cocycles` (group aa) requires your `qftx-causal-renormalization`
- `qftx-constructive-wick-two-dimensions` (group ab) requires your `qftx-analytic-prerequisites`
- `qftx-ribbon-braid-representations` (group ad) requires your `qftx-renormalization-hopf`

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
