# Beta authoring

The task defines your batch, input artifacts, output report, and required
checks. Author only the in-flight items and page material assigned to that
batch. Do not alter another batch, plan structure, workflow state, or published
content. Do not judge, stamp, or request permissions.

Follow [SCHEMA.md](../SCHEMA.md) exactly. Keep item ids stable and correctly
prefixed for their kinds; use only resolvable dependencies and the dedicated
fields for well-definedness, forward references, and recorded-not-proved
material. A generated statement is never a dependency target. A material
change must keep its provenance, sources, generation data, proof strategy, and
verification state truthful; remove a stale `verification.judge` record.

Write every planned page directly at
`library/<page.category>/<page.id>.md`. A prerequisite category does not own a
later track: in particular, every functional-analysis A/B pair belongs under
`library/functional-analysis/`, never under `library/real-analysis/`.

Every page and item authored by the current run must remain `status: draft`.
Publication is an owner action after the run closes; never create or change an
in-flight artifact to `status: published`.

Write mathematics that establishes the stated claim. Check hypotheses,
quantifiers, types, boundary cases, and both iff directions before committing a
proof. Cite the proposition actually used, preserving its domain, hypotheses,
direction, and conclusion; never use a citation to widen a weak result. Put
mathematical content in text and equations, not only in a diagram. Keep proof
rows and math delimiters renderable under the schema's phase and Markdown
contracts.

Maintain the task-required proof contract as evidence of the proof actually
written: map cited facts and proof uses, and record real dispositions for each
applicable boundary axis. A bounded finite-smoke check can find a
counterexample; it is not a proof. If a claim fails an honest check, narrow it,
remove it from the in-flight scaffold through the authorised path, or report a
blocker—never fabricate supporting evidence.

Use the task's focused validators and append the required factual report to the
named batch notes. Do not claim success for checks you did not run.


---

# This dispatch

run: frontier-31a
role: beta
label: author-batch-10
covers: 10
output: research/frontier-31a-batch-10.proof-contracts.json

> The dispatch block supplies batch `10`.

# Step 5 — author batch `10`, `frontier-31a`

Required inputs are `research/frontier-31a-batch-10.pages.json`,
`research/frontier-31a-batch-10.notes.md`,
`research/frontier-31a-batch-10.coverage.json`, and
`research/frontier-31a-beta-10.task.md`. Use `research/frontier-31a-alpha-groups.json`
to find the group whose `covers` includes this batch, then read its
`research/frontier-31a-alpha-GROUP-step3-verdicts.json` and
`research/frontier-31a-alpha-GROUP-step3-scaffold-review.md` (replace GROUP with
that exact label). Report a missing required input; do not search prior runs
for a substitute. Author only the batch's planned items and pages.

`research/frontier-31a-batch-10.proof-contracts.json` is an output to complete;
read and preserve any existing entries, or create it if absent. Use the
contract requirements in `SCHEMA.md` and `tools/proof-contract.mjs`, not another
run's contracts as mathematical evidence. Read sources at the locators in this batch's coverage
and notes, together with the exact current cited dependency statements.

For each proof-bearing item, complete the item-specific proof-contract and
boundary dispositions: a `checked` row identifies its proof step; a
`not_applicable` row gives the mathematical reason for that statement. Preserve
the exact claim of every cited `[F#]`, `[A#]`, or `[L#]` target.

Run `node tools/tsx-run.mjs tools/precheck.mts` with the explicit
`items/ID.md` paths from this batch's manifest; do not omit the paths.
Run `node tools/validate-plan.mjs`,
`node tools/content-policy.mjs research/frontier-31a-batch-10.pages.json`, and
`node tools/proof-contract.mjs research/frontier-31a-batch-10.proof-contracts.json --strict`.
Apply any canonical precheck repair before rerunning. Append
`## Step-5 authoring` to the batch notes with authored ids, provenance rationale,
narrowed/dropped claims, and blockers.


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
