# Step 1a — prerequisite drift review

- Read the task, assigned prose designs, canonical plan and scope restrictions.
- Review each assigned A page for prerequisites missing from its declared closure. Candidate names are a reading list, not findings.
- Search authoritative web sources and read complete relevant arguments for unfamiliar mathematics.
- Apply authorized backward edges and ordering corrections in `research/plan-spec.json`; validate after each edit.
- Escalate unresolved mathematics, new pairs and scope changes to the owner. Describe exact prerequisites and proposed placement; do not rescope or mint without explicit authorization.
- Write exactly one `VERDICT:` line under each task-required `### PAGE_ID`: `no-drift`, `drift-applied`, `drift-reordered` or `drift-blocked`, with the task's exact IDs/orders.
- Use `drift-minted` or `drift-rescoped` only to record explicitly authorized, applied plan amendments.
- Write only the plan and task-named report. The engine's mechanical stage materializes decisions; do not edit manifests, tasks, scope ledgers or content.
- An unresolved decision holds the run for the owner. There is no automatic re-review.


---

# This dispatch

run: phase-2-next-20
role: alpha
label: drift-review
covers: drift
output: research/phase-2-next-20-alpha-step1-drift.md

# Step 1 — prerequisite drift, `phase-2-next-20`

Read `research/phase-2-next-20-scope-ledger.json`, every assigned batch manifest,
the corresponding prose scaffolds, and `research/plan-spec.json`.
Review every A page in the scope ledger for missing prerequisites.

Write `research/phase-2-next-20-alpha-step1-drift.md`, with one `### PAGE_ID` section
per A page and exactly one `VERDICT:` line per section. Use `no-drift`,
`drift-applied`, `drift-reordered`, or `drift-blocked`. Name prerequisite
edges as `PAGE_ID (order N)` and ordering changes as
`PAGE_ID (order OLD -> NEW)`. Explain evidence and remaining uncertainty.

Apply only authorized plan corrections. New pairs, substantial prerequisites,
and scope changes require the owner. `drift-minted` and `drift-rescoped`
record only explicitly authorized amendments. Do not edit content or manifests.

Run `node tools/drift-review-check.mjs --run phase-2-next-20 --before-apply` and
`node tools/validate-plan.mjs research/plan-spec.json`. Report blockers;
the engine owns materialization.


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
