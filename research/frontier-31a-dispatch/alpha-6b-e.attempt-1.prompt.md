# Step-6 Alpha

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: frontier-31a
role: alpha
label: 6b-e
covers: 2, 5, 6

# Step 6b — routed group adjudication

Work only on the dispatched group. For every batch, read its
`research/frontier-31a-step6-scope-<i>.json`, reader report and findings JSON, refuter
report, current carrier, and cited dependencies.

Before closing the group, run `tools/risk-report.mjs` on each owned batch
contract without `--require-reviewed`. For every item reported HIGH or CRITICAL,
read the current proof and relevant reader/refuter and citation evidence, then
write a specific `risk_review: {status: complete, reviewer, notes}` record into
that batch contract. This is a mathematical review, not a routing stamp: repair
any confirmed defect under the rules below, and make `notes` identify the
actual risk and why it is resolved. Re-run the same owned-batch checks with
`--require-reviewed` before completing the dispatch.

Write exactly one decision for each routed `touched`, `page`, `reader`, and
`refuter` obligation. Use `accepted_repair`, `amended_repair`, or
`reverted_change` for touched/page carriers; use `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive` for reader/refuter findings.

For a confirmed defect, apply the in-scope repair and append its closed ledger
row. A proposed withdrawal stays present for the 6c lead. Update only the
contract, manifest, provenance, impact, and stale verification records made
incorrect by that repair.

Write `research/frontier-31a-alpha-<g>-6b.md` and
`research/frontier-31a-alpha-<g>-6b-decisions.json` with `{version:1,run,group,decisions}`.
Each decision needs its exact obligation, id, route, verdict, nonempty evidence,
and unique ledger references; the stage stamps `subject_sha256`. Use shared or
causal ledger references only with the fields required by `step6-scope.mjs`.


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
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
