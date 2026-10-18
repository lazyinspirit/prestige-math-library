# Batch 26 authoring notes — Singular and infinite interval quadrature

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `singular-and-infinite-interval-quadrature` / `singular-and-infinite-interval-quadrature-examples`  
Batch dependency level: **0**; in-run prerequisite batches: **none**, matching the current dependency-level input.
Scheduling input SHA-256: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`.

## Controlling design comparison

The QUAD-SING scope, proof route, examples, category, order, and companion in `research/plan-numerical-linear-track.md` L2441–2485 match the corresponding `plan-spec.json` rows. The planned statements retain the stated domains and limits: algebraic/logarithmic endpoint factors with exponents greater than $-1$; finite truncations with separate strip and tail errors; C1 principal-value subtraction; an affine reference-triangle Duffy map; and no curved or surface BEM claim.

There is a page-interface wording conflict to preserve for owner reconciliation. The narrative design's interface paragraph lists `composite-quadrature-rules` (NA-12), `gaussian-quadrature` (NA-13), and `clenshaw-curtis-and-extrapolation-quadrature` (QUAD-EXTRAP) as same-frontier edges and says no external page token appears in `requires`; the controlling plan-spec row and dispatched task instead declare `requires: [gaussian-quadrature, clenshaw-curtis-and-extrapolation-quadrature]`. The assigned manifest keeps the exact plan-spec/task `requires` fields. Those page edges are placement/context declarations; item proofs below use only explicitly declared item-level suppliers. The design's specific instruction to reuse the NA-13 positive-measure Gaussian interface is followed by using its inspected published exactness and Hermite-remainder items. The Clenshaw–Curtis page is retained as a required page context; no item proof depends on one of its claims. `composite-quadrature-rules` is also published, but no scoped claim consumes it.

There is a second, item-interface conflict between the plan-spec QUAD-SING description, which requires reuse of the NA-13 orthogonal-polynomial interface, and the later paragraph of the older linear audit saying no external canonical item is consumed and holding Jacobi facts/product remainder local. I follow plan-spec: the batch constructs the specialized Jacobi density measure, moments/support, rule definition and well-definedness, and proves the endpoint transformations, generic tensor-product derivative bound, and Duffy-weighted corollary locally; it reuses the inspected canonical positive-measure exactness and Hermite-remainder theorem for the general orthogonal-polynomial interface. The older audit's local obligations are retained for the specialized Jacobi and product-rule claims rather than used to duplicate the canonical NA-13 interface.

The published supplier bodies were inspected directly. `def-gauss-quadrature-rule`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, and `thm-gauss-hermite-mean-value-remainder` provide the exact positive-measure hypotheses, the $2n-1$ exactness conclusion, and the $2n$ derivative remainder used here. The Clenshaw–Curtis page summary and the actual Euler–Maclaurin and Peano-kernel item bodies were inspected; their smooth finite-interval hypotheses are not substituted for the strip theorem authored locally.

## Inventory and item levels

The A-page inventory is the 23 rows in `batch-26.pages.json`. Local suppliers are authored before their consumers. Levels are recomputed from current item `deps`; only suppliers in this batch count toward the level, while published suppliers remain external context.

| Level | Items |
|---:|---|
| 0 | `lem-real-power-improper-integral`, `lem-log-power-regularity-after-endpoint-substitution`, `alg-double-exponential-trapezoid`, `thm-analytic-strip-trapezoid-error`, `lem-double-exponential-truncated-tail-bound`, `lem-c1-divided-difference-extends-continuously`, `def-duffy-reference-triangle-map`, `thm-gaussian-product-rule-error-bound` |
| 1 | `lem-real-power-lebesgue-integrability`, `thm-double-exponential-transforms-and-integral-identities`, `def-cauchy-principal-value-subtraction`, `lem-duffy-reference-map-jacobian-and-image` |
| 2 | `lem-gauss-jacobi-weight-finite-moment-measure`, `thm-double-exponential-trapezoid-error-bound`, `thm-cauchy-principal-value-subtraction-identity`, `thm-duffy-weak-singularity-transform` |
| 3 | `def-gauss-jacobi-quadrature-rule` |
| 4 | `lem-gauss-jacobi-rule-data-well-defined`, `alg-endpoint-power-regularized-jacobi-quadrature`, `alg-duffy-weighted-product-gauss-quadrature` |
| 5 | `thm-gauss-jacobi-exactness-and-derivative-error` |
| 6 | `thm-endpoint-regularized-jacobi-error`, `cor-duffy-weighted-product-gauss-error` |

The A page has 23 items. The four B-page examples consume A-page items at levels 3, 3, 7, and 7 respectively. No same-run batch edge is added; the actual suppliers named in the page `requires` fields are published pages, not in-run batches.

## Axiom branch

The proof of the improper power integral, logarithmic regularization, analytic-strip trapezoid estimate, principal-value identity, Duffy map/Jacobian, and generic product-rule error is choice-free. Constructing the Jacobi weight as a Lebesgue-density measure uses the library's declared Countable Choice branch for Lebesgue measure and measure extension. The Jacobi data, endpoint algorithm/error, and Duffy weighted-product algorithm/error state and carry `def-countable-choice`; no item assumes full AC. The Gaussian exactness/remainder interface itself is choice-free once its measure datum is supplied.

## Cross-batch and supplier record

See `batch-26.cross-batch-dependencies.json`. The two direct page requirements are verified against current published page/item bodies. The narrative-only NA-12 interface is recorded separately as not used by any batch-26 proof. No unavailable supplier excerpt is quoted, and no dependent claim is omitted.

## Source reading and harvest

Full relevant source text was inspected for:

- Trefethen and Weideman, *The Exponentially Convergent Trapezoidal Rule*, §§5.1, 6, 14: strip analyticity hypotheses and contour-residue argument, discretization-versus-truncation split, tanh–sinh mapping, principal-value subtraction note, and the warning that convergence claims require specific hypotheses.
- Christopher J. Bishop, *The Riemann Mapping Theorem* lecture notes, Chapter 3 §3 (Gauss–Jacobi quadrature): Lagrange weights, polynomial division/orthogonality exactness, the mean-value error form, Jacobi weights, and the displayed Gaussian error constant.
- Imperial College finite-element course notes, §1.6, equations (1.11)–(1.13): tensor-product rule, square-to-triangle Duffy map, Jacobian weight, and the resulting polynomial-degree convention.
- J. Lebl, *Basic Analysis I*, §5.4.1–5.4.2: logarithm/exponential inverse conventions, real powers, logarithm growth, and exponential limits used in the choice-free endpoint limit argument.

The Imperial notes use the common simplex map $F(u,v)=(u,(1-u)v)$. The locally defined $D(r,s)=(r,rs)$ is the same square-to-triangle construction after $u=1-r$ and the target reflection $(X,Y)\mapsto(1-X,Y)$; the reflection has absolute determinant one, so the Jacobian factor remains $r$. The source supports the map/Jacobian method without replacing the local coordinate proof.

Every harvested heading/result and its item disposition is listed in `batch-26.coverage.json`. `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-26.coverage.json --stamp` verified and stamped all four full-text sources (4/4 verified, 4 newly stamped, zero documented drops). No uninspected Duffy article or source is cited.

The Gaussian-on-the-line B example applies the planned sinh–sinh map and proves a double-exponential real-axis tail. Direct inspection of its complex extension shows that every nonzero horizontal line contains a sequence along which the transformed integrand grows without bound. It therefore does not meet the analytic-strip theorem's uniform exponential-decay hypothesis and receives only a tail certificate; no total error estimate is claimed for that example. The general finite-rule theorem remains conditional on both independent hypotheses, as required by the design.

## Runtime observation

At 2026-10-17T12:00Z, the on-disk `.autopilot/numerical-analysis-remaining-71-2026-10-17/status.md` and `state.json` still show the run `running` at `1-scaffold`; only 6 of 71 authoring units are reported covered and other units remain live. The status artifact requires owner repair/recertification before transition and reports an unrelated missing unit prerequisite, `lem-sectorial-stirling-explicit-remainder-bound`. The latest supervision checkpoint also records live writers and unresolved construction work in other batches. The most recent inspected `git log` entry is `597c668612`, an owner/controller change; no RESUME file was treated as live status. Batch 26's 27 item records are current and ready, but its work does not close the run or clear those owner holds. Engine state, shared plans, verdicts, and other batches were left untouched.

## Scoped checks and readiness

- The batch-scoped item dependency calculation passes for 27 items, maximum level 7, with no local cycles. The A items range from level 0 through level 6; B examples are at levels 3, 3, 7, and 7. `node tools/depcheck.mjs --items-file …` passes for all 27 selected items and their prerequisite closure: zero errors and warnings.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-26.proof-contracts.json --strict` passes for 27/27 items. The proof-layout scan passes for 27 items and 67 numbered steps with zero defects.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-26.coverage.json --stamp` confirms 4/4 fetch-verified sources and zero documented drops. All four were newly stamped in the initial harvest; the final run verified the existing stamps and added none.
- `step1-decisions.mjs` has current `ready` records for 27/27 batch-26 items, each with its direct dependencies and proof/placement evidence. A read-only check finds zero batch-26 items outstanding; the overall run remains open with other work outstanding.
- Whole-run `item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` does not pass: 77 other pages have empty scaffold inventories, and `ex-ewald-source-collision-field-singularity` has a stale level label (4 recorded, 1 computed). Whole-run proof-contract coverage also stops at missing frontier item `thm-ewald-pme-reciprocal-energy-force-error-bound`. These are outside batch 26 and were not edited.
