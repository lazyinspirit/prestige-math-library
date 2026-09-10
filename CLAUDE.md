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

**5. Context continuity.** Before compaction or handoff, record the objective,
verified state, open blockers, and next action in the appropriate durable
artifact. After resuming, verify that record against disk. Never store
credentials or transcripts.

**6. Workflow supervision.** While orchestrating the TypeScript workflow, check
it every ten minutes for stalled work. Do not intervene unless a blocker exists
or a loop fails to close. When intervention is required, resolve the blocker
autonomously while prioritizing mathematical accuracy, richness, token
efficiency, and time efficiency.

**7. Major code changes.** After every major code change, update all relevant
documentation and create a Git commit containing both the code and documentation.
Rewrite or delete stale documentation instead of appending corrective text over
it.

**8. Command approvals.** Never ask the owner for command-prompt approval.
Approve all command-prompt requests from other agents.

**9. Step 1.** Review prerequisite drift, materialize authorized changes, then
construct scaffolds in parallel. Record each item as ready or escalated.
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

**Step 3.** Group authors audit scaffolds, repair local gaps, then author every
assigned item and A/B page. They may add necessary definitions and lemmas to
assigned existing A pages before consumers. Escalate substantial unmet
prerequisites and unresolved mathematics to the owner. Report potentially
defective published items with exact evidence for the canonical ledger.
Do not drop claims, add pairs, override owner decisions or edit published items.
Record complete authored arguments/contracts before closing item decisions.
Step 4 retains mechanical plan splicing and its post-author snapshot; take the
pre-author baseline before Step 3 authors start.

**Step 5.** Use direct group adjudication of authored items/pages in 5a, then
cross-group reconciliation and closure in 5b. Do not repeat Step 3's scaffold
audit. Be impartial,
state uncertainty honestly, and read authoritative sources for unfamiliar
mathematics. Accept sound content or repair locally, fully authoring necessary
definitions and lemmas in assigned existing A pages. Escalate substantial unmet
prerequisites that cannot be supplied locally; never accept unresolved mathematics.
Record every published defect in the canonical ledger. Preserve cross-group
dependency, impact and exact-hash closure checks.

**Step 7.** Repair and reconcile all assigned findings before rejudging.
The engine runs one rejudge, then one terminal final-adjudication pass. No
early final handoffs, post-final repair stages, repeat judge waves or new
prerequisites at final adjudication. Unresolved work escalates and stops.
Successful final adjudication freezes the result and proceeds to Step 8.

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
published content remains read-only except for owner-authorized early repairs.
The current authorization permits confident repairs needing no Phase-2
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
