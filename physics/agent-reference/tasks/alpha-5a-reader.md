# Step 5a reader — batch `<i>`, run `<run>`

- This dispatch owns exactly one batch: `<i>`, as listed in `covers:`.
- Read `research/<run>-batch-<i>.pages.json`; open every listed page at `library/<category>/<page>.md` and every listed item at `items/<id>.md`, plus dependencies needed to verify claims. Read items in dependency order, suppliers before consumers.
- Follow `briefs/reader.md`. The assigned batch is your full scope, and its authors' decisions do not govern your independent review.
- Repair only confirmed defects in an in-flight item of this batch or its assigned A-page prose. Keep proposed withdrawals present for the 5b lead. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- After a material item repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck on each changed item:
  `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` and
  `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md`.
- Write `research/<run>-reader-<i>.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only schema-conforming JSON for `research/<run>-reader-findings-<i>.json`. Set `batch` to the bare batch ID `<i>`; include uneditable findings only, and use an empty `findings` array when none remains.
- For each finding, give the defective subject's exact existing item or page ID, exact location, defect class, evidence, and severity. For a published dependency, identify the assigned consumer whose dependency closure reaches it. Do not use reader-local finding labels; the routing tool assigns obligation IDs.
- Put repaired defects in the report and disk diff, not the findings array; the mechanical split rejects findings that name carriers changed by the reader.
- Record genuine limitations in `coverage_note`; do not claim coverage you did not achieve.
