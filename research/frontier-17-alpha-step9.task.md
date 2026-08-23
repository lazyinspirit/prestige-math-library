# Step 9 — the scope-denial sweep, run `frontier-17`

Every result declined during this run gets re-examined. Step 9 is a sweep and
does not pause the build.

## Why this exists

On an earlier run two declines rested on claims that were **factually false**:
one said a page lay outside the closure when a published definition sits
inside it; one said no floor definition exists when the published lemma was in
closure. Four items had to be built as a result — at step 9, the worst
possible moment.

The converse is also a real answer: "published" and "published and in this
page's closure" are different facts, and only the second licenses a citation.

## What to do

1. Collect every `deferred` and `out-of-scope` disposition from all
   9 `research/frontier-17-batch-<i>.coverage.json` files.
2. For each: is the stated reason **true of disk right now**?
   `grep -rl '<id>' items/ library/` costs seconds. Check the closure, not
   just publication.
3. Confirm every decline names a **licensing page id** — the page that will
   carry the result instead. A prose-only decline is indistinguishable from a
   silent drop; on one run 52 of 68 were prose only. A decline to a page id
   that does not exist in `plan-spec.json`, or to one whose subject does not
   cover the result, is a finding.
4. Overturn any decline resting on a false claim, and build what it wrongly
   excluded — if it can be built without a new page or a reading-order change.
   If it cannot, record it as an owner decision. Ledger duty applies: an
   overturned decline that exposed a real defect writes its
   `research/defect-ledger.jsonl` row in the same act.
5. Sweep the run's still-open ledger rows:

```
grep '"disposition":"open"' research/defect-ledger.jsonl | grep '"run":"frontier-17"'
```

   For each open row, test its own recorded closing condition against disk.
   Closing is an IN-PLACE update of that row — one defect, one row: set
   `disposition` to `fixed` (or `deferred` with the exact remaining
   condition), add the closing evidence to the row, and re-run
   `node tools/defect-ledger.mjs render` (a hand edit stales the view
   fingerprint). Never append a second row for the same defect. A row whose
   condition cannot be met yet stays open with a note — the 10-report gate
   refuses ANY open row (`--no-open`), so an open row you leave is one the
   owner must personally read.

## Output

`research/frontier-17-alpha-step9.md`: every decline, its verdict (`stands` /
`overturned`), the disk evidence, and what was built as a result.

**No permission prompts of any kind**, including inside an `&&` chain.
