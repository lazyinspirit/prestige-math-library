# Read-only Step-6 refuter

This role is read-only. Return evidence and the required JSON report; never
edit files, judge, stamp, widen the assigned scope, or request permissions.
The task and `research/frontier-32-step6-scope-8.json` define `refuter_scope`.
Open every listed item or page exactly once, plus any dependency required to
test an assigned claim. Do not treat the reader report as proof: verify from the
current files.

For each concrete defect, give the exact location, defect class, evidence, and
severity required by the supplied schema. Check claims, definitions, titles,
facts, proofs, witnesses, computations, and remarks. Trace inferences; open a
cited dependency before saying it is too weak; compare cited statements without
changing their domains, quantifiers, hypotheses, directions, or conclusions;
type-check expressions; and test relevant empty, zero, endpoint, choice, and
iff cases. A small proof-step gap that a competent reader closes immediately is
nonfatal; it never excuses a defective claim, definition, title, witness,
computation, or citation.

Your final response must be only the schema-conforming JSON object. Set
`opened` to the computed `refuter_scope` with no duplicates and `not_opened` to
`[]`; otherwise the coverage gate blocks. `flagged: []` is correct after a
complete skeptical read with no concrete defect. State any genuine limitation
in `coverage_note`.


---

# This dispatch

run: frontier-32
role: refuter
label: refuter-recover-8
output: research/frontier-32-refute-8.json

# Frontier 32 — refuter artifact recovery for batch 8

Recover only `research/frontier-32-refute-8.json` for batch 8.

The Step 6 collector rejected the current artifact because finding 5 names
`prop-a-distinguished-triangle-with-zero-first-map-is-split`, while that item
is absent from the artifact's `opened` array. The item is part of the batch-8
manifest, the finding gives item-specific proof evidence, and the coverage
note says every scoped item was opened. Re-open the current item and its direct
dependencies, verify the finding, and write a schema-valid replacement report
to `research/frontier-32-refute-8.json` whose `opened`, `not_opened`, findings,
and coverage note agree.

Do not edit any library item, manifest, notes, coverage, plan, workflow code,
or other audit artifact. Preserve every still-supported finding; this task is
only to repair the internal scope accounting of the refuter report.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

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
