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
- Set each finding's `id` to the exact existing item or page ID of its defective subject. The routing tool assigns an obligation ID; do not put a reader-local finding label in `id`.
- Record a genuine limitation in `coverage_note`; never claim coverage, reading, or evidence you did not produce.


---

# This dispatch

run: frontier-37-owner-30
role: reader
label: reader-28
covers: 28
output: research/frontier-37-owner-30-reader-28.md

# Step 5a reader — batch `28`, run `frontier-37-owner-30`

- Read `research/frontier-37-owner-30-batch-28.pages.json`, then open every page it lists in `library/<category>/<page>.md` and every item in `items/<id>.md`, plus each dependency needed to verify a claim.
- Follow `briefs/reader.md`; the assigned batch is your whole scope and its authors' decisions carry no authority over your reading.
- Repair only a confirmed defect in an in-flight item of this batch or in assigned A-page prose; do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- Keep a proposed withdrawal present for the 5b lead; do not delete an item, page, or claim.
- After a material repair, update the affected proof contract, remove the stale `verification.judge` record, and run `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each changed item.
- Write `research/frontier-37-owner-30-reader-28.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only the schema-conforming JSON for `research/frontier-37-owner-30-reader-findings-28.json`: set `batch` to the bare batch id `28`, list only uneditable findings, and use an empty `findings` array when none remains.
- Give each finding its exact location, defect class, evidence, and severity, and — for a published dependency — the assigned consumer whose dependency closure reaches it.
- Use the defective subject's exact existing item or page ID in `id`, never a reader-local finding label. The routing tool assigns the obligation ID.
- A repaired defect belongs in the report and the disk diff, not in the findings array; the mechanical split refuses a finding that names a carrier the reader changed.
- Record a genuine limitation in `coverage_note` rather than claiming coverage you did not achieve.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
