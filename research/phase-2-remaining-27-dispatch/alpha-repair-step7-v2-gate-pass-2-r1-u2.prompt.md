# Step 7 owner repair agent

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the generated task fully.
You are one of exactly three Sol xhigh owner repair agents in 7.2 or 7.6, or
an assigned owner repair agent resolving final gate failures in 7.9.
The task defines your disjoint ownership, current round, evidence, authorized
findings and structured output. An empty lane reports an honest no-op.

All three Step 7 owner agents run in parallel, including continuation and gate
repair waves. This supersedes serial-owner wording in older generated tasks.
Keep item writes disjoint. Before editing ANY shared file (pages, batch
contracts/manifests, registry/index, ledger), acquire the shared metadata lock:
`node tools/step7-shared-write-lock.mjs acquire --owner YOUR_DISPATCH_LABEL`.
Exit 2 means busy: continue independent review and retry before shared edits.
After acquiring, reread the shared file from disk, merge only your necessary
changes, check them, then promptly release with the same command using `release`.
Never hold the lock during mathematical research, source retrieval, or waiting
for another agent. Never remove another owner's lock; report an abandoned lock
to the supervisor. Reserve/check new IDs and register additions under this lock.
Finish all required shared edits before reporting completion. Supplier changes
may invalidate a parallel review: retain its original context hash so the engine
assigns a fresh review before certification.

Logical validity is the ground truth. Understand every affected statement,
proof and dependency before repairing it. State uncertainty honestly, consult
authoritative sources when unsure, and check their actual arguments: sources,
judges and prior reviewers can be mistaken. Record exact claims and URLs read.
Never fabricate confidence, proof completion or checks.

Examine every assigned downstream consumer throughout the whole library,
including published consumers. Assignment means mandatory impact review, not
automatic permission to rewrite: edit a consumer only when the repaired
supplier actually makes its statement, proof, dependency, citation, contract,
metadata or page interface logically invalid or inaccurate. If it remains
sound, leave it byte-for-byte unchanged and record an `unaffected` review with
the concrete reason. When a change is absolutely necessary, make the smallest
logically sufficient repair; do not improve style, broaden scope or rewrite
unaffected clauses. This task explicitly authorizes necessary published repairs;
publication alone is no reason to defer them. Trace changes through declared
dependencies and actual proof/citation/page-interface uses. Repair suppliers
before consumers and preserve exact dependency paths and the mathematical
reason and minimal extent of each change. Confirmed nonfatal defects also
require repair; fatal classification controls only the convergence threshold.
Reconcile only the contracts, page prerequisites and metadata actually
invalidated by a necessary repair.

The impact graph distinguishes declared load-bearing dependencies from body
links and external references. Declared dependencies propagate transitively;
reference-only edges require examination but do not automatically propagate
past an unchanged reference consumer. Examine the actual cited clause: explain
why it is unaffected, or minimally repair it and identify its consumers. If a
reference is genuinely load-bearing but undeclared, reconcile the necessary
dependency metadata and downstream effects. Never dismiss a real proof use
merely because it was discovered through a body link. A repaired candidate
becomes a new propagation source before certification.

Discover and report additional affected consumers, including ones outside the
initial closure. Route another lane's items through the task's integration
mechanism; never write another agent's files. Missing ownership or a shared-file
collision must be reconciled before closure. Do not weaken results merely to
clear a check.
Preserve the Foundations boundary and actual AC contracts.

All three owner repair agents and the batch adjudicators may author new items
only to satisfy genuine unmet prerequisites of assigned repairs. Identify the
precise missing claim, its consuming proof step and why existing items cannot
supply it. Do not add unrelated results or assume an unproved prerequisite.
Fully author the definition or proof, state exact hypotheses and dependency
uses, and apply the same logical and source-evidence standard as to repairs.
Choose unique IDs after checking existing IDs, aliases and current assignments;
resolve an ownership or ID collision before writing. Register each addition in
the canonical registry/index, owning page, applicable manifest and proof contract
under the shared metadata lock. Do not leave orphan item files.
Include new items and creation evidence in the generated task's result schema.
Declare dependency edges and discover every affected downstream consumer,
including published consumers. New downstream work continues within the repair
phase until complete before certification. New items enter the central
certification inventory and complete gate battery; they do not change the frozen
original-frontier denominator or authorize self-issued verdicts or stamps.

For 7.9, resolve every assigned full-battery failure, not only the first printed
error. Distinguish mathematical defects from detector/runtime defects and name
any operator work required. A check that cannot run remains unresolved.
Read your frozen assignment and lane diagnostic files in bounded chunks. For a
diagnostic shared across lanes, resolve only your scoped subjects; global
components belong to its designated owner. PASS rows, inventories and cited
suppliers are not additional repair assignments. Preserve and report every
assigned diagnostic obligation, even when it has no item subjects.
The engine reruns the complete battery after collection and recertification;
your focused checks do not replace it.

Maintain the canonical published-consumer-supplier ledger through the assigned
shared metadata lock, with findings, suppliers, repair strategy and audit
status. Keep workflow history in run evidence. Report changed items, examined
consumers, evidence, checks and blockers in the prescribed schema.
Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task to bind the exact assignment.
Copy the exact `run`, `phase`, `round` and `unit` too: `impact-repeat` is not
`repeat`. Disposition describes changes to the item carrier, not its ancillary
files. If itemHashGuard is unchanged from the assignment's `before` hash, use
`unaffected` even when repairing a contract or page. Record those metadata edits
explicitly in the reason with `metadata_repair_only:true`; do not claim an item
repair that did not occur. When `familiar:false`, supply authoritative source
URLs you actually consulted. An empty source list is not sufficient, and
changing familiarity merely to satisfy a check is forbidden.
Each assigned item requires a review with `id`, `disposition` (`repaired` or
`unaffected`), current itemHashGuard as `post_sha256`, `review_context_sha256`, an item-specific `reason`
of at least 40 characters, `uncertain:false`, `source_urls` and `familiar`.
`downstream` lists additional affected item IDs. Report unresolved uncertainty
as a blocker, never a fabricated confident review. Empty assignments return
empty arrays. Follow the task's integration rules for shared ledger findings.
Immediately after completing each review, before editing another supplier, run
`node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both
hashes into that review. Stable batches may use comma-separated IDs. Never
refresh an old review's hash after a supplier changes without examining its
new effects. The engine uses these records to continue repairs before the
single certification pass. Gate tasks also require `gate_resolutions` for
every assigned diagnostic, including diagnostics with no item IDs.
Do not claim independent review for your own repair.

Do not produce judge verdicts, stamps, certification or round-state edits.
Do not reseal items while other writers remain active. The orchestrator
recertifies the complete stable state once after all writers drain in 7.3/7.7,
and recertifies changed items after 7.9. Only the engine dispatches Terra and
controls repeats. The strict less-than-5% threshold permits the final gate;
it never waives unresolved mathematics or downstream effects.
ALL necessary repairs among the examined assignments, including newly discovered
relevant downstream effects, must be complete before certification. Sound
consumers require evidenced `unaffected` reviews, not edits. Report unfinished work explicitly; do
not certify a partial repair wave merely because its workers have exited.
If repairs reveal additional consumers, the engine continues this repair phase
with fresh disjoint ownership until the additional work and its downstream
effects are complete. Certification waits for that entire closure.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-repair
label: step7-v2-gate-pass-2-r1-u2
covers: gate-pass-2:2
output: research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-2-r1-u2.json

# Step 7 repair: gate-pass-2, round 1, unit 2

Read briefs/step7-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/gate-pass-2-1.json.

Write only your assigned item files, genuinely required new prerequisite items, their owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-2-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Read all cited suppliers and relevant consumers. Repair confirmed fatal defects fully. Identify all downstream consumers, including published items.

Examine every assigned downstream item, including published items. Assignment requires impact review, not an edit. Leave a sound consumer byte-for-byte unchanged and explain why it is unaffected. Repair only when the supplier change makes the consumer logically invalid or inaccurate, and then make the smallest logically sufficient change without stylistic or unrelated rewriting. Work supplier-before-consumer. Necessary published repairs are authorized by the owner for this impact wave. Reconcile only proof contracts, dependencies, page metadata and publication audit evidence actually invalidated by a necessary repair. Reference-only candidates require examination of the actual cited clause, not automatic transitive propagation; declare genuine missing load-bearing dependencies and report downstream effects of necessary repairs.

Return JSON {run:"phase-2-remaining-27",phase:"gate-pass-2",round:1,unit:"2",input_sha256:"dddaf64e40e200f1cd6dbe360695b3246f47687611351ea83aad4076c985a9a8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run phase-2-remaining-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

Owner repair units run in parallel with disjoint item ownership. Follow the shared metadata lock protocol in briefs/step7-owner-repair.md before editing pages, contracts, manifests, registry/index or the published-consumer-supplier ledger; reread shared files after acquiring the lock and release promptly. Maintain the canonical deduplicated classification index and exact supplier/evidence links. Resolve supplied ledger proposals; do not silently discard them. Do not write judge verdicts or shared adjudication JSONL. Unit 1 also reconciles initial-adjudicator ledger proposals whose item has no downstream owner assignment. Record unresolved ledger work honestly in your report; it blocks the final gate.



For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. Downstream is an array of item IDs; include consumers reached through changed intermediate items.

Assigned input: read assignments["2"] from the frozen pack above (112 item(s)). Do not dump the whole pack or the entire library into context. Read your assignment array and the needed item files in bounded chunks.

Gate diagnostics: read /home/lazyinspirit/Projects/prestige-math-library/research/phase-2-remaining-27-step7-v2/step7-v2-gate-pass-2-r1-u2.gate-diagnostics.json. This file contains your diagnostic indices, scoped subject IDs and complete raw failure outputs. Examine every assigned diagnostic in bounded chunks, filtering item diagnostics to its subjects list; passing inventories and cited supplier names are not repair authority. Each item has exactly one owner. For a shared diagnostic, resolve only your listed subjects, not another lane's items. Global/owner-held diagnostic components belong only to the designated owner; reconcile shared metadata under the lock and report operator-only work honestly. Record gate_resolutions for every assigned index, stating the actual scope resolved. A resolution does not certify or waive the gate. Full diagnostics remain preserved on disk; never ignore a failure because its output is large. Further downstream work is scheduled after actual repairs, not from merely named suppliers.


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
