# Step 5 adjudication — group **j**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 28 | `nonlinear-landweber-and-discrepancy-stopping` | A | inverse-problems | 3052 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `variational-source-conditions-and-bregman-rates`, `hilbert-space-geometry-and-riesz-representation` |
| 28 | `nonlinear-landweber-and-discrepancy-stopping-examples` | B | inverse-problems | 3053 | `nonlinear-landweber-and-discrepancy-stopping` |
| 29 | `regularized-gauss-newton-and-levenberg-marquardt` | A | inverse-problems | 3054 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `nonlinear-tikhonov-existence-and-stability`, `gauss-newton-and-levenberg-marquardt-methods`, `iterative-regularization-and-early-stopping` |
| 29 | `regularized-gauss-newton-and-levenberg-marquardt-examples` | B | inverse-problems | 3055 | `regularized-gauss-newton-and-levenberg-marquardt` |
| 30 | `banach-range-invariance-and-eit-rates` | A | inverse-problems | 3056 | `nonlinear-inverse-problems-and-tangential-cone-conditions`, `variational-source-conditions-and-bregman-rates`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `volume-integral-scattering-and-partial-wave-error`, `littlewood-paley-theory-and-square-functions` |
| 30 | `banach-range-invariance-and-eit-rates-examples` | B | inverse-problems | 3057 | `banach-range-invariance-and-eit-rates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonlinear-landweber-and-discrepancy-stopping` — Nonlinear Landweber with discrepancy stopping (2 item(s))

- `alg-ip-nonlinear-landweber-discrepancy` · algorithm — Nonlinear Landweber iteration with discrepancy stopping
- `thm-ip-nonlinear-landweber-fejer-and-finite-stopping` · theorem — Nonlinear Landweber Fejér decrease and discrepancy stopping

### `nonlinear-landweber-and-discrepancy-stopping-examples` — Nonlinear Landweber with discrepancy stopping — Examples and Counterexamples (3 item(s))

- `ex-ip-landweber-initial-discrepancy-stop` · example — The initial residual can already meet the discrepancy threshold
- `cex-ip-landweber-outside-local-ball-stalls` · counterexample — Exact-data Landweber can stall without a local tangential-cone condition
- `ex-ip-landweber-exact-data-no-finite-stop` · example — Exact data can converge without a finite discrepancy stop

### `regularized-gauss-newton-and-levenberg-marquardt` — Regularized nonlinear Levenberg–Marquardt (6 item(s))

- `def-ip-product-tangential-cone-condition` · definition — Product-type tangential cone condition
- `lem-ip-lm-product-condition-implies-range-approximation` · lemma — Product condition gives the LM range-approximation bound
- `alg-ip-regularized-levenberg-marquardt` · algorithm — Regularized nonlinear Levenberg–Marquardt with discrepancy stopping
- `lem-ip-lm-step-existence-and-residual-forcing` · lemma — The regularized LM step and residual-forcing parameter exist
- `lem-ip-lm-fejer-decrease-and-parameter-bound` · lemma — Regularized LM decreases the local solution error
- `thm-ip-lm-local-discrepancy-stopping` · theorem — Local regularized LM discrepancy stopping has logarithmic iteration count

### `regularized-gauss-newton-and-levenberg-marquardt-examples` — Regularized nonlinear Levenberg–Marquardt — Examples and Counterexamples (2 item(s))

- `ex-ip-lm-scalar-regularized-step-stability` · example — A scalar regularized LM step controls noise at fixed damping
- `cex-ip-lm-zero-noise-discrepancy-stopping` · counterexample — Zero-noise discrepancy stopping need not be finite

### `banach-range-invariance-and-eit-rates` — Banach range invariance and EIT rates (19 item(s))

- `lem-ip-collared-sobolev-besov-source-functional-cutoff` · lemma — Besov smoothness gives the exact collared Sobolev penalty a cutoff source bound
- `lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice` · lemma — Positive-Sobolev CGO remainders from a shifted Fourier lattice
- `lem-ip-sharp-weighted-modulated-cgo-remainder-absorption` · lemma — Sharp weighted absorption of modulated CGO remainders
- `lem-ip-calderon-boundary-trace-quotient-identification` · lemma — Boundary trace quotient and chart norm equivalence
- `lem-ip-centered-neumann-sequence-map-and-differentiability` · lemma — Centered Neumann voltage sequences on the three-dimensional ball
- `lem-ip-logarithmic-index-conjugate-and-parameter-rates` · lemma — Logarithmic source indices and their admissible parameter scales
- `lem-ip-collared-liouville-potential-and-hone-recovery` · lemma — Collared Sobolev conductivities have regular Liouville potentials and H1 recovery
- `lem-ip-logarithmic-endpoint-under-effective-noise-control` · lemma — A logarithmic endpoint rate with explicit effective noise and tolerance control
- `lem-ip-centered-ntd-cgo-identity-and-modulated-remainder` · lemma — Centered NtD data control the exact CGO identity with its modulation factor
- `lem-ip-geometric-logarithmic-frozen-stopping-schedule` · lemma — Geometric parameters satisfy the logarithmic frozen stopping and growth conditions
- `def-ip-differential-range-invariance` · definition — Differential range invariance for Banach-space maps
- `lem-ip-sharp-centered-eit-hone-logarithmic-stability` · lemma — H1 logarithmic stability from centered three-dimensional NtD data
- `def-ip-relaxed-range-invariance-objective` · definition — Joint and frozen-Newton objectives for range-invariant relaxations
- `lem-ip-joint-range-invariance-vsc-estimate` · lemma — The joint relaxed objective controls Bregman and range errors
- `lem-ip-frozen-newton-one-step-error-recursion` · lemma — A frozen Newton step yields a controlled error inequality
- `lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility` · lemma — The full collared EIT class satisfies the centered range and source interfaces
- `thm-ip-joint-regularization-rate-under-range-invariance` · theorem — Joint regularization rates under differential range invariance
- `thm-ip-frozen-newton-rate-under-range-invariance` · theorem — Frozen Newton rates under differential range invariance
- `rem-ip-eit-conductivity-rate-source-reconciliation` · remark — Source corrections for three-dimensional EIT rates

### `banach-range-invariance-and-eit-rates-examples` — Banach range invariance and EIT rates — Examples and Counterexamples (2 item(s))

- `ex-ip-partial-observation-range-invariance-without-tcc` · example — Range invariance can hold when the tangential cone condition fails
- `ex-ip-relaxed-variable-requires-penalty` · example — An added variable is not identifiable without a penalty

## Your seams

Your pages depend on another group's:

- `nonlinear-landweber-and-discrepancy-stopping` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)
- `nonlinear-landweber-and-discrepancy-stopping` requires `variational-source-conditions-and-bregman-rates` (group i, batch 27)
- `regularized-gauss-newton-and-levenberg-marquardt` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)
- `regularized-gauss-newton-and-levenberg-marquardt` requires `nonlinear-tikhonov-existence-and-stability` (group i, batch 26)
- `banach-range-invariance-and-eit-rates` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)
- `banach-range-invariance-and-eit-rates` requires `variational-source-conditions-and-bregman-rates` (group i, batch 27)

Another group's pages depend on yours:

- `eit-logarithmic-stability-and-conductivity-classes` (group o) requires your `banach-range-invariance-and-eit-rates`

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

# Historical Step-5 closure recovery, `inverse-problems-knot-theory-all-109-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
