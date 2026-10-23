# Step 5 adjudication — group **j**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 15, 17, 18: 3 A/B pair(s), 6 page(s), 30 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **15**: `research/fluid-dynamics-all-47-2026-10-23-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/fluid-dynamics-all-47-2026-10-23-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/fluid-dynamics-all-47-2026-10-23-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/fluid-dynamics-all-47-2026-10-23-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 15 | `fd-mf04` | A | fluid-dynamics-mathematics | 389 | `cm-math-dynamics`, `fd-mf01`, `td-math-nonsmooth-equilibrium`, `matrix-differentiation-and-first-order-spectral-perturbation`, `the-exponential-function`, `the-integral-logarithm-and-its-characterisations` |
| 15 | `fd-mf04-examples` | B | fluid-dynamics-mathematics | 390 | `fd-mf04` |
| 17 | `fd-s01` | A | fluid-dynamics-mathematics | 393 | `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `weak-derivatives-and-sobolev-spaces`, `monotone-sequences-and-cauchy-completeness`, `the-riemann-integral-in-rn-and-jordan-content`, `fubini-and-change-of-variables`, `the-fundamental-theorems-of-calculus`, `uniform-convergence-of-functions` |
| 17 | `fd-s01-examples` | B | fluid-dynamics-mathematics | 394 | `fd-s01` |
| 18 | `fd-s02` | A | fluid-dynamics-mathematics | 395 | `fd-s01`, `picard-lindelof-and-first-order-odes`, `completeness-and-uniform-continuity`, `monotone-sequences-and-cauchy-completeness`, `rn-as-a-normed-space` |
| 18 | `fd-s02-examples` | B | fluid-dynamics-mathematics | 396 | `fd-s02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-mf04` — Generalized Newtonian, Bingham and conformation model equations (4 item(s))

- `def-fd-nonnewtonian-laws` · definition — Generalized Newtonian, Bingham and conformation model equations
- `lem-fd-generalized-newtonian-dissipation` · lemma — Objective generalized-Newtonian dissipation
- `lem-fd-bingham-monotone-graph` · lemma — Bingham yield graph and convex monotonicity
- `lem-fd-conformation-storage` · lemma — Objective conformation positivity and stored-energy dissipation

### `fd-mf04-examples` — Generalized Newtonian, Bingham and conformation model equations — Examples (1 item(s))

- `ex-fdmath-bingham-zero-rate-stress` · example — The Bingham graph at zero contains nonzero tensors

### `fd-s01` — Periodic fluid Fourier Sobolev spaces (11 item(s))

- `def-fd-periodic-fourier-sobolev-spaces` · definition — Periodic fluid Fourier Sobolev spaces
- `def-fd-projected-no-slip-stokes-space` · definition — Projected no-slip Stokes Hilbert space
- `lem-fd-rectangular-test-divergence-inverse` · lemma — Rectangular continuous divergence inverse on mean-zero tests
- `lem-fd-periodic-fourier-embedding-products` · lemma — Periodic Fourier embeddings and products
- `def-fd-periodic-leray-pressure-maps` · definition — Periodic Leray and pressure maps
- `lem-fd-periodic-tame-transport-commutator` · lemma — Tame transport commutator
- `thm-fd-periodic-pressure-recovery` · theorem — Pressure recovery for smooth periodic incompressible velocity
- `lem-fd-zero-trace-directional-poincare` · lemma — Directional Poincaré bound for zero trace
- `thm-fd-projected-stationary-stokes` · theorem — Projected stationary weak Stokes solvability
- `lem-fd-given-smooth-solutions-difference-energy` · lemma — Difference energy for given smooth incompressible and symmetric solutions
- `thm-fd-rectangular-no-slip-stokes-velocity-pressure` · theorem — Rectangular no-slip Stokes velocity and distribution pressure

### `fd-s01-examples` — Periodic fluid Fourier Sobolev spaces — Examples (2 item(s))

- `ex-fd-single-mode-pressure` · example — Shear mode has zero periodic pressure
- `rem-fd-stokes-pressure-prerequisite` · remark — Full wall Stokes pressure requires a divergence inverse

### `fd-s02` — Local smooth periodic Euler and Navier–Stokes (8 item(s))

- `def-fd-polytropic-symmetric-variables` · definition — Sound-speed variables for polytropic Euler
- `def-fd-smooth-wall-exterior-solution-domains` · definition — Smooth bounded-wall and exterior solution domains
- `thm-fd-global-linear-acoustics` · theorem — Global smooth periodic linear acoustics
- `def-fd-flat-channel-domains` · definition — Flat periodic and infinite channel domains
- `thm-fd-compatible-wall-shear-heat` · theorem — Global compatible no-slip shear evolution
- `lem-fd-polynomial-ode-continuation` · lemma — Continuation of bounded polynomial ODE solutions
- `thm-fd-smooth-periodic-incompressible-ivp` · theorem — Local smooth periodic Euler and Navier–Stokes
- `thm-fd-smooth-polytropic-euler-ivp` · theorem — Local smooth positive-density polytropic Euler

### `fd-s02-examples` — Local smooth periodic Euler and Navier–Stokes — Examples (4 item(s))

- `ex-fd-compressible-viscous-shear` · example — Exact constant-density compressible viscous shear
- `ex-fd-periodic-poiseuille-body-force` · example — Periodic channel Poiseuille flow uses a body force
- `ex-fd-couette-vorticity` · example — Couette shear vorticity and volume flux
- `rem-fd-general-viscous-wall-ivp-gaps` · remark — Scope limits for general wall and viscous initial-value problems

## Your seams

Your pages depend on another group's:

- `fd-mf04` requires `fd-mf01` (group h, batch 2)

Another group's pages depend on yours:

- `fd-f04` (group c) requires your `fd-mf04`
- `fd-s03` (group k) requires your `fd-s02`
- `fd-w01` (group k) requires your `fd-s01`
- `fd-les01` (group n) requires your `fd-s01`
- `fd-rom01` (group o) requires your `fd-s01`
- `fd-l01` (group p) requires your `fd-s01`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/fluid-dynamics-all-47-2026-10-23-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `fluid-dynamics-all-47-2026-10-23`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
