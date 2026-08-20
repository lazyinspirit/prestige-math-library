# Step 4 — adjudicate the splice refusals, run `{{run}}`

You are the **lead Alpha**. `tools/splice-plan.mjs` transcribes ids
mechanically; a `requires` edge a batch manifest declares and the plan does
not is the one thing it refuses to transcribe, because adding a prerequisite
edge is a decision. That decision is yours.

**Read `research/{{run}}-splice-refusals.json`.** Each row names the batch, the
page, and the edge(s). For every edge, decide from disk:

1. Open the declaring batch's `.notes.md` and `.coverage.json` — why did the
   Beta declare it? Open the TARGET page — does it carry what the citing
   scaffold actually uses?
2. **A backward edge (target's `order` strictly below the declaring page's)
   that the scaffold genuinely consumes: APPLY it** — add it to the page's
   `requires` in `research/plan-spec.json`, then run
   `node tools/validate-plan.mjs research/plan-spec.json` and leave it clean.
3. **An edge the scaffold does not need, or one you judge wrong: strike it
   from the batch manifest** (`research/{{run}}-batch-<i>.pages.json`), with
   the reason in your report — your scaffold-repair licence covers this.
4. **A forward edge (target order above the page) is a reading-order change:
   owner-only.** Record it in your report as blocked and leave both files
   alone — the gate will hold, which is correct.

Do NOT run the splice yourself; the engine re-splices the withheld batches
mechanically once your edits land.

## The other failure that brings you here: `validate-plan`

`splice-plan` refuses an edge a batch manifest DECLARES and the plan lacks.
`validate-plan` catches a different class it cannot see: an edge an item's
`deps` INDUCE. Reproduce it with

```
node tools/validate-plan.mjs research/plan-spec.json
```

and read the `[undeclared-prereq]` lines — "page P has an item depending on Q,
which is NOT in the closure of its declared requires". A re-splice cannot clear
these; there is nothing declared for the transcriber to transcribe. Decide each
one exactly as above: apply a backward edge the item genuinely consumes, strike
the dependency where the item should not have reached for it, block a forward
edge as a reading-order change.

**One sub-class is never fixed by adding an edge.** A dep on a published
**examples-page** item — an id whose owning page ends `-examples` — is a hard
`validate-plan` error whatever the page-level `requires` says, because a B page
is a leaf and nothing may depend on it. Adding the edge leaves the gate red and
hides the real problem. The route has to be rebuilt from **A-page** items
carrying the same result; find them, and if none exists, that is a real
scaffold finding, not an edge decision. This class has now fired on two
consecutive runs, four times each.

**Write `research/{{run}}-alpha-step4.md`**: per edge — the evidence you read,
the decision, and the exact edit (or the block). Keep decisions per-edge;
never batch-approve.

**No permission prompts of any kind**, including inside an `&&` chain.
