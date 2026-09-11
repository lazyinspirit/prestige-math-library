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
label: 5a-f
covers: 10, 11

# Step 5A — authored-content review

- Work on your dispatched group, one item at a time. Read each batch manifest, `research/phase-2-next-20-step5-scope-<i>.json`, current authored items and A/B pages, contracts, and dependencies needed to verify the arguments.
- Follow `briefs/alpha-step5.md`. Do not repeat Step 3's scope, scaffold, or source-inventory audit. Review actual authored mathematics and concrete gaps; prior approval does not establish that the authored text is sound.
- For every item and page, write one decision with `obligation: "authored:<batch>:<id>"`, its exact `id`, route `item` or `page`, verdict `accepted`, `repaired`, or `escalated`, nonempty `evidence`, and `defect_ids`.
- Use `accepted` for sound content, with `defect_ids: []`. Use `repaired` after a justified local repair, with closed, uniquely owned defect-ledger references and `repair_confidence: 1`. Use `escalated` for substantial unmet prerequisites that cannot be closed locally; keep the defect open and explain the required owner decision. Never clear another escalation without owner resolution.
- Create and fully author local definitions/lemmas to close missing dependencies. Add them to the owned manifest, contract, and existing A page; order suppliers before consumers. Give every new item its own `authored` decision and evidence explaining its role. Do not add pages or pairs.
- For HIGH/CRITICAL items, record specific complete `risk_review` entries in the owning contract during this same read, not a second audit. Leave unresolved risks open. Run owned risk checks with `--require-reviewed` before finishing.
- Record published defects in the canonical published-consumer ledger, including defects that do not block this batch. A newly available supplier does not repair a published proof.
- Write `research/phase-2-next-20-alpha-<g>-5a.md` with edits, source evidence, local suppliers, required shared-plan amendments, published findings, checks, and blockers.
- Write `research/phase-2-next-20-alpha-<g>-5a-decisions.json` as `{version:1,run,group,decisions}`. Preserve supplemental gate decisions. The engine stamps current content, manifest, and contract hashes and rejects missing or stale decisions.


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
