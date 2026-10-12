# Step 5a refuter — batch `<i>`, run `<run>`

- This dispatch owns exactly one batch: `<i>`, as listed in `covers:`.
- Read `research/<run>-step5-scope-<i>.json`; its `refuter_scope` is the exact list of item and page carriers you owe.
- Read `research/<run>-reader-<i>.md` and `research/<run>-reader-findings-<i>.json` for context, then verify every result from the current files.
- The computed scope also includes another batch's draft producer named by a valid `in-run-dependency` reader finding. Open it as read-only work, distinguish the historical reader observation from its current proof, and flag only a defect actually present in the current carrier. The original reader obligation remains owed to Alpha even when the current source is repaired.
- Open every scoped carrier exactly once and any dependency needed to test an assigned claim.
- Follow `briefs/refuter.md`; the role is read-only and returns evidence only.
- Return only the schema-conforming JSON for `research/<run>-refute-<i>.json`.
- Set `batch` to the bare batch id `<i>`, `opened` to every scoped id exactly once, and `not_opened` to `[]`; a partial partition blocks the collect stage.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; an empty `flagged` array is the correct result of a complete read with no defect.
- State what you checked and any genuine limitation in `coverage_note`.
