# Phase 2 next 17 — Step 5A group d (batches 5, 6, 7)

Run: `phase-2-next-17`. Group `d` covers batches **5** (items 78, pages 4),
**6** (items 44, pages 2) and **7** (items 127, pages 4): 249 items and 10 page
carriers, 259 adjudication obligations. All were reviewed against the current
authored files, batch manifests, proof contracts and the dependencies each
proof step actually spends.

## Outcome

- 249/249 items and 10/10 pages decided **accepted**; no repairs, no local
  additions, no withdrawals, no escalations.
- `research/phase-2-next-17-alpha-d-5a-decisions.json` —
  `{version: 1, run, group: "d", decisions}` with one decision per obligation,
  `obligation: "authored:<batch>:<id>"`, exact `id`, `route` (`item`/`page`),
  verdict `accepted`, nonempty per-item evidence and `defect_ids: []`. The
  engine's stamplet recorded 259 current carrier hashes
  (`node tools/step5-scope.mjs stamp --run phase-2-next-17 --group d`).
- `risk_review` entries written into the owning batch contracts for every
  high/critical item: 67 (batch 5) + 44 (batch 6) + 102 (batch 7) = 213, each
  `{status: "complete", reviewer: "Step 5A Alpha group d (5a-d)", notes}`, the
  notes recording the tier/signals and the specific checks performed.
- No file under `items/` or `library/` was edited. No batch manifest, page
  order or plan object was changed.

## Review method

Each item was read in full (statement, facts, numbered proof/verification, and
the boundary/choice paragraph) and the page carriers were read against their
manifests. The check performed was the authored argument itself: the inference
steps, the hypotheses actually cited at the step that spends them, the sign
conventions, and the standard boundary cases (empty/zero/one/degenerate/
endpoints/choice). Where an item carries a source locator, the mathematical
statements were checked against the cited location's content as recorded
(Hatcher ch. 2–3 and appendix A, Miller, May, Walton; Datar ch. 15–20, Andrews
§11.5, Steinbauer §2, Martelli ch. 2–3, Peter Park's de Rham note). No new
external source was needed beyond those already recorded: every proof step was
either an internal supplier statement or a standard computation reproducible
from the text, and the two places with subtle citation edge (the horn-block
straightening and geodesic-convex neighbourhoods) verify the cited theorems'
hypotheses explicitly in the text.

Highlights of the deeper checks (all recorded per item in the decisions file):

- **Batch 5** — Alexander–Whitney chain-map cancellation and the inductive
  homotopy recursion; cup Leibniz and graded commutativity via the tensor
  functional and factor-reversal homotopy; relative cup/cap with the small-chain
  quotient comparison (including the `P = 1 - dE - Ed` construction); the
  relative Künneth homotopy algebra `dh + hd = 1 - l eta` and its dual;
  the local coordinate cup-product generator; the orientation local system and
  compact-support classes; cap-duality propagation (balls, Euclidean opens,
  finite ball unions, exhaustions); Poincaré and Poincaré–Lefschetz duality
  five-term windows; collars and the `(-1)^n` boundary convention; Alexander
  duality, Jordan–Brouwer, invariance of domain; the horn-block meridian
  injection and the controlled nested construction; Lefschetz via ENR plus the
  Hopf trace formula.
- **Batch 6** — compact CW images (choice-free), the low-dimensional push-off
  with the finite hyperplane avoidance, cellular approximation and CW
  approximation with canonical extension-data cells, the Hurewicz machinery
  (pinch additivity, relative Hurewicz, cell-layer model), Whitehead,
  homotopy excision, Blakers–Massey and Freudenthal.
- **Batch 7** — simplex Stokes and the integration cochain; the de Rham
  comparison (local, Mayer–Vietoris with explicit lift, connectors, ring
  compatibility via the explicit `h_n` chains); compact supports and
  compactly supported top dimension; compact-support degree and the
  regular-value formula via the local orientation-sign multiplier; then the
  geodesic page: spray and maximal geodesics, exp and normal coordinates,
  variations/Gauss/radial minimality, geodesic convexity, compact velocity
  continuation, Cauchy tails, metric completeness ⇒ geodesic completeness,
  radial reachability, Hopf–Rinow with the proper five-condition cycle, and the
  catalogue of counterexamples.

## Source evidence and local suppliers

No item required a new local definition or lemma: every inference step was
supported by an existing supplier on the same page or a published/earlier
dependency, and the dependency resolution was checked by
`depcheck`/`depsource` (both clean) plus the run's Step-3 author checks. Exact
use sites are recorded in the per-item evidence; the cross-batch consumers are
the sixteen rows of `research/phase-2-next-17-batch-7.cross-batch-dependencies.json`
(15 verified, 1 removed), re-read at their use sites during this review and
unchanged, then re-merged with
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17`.

## Published findings

Recorded in `research/published-consumer-supplier-ledger.md` under
"Step-5a group-d published-supplier impact reconciliation — 2026-09-12" (lock
protocol observed: `mkdir research/.published-consumer-ledger.lock`, re-read,
merge, `rmdir`):

1. No published item is newly confirmed defective by this read; no
   classification-index row changes.
2. The page/status mismatch reported in the batch-5 construction notes is now
   resolved: all fifteen AT-7 supplier item files behind the published page
   `singular-cohomology-and-coefficient-theorems` verify as
   `status: published`, and `depcheck` reports no draft items on published
   pages. Recorded as verified, with no draft ID entering the index and no
   mathematical defect inferred.
3. Advisory citation candidate (not a confirmed defect):
   `ex-mod-two-duality-for-real-projective-space` [F5] restates
   `thm-cellular-homology-computes-singular-homology` without the cited
   theorem's `n >= 0` dimension hypothesis; the item's use is inside that
   hypothesis. No repair required; recorded for the serial lead's awareness.

## Shared-plan and Phase-2 amendments requested

None. No local items were added, no pair/page changed, no order or requirement
edge changed, and no manifest was extended.

## Checks run (this read)

- `node tools/step5-scope.mjs check --run phase-2-next-17 --phase adjudicate
  --batch {5,6,7}` → 78/44/127 items routed, 82/46/131 obligations,
  **0 errors** each.
- `node tools/step5-scope.mjs stamp --run phase-2-next-17 --group d` → 259
  carrier hashes stamped.
- `node tools/merge-proof-contracts.mjs …` then
  `node tools/proof-contract.mjs research/phase-2-next-17-proof-contracts.json
  --strict` → 0 errors (4 pre-existing density warnings).
- `node tools/finite-smoke.mjs …` → 0 errors.
- `node tools/risk-report.mjs research/phase-2-next-17-proof-contracts.json
  --require-reviewed` → 0 missing risk reviews in batches 5/6/7; the 150
  remaining missing reviews belong to the other Alpha groups' batches.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`
  → pass, no contradicted or template boundaries. The only group-d row is the
  existing owner-upheld `def-energy-of-a-piecewise-smooth-curve` empty-case row
  (upheld by `codex-owner-operator`), preserved unchanged.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → pass, with the
  advisory candidate above.
- `node tools/gate-liveness.mjs …` → live (proof-contract 556 items,
  coverage-checklist 692 results, precheck 14130 items).
- `node tools/depcheck.mjs` → OK, no cycles, all references resolve, no draft
  items on published pages; `node tools/depsource.mjs` → 0 unresolved.

## Blockers

None. No unresolved mathematics, no unmet prerequisite, no owner decision
required by this group.

## Limits of this read

This is a group-level authored-content review, not an independent judge or a
whole-closure certification. The per-item evidence states the depth of each
check honestly; the review is confined to the authored groups 5–7 items and
pages, and does not certify published consumers beyond the findings above.
