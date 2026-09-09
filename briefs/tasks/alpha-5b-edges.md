# Step 5b — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-5a carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

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
