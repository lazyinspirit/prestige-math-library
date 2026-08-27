# frontier-21 · Alpha group `c` · Step 3 recheck

Checks run on Thursday, August 27, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-21 --group c` -> after resolving the new deferred SC-4 row, `scope-decisions: c: 18 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-21 --group c` -> `scope-decisions: 18 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-4.coverage.json --require-destination` -> `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-7.coverage.json --require-destination` -> `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination` -> `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 1 warning(s)` with the already-reviewed `coverage-low-yield [the-argument-principle-and-rouche]`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-4.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json` -> `content-policy: 129 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-4.coverage.json` -> `source-fetch-check: 5/6 source(s) fetch-verified, 1 FAILED` because the newly added Geck arXiv PDF is still unstamped on disk
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json` -> `source-fetch-check: 2/3 source(s) fetch-verified, 1 FAILED` because the newly added Hunter notes PDF is still unstamped on disk
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-8.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`

## Dispositions

1. `the-spectral-theorem-and-singular-value-decomposition` / finding `C4-1`: **closed**.
   The current manifest still restores the designed perfect-field theorem `thm-additive-jordan-chevalley-decomposition`, with the algebraic-closure and automorphism dependencies that make the descent step explicit. The current coverage file still backs that exact theorem with Geck Proposition 3 plus Theorem 7 and keeps Yoo Proposition 6.1 only as split-case inline support. `coverage-checklist`, `content-policy`, and `validate-plan` all pass on the repaired bytes, so the Step-3 scaffold defect is fixed. The remaining Geck `source-fetch-check` failure is an unstamped transport receipt on disk, not a reversion to the old split-only surrogate.

2. `the-lebesgue-and-riemann-integrals-compared` / finding `C7-1`: **closed**.
   The current B-page manifest now includes `fs-every-riemann-integrable-function-is-borel-measurable`, and its strategy still uses the published measurable-non-Borel Cantor-subset route together with the Riemann integrability criterion to give the exact MT-9 witness Alpha requested. The current coverage file includes Hunter Example 2.22 for that false-statement item, and the batch-local coverage/content-policy/plan checks are clean. The remaining Hunter `source-fetch-check` failure is the expected unstamped on-disk receipt for the new source, not a missing counterexample or manifest gap.

3. `the-argument-principle-and-rouche` / finding `none issued`: **closed**.
   The pair remains sufficient on current bytes. The A page is still the 16-item CA-10 route, the B page is still the 11-item companion the review accepted, the batch-8 scope decisions now refresh/check with all decline rows resolved, and the only live warning is the same `coverage-low-yield` advisory already discharged by Alpha-confirmed out-of-scope decisions. No new manifest, coverage, or plan defect surfaced.

4. `domains-of-holomorphy-and-pseudoconvexity` / finding `C8-1`: **closed**.
   The current manifest still omits `cor-plane-domains-are-domains-of-holomorphy`, leaving the A page at 27 items after the authorized rescope. The current coverage file still changes Lebl `Exercise 2.6.2.` from a local inclusion to a `deferred` row aimed at `mittag-leffler-and-runges-theorem`, and the refreshed scope ledger now records that new row as `stands`. `coverage-checklist`, `content-policy`, `validate-plan`, and `source-fetch-check` all support the repaired SC-4 state, so the old plane-domain blocker is closed.

## Outcome

All four owned pairs are now closed on the current bytes:

- `the-spectral-theorem-and-singular-value-decomposition` -> `sufficient`
- `the-lebesgue-and-riemann-integrals-compared` -> `sufficient`
- `the-argument-principle-and-rouche` -> `sufficient`
- `domains-of-holomorphy-and-pseudoconvexity` -> `sufficient`

`research/frontier-21-alpha-c-step3-verdicts.json` was updated to match this verified state.
