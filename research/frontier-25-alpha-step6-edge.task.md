# Step 6 undeclared-prerequisite repair

Run `node tools/validate-plan.mjs research/plan-spec.json` and inspect each
live `undeclared-prereq` entry named by the generated gate task. Read the citing
item, dependency, owning pages, and current `requires` closure.

Add only a genuine backward page prerequisite. Remove or repair an unneeded
dependency; reroute an `-examples` dependency through an A-page result. A
forward prerequisite is an owner blocker unless the active task explicitly
licenses reordering.

Record the evidence, disposition, and any concrete defect's Step-6 decision and
ledger row in the report required by the generated task.
