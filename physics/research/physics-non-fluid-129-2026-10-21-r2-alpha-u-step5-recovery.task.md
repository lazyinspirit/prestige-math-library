# Step 5 adjudication — group **u**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 45, 46, 47: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **45**: `research/physics-non-fluid-129-2026-10-21-r2-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **46**: `research/physics-non-fluid-129-2026-10-21-r2-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/physics-non-fluid-129-2026-10-21-r2-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 45 | `nrqmx-scattering-interfaces` | A | non-relativistic-quantum-mechanics-mathematics | 787 | `nrqmx-form-spectral-methods`, `qm-math-controlled-dynamics`, `unbounded-self-adjoint-operators-and-stones-theorem`, `improper-and-parameter-dependent-multiple-integrals` |
| 45 | `nrqmx-scattering-interfaces-examples` | B | non-relativistic-quantum-mechanics-mathematics | 788 | `nrqmx-scattering-interfaces` |
| 46 | `nrqmx-semiclassical-calculus` | A | non-relativistic-quantum-mechanics-mathematics | 789 | `qm-math-controlled-dynamics`, `schwartz-space-and-the-plancherel-theorem`, `hamiltonian-monte-carlo-and-leapfrog`, `codimension-one-foliations-and-secondary-classes` |
| 46 | `nrqmx-semiclassical-calculus-examples` | B | non-relativistic-quantum-mechanics-mathematics | 790 | `nrqmx-semiclassical-calculus` |
| 47 | `nrqmx-adiabatic-holonomy` | A | non-relativistic-quantum-mechanics-mathematics | 791 | `qm-math-controlled-dynamics`, `chern-weil-theory-and-characteristic-forms`, `lie-groups-invariant-fields-and-the-exponential-map`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `the-riemann-integral-in-rn-and-jordan-content`, `tensor-fields-exterior-algebra-and-differential-forms`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `the-de-rham-theorem-and-degree`, `orientations-poincare-lefschetz-and-alexander-duality`, `singular-cohomology-and-coefficient-theorems`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` |
| 47 | `nrqmx-adiabatic-holonomy-examples` | B | non-relativistic-quantum-mechanics-mathematics | 792 | `nrqmx-adiabatic-holonomy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nrqmx-scattering-interfaces` — Scattering channels, stationary resolvents and time delay (6 item(s))

- `def-nrqmx-scattering-channel-data` · definition — Wave, scattering and channel operators
- `def-nrqmx-resonance-matrix-element-poles` · definition — Continued resolvent matrix elements and resonance poles
- `lem-nrqmx-gaussian-resolvent-continuation` · lemma — Explicit Gaussian continuation of a free resolvent matrix element
- `thm-nrqmx-short-range-scattering-completeness` · theorem — Compact-support short-range scattering closure
- `thm-nrqmx-finite-channel-wigner-smith` · theorem — Wigner–Smith matrix for differentiable finite channels
- `thm-nrqmx-rank-one-resonance-continuation` · theorem — Resonance poles in an analytic rank-one model

### `nrqmx-scattering-interfaces-examples` — Scattering channels, stationary resolvents and time delay — Examples (2 item(s))

- `cex-nrqmx-cook-not-completeness` · counterexample — Cook existence is not completeness
- `ex-nrqmx-single-phase-time-delay` · example — Elastic phase derivative

### `nrqmx-semiclassical-calculus` — Weyl quantization, Wigner functions and finite-time classical limits (8 item(s))

- `def-nrqmx-weyl-symbol-wigner` · definition — Schwartz Weyl quantization and Wigner distributions
- `lem-nrqmx-scaled-plancherel` · lemma — Plancherel identity for the scaled semiclassical Fourier transform
- `lem-nrqmx-weyl-hilbert-schmidt-bound` · lemma — Square-integrable kernel bound for Schwartz Weyl quantization
- `thm-nrqmx-wigner-marginals` · theorem — Wigner pairing and marginals
- `lem-nrqmx-bounded-symbol-estimate` · lemma — Order-zero Weyl L² boundedness
- `thm-nrqmx-schwartz-moyal-remainder` · theorem — Weyl composition with a controlled Schwartz remainder
- `lem-nrqmx-cubic-moyal-commutator-remainder` · lemma — Cubic Weyl commutator remainder for a smooth potential
- `thm-nrqmx-quadratic-egorov` · theorem — Fixed-time Weyl Egorov estimate for subquadratic potentials

### `nrqmx-semiclassical-calculus-examples` — Weyl quantization, Wigner functions and finite-time classical limits — Examples (2 item(s))

- `ex-nrqmx-gaussian-wigner-flow` · example — Exact harmonic-oscillator transport of a Gaussian Wigner density
- `cex-nrqmx-wigner-negative` · counterexample — A first excited oscillator state has negative Wigner values

### `nrqmx-adiabatic-holonomy` — Projector geometry, adiabatic transport and Berry curvature (8 item(s))

- `def-nrqmx-smooth-projector-bundle` · definition — C2 projector bundles and Kato transport
- `lem-nrqmx-projector-bundle-kato-well-definedness` · lemma — Projected connection and Kato transport are well defined
- `lem-nrqmx-c1-stokes-compact-surface` · lemma — Stokes for C1 one-forms on compact surface regions
- `thm-nrqmx-berry-projector-curvature` · theorem — Projector curvature and frame covariance
- `lem-nrqmx-c2-projector-chern-integrality` · lemma — C2 projector curvature has integral Chern number
- `thm-nrqmx-adiabatic-geometric-phase-bound` · theorem — Physical adiabatic phase with explicit scale
- `thm-nrqmx-rank-one-chern-holonomy` · theorem — Rank-one holonomy and integral curvature
- `lem-nrqmx-spin-half-solid-angle-period` · lemma — Spin-half curvature and solid-angle filling period

### `nrqmx-adiabatic-holonomy-examples` — Projector geometry, adiabatic transport and Berry curvature — Examples (2 item(s))

- `ex-nrqmx-spin-half-monopole` · example — Spin-half curvature and a solid angle
- `cex-nrqmx-gap-closing-adiabatic` · counterexample — Slow variation alone is insufficient

## Your seams

Your pages depend on another group's:

- `nrqmx-scattering-interfaces` requires `nrqmx-form-spectral-methods` (group s, batch 44)

Another group's pages depend on yours:

- `nrqmx-magnetic-geometry` (group t) requires your `nrqmx-adiabatic-holonomy`
- `nrqmx-bloch-band-geometry` (group w) requires your `nrqmx-adiabatic-holonomy`

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
