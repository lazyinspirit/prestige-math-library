# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 5 Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repairs:** When editing an item, make every repair mathematically sound and as concise as the argument allows. State essential hypotheses and caveats; remove repetition and padding; add intermediate lemmas when needed to meet prerequisites.
- Read the dispatched task first. It defines your batches or cross-group obligations, outputs, and focused checks. The engine owns scheduling, routing, retries, coverage, gates, and stage transitions.
- Work only on routed work in your dispatch. Open dependencies outside scope only to assess assigned claims. At Step 5a, follow the generated batch item order from lowest to highest in-run dependency level; finish each item's routed decisions and risk review before moving higher. Review page-only obligations within their own scope.
- Route defects outside your dispatched batches through the task's alert or disposition path instead of repairing them yourself.
- Treat reader and refuter reports, gate diagnostics, and prior decisions as evidence, not verdicts. Re-read each current carrier, its cited dependencies, and relevant source statements. Review the authored argument, not the Step 3 scaffold checklist.
- Logical validity is the ground truth, as sources and judges can make mistakes. Never pretend to understand something you don't; escalate any uncertainty to the owner. Be impartial: accept sound mathematics without inventing defects, and do not claim repairs you cannot justify. For unfamiliar mathematics, search the web and read authoritative sources; record exact statements, checked hypotheses, and source locations.
- Check the written claim, hypotheses, quantifiers, exact cited statements, typing, and well-formedness. Test relevant empty, zero, endpoint, choice, and both directions of iff cases. Trace inferences to stated hypotheses, earlier steps, exact citations, or elementary derivations, preserving domains, quantifiers, hypotheses, direction, and conclusion.
- A proof-step gap that a competent reader closes immediately is nonfatal polish. It does not excuse a false or overstrong claim, definition, title, witness, computation, or citation. Do not manufacture findings or retain a known defect because repair is inconvenient.
- Use these verdicts: for `touched` or `page` carriers, `accepted_repair`, `amended_repair`, `reverted_change`, or `reviewed_no_defect`; for `reader` or `flagged` findings, `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. A `false_positive` needs evidence and no unnecessary edits.
- Use `escalated` when a substantial unmet prerequisite blocks a sound local repair. Name the missing result, attempted closure, sources consulted, and required owner decision; leave the defect and risk review open. Never clear an escalation without owner resolution.
- For a known metadata normalization or audit enrichment, use `reviewed_no_defect`, set `change_kind` to `metadata` or `audit_enrichment`, and use `defect_ids: []`. This cannot close a reader, refuter, gate, or open ledger defect.
- An owner-authorized current-content resolution may address a missing historical preimage only after complete mathematical review of the current carrier and its actual prerequisites. Record `reviewed_no_defect`, `change_kind: "current_content_review"`, `historical_delta_unknown: true`, a nonempty `owner_resolution` of at least 40 characters explaining explicit owner authorization and durable evidence, and `defect_ids: []`. Preserve the prior escalation and historical uncertainty in the report; complete the current risk review. This cannot close a reader, refuter, gate, or open ledger defect, and current hash checks still apply.
- Repair a confirmed defect only when the repair is complete and justified. Make the smallest coherent correction and preserve the content contract. Set `repair_confidence: 1`; update every affected contract, manifest, provenance, risk review, and decision record; reflow and precheck every changed item. A material rewrite invalidates its prior `verification.judge` record.
- If an item's Statement or Definition changes, check every direct dependency and reference consumer's actual use. Make only necessary, surgical consumer repairs within your dispatched batches; route affected consumers outside those batches for Step 5b. Continue another hop only when a necessary repair changes that consumer's own Statement or Definition. Do not edit a sound consumer merely because it cites the supplier.
- Append one closed defect-ledger row per confirmed defect, owned at `caught_at_stage: "5a-adjudicate"` and referenced by its decision. Never create a defect row for a mechanical failure.
- Fully author necessary definitions and lemmas only in assigned existing A pages: prove each lemma, declare dependencies and exact AC uses, order suppliers before consumers, and update the manifest and contract. Do not add pairs or pages.
- For every HIGH or CRITICAL item, run `node tools/physics-support/risk-report.mjs` on its owning batch contract without `--require-reviewed`; read the current proof and reader/refuter and citation evidence; record a specific, complete `risk_review`; then rerun with `--require-reviewed`.
- Keep published content read-only. Record each defective published item in `research/published-consumer-supplier-ledger.md` with exact IDs, evidence, suppliers, status, and repair strategy; maintain its deduplicated classification index. Serialize edits by creating `research/.published-consumer-ledger.lock`, rereading and merging after acquiring it, then releasing only your own lock.
- Maintain `briefs/tasks/frontier-dependency-ledger.md` records for owned consumers. Preserve stable item IDs and keep proposed withdrawals present for the Step 5b lead to disposition.
- Write exactly the task-named report and decisions file, with one decision per owed obligation and an empty `decisions` array when none are owed. Never judge, stamp, self-certify, dispatch agents, or initiate a judge cycle; report local checks honestly. The engine stamps decision hashes and runs the gate battery after the dispatch.
- At Step 5b, follow `briefs/tasks/alpha-5b-edges.md`: reconcile computed cross-group obligations, append verdicts with current carrier hashes, close both impact windows with `tools/physics-support/impact-audit.mjs`, and report unresolved findings rather than claiming closure.


---

# This dispatch

run: physics-em-sr-40-2026-10-08
role: alpha
label: 5b-review-84ae208db4ffdd9e
covers: all
output: research/physics-em-sr-40-2026-10-08-alpha-5b.md

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 5b — cross-batch audit and closure

- Read `research/physics-em-sr-40-2026-10-08-cross-group-edges.json`, the post-5a carriers, and every listed citing/cited item or structural change. An empty computed list is valid.
- Follow `briefs/alpha-step5.md` for the review and repair standard. Logical validity is ground truth; sources and judges can err. Never pretend to understand something you do not; escalate uncertainty to the owner. Keep published content read-only and make only task-authorized repairs.
- For a migrated run, read `research/physics-em-sr-40-2026-10-08-checkpoint-import.json` and its source export. Treat original review attribution as historical, not a new review. Preserve the exact published-repair handoff in `research/physics-em-sr-40-2026-10-08-step7-published-repairs.jsonl`; its later judgments remain owed.
- If `research/physics-em-sr-40-2026-10-08-merge-import.json` exists, read its source mappings and baseline origins. Preserve imported source-review evidence and exact pending Step 8 published-repair handoffs. The import is not a new mathematical verdict: review the combined cross-batch interfaces and impact obligations on current content, including later repairs recorded in the source handoffs.
- Append one evidence-bearing, current-hash row per edge, forward reference, addition, removal, item, page, or gate outcome to `research/physics-em-sr-40-2026-10-08-5b-verdicts.jsonl`. Use the exact kind and verdict vocabulary accepted by `tools/physics-support/cross-group-edges.mjs`. Edges use `accurate`, `repaired`, or `struck`; forward references use `orientation-reviewed`, `lemmas-added`, or `dropped`; gate outcomes use `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. Use the tool's accepted vocabulary for structural changes.
- An `orientation-reviewed` forward reference may remain only as a non-load-bearing link in `Remarks` to an already-authored target on a strictly later planned page. Bind the current source-item hash, exact target-item hash, and an existing Markdown review under `research/` with its hash.
- After edits, get a current carrier hash with `node tools/physics-support/cross-group-edges.mjs carrier --run physics-em-sr-40-2026-10-08 --id ITEM_ID`. Bind each verdict to the current carrier hash or hashes required for its kind, and provide its required evidence note.
- For a fixed repository runtime incident on a foreign draft, keep the stable ledger subject in `id`, supply both `carrier_run` and `carrier_id`, and compute the hash under that actual owner run. Only closed `breaking-runtime`, `engine-stage`, or `stage-unowned` rows whose evidence names that draft qualify. This is a runtime receipt, not mathematical acceptance or authority to edit another agent's carrier.
- Clean outcomes use `defect_ids: []`. Every repair, strike, drop, removal, or reversion must name one closed, uniquely owned `5b-cross` defect-ledger row. Restore a pre-existing removal before deciding it. A page addition, page removal, or reading-order change is an owner blocker unless the active task explicitly grants that authority.
- A clean gate `false_positive` uses `defect_ids: []`; a confirmed gate defect names its originating gate and exactly one closed defect row with matching severity and disposition. Bind the outcome to the current subject hash.
- For the full lead audit, close both impact windows through the current-manifest selector:
  - `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool impact-audit -- --touches research/physics-em-sr-40-2026-10-08-touches.json --from pre-author --to post-5a --direct-boundary --receipt research/physics-em-sr-40-2026-10-08-impact.json`
  - `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool impact-audit -- --touches research/physics-em-sr-40-2026-10-08-touches.json --from post-5a --current --direct-boundary --receipt research/physics-em-sr-40-2026-10-08-impact-5b.json`
- These commands match the engine gates and derive a nonempty item selection from the current manifests on every call. The tool loads the complete dependency and citation graph to retain external suppliers used by frontier consumers, but only selected consumers require dispositions. Review their current direct logical and citation uses of every relevant changed interface. Independently changed consumer interfaces remain changed sources with their own direct-consumer obligations. Continue another hop when a necessary consumer repair changes that consumer's own Statement or Definition; recompute the live window on its actual current interface hashes. An unchanged consumer interface ends that propagation path.
- Record a reviewer even for an empty window. For each affected item, record the exact changed supplier, consumed clause, and justified disposition. Reuse historical review only after checking its attribution, current hashes, and coverage of current interface changes; never copy approvals blindly.
- Preserve broader unscoped receipts and excluded dispositions as history, including genuine pending outside findings; they are not mathematical passes or frontier gate subjects. A broader historical receipt does not close the direct-boundary gate. Preserve completed mathematical review evidence and unresolved actual defects, then bind the worker-owned receipt to the exact computed direct scope and current carriers. A scope correction neither establishes a supplier claim nor removes an actual affected-consumer obligation; the normal receipt and mathematical closure checks remain due.
- Preserve the original baseline. Record unresolved findings and published debt honestly; generic notes do not close a receipt. A narrowly assigned gate repair covers only its primary blocker, not unrelated impact candidates.
- Preserve completed current-hash reviews and their original attribution; exit0 is not coverage. Use the read-only `tools/step5b-review-coverage.mjs` inspector with `--physics` to select missing current obligations, at most25 per query. Do not repeat completed review.
- Write `research/physics-em-sr-40-2026-10-08-alpha-5b.md` as a concise checkpoint: reviewed/remaining counts, actual defects, edits and references to the per-obligation verdict/impact evidence. Do not duplicate the mechanical edge/impact indexes or dump unreviewed rows into the Markdown report. A successful partial handoff continues native unfinished review; unchanged/no-progress handoffs hold for the owner.
- The closure gates rederive edges, validate verdict currency and ledger ownership, and run the Step 5 gate battery.


# Native Step5b unfinished-review continuation

This is remaining review work, not a mathematical repair round or a fresh whole-scope audit. Follow the existing `alpha-5b-edges.md` task.

- Inspect current coverage with `node tools/step5b-review-coverage.mjs --run physics-em-sr-40-2026-10-08 --physics`; fetch at most25 pending obligations at a time with `node tools/step5b-review-coverage.mjs --run physics-em-sr-40-2026-10-08 --physics --pending --limit 25`.
- Review only the returned missing current obligations. Preserve every completed current-hash verdict and its original attribution, all prior receipts, immutable baselines and prior Markdown report bytes (forward evidence may hash those reports). Do not fabricate approvals from process success or copy notes from another obligation. Invalid/stale evidence is an owner hold, not permission to overwrite historical review.
- Unfinished review does not grant another content-repair cycle. Before any proposed content repair, consult run-local per-item repair-budget and owner-exception records if present; retain all charged rounds and consumed exceptions across stages. Record and escalate a confirmed defect on a capped subject to the owner, rather than editing it or resetting the budget.
- Append actual edge/forward/structural verdicts using the existing protocol; fill only genuinely pending direct-impact dispositions. For each reviewed impact consumer record `carrier_raw_sha256` plus `supplier_uses` with exact supplier ID/hash, consumed clause and use location. Preserve completed dispositions.
- If work remains at timeout, write a concise checkpoint to the distinct label-bound report named in the immutable launch task: reviewed counts, remaining counts, actual unresolved defects, and the next pending-query command. Do not dump mechanical worklists or every unreviewed row into the report; the canonical computed index already owns them.
- Recompute coverage after each batch. Completion means the read-only coverage inspector reports complete with no errors; exit0 alone is not review completion. A handoff with no new completed obligation holds for the owner. Do not request native closure gates while coverage is incomplete.


## Immutable launch checkpoint

{"completed":1036,"progress":"84ae208db4ffdd9e61df59302842a049107c8ffacde77ea5a5ee42f7d0472fbe"}

Write this continuation's concise checkpoint report ONLY to research/physics-em-sr-40-2026-10-08-alpha-5b-review-84ae208db4ffdd9e.md. Do not alter research/physics-em-sr-40-2026-10-08-alpha-5b.md or any earlier review report: completed forward-verdict evidence binds those exact bytes.


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
