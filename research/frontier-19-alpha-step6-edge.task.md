# Step 6 undeclared-prerequisite repair

Run `node tools/validate-plan.mjs research/plan-spec.json` and read every
`undeclared-prereq` row for the live ids. Open the citing item, its dependency,
both owning pages, and the current page `requires` closure.

- Genuine backward prerequisite: add the required page edge and revalidate.
- Unneeded or incorrect dependency: rewrite the citing item and remove the bad
  dependency; do not inflate page prerequisites.
- Forward prerequisite: do not hide a reading-order defect. Record the exact
  owner blocker unless the active task explicitly licenses reordering.
- Dependency on an `-examples` page: reroute through an A-page result carrying
  the needed theorem. Adding a page edge cannot make this legal.

Record one evidence-bearing decision per edge in the Step 6 report. For a
concrete item defect, also write the Step 6 gate decision and ledger row. Never
overwrite the durable Step 4 task or report.
