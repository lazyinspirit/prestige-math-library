## Step 6a — independent read of batch 2

You did **not** author this batch and you must not have. Read it as an adversary
who wants to find a defect before the judges do.

Scope: every item on the pages in `research/frontier-14-batch-2.pages.json`.

### What is fatal

- a **title or Statement asserting more than the proof gives** — the judges read
  Statements and cannot see a false title, so this class reaches publication
  unless you catch it. Check title, Statement and proof against each other as a
  distinct pass.
- an inference the cited dependency does not license
- a missing hypothesis, or a choice whose scope is unstated
- an `[F#]`/`[L#]` restatement wider than the item it cites. Open the cited
  item on disk. Ten of twenty-five step-8 rows last run were this.
- an invalid witness or a false example

### What is not

A gap a competent reader closes in **30 seconds** is nonfatal. Record it or
polish it; never call it fatal. This covers gaps *between steps* — a defect in
the Statement itself is never 30-second.

### Output

`research/frontier-14-reader-2.md`, findings numbered `R2-1`, `R2-2`, …
**stably**. Per finding: the item id, the exact defect, the evidence, and your
severity. Numbering is permanent — a later pass refers to these ids.

Write findings to the file. A finding that exists only in your closing message
gets dropped.

**No permission prompts of any kind**, including inside an `&&` chain.
