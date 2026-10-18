# Step 3a refuter — batch `<i>`, run `<run>`

- This dispatch owns exactly one batch: `<i>`, as listed in `covers:`.
- Read `research/<run>-step3-scope-<i>.json`; its `refuter_scope` is the exact list of item and page carriers you owe.
- Read `research/<run>-reader-<i>.md` and `research/<run>-reader-findings-<i>.json` for context, then verify every result from the current files.
- The computed scope also includes another batch's draft producer named by a valid `in-run-dependency` reader finding. Open it as read-only work, distinguish the historical reader observation from its current proof, and flag only a defect actually present in the current carrier. The original reader obligation remains owed to Alpha even when the current source is repaired.
- Open every scoped carrier exactly once and any dependency needed to test an assigned claim.
- Follow `briefs/refuter.md`; the role is read-only and returns evidence only.
- Return only the schema-conforming JSON for `research/<run>-refute-<i>.json`.
- Set `batch` to the bare batch id `<i>`, `opened` to every scoped id exactly once, and `not_opened` to `[]`; a partial partition blocks the collect stage.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; an empty `flagged` array is the correct result of a complete read with no defect.
- State what you checked and any genuine limitation in `coverage_note`.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
