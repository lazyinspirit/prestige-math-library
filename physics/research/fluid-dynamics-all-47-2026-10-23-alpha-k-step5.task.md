# Step 5 adjudication — group **k**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 19, 22, 23: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/fluid-dynamics-all-47-2026-10-23-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/fluid-dynamics-all-47-2026-10-23-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/fluid-dynamics-all-47-2026-10-23-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `fd-s03` | A | fluid-dynamics-mathematics | 397 | `euclidean-surface-measure-divergence-and-green-identities`, `fd-s02` |
| 19 | `fd-s03-examples` | B | fluid-dynamics-mathematics | 398 | `fd-s03` |
| 22 | `fd-w01` | A | fluid-dynamics-mathematics | 403 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`, `cm-math-dynamics`, `distributions-test-functions-and-differentiation`, `fd-s01`, `orthonormal-bases-parseval-and-fourier-series`, `picard-lindelof-and-first-order-odes`, `product-measures-and-the-fubini-tonelli-theorems`, `smooth-approximation-and-sobolev-extension`, `the-maximal-function-and-lebesgue-differentiation`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 22 | `fd-w01-examples` | B | fluid-dynamics-mathematics | 404 | `fd-w01` |
| 23 | `fd-w03` | A | fluid-dynamics-mathematics | 405 | `cm-math-continuum`, `distributions-test-functions-and-differentiation` |
| 23 | `fd-w03-examples` | B | fluid-dynamics-mathematics | 406 | `fd-w03` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-s03` — Periodic smooth incompressible energy identity (12 item(s))

- `lem-fd-torus-mean-zero-poincare` · lemma — Mean-zero Poincare inequality on the normalized torus
- `thm-fd-periodic-smooth-incompressible-energy` · theorem — Periodic smooth incompressible energy identity
- `thm-fd-periodic-smooth-stability` · theorem — Smooth incompressible and symmetric-system stability
- `thm-fd-smooth-sobolev-continuation` · theorem — Smooth Sobolev continuation criterion
- `thm-fd-periodic-inviscid-limit` · theorem — Controlled periodic smooth inviscid limit
- `thm-fd-smooth-vorticity-identities` · theorem — Smooth vorticity identities and two-dimensional norms
- `thm-fd-polytropic-energy` · theorem — Smooth polytropic energy conservation
- `thm-fd-smooth-wall-energy-uniqueness` · theorem — Conditional wall energy and smooth uniqueness
- `prop-fd-fluid-equation-scaling` · proposition — Fluid equation scalings and dimensionless numbers
- `lem-fd-2d-fourier-log-velocity-bound` · lemma — Two-dimensional Fourier logarithmic velocity bound
- `lem-fd-2d-transport-commutator-l1-bound` · lemma — Two-dimensional transport commutator bound by the Fourier l1 gradient sum
- `thm-fd-global-two-dimensional-periodic-navier-stokes` · theorem — Global smooth two-dimensional periodic Navier–Stokes

### `fd-s03-examples` — Periodic smooth incompressible energy identity — Examples (3 item(s))

- `rem-fd-global-regularity-open` · remark — Current public status of the three-dimensional Navier–Stokes problem
- `rem-fd-boundary-layer-low-mach-status` · remark — Boundary inviscid and nonlinear low-Mach limits require separate estimates
- `ex-fd-acoustic-energy-mode` · example — A longitudinal acoustic Fourier mode conserves weighted energy

### `fd-w01` — Periodic solenoidal Fourier spaces (15 item(s))

- `def-fd-bounded-solenoidal-spaces` · definition — Bounded no-slip solenoidal closure spaces
- `def-fd-periodic-solenoidal-spaces` · definition — Periodic solenoidal Fourier spaces
- `lem-fd-bounded-solenoidal-basis` · lemma — Countable smooth solenoidal basis for bounded closure spaces
- `def-fd-weak-time-continuity` · definition — Weak time continuity and energy spaces
- `lem-fd-negative-space-nonlinear-bound` · lemma — Quadratic transport in negative Sobolev space
- `def-fd-periodic-leray-hopf` · definition — Unforced periodic Leray–Hopf solution
- `lem-fd-bounded-compactness` · lemma — No-slip compactness and bounded-mode tails
- `lem-fd-bounded-dual-separability` · lemma — Separability and Hilbert structure of the no-slip dual
- `lem-fd-finite-mode-compactness` · lemma — Fourier compactness with coefficient time control
- `lem-fd-no-slip-lsix` · lemma — Elementary zero-boundary L6 and L4 interpolation
- `thm-fd-periodic-global-weak-existence` · theorem — Global periodic weak viscous existence
- `prop-fd-pressure-reconstruction` · proposition — Mean-zero pressure as a distribution
- `thm-fd-bounded-global-weak-existence` · theorem — Global bounded no-slip Leray–Hopf existence
- `thm-fd-weak-smooth-uniqueness` · theorem — Weak–smooth uniqueness on a smooth interval
- `prop-fd-bounded-evolving-pressure` · proposition — Rectangular evolving distributional pressure

### `fd-w01-examples` — Periodic solenoidal Fourier spaces — Examples (2 item(s))

- `cex-fd-weak-products` · counterexample — Weak convergence does not pass quadratic products
- `rem-fd-weak-regularity-status` · remark — Weak existence and smooth regularity scope

### `fd-w03` — Distributional systems and entropy flux pairs (8 item(s))

- `lem-fd-locally-integrable-functions-define-distributions` · lemma — Locally integrable functions define distributions
- `def-fd-conservation-system` · definition — Distributional systems and entropy flux pairs
- `def-fd-piecewise-traces` · definition — Planar shocks and piecewise smooth traces
- `thm-fd-rankine-hugoniot` · theorem — Vector Rankine–Hugoniot condition
- `prop-fd-entropy-jump` · proposition — Entropy jump residual
- `def-fd-lax-pattern` · definition — Strict hyperbolicity and Lax shock pattern
- `thm-fd-convex-scalar-riemann` · theorem — Strictly convex scalar Riemann construction
- `prop-fd-viscous-entropy-passage` · proposition — Entropy inequality under an assumed viscous limit

### `fd-w03-examples` — Distributional systems and entropy flux pairs — Examples (4 item(s))

- `ex-fd-burgers-shock` · example — Burgers shock entropy and Lax speeds
- `ex-fd-burgers-fan` · example — Burgers centered rarefaction and trace
- `cex-fd-expansion-shock` · counterexample — Expansion shock fails entropy selection
- `cex-fd-shock-point-values` · counterexample — Point assignments do not alter weak jump

## Your seams

Your pages depend on another group's:

- `fd-s03` requires `fd-s02` (group j, batch 18)
- `fd-w01` requires `fd-s01` (group j, batch 17)

Another group's pages depend on yours:

- `fd-ps01` (group c) requires your `fd-s03`
- `fd-ps02` (group d) requires your `fd-s03`
- `fd-w02` (group d) requires your `fd-w01`

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
