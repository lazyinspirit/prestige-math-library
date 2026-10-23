# Step 5 adjudication — group **m**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 30, 32, 33: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **30**: `research/fluid-dynamics-all-47-2026-10-23-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/fluid-dynamics-all-47-2026-10-23-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/fluid-dynamics-all-47-2026-10-23-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 30 | `fd-n03` | A | fluid-dynamics-mathematics | 665 | `conservative-finite-volume-weak-limits`, `invariant-domain-and-entropy-stable-conservative-schemes`, `countability-and-uncountability`, `riemann-solvers-for-hyperbolic-systems` |
| 30 | `fd-n03-examples` | B | fluid-dynamics-mathematics | 666 | `fd-n03` |
| 32 | `fd-st01` | A | fluid-dynamics-mathematics | 669 | `banach-valued-integration-and-the-radon-nikodym-property`, `mcmc-clt-and-monte-carlo-standard-error`, `product-measures-and-the-fubini-tonelli-theorems`, `conditional-distributions-and-regular-conditional-probability`, `countability-and-uncountability`, `general-state-mcmc-kernels-and-reversibility`, `markov-kernels-and-markov-chains`, `mcmc-ergodicity-and-mixing`, `measure-preserving-systems-and-mixing-criteria`, `measures-and-their-basic-properties`, `relations-functions-and-quotients`, `stationary-markov-chains-and-ergodic-limits`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `topology-of-r` |
| 32 | `fd-st01-examples` | B | fluid-dynamics-mathematics | 670 | `fd-st01`, `markov-kernels-and-markov-chains`, `measures-and-their-basic-properties`, `probability-spaces-random-variables-and-expectation`, `relations-functions-and-quotients`, `series-and-nonnegative-tests`, `stationary-markov-chains-and-ergodic-limits`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-convergence-tightness-and-representation` |
| 33 | `fd-st02` | A | fluid-dynamics-mathematics | 671 | `fd-st01`, `global-sensitivity-anova-and-sobol-estimation`, `iid-monte-carlo-integration-and-error`, `modes-of-convergence-for-random-variables`, `probability-spaces-random-variables-and-expectation`, `relations-functions-and-quotients`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-convergence-tightness-and-representation` |
| 33 | `fd-st02-examples` | B | fluid-dynamics-mathematics | 672 | `fd-st02`, `probability-spaces-random-variables-and-expectation`, `weak-laws-and-series-of-independent-random-variables` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-n03` — Compressible numerical conservation and admissibility (4 item(s))

- `def-fd-compressible-numerical-contract` · definition — Euler state, flux, positive set and numerical roles
- `prop-fd-euler-llf-admissibility-interface` · proposition — Ideal-gas LLF admissibility specialization
- `prop-fd-shared-face-global-conservation` · proposition — Shared-face flux telescoping conservation
- `rem-fd-compressible-stability-distinctions` · remark — Entropy, invariant-domain and weak-limit hypotheses

### `fd-n03-examples` — Compressible numerical conservation and admissibility — Examples (1 item(s))

- `ex-fd-compressible-constant-state` · example — Constant Euler state preserved by consistent shared flux

### `fd-st01` — Random fields and dependent fluid statistics (5 item(s))

- `def-fd-random-velocity-sensor-law` · definition — Finite-second-moment random velocity sensor law
- `lem-fd-sensor-pairing-is-well-defined` · lemma — The L2 velocity sensor is well-defined
- `lem-fd-velocity-tensor-is-bochner-integrable` · lemma — Quadratic velocity tensors are Bochner integrable
- `thm-fd-expected-weak-reynolds` · theorem — Expected weak Reynolds decomposition and conditional mean equation
- `prop-fd-sensor-long-run-clt` · proposition — Long-run central limit theorem for a dependent velocity sensor

### `fd-st01-examples` — Random fields and dependent fluid statistics — Examples (1 item(s))

- `ex-fd-ar1-long-run-variance` · example — A Gaussian AR(1) sensor and its long-run variance

### `fd-st02` — Fluid observable uncertainty and numerical bias budgets (5 item(s))

- `def-fd-random-fluid-observable` · definition — Random fluid observable and numerical approximation
- `thm-fd-observable-sampling-bias-split` · theorem — Exact sampling variance and a numerical-bias error bound
- `alg-fd-uq-observable-budget` · algorithm — Failure-aware fluid UQ callback and certified sampling budget
- `cor-fd-uq-observable-budget-guarantees` · corollary — Execution and conditional error guarantees of the fluid UQ budget algorithm
- `rem-fd-fluid-sobol-interface` · remark — Sobol sensitivity and observable-error interface

### `fd-st02-examples` — Fluid observable uncertainty and numerical bias budgets — Examples (1 item(s))

- `ex-fd-all-zero-mc-sample` · example — An all-zero Monte Carlo sample can report zero standard error

## Your seams

Another group's pages depend on yours:

- `fd-pn02` (group e) requires your `fd-n03`
- `fd-pda01` (group e) requires your `fd-st01`
- `fd-l01` (group p) requires your `fd-st02`

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

# Historical Step-5 closure recovery, `fluid-dynamics-all-47-2026-10-23`

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
