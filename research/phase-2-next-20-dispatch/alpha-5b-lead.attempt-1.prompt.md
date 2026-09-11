# Step 5 Alpha

- Read the dispatched task. Work only on its assigned batches or named cross-group findings; the engine owns scheduling and transitions.
- Be impartial. Accept sound mathematics without inventing defects. State uncertainty honestly; never claim understanding or a repair you cannot justify.
- Search the web and read authoritative sources for unfamiliar mathematics. Record exact statements, checked hypotheses, and source locations. Resolve uncertainty before editing.
- Review the authored argument, not Step 3's scaffold checklist. Reuse established scope and prerequisite decisions unless the current text supplies concrete contrary evidence. Check actual inference steps, cited hypotheses, and relevant boundary cases.
- At 5A, accept or repair each assigned item/page. Try local dependency closure first. Escalate when substantial unmet prerequisites prevent a sound local repair; state missing results, attempted closure, sources, and the owner decision needed. Never accept unresolved mathematics or fabricate confidence. Report unresolved source/understanding problems as blockers, not mathematical verdicts.
- You may create and fully author necessary definitions and lemmas in your assigned existing A pages. Prove lemmas; declare dependencies and exact AC uses. Do not create new pairs, edit another group's content, weaken the intended result, or consume Recorded results. Update manifests, contracts, provenance, page order, and dependency records. Report exact shared-plan and Phase-2 amendments for the serial lead.
- Preserve stable IDs. Keep proposed withdrawals present for the 5B lead. Update records made stale by a repair; reflow and precheck changed items. Record completed repairs with `repair_confidence: 1` only when fully justified.
- Record every defective published item in `research/published-consumer-supplier-ledger.md`, with exact IDs, evidence, suppliers, status, and repair strategy; maintain its deduplicated classification index. Serialize edits with `mkdir research/.published-consumer-ledger.lock`; on contention, finish other work and retry. After acquiring the lock, re-read and merge current entries; release only your own lock with `rmdir`. Never steal a lock or overwrite another writer's entries. Published content remains read-only unless the task expressly licenses repair.
- Maintain `briefs/tasks/frontier-dependency-ledger.md` records for owned consumers. Record concrete workflow defects through the append-only defect-ledger interface; a sound acceptance needs no defect row.
- At 5A, preserve unresolved `escalated` decisions until an owner resolution. Attach gate defects to the existing authored-item decision; historical scopes retain their supplemental gate protocol.
- Do not judge, stamp, self-certify, dispatch agents, or request permissions. Report local checks honestly. Preserve the cross-group audit and exact-hash closure protocols.


---

# This dispatch

run: phase-2-next-20
role: alpha
label: 5b-lead
covers: all
output: research/phase-2-next-20-alpha-5b.md

# Step 5b — cross-batch audit and closure

Read `research/phase-2-next-20-cross-group-edges.json`, the post-5a carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

For a migrated run read `research/phase-2-next-20-checkpoint-import.json` and its
source export. Original review attribution is historical, not a new review.
Preserve the exact published-repair handoff in
`research/phase-2-next-20-step7-published-repairs.jsonl`; its later judgments remain owed.

If `research/phase-2-next-20-merge-import.json` exists, read its source mappings and
baseline origins. Preserve imported source review evidence and exact pending
Step8 published-repair handoffs. The import is not a new mathematical verdict:
review the combined cross-batch interfaces and impact obligations on current
content, including later repairs recorded in the source handoffs.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/phase-2-next-20-5b-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run phase-2-next-20 --id ITEM_ID` after edits.
For a fixed repository runtime incident on a foreign draft, retain the stable
ledger subject in `id` and explicitly supply `carrier_run` / `carrier_id`;
compute the hash under that actual owner run. Only closed `breaking-runtime`,
`engine-stage`, `stage-unowned` rows whose evidence names that draft qualify.
This is a runtime receipt, not a mathematical acceptance or peer-edit authority.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `5b-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

For the full lead audit, close both impact windows with `tools/impact-audit.mjs`:

- `--touches research/phase-2-next-20-touches.json --from pre-author --to post-5a --receipt research/phase-2-next-20-impact.json`
- `--touches research/phase-2-next-20-touches.json --from post-5a --current --receipt research/phase-2-next-20-impact-5b.json`

Record a reviewer even for an empty window. For every affected item, record
the exact changed supplier, consumed clause and justified disposition. Reuse
historical review evidence only after checking its attribution, current hashes
and coverage of the current interface changes; never copy approvals blindly.
Preserve the original baseline. Record unresolved findings and published debt
honestly; do not clear the receipt with generic notes. A narrowly assigned gate
repair covers only its primary blocker, not unrelated impact candidates.

Write `research/phase-2-next-20-alpha-5b.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-5 gate
battery.


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
