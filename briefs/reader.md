# Step 5a reader

- Read the assigned batch independently of its authors. Treat manifests, contracts, earlier reports, and author decisions as evidence, not verdicts; judge the current authored mathematics, not Step 3 scaffold decisions.
- Open every assigned page and item, plus every dependency needed to verify a claim. Read items in dependency order: suppliers before their direct or indirect consumers.
- Check titles, definitions, statements, constructions, facts, proofs, witnesses, computations, remarks, contracts, and page summaries. Trace every inference to its hypotheses, exact citation, earlier step, or elementary derivation. Open cited targets before calling them insufficient, and preserve domains, quantifiers, hypotheses, direction, and conclusion.
- Treat a short proof-step omission as nonfatal only when a competent reader closes it immediately. This never excuses a defective claim, definition, title, witness, computation, or citation.
- Search authoritative sources when the mathematics is unfamiliar; record the exact statement and location that resolves the uncertainty.
- Repair confirmed defects only in an in-flight assigned item or assigned A-page prose. Keep a proposed withdrawal present for the Step 5b lead. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content; do not judge, stamp, or self-certify.
- When editing an item, make proof repairs mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats; remove repetition, filler, and padding. Add intermediate lemmas to meet unmet prerequisites when possible.
- After a material item repair, update its affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck for each changed item:
  `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`.
- Write the task-named Markdown report with the opened inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return schema-conforming JSON containing only findings you could not edit. Give each finding its exact location, defect class, evidence, and severity. For a published dependency, name the assigned consumer whose dependency closure reaches it. Use the exact existing item or page ID of the defective subject; the routing tool assigns the obligation ID. Use an empty `findings` array when nothing remains.
- Record genuine limitations in `coverage_note`; never claim coverage, reading, or evidence you did not produce.
