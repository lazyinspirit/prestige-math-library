# Step 5 Alpha

- Read the dispatched task first; it names your batches or cross-group obligations, your outputs, and your focused checks. The engine owns scheduling and transitions.
- Work only the routed work of your dispatch: the named batches or the computed cross-group findings. Open a dependency outside that scope only to test an assigned claim.
- Treat every reader report, refuter report, gate diagnostic, and prior decision as evidence, not a verdict; re-read the current carrier, its cited dependencies, and the relevant source statements before deciding.
- Be impartial: accept sound mathematics without inventing defects, and state uncertainty honestly rather than claiming understanding or a repair you cannot justify.
- Search the web and read authoritative sources for unfamiliar mathematics; record the exact statements, checked hypotheses, and source locations in your evidence.
- Check the written claim, all hypotheses and quantifiers, exact cited statements, typing and well-formedness, and the relevant empty, zero, endpoint, choice, and iff cases; review the authored argument, not Step 3's scaffold checklist.
- For a `touched` or `page` carrier use `accepted_repair`, `amended_repair`, `reverted_change`, or `reviewed_no_defect`; for a `reader` or `flagged` finding use `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`.
- Use `escalated` when a substantial unmet prerequisite blocks a sound local repair: name the missing result, the attempted closure, the sources consulted, and the owner decision required, and leave the defect and risk review open.
- Use `reviewed_no_defect` only for a change that is purely metadata normalization or audit enrichment, with `change_kind` set to `metadata` or `audit_enrichment` and `defect_ids: []`; it cannot close a reader, refuter, gate, or open ledger defect.
- Repair a confirmed defect only when the repair is complete and justified; record `repair_confidence: 1`, update every affected contract, manifest, provenance, risk review, and decision record, and reflow and precheck each changed item.
- If a repair changes an item's `## Statement` or `## Definition`, trace every direct dependency and reference consumer and check its actual use of the changed claim. Make only necessary, surgical consumer repairs within your assigned group; record affected consumers outside your group for 5b routing. Continue another hop only when a necessary consumer repair changes that consumer's own statement or definition. Do not edit a sound consumer merely because it cites the supplier.
- Append one closed defect-ledger row per confirmed defect, owned at `caught_at_stage: "5a-adjudicate"` and referenced from the decision; never invent a defect row for a mechanical failure.
- Create and fully author necessary definitions and lemmas in your assigned existing A pages: prove each lemma, declare dependencies and exact AC uses, order suppliers before consumers, and update the manifest and contract. Do not add pairs or pages.
- For every HIGH/CRITICAL item, run `node tools/risk-report.mjs` on the owning batch contract without `--require-reviewed`, read the current proof and its reader/refuter and citation evidence, and record a specific complete `risk_review`; re-run with `--require-reviewed` before finishing.
- Keep published content read-only: record each defective published item in `research/published-consumer-supplier-ledger.md` with exact IDs, evidence, suppliers, status, and repair strategy, maintaining its deduplicated classification index; serialize edits with `mkdir research/.published-consumer-ledger.lock`, re-read and merge after acquiring it, and release only your own lock.
- Maintain `briefs/tasks/frontier-dependency-ledger.md` records for owned consumers.
- Preserve stable item IDs, and keep a proposed withdrawal present for the 5b lead to disposition.
- Write the task-named group report and decisions file; record one decision per owed obligation, and an empty decisions array when the task owes none.
- Never judge, stamp, self-certify, or dispatch agents; report local checks honestly, and never clear an escalation without an owner resolution.
- At 5b, follow `briefs/tasks/alpha-5b-edges.md`: reconcile the computed cross-group obligations, append verdicts with current carrier hashes, close both impact windows with `tools/impact-audit.mjs`, and report unresolved findings rather than claiming closure.


---

# This dispatch

run: frontier-35-ten-categories
role: alpha
label: 5b-lead
covers: all
output: research/frontier-35-ten-categories-alpha-5b.md

# Step 5b — cross-batch audit and closure

Read `research/frontier-35-ten-categories-cross-group-edges.json`, the post-5a carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

For a migrated run read `research/frontier-35-ten-categories-checkpoint-import.json` and its
source export. Original review attribution is historical, not a new review.
Preserve the exact published-repair handoff in
`research/frontier-35-ten-categories-step7-published-repairs.jsonl`; its later judgments remain owed.

If `research/frontier-35-ten-categories-merge-import.json` exists, read its source mappings and
baseline origins. Preserve imported source review evidence and exact pending
Step8 published-repair handoffs. The import is not a new mathematical verdict:
review the combined cross-batch interfaces and impact obligations on current
content, including later repairs recorded in the source handoffs.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/frontier-35-ten-categories-5b-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run frontier-35-ten-categories --id ITEM_ID` after edits.
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

- `--touches research/frontier-35-ten-categories-touches.json --from pre-author --to post-5a --receipt research/frontier-35-ten-categories-impact.json`
- `--touches research/frontier-35-ten-categories-touches.json --from post-5a --current --receipt research/frontier-35-ten-categories-impact-5b.json`

Record a reviewer even for an empty window. For every affected item, record
the exact changed supplier, consumed clause and justified disposition. Reuse
historical review evidence only after checking its attribution, current hashes
and coverage of the current interface changes; never copy approvals blindly.
Preserve the original baseline. Record unresolved findings and published debt
honestly; do not clear the receipt with generic notes. A narrowly assigned gate
repair covers only its primary blocker, not unrelated impact candidates.

Write `research/frontier-35-ten-categories-alpha-5b.md` with the evidence, disposition, edits, and
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
