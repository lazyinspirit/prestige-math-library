# frontier-20 · Beta · batch-4 notes (step 1 scaffold)

Run `frontier-20`, batch `4`, zero A/B pairs, no category pages assigned.
Author: Beta.

Artifacts owned by this batch:

- `research/frontier-20-batch-4.pages.json`
- `research/frontier-20-batch-4.coverage.json`
- this file

Nothing else in the repository was written by this dispatch.

---

## 1. Scope confirmation

Batch `4` is intentionally empty on disk as of **August 26, 2026**.

- `research/frontier-20-beta-4.task.md` states `0 A/B pairs`.
- `research/frontier-20-dispatch/beta-batch-4.prompt.md` repeats that batch `4`
  owns `0 A/B pairs`.
- `research/frontier-20-step0-notes.md` lists the run's owed pages only in
  batches `1`, `2`, and `3`.
- `research/frontier-20-scope-ledger.json` assigns all eight owed pages to
  batches `1`, `2`, and `3`; no page record has `batch: "4"`.
- `research/frontier-20-covers.json` contains `beta-batch-1`, `beta-batch-2`,
  and `beta-batch-3` only.

Because no page is assigned here, this dispatch has no design anchor, source
range, or item scope to scaffold. The batch manifest therefore remains the
empty array already on disk, and the coverage file is the explicit empty object
`{"pages":[]}` rather than an invented harvest.

## 2. Scaffold state

- Planned A pages: `0`
- Planned B pages: `0`
- Planned items: `0`
- Coverage pages: `0`
- Harvested source rows: `0`
- Split decisions: none; no A page exists

No proof-contract file is created at step 1 because there is no authoring scope.

## 3. Gate results

Commands run from the repository root on **August 26, 2026**:

```bash
node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-4.coverage.json --out /tmp/frontier-20-batch-4-url-sweep.json --recover --fail-on-dead
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp
```

Results are recorded below after the command run.

- `node tools/coverage-checklist.mjs research/frontier-20-batch-4.coverage.json --require-destination`

  `coverage-checklist: 0 page(s), 0 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`

  `content-policy: 0 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`

  Pass. Terminal summary:

  `OK — declared page order is acyclic and consistent; no item-level cycles,`
  `forward references, B-page dependencies, or unresolved ids among the 404`
  `page(s) with item lists.`

  `NOTE: 797 planned page(s) carry no item list yet (marked * above). Their`
  `reading order is guaranteed; their item dependencies are not yet asserted,`
  `so re-run this after writing each page's items.`

  The raw output also includes repository-wide `redundant-prereq` warnings
  outside batch `4`; none is specific to this empty batch.

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-4.coverage.json --out /tmp/frontier-20-batch-4-url-sweep.json --recover --fail-on-dead`

  `url-sweep: 0/0 live; 0 failed; 0 recoverable from the archive; 0 suspect`
  `-> /tmp/frontier-20-batch-4-url-sweep.json`

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-4.coverage.json --stamp`

  Exit `1` with:

  `ERROR fetch-check-empty: zero sources in scope — a selection gone wrong is`
  `not a pass`

## 4. Blocker

The batch is empty by plan, so `source-fetch-check` is expected to fail with a
zero-scope blocker rather than a dead-source blocker. That exact failure is
recorded in §3 after the command run.

No repair is available inside this batch's authorised files, because the blocker
is not a dead or stale URL; it is the absence of any assigned page or source
scope for batch `4`.
