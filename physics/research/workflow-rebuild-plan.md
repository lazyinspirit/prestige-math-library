# Workflow rebuild plan

Approved implementation: physics on `main`; mathematics on a separate branch.
Use this file as the build checklist and revisit it before integration and audit.

## Required behavior

1. Step 1's existing scaffolding agents perform all initial authoring: manifests,
   items, A/B pages, proof contracts and source evidence. Preserve existing models
   and all Step-1 escalation mechanisms. Both drift reviewers and authors must
   escalate significant unmet prerequisites to the owner. Capture the authoring
   baseline before construction, and require authored carriers before handoff.
2. Delete the former Step 2. Generate required downstream group metadata during
   planning, without a separate dispatch stage.
3. Replace the former Step 3 with batch scope/prerequisite review and repair.
   Each batch has a reviewer and repairer, both GPT-6 Luna at max effort. Reuse
   their sessions where supported; only dispatch the repairer for actual findings.
   Every review examines the entire current batch before handing off one report.
4. Reviewers escalate significant unmet prerequisites and insufficient scope to
   the owner. Repairers may add/delete/edit locally owned batch items, maintaining
   pages, manifests and contracts; desired changes outside their batch escalate.
   Imports and the original mathematics library remain protected in physics.
5. Allow at most two repair rounds: review/accept -> repair -> review/accept ->
   repair -> final review/accept. A failing third review holds for the owner.
   Persist counters through restart, retry and redispatch; never reset history.
6. Reuse Step-1 item dependency levels and the actual pair/supplier graph. Finish
   lower prerequisite pairs before higher consumers, recompute after edits, hold
   consumers of blocked suppliers, and invalidate acceptance after supplier edits.
   Both reviewer and repairer trace and check every direct and indirect consumer
   when an original Statement/Definition or physical public interface changes.
   Repair affected consumers inside the batch; escalate required outside-batch
   changes to the owner with exact consumer IDs and dependency paths.
   Do not introduce another dependency-level bookkeeping system or rebatch solely
   to align levels. Independent work may share the existing 30-agent limit.
7. Both prompts require unbiased assessment, explicit uncertainty, honest source
   reading and authoritative sources when uncertain. Logical validity overrides
   literature authority. Keep receipts to identity, round, verdict, current hashes,
   defect types and a one-sentence repair description; no detailed item narratives.
8. Reuse existing mechanical checks; add no new substantive review gates. Preserve
   later stages' review/repair/finalization duties and formatting/metadata-only
   pre-gate recertification. Delete obsolete initial-authoring and receipt paths.
9. Owner amendment: delete the ORIGINAL Step 4 splice/integration stage as well.
   Keep necessary manifest-to-plan transcription and the post-authoring snapshot
   inside the existing mechanical scope/prerequisite handoff, without another
   agent or stage. Renumber to six steps: 1 construction, 2 scope/prerequisite
   review/repair, 3 independent review, 4 batch review/judging,
   5 adjudication/repair, 6 closeout. Update stages, task generation, handoffs,
   commands, prompts and all current documentation. Historical run evidence stays
   historical; require fresh state under a new workflow revision.
10. Protect engine-specific prompts from mirror synchronization. Run focused tests
    for transitions, full-batch coverage, dependency ordering, write boundaries,
    additions/deletions, escalations and restart-safe caps; run typechecks. Have an
    independent GPT-6.1 Sol agent at medium effort audit the implementation against
    this plan. Resolve findings, commit each engine on its requested branch, and
    report validation and limitations. Do not change active runs or publish/push.

## Progress

- [x] Plan saved before implementation.
- [x] Physics implementation and documentation on main.
- [x] Mathematics implementation and documentation on its separate branch.
- [x] Focused transition and policy tests; typechecks.
- [x] Independent audit and resolution of findings.
- [x] Final commits and branch verification.

Validation and limitations: [workflow-rebuild-audit.md](workflow-rebuild-audit.md).

## Owner update — 2026-10-14 parallel initial authoring

Fill all available initial-authoring slots up to the shared 30-worker cap,
prioritizing the full pending queue by dependency level and refilling a slot on
completion. Missing prerequisites owned by another pair do not block dispatch
or remaining authoring. Preserve exact conditional supplier interfaces and
explicit unresolved readiness records; the complete drained Step-1 gates still
require actual current prerequisites and complete authored carriers. This changes
initial scheduling only, with no new stage, rebatching or review waiver.
