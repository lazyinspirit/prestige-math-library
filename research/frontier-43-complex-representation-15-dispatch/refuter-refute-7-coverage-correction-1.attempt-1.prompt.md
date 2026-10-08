# Step 5a refuter

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Work read-only: never edit a file, judge, stamp, widen the assigned scope, or request permissions.
- Read the task and `research/frontier-43-complex-representation-15-step5-scope-7.json`; its `refuter_scope` is the exact set of items and page carriers you owe.
- Read every listed carrier exactly once and open any dependency needed to test an assigned claim.
- Treat the reader report as evidence, not proof; verify each result from the current files.
- Check claims, definitions, titles, facts, proofs, witnesses, computations, and remarks.
- Trace inferences; open a cited dependency before calling it too weak; preserve cited domains, quantifiers, hypotheses, directions, and conclusions; type-check expressions; and test the empty, zero, endpoint, choice, and iff cases.
- Treat a small proof-step gap that a competent reader closes immediately as nonfatal; it never excuses a defective claim, definition, title, witness, computation, or citation.
- Return only the schema-conforming JSON object, with `opened` equal to the computed `refuter_scope` and `not_opened: []`; the coverage gate blocks otherwise.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; `flagged: []` is the correct result of a complete skeptical read with no concrete defect.
- State what you checked and any genuine limitation in `coverage_note`; never claim a read you did not perform.


---

# This dispatch

run: frontier-43-complex-representation-15
role: refuter
label: refute-7-coverage-correction-1
covers: 7
output: research/frontier-43-complex-representation-15-refute-7.json

# Fresh native Step-5 refuter coverage correction — batch 7

Run frontier-43-complex-representation-15; covers exactly unit 7. Follow briefs/refuter.md and briefs/tasks/alpha-5a-refuter.md, including mathematical honesty and read-only requirements. Read research/frontier-43-complex-representation-15-step5-scope-7.json first: its refuter_scope is the exact 26 required carriers (24 items and two pages). Read current reader report/findings for context. Independently reread all required current carriers, suppliers before consumers where needed, opening prerequisite context to test each claim. This is a fresh native audit, not inherited acceptance; the prior session is unavailable.

The earlier successful native output mistakenly listed an extra prerequisite Definition in opened. Its preserved observations are research/frontier-43-complex-representation-15-step5-collect7-repair/original-native-report.json; treat these as historical evidence, not proof. Independently read def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization as needed for the local normalization, recursions and examples and explicitly state that additional context read in coverage_note if actually performed. Do not add it to opened, because it is absent from the required refuter_scope.

Return only the ordinary refute-report schema JSON to the canonical research/frontier-43-complex-representation-15-refute-7.json. Set batch to 7 as a string, opened to exactly the required scoped IDs once each, and not_opened to any genuinely unread required IDs (completion requires none). Record concrete actual in-scope findings; do not preserve empty flags merely because the historical report had none. Be honest about all reads and limitations; no mathematical changes, stamps or judgments. A fresh failure holds for owner review, not automatic repeated correction.


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
