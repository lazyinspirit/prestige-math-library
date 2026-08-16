# Contract-detector adjudication, run `frontier-15`

A candidate detector failed the read-group join. Its output is, by its own
contract, "a candidate for a human read, not a verdict" — you are the read.

Reproduce the findings from the repo root:

```
node tools/boundary-audit.mjs research/frontier-15-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template
node tools/citation-fidelity.mjs research/frontier-15-proof-contracts.json --fail-on-missing-quote
```

For EVERY candidate either tool prints, open the item and the contract row
and decide:

1. **The detector is right** — the row is a templated or false disposition,
   or the citation quote is genuinely missing/unfaithful. Fix it honestly:
   write the REAL disposition for that axis (what the item's text actually
   does with the case, citing the step that does it), or the faithful quote.
   If the ITEM's text itself is the defect, your step-6 repair licence is
   open — this is before the freeze.
2. **The detector is wrong** — a surface regex tripped on legitimate text
   (an fs- item whose Statement names a categorical predicate, say). Uphold
   the row ON THE RECORD: add to that contract row
   `"reviewed": {"upheld": true, "by": "<your lane label>", "reason": "…"}`
   — the reason at least 40 characters, about THAT row specifically, never a
   template. The detector reports upheld rows and stops failing on them.

Never batch-uphold; never weaken a rationale to pass a regex. Contract rows
live in the batch's `research/frontier-15-batch-<i>.proof-contracts.json` —
after edits, re-run the merge the join uses:

```
node tools/merge-proof-contracts.mjs --level frontier-15 \
  research/frontier-15-proof-contracts.json research/frontier-15-batch-*.proof-contracts.json
```

Exit when both commands at the top pass, or record exactly what you left and
why. Write `research/frontier-15-alpha-contract-audit.md`: per candidate,
the decision and the evidence. A confirmed real defect writes its
`research/defect-ledger.jsonl` row in the same act.

**No permission prompts of any kind**, including inside an `&&` chain.
