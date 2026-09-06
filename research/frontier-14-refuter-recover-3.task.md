# Step 6 refuter routing-artifact correction

Correct research/frontier-14-refute-3.json for batch 3.
Read research/frontier-14-step6-scope-3.json and audit exactly its frozen `refuter_scope`.
Set the top-level `batch` field to exactly "3".
`opened` must contain every frozen refuter-scope id exactly once; set `not_opened` to `[]`.
Preserve every genuine finding whose exact item or page id is in that frozen scope.
Remove findings on reader-touched or otherwise out-of-scope carriers; those are not refuter obligations.
Do not widen the scope to the whole manifest and do not edit library content or any other artifact.
Write the corrected schema-conforming JSON to the same named result artifact.
