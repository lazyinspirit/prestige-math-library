# Step 9 — changed scope decisions and terminal defect sweep, run `frontier-19`

Step 3 already reviewed every decline and stored an exact, closure-bound
decision. Review only the rows without a reusable decision in
`research/frontier-19-step9-scope-delta.json`. For a run created before these
receipts existed, that file deliberately marks every decline pending, preserving
the full historical sweep.

## Resolve the pending decisions

For each pending row, verify the stated reason and destination against the
current page closure, published files, plan, and cited source. Update the owning
`research/frontier-19-alpha-<group>-scope-decisions.json` row to `stands` or
`owner-decision`, with concrete evidence.

Overturn a false decline by changing its coverage disposition and building the
missing result when it fits an existing page without a reading-order change.
Author it to the Step 5 standard: exactly one owning batch manifest, proof
contract, risk review, source disposition, and coherent splice/impact updates.
Do not create a page or forward dependency; record that as `owner-decision`.

After any coverage or plan edit, run:

```sh
node tools/scope-decisions.mjs refresh --run frontier-19 --all
```

Resolve every newly pending row, then run
`node tools/scope-decisions.mjs check --run frontier-19`. Write concise reasoning
and any authored ids to `research/frontier-19-alpha-step9-review.md`. The engine
mechanically renders the complete `research/frontier-19-alpha-step9.md` register.

Every item created **or mathematically modified** after the post-Step-8
snapshot is derived by guarded hash. The engine sends only those ids through
both judge lanes, adjudication/fatal repair, exact rejudge, and verified stamp.
Do not self-stamp or run a private sweep.

## Terminal ledger sweep

Inspect every open row for this run in `research/defect-ledger.jsonl`. Test its
recorded closing condition against disk. Close or defer that same row in place
with exact evidence; never append a duplicate defect. Rerun
`node tools/defect-ledger.mjs render` after a ledger edit.

**No permission prompts of any kind**, including inside an `&&` chain.
