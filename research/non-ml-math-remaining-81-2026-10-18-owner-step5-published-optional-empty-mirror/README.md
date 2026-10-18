# Optional empty justified_by mirror proposal

Three owned files, no canonical changes. Surgical bridge comparison treats only absent and [] as equivalent empty optional justified_by edges; all other fields retain exact comparisons. Existing manifest [] can remain with absent source field, avoiding unrelated source edits. Explicit recorded normalization stays restricted to authenticated published IDs with exact old/current archives. Null/nonempty/type coercions and nonpublished carrier changes remain rejected.

All 57 focused fixtures pass: original45 plus12 new positive/negative normalization fixtures. `focused-tests.tap` retains results. Before/HEAD/index guards and identical HEAD-only candidate are included. Root independently reviews/tests/scoped integrates before actual bridge recording. No native state, sources, claims, receipts, gates or index changed.
