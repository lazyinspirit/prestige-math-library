# Batch 51 — authoring and reconciliation notes

Run `numerical-optimization-dynamics-2026-10-16`; pair `adaptive-quadrature-and-error-indicators`; date 2026-10-16. All authored carriers remain drafts. The coverage ledger, source excerpts, harvested-result dispositions and fetch stamps are in `research/numerical-optimization-dynamics-2026-10-16-batch-51.coverage.json`.

## Controlling design and conflicts

The controlling design is `research/plan-numerical-linear-track.md` §NA-14 and its incorporated NA-14 contract in `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`. The owner direction routes this category to the linear-track plan. `research/plan-spec.json` and the generated batch manifest agree on the three A-page requirements: `composite-quadrature-rules`, `outward-rounded-interval-and-ball-arithmetic`, and `clenshaw-curtis-and-extrapolation-quadrature`.

The older `research/plan-numerical-analysis-track.md` NA-14 excerpt lists only composite quadrature and describes a certified branch as optional and outside the original promised scope. The controlling linear-track contract retains the owner-approved amendment: a certified integration mode may use caller-supplied value and fourth-derivative enclosures, the exact Simpson remainder theorem, and outward-rounded arithmetic. The `/15` estimator remains non-certified; the exact failure and cancellation examples are retained. No claim transfers trapezoid/Romberg error expansion to Simpson.

`dependency-overrides.json` has no NA-14 entry. It was left unchanged. The assigned manifest contains the complete direct item dependencies. Batch 43 remains a page-level prerequisite; its Romberg items are not imported as item-level proof premises.

The dispatch scheduling input was `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`; the shared batch-level artifact had that input before this batch’s manifest edits. A read-only recomputation after the edits returned batch 51 at level 4 with prerequisites 14, 20 and 43, and digest `7e6c3eaa9a589fe5215cdbd5e0e05d20e7896b165568831410efff7b987dd71b`. The shared artifact was not changed. A later recomputation/check is currently blocked by the unrelated batch 73 carrier `items/alg-adam-update.md:18`, whose unquoted source-title colon makes its YAML invalid. The owner must repair that carrier and refresh the run-wide dependency input after writers drain.

The coverage ledger preserves an older digest, `1abea6443c3532c0d0dd6716027d13701671f13ed52e434cfb52a7b38390868a`, as historical evidence. It is not the dispatch input for this run.

## Inventory and item levels

The batch contains 7 A-page items and 3 B-page examples. The tables show each logical `deps` list and the recomputed in-run `dependency_level`; `justified_by` edges are noted separately because they justify procedure well-definedness rather than raising item levels.

| Item | Level | Direct `deps` |
|---|---:|---|
| `def-adaptive-simpson-refinement-indicator` | 1 | `alg-composite-simpson-rule` |
| `lem-composite-simpson-asymptotic-error-expansion` | 2 | `alg-composite-simpson-rule`, `lem-simpson-panel-peano-kernel`, `def-higher-derivatives-and-smoothness`, `thm-heine-borel-r`, `thm-additivity-over-subintervals`, `thm-heine-cantor-metric`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-monotonicity-of-the-integral`, `thm-linearity-of-the-integral`, `lem-integral-elementary-bounds`, `thm-algebra-of-continuous-functions` |
| `alg-adaptive-simpson-with-finite-depth-and-panel-cap` | 2 | `alg-composite-simpson-rule`, `def-adaptive-simpson-refinement-indicator` |
| `thm-simpson-richardson-error-estimator-asymptotic` | 3 | `def-adaptive-simpson-refinement-indicator`, `lem-composite-simpson-asymptotic-error-expansion`, `def-higher-derivatives-and-smoothness`, `cor-of-reverse-triangle` |
| `thm-adaptive-simpson-cap-termination-and-indicator-budget` | 3 | `alg-adaptive-simpson-with-finite-depth-and-panel-cap`, `def-adaptive-simpson-refinement-indicator` |
| `ex-adaptive-simpson-misses-narrow-feature` | 3 | `alg-adaptive-simpson-with-finite-depth-and-panel-cap`, `def-adaptive-simpson-refinement-indicator`, `thm-algebra-of-continuous-functions`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-monotonicity-of-the-integral`, `alg-composite-simpson-rule`, `thm-additivity-over-subintervals`, `lem-integral-elementary-bounds` |
| `ex-adaptive-simpson-cap-reached` | 3 | `alg-adaptive-simpson-with-finite-depth-and-panel-cap`, `def-adaptive-simpson-refinement-indicator`, `alg-composite-simpson-rule` |
| `ex-adaptive-simpson-leading-error-cancellation` | 4 | `alg-composite-simpson-rule`, `def-adaptive-simpson-refinement-indicator`, `thm-simpson-richardson-error-estimator-asymptotic`, `def-higher-derivatives-and-smoothness`, `thm-ftc-second-part`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `thm-continuous-on-a-rectangle-is-riemann-integrable` |
| `alg-certified-adaptive-simpson` | 5 | `alg-composite-simpson-rule`, `def-higher-derivatives-and-smoothness`, `thm-composite-simpson-error-bound`, `def-intervals-rectangles-and-complex-balls`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound` |
| `thm-certified-adaptive-simpson-enclosure` | 6 | `alg-certified-adaptive-simpson`, `alg-composite-simpson-rule`, `def-higher-derivatives-and-smoothness`, `thm-composite-simpson-error-bound`, `def-intervals-rectangles-and-complex-balls`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `thm-additivity-over-subintervals`, `thm-heine-borel-r`, `thm-extreme-value-r` |

`alg-adaptive-simpson-with-finite-depth-and-panel-cap` has `justified_by: [thm-adaptive-simpson-cap-termination-and-indicator-budget]`; `alg-certified-adaptive-simpson` has `justified_by: [thm-certified-adaptive-simpson-enclosure]`. These results depend on their respective algorithms in the normal property direction. The assigned item closure has no cycles, and all ten item labels match both the item frontmatter and manifest. The A and B page inventories, proof-contract scope, and coverage inventory are ordered by item level.

## Prerequisite inspection and mathematical repairs

Actual batch 20 bodies and proofs inspected: `alg-composite-simpson-rule`, `lem-simpson-panel-peano-kernel`, and `thm-composite-simpson-error-bound`. Their interface is exact-real Simpson on even uniform grids; the local panel kernel has sign and $L^1$ norm $L^5/2880$. At $n=2$, the composite error coefficient reduces to $L^5/2880$.

Actual batch 14 definitions and DAG-soundness proof inspected: finite dyadic intervals, directed rounding, outward-rounded operations, and the finite-expression inclusion result. The certified algorithm uses only finite real intervals and a caller-supplied point-value enclosure and fourth-derivative range enclosure. A false oracle contract cannot be tested from samples; the theorem is conditional on actual soundness. Malformed/non-finite outputs and non-finite operations return failure.

The actual batch 43 page and its Romberg/Peano supplier bodies were inspected. The page remains required context, but no batch 43 item is a logical premise in this pair. Its four stored/computed level mismatches remain owner reconciliation: `thm-na-clenshaw-curtis-interpolation-coefficients` 4/5, `def-na-clenshaw-curtis-quadrature` 5/6, `thm-na-clenshaw-curtis-exactness-and-near-best-error` 6/7, and `ex-na-clenshaw-curtis-integrates-quadratics` 6/7. No batch 43 source was edited.

The proof audit added missing direct dependencies instead of relying on transitive or implicit uses: the composite Simpson definition in the local asymptotic lemma and both Simpson-evaluation examples; integral additivity and the constant-integral bound in the narrow-feature example; and the reverse triangle inequality in the Richardson absolute-value limit. The capped algorithm’s evaluator reports failure when a required node cannot be evaluated, including an unrepresentable midpoint. The cap theorem now separates the direct accepted-leaf case from the recursively accepted case in its induction. The exact polynomial examples and all bound constants remain fully derived in their local proofs.

All arguments are choice-free. The `/15` result is asymptotic only; no finite tolerance guarantee follows from it. A certified result is available only under the explicit regularity, sound-oracle, Simpson-remainder and outward-rounding hypotheses. `finite-smoke` has no registered adaptive-quadrature check; unsupported hand-written check names were removed. The exact rational verifications remain inside the examples’ proofs; the scoped registry check returned zero applicable outcomes.

## Sources and disposition

The coverage file records six authoritative treatments, their exact locators, supported items and harvested-result dispositions:

- Owen, *Monte Carlo Theory, Methods and Examples*, Ch. 7 §7.2, printed pp. 7–8: Simpson formulas/exactness and fourth-derivative bound; base rule details are deferred to batch 20.
- Driscoll–Braun, *Fundamentals of Numerical Computation*, §5.7.1–5.7.3 and Example 5.7.2: embedded indicator, recursive procedure, and tolerance-failure example; relative-plus-absolute stopping is out of scope.
- Driscoll–Braun, §5.6.2–5.6.3, especially (5.6.10)–(5.6.18): Simpson-specific expansion is included; the trapezoid-only expansion, stronger sixth-order correction and node-caching claim are deferred or out of scope.
- Scott, *Numerical Analysis*, 2nd ed., §13.2, Theorem 13.5, printed pp. 223–224: Peano representation and $L^1$ bound, used as inline support for the local proof.
- Kearfott, “Interval Computations: Introduction, Uses, and Resources,” §§1 and 3.3: outward inclusion and verified quadrature.
- Rump, “Verification methods: Rigorous results using floating-point arithmetic,” §4, §8, and §12, Theorem 12.1 and Algorithm 12.2: directed rounding, range enclosures and verified Simpson remainder.

The coverage ledger records a full-text Owen PDF download after an initial browser-PDF parse failure, plus full relevant-section inspection for each treatment. `source-fetch-check --stamp` verified 6/6 sources, 0 newly stamped, 0 documented drops; coverage checklist found 1 page and 16 harvested results with 0 errors/warnings. No `source_resolution` failure record applies. The amendment’s candidate Davis–Rabinowitz and Moore–Kearfott–Cloud texts are not reported as read; the inspected Scott, Kearfott and Rump treatments cover the used proof routes.

## Scoped checks

- Author check: pass. Precheck: 7 proof-bearing items, 0 failing. Rendercheck: 12 assigned item/page files, 0 YAML/math defects. Content policy: 10 items, 0 errors/warnings. Strict proof contracts: 7/7, 0 errors/warnings.
- Proof layout: 10 assigned items, 23 steps, 0 defects.
- Focused depcheck: 10 selected items; prerequisite cycle checks cover 383 items and 41 pages, pass. Forward-reference check: 10 selected items; dependency/forward closure covers 379 items and 44 pages, pass. External-reference check: 10 items, 0 recorded-not-proved items and 0 external fallbacks.
- In-run item dependency recomputation for this batch: levels 1,2,2,3,3,3,3,4,5,6 in the inventory order above; 10/10 labels agree with the item files and manifest, no cycle.
- Coverage checklist: pass. Source fetch: 6/6. Finite-smoke registry: pass with 0 applicable named checks.
- A prior read-only run-level batch recomputation returned level 4 and prerequisites 14,20,43. The shared `batch-dependency-levels.json` was not edited. The latest run-level check cannot recompute because `items/alg-adam-update.md:18` in batch 73 has an unquoted colon in its frontmatter source title; this is outside batch 51 and was not edited.

## Step 1 readiness and run handoff

`node tools/step1-decisions.mjs record` successfully recorded `def-adaptive-simpson-refinement-indicator` as `ready` without `--owner`; its direct dependency is `alg-composite-simpson-rule`. Subsequent attempts for `lem-composite-simpson-asymptotic-error-expansion` and `ex-adaptive-simpson-misses-narrow-feature` fail during run-snapshot validation with `Duplicate item lem-positive-diagonal-map-preserves-closed-convexity`. The duplicate occurs twice in batch 73’s `variance-reduced-finite-sum-and-adaptive-gradient-optimization` page manifest. Because the CLI validates the run snapshot before recording an item, the remaining nine readiness records cannot be produced until the owner resolves the batch-73 duplicate. The first ready record is preserved; no missing record is fabricated or written manually.

The latest on-disk status recomputation at `2026-10-16T03:09:31.337Z` remains `running` at `1-scaffold`, with 53/107 covered, batch 51 still listed as missing, nothing in flight, and the existing owner repair/recertification hold in `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json`. Batch 51’s local mathematical authoring and scoped checks are complete; its native run-stage completion and independent approval remain pending.
