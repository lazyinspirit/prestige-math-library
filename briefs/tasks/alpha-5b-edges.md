# Step 5b — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-5a carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

For a migrated run read `research/<run>-checkpoint-import.json` and its
source export. Original review attribution is historical, not a new review.
Preserve the exact published-repair handoff in
`research/<run>-step7-published-repairs.jsonl`; its later judgments remain owed.

If `research/<run>-merge-import.json` exists, read its source mappings and
baseline origins. Preserve imported source review evidence and exact pending
Step8 published-repair handoffs. The import is not a new mathematical verdict:
review the combined cross-batch interfaces and impact obligations on current
content, including later repairs recorded in the source handoffs.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-5b-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id ITEM_ID` after edits.
For a fixed repository runtime incident on a foreign draft, retain the stable
ledger subject in `id` and explicitly supply `carrier_run` / `carrier_id`;
compute the hash under that actual owner run. Only closed `breaking-runtime`,
`engine-stage`, `stage-unowned` rows whose evidence names that draft qualify.
This is a runtime receipt, not a mathematical acceptance or peer-edit authority.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `5b-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

For the full lead audit, close both impact windows with `tools/impact-audit.mjs`:

- `--touches research/<run>-touches.json --from pre-author --to post-5a --receipt research/<run>-impact.json`
- `--touches research/<run>-touches.json --from post-5a --current --receipt research/<run>-impact-5b.json`

Record a reviewer even for an empty window. For every affected item, record
the exact changed supplier, consumed clause and justified disposition. Reuse
historical review evidence only after checking its attribution, current hashes
and coverage of the current interface changes; never copy approvals blindly.
Preserve the original baseline. Record unresolved findings and published debt
honestly; do not clear the receipt with generic notes. A narrowly assigned gate
repair covers only its primary blocker, not unrelated impact candidates.

Write `research/<run>-alpha-5b.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-5 gate
battery.
