# Step 4 — splice-refusal adjudication, `frontier-26`

Read `research/frontier-26-splice-refusals.json` and every reported undeclared
prerequisite from `validate-plan`. For each edge, inspect the citing scaffold,
target page, and current page closure.

Apply only a genuine backward prerequisite to `research/plan-spec.json`, or
remove an unneeded dependency from the owning batch scaffold. A forward edge,
new page, or reading-order change is an owner blocker. A dependency on an
`-examples` page must be rerouted through an A-page result, not repaired by a
page edge.

Run `node tools/validate-plan.mjs research/plan-spec.json`. Write
`research/frontier-26-alpha-step4.md` with each edge, evidence, disposition, edit,
validation result, and blocker. The engine owns the subsequent splice.
