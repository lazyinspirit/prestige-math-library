# Step 3a — scope review

- Review each assigned A/B pair against its prose design, source coverage and role in the library. Decide scope, not proof correctness.
- Be impartial. State uncertainty honestly. For unfamiliar mathematics, search authoritative web sources and read the complete relevant arguments.
- Record `sufficient` only when the planned definitions, results and examples cover the intended subject adequately.
- Record `insufficient` otherwise, naming omitted topics/results and recommending enrichment or a specific pair merger. Stop on that pair; do not edit scaffolds or choose for the owner.
- The owner alone decides to proceed, merge pairs or enrich the scaffold. A merger/enrichment remains blocked until applied and the owner records `proceed` for the resulting scope.
- Read current manifests, coverage, prose, plan and any owner decisions. Write a concise group report and one scope decision per A page. Do not write item approvals or owner records.

```bash
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision sufficient --reason "Scope evidence and report path"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --decision insufficient --reason "Exact omissions and proposed owner action; report path"
```


---

# This dispatch

run: phase-2-catchup-24
role: alpha
label: step3a-a-7d48dbebad88d608
covers: 1, 3, 4

# step3a: group a

- Run: phase-2-catchup-24
- Batches: 1, 3, 4
- A pages: measure-preserving-systems-and-mixing-criteria, complex-riesz-thorin-endpoint-interpolation, strong-laws-of-large-numbers, weak-convergence-tightness-and-representation, standard-borel-real-codings-and-determining-classes, conditional-expectation
- Read current manifests, coverage, prose, plan and dependency records.
- Write research/phase-2-catchup-24-step3a-a.md.


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
