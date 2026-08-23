# Step 8 — exact closure recovery, run `frontier-17`

You are the lead Alpha. The Step-8 judge-closure gate found current rejection
rows that the preceding adjudication did not cover. This is a narrow recovery
dispatch, not a second audit.

## Exact scope

Read `research/frontier-17-judge-closure.json`. Its `unadjudicated_rows` array is
the complete scope: each entry names one `(id, model, context_sha256)` rejection
that has no exact Alpha outcome. Recompute that join against
`research/frontier-17-judge.jsonl` and
`research/frontier-17-judge-adjudications.jsonl`; exclude null, capacity, transport,
and already-adjudicated rows.

For a legacy receipt without `unadjudicated_rows`, use its `unadjudicated` ids
only to reconstruct the missing exact keys from those two ledgers. Do not widen
the scope to other rejections. Preserve the existing Step-8 report and every
existing adjudication as durable prior work; do not redo, replace, or reinterpret
them.

## Fatal-only adjudication

For every exact missing row:

1. Read the frozen verdict, current item, and every cited target needed to
   decide it.
2. Append exactly one row to
   `research/frontier-17-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`.
3. Compute `item_sha256` from the pre-edit item using the Step-8 guard/touchlog
   normalization, which excludes the entire `verification:` block. Do not copy
   the differently normalized hash from the judge ledger.
4. A `confirmed_nonfatal` or `false_positive` outcome licenses no mutation.
5. Only `confirmed_fatal` licenses a coherent repair. Apply that repair, append
   its defect-ledger row in the same act, and update only the established
   contract, manifest, plan, impact, and rejudge artifacts the repair makes
   stale. Never broaden the rejudge set to an unchanged page-mate.

Run the Step-8 guard from the `pre-step8` baseline and recompute judge closure
with pending rejudge allowed. The recovery is complete only when
`unadjudicated` and `open_fatal` are empty; materially repaired ids may remain
in `needs_rejudge` for the engine-owned rejudge stage.

Write `research/frontier-17-alpha-step8-closure-recovery.md`, listing every exact
row, its evidence and outcome, every licensed repair, the resulting rejudge
targets, and the gate results. Do not append this recovery onto a stale or
earlier Step-8 report.

No permission prompts of any kind.
