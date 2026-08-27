# frontier-21 · Alpha group `a` · Step 3 recheck

Checks run on Thursday, August 27, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-21 --group a` -> `scope-decisions: a: 29 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-21 --group a` -> `scope-decisions: 29 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-1.coverage.json research/frontier-21-batch-5.coverage.json research/frontier-21-batch-9.coverage.json --require-destination` -> `coverage-checklist: 4 page(s), 150 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-9.pages.json` -> `content-policy: 163 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-1.coverage.json` -> `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-5.coverage.json` -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json` -> `source-fetch-check: 7/7 source(s) fetch-verified`

## Dispositions

1. `subgroups-of-free-groups-and-schreier-rewriting` / finding `B1-1`: **closed**.
   The manifest repair is still present on current bytes. `lem-spanning-trees-and-schreier-systems-correspond` still uses the local rooted-spanning-tree strategy and depends only on `def-schreier-transversal-and-schreier-system` and `lem-schreier-coset-graph-is-connected-and-deterministic`, with no dependency on later `def-spanning-tree`. `thm-nielsen-schreier-with-an-explicit-basis` still carries the explicit choice-boundary title and still depends on `def-axiom-of-choice` and `def-countable-choice`. That matches the GT-5 design's item-4/item-11 seam, so no further scaffold edit is owed.

2. `amenable-groups-and-folner-criteria` / finding `B1-2`: **closed**.
   The pushback remains correct on current bytes. The live GT-13 plan still includes subgroup amenability, the countable Folner-sequence route, and quasi-isometry invariance in the A-page closure, while the current coverage row for `Proposition 16.76, extracting Folner sequences for subgroups from ambient Folner sequences` still resolves to `owner-decision` with the same reason. After refresh and check, the scope ledger remains `28` `stands` rows and `1` `owner-decision` row, and no exact later page id has appeared for this stronger ambient-to-subgroup extraction statement.

3. `the-group-algebra-and-representations` / finding `none issued`: **closed**.
   The batch-5 no-fix note is still honest on current bytes. The manifest still carries the same 24-item A page and 11-item B companion, `coverage-checklist` is clean, and `source-fetch-check` still reports `2/2 source(s) fetch-verified`. The refreshed scope-decision ledger likewise keeps the RT-1 declines resolved as later RT-2 / RT-4 destinations or true out-of-scope exclusions, so no hidden manifest or coverage repair surfaced behind the earlier sufficiency verdict.

4. `abelian-categories` / finding `B9-1`: **closed**.
   The prerequisite repair is still present on current bytes. The A-page manifest still requires exactly `preadditive-and-additive-categories-and-biproducts-examples`, `localisation-of-modules-and-support`, and `uniform-spaces`. Those added pages are still genuinely spent by the current route: the B page still uses `def-topological-group` in `cex-topological-abelian-groups-are-additive-and-not-abelian`, and `thm-localisation-of-modules-is-exact` in `ex-an-exact-functor-between-module-categories`. The coverage file also still records `Lemma 12.5.15` as deferred to `exactness-and-the-member-calculus`, `Lemma 12.5.17` as deferred to `the-diagram-lemmas-in-an-abelian-category`, `Theorem 7.15` as out of scope, and the Grothendieck/Barr recovery note now names the active nLab URL. No further manifest-route change is owed.

## Outcome

All four owned A pages remain closed on the current bytes:

- `subgroups-of-free-groups-and-schreier-rewriting` -> `sufficient`
- `amenable-groups-and-folner-criteria` -> `sufficient`
- `the-group-algebra-and-representations` -> `sufficient`
- `abelian-categories` -> `sufficient`

No blocker remains for group `a` Step-3 scaffold closure.
