# Step 5 adjudication — group **i**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 25 | `nonlinear-inverse-problems-and-tangential-cone-conditions` | A | inverse-problems | 3046 | `inverse-problems-identifiability-and-stability`, `linear-operators-pseudoinverses-and-picard-criteria`, `hilbert-space-geometry-and-riesz-representation`, `banach-space-differential-calculus-and-banach-manifolds` |
| 25 | `nonlinear-inverse-problems-and-tangential-cone-conditions-examples` | B | inverse-problems | 3047 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `banach-space-differential-calculus-and-banach-manifolds` |
| 26 | `nonlinear-tikhonov-existence-and-stability` | A | inverse-problems | 3048 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `weak-and-weak-star-topologies`, `the-direct-method-and-euler-lagrange-equations`, `banach-valued-integration-and-the-radon-nikodym-property` |
| 26 | `nonlinear-tikhonov-existence-and-stability-examples` | B | inverse-problems | 3049 | `nonlinear-tikhonov-existence-and-stability` |
| 27 | `variational-source-conditions-and-bregman-rates` | A | inverse-problems | 3050 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `nonlinear-tikhonov-existence-and-stability`, `proximal-gradient-and-accelerated-composite-optimization` |
| 27 | `variational-source-conditions-and-bregman-rates-examples` | B | inverse-problems | 3051 | `variational-source-conditions-and-bregman-rates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonlinear-inverse-problems-and-tangential-cone-conditions` — Nonlinear maps and tangential cone control (5 item(s))

- `def-ip-nonlinear-forward-map` · definition — Nonlinear forward maps between Hilbert spaces
- `def-ip-x0-minimum-norm-solution` · definition — x₀-minimum-norm solutions of nonlinear equations
- `def-ip-tangential-cone-condition` · definition — Local tangential cone condition
- `lem-ip-tcc-residual-derivative-comparison` · lemma — Tangential cone control compares derivative and data residuals
- `thm-ip-tcc-local-minimum-norm-identifiability` · theorem — Local uniqueness of an x₀-minimum-norm solution under TCC

### `nonlinear-inverse-problems-and-tangential-cone-conditions-examples` — Nonlinear maps and tangential cone control — Examples and Counterexamples (2 item(s))

- `cex-ip-smooth-map-fails-tcc` · counterexample — A smooth map can fail the tangential cone condition
- `ex-ip-local-tcc-neighborhood` · example — A smooth map with a local tangential cone neighborhood

### `nonlinear-tikhonov-existence-and-stability` — Nonlinear Tikhonov existence and stability (8 item(s))

- `def-ip-weakly-closed-nonlinear-forward-map` · definition — Weakly closed nonlinear forward maps on Hilbert spaces
- `def-ip-nonlinear-tikhonov-functional` · definition — The nonlinear Tikhonov functional
- `def-ip-x0-minimum-norm-solution-on-weak-domain` · definition — $x_0$-minimum-norm solutions on weakly closed domains
- `lem-ip-nonlinear-exact-solution-set-is-weakly-closed` · lemma — The exact solution set of a weakly closed map is weakly sequentially closed
- `thm-ip-nonlinear-tikhonov-minimizer-exists` · theorem — Existence of a global nonlinear Tikhonov minimizer
- `thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution` · theorem — Existence of an $x_0$-minimum-norm exact solution
- `thm-ip-nonlinear-tikhonov-weak-cluster-stability` · theorem — Weak-cluster stability for fixed-parameter nonlinear Tikhonov regularization
- `thm-ip-nonlinear-tikhonov-vanishing-noise-convergence` · theorem — Vanishing-noise convergence to an $x_0$-minimum-norm exact solution

### `nonlinear-tikhonov-existence-and-stability-examples` — Nonlinear Tikhonov existence and stability — Examples and Counterexamples (2 item(s))

- `ex-ip-nonlinear-tikhonov-has-two-global-minimizers` · example — A nonlinear Tikhonov functional can have two global minimizers
- `ex-ip-bochner-integral-defines-weakly-closed-nonlinear-map` · example — A Bochner-integral forward map with weakly closed graph

### `variational-source-conditions-and-bregman-rates` — Bregman distances and variational source rates (6 item(s))

- `def-ip-banach-convex-subgradient-and-dual-pairing` · definition — Banach-space convex subgradients and dual pairings
- `lem-ip-index-function-young-conjugate-bound` · lemma — A conjugate bound for residual and Bregman errors
- `lem-ip-banach-fenchel-duality-for-regularization` · lemma — Fenchel–Young equality for a Banach regularizer
- `def-ip-bregman-distance` · definition — Bregman distances for convex regularizers
- `def-ip-variational-source-condition` · definition — Variational source conditions on a regularizer sublevel
- `thm-ip-vsc-nonlinear-regularization-rate` · theorem — Variational source conditions yield nonlinear regularization rates

### `variational-source-conditions-and-bregman-rates-examples` — Bregman distances and variational source rates — Examples and Counterexamples (3 item(s))

- `cex-ip-vsc-unit-coefficient-does-not-control-bregman-error` · counterexample — A unit VSC coefficient need not force Bregman convergence
- `ex-ip-power-index-bregman-rate` · example — Power index functions give polynomial Bregman rates
- `ex-ip-logarithmic-index-bregman-rate` · example — Logarithmic index functions give log-rate Bregman convergence

## Your seams

Your pages depend on another group's:

- `nonlinear-inverse-problems-and-tangential-cone-conditions` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `nonlinear-inverse-problems-and-tangential-cone-conditions` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)

Another group's pages depend on yours:

- `nonlinear-landweber-and-discrepancy-stopping` (group j) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `nonlinear-landweber-and-discrepancy-stopping` (group j) requires your `variational-source-conditions-and-bregman-rates`
- `regularized-gauss-newton-and-levenberg-marquardt` (group j) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `regularized-gauss-newton-and-levenberg-marquardt` (group j) requires your `nonlinear-tikhonov-existence-and-stability`
- `banach-range-invariance-and-eit-rates` (group j) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `banach-range-invariance-and-eit-rates` (group j) requires your `variational-source-conditions-and-bregman-rates`
- `tv-source-certificates-and-geometric-convergence` (group k) requires your `variational-source-conditions-and-bregman-rates`
- `manifold-and-physical-constraint-inversion` (group l) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `numerical-pde-inversion-and-adjoint-error-control` (group o) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `numerical-pde-inversion-and-adjoint-error-control` (group o) requires your `nonlinear-tikhonov-existence-and-stability`
- `dynamic-data-identifiability-and-system-realization` (group s) requires your `nonlinear-inverse-problems-and-tangential-cone-conditions`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
