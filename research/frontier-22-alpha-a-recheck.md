# frontier-22 · Alpha group `a` · Step 3 recheck

Checks run on Friday, August 28, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-22 --group a` -> `scope-decisions: a: 10 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-22 --group a` -> `scope-decisions: 10 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-22-batch-1.coverage.json research/frontier-22-batch-3.coverage.json research/frontier-22-batch-8.coverage.json --require-destination` -> `coverage-checklist: 4 page(s), 105 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-1.pages.json research/frontier-22-batch-3.pages.json research/frontier-22-batch-8.pages.json` -> `content-policy: 151 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-1.coverage.json` -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-3.coverage.json` -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-8.coverage.json` -> `source-fetch-check: 8/8 source(s) fetch-verified`

## Dispositions

1. `hnn-extensions-and-brittons-lemma` / finding `none issued`: **closed**.
   The batch-1 `Step-3 fix pass` is accurate on current bytes: no manifest or coverage repair is owed for the GT-6 pair. `research/frontier-22-batch-1.pages.json` still carries the same `23`-item A route and `6`-item B companion, `research/frontier-22-alpha-a-scope-decisions.json` still records the Loh Bass-Serre placement row as a live `stands` defer-to-`graphs-of-groups-and-bass-serre-theory`, and the batch-1 coverage ledger remains fetch-verified at `6/6`. The pair still closes at normal forms, Britton reduction, the universal property, and the planned conjugacy spine, with no newly missing prerequisite or coverage defect.

2. `simplicial-trees-and-group-actions` / finding `none issued`: **closed**.
   The same batch-1 fix pass is also accurate for GT-14. The current manifest still carries the `25`-item A route and `6`-item B companion, and the four tree-action decline rows still refresh/check as `stands` with the exact live destination `graphs-of-groups-and-bass-serre-theory` at order `302.011` in `research/plan-spec.json`. The forbidden-dependency audit remains clean, batch-1 coverage is still `6/6` fetch-verified, and no hidden scaffold mutation is missing behind the earlier `sufficient` verdict.

3. `maschkes-theorem-and-complete-reducibility` / finding `B3-1`: **closed**.
   The batch-3 `Step-3 fix pass` correctly reports that the repair was already present on entry. The current manifest still carries the same `19`-item A route and `10`-item B companion, and the forbidden published B-page dependencies named in the original finding remain absent. The four companion examples now depend only on A-page theorems or earlier published A-page facts, `validate-plan` still reports no item-level B-page dependencies or unresolved ids, the three RT-2 out-of-scope rows still stand in `research/frontier-22-alpha-a-scope-decisions.json`, and the batch-3 coverage ledger remains fetch-verified at `2/2`. No further manifest or coverage change is warranted.

4. `subobject-lattices-generators-and-the-grothendieck-axioms` / finding `B8-1`: **closed**.
   The batch-8 `Step-3 fix pass` is also accurate on current bytes. `research/frontier-22-batch-8.pages.json` still carries the same `54`-item A route and `8`-item B companion, the A-page `requires` list still includes both `abelian-categories-examples` and `chains-antichains-sperner-and-dilworth`, and `cex-a-subobject-lattice-need-not-be-distributive` still depends on `def-lattice-distributive-lattice-and-order-ideal` rather than the published B-page counterexample. The two MA-9 out-of-scope rows still stand after refresh/check, and the batch-8 coverage ledger remains fetch-verified at `8/8`. The scaffold stays sufficient without any further repair.

## Outcome

The current-byte Step-3 verdicts for group `a` are:

- `hnn-extensions-and-brittons-lemma` -> `sufficient`
- `simplicial-trees-and-group-actions` -> `sufficient`
- `maschkes-theorem-and-complete-reducibility` -> `sufficient`
- `subobject-lattices-generators-and-the-grothendieck-axioms` -> `sufficient`

`research/frontier-22-alpha-a-step3-verdicts.json` already matches this verified state, so no content change was required there.
