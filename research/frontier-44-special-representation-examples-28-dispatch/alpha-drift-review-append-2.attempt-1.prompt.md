# Step 1a — prerequisite drift review

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

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

run: frontier-44-special-representation-examples-28
role: alpha
label: drift-review-append-2
covers: append-2
output: research/frontier-44-special-representation-examples-28-alpha-step1-append-2-drift.md

# Native appended-frontier drift review 2: frontier-44-special-representation-examples-28

Review ONLY these newly appended A pages: ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.
Read research/frontier-44-special-representation-examples-28-append-2-drift-evidence.json, the complete assigned designs and research/frontier-44-special-representation-examples-28-owner-authoring-direction.md if present.
Read research/frontier-44-special-representation-examples-28-scope-ledger.json and the appended batch manifests (50); existing reviews remain historical evidence, not a new review.
Write research/frontier-44-special-representation-examples-28-alpha-step1-append-2-drift.md, one ### PAGE_ID and one VERDICT line per assigned A page.
Allowed verdicts: no-drift, drift-applied, drift-reordered, drift-blocked. Apply only authorized plan corrections for these new pages; do not edit existing manifests/content, mint, rescope, or claim proof acceptance.
Run node tools/tsx-run.mjs tools/autopilot/bin/frontier-append.mts check-review --run frontier-44-special-representation-examples-28 --generation 2.
Run node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28 --before-apply; current inventories are retained while intended canonical page metadata is checked before native SYNC.
Run node tools/validate-plan.mjs research/plan-spec.json --pages-file research/frontier-44-special-representation-examples-28-frontier-append-2/new-pages.json to check all actual planned new item declarations even before scaffolding.
Name actual unresolved design/source prerequisites honestly; consult the full authoritative sources needed to assess the supplied designs. The engine owns review materialization.


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
