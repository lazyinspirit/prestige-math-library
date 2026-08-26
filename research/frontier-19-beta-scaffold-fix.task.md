> **Scaffold-fix round.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `<i>` appears.

# Batch `<i>` of run `frontier-19` — post-recheck scaffold repair

The step-3 recheck closed with your batch still carrying `insufficient` pairs.
The findings live in the CLOSURE RECEIPT, not in prose:

**`research/frontier-19-scaffold-closure.json`** — read `work[]`. Each entry names
a `page` and its `missing` findings; each finding carries a stable id (batch
number, then finding number), the exact source locator that carries the
missing result, and usually the preferred remedy. **Your scope is every
`work[]` entry whose page belongs to batch `<i>`** — check the page-to-batch
map in `research/frontier-19-scope-ledger.json`, and touch nothing outside your
batch.

## What to do

1. For each of your findings: apply the remedy to your batch's scaffold files
   (`research/frontier-19-batch-<i>.pages.json`, `.coverage.json`, `.notes.md`),
   or push back with the reason if the finding is wrong — never silently skip
   one.
2. A new item keeps the harvest honest: give it its coverage row with the
   disposition and locator, and its `fetch_verified`-stamped source per
   `briefs/beta-scaffold.md` §"URL discipline".
3. Re-run your checks:

```
node tools/coverage-checklist.mjs research/frontier-19-batch-<i>.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

The policy check is deliberately whole-run: legal dependencies on earlier
pages owned by another live batch must resolve against that batch's manifest.
It still enforces the two-pair capacity separately for each batch. Do not
remove, inline, or duplicate a necessary cross-batch edge merely to make an
isolated one-manifest invocation pass.

4. Append `## Scaffold-fix round` to `research/frontier-19-batch-<i>.notes.md`,
   one entry per finding id: `applied` / `pushed back` (+ reason), with what
   changed.

The recheck Alpha re-asserts sufficiency from disk after you exit; an
`applied` entry that changed nothing will be caught.

## Scope

Scaffold files for **your batch only**. Not `plan-spec.json` structure, not
another batch, not `items/`, not `library/`. Nothing is authored yet.

**No permission prompts of any kind**, including inside an `&&` chain.
