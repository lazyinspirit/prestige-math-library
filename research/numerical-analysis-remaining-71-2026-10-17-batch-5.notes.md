# Batch 5 authoring notes — Shape preserving piecewise polynomial interpolation

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch level: 1, requiring batch 3  
Scheduling input SHA-256: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`

## Plan reconciliation

The APP-SHAPE scope, warnings, and proof route in `plan-numerical-linear-track.md` L702–744 agree with the matching `plan-spec.json` entry: Hermite monotonicity for normalized slopes in `[0,3]^2`, finite PCHIP slope selection including flat/sign-change/endpoint branches, and Bernstein control-value positivity. The four local examples cover natural-spline undershoot on nonnegative data, flat monotone data, order loss at a smooth extremum, and the distinction between sampled values and Bernstein controls.

The design section also lists a same-frontier edge `NA-10 → polynomial-interpolation-and-remainder`; the current plan-spec and assigned manifest list only `spline-evaluation-and-interpolation-algorithms` as APP-SHAPE's page prerequisite. Following the current plan-spec/task, the batch manifest retains only the latter edge. The design edge is recorded here as a conflict; no item dependency or shared-plan change was invented.

## Inventory and item levels

The batch manifest now contains 11 A-page items and 4 B-page examples. Item levels are computed from `deps` whose suppliers are in this run; published suppliers do not raise an in-run level. `justified_by` on the PCHIP algorithm is kept separate from logical `deps` as required for algorithm well-definedness.

| Level | Items |
|---:|---|
| 0 | `def-piecewise-cubic-hermite-interpolant`, `def-piecewise-bernstein-representation` |
| 1 | `thm-piecewise-cubic-hermite-interpolant-properties`, `thm-hermite-monotonicity-for-normalized-slopes-in-square`, `alg-pchip-slope-selection`, `thm-bernstein-convex-hull-and-positivity` |
| 2 | `lem-pchip-slope-selection-well-defined` |
| 3 | `thm-pchip-normalized-slopes-in-square`, `lem-pchip-slopes-second-order-uniform-grid` |
| 4 | `thm-pchip-shape-preserving-no-overshoot`, `thm-pchip-third-order-away-from-extrema` |
| 2 (B) | `ex-positive-endpoint-samples-negative-between` |
| 5 (B) | `ex-natural-cubic-spline-undershoots-nonnegative-table`, `ex-pchip-flat-monotone-data`, `ex-pchip-limiter-second-order-at-smooth-extremum` |

## Supplier inspection and unresolved page edge

The exact required cross-batch page ID is `spline-evaluation-and-interpolation-algorithms` (batch 3). Its current manifest contains 12 A-page items, every listed item carrier exists, and the library page carrier is present. Its declared page prerequisites are `finite-precision-direct-factorizations`, `polynomial-interpolation-and-remainder`, and `splines-series-and-approximation-rates`; all three actual page carriers are published and present. The complete current APP-SPLINE page and all 12 listed item bodies and proofs were inspected, along with the relevant published spline suppliers. No APP-SPLINE proof excerpt is used as a fact in APP-SHAPE: the local natural-spline example uses the published `def-natural-cubic-spline` and verifies its displayed function directly.

The page-level edge remains open because the actual supplier body has unresolved checks. In `lem-b-spline-basis-refinement-under-single-knot-insertion`, proof step 2.1 says three coefficient triples agree “by substituting ... then cross-multiplying,” but it does not display or derive those three identities. This leaves the induction step unauditable, and `thm-single-new-knot-insertion-preserves-b-spline-curve` relies on that lemma. Separately, the APP-SPLINE page itself states that its natural-spline residual estimate is not a floating-point error certificate for a tridiagonal factor/solve routine and that this supplier interface remains unresolved. The published `finite-precision-direct-factorizations` page has no natural-cubic tridiagonal factor/solve algorithm or corresponding successful-call residual theorem. This affects the computational natural-spline forward-error interface on APP-SPLINE; it is not used in the locally proved PCHIP or Bernstein claims here. Record these exact checks for owner/cross-batch reconciliation; do not treat the APP-SPLINE bodies as accepted excerpts. The page-level edge is open in `numerical-analysis-remaining-71-2026-10-17-batch-5.cross-batch-dependencies.json`.

The published `def-natural-cubic-spline` carrier was read in full. Its definition requires a C² piecewise cubic with zero second derivative at the first and last knot. The natural-spline example verifies these conditions directly for its explicit three-piece function; it does not rely on an unavailable uniqueness theorem or on APP-SPLINE. The published calculus dependencies used by the local accuracy proofs were also read in full: `cor-mean-value-theorem`, `thm-intermediate-value`, `lem-taylor-integral-remainder`, `cor-boundedness-theorem-r`, `lem-derivative-algebra-and-chain-rules`, and `def-continuity-and-derivative-on-real-interval`. The Bernstein proof's published inputs `thm-binomial-theorem`, `def-binomial-coefficient`, `def-canonical-natural`, `lem-nat-trichotomy`, `lem-of-naturals-positive`, `def-integer-power`, `def-finite-sum`, `lem-finite-sum-laws`, `lem-finite-set-has-max`, and `def-max-min` were inspected. No Choice axiom is used.

All 15 Step-1 records are escalated. Each records its actual item dependencies and the exact page-level APP-SPLINE supplier checks above; no record claims independent approval or acceptance.

After those escalations were written, the final mathematical reread corrected the endpoint derivative data in `thm-piecewise-cubic-hermite-interpolant-properties` and added the integer-power definition to the nonnegative-weight step and contract of `thm-bernstein-convex-hull-and-positivity`. The full scoped checks below passed on the corrected files. The escalation records were not overwritten; their stored hashes predate these final local proof edits, but the decisions remain escalated and no `ready` record is claimed.

## Source review

The four unique A-page sources and their item-by-item dispositions are recorded in the batch coverage file. The examples page reuses those same inspected source records with example-specific dispositions; it adds no claim of a second retrieval. Full-text reading was completed before authoring: the complete five-page Fritsch–Butland paper, the complete SciPy PCHIP Notes page, de Boor's Chapter IV pages 39–40 in the full-text book, and the relevant Bernstein definition and coefficient-bound portions of Farouki's complete 47-page PDF. The SciPy page was used to cross-check the exact interior PCHIP weights because equation glyphs in the Fritsch–Butland PDF text extraction are imperfect. The endpoint formula and every general claim are proved locally. One searched Fritsch–Carlson mirror returned an unsupported `application/octet-stream` response in the web reader and was not retained; usable independent sources were already located, so no claim depends on that mirror.

The initial `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-5.coverage.json --stamp --timeout-sec 90` fetched and stamped all 4 unique sources, with 4/4 resolved and 0 drops. After reusing those records on the examples page, the final stamping check passed for 8/8 source entries, 0 newly stamped, 8/8 resolved and 0 drops.

## Run state observed

The native status command reported the run as running at `2026-10-17T12:05:31.776Z`, with no worker in flight. Stage `1-scaffold` had 8/71 batches covered, native refresh pending for batches 3 and 52, and an owner-repair/recertification hold recorded in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`; these are outside batch 5. This batch did not change engine state or other batches.

## Scoped checks and handoff

- `precheck.mts` on the 15 explicit item files: 12 proof-bearing items passed; 2 definitions and 1 algorithm were not applicable; 0 failures.
- Strict proof contracts: 15/15 checked, no errors or warnings. Proof steps were placed in dependency phases and contract step references were updated to match.
- `proof-layout.mjs` on the 15 explicit items: 39 steps, 0 defects.
- `rendercheck.mjs` on the 15 items and 2 page carriers: 17 checked, no errors or warnings.
- `content-policy.mjs` on the batch manifest: 15 items, 0 errors or warnings.
- `coverage-checklist.mjs` on batch-5 coverage: 2 pages, 19 harvested results, 0 errors or warnings. The examples page reuses the inspected sources and records its own mapped example dispositions.
- Focused `depcheck.mjs --items-file /tmp/na-batch5-item-ids.json`: no errors or warnings. Scoped item dependency levels: all 15 items matched their manifest labels (levels 0–5), with no cycles or mismatches.
- Final `source-fetch-check.mjs --stamp`: 8/8 source entries fetch-verified, 0 newly stamped, 8/8 resolved, 0 documented drops.
- The final native Step-1 check confirmed all 15 batch-5 records are `escalated` with their item dependencies and no owner flag. The run-wide check remains open (661 items, 199 ready, 539 work entries); the assigned 15 were all present as escalations.
- The run-wide `item-dependency-levels.mjs check` still fails on unfinished inventories and one stale item level: 78 diagnostics total (77 empty inventories; `ex-ewald-source-collision-field-singularity` declared level 4, computed 1). No batch-5 item mismatch was reported.
- The run-wide `batch-dependency-levels.mjs check` still fails while parsing unrelated `items/lem-ewald-gaussian-poisson-periodization.md:21`: its double-quoted `locator` contains an unescaped `\pi`, and YAML reports `Invalid escape sequence \p`. No other pair's item was changed.
