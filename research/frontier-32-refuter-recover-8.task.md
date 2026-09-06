# Frontier 32 — refuter artifact recovery for batch 8

Recover only `research/frontier-32-refute-8.json` for batch 8.

The Step 6 collector rejected the original artifact because finding 5 named
`prop-a-distinguished-triangle-with-zero-first-map-is-split`, which is not in
the frozen refuter scope. The reader changed and repaired that item before the
split, so `research/frontier-32-step6-scope-8.json` correctly excludes it from
`refuter_scope`; it is not a refuter obligation. A first recovery incorrectly
widened `opened` to all 53 manifest items. Replace that report again so
`opened` is exactly the 41 ids in the frozen `refuter_scope`, `not_opened` is
empty, the stale finding on the reader-repaired item is removed, and every
other still-supported in-scope finding is preserved. Make the coverage note
describe the exact 41-item frozen scope plus the two routed pages.

Do not edit any library item, manifest, notes, coverage, plan, workflow code,
or other audit artifact. Preserve every still-supported in-scope finding; this
task is only to repair the internal scope accounting of the refuter report.
