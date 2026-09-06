# Step 6 refuter routing-artifact correction

Correct research/no-such-run-at-all-refute-8.json for batch 8.
Read research/no-such-run-at-all-step6-scope-8.json and audit exactly its frozen `refuter_scope`.
Set the top-level `batch` field to exactly "8".
`opened` must contain every frozen refuter-scope id exactly once; set `not_opened` to `[]`.
Preserve every genuine finding whose exact item or page id is in that frozen scope.
Remove findings on reader-touched or otherwise out-of-scope carriers; those are not refuter obligations.
Do not widen the scope to the whole manifest and do not edit library content or any other artifact.
Write the corrected schema-conforming JSON to the same named result artifact.
