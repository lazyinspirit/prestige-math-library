# frontier-20 · Beta-7 · batch notes — empty batch (steps 1–2)

Run `frontier-20`, batch `7`, zero A/B pairs.

Artifacts owned by this batch and touched here:
`research/frontier-20-batch-7.pages.json`,
`research/frontier-20-batch-7.coverage.json`,
and this file.

## 0. Scope and design record

As of Wednesday, August 26, 2026, the current run artifacts disagree about
whether batch 7 is a live scaffold lane:

- `research/frontier-20-batch-7.pages.json` is an explicit empty manifest
  (`[]`).
- `research/frontier-20-scope-ledger.json` owes only batches 1, 2, and 3, with
  four A/B pairs total and no page assigned to batch 7.
- `research/frontier-20-covers.json` likewise declares only
  `beta-batch-1`, `beta-batch-2`, and `beta-batch-3`.
- `research/frontier-20-beta-7.task.md` and the dispatch prompt still exist and
  say batch 7 has `0 A/B pairs`.

Following the current manifest and scope ledger, there is no page assignment, no
design section, no source range, and no scaffoldable item set for batch 7.
I therefore did not mint ids, harvest sources, or alter another batch's scope.

## 1. Scaffold disposition

Batch 7 remains intentionally empty at step 1:

- Manifest: unchanged empty array.
- Coverage harvest: empty `pages` list, because there is no A page in scope for
  this batch.
- Notes: this record of the empty-scope disposition and validator outcomes.

## 2. Validator record

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-7.coverage.json`
  exited `0` with:
  `coverage-checklist: 0 page(s), 0 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-1.pages.json research/frontier-20-batch-2.pages.json research/frontier-20-batch-3.pages.json research/frontier-20-batch-4.pages.json research/frontier-20-batch-5.pages.json research/frontier-20-batch-6.pages.json research/frontier-20-batch-7.pages.json research/frontier-20-batch-8.pages.json research/frontier-20-batch-9.pages.json`
  exited `0` with:
  `content-policy: 0 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0`. It reported repository-wide `redundant-prereq` warnings and the
  standing note that many planned pages still have no item list yet; no
  batch-7-specific hard failure was introduced.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-7.coverage.json --out /tmp/frontier-20-batch-7-url-liveness.json --recover --fail-on-dead`
  exited `0` with:
  `url-sweep: 0/0 live; 0 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-7-url-liveness.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-7.coverage.json --stamp`
  exited `1` with:
  `ERROR fetch-check-empty: zero sources in scope — a selection gone wrong is not a pass`
- `node tools/source-backing.mjs --coverage research/frontier-20-batch-7.coverage.json --liveness /tmp/frontier-20-batch-7-url-liveness.json --reharvest-plan /tmp/frontier-20-batch-7-reharvest-plan.json`
  exited `2` with:
  `ERROR backing-empty-liveness: /tmp/frontier-20-batch-7-url-liveness.json carries no rows — a sweep over nothing is not a sweep`

## 3. Resulting blocker

Batch 7 cannot satisfy the stage-1 source gates under the current run scope,
because the run assigns it no A page and therefore no harvested source set. The
coverage and policy tools accept the empty artifact shapes, but the source gates
correctly refuse to treat zero URLs / zero sources as a pass.

That is a run-structure issue, not a batch-7 scaffold omission. Repairing it
would require changing the step-0 batch layout, the scope ledger, or the run's
batch files outside this task's authorized write set, so I did not attempt that
here.
