# Step 3a — scope review

- Review each assigned A/B pair against its prose design, source coverage and role in the library. Decide scope, not proof correctness.
- Be impartial. State uncertainty honestly. For unfamiliar mathematics, search authoritative web sources and read the complete relevant arguments.
- Record `sufficient` only when the planned definitions, results and examples cover the intended subject adequately.
- Record `insufficient` otherwise, naming omitted topics/results and recommending enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or choose for the owner.
- The owner alone decides to proceed, merge pairs or enrich the scaffold. A merger/enrichment remains blocked until applied and the owner records `proceed` for the resulting scope.
- Read current manifests, coverage, prose, plan and any owner decisions. Write a concise dispatch report and one scope decision per assigned A page. Do not write item approvals or owner records.

```bash
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```


---

# This dispatch

run: frontier-35-ten-categories
role: alpha
label: step3a-pair-frobenius-groups-and-the-normal-complement-theorem-fa4cf6e3c72382d0
covers: frobenius-groups-and-the-normal-complement-theorem

# step3a: A/B pair frobenius-groups-and-the-normal-complement-theorem

- Run: frontier-35-ten-categories
- A page: frobenius-groups-and-the-normal-complement-theorem
- B page: frobenius-groups-and-the-normal-complement-theorem-examples
- Batches: 10
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Write research/frontier-35-ten-categories-step3a-pair-frobenius-groups-and-the-normal-complement-theorem.md.


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
