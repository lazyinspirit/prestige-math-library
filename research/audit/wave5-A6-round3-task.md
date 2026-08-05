# Wave 5, A6 round 3 — the risk_review records, and nothing else of size

Two rounds have now ended with **0 of 155** `risk_review` records written. This is
not a criticism of your reading: `depcheck` passes, the 11 repairs are certified,
genrisk is down to 3, the URL sweep you were never handed is done, and 50 refuter
lanes have run. The gap is ordering. Your own round-1 report states the plan as

> work the four failing gates in the order genrisk → impact → certification →
> risk_review

and `risk_review` — the largest writing task of the four — came last both times
and was never reached. **This round it comes first, and it is almost the whole
job.** Do not begin anything else until it is written.

## The task

131 items are HIGH or CRITICAL and each needs a complete `risk_review`:
`status: "complete"`, non-empty `reviewer`, non-empty `notes`. Current coverage
by batch file:

| file | complete / contracts |
|---|---|
| `wave5-real-analysis.proof-contracts.json` | 0 / 26 |
| `wave5-topology-countability.proof-contracts.json` | 0 / 53 |
| `wave5-topology-function-spaces.proof-contracts.json` | 0 / 25 |
| `wave5-topology-separation.proof-contracts.json` | 0 / 51 |

Write into the **batch** files; the orchestrator re-merges. Shape, from wave 4:

```json
"risk_review": {
  "status": "complete",
  "reviewer": "Audit-Alpha (claude-opus-5), wave 5 A6, 2026-08-05; <the lane(s) that actually read it>",
  "notes": "<what was read, by which lane, and what adjudication concluded>"
}
```

## How to make 131 tractable without lying

You have ~50 refuter readings and your own. **Group the 131 by the evidence that
actually backs them**, and write one accurate note per group, naming that group's
lane. A note may be shared by items genuinely covered the same way — what it may
not do is claim coverage that did not happen.

Three honest categories, and use whichever fits each item:

1. **Read by a named refuter lane** — name the lane and what adjudication
   concluded. Wave 4's notes are the model.
2. **Read by you directly** — say so plainly. Your own reading is legitimate
   evidence; it is only weak *relative* to a cross-family lane, and the note
   should let a later reader see which it was.
3. **Tier is heuristic, not a finding** — the tier comes from a score over
   dependency count, biconditionals and "analytic limiting language", so 101 of
   155 landing CRITICAL reflects the heuristic, not 101 dangerous proofs. If an
   item is CRITICAL only by that arithmetic and your reading found nothing, the
   note should say exactly that. That is a true and useful record.

Writing them with a script per batch is fine and expected at this volume. What is
not fine is one uniform sentence across all 131 implying refuter coverage of
items no refuter read.

## Then, and only then

The 3 remaining `genrisk` `receipt-disposition-missing` seeds:

    cex-strictly-decreasing-gaps-no-limit
    cex-unbounded-with-convergent-subsequence
    ex-contractive-sequence-fixed-point

Order: retag → restate → unfold → narrow → verified-generated. A seed needing a
deletion, id change or reading-order change goes to `owner-queue` with evidence.

## If you run short

Checkpoint and **say exactly which items still lack a record**. A partial pass
with an accurate remainder list is far more useful than another round that ends
at 0. Do not dispatch further refuter lanes unless a specific item's note
genuinely requires one — 50 have run.

Append "Round 3" to `research/audit/wave5-alpha.md`. Do not write
`verification.judge`. Do not touch item mathematics; nothing here licenses that.
