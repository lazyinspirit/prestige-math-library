# Step 9 — changed scope decisions and terminal defect sweep, run `frontier-18`

Step 3 predates the exact decline receipts on this run, so
`research/frontier-18-step9-scope-delta.json` will deliberately mark every
decline pending. Review those rows once; future runs will carry unchanged exact
decisions forward.

For each pending row, verify its reason and destination against the current page
closure, published files, plan, and cited source. Update the owning
`research/frontier-18-alpha-<group>-scope-decisions.json` row to `stands` or
`owner-decision`, with concrete evidence.

Overturn a false decline by changing its coverage disposition and building the
missing result only when it fits an existing page without a reading-order
change. Author it to the Step 5 standard: exactly one owning batch manifest,
proof contract, risk review, source disposition, and coherent splice/impact
updates. A new page or forward dependency remains an owner decision.

After a coverage or plan edit, run
`node tools/scope-decisions.mjs refresh --run frontier-18 --all`, resolve every
new pending row, then run
`node tools/scope-decisions.mjs check --run frontier-18`. Write concise reasoning
and authored ids to `research/frontier-18-alpha-step9-review.md`; the engine
renders the complete decision register mechanically.

Every item created or mathematically modified after `post-step8` is derived by
guarded hash and routed through both judge lanes, adjudication/fatal repair,
exact rejudge, and verified stamp. Do not self-stamp or run a private sweep.

Finally, test each open Frontier 18 defect-ledger row’s closing condition.
Update that row in place with exact evidence and rerun
`node tools/defect-ledger.mjs render`; never append a duplicate defect.

**No permission prompts of any kind**, including inside an `&&` chain.
