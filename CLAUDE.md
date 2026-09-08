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

**9. Full-text recovery.** Step 1 agents must verify full text at every source
URL. After failure, search the web autonomously and retry recovery five times.
If the original is genuinely unavailable on the open web, develop a complete
alternate proof locally or from accessible authoritative literature. Drop the
source only with full mathematical confidence and the decision record required
by `briefs/beta-scaffold.md`; otherwise escalate the URL and exact uncertainty
to the owner. Gates respect valid drops without dropping results. Step 3
independently judges the alternative: mathematical soundness overrides missing
original text, but confidence and fetch receipts do not prove soundness.

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

**12. Phase-3 repair ledger.** Throughout Phase 2, maintain
`research/published-consumer-supplier-ledger.md` as the existing canonical
record of published items needing Phase-3 proof, definition, dependency or
page-header repairs. Record each finding promptly with exact item/page IDs,
evidence, required repair, supplying prerequisites and status.
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
