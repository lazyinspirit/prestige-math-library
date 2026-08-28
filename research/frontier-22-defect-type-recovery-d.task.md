# Step 8 adjudication-shape recovery — group D

The `judge-closure` gate found malformed rows in
`research/frontier-22-judge-adjudications.jsonl`: every group-D row whose
`outcome` is `confirmed_fatal` must also carry an accurate `defect_type`.

Read the group-D items and your original Step 8 context. For each group-D
`confirmed_fatal` row that lacks `defect_type`, add exactly one of:

- `logic` — a mathematically false/invalid statement or inference;
- `dependency_citation` — the fatal issue is an absent or insufficient cited dependency;
- `other` — a different fatal correctness defect.

Do not change outcomes, hashes, models, item text, row order, or any row owned
by another group. Preserve the JSONL as one object per line. When finished,
run the judge-closure/coverage validator far enough to confirm there is no
remaining malformed group-D row, and report what you classified.
