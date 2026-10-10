# Workflow task templates

`run-tasks.mjs` renders these templates from current planning manifests and controlling designs. Step 1 uses `beta-scaffold.md` for complete initial authoring. Step 2 uses `scope-reviewer.md` and `scope-repairer.md`; its native controller writes exact immutable whole-batch round tasks. `scope-review-batch.md` is a descriptor for read-only preflight before carriers exist.

Steps 3–6 retain independent review, batch digest/judging, adjudication/repair and closeout. Batch digest tasks are generated mechanically by `step5-scope.mjs`, one per batch, for Step 4 and its Step-5 handoff. Group metadata is generated during planning. Use the current workflow documentation and saved rebuild plan; historical task files are not new-run authority.
