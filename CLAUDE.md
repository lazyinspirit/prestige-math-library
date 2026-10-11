# Orchestrator instructions

1. **Authority and references.** These rules govern orchestrators and their directly spawned agents. Engine-dispatched workers follow their assigned briefs; `tools/autopilot/` owns dispatch and transitions. Read README.md fully. Follow SCHEMA.md for content and WORKFLOW.md for build controls; use `tools/` for checks and `research/` for plans and evidence.

2. **Scope and autonomy.** Preserve the approved scope and run-local owner directions. When owner decisions are delegated, act without routine approval requests. Do not expand scope, bypass gates, control unrelated runs, publish, or push. New content remains draft. Verify planning prerequisites before dispatch and the engine’s closeout commit at completion.

3. **Repair team.** Assign flagged subjects to up to fifteen `gpt-6.1-sol` agents with exact item IDs and disjoint write scopes. Use medium effort for Steps 1–3 and 6, high for Steps 4–5; use fewer agents when appropriate and none without findings. Avoid active engine writers. The orchestrator owns integration and gate closure; handle agent command prompts without asking the owner.

4. **Mathematical integrity.** Understand claims, proofs, and actual dependencies before repair. Check arguments independently, consult authoritative full texts when uncertain, and report unresolved gaps. Never invent source reading, proof completion, confidence, or check results. Local checks are not independent audits. Preserve the richest sound approved claims; do not narrow them to avoid work. For substantial rebuilds, choose the least destructive sound route and record the trade-off.

5. **Dependency and consumer ownership.** Review and repair suppliers before their direct and indirect consumers. When a supplier’s original Statement or Definition changes, the same reviewer owns all affected consumer checks and focused repairs; do not assign separate read-only reviewers. Necessary surgical repairs to published consumers are authorized.

6. **Escalations.** Check live runs every ten minutes and intervene on blockers. Resolve all escalations raised by the workflow engine as soon as they arise: record each confirmed defect, affected consumers, and smallest missing prerequisite; use a maximum of two rounds of review -> repair cycle for each escalation.

7. **Gates.** ONLY attempt gates after all escalations have been resolved. Immediately before every gate attempt, rehash and recertify every item in that gate’s frontier scope in one dependency-ordered pass, ensure correct formating and metadata ONLY. Only check the mathematics and physics of an item and its downstream consumers if the item fails a gate. Run the full battery for each gate attempt and resolve all gate failures in a single pass. Repeat gate -> repair until success.

8. **Frontier scope.** Select item and page validators from the current run manifests. Never substitute whole-corpus checks or an empty passing selection. Load external suppliers as prerequisite context and retain relevant dependency-closure checks without requiring unrelated audits, formatting, or repairs. Respect frozen-frontier authority and guarded-recovery requirements in WORKFLOW.md; preserve history and refresh evidence for reopened work.

9. **Editing standard.** Communicate plainly and briefly. Replace stale code, prompts, and documentation cleanly. After major code changes, update relevant documentation and commit both. Keep proofs concise and sound, with essential hypotheses and caveats; add necessary intermediate lemmas. Follow SCHEMA.md formatting and run `node tools/proof-layout.mjs` on explicit changed item paths after the final edit or formatter.

10. **Context compaction.** Configure automatic compaction at 500,000 tokens for all agents through Codex settings and explicit worker arguments. Existing sessions need restart or resume to adopt changed settings. Before handoff or compaction, record the objective, verified state, blockers, and next action; recheck against disk on return. Do not store credentials or transcripts.
