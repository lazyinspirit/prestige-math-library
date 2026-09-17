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

run: phase-2-remaining-27
role: alpha
label: 5a-b
covers: 9, 10, 4

# Step 5a adjudication — group G, run `phase-2-remaining-27`

- Write G as the group letter in your dispatch label (`5a-b` means G is `b`); every path below uses it.
- Work only on your dispatched group and its `covers:` batches; for each of those batches read `research/phase-2-remaining-27-step5-scope-<i>.json`, the reader report and findings, the refuter report, the current carriers, and every cited dependency.
- Decide exactly the obligations the scope routes: `touched:BATCH:ID` and `page:BATCH:ID` for a changed carrier, `reader:BATCH:K` and `flagged:BATCH:K` for the K-th finding in that batch's reader or refuter artifact (BATCH is the batch id, ID the carrier id, K a 1-based position); an untouched, unflagged item owes no decision.
- Apply `briefs/alpha-step5.md` for the verdict vocabulary, the repair standard, the risk review, and the published-consumer ledger.
- Compare the current carriers with `research/phase-2-remaining-27-step5-hash-<i>-pre.json` and `research/phase-2-remaining-27-step5-hash-<i>-post.json` when deciding whether a reader repair was accepted, amended, or reverted.
- Write `research/phase-2-remaining-27-alpha-G-5a.md` with the evidence, verdicts, repairs, sources, published findings, checks, and blockers.
- Write `research/phase-2-remaining-27-alpha-G-5a-decisions.json` as `{version:1,run,group,decisions}` with one entry per obligation carrying `obligation`, `id`, `route`, `verdict`, nonempty `evidence`, and `defect_ids`; write both files even when `decisions` is empty.
- Add `repair_confidence: 1` to every completed repair, and reference exactly one closed defect-ledger row from each `reader` and `flagged` decision.
- Keep a proposed withdrawal present for the 5b lead rather than deleting it.
- Run `node tools/risk-report.mjs research/phase-2-remaining-27-batch-<i>.proof-contracts.json` for each owned batch before closing, record a complete `risk_review` for every item it reports HIGH or CRITICAL, then re-run each owned contract with `--require-reviewed` before finishing.
- Escalate a substantial unmet prerequisite with `verdict: "escalated"` and evidence naming the missing result, the attempted local closure, the sources consulted, and the owner decision required.
- Do not judge, stamp, or self-certify; the engine stamps the decision hashes and runs the gate battery after this dispatch.


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
