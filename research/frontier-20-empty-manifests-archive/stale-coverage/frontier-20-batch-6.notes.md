# frontier-20 · Beta-6 · batch notes

Run `frontier-20`, batch `6`.

Artifacts owned by this batch and written here:
`research/frontier-20-batch-6.coverage.json`
and this file.

## Scope and artifact boundary

The generated task `research/frontier-20-beta-6.task.md` assigns **0 A/B pairs**
to batch 6, and `research/frontier-20-batch-6.pages.json` is the matching
empty step-0 manifest:

```json
[]
```

Because no A page is assigned to this batch, there is no batch-local design
section to open, no source range to harvest, no scaffold item list to mint, and
no page split decision to make. The correct step-1 action is therefore to leave
the manifest unchanged and record the empty scope explicitly rather than invent
coverage rows or mathematics outside the run ledger.

The run scope ledger confirms that `frontier-20` currently owes only batches 1,
2, and 3. Batches 4 through 9 exist on disk only as empty placeholder manifests
written at step 0.

## Validator status

Ran the task-named validators against the empty batch state on Wednesday,
August 26, 2026:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-6.coverage.json --require-destination`
  returned `coverage-checklist: 0 page(s), 0 harvested result(s), 0 error(s),
  0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-1.pages.json ... research/frontier-20-batch-9.pages.json`
  returned `content-policy: 0 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  returned `OK` for declared page order and item-list consistency, with the
  pre-existing advisory `redundant-prereq` notes already present in the plan.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-6.coverage.json --out ... --recover --fail-on-dead`
  returned `url-sweep: 0/0 live; 0 failed; 0 recoverable from the archive; 0
  suspect`.

Additional scaffold-stage source check:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-6.coverage.json`
  failed with `ERROR fetch-check-empty: zero sources in scope — a selection gone
  wrong is not a pass`.

That final failure is the exact structural blocker for this batch at step 1. It
does not arise from unread material or a dead citation; it arises because step 0
created batch 6 as an empty placeholder manifest with no assigned A page and
therefore no legal source harvest to stamp.

## Known limit

Batch 6 cannot satisfy the scaffold-stage fetch gate while it remains an empty
placeholder batch. The next corrective action belongs upstream of this batch's
mathematics:

- either remove empty placeholder batches from the `1-scaffold` dispatch/gate
  scope, or
- assign a real A/B pair to batch 6 at step 0 and regenerate the task inputs.
