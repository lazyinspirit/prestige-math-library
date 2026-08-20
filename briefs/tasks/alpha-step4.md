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

**Write `research/{{run}}-alpha-step4.md`**: per edge — the evidence you read,
the decision, and the exact edit (or the block). Keep decisions per-edge;
never batch-approve.

**No permission prompts of any kind**, including inside an `&&` chain.
