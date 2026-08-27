# Frontier 20, batch 9 — empty-scope blocker receipt

## Scope check

I read the controlling batch artifacts on Wednesday, August 26, 2026:

- `research/frontier-20-beta-9.task.md`
- `research/frontier-20-dispatch/beta-batch-9.prompt.md`
- `research/frontier-20-step0-notes.md`
- `research/frontier-20-scope-ledger.json`
- `SCHEMA.md`

The batch-9 manifest on disk is `research/frontier-20-batch-9.pages.json`, and
it is the empty array `[]`.

That empty manifest is consistent with the run's own scope records:

- `research/frontier-20-step0-notes.md` says run `frontier-20` has 4 A/B pairs
  spread across 9 batch slots, with actual page pairs only in batches `1`, `2`,
  and `3`.
- `research/frontier-20-scope-ledger.json` lists exactly 8 owed pages, all with
  `batch` equal to `"1"`, `"2"`, or `"3"`. No page is assigned to batch `9`.

## Consequence

There is no authorised A page for batch `9`, so there is no honest scaffold to
write. The coverage file on disk, `research/frontier-20-batch-9.coverage.json`,
therefore records the only truthful batch-9 harvest state:

```json
{
  "pages": []
}
```

That file is structurally valid, but it is vacuous by design, and
`source-fetch-check` rejects the resulting zero-source scope rather than
certifying it.

## Checks run

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-9.pages.json`
  - Output: `content-policy: 0 scoped item(s), 0 error(s), 0 warning(s)`
  - Meaning: structurally clean but vacuous over empty scope.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
  - Output: `coverage-checklist: 0 page(s), 0 harvested result(s), 0 error(s), 0 warning(s)`
  - Meaning: structurally clean but vacuous over empty scope.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json --stamp`
  - Output: `ERROR fetch-check-empty: zero sources in scope — a selection gone wrong is not a pass`
  - Meaning: the fetch-verification gate correctly refuses to report success for an empty dispatch.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Exit status: `0`
  - Meaning: the current run-wide plan remains mechanically consistent; this is
    not evidence of any batch-9 scaffold because batch 9 owns no pages.

## Ready state

Batch `9` is not a scaffolding or source-repair task. It is an empty dispatch
slot. The current blocker is the scope itself: the dispatch targets batch `9`,
but the run ledger assigns batch `9` no pages.
