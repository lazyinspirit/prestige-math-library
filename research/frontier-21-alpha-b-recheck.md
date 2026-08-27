# frontier-21 · Alpha group `b` · Step 3 recheck

Checks run on Thursday, August 27, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-21 --group b` -> `scope-decisions: b: 7 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-21 --group b` -> `scope-decisions: 7 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-21-batch-2.coverage.json research/frontier-21-batch-3.coverage.json --require-destination` -> `coverage-checklist: 2 page(s), 91 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json` -> `content-policy: 44 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; only the standing repository-wide `redundant-prereq` advisories remain, and the command ends with `OK — declared page order is acyclic and consistent...`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-2.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-3.coverage.json` -> `source-fetch-check: 5/5 source(s) fetch-verified`

## Dispositions

1. `pell-equations-and-generalized-pell-orbits` / finding `none issued` in the batch-2 `Step-3 fix pass` note: **closed**.
   The pushback is correct on current bytes. `research/frontier-21-alpha-b-step3-scaffold-review.md` still marks the pair `sufficient`, `research/frontier-21-batch-2.pages.json` still carries the same 17-item A route and 9-item B companion, and `research/plan-spec.json` still gives the page-level prerequisite `regular-continued-fractions-and-diophantine-approximation-examples`. No scaffold mutation is owed.

2. `pell-equations-and-generalized-pell-orbits` / `batch-2 scope decisions`: **closed**.
   After refresh and check, both live batch-2 decline rows remain current and resolved as `stands` in `research/frontier-21-alpha-b-scope-decisions.json`: Hackman `H.IV.1 Theorem` and Conrad II `Lemma 2.1`. That matches the present manifest route in `research/frontier-21-batch-2.pages.json`, which still closes through Pell-equivalence by powers of the fundamental solution and the continued-fraction proof of Lagrange's theorem, not through a second orbit formalism or a second existence engine.

3. `pell-equations-and-generalized-pell-orbits` / `notes stale source-state receipt`: **closed**.
   The batch-2 note's claimed repair is accurate on current bytes. `research/frontier-21-batch-2.coverage.json` carries `fetch_verified` objects for all four recorded sources, and the live check now returns `source-fetch-check: 4/4 source(s) fetch-verified`. No manifest or coverage edit is missing behind that note-only correction.

4. `artinian-rings-and-length` / finding `none` in the batch-3 `Step-3 fix pass` note: **closed**.
   The pushback is correct on current bytes. `research/frontier-21-alpha-b-step3-scaffold-review.md` still marks the pair `sufficient`, `research/frontier-21-batch-3.pages.json` still carries the same 12-item A route and 6-item B companion, and `research/plan-spec.json` still gives the page-level prerequisite `prime-spectra-and-radicals-examples`. The five live CA-4 decline rows remain resolved as `stands` in `research/frontier-21-alpha-b-scope-decisions.json`, matching the current reuse of the published module-length spine and the chosen infinite-product-of-fields witness.

## Outcome

Both owned pairs remain closed on the current bytes:

- `pell-equations-and-generalized-pell-orbits` -> `sufficient`
- `artinian-rings-and-length` -> `sufficient`

No blocker remains for group `b` Step-3 scaffold closure.
