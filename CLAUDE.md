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

**Step 7.** The engine owns the following repeatable protocol:
Downstream review/repair is triggered ONLY when a repair changes the original
`## Statement` or `## Definition` section, including lemmas and corollaries.
Compare the sections before and after directly; no semantic classifier.
Proof, citation, dependency and metadata edits with unchanged statements trigger
no downstream work and do not invalidate consumer reviews. New prerequisite
interfaces count as additions. Gate subjects remain mandatory independently.
Frozen historical inputs without section snapshots retain their existing
obligations; never invent historical statement content.
7.1 one Sol xhigh adjudicator per batch adjudicates Step-6 rejections, repairs
confirmed defects (including nonfatal defects) and identifies all downstream
consumers; 7.2 three Sol
xhigh owner repair agents run in parallel and examine all downstream consumers across the whole
library, including published items, and repair only consumers for which a change
is absolutely necessary, using the smallest logically sufficient edit; sound
consumers remain unchanged with an evidenced unaffected review. 7.3 the
orchestrator verifies that every consumer was examined and every necessary
repair completed, then recertifies the complete stable state in one pass after
all writers drain. Then 7.4 Terra
rejudges repaired items; 7.5 Sol xhigh adjudicators adjudicate and repair renewed
rejections and identify downstream effects; 7.6 three Sol xhigh owner agents
examine those consumers and make only necessary minimal repairs; 7.7 the
orchestrator verifies complete examination and necessary-repair closure, then
recertifies everything in one stable pass. Repeat 7.4–7.7 until the latest round's unique confirmed-fatal original
frontier items divided by the immutable original frontier count is strictly
less than 5%. Neither added items nor a shrinking queue changes the denominator.
This threshold permits the final gate, never unresolved defects or uncertainty.
7.8 runs the complete gate battery; 7.9 owner agents repair every failure and
the orchestrator recertifies changed items; 7.10 reruns the complete battery.
Repeat 7.9–7.10 until green, then freeze the result and proceed to Step 8.
Gate repair ownership comes from actual failing subjects, never passing
inventories or merely cited suppliers. Preserve every diagnostic, including
global/tool failures, as an explicit assigned obligation. Propagate downstream
from statement/definition changes and their discoveries, not speculative gate candidates.
Fatal classification controls only the convergence threshold; all actual defects
must be repaired. Newly discovered downstream work continues in the repair phase
with fresh disjoint assignments until every relevant repair is complete, before
certification. Keep ownership disjoint and bind
every decision, verdict and certification to the current round and content.
Missing evidence, stale certification or incomplete impact coverage blocks
progress. Agents never manufacture verdicts or certify their own dispatches.
Distinguish declared load-bearing dependencies from explanatory references.
Examine direct reference candidates, but do not infer transitive mathematical
dependence merely from chains of body links. Repair actual effects, reconcile
missing load-bearing dependencies and report further consumers; unchanged sound
reference consumers do not automatically spread impact to their own consumers.
All three owner lanes run concurrently in 7.2, 7.6, 7.9 and every continuation
pass, for current and future runs. Item ownership stays disjoint. Shared
metadata edits use `tools/step7-shared-write-lock.mjs` for short read/edit/check
sections; never hold that lock during research. Each continuation waits for all
writers in the preceding pass, and certification waits for complete closure.
Both batch adjudicators and all three owner agents may author new items only
for genuine unmet prerequisites of assigned repairs. Record the precise missing
claim and its consuming proof step; fully author and verify the addition with
honest uncertainty and source evidence. Use unique IDs, register the item in the
canonical registry/index, page, applicable manifest and contract, and reconcile
all dependencies and downstream effects before certification. New items enter
central certification and every applicable gate, while the original-frontier
denominator stays frozen. This grants no unrelated scope expansion.
If the owner explicitly authorizes recovery for a fatal defect discovered after
that freeze, use the guarded `recover-step8` command: preserve the Step-7
snapshot and judgment history, repair only the hash-bound allowlist, and reopen
only changed-item judgment, impact closure, stamps and receipts before Step 9.
This bounded Step-8 recovery does not reopen the completed Step-7 loop.

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
published content remains read-only except for owner-authorized repairs,
including the assigned whole-library downstream repairs in Step 7 above.
Outside that Step-7 protocol, the current early-repair authorization permits
confident repairs needing no Phase-2
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
