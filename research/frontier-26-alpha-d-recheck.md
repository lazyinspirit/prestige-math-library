# frontier-26 · Alpha group `d` · Step 3 recheck

Group `d` owns batches `8`, `10`, and `11` in
`research/frontier-26-alpha-groups.json`: the combinatorics pages
`star-expansions-and-erdos-hajnal` and
`iterative-sparsification-and-the-five-vertex-path`, the formal-languages
pages `regular-expressions-and-kleenes-theorem` and
`context-free-pumping-ogden-and-parsing`, and the computability page
`robust-machine-models-and-universal-computation`.

I re-read the governing task files on Monday, August 31, 2026, then verified
the current bytes in:

- `research/frontier-26-alpha-d-step3-scaffold-review.md`
- `research/frontier-26-batch-8.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-10.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-11.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-8.pages.json`
- `research/frontier-26-batch-10.pages.json`
- `research/frontier-26-batch-11.pages.json`
- `research/frontier-26-batch-8.coverage.json`
- `research/frontier-26-batch-10.coverage.json`
- `research/frontier-26-batch-11.coverage.json`
- `research/plan-spec.json`
- `research/plan-combinatorics-and-categories.md`
- `research/plan-computability-theory-track.md`
- `research/frontier-26-alpha-d-scope-decisions.json`
- `research/frontier-26-alpha-d-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group d`
  - result: `scope-decisions: d: 26 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-26 --group d`
  - result: `scope-decisions: 26 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-26-batch-8.coverage.json research/frontier-26-batch-10.coverage.json research/frontier-26-batch-11.coverage.json --require-destination`
  - result: `coverage-checklist: 5 page(s), 202 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-8.pages.json research/frontier-26-batch-10.pages.json research/frontier-26-batch-11.pages.json`
  - result: `content-policy: 104 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-8.coverage.json`
  - result: `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-10.coverage.json`
  - result: `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-11.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK` and reports only the standing repository-wide `redundant-prereq` advisories

No newly pending scope row appeared after refresh, so no further
scope-decision resolution was required.

## Dispositions

1. Batch `10` finding `D10-1` for the TC-8 pumping-only counterexample source gap: **closed**.
   The accepted repair stands on current disk. The current TC-8 design block in
   `research/plan-computability-theory-track.md:432-458` still requires both
   `fs-the-cfl-pumping-lemma-characterizes-cfls` and
   `cex-the-cfl-pumping-lemma-characterizes-cfls`, and the live manifest in
   `research/frontier-26-batch-10.pages.json:379-446` still uses the same
   pairwise-distinct language witness. The prior insufficiency is now stale
   because the current coverage ledger carries two directly read live support
   rows for that exact route: the StackExchange row at
   `research/frontier-26-batch-10.coverage.json:513-538` names the witness and
   records Wise's note that ordinary CFL pumping does not settle it, while the
   ROIFE row at `research/frontier-26-batch-10.coverage.json:541-575` supplies
   the Ogden-lemma treatment and an explicit non-context-freeness proof for the
   same language. Both rows are currently `fetch_verified` via `web-open` on
   `2026-08-31T00:00:00Z`, and the batch-10 Step-3 fix-pass notes at
   `research/frontier-26-batch-10.notes.md:250-278` record the same repair.
   With `coverage-checklist`, `source-fetch-check`, `content-policy`, and the
   live plan all clean on current bytes, no further reroute or coverage repair
   is owed.

2. Group `d` scope decisions: **closed**.
   After refresh and check,
   `research/frontier-26-alpha-d-scope-decisions.json` still carries `26`
   current decline rows and `0` pending rows, all resolved as `stands`. That
   matches the current bytes: the batch-8 combinatorics deferments still land
   on the exact current pure-pairs and `P_5` pages, the batch-10 exclusions
   still remain honest route-boundary cuts around TC-4 and TC-8, and the
   batch-11 robustness page still defers the recognizability/enumerability
   bridge to `decidable-recognizable-and-enumerable-languages`.

## Outcome

All five owned A pages are sufficient on the current bytes, so
`research/frontier-26-alpha-d-step3-verdicts.json` must be updated to match
that verified state:

- `star-expansions-and-erdos-hajnal` -> `sufficient`
- `iterative-sparsification-and-the-five-vertex-path` -> `sufficient`
- `regular-expressions-and-kleenes-theorem` -> `sufficient`
- `context-free-pumping-ogden-and-parsing` -> `sufficient`
- `robust-machine-models-and-universal-computation` -> `sufficient`
