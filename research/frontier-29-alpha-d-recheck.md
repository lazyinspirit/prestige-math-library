# frontier-29 · Alpha group `d` · Step 3 recheck

Checks run against the current bytes on Wednesday, September 2, 2026
(Australia/Sydney local time):

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group d` -> `scope-decisions: d: 28 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group d` -> `scope-decisions: 28 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-11.coverage.json research/frontier-29-batch-12.coverage.json research/frontier-29-batch-17.coverage.json --require-destination` -> `coverage-checklist: 3 page(s), 139 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-11.pages.json research/frontier-29-batch-12.pages.json research/frontier-29-batch-17.pages.json` -> `content-policy: 114 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-12.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-17.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends with `OK` and only the standing repository-wide `redundant-prereq` advisories plus the standard note that `643` planned pages still have no item list

I re-read the current:

- `research/frontier-29-alpha-d-step3-scaffold-review.md`
- `research/frontier-29-batch-11.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-12.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-17.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-11.pages.json`
- `research/frontier-29-batch-12.pages.json`
- `research/frontier-29-batch-17.pages.json`
- `research/frontier-29-batch-17.coverage.json`
- `research/plan-differential-topology-track.md`
- `research/plan-spec.json`

## Dispositions

1. `derived-functors` / finding `none issued`: **closed**.
   The batch-11 Step-3 fix-pass note is accurate on the current bytes. The stable group-`d` review still issues no `D11-` finding, the live manifest still carries the same HA-6 pair, and the focused coverage, content-policy, source-fetch, and plan checks above show no new item-cap, unresolved-id, closure, or destination defect. The refreshed scope ledger leaves batch `11` with its same `11` current decline rows, all resolved as `stands`, so the batch-11 no-op pushback remains justified.

2. `simplicial-complexes-and-simplicial-homology` / finding `none issued`: **closed**.
   The batch-12 Step-3 fix-pass note is accurate on the current bytes. The stable group-`d` review still issues no `D12-` finding, the live manifest still carries the same AT-1 pair at `30` A-page items and `9` B-page items, and the exact deferred destinations and out-of-scope exclusions remain compatible with the current plan and coverage. No new defect appears in the focused checks, so the batch-12 no-change pushback stands.

3. `morse-critical-points-hessians-and-indices` / finding `D17-1`: **closed**.
   The stable review was correct on the earlier scaffold bytes, but the current bytes now close the defect. `research/frontier-29-batch-17.pages.json` carries the added local interface items `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian` and `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`, and `lem-critical-hessian-agrees-with-the-levi-civita-hessian` now depends on them. `research/frontier-29-batch-17.coverage.json` also harvests Cohen's Definition `3.26`, Definition `3.27`, Lemma `3.33`, and Theorem `3.34` as explicit included carriers for that bridge. This is a minimal local repair that preserves the DT-1 design's item `4` rather than deleting or renaming it, and the current plan validation remains clean. On current bytes, the Levi-Civita / covariant-Hessian interface is no longer missing, so `D17-1` is closed and the pair is now sufficient.

4. Group `d` scope decisions: **closed**.
   Refresh on Wednesday, September 2, 2026 returned `28 decline(s), 0 pending`, so no row needed new resolution. The follow-up check passed with `28 current decline(s), 0 error(s)`, and the live scope ledger now resolves all owned rows as `stands`: `11` on batch `11`, `12` on batch `12`, and `5` on batch `17`. The batch-17 count is now `5` rather than the stable review's earlier `6` because the former broader Cohen `3.6` decline is no longer present after the fix-pass harvest promoted the needed Levi-Civita carriers into explicit included content.

## Outcome

The current-byte Step-3 verdicts for group `d` are now:

- `derived-functors` -> `sufficient`
- `simplicial-complexes-and-simplicial-homology` -> `sufficient`
- `morse-critical-points-hessians-and-indices` -> `sufficient`
