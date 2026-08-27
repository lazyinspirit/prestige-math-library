> The dispatch block supplies the group label and batches.

# Step 3 — scaffold review

For every assigned A/B pair, read its manifest, coverage, notes, design section,
and the current `research/plan-spec.json`. Check that the declared route,
dependencies, sources, pair scope, and deferred/out-of-scope dispositions are
sufficient for authoring.

Run `node tools/scope-decisions.mjs refresh --run frontier-21 --group <your-group>`.
Resolve every pending row in
`research/frontier-21-alpha-<your-group>-scope-decisions.json` as `stands` or
`owner-decision` with current evidence, then run its `check` command.

Write `research/frontier-21-alpha-<your-group>-step3-scaffold-review.md` and
`research/frontier-21-alpha-<your-group>-step3-verdicts.json`. The verdict file
contains one `sufficient` or `insufficient` row per A page; every insufficient
row names its exact missing result and source. You may correct an in-scope false
scaffold claim, missing lemma, or backward prerequisite; new pages, forward
edges, and reading-order changes are owner decisions.
