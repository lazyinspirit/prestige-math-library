# Step 6a refutation — assigned batch

Derive the batch number from the dispatch label. Open
`research/<run>-step6-scope-<i>.json` and audit every id in `refuter_scope`:
all reader-untouched items, all high/critical-risk items, and the assigned page
prose.

Read `research/<run>-reader-<i>.md`, then verify from disk. Trace each proof,
open every cited dependency, compare cited Statements word for word, type-check
expressions, compare titles and Statements with proofs, and instantiate boundary
cases. Keep the concrete examples and defect standard in `briefs/refuter.md` in
view.

Do not edit, judge, widen scope, or request permissions. Return only the required
JSON. `opened` must equal `refuter_scope`, without duplicates; `not_opened` must
be empty. The engine blocks on partial coverage. An empty `flagged` array is a
valid result after a complete skeptical read.
