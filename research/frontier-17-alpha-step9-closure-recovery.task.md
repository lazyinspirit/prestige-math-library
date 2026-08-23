# Step 9 — exact closure recovery, run `frontier-17`

You are the lead Alpha. The `9-scope` judge-closure gate found a current
rejection row that has no exact Alpha outcome. This is a narrow recovery
dispatch, not a second audit.

**Why this is a hand-started dispatch.** `9-scope` is the one stage licensed to
author new content — it overturned three wrong declines and built the items —
but it has no `onGateFailure` route, so it cannot dispatch its own adjudicator.
The owner authorised this dispatch to close that gap for this run. It changes no
rule: the adjudication contract below is the standing Step-8 one, unaltered.

## Exact scope

Read `research/frontier-17-judge-closure.json`. Its `unadjudicated_rows` array is
the complete scope: each entry names one `(id, model, context_sha256)` rejection
that has no exact Alpha outcome. Recompute that join against
`research/frontier-17-judge.jsonl` and
`research/frontier-17-judge-adjudications.jsonl`; exclude null, capacity,
transport, and already-adjudicated rows.

Do not widen the scope to other rejections. Preserve the existing Step-8 report,
the Step-9 scope report, and every existing adjudication as durable prior work;
do not redo, replace, or reinterpret them.

The item in scope was authored by you at step 9 after the scope-denial sweep
overturned its decline. You are therefore adjudicating a judge's reading of your
own recent authoring: weigh the rejection on the text and the cited item, not on
your recollection of what you meant. The rejecting lane is DeepSeek, the only
cross-family reader in this run — a DeepSeek-only rejection is the one signal no
other lane here could have produced.

## Fatal-only adjudication

For every exact missing row:

1. Read the frozen verdict, current item, and every cited target needed to
   decide it. Open the cited item on disk before deciding whether a fact
   restates it faithfully.
2. Append exactly one row to
   `research/frontier-17-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`.
3. Compute `item_sha256` from the pre-edit item using the Step-8 guard/touchlog
   normalization, which excludes the entire `verification:` block. Do not copy
   the differently normalized hash from the judge ledger.
4. A `confirmed_nonfatal` or `false_positive` outcome licenses no mutation — no
   content, page, frontmatter, contract, impact, or judge change of any kind.
5. Only `confirmed_fatal` licenses a coherent repair. Apply that repair, append
   its defect-ledger row in the same act, and update only the established
   contract, manifest, plan, impact, and rejudge artifacts the repair makes
   stale. Never broaden the rejudge set to an unchanged page-mate.

Run the Step-8 guard from the `pre-step8` baseline and recompute judge closure
with pending rejudge allowed. The recovery is complete only when `unadjudicated`
and `open_fatal` are empty; a materially repaired id may remain in
`needs_rejudge`, which the session will then sweep.

Write `research/frontier-17-alpha-step9-closure-recovery.md`, listing every exact
row, its evidence and outcome, every licensed repair, the resulting rejudge
targets, and the gate results. Do not append this recovery onto the Step-8 or
Step-9 scope reports.

No permission prompts of any kind.
