# Step 1 — prerequisite drift, `{{run}}`

Read `research/{{run}}-scope-ledger.json`, every assigned batch manifest,
the corresponding prose scaffolds, and `research/plan-spec.json`.
Review every A page in the scope ledger for missing prerequisites.

Write `research/{{run}}-alpha-step1-drift.md`, with one `### PAGE_ID` section
per A page and exactly one `VERDICT:` line per section. Use `no-drift`,
`drift-applied`, `drift-reordered`, or `drift-blocked`. Name prerequisite
edges as `PAGE_ID (order N)` and ordering changes as
`PAGE_ID (order OLD -> NEW)`. Explain evidence and remaining uncertainty.

Apply only authorized plan corrections. New pairs, substantial prerequisites,
and scope changes require the owner. `drift-minted` and `drift-rescoped`
record only explicitly authorized amendments. Do not edit content or manifests.

Run `node tools/drift-review-check.mjs --run {{run}} --before-apply` and
`node tools/validate-plan.mjs research/plan-spec.json`. Report blockers;
the engine owns materialization.
