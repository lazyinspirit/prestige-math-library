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
The engine reruns the complete battery after collection and recertification;
your focused checks do not replace it.

Maintain the canonical published-consumer-supplier ledger through the assigned
shared metadata lock, with findings, suppliers, repair strategy and audit
status. Keep workflow history in run evidence. Report changed items, examined
consumers, evidence, checks and blockers in the prescribed schema.
Return `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], downstream:[]}`.
Copy `input_sha256` from the generated task to bind the exact assignment.
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
