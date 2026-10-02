# Orchestrator instructions

1. **Scope and references.** These instructions govern orchestrators and agents they spawn directly. Engine-dispatched agents follow their assigned prompts in `briefs/` and `briefs/tasks/`; `tools/autopilot/` owns dispatch and stage transitions. Read [README.md](README.md) fully. Use [SCHEMA.md](SCHEMA.md) for content rules, [WORKFLOW.md](WORKFLOW.md) for build controls, `tools/` for checks, and `research/` for plans and run evidence.

2. **Working standard.** Answer the owner plainly and briefly. Stay within the assigned scope. Replace stale code, prompts, or documentation cleanly; do not layer fixes over them. After a major code change, update relevant documentation and commit both. Handle command prompts from spawned agents without asking the owner for approval.

3. **Default repair team.** At the start of Steps 1–5, inspect current engine findings and spawn up to ten `gpt-6.1-sol` agents at `medium` effort for flagged or escalated items. For Steps 6–8, use up to ten `gpt-6.1-sol` agents at `high` effort; for Step 9, use up to ten `gpt-6.1-sol` agents at `medium` effort. Use fewer when fewer disjoint repairs exist, and none when none exist. Give each agent exact item IDs and write scope. Keep their edits separate from active engine writers; the orchestrator owns integration and gate closure.

4. **Mathematical integrity.** Before a fatal repair, understand the claim, proof, and actual dependencies. Helpers must check arguments independently, consult authoritative full texts when unsure, and report unresolved uncertainty. Never invent source reading, proof completion, confidence, or check results. Logical validity outranks prior acceptance, judges, and citations.

5. **Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

6. **Supervision and gates.** Check a live run every ten minutes; intervene for blockers or stages that fail to close. Outside the authorized Step-7 loop, every failed gate is owner-held. Repair every rejected item, finish related writing, wait for writers to drain, refresh invalidated evidence on stable content, then retry that same gate. Do not use `retry` to start an automatic repair wave.

7. **Efficient recertification and gate attempts.** At every workflow step, be efficient with recertification and gate attempts. Avoid recertification and gate attempts that have no direct or indirect mathematical consequences.

8. **Published defects.** Keep mathematical findings, exact supplier mappings, repair strategy, and audit status in `research/published-consumer-supplier-ledger.md`; keep operational history in the run record. Confident early repairs needing no Phase-2 supplier are authorized one item at a time, including necessary dependency, home, and verification changes. Record local checks honestly; they are not independent audits. Published repairs have no item gate, rejudgment, or adjudication duty.

9. **Continuity.** All agents, including the orchestrator, its spawned agents, and workflow workers, use automatic compaction at 500,000 tokens of total active context. Configure this in Codex settings and explicit worker launch arguments; instructions alone do not change the runtime threshold. Existing sessions retain their startup settings until restarted or resumed with the new configuration. Before handoff or compaction, record the objective, verified state, blockers, and next action in the appropriate durable artifact. Recheck that record against disk on return. Do not store credentials or transcripts.

10. **Step 0 — plan.** Verify selected pairs and prerequisite availability, then run planning and preflight. Preserve the approved scope; resolve planning blockers before dispatch.

11. **Step 1 — scaffold.** Resolve drift, source, dependency, and item-readiness escalations. Reconcile affected plans, manifests, prose, and published-defect records before retrying the final gate. Preserve any run-local owner authoring direction.

12. **Step 2 — assign.** Verify group and batch coverage. Repair assignment or task-generation blockers without changing the selected build scope.

13. **Step 3 — author.** Resolve owner-held scope decisions, unmet prerequisites, and incomplete item or contract evidence. Keep every promised claim; require complete arguments and exact supplier uses before clearing escalations. Refresh affected certifications after authors finish.

14. **Gate and escalation ownership.** Gate failure or workflow engine escalation triggers an agent review and repair of the flagged item or subject. The same reviewer owns the repair, including all affected direct and indirect downstream consumers; the orchestrator must not spawn separate read-only reviewers. A downstream consumer is affected only when the supplier's original statement is altered, including a Definition when it is the supplier's claim. This rule applies to all steps of the workflow.

15. **Step 4 — splice.** Resolve plan, page, manifest, and snapshot discrepancies. Check that authorized local additions precede their consumers before advancing.

16. **Step 5 — review.** Resolve reader, refuter, adjudicator, source, and cross-group findings. Repair actual failing subjects; examine direct consumers when a Statement or Definition changes. Track published defects in the canonical ledger and recertify affected evidence before gate retry.

17. **Step 6 — judge.** Resolve owner-held scope, coverage, and evidence blockers. Preserve mathematical rejections for the assigned Step-7 adjudication unless an actual Step-6 gate requires owner repair.

18. **Step 7 — repair.** Supervise the frozen-frontier loop in [WORKFLOW.md](WORKFLOW.md). Assign helpers only disjoint owner-held work; do not expand frontier authority. Finish frontier repairs and separate published or outside-consumer maintenance before stable central certification. Escalate repeated unchanged pending work rather than inventing completion.

19. **Step 8 — close changes.** Resolve changed-item judgments and direct-consumer impacts after the Step-7 freeze. Use guarded recovery only with the required owner authorization; preserve Step-7 history and recertify the reopened suffix.

20. **Step 9 — handoff.** Resolve contract, pathway, readiness, and report blockers; verify the engine's closeout commit. New content remains draft. Publication and pushing remain owner actions.

21. **Step 3 pre-gate recertification.** Immediately before each Step 3 gate attempt, after the orchestrator, engine workers, and owner-spawned review and repair agents have finished writing, the orchestrator must rehash and recertify every Step 3 item in one dependency-ordered pass against the current content and mathematical evidence. Do not attempt the gate until the pass is complete.

22. **Dependency order and published consumer repairs.** All owner/orchestrator-spawned agents must review and/or repair items in the correct dependency order: suppliers before their direct and indirect consumers. Agents are authorized to surgically repair published direct or indirect consumers if the original supplier's statement is changed.
