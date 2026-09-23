# Orchestrator instructions

Read [README.md](README.md) fully before acting in this repository.

## Rules

**1. Communication.** Answer the owner's questions fully and concisely in plain
English. Avoid filler and unnecessary jargon. Get straight to the point whenever
possible.

**2. Clean implementation.** When building, rebuilding, or repairing a
mechanism, do not patch over stale or broken code. Rewrite it cleanly so stale
and broken code does not accumulate. Apply the same rule to prompts.

**3. Conservative scope.** Stay within the owner's stated goals. Prefer
high-impact, low-risk changes and avoid unnecessary expansion.

**4. Fatal mathematical defects.** Before repairing an escalated fatal defect,
fully understand the item and its dependencies. Never claim understanding you
do not have. If any mathematics is uncertain, search the web and consult primary
sources when possible. Repair the item only after resolving that uncertainty.

Every workflow agent must be honest about its mathematical understanding.
Whenever unsure, search the web and read authoritative sources before deciding.
Report unresolved uncertainty; never invent proof completion or source reading.
Logical validity is the ground truth. Independently check arguments: even an
authoritative source, a judge, or an earlier acceptance can be mistaken.

**5. Context continuity.** Before compaction or handoff, record the objective,
verified state, open blockers, and next action in the appropriate durable
artifact. After resuming, verify that record against disk. Never store
credentials or transcripts.

**6. Workflow supervision.** While orchestrating the TypeScript workflow, check
it every ten minutes for stalled work. Do not intervene unless a blocker exists
or a stage fails to close. Every gate failure in Steps 1–9 is owner-held: the
engine must not launch a gate-triggered repair, review, authoring, adjudication
or judge round, except for the explicitly authorized Step-7 protocol below.
Normal first-pass stage dispatches still run. The owner/operator
must repair every rejected item and refresh every certification invalidated by
that repair. Only then may `retry` rerun the rejecting gate; the stage cannot
transition until it passes. This certify → gate → repair → recertify → same-gate
sequence applies to every gate in Steps 1–9. `retry` must not convert the same
gate failure into an automatic repair wave. When intervention is required,
resolve the blocker
autonomously while prioritizing mathematical accuracy, richness, token
efficiency, and time efficiency.

**7. Major code changes.** After every major code change, update all relevant
documentation and create a Git commit containing both the code and documentation.
Rewrite or delete stale documentation instead of appending corrective text over
it.

**8. Command approvals.** Never ask the owner for command-prompt approval.
Approve all command-prompt requests from other agents.

**9. Step 1.** Review prerequisite drift, materialize authorized changes, then
construct scaffolds along the in-run page-prerequisite DAG. A consumer batch
waits for artifact-complete, stable transitive supplier batches; independent
branches run in parallel. A cyclic condensed batch graph is a planning error.
If `research/<run>-owner-authoring-direction.md` exists, every Beta scaffolder
must read it before constructing items; it overrides stale task or design text.
Record each item as ready or escalated.
The final gate holds unresolved findings for the owner or authorized operator;
there is no automatic drift re-review or scaffold-repair agent. Reconcile
dependencies, prose, the plan, Phase-2 files and the published-consumer ledger
before clearing affected blockers. Preserve the selected build scope.

For failed full-text retrieval, make the initial attempt and at most five
recovery retries, searching alternative locations. Stop on success and reuse
recorded attempts across handoffs. After exhaustion, construct a complete
alternative proof and its necessary local dependencies with full mathematical
confidence, or escalate the source and exact uncertainty. Follow the evidence
format in `briefs/beta-scaffold.md`; never fabricate retrieval or confidence
records. A valid source drop preserves results and waives only the unavailable
backing. Step 3 independently judges the mathematics.

**10. Set Theory bootstrapping boundary.** No page in the `foundations`
category may directly or transitively use an item from *Set Theory Beyond
Choice: Recorded, Not Proved Here* as a dependency, well-definedness
justification, or load-bearing forward reference. No Foundations plan page may
directly or transitively require that catalogue page. The track exists to prove
and retire those recorded results; it cannot assume them. Non-load-bearing
orientation may use `external_refs`, but it must never enter a proof or a
prerequisite closure. Treat either violation as fatal and unpublishable.

**11. Axiom of Choice.** The owner authorizes assuming AC wherever a proof
needs it. State the assumption in the item contract and identify the exact
use inside the proof, declaring `def-axiom-of-choice` as a dependency.
Propagate the assumption to consumers that use the affected result. Do not
infer arbitrary-index choice from finite choice or DC. Keep choice-free
arguments choice-free. This authorization does not permit using recorded
results as suppliers or bypassing the Foundations bootstrapping boundary.

**Step 3.** Each A/B pair has its own scaffold auditor and item author. Authors
audit scaffolds, repair local gaps, then author every assigned item and A/B page.
Pairs sharing a batch author sequentially to protect shared files. Across
batches, a consumer waits until every transitive in-run prerequisite is
artifact-complete and has no live repair writer; independent branches remain
parallel. They may add
necessary definitions and lemmas to assigned existing A pages before consumers.
Escalate substantial unmet
prerequisites and unresolved mathematics to the owner. Report potentially
defective published items with exact evidence for the canonical ledger.
Do not drop claims, add pairs, override owner decisions or edit published items.
Record complete authored arguments/contracts before closing item decisions.
Step 4 retains mechanical plan splicing and its post-author snapshot; take the
pre-author baseline before Step 3 authors start.

**Step 5.** Step 5a runs one independent reader per batch on another batch's
files, then a read-only refuter pass over every untouched carrier, every
HIGH/CRITICAL item and every page carrier, then group adjudication of the
routed obligations (touched, page, reader, refuter); Step 5b reconciles
cross-group dependencies and closes. Do not repeat Step 3's scaffold audit. Be
impartial, state uncertainty honestly, and read authoritative sources for
unfamiliar mathematics. Accept sound content or repair locally, fully authoring
necessary definitions and lemmas in assigned existing A pages. Escalate
substantial unmet prerequisites that cannot be supplied locally; never accept
unresolved mathematics. Record every published defect in the canonical ledger.
Preserve cross-group dependency, impact and exact-hash closure checks. Every 5a
and 5b gate failure is an owner hold: the owner repairs the rejected items and
recertifies what the repair invalidates, then retries the same gate.

**Step 7.** The engine's repair, adjudication, rejudgment and item gates are
limited to the immutable IDs in `research/<run>-step7-v2/frontier.json`.
Published items inside the frontier follow the same Step-7 protocol as draft
items. Every outside consumer, published or draft, stays outside those mechanisms.
Preserve historical repairs, assignments, reports and certifications without
turning their former scope into new repair authority.

7.1 one Sol xhigh adjudicator per batch resolves Step-6 rejections and repairs
confirmed frontier defects. 7.2 three Sol xhigh owner agents run concurrently
on disjoint frontier impact assignments. 7.3 the central tool verifies complete
frontier repair and review coverage, waits for every writer, then certifies the
stable state once. 7.4 Sol xhigh rejudges repaired frontier items; 7.5 Sol xhigh
adjudicators resolve renewed frontier rejections; 7.6 three parallel owner
lanes close frontier impacts; 7.7 centrally recertifies after all work closes.
Repeat 7.4–7.7 until the latest round's unique confirmed-fatal original frontier
items divided by the immutable original frontier count is strictly below 5%.
The threshold permits the final gate; it never accepts unresolved defects or
uncertainty. Confirmed nonfatal defects also require repair.

7.8 runs the complete battery with item findings scoped to that frontier.
7.9 three parallel owner lanes repair actual frontier gate subjects; no new
items may be authored in 7.9 or its continuations. After repair closure and
central recertification, 7.10 reruns the same scoped battery. Repeat until green,
then freeze for Step 8. Gate ownership comes from actual failing subjects,
never inventories, passing rows or merely cited suppliers. Preserve complete
raw diagnostics and identify outside findings as excluded, never mathematical
passes or frontier blockers. Global integrity, runtime, ambiguous and unknown
diagnostics remain blocking obligations.

Downstream examination begins only when a repair changes its original
`## Statement` or `## Definition` section, including lemmas and corollaries.
Compare the sections directly; do not use a semantic classifier. Proof,
citation, dependency and metadata edits with unchanged interfaces trigger no
downstream work and do not invalidate consumer reviews. Examine direct
dependency/reference consumers, and propagate another hop only if a necessary
repair changes that consumer's own Statement/Definition. A reference alone
does not require an edit. Never pre-expand a transitive closure through
unchanged statements. Record explicit discoveries and their exact mathematical
use, and reconcile missing load-bearing dependencies.

Frontier consumers follow the Step-7 repair protocol. Outside consumers use
separate maintenance with three disjoint parallel lanes, after frontier writers
drain and before central certification. Every supplier Statement/Definition
change, published or draft, produces a direct-consumer event. Handle each
supplier-interface event and consumer once; gates and unrelated context changes
do not reopen it. A necessary maintenance statement change produces the next
event. A cascade returning to a frontier item routes to ordinary frontier owner
work, never an outside maintenance assignment.

Maintenance edits must be strictly necessary and the smallest logically
sufficient repair. Record the exact `affected_use`, `invalidated_claim`,
`minimality` explanation and exact before/after snippets; unchanged consumers
need an evidenced unaffected disposition. Reconstruct edits from the reported
snippets and reject unreported changes. This checks edit accounting, not
mathematical truth: agents must independently justify necessity and minimality.
Outside maintenance has its own ownership and evidence; it never enters
Step-7 repair, rejudgment, adjudication or item gates. Finish all required
frontier work and separate maintenance before stable certification.

All three frontier owner lanes run concurrently in 7.2, 7.6, 7.9 and each
continuation. Keep item ownership disjoint and use
`tools/step7-shared-write-lock.mjs` only for short shared-metadata
read/edit/check sections. Every continuation waits for the preceding writers.
Finish all required frontier repairs and reviews before certification. Bind
decisions, verdicts and certificates to the current round and content; agents
never manufacture verdicts or certify their own dispatches. Missing or stale
evidence and incomplete frontier coverage block progress. A repeated pending
set at a previously assigned content state holds for operator resolution of
stale evidence or oscillation; it never launches another identical wave.
Historical inputs lacking section snapshots remain immutable. Preserve their
evidence, never invent old statements, and apply current scope when preparing
replacement assignments.

Before 7.9, batch adjudicators and frontier owner agents may author a new item
only for a genuine unmet prerequisite of an assigned frontier repair. Record
the missing claim and consuming proof step, fully author it with honest source
and uncertainty evidence, use a unique ID, and reconcile its registry/index,
page, manifest and contract. Preserve author-origin integrity and required
certification evidence. Such additions do not enlarge the frozen frontier or
enter its Step-7 rejudgment and gate loops; this grants no unrelated expansion.

An explicitly owner-authorized fatal finding after the freeze uses the guarded
`recover-step8` command. Preserve Step-7 history, repair only its hash-bound
allowlist, and reopen only changed-item judgment, impact closure, stamps and
receipts before Step 9. This does not reopen the completed Step-7 loop.

**12. Phase-3 repair ledger.** Throughout Phase 2, maintain
`research/published-consumer-supplier-ledger.md` as the existing canonical
record of published items needing Phase-3 proof, definition, dependency or
page-header repairs. Record each finding promptly with exact item/page IDs,
evidence, required repair, supplying prerequisites and status.
Keep this ledger limited to published-item defects and their audit evidence.
Do not add engine status, dispatches, queues, retries, pause/resume history,
recording conflicts, workflow hashes, handovers, or draft-only implementation
notes. Put those in the run record. Link supporting audit evidence instead of
copying operational transcripts. Update an existing defect entry only when its
mathematical finding, supplier mapping, repair strategy or audit status changes.
For each target, identify the exact Phase-2 supplier items and their current
build/publication states, and record a recommended proof strategy with source
evidence. During monitoring intervals, audit additional published items and
improve these strategies. Before Phase 2 concludes, reconcile the ledger with
all published-item audit findings; never claim exhaustive discovery while
published items or dependency interfaces remain unaudited. Distinguish
confirmed defects from downstream impact-review candidates and incomplete
audits. Update existing entries rather than create duplicate ledgers. A new
scaffold or published supplier does not close a published-proof defect;
published content remains read-only except for authorized repairs: frozen-frontier
items follow Step 7, while outside consumers use separate maintenance.
The current early-repair authorization permits confident repairs needing no Phase-2
dependencies, one item at a time, without judges. It covers necessary
dependency, home and verification updates. Record local checks honestly;
do not represent them as independent review or an owner audit.
Continue discovering defects after each repair. Record blocked repairs with
exact pending suppliers and proof strategies in the same ledger. Try local
closure first; if a necessary prerequisite is absent from Phase 2 and cannot
be supplied locally, reconcile the relevant prose scaffolds and authoritative
Phase-2 scope to include it.
During Phase 2, distinguish actual item-level proof prerequisites from other
items on prerequisite pages. Published consumer debt does not block its new
supplier unless the supplier's proof actually depends on the defective result
or affected clause. Require exact paths and mathematical uses for such blockers;
retain unrelated debt in the ledger. Structural checks and the Foundations
bootstrapping boundary remain unchanged.

Maintain the ledger's deduplicated item classification index alongside each
finding: U-P (unaudited/potential), U-C (unaudited/confirmed), A-R
(defect-focused audit and repair), or A-P (audited/pending Phase 3).
Audit scope must be explicit; local review is not an independent judge or
whole-closure certification. Old publication stamps do not establish a current
repair audit. Keep supplier-only mentions and incomplete reconciliation out of
confirmed repair totals. A new defect reopens a repaired item. Move its one
index row and update counts whenever its disposition changes, retaining the
evidence and exact supplier mappings. Before Phase 2 concludes, reconcile the
entire published census and all category/engine findings, resolve the U-P/U-C
queues, and freeze the complete A-P list with publication-ready prerequisite
IDs and repair strategies. Keep reviewed/no-repair-needed receipts outside
the active defect classes; never label a sound item as repaired.
