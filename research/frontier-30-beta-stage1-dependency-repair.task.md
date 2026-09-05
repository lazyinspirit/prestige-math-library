# Stage-1 scaffold dependency repair — batch 16, `frontier-30`

The Stage-1 whole-run manifest-only content-policy gate is blocked by 34
`batch-dependency-missing` findings, all owned by batch 16. Repair the scaffold
without weakening its mathematics.

Work only in:

- `research/frontier-30-batch-16.pages.json`
- `research/frontier-30-batch-16.coverage.json`
- `research/frontier-30-batch-16.notes.md`

Read the controlling RL-1 design, the batch notes and sources, and the actual
published item corpus. Run this command to obtain the complete current finding
set:

```bash
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
```

For every missing dependency:

1. Search `items/` and aliases for the actual existing item that supplies the
   same mathematical interface. Replace a proposed id only after checking the
   existing item's statement, not merely a similar title.
2. If no existing item supplies the needed fact, keep the proof route honest:
   add an appropriately scoped, source-backed local intermediate item to the
   batch, or restructure the dependent item so the prerequisite is proved
   locally. Do not simply delete a genuine dependency.
3. Do not mint an id already planned for another page, depend on an unpublished
   planned item, edit `research/plan-spec.json`, or modify another batch.
4. Keep every manifest item’s explicit `deps` array and preserve the A/B page
   size and leaf constraints.
5. Update batch-16 coverage for every added scaffold item, with exact source
   backing and locators. Append a `## Stage-1 dependency repair` section to the
   notes recording each replacement or local proof-boundary decision.

Before finishing, all of these must pass:

```bash
node tools/coverage-checklist.mjs research/frontier-30-batch-16.coverage.json --require-destination
node tools/manifest-deps.mjs research/frontier-30-batch-*.pages.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

Do not edit workflow state, item files, library pages, or the plan. Do not ask
for permissions.
