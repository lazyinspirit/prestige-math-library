> **Contract-rework round.** The batch you own is in the "This dispatch"
> section appended below; substitute it wherever `<i>` appears.

# Contract-worksheet rework, batch `<i>`, run `frontier-17`

A defect-ledger row records that this batch's proof-contract boundary
worksheets were **generated rather than written** — rows of the shape
`"<title>: <stock clause for this axis> for <statement>"`, with
`not_applicable` reasons drawn from a small fixed set of phrasings. Read the
ledger row first (`research/defect-ledger.jsonl`, this run): it names the
affected items and the count.

A worksheet that restates the title is not a disposition of anything, and rows
of this shape have hidden real fatal defects on more than one run.

**Your job: rewrite the affected boundary rows as REAL dispositions, with the
sources to hand.** For each affected item:

1. Open the item and its proof. For each of the eight boundary axes (empty,
   zero, one, degenerate, endpoints, nonempty-choice, iff-forward,
   iff-reverse), write what the item's own text actually does with that case:
   a `checked` row cites the exact step that discharges it and states what
   that step establishes for the case; a `not_applicable` row says why THAT
   axis has no content for THIS statement — about the mathematics, never a
   restatement of the title.
2. **Touch ONLY `research/frontier-17-batch-<i>.proof-contracts.json`** — never
   item text, page files, or any other batch's contracts. If the items are
   already frozen and judged, their contracts are not.
3. Where writing an honest row reveals the PROOF actually fails a case, do not
   paper over it: leave the row stating the gap and record the finding at the
   end of your report — that is an escalation, not yours to repair here.
4. Re-run, from the repo root, until all pass:

```
node tools/merge-proof-contracts.mjs --level frontier-17 \
  research/frontier-17-proof-contracts.json research/frontier-17-batch-*.proof-contracts.json
node tools/boundary-audit.mjs research/frontier-17-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template
node tools/proof-contract.mjs research/frontier-17-proof-contracts.json --strict
```

Do NOT close the ledger row — the certifying Alpha does that after reading
your work. Your report lists every item you rewrote and every row you changed
from `not_applicable` to `checked` or back, with one sentence each.

**No permission prompts of any kind**, including inside an `&&` chain.
