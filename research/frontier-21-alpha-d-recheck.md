# frontier-21 · Alpha group `d` · Step 3 recheck

Checks run on Thursday, August 27, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-21 --group d` -> `scope-decisions: d: 17 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-21 --group d` -> `scope-decisions: 17 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-6.coverage.json research/frontier-21-batch-10.coverage.json --require-destination` -> `coverage-checklist: 4 page(s), 93 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-6.pages.json research/frontier-21-batch-10.pages.json` -> `content-policy: 97 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-6.coverage.json` -> `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json` -> `source-fetch-check: 9/9 source(s) fetch-verified`

## Dispositions

1. `integer-partitions-and-the-twelvefold-way` / finding `none issued`: **closed**.
   The batch-6 `Step-3 fix pass` pushback is accurate on current bytes. `research/frontier-21-alpha-d-step3-scaffold-review.md` still marks the pair `sufficient`, `research/frontier-21-batch-6.pages.json` still carries the same 21-item A route and 15-item B companion, and the three live page-201 decline rows still refresh/check as `stands` in `research/frontier-21-alpha-d-scope-decisions.json`. The current coverage remains the same breadth-complete Hulpke/Melczer/Grinberg/Lin source set, with all `9/9` sources fetch-verified, so no manifest or coverage repair is owed.

2. `counting-up-to-symmetry-burnside-and-polya` / finding `none issued`: **closed**.
   The batch-6 `Step-3 fix pass` pushback is also accurate for page `205`. The manifest still carries the same 20-item A route and 12-item B companion, the corrected CB-10 cycle-index and Pólya route remains present on current disk, and the current source set still includes the qualifying textbook/lecture-note backing Alpha cited in review. No new page-205 scope defect appeared on refresh, and no hidden scaffold mutation is missing behind the earlier sufficiency verdict.

3. `pure-pairs-forests-and-path-antipath-classes` / finding `B10-1`: **closed**.
   The batch-10 `Step-3 fix pass` is now a completed repair on current bytes. `research/frontier-21-batch-10.pages.json` still carries the same 14-item A route and 4-item B companion, while `research/frontier-21-batch-10.coverage.json` now lists page `409` with six sources: one `survey`, one qualifying `lecture-notes` treatment (Tung H. Nguyen, *Notes on Recent Work on the Erdős-Hajnal Conjecture*), and four supporting `paper` sources. The Nguyen row harvests Exercise `1.1` into the cograph bridge already on page `409`, and defers Theorems `2.2`, `2.5`, and `3.4` to `classical-and-loglog-erdos-hajnal-bounds`; after refresh, those three new decline rows now stand in `research/frontier-21-alpha-d-scope-decisions.json`, so no scope row remains pending. The pair now satisfies the Step-3 source-form rule of two independent treatments with at least one textbook/monograph/full lecture-note source with harvestable headings, and `source-fetch-check` reports `9/9` sources fetch-verified for the batch-10 coverage file.

4. `quotient-blockades-and-mixing-relations` / finding `none issued`: **closed**.
   The review's `sufficient` verdict still matches the current bytes. `research/frontier-21-batch-10.pages.json` still carries the same 7-item A route and 4-item B companion, and the live page-435 decline rows still refresh/check as `stands` in `research/frontier-21-alpha-d-scope-decisions.json`. The qualifying-form source requirement remains satisfied here by Nguyen's lecture notes plus the supporting papers, and `source-fetch-check` now reports `9/9` sources fetch-verified for the full batch-10 coverage file.

## Outcome

The current-byte Step-3 verdicts for group `d` are now:

- `integer-partitions-and-the-twelvefold-way` -> `sufficient`
- `counting-up-to-symmetry-burnside-and-polya` -> `sufficient`
- `pure-pairs-forests-and-path-antipath-classes` -> `sufficient`
- `quotient-blockades-and-mixing-relations` -> `sufficient`

`research/frontier-21-alpha-d-step3-verdicts.json` is updated to match this verified state.
