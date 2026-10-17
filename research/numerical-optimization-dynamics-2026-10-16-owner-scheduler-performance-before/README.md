# Mathematics workflow engine

Use `WORKFLOW.md` for the six-step stage table, run controls, owner holds and evidence procedures.

The rebuild plan is `research/workflow-rebuild-plan.md`. Step 1 performs complete initial authoring; Step 2 is the bounded Luna-max whole-batch scope/prerequisite loop. Planning generates group metadata; accepted plan synchronization is part of the Step-2 mechanical handoff. There are no separate assignment or splice stages.

Mathematics inventory supports 128 pairs, one per batch, and at most three batches per group. Group labels extend through `aa`, `ab`, and beyond; valid native category assignments determine the task scope. Physics limits are independent.

Current revision: `six-step-v1-construction-scope`. Use fresh run state. The engine owns all transitions and enforces the shared 30-agent cap. See `package.json` for typechecking and focused test commands.

Step 3 ends with `3a-baseline` and mechanical `3a-close`. Dependency-level authoring replaces the legacy Step 3b cross-batch review; no Step 3b stage or continuation is dispatched. Historical evidence remains preserved.

Within the Step-3 pipeline, ready downstream work gets available slots before
upstream work: adjudicators, collection tools, refuters, split tools, then readers.
Each batch still requires its predecessor receipts and artifacts, with no live
predecessor writer. Stage, role, and global caps include workers adopted after a
controller restart; the full group gate barrier remains in place.
