# Step 5 adjudication — group **g**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 89, 90, 91: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **89**: `research/physics-non-fluid-129-2026-10-21-r2-batch-89-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **90**: `research/physics-non-fluid-129-2026-10-21-r2-batch-90-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **91**: `research/physics-non-fluid-129-2026-10-21-r2-batch-91-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 89 | `csm-frontier-critical-gaussian-rg` | A | classical-statistical-mechanics | 875 | `csm-frontier-large-deviation-ensembles`, `csm-frontier-quantitative-dlr`, `csm-exact-models`, `congruences-and-the-chinese-remainder-theorem`, `finite-fourier-analysis-and-the-fast-fourier-transform`, `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 89 | `csm-frontier-critical-gaussian-rg-examples` | B | classical-statistical-mechanics | 876 | `csm-frontier-critical-gaussian-rg` |
| 90 | `csm-frontier-fk-loop-algebra` | A | classical-statistical-mechanics | 877 | `csm-frontier-large-deviation-ensembles`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `graphs-walks-and-connectivity`, `plane-graphs-euler-and-the-five-colour-theorem` |
| 90 | `csm-frontier-fk-loop-algebra-examples` | B | classical-statistical-mechanics | 878 | `csm-frontier-fk-loop-algebra` |
| 91 | `csm-frontier-hydrodynamic-ssep` | A | classical-statistical-mechanics | 879 | `csm-stochastic-response`, `csm-frontier-probability-interfaces` |
| 91 | `csm-frontier-hydrodynamic-ssep-examples` | B | classical-statistical-mechanics | 880 | `csm-frontier-hydrodynamic-ssep` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `csm-frontier-critical-gaussian-rg` — Criticality, Gaussian fields and exact block renormalization (11 item(s))

- `def-csm-frontier-infinite-volume-criticality` · definition — Infinite-volume nonanalytic-pressure criticality
- `def-csm-frontier-finite-gaussian-precision` · definition — Finite Gaussian probability with a positive precision matrix
- `lem-csm-frontier-periodic-laplacian-spectrum` · lemma — Fourier spectrum and positivity of the periodic lattice Laplacian
- `lem-csm-frontier-sine-comparison` · lemma — Chord and Lipschitz bounds for sine
- `lem-csm-frontier-schur-complement-positive` · lemma — Positive Schur complements for finite Gaussian precisions
- `lem-csm-frontier-massless-torus-normalization-diverges` · lemma — Unconstrained massless periodic Gaussian has infinite normalizer
- `def-csm-frontier-gaussian-lattice` · definition — Finite periodic Gaussian lattice field with positive mass
- `thm-csm-frontier-gaussian-massless-dimension` · theorem — Dimension threshold for the infinite-lattice massless Gaussian Green integral
- `alg-csm-frontier-gaussian-block-rg` · algorithm — Exact finite Gaussian block elimination
- `thm-csm-frontier-gaussian-block-rg-correct` · theorem — Correctness of finite Gaussian block elimination
- `lem-csm-frontier-quartic-engineering-scaling` · lemma — Engineering scaling of the Gaussian gradient and quartic actions

### `csm-frontier-critical-gaussian-rg-examples` — Criticality, Gaussian fields and exact block renormalization — Examples (1 item(s))

- `ex-csm-frontier-rg-generates-couplings` · example — Exact elimination of a Gaussian star generates pair couplings

### `csm-frontier-fk-loop-algebra` — Classical Potts random clusters and planar loop transfer (6 item(s))

- `def-csm-frontier-finite-potts-fk` · definition — Finite Potts and Fortuin–Kasteleyn weights
- `def-csm-frontier-fk-boundary-wiring` · definition — Finite FK boundary wiring
- `thm-csm-frontier-edwards-sokal` · theorem — Finite Edwards–Sokal coupling and correlation identity
- `alg-csm-frontier-fk-connectivity-transfer` · algorithm — Finite FK connectivity-state transfer
- `thm-csm-frontier-fk-transfer-correct` · theorem — Correctness of the finite FK connectivity transfer
- `lem-csm-frontier-medial-loop-normalization` · lemma — Classical FK medial-loop normalization

### `csm-frontier-fk-loop-algebra-examples` — Classical Potts random clusters and planar loop transfer — Examples (1 item(s))

- `ex-csm-frontier-potts-two-vertices` · example — Two-vertex Potts and FK weights

### `csm-frontier-hydrodynamic-ssep` — Diffusive hydrodynamics from the symmetric exclusion process (7 item(s))

- `def-csm-frontier-ssep-weak-heat-solution` · definition — Weak heat solutions on the continuum torus
- `lem-csm-frontier-ssep-sector-connectivity` · lemma — Connectedness of fixed-occupancy exclusion sectors
- `lem-csm-frontier-ssep-heat-flow` · lemma — Fourier heat flow on the continuum torus
- `def-csm-frontier-ssep-diffusive-model` · definition — Symmetric exclusion process under diffusive scaling
- `lem-csm-frontier-ssep-bracket` · lemma — SSEP empirical-field martingale and bracket
- `lem-csm-frontier-ssep-time-dependent-martingale` · lemma — SSEP martingale for time-dependent test functions
- `thm-csm-frontier-ssep-heat-limit` · theorem — Diffusive heat limit for symmetric exclusion

### `csm-frontier-hydrodynamic-ssep-examples` — Diffusive hydrodynamics from the symmetric exclusion process — Examples (1 item(s))

- `ex-csm-frontier-ssep-density-mode` · example — A single Fourier density mode under SSEP hydrodynamics

## Your seams

Your pages depend on another group's:

- `csm-frontier-critical-gaussian-rg` requires `csm-frontier-large-deviation-ensembles` (group f, batch 88)
- `csm-frontier-critical-gaussian-rg` requires `csm-frontier-quantitative-dlr` (group f, batch 86)
- `csm-frontier-fk-loop-algebra` requires `csm-frontier-large-deviation-ensembles` (group f, batch 88)
- `csm-frontier-hydrodynamic-ssep` requires `csm-frontier-probability-interfaces` (group e, batch 85)

Another group's pages depend on yours:

- `csm-frontier-macroscopic-fluctuations` (group h) requires your `csm-frontier-hydrodynamic-ssep`
- `csm-frontier-sampling-certificates` (group i) requires your `csm-frontier-fk-loop-algebra`
- `csm-frontier-planar-critical-point` (group i) requires your `csm-frontier-fk-loop-algebra`

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
