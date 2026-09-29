# Frontier-36-complete Step 5b: outside-workflow plan-gate diagnosis

**Snapshot:** `research/frontier-36-complete-step5-blockers.json` at `2026-09-29T09:48:22.340Z` UTC, stage `5b-cross`.
**Scope:** Keep the full 60 selected page IDs (30 A/B pairs). This audit proposes no scope changes or new pages.

## Finding

`validate-plan` reports 52 unique `undeclared-prereq` page edges: 25 consumer pages and 33 supplier pages. All 25 consumers are among the selected 60. Fifty edges target 32 distinct supplier pages outside this run’s selected set; every one of those suppliers is already published on disk. The only two edges whose supplier is selected both target the draft page `zariski-tangent-spaces-regular-points-smoothness-and-bertini`, from the Riemann-surfaces A and B pages.

There is one shared infrastructure cause: `validate-plan` check 15 (introduced in commit `7ff6c87a64`, 2026-07-25) checks every page edge induced by an item dependency against the consumer’s declared `requires` closure, without considering whether the supplier page already exists on disk or is published. `splice-plan` has a later, explicit policy (lines 193–200) that a dependency to an on-disk page is licensed by reading order and does not need a `requires` entry. Thus the 50 published-page edges pass that splice policy but fail the current full-plan validator. The two Zariski edges are in-run draft edges, for which declaring the page prerequisite is also the useful ordering signal.

This is a plan/validator semantics mismatch, not a new Step-5b item mutation. The 30 `post-5a` hash snapshots were written around `2026-09-29 09:28:48–09:28:52 UTC`, about 19.5 minutes before the blocker snapshot. All affected consumer page file hashes and page-manifest metadata hashes still match those post-5a snapshots (25/25 and 25/25). The 76 unique source-item file hashes and item-manifest-entry hashes also match (76/76 each). Therefore the rejected dependencies and missing page metadata were already present after 5a and before the 5b gate.

## Minimal metadata repair for the current validator

If the owner retains the item dependencies and wants the current `validate-plan` check green without changing validator behavior, the attached JSON lists 33 direct `requires` additions on 20 selected consumer pages. Their transitive closure covers all 52 failed edges; A-page additions cover companion B pages through each B page’s existing requirement on A. The Riemann-surfaces A page adds Zariski once, which also covers the B edge. Simulating all 33 additions against the current plan gives zero uncovered edges, zero cycles, and zero additions that point to the same or a later plan order.

Apply each row to both `research/plan-spec.json` and the listed `research/frontier-36-complete-batch-N.pages.json`. The Markdown library page files have no `requires` field. Verify synchronization with `node tools/splice-plan.mjs --run frontier-36-complete --verify`, then rerun the rejecting gate with `node tools/validate-plan.mjs research/plan-spec.json`.

The additions would make the existing `redundant-prereq` warning count rise from 4122 to 4159 (+37), which remains non-blocking. Do not expand this repair into unrelated prerequisite pruning solely to remove soft warnings. The 5b blocker artifact reports seven failed checks overall, so clearing `validate-plan` alone will not clear the stage.

## Six proposed item-dependency removals

The candidate removals at cross-group indices 198, 263, 493, 496, 515 and 516 map to four page pairs: flat-smooth → finite-proper, cohomology → flat-smooth, cohomology → finite-proper, and smooth-projective → Zariski. None of these page pairs is in the 52-error set; all six edges already land inside their consumer’s current `requires` closure. Removing those item dependencies cannot eliminate any of the 52 validator errors. The JSON records each index, item pair and owning page pair.

## Machine-readable details

[The JSON audit](./frontier-36-complete-5b-outside-plan-gate-requires.json) contains the full 52-row consumer-page → supplier-page grouping (including source item IDs, consumer batch, and supplier selection/status), the 20-row direct `requires` proposal, the six-item-removal cross-check, and simulated closure/order/cycle/hash checks. This audit does not decide whether any other item dependency is mathematically unused; such removal still requires its own proof-use review.
