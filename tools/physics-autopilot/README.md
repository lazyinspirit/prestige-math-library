# Physics workflow engine

Use `physics/WORKFLOW.md` for the six-step stage table, run controls, owner holds and evidence procedures.

The rebuild plan is `physics/research/workflow-rebuild-plan.md`. Step 1 performs complete initial authoring; Step 2 is the bounded Luna-max whole-batch scope/prerequisite loop. Planning generates group metadata; accepted plan synchronization is part of the Step-2 mechanical handoff. There are no separate assignment or splice stages.

Current revision: `physics-six-step-v1-construction-scope`. Use fresh run state. The engine owns all transitions and enforces the shared 30-agent cap. See `package.json` for typechecking and focused test commands.

Run the scope-review controls from `physics/` through its `tools` symlink. The CLI resolves the symlink before dispatching `check` or `owner-resolve`; missing current batch acceptance fails with a nonzero exit code.
Scope repairers use the existing cognitive `authoring` job classification, so dispatch preflight permits their substantive proof and prerequisite repairs. Their batch ownership and bounded review history still apply.

Step 3 ends after independent batch readers, refuters and routed adjudicators, the exact post-3a baseline, and mechanical `3a-close` history freeze. The original adjudication gate battery remains the review boundary. There is no cross-batch review, unfinished-review continuation or impact-audit duty after that boundary; dependency-level authoring orders suppliers before consumers. Historical Step-3b receipts remain historical evidence.

Within the Step-3 pipeline, ready downstream work gets available slots before
upstream work: adjudicators, collection tools, refuters, split tools, then readers.
Each batch still requires its predecessor receipts and artifacts, with no live
predecessor writer. Stage, role, and global caps include workers adopted after a
controller restart; the full group gate barrier remains in place.
