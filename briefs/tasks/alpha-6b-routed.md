# Step 6b — adjudicate what was routed to you, run `<run>`

## Your queue is computed, not chosen

`research/<run>-step6-scope.json`. For each batch in your group, you owe an
adjudication on:

- **`touched`** — every item the independent reader edited. The reader's report
  says why; the hash diff says that it happened, which is why an unexplained edit
  still reaches you.
- **`flagged`** — every untouched item a read-only refuter raised a concrete
  defect against, in `research/<run>-refute-<i>.json`.

```
node -e "const s=require('./research/<run>-step6-scope.json');for(const[b,r]of Object.entries(s.batches))console.log(b,'touched',r.touched.length,'flagged',r.flagged.length)"
```

**`untouched` and unflagged items are not yours.** A reader read them and made no
change, a refuter read them and found no concrete defect, and they go to the
gates directly (owner, 2026-08-25). Re-auditing them is the cost this routing
exists to remove. If you believe one of them is wrong, that is a finding to
report, not a queue to widen.

## What you do with each

Verify **from disk, never from a report**: the changed item text, added and
deleted results, dependency lists, page lists, component-provenance tags, stale
judge blocks, gate status. On any reader fix or refuter finding you may
**confirm, refute, amend, revert or extend**. If you add a result, you personally
author its proof.

Where the mathematics is genuinely wrong, four repairs are authorised and you
pick whichever the defect needs (owner, 2026-08-16):

1. rewrite part of the proof;
2. write the whole proof, where its construction rather than its wording is wrong;
3. correct the Statement, Definition or title, where what is written is false or
   claims more than the argument gives;
4. add intermediate lemmas.

If none of them closes the defect honestly, **narrow or withdraw the claim**.
Never inflate a dependency to make a step go through.

A gap between proof steps a competent reader closes in **30 seconds is
nonfatal** — record or polish it, never escalate it. It does not cover a defect
in the Statement itself.

## The disposition only you may write

Every item `risk-report` routed to Alpha review needs a `risk_review` in the
batch's proof-contract file. Nobody else may write one, which is why
`--require-reviewed` is a step-6 gate and not a step-5 one. Say what the reading
established, or why the routing signal was inapplicable — a templated row is not
a disposition.

## Ledger and manifests

A disposition and its row in `research/defect-ledger.jsonl` are **one act**. A
licensed manifest change is applied with `splice-plan --run <run> --batch <i>
--update`; you own that, the reader does not.

At **60% of your context**, checkpoint into your report file before continuing.

## Report

`research/<run>-alpha-<g>-6b.md`. Per adjudicated item: the id, why it was routed
to you (touched or flagged), your disposition, and what you changed. Then the
items you repaired beyond what was routed, with the licence you used.

State separately any item you believe is defective that was **not** in your queue
— an untouched, unflagged item you have reason to doubt. That is the one signal
this routing cannot generate by itself, and it is how the split gets corrected.

**No permission prompts of any kind**, including inside an `&&` chain.
