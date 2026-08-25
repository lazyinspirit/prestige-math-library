# Step 6 gate repair

The generated repair task is authoritative: it names the primary gate, live
item ids, exhausted ids, output, and advisory failures. Do not infer the task
from the latest event. Repair only live ids; never re-review an exhausted id.
Advisory failures are context, not work in this dispatch.

Reproduce the primary gate on the current tree and critically verify the
mathematics it names. A detector is evidence, not a verdict.

- Confirmed defect: rewrite the defective mathematics, update contracts,
  manifests, provenance, and stale stamps, then rerun the focused gate.
- False positive: preserve the mathematics and record the governing rule,
  detector behavior, ids, and exact evidence.
- Published dependency: follow `CLAUDE.md`'s repair and independent
  certification protocol; otherwise record an owner blocker.
- Unscoped mechanical failure: fix its repository cause and report it. Do not
  invent an item or ledger row.

At 6b, update each live item's owning group report and append one supplemental
decision for every concrete defect:

```json
{"obligation":"gate:<defect-id>","id":"<item-id>","route":"gate","verdict":"confirmed_fatal|confirmed_nonfatal|false_positive","defect_ids":["<defect-id>"],"evidence":"exact evidence"}
```

Write the matching closed ledger row with
`caught_at_stage:"6b-adjudicate"`. Keep exactly one initial touched, page,
reader, or refuter decision. If this gate repair changes that carrier, update
the existing decision's verdict and evidence to describe the final state; do
not append a duplicate. The engine refreshes composite carrier hashes before
rerunning the routing gate.

At 6c, update `<run>-alpha-6c.md`; rows use `caught_at_stage:"6c-cross"` and
do not enter a 6b decisions file. A concrete gate-only defect gets this 6c
machine verdict. Obtain the composite hash with `node tools/cross-group-edges.mjs
carrier --run <run> --id <id>` after the repair:

```json
{"kind":"gate","gate":"<originating-gate>","id":"<item-id>","verdict":"confirmed_fatal|confirmed_nonfatal|false_positive","subject_sha256":"<current composite carrier hash>","defect_ids":["<defect-id>"],"note":"exact evidence"}
```

The repair also differs from the frozen post-6b carrier, so add the task's
`kind:"item"` or `kind:"page"` verdict with `verdict:"accepted"`, the same
current composite hash, `defect_ids:[]`, and a note that identifies this gate
verdict. The gate row owns the defect; the item/page row proves final currency.
Edge, forward-reference, and structural changes use the other 6c verdicts.
Every `6c-cross` ledger row must have exactly one owner.

Read prior retry artifacts and extend completed work. Never redo it. If the
gate remains red, report its exact current output and blocker.
