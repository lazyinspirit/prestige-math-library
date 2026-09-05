# frontier-30 · Alpha group `e` · Step 3 scaffold recheck

Date checked: Saturday, September 5, 2026 (Australia/Sydney).

Scope owned by this dispatch: batches `9`, `10`, and `11` only, covering:

- `enriched-categories`
- `delta-functors-and-universality`
- `singular-chains-and-singular-homology`

I re-checked the current disk state against:

- `research/frontier-30-alpha-e-step3-scaffold-review.md`
- `research/frontier-30-batch-9.notes.md`, `research/frontier-30-batch-10.notes.md`, and `research/frontier-30-batch-11.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-9.pages.json`, `research/frontier-30-batch-10.pages.json`, and `research/frontier-30-batch-11.pages.json`
- `research/frontier-30-batch-9.coverage.json`, `research/frontier-30-batch-10.coverage.json`, and `research/frontier-30-batch-11.coverage.json`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-e-scope-decisions.json`
- `research/frontier-30-alpha-e-step3-verdicts.json`

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group e`
  - `scope-decisions: e: 24 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group e`
  - `scope-decisions: 24 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-9.coverage.json research/frontier-30-batch-10.coverage.json research/frontier-30-batch-11.coverage.json`
  - `coverage-checklist: 3 page(s), 182 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-9.pages.json research/frontier-30-batch-10.pages.json research/frontier-30-batch-11.pages.json`
  - `content-policy: 134 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-9.coverage.json`
  - `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json`
  - `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-11.coverage.json`
  - `source-fetch-check: 5/5 source(s) fetch-verified`
- spliced the six owned pages into `/tmp/frontier-30-alpha-e-spliced-plan.json`
- `node tools/validate-plan.mjs /tmp/frontier-30-alpha-e-spliced-plan.json`
  - terminal status: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 704 page(s) with item lists.`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - terminal status: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

## Scope receipt

The refreshed scope ledger is current on disk. No pending row remains after the
refresh.

All `24` current decline rows are now resolved exactly:

- `20` rows are `stands`
- `4` rows are `owner-decision`

Batch totals on current bytes:

- batch `9`: `8` rows = `4` `stands` + `4` `owner-decision`
- batch `10`: `7` rows = `7` `stands`
- batch `11`: `9` rows = `9` `stands`

The one new current row relative to the earlier scaffold review is batch `11`'s
Miller Lecture 16 `Proposition 16.2` row. Its present `stands` resolution is
correct: the repaired counterexample uses the explicit bouquet-of-spheres
calculation and `Theorem 16.3`, not the general skeleton-stability theorem.

## Dispositions

### `enriched-categories`

Disposition: `sufficient`.

Evidence:

- current manifest size is still `43` A-page items and `15` B-page items
- batch `9`'s Step-3 pass correctly records that no alpha finding targeted this
  pair
- the Kelly URL discipline repair is present on current bytes: the live
  same-text Scribd mirror is the active `url`, with the TAC PDF preserved as
  `original_url`
- the `8` current scope rows still resolve exactly as recorded: `4`
  `owner-decision` Kelly seams with no exact current page home, plus `4`
  honest `stands` rows
- source support remains current enough for authoring: `4/4` recorded source
  URLs are fetch-verified
- the fresh owned merged-plan validation ended with the standard `OK` line for
  `704` pages with item lists

Changed scaffold record: none.

### `delta-functors-and-universality`

Disposition: `sufficient`.

Evidence:

- current manifest size is still `34` A-page items and `7` B-page items
- batch `10`'s Step-3 pushback remains exact on current bytes: finding `E11-1`
  was never assigned to this pair, so no scaffold edit was owed here
- the `7` current scope rows still stand exactly: the three Ext-related rows
  still route to `ext-and-balanced-resolutions`, and the four remaining rows
  are still honest out-of-scope omissions for the HA-7 route
- source support remains current enough for authoring: `4/4` recorded source
  URLs are fetch-verified
- the fresh owned merged-plan validation ended with the standard `OK` line for
  `704` pages with item lists

Changed scaffold record: none.

### Finding `E11-1` on `singular-chains-and-singular-homology`

Disposition: fixed and closed; the pair is now `sufficient`.

Evidence:

- current manifest size is `27` A-page items and `8` B-page items
- the original blocker is genuinely repaired on current bytes: the B-page item
  `cex-equal-homology-does-not-imply-homotopy-equivalence` now uses the exact
  witness `T^2` versus `(S^1 vee S^1) vee S^2`
- current coverage now carries the exact same-homology support for that witness:
  May's `5. Some examples: T, K, and RP^n` row for the torus groups and Miller
  Lecture `16` rows, including `Theorem 16.3`, for the wedge-space CW
  computation
- the later scaffold-closure repair is also present on current bytes: the A
  page `singular-chains-and-singular-homology` now declares
  `the-seifert-van-kampen-theorem` in `requires`, so the B-page dependency on
  `cor-seifert-van-kampen-simply-connected-overlap` is inside the declared
  closure
- batch `11` now has `5/5` fetch-verified recorded source URLs
- the fresh owned merged-plan validation ended with the standard `OK` line for
  `704` pages with item lists, so the earlier undeclared-prerequisite failure
  is no longer present

Changed scaffold record: none in this recheck pass.

## Verdict file

`research/frontier-30-alpha-e-step3-verdicts.json` now matches the verified
current bytes:

- `enriched-categories` -> `sufficient`
- `delta-functors-and-universality` -> `sufficient`
- `singular-chains-and-singular-homology` -> `sufficient`
