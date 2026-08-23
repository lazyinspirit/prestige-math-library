# Step 6a — independent read of batch `<i>` of run `frontier-17`

You did **not** author this batch and you must not have. Read it as an
adversary who wants to find a defect before the judges do.

**Scope:** every item on the pages listed in
`research/frontier-17-batch-<i>.pages.json`.

**Write your report to:** `<output>`

Both `<i>` and `<output>` are substituted by the dispatcher from values the
engine computed for this unit. They are never copied from another batch's
file — that is how a reader once wrote its report over another reader's,
destroying eleven fatal findings.

## What is fatal

- a **title or Statement asserting more than the proof gives**. The judges
  read Statements and cannot see a false title, so this class reaches
  publication unless you catch it. Check title, Statement and proof against
  each other as a distinct pass.
- an inference the cited dependency does not license
- a missing hypothesis, or a choice whose scope is unstated
- an `[F#]`/`[L#]` restatement wider than the item it cites. **Open the cited
  item on disk.** Ten of twenty-five step-8 rows on one run were this class.
- an invalid witness, or a false example

## What is not

A gap a competent reader closes in **30 seconds** is nonfatal. Record it or
polish it; never call it fatal. That covers gaps *between steps* — a defect in
the Statement itself is never 30-second.

## Output format

Findings numbered `R<i>-1`, `R<i>-2`, … and **stable**: a later pass refers to
these ids, so never renumber. Per finding: the item id, the exact defect, the
evidence, and your severity.

Write findings to the file. A finding that exists only in your closing message
gets dropped — that has happened, and cost eleven findings.

**No permission prompts of any kind**, including inside an `&&` chain.
