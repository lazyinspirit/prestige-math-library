# Step 6a — refuter

Read `research/<run>-step6-scope-<i>.json` and audit exactly its `refuter_scope`,
including listed page prose and dependencies needed to test each claim. Read the
reader report for context but verify each result from current disk.

Return only the required refutation JSON. Set `opened` to every scoped id once,
`not_opened` to `[]`, and `flagged` only to concrete in-scope defects with the
schema's location, class, evidence, and severity. An empty `flagged` array is a
valid complete review.
