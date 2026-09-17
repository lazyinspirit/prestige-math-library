# Gate cleanup — Step 3 scope decisions

Run `phase-2-remaining-27`. The Step-3 gate `scope-decisions`
(`node tools/scope-decisions.mjs check --run phase-2-remaining-27`) reports
57 current declines with 70 errors: rows whose `decision` is still `pending`
and whose `evidence` is empty.

## Files

`research/phase-2-remaining-27-alpha-<a|b|c|d|e>-scope-decisions.json`. Each is
`{version, run, group, decisions: [...]}`; a decision row carries `decline_id`,
`group`, `batch`, `page`, `source_kind`, `source_url`, `name`, `disposition`,
`destination`, `reason`, `row_sha256`, `context_sha256`, `decision`, `evidence`.

## What to do

- For every row with `decision: "pending"`: read the named source row in
  `research/phase-2-remaining-27-batch-<batch>.coverage.json` (find the source
  by `source_url` and the `name`/locator) and the pair's scope decision
  (`research/phase-2-remaining-27-step3a-review-<page>.json` or
  `-owner-`), then decide whether the decline is correct for the selected page
  scope.
- If it is correct, set `"decision": "stands"` and write a specific `evidence`
  string: which coverage row was inspected, why the deferred/out-of-scope
  disposition matches the page's selected scope, and the exact design locator
  if the row is deferred to another page.
- If it is wrong (the row belongs on this page, or the destination page does not
  exist), set `"decision": "owner-decision"`, keep `evidence` describing the
  exact problem, and report it — do not silently change coverage or manifests.
- Re-run `node tools/scope-decisions.mjs check --run phase-2-remaining-27` after
  each group file and confirm the error count reaches zero. Do not run
  `prepare`/`refresh` after filling rows: refresh rebuilds pending rows from
  coverage and would discard your decisions.

## Rules

- Edit only the five scope-decision files under `research/`. Do not touch item
  files, manifests, coverage, proof contracts or reports.
- Mathematical integrity: `stands` means you read the coverage row and the
  page's scope decision; never blanket-mark rows.
- Report to `research/phase-2-remaining-27-gate-cleanup-scope-report.md` with
  counts by group, any owner-decision rows in full, and the final check output.
