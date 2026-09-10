# Same-frontier dependency record

The unified ledger is `research/<run>-cross-batch-dependencies.json`.
It covers different batches in this run, including batches in the same Alpha
group. It is separate from the Step-5 verdicts and the published-consumer ledger.

Step-3 adjudicators must identify every such page prerequisite and item
dependency, including implicit proof uses, well-definedness justifications and
load-bearing forward references. Record exact consumer and supplier IDs, the
required claim/hypotheses, its use/location, and any missing or inadequate support.
An absent declaration is a finding, not permission to omit the dependency.

Write one JSON array per owned consumer batch to
`research/<run>-batch-BATCH.cross-batch-dependencies.json`, even if empty:

```json
[{"kind":"item","consumer":"lem-consumer","supplier":"thm-supplier","status":"open","evidence":"Exact required claim, use/location, mismatch and repair owner."}]
```

Use `kind: page` for page IDs. Use `open`, `verified`, or `removed`; verification
needs a current mathematical check, and removal needs evidence that the use was
actually removed. One row per `(kind, consumer, supplier)`; update it instead of
appending duplicates. Only the consumer's owner edits its input file. Route
outside findings to that owner. Replace inputs atomically; never edit the unified
ledger by hand. Step 8's serial lead may reconcile all batch inputs after the
owning writers finish. After each input or dependency edit, run:

`node tools/frontier-dependency-ledger.mjs refresh --run <run>`

Concurrent refreshes use an exclusive lock; retry a busy lock after the other
merge finishes, never delete another process's lock. Rechecks and later authorized
writers maintain these same rows immediately when dependencies change. Read-only
reviewers report updates to the owning writer and do not write ledger files.
Do not broaden mathematical edit authority to satisfy bookkeeping.

The Step-3b final gate and Step-8 join require an input for every batch and a review
row for every declared cross-batch edge. An empty input is valid only when that
consumer batch has no such dependencies.

Step 8's lead refreshes and reads the unified ledger before reviewing scope or
impact. Reconcile open findings, orphaned reviews, missing batch reviews and any
`removed` row whose declaration/use persists. Verify affected notes against
current files; neither a recorded edge nor an old `verified` note proves adequacy.
Record dispositions in the owning input rows and Step-8 report. Do not replace
the required Step-5 edge verdicts or Step-8 certification with this ledger.
