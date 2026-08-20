# The whole-level receipts, run `{{run}}`

You are the **lead Alpha**. `level-coverage` needs two receipts, and this
stage exists because on an earlier run neither was produced until step 8
discovered the hole at the very end and left 57 reconciliation reasons blank.

## 1. The spine receipt

```
node tools/spine-audit.mjs --template research/{{run}}-spine-audit.json
```

It selects the proof-bearing items among the 100 largest transitive dependency
cones — the high-fan-out proofs a level rests on. Review each, then complete
the receipt. It lapses on any mathematical-content change, so take it after
the mathematics is settled, not before.

## 2. The whole-level audit receipt

```
node tools/level-coverage.mjs --template research/{{run}}-audit-coverage.json \
  --contracts research/{{run}}-proof-contracts.json \
  --judge-ledger research/{{run}}-judge.jsonl \
  research/{{run}}-batch-*.pages.json
```

Then fill it:

- **`reviewer`** — who attests, and under what model and settings.
- **`attestation`** — a concrete sentence about what you actually checked. Not
  "the level was reviewed".
- **`plan_reconciliation`** — one row per item whose authored `deps` differ
  from its planned `deps`, each with a **concrete reason for that specific
  item**. A drift is usually a real fact about the proof: a dependency the
  author needed and the scaffold did not anticipate, or one the scaffold
  predicted and the proof did not use. Say which, per item.

`manifest_sha256`, `item_scope` and `proof_scope` are computed by the template
and bind the receipt to the current scope and relationships. If any of them
stops matching, the receipt has gone stale and the gate will say so.

## The gate you are working against

```
node tools/level-coverage.mjs \
  --contracts research/{{run}}-proof-contracts.json \
  --judge-ledger research/{{run}}-judge.jsonl \
  --judge-adjudications research/{{run}}-judge-adjudications.jsonl \
  --spine-receipt research/{{run}}-spine-audit.json \
  --audit-receipt research/{{run}}-audit-coverage.json \
  --verify-current-context research/{{run}}-batch-*.pages.json
```

Run it yourself and read every error before you return. A blank reason field
passes nothing, and a receipt written to make a gate green is worth less than
no receipt at all — it converts an honest red into a false green, which is the
exact failure this whole stage exists to prevent.

If an error is about the mathematics rather than the receipt — a missing
verdict pair, an unadjudicated rejection, an open fatal — **do not paper over
it**. Say so in your report and let the gate hold.

**No permission prompts of any kind**, including inside an `&&` chain.
