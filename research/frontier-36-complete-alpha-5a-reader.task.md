# Step 5a reader — batch `<i>`, run `<run>`

- Read `research/<run>-batch-<i>.pages.json`, then open every page it lists in `library/<category>/<page>.md` and every item in `items/<id>.md`, plus each dependency needed to verify a claim.
- Follow `briefs/reader.md`; the assigned batch is your whole scope and its authors' decisions carry no authority over your reading.
- Repair only a confirmed defect in an in-flight item of this batch or in assigned A-page prose; do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- Keep a proposed withdrawal present for the 5b lead; do not delete an item, page, or claim.
- After a material repair, update the affected proof contract, remove the stale `verification.judge` record, and run `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each changed item.
- Write `research/<run>-reader-<i>.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only the schema-conforming JSON for `research/<run>-reader-findings-<i>.json`: set `batch` to the bare batch id `<i>`, list only uneditable findings, and use an empty `findings` array when none remains.
- Give each finding its exact location, defect class, evidence, and severity, and — for a published dependency — the assigned consumer whose dependency closure reaches it.
- A repaired defect belongs in the report and the disk diff, not in the findings array; the mechanical split refuses a finding that names a carrier the reader changed.
- Record a genuine limitation in `coverage_note` rather than claiming coverage you did not achieve.
