# Step 3 Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repairs:** When editing an item, make every repair mathematically sound and as concise as the argument allows. State essential hypotheses and caveats; remove repetition and padding; add intermediate lemmas when needed to meet prerequisites.
- Read the dispatched task first. It defines your batches or cross-group obligations, outputs, and focused checks. The engine owns scheduling, routing, retries, coverage, gates, and stage transitions.
- Work only on routed work in your dispatch. Open dependencies outside scope only to assess assigned claims. At Step 3a, follow the generated batch item order from lowest to highest in-run dependency level; finish each item's routed decisions and risk review before moving higher. Review page-only obligations within their own scope.
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
- If an item's Statement or Definition changes, check every direct dependency and reference consumer's actual use. Make only necessary, surgical consumer repairs within your dispatched batches; escalate affected consumers outside those batches to the owner for supplier-first repair. Continue another hop only when a necessary repair changes that consumer's own Statement or Definition. Do not edit a sound consumer merely because it cites the supplier.
- Append one closed defect-ledger row per confirmed defect, owned at `caught_at_stage: "3a-adjudicate"` and referenced by its decision. Never create a defect row for a mechanical failure.
- Fully author necessary definitions and lemmas only in assigned existing A pages: prove each lemma, declare dependencies and exact AC uses, order suppliers before consumers, and update the manifest and contract. Do not add pairs or pages.
- For every HIGH or CRITICAL item, run `node tools/risk-report.mjs` on its owning batch contract without `--require-reviewed`; read the current proof and reader/refuter and citation evidence; record a specific, complete `risk_review`; then rerun with `--require-reviewed`.
- Keep published content read-only. Record each defective published item in `research/published-consumer-supplier-ledger.md` with exact IDs, evidence, suppliers, status, and repair strategy; maintain its deduplicated classification index. Serialize edits by creating `research/.published-consumer-ledger.lock`, rereading and merging after acquiring it, then releasing only your own lock.
- Maintain `briefs/tasks/frontier-dependency-ledger.md` records for owned consumers. Preserve stable item IDs and keep proposed withdrawals present for the owner to disposition.
- Write exactly the task-named report and decisions file, with one decision per owed obligation and an empty `decisions` array when none are owed. Never judge, stamp, self-certify, dispatch agents, or initiate a judge cycle; report local checks honestly. The engine stamps decision hashes and runs the gate battery after the dispatch.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: numerical-optimization-dynamics-2026-10-16
role: alpha
label: 3a-batch-85
covers: 85

Run numerical-optimization-dynamics-2026-10-16; focused native Alpha batch-85 covers85. Read CLAUDE.md/standardAlphaStep3brief/task/current scope, originalreport anddecisions archived in research/numerical-optimization-dynamics-2026-10-16-ROOT-current-alpha-followup-85, actual reader-pre/post and current pre-3a. Fresh focused native continuation after successful original attempt1, not claimed original-session continuity. Preserve all original dispositions/history/currentnativework. Root owns all transitions and rehash/recertification. New persistent session home supports genuine subsequent same-reviewer passes.

NEW actualreader100:1/refuter100:1 producer85 algorithm alg-sqp-exhaustive-active-set-qp-solve hadundefinedd_i andb_Jrhs. ROOTappliedsmallguardedownsourcecandidateafteractualoriginalAlpha85success14:46:21, before/proposedandcurrentconsumerintent research/numerical-optimization-dynamics-2026-10-16-owner-reader100-supplier85-qp-binding-proposal, actualrootreceipt ROOT-supplier85-qp-integration/receipt.json. ExistingapprovedSQPsubproblemDefinitionEXPLICITLYrequiresSPD B; don'tnarroworloseit. BindAeq=Dh(x),beq=-h(x),G=Dg(x),d=g(x),c=gradf(x),emptyfiniteindex/roworder andb_J=(beq_E,-d_J). Preserveallfiniteoutputs/fullmultipliercompletion/firstbitmasktie/exactsolve/finiteprecisionnumerical-failure semantics. Rootsourcepatchisnotnativeacceptance.

Owneralsoobservedalgorithmembeddedproperties (Facts/Proof) duplicate EXISTING thm-sqp-exhaustive-active-set-qp-solve-correct-finite, whosecompleteproof3.1alreadycoversfinite2^msubsets/fullKKT/infeasibility. ReuseEXISTINGprovedresultviajustified_by; ROOTremovedembeddedFacts/Proof/propertyassertionfromalgorithm onlyafterfullcoveragecheck. NOnewlemma,pair,methodorunprovedfallbackneeded; preserveoldProofinevidence. This isnewowner-observedplacementcleanup, notinventedoriginalreader100finding. Independentlyreviewcompleteexistingresult+newDefinition forcorrectcoverage, currentreducedcurvature/KKTnonsingularity andfeasibleSPDQPcertificateproofs.

YOUownactualchangedDefinitionANDALLaffectedcurrentdirect/indirectconsumerchecks, supplier-first. Atminimumcompletecurrent100dispatchandmerit/subproblembuilder call; helperfullcurrent100usespassedallarraysalready, no100sourcepatchproposed. NativeAlpha100stillactive/finishing: DONOTedit100source/contract/report/decisions; stageanyneededfieldifactualgap, rootreleasesaftergenuinedrain. Preserveown85original9decisions/14riskreviews/7otherlocalrepairsandnewlyactualcurrentriskmetadata. Actualproducer6KKT+cone gapnewlyclosedbyindependentAlpha6attempt2success14:39:45/full21consumers, beforeyouroriginal85completed; inspectwhetherownoriginalreader85twofindingdecisionsalreadyappropriatelyconfirmcurrentrepair, elsehonestcurrentproducer6closureinthissamepass. Root6sourceStatementclarifiesfiniteindex/Cwithrichclaimunchanged, coneexplicitCSbound. No6source/sharedmetadatawrites.

ROOTappliedsourceONLY (algorithmNoProof now, newDefinition/justified_by), integrateOWN85manifestDefinition/justified_by+currentcontractsource-exactminimalapplicability/derivationprojection, preserve/archiveoldproofworksheethistory/routines/scores/smokefiniteevidence. Don'twholesalerestoreprivateillustrativecontractoroverwriteactualoriginalAlpha85repairs. ROOTmetadata-intents.UNAPPLIED records5intentsonly; actualsourcecurrentisapprovedminimal, ownproofofexistingresultcanstayunchanged. Genuinenewpostreadercurrentalgrepairdecision/causalevidenceproperclosedrowsshareonlywhenstrictschemaallows; sourcebindingdefect100fatalnotfalsepositivebecausecurrentpatched. Original100readerunboundobservationMUSTstayunknown/unchanged; itsactualnativeownerwillindependentlydisposeafterYOUfinish. Rootauthenticateshistorytypedbindingsafterallwritersdrain. No newSPDsupplier ornewcontentresultwhenexistingfulltheoremworks. Maximum2focusedcycles, no broadunchangedbatchreaudit.

Complete full genuine current original obligations plus stabilized post-reader obligations (immutable reader-post vs pre-3a) per step3-scope stabilizedObligations. Amend only genuinely affected decisions while preserving original exacthistory/defectidentities. Write full truthful report research/numerical-optimization-dynamics-2026-10-16-alpha-batch-85-3a.md and version1/groupbatch-85 decisions research/numerical-optimization-dynamics-2026-10-16-alpha-batch-85-3a-decisions.json. Existing immutable native findings/pre/post/scope fingerprints remain unchanged. Owner pre-applied repairs do not constitute independent acceptance; review actualcurrent source and supply appropriate amended_repair/current causal closedledger evidence, not fictionalfinding or metadata review for mathematics. For required typed shared-history/prior_applied root authority, give exact targets/literals/defectIDs; do not bypass guards or invent authority. Do not run scope check/stamp/certify/fullgates. Root will validate authentic decision currency only after all escalations resolved.

Minimal necessary owned source/contract/risk/manifest edits allowed; preserve richest sound Statements and all actualnative derivations/scores/validshortquotes/history. If Statement/Definition changes, YOU own all affected direct/indirect consumer checks and focused repairs, supplier-first, including authorized draft downstream consumer source surgery, and report exact consumerclosure + untouched conclusions. Coordinate any active consumer writer through root before crossbatch writes; research proposals can be prepared meantime. No published edits unless root directs an existing guarded publishedclaim route. No globalmerged/plan/hash/recert/control/audit/verified/judge/stamp/creationcert/commit/publish/push. Local strictcontract/risk and required explicit localprecheck/render/proof-layout afterfinalsourceedits allowed; no optionaltests/nativefullbattery. Keep source/before attribution truthful. Closed defect ledger rows must reflect actual repairs and current source, preserve all original findings/rows as history. Report actual unresolved gaps. Root owns mechanical binding and all engine transitions.


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
