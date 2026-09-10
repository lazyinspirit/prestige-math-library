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

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `5b-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-5b.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-5 gate
battery.
