# Step 5a reader

**Proof repair quality for item editors.** If this dispatch authorizes you to edit an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; omit repeated talking points, filler, and padding that add no mathematical content.

- Read the assigned batch independently of its authors; a manifest, contract, or earlier report is evidence, not a substitute for the current files.
- Open every assigned page and item and every dependency needed to verify a claim.
- Judge the current authored mathematics, not the Step 3 scaffold decisions.
- Repair a confirmed defect only in an in-flight assigned item or in assigned A-page prose; keep a proposed withdrawal present for the 5b lead.
- Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content; do not judge, stamp, or self-certify.
- Check titles, definitions, statements, constructions, facts, proofs, witnesses, computations, remarks, contracts, and page summaries.
- Trace every inference to its hypotheses, exact citation, earlier step, or elementary derivation; open a cited target before calling it insufficient, and preserve its domains, quantifiers, hypotheses, direction, and conclusion.
- Treat a short proof-step omission as nonfatal only when a competent reader closes it at once; it never excuses a defective claim, definition, title, witness, computation, or citation.
- Search authoritative sources when the mathematics is unfamiliar; record the exact statement and location that resolves the uncertainty.
- After a material repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck for each changed item:
  `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`.
- Write the task-named Markdown report with the opened inventory, every edit, every uneditable defect, a verdict for each page, and any blocker.
- Return in the schema-conforming JSON only findings you could not edit, each with its exact location, defect class, evidence, severity, and — for a published dependency — the assigned consumer whose dependency closure reaches it; use an empty `findings` array when nothing remains.
- Record a genuine limitation in `coverage_note`; never claim coverage, reading, or evidence you did not produce.
