# frontier-29 · Alpha group `a` · Step 3 recheck

Checks run against the current bytes on Wednesday, September 2, 2026
(Australia/Sydney local time):

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group a` -> `scope-decisions: a: 12 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group a` -> `scope-decisions: 12 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-1.coverage.json research/frontier-29-batch-2.coverage.json research/frontier-29-batch-10.coverage.json --require-destination` -> `coverage-checklist: 5 page(s), 192 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-1.pages.json research/frontier-29-batch-2.pages.json research/frontier-29-batch-10.pages.json` -> `content-policy: 172 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-1.coverage.json` -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-2.coverage.json` -> `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-10.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends with `OK` and only the standing repository-wide `redundant-prereq` advisories plus the standard note that `643` planned pages still have no item list

I re-read the current:

- `research/frontier-29-alpha-a-step3-scaffold-review.md`
- `research/frontier-29-batch-1.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-10.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-1.pages.json`
- `research/frontier-29-batch-2.pages.json`
- `research/frontier-29-batch-10.pages.json`
- `research/frontier-29-batch-1.coverage.json`
- `research/frontier-29-batch-2.coverage.json`
- `research/frontier-29-batch-10.coverage.json`
- `research/frontier-29-alpha-a-scope-decisions.json`
- `research/plan-spec.json`

## Dispositions

1. `group-extensions-complements-and-schur-zassenhaus` / finding `group-extensions-complements-and-schur-zassenhaus`: **closed**.
   The batch-1 pushback remains accurate on the current bytes. The group-`a` scaffold review still marks GT-9 `sufficient`, the live manifest still carries `23` A-page items and `6` B-page items, and the focused checks above show no new closure, destination, or plan defect. No current scope-decision row for GT-9 is pending, so the no-change fix pass still stands.

2. `crossed-homomorphisms-complements-and-first-cohomology` / finding `crossed-homomorphisms-complements-and-first-cohomology`: **closed**.
   The batch-1 pushback remains accurate on the current bytes. GT-21 is still `sufficient` in the scaffold review, the live manifest still carries `22` A-page items and `6` B-page items, and batch-1 coverage/source-fetch validation remains clean. No new scope or destination gap appears in the current coverage or plan.

3. `modular-representations-and-projective-covers` / finding `modular-representations-and-projective-covers`: **closed**.
   The batch-2 fix-pass note is accurate on the current bytes. GT-18 still carries `33` A-page items and `6` B-page items, the deferred Webb `7.4 The Cartan matrix` row still resolves as `stands`, and its destination `brauer-characters-and-decomposition-matrices` remains live in `research/plan-spec.json`. No manifest or coverage repair remains outstanding for this page.

4. `pro-p-groups-and-the-p-adic-integers` / finding `pro-p-groups-and-the-p-adic-integers`: **closed**.
   The batch-2 repair is real and sufficient on the current bytes. GT-17 still carries `25` A-page items and `7` B-page items, batch-2 coverage now records the deferred digit-expansion source at `https://jordanbell.info/LaTeX/mathematics/padicfield/` with destination `pro-p-groups-and-the-p-adic-integers-examples`, and batch-2 source-fetch validation is clean at `7/7`. The scope refresh surfaced this replacement row as the only new pending decision; I resolved it to `stands`, and the follow-up scope check returned `12 current decline(s), 0 error(s)`.

5. `duality-and-rigidity-in-monoidal-categories` / finding `duality-and-rigidity-in-monoidal-categories`: **closed**.
   The batch-10 no-op fix pass remains accurate on the current bytes. MA-16 is still `sufficient` in the scaffold review, the live manifest still carries `37` A-page items and `7` B-page items, batch-10 coverage/source-fetch validation remains clean, and the existing deferred/out-of-scope scope rows still match the live design ceiling and destinations.

6. Group `a` scope decisions: **closed**.
   Refresh on Wednesday, September 2, 2026 initially surfaced one pending GT-17 row created by the repaired Bell `padicfield/` coverage source. That row is now resolved as `stands`, because the repaired source is still an honest B-page deferral and the exact destination `pro-p-groups-and-the-p-adic-integers-examples` remains live in `research/plan-spec.json`. The final scope ledger state is `12` current declines, `0` pending, `0` errors.

## Outcome

The current-byte Step-3 verdicts for group `a` remain:

- `group-extensions-complements-and-schur-zassenhaus` -> `sufficient`
- `crossed-homomorphisms-complements-and-first-cohomology` -> `sufficient`
- `modular-representations-and-projective-covers` -> `sufficient`
- `pro-p-groups-and-the-p-adic-integers` -> `sufficient`
- `duality-and-rigidity-in-monoidal-categories` -> `sufficient`

`research/frontier-29-alpha-a-step3-verdicts.json` already matched this verified
state on current bytes, so no verdict-byte change was required.
