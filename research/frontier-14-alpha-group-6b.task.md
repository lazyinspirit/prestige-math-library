> **Generic group task.** No group-specific file existed for this group, so the
> engine fell back to this one. Your batches are named in the "This dispatch"
> section appended below — work from that, and write your report to the
> `research/frontier-14-alpha-<your-group>-...` path for your own group label.

## Group Alpha (this group) — step 6b adjudication, the batches named in your dispatch

The independent readers have reported. You adjudicate every finding they raised
for your batches, and you own the repairs.

### Inputs

- `research/frontier-14-reader-<i>.md` for each of your batches
- the items themselves, on disk
- `research/frontier-14-batch-<i>.proof-contracts.json`

### What to do

1. For each reader finding, adjudicate from disk: **confirmed fatal**,
   **confirmed nonfatal**, or **false positive**, with evidence.
2. Apply repairs for confirmed findings. This is step 6 — cosmetic polish and
   30-second-gap tidying belong here, before the text freezes. After step 7 they
   do not.
3. Dispatch read-only proof-refuter subagents for the proof-bearing items in
   your batches, held to the judges' skeptical standard: report only a concrete
   false claim, unlicensed inference, missing hypothesis, or inaccurate
   citation, and inspect the supplied dependency before alleging it is too weak.
   **A refuter never writes content.** You adjudicate every finding.
4. Write a `risk_review` disposition for every high/critical item that
   `risk-report.mjs` routes. Alpha alone may write these.
5. Re-run the harvest check: `coverage-checklist.mjs` is structural; you check
   the harvest is **faithful** — open sources and verify locators by extracting
   text, never by an HTTP status.

### Output

`research/frontier-14-alpha-<your-group>-6b.md`: per finding id, the adjudication and
what you changed; the refuter findings and their dispositions; the risk reviews;
and anything you could not check.

**No permission prompts of any kind**, including inside an `&&` chain.
