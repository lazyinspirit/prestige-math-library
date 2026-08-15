## Step 9 — the scope-denial sweep

Every result declined during this run gets re-examined. Step 9 is a sweep and
does not pause the build.

### Why this exists

On `frontier-13` two declines rested on claims that were **factually false**:
one said a page lay outside the closure when `def-quaternions` is published
inside it; one said no floor definition exists when `lem-integer-part` is
published and in closure. Four items had to be built as a result — at step 9,
the worst possible moment.

Note the converse is also a real answer. On this run, batch 5 correctly declined
to cite `lem-integer-part` because it is published but homed on a page **outside**
that closure. "Published" and "published and in this page's closure" are
different facts and only the second licenses a citation.

### What to do

1. Collect every `deferred` and `out-of-scope` disposition from all six
   `research/frontier-14-batch-<i>.coverage.json` files.
2. For each: is the stated reason **true of disk right now**?
   `grep -rl '<id>' items/ library/` costs seconds. Check the closure, not just
   publication.
3. Confirm every decline names a **licensing page id**. 52 of 68 last run were
   prose only, which is indistinguishable from a silent drop.
4. Overturn any decline resting on a false claim, and build what it wrongly
   excluded — if it can be built without a new page or a reading-order change.
   If it cannot, record it as an owner decision.

### Output

`research/frontier-14-alpha-step9.md`: every decline, its verdict
(`stands` / `overturned`), the disk evidence, and what was built as a result.

**No permission prompts of any kind**, including inside an `&&` chain.
