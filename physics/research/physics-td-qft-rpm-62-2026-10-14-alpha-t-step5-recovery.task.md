# Step 5 adjudication — group **t**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 5, 6, 11: 3 A/B pair(s), 6 page(s), 64 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **5**: `research/physics-td-qft-rpm-62-2026-10-14-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/physics-td-qft-rpm-62-2026-10-14-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/physics-td-qft-rpm-62-2026-10-14-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 5 | `td-math-local-pfaff-geometry` | A | thermodynamics-mathematics | 269 | `line-integrals-and-the-gradient-theorem`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral`, `td-math-nonsmooth-equilibrium`, `topology-of-r` |
| 5 | `td-math-local-pfaff-geometry-examples` | B | thermodynamics-mathematics | 291 | `td-math-local-pfaff-geometry` |
| 6 | `td-math-convex-contact-and-mixing` | A | thermodynamics-mathematics | 270 | `td-math-local-pfaff-geometry`, `the-exponential-function`, `jacobi-fields-conjugate-points-and-the-cut-locus` |
| 6 | `td-math-convex-contact-and-mixing-examples` | B | thermodynamics-mathematics | 292 | `td-math-convex-contact-and-mixing`, `the-logarithm-and-general-powers` |
| 11 | `td-math-ensembles-and-limits` | A | thermodynamics-mathematics | 279 | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `spectral-measures-and-borel-functional-calculus`, `unbounded-self-adjoint-operators-and-stones-theorem`, `roots-and-rational-powers`, `the-exponential-function`, `the-logarithm-and-general-powers`, `finite-probability-spaces-and-random-variables`, `td-math-nonsmooth-equilibrium`, `darboux-lhopital-and-taylor`, `series-and-nonnegative-tests`, `monoids-groups-and-subgroups`, `the-lebesgue-integral-and-the-convergence-theorems`, `orthonormal-bases-parseval-and-fourier-series`, `hilbert-space-geometry-and-riesz-representation`, `compact-operators-and-riesz-schauder-theory`, `the-complex-exponential-and-eulers-formula`, `measurable-functions-and-simple-approximation` |
| 11 | `td-math-ensembles-and-limits-examples` | B | thermodynamics-mathematics | 290 | `td-math-ensembles-and-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-math-local-pfaff-geometry` — Local Pfaff Geometry (7 item(s))

- `def-tdmath-one-form-and-horizontal-path` · definition — A nonsingular Pfaff one-form and its horizontal paths
- `lem-tdmath-local-contraction-flow` · lemma — Local flows by a contraction argument
- `lem-tdmath-variational-flow-and-commutation` · lemma — Variational equations and commuting local flows
- `lem-tdmath-exact-multiple-implies-pfaff-integrability` · lemma — An exact nonzero multiple satisfies the Pfaff condition
- `thm-tdmath-codimension-one-frobenius` · theorem — The local nonsingular codimension-one Pfaff–Frobenius theorem
- `lem-tdmath-integrable-horizontal-orbits-have-empty-interior` · lemma — Horizontal orbits under local first integrals have empty interior
- `thm-tdmath-local-caratheodory-inaccessibility` · theorem — Local horizontal inaccessibility and Pfaff integrability

### `td-math-local-pfaff-geometry-examples` — Local Pfaff Geometry — Examples (3 item(s))

- `ex-tdmath-two-dimensional-pfaff-factor` · example — A two-dimensional Pfaff form with a global integrating factor
- `cex-tdmath-contact-form-is-not-locally-integrable` · counterexample — A one-form with $\omega\wedge d\omega\ne0$ has no local exact multiple
- `cex-tdmath-closed-punctured-plane-form-is-not-exact` · counterexample — A closed one-form on the punctured plane with nonzero period

### `td-math-convex-contact-and-mixing` — Convex Contact And Mixing (26 item(s))

- `def-tdmath-forward-sector-hypotheses` · definition — Forward-sector hypotheses for a simple state domain
- `def-tdmath-thermal-contact-hypotheses` · definition — Thermal joins and conditional contact hypotheses
- `lem-tdmath-relative-interior-segment` · lemma — Relative interiors of finite-dimensional convex sets
- `lem-tdmath-relative-boundary-support` · lemma — Supporting hyperplanes at relative boundary points
- `lem-tdmath-unique-support-inward-ray` · lemma — Interior rays from a unique supporting plane
- `lem-tdmath-convex-function-local-lipschitz` · lemma — Finite convex functions are locally Lipschitz
- `lem-tdmath-integral-zero-uniqueness` · lemma — Zero-start integral inequality
- `lem-tdmath-forward-spectator-cancellation` · lemma — Spectator cancellation without comparison completeness
- `def-tdmath-forward-signed-comparison` · definition — Signed comparison for forward-sector relations
- `lem-tdmath-thermal-scaling-invariance` · lemma — Scaling invariance of thermal equivalence
- `lem-tdmath-reference-strip-coordinate` · lemma — A unique reference coordinate inside a thermal strip
- `lem-tdmath-convex-sector-closedness` · lemma — Convexity and relative closedness of forward sectors
- `lem-tdmath-sector-interior` · lemma — Every forward sector has nonempty interior
- `thm-tdmath-sector-nesting` · theorem — Nesting and comparison of simple-system states
- `thm-tdmath-forward-boundary-graph` · theorem — Forward orientation and the Lipschitz boundary graph
- `thm-tdmath-reference-strip-gluing` · theorem — Reference-strip gluing proves comparison for scaled copies
- `lem-tdmath-contact-energy-orientation` · lemma — Thermal joins force a common mathematical energy orientation
- `lem-tdmath-thermal-class-dichotomy` · lemma — Thermal classes either fill the domain or split an adiabat
- `thm-tdmath-conditional-contact-calibrator` · theorem — Contact calibrators under explicit join coherence
- `thm-tdmath-arbitrary-family-calibration` · theorem — Calibration of an arbitrary family of simple-system entropies
- `def-tdmath-decorated-chain-costs` · definition — Decorated finite-chain costs with catalysts
- `lem-tdmath-decorated-cost-algebra` · lemma — Algebraic properties of decorated-chain costs
- `thm-tdmath-unattained-cost-entropy-inference` · theorem — Catalyst-chain cost characterizes cross-type transitions
- `def-tdmath-cost-offset-difference-space` · definition — Cost-zero type offsets and their difference space
- `lem-tdmath-cost-offset-difference-space-well-defined` · lemma — The cost-zero offset construction is a real vector space
- `thm-tdmath-splitting-cost-quotient` · theorem — No-sinks cost offsets give a weak global entropy

### `td-math-convex-contact-and-mixing-examples` — Convex Contact And Mixing — Examples (2 item(s))

- `cex-tdmath-bare-contact-interface-incoherent` · counterexample — The bare join coordinates do not determine contact coherence
- `ex-tdmath-logarithmic-coherence-witness` · example — Logarithmic contact model with coherent joins

### `td-math-ensembles-and-limits` — Ensembles And Limits (22 item(s))

- `def-tdmath-countable-canonical-model` · definition — Countable canonical model
- `thm-tdmath-summable-canonical-differentiation` · theorem — Summable canonical differentiation
- `def-tdmath-diagonal-operator-model` · definition — Diagonal self-adjoint operator model
- `lem-tdmath-diagonal-model-hilbert-and-domain` · lemma — Completeness and linear domain of the diagonal sequence model
- `lem-tdmath-diagonal-self-adjointness` · lemma — Diagonal multiplication is self-adjoint
- `def-tdmath-measure-integral` · definition — Measure space and integral
- `thm-tdmath-monotone-convergence` · theorem — Monotone convergence for the measure integral
- `lem-tdmath-fatou` · lemma — Fatou's lemma
- `thm-tdmath-dominated-convergence` · theorem — Dominated convergence for the measure integral
- `thm-tdmath-measurable-canonical-identities` · theorem — Measurable canonical normalization and identities
- `thm-tdmath-finite-bath-error-bound` · theorem — Finite-bath canonical error bound
- `thm-tdmath-independent-bulk-limit` · theorem — Independent subsystem bulk limit
- `thm-tdmath-ising-chain-limit` · theorem — One-dimensional periodic Ising-chain limit
- `def-tdmath-bounded-finite-range-lattice` · definition — Bounded finite-range lattice model
- `thm-tdmath-finite-range-lattice-pressure-limit` · theorem — Finite-range lattice log-partition limit
- `thm-tdmath-limiting-derivative-and-concentration` · theorem — Limiting derivative and concentration
- `lem-tdmath-finite-ground-degeneracy` · lemma — Finite ground-state degeneracy entropy limit
- `lem-tdmath-conditional-memory-entropy` · lemma — Conditional entropy of finite memory given side information
- `lem-tdmath-mutual-information` · lemma — Mutual information of finite random variables
- `thm-tdmath-general-trace-gibbs-model` · theorem — Trace-class Gibbs normalization for a semibounded self-adjoint operator
- `thm-tdmath-grand-response-covariance` · theorem — Grand-response derivatives are covariances
- `lem-tdmath-bose-fermi-mode-fluctuations` · lemma — Single-mode Bose and Fermi occupation fluctuations

### `td-math-ensembles-and-limits-examples` — Ensembles And Limits — Examples (4 item(s))

- `ex-tdmath-countable-partition-divergence` · example — A lower energy bound does not ensure a countable partition function
- `ex-tdmath-two-level-canonical-fluctuations` · example — Canonical mean and variance for a two-level system
- `ex-tdmath-correlated-pair-mutual-information` · example — A perfectly correlated uniform pair has zero conditional entropy
- `ex-tdmath-finite-ensemble-mismatch` · example — A finite canonical law differs from a narrow-shell microcanonical law

## Your seams

Your pages depend on another group's:

- `td-math-local-pfaff-geometry` requires `td-math-nonsmooth-equilibrium` (group s, batch 4)
- `td-math-ensembles-and-limits` requires `td-math-nonsmooth-equilibrium` (group s, batch 4)

Another group's pages depend on yours:

- `td-accessibility-foundation` (group p) requires your `td-math-convex-contact-and-mixing`
- `td-continuum-heat-model` (group r) requires your `td-math-local-pfaff-geometry`
- `td-math-mixture-dynamics-and-shells` (group u) requires your `td-math-ensembles-and-limits`
- `td-math-continuum-pressure` (group u) requires your `td-math-ensembles-and-limits`
- `td-math-spatial-measure-and-information` (group u) requires your `td-math-ensembles-and-limits`
- `td-math-interacting-ensemble-geometry` (group v) requires your `td-math-convex-contact-and-mixing`

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
