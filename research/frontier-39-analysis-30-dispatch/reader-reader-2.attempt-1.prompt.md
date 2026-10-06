# Step 5a reader

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- Read the assigned batch independently of its authors. Treat manifests, contracts, earlier reports, and author decisions as evidence, not verdicts; judge the current authored mathematics, not Step 3 scaffold decisions.
- Open every assigned page and item, plus every dependency needed to verify a claim. Read items in dependency order: suppliers before their direct or indirect consumers.
- Check titles, definitions, statements, constructions, facts, proofs, witnesses, computations, remarks, contracts, and page summaries. Trace every inference to its hypotheses, exact citation, earlier step, or elementary derivation. Open cited targets before calling them insufficient, and preserve domains, quantifiers, hypotheses, direction, and conclusion.
- Identify and flag every prerequisite the proof silently assumes but does not establish, and every other insufficiently justified proof step. For each, give the exact location, state what is assumed or missing and why the available hypotheses and dependencies do not supply it, and specify the proof or authoritative source needed to close the gap. Do not treat an unstated prerequisite as standard background.
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


---

# This dispatch

run: frontier-39-analysis-30
role: reader
label: reader-2
covers: 2
output: research/frontier-39-analysis-30-reader-2.md

# Step 5a reader — batch `2`, run `frontier-39-analysis-30`

- This dispatch owns exactly one batch: `2`, as listed in `covers:`.
- Read `research/frontier-39-analysis-30-batch-2.pages.json`; open every listed page at `library/<category>/<page>.md` and every listed item at `items/<id>.md`, plus dependencies needed to verify claims. Read items in dependency order, suppliers before consumers.
- Follow `briefs/reader.md`. The assigned batch is your full scope, and its authors' decisions do not govern your independent review.
- Repair only confirmed defects in an in-flight item of this batch or its assigned A-page prose. Keep proposed withdrawals present for the 5b lead. Do not edit another batch, `research/plan-spec.json`, B-page prose, or published content.
- After a material item repair, update the affected proof contract, remove the stale `verification.judge` record, and run reflow and precheck on each changed item:
  `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`.
- Write `research/frontier-39-analysis-30-reader-2.md` with the opened item and page inventory, every edit and its evidence, every defect you could not edit, a verdict for each page, and any blocker.
- Return only schema-conforming JSON for `research/frontier-39-analysis-30-reader-findings-2.json`. Set `batch` to the bare batch ID `2`; include uneditable findings only, and use an empty `findings` array when none remains.
- For each finding, give the defective subject's exact existing item or page ID, exact location, defect class, evidence, and severity. For a published dependency, use `subject_type: "published-dependency"` and identify the assigned consumer whose dependency closure reaches it. For a draft supplier in another exact current-run batch, use `subject_type: "in-run-dependency"` with that assigned `consumer_id`; its producer remains outside your edit scope. Do not relabel a draft supplier as published or an assigned item. Do not use reader-local finding labels; the routing tool assigns obligation IDs.
- Set `observed_source` to `null` unless an in-run dependency finding can bind the exact bytes you observed. When it can, use `{snapshot: "pre" | "current", item_sha256: "<raw source SHA-256>"}` for the producer's pre-reader snapshot or source still current at split. If another writer has corrected it and you cannot bind the original bytes, retain the historical claim/evidence and explain the missing-byte limit. A stored pre-reader fingerprint is a baseline, not proof that you observed those exact bytes.
- Put repaired defects in the report and disk diff, not the findings array; the mechanical split rejects findings that name carriers changed by the reader.
- Record genuine limitations in `coverage_note`; do not claim coverage you did not achieve.


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
