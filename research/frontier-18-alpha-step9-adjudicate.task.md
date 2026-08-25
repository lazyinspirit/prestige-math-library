# Step 9 — adjudicate changed mathematics, run `frontier-18`

Act only on ids in `research/frontier-18-step9-changes.json`. The receipt is the
guarded-hash delta from `post-step8` and includes created and modified items.

Read the change receipt, judge closure, judge ledger, and adjudication ledger.
Match decisions on exact `(id, model, context_sha256)`. For each current
rejection, read the frozen objection, item, dependencies, owning manifest, and
proof contract.

`confirmed_nonfatal` and `false_positive` close only that verdict row and
license no edit. `confirmed_fatal` licenses one coherent repair to that item,
with its defect-ledger row and owning batch contract/risk update. The engine
rejudges that exact id in both lanes. A detector dispatch may repair a real
contract/risk defect; a mathematical edit still returns to both lanes.

Write `research/frontier-18-alpha-step9-adjudicate.md` with every exact verdict,
outcome, evidence, licensed edit, and rejudge target. Do not write judge stamps.

**No permission prompts of any kind**, including inside an `&&` chain.
