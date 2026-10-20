# Orchestrator instructions

1. **Authority and references.** These rules govern orchestrators and their directly spawned agents. Engine-dispatched workers follow their assigned briefs; `tools/autopilot/` owns dispatch and transitions. Read README.md fully. Follow SCHEMA.md for content and WORKFLOW.md for build controls; use `tools/` for checks and `research/` for plans and evidence.

2. **Scope and autonomy.** Preserve the approved scope and run-local owner directions. When owner decisions are delegated, act without routine approval requests. Do not expand scope, bypass gates, control unrelated runs, publish, or push. New content remains draft. Verify planning prerequisites before dispatch and the engine’s closeout commit at completion.

3. **Mathematical integrity.** Understand claims, proofs, and actual dependencies before repair. Check arguments independently, consult authoritative full texts when uncertain, and report unresolved gaps. Never invent source reading, proof completion, confidence, or check results. 

4. **Open problems.** Classify genuinely unproved claims as `open-problem` (`op-`), with precise formulation and source/status review; never use them as logical suppliers. Missing local authoring of an established proof is a separate obligation. 

5. **Editorial directions.** Preserve the richest sound approved claims; do not narrow them to avoid work. Avoid changing the statement if at all possible. Create new items as intermediate results if an item lacks substantial prerequisite. Across the entire frontier, agents may draw TikZ diagrams where appropriate and keep their conventions compatible with diagrams in the literature; rigorous proofs must not rely on diagrams.

6. **Dependency and consumer ownership.** Review and repair suppliers before their direct and indirect consumers. When a supplier’s original Statement or Definition changes, the same reviewer owns all affected consumer checks and focused repairs; do not assign separate read-only reviewers. Necessary surgical repairs to published consumers are authorized.

7. **Escalations.** Check live runs every ten minutes and intervene on blockers. Resolve all escalations raised by the workflow engine as soon as they arise: record each confirmed defect, affected consumers, and smallest missing prerequisite, delegate escalation resolution tasks to up to 15 gpt-6.1-sol (medium) codex agents, orchestrate escalation resolution as efficiently as possible, minimize rewriting, overwriting, and bookkeeping overhead, repair suppliers before consumers whenever possible. Use a maximum of two rounds of review -> repair cycle for each escalation. Rehashing and recertification are owned by the orchestrator.

8. **Gates.** ONLY attempt gates after all escalations have been resolved. Before each attempt, check every scoped item in dependency order for formatting and metadata, and bind the actual current inputs. In Step 6, perform the actual metadata/render pass once for the exact current frontier/context and repair round, then all final gates; unchanged bookkeeping does not require another pass. Changes or repairs invalidate that preparation and require fresh checks and the full battery. Investigate mathematics and physics only for gate failures or suspicious defects, including affected consumers. Resolve all failures together; repeat check -> repair -> full battery until success. Immediately after the successful final battery, generate the concise report, then commit. Report/commit-dependent assertions belong inside those operations, with no post-commit content battery. Retain all mechanical conditions, liveness and repair mechanisms. Earlier Steps 1–5 retain their existing owner recertification protocol.

9. **Frontier scope.** Select item and page validators from the current run manifests. Never substitute whole-corpus checks or an empty passing selection. Load external suppliers as prerequisite context and retain relevant dependency-closure checks without requiring unrelated audits, formatting, or repairs. Respect frozen-frontier authority and guarded-recovery requirements in WORKFLOW.md; preserve history and refresh evidence for reopened work.

10. **Editing standard.** Communicate plainly and briefly. Replace stale code, prompts, and documentation cleanly. After major code changes, update relevant documentation and commit both. Keep proofs concise and sound, with essential hypotheses and caveats; add necessary intermediate lemmas. Follow SCHEMA.md formatting and run `node tools/proof-layout.mjs` on explicit changed item paths after the final edit or formatter.

11. **Context compaction.** Configure automatic compaction at 500,000 tokens for all agents through Codex settings and explicit worker arguments. Existing sessions need restart or resume to adopt changed settings. Before handoff or compaction, record the objective, verified state, blockers, and next action; recheck against disk on return. Do not store credentials or transcripts.

12. **Run-specific external-source boundary.** For `inverse-problems-knot-theory-all-109-2026-10-19`, the owner explicitly authorized precise external citations for remaining established dependencies across Step 1, after first applying this boundary to flyping/TOP. This overrides the local-proof-only rule in SCHEMA.md for this run only. Preserve resolved local proofs and dependencies. Clearly label every imported result as an external input; give its exact source, locator, hypotheses and actual reading limits. Do not describe it as a locally reconstructed proof, invent source coverage, or relabel an open problem as established. Ordinary source references and explicit Facts record these imports; no fabricated review, readiness or gate coverage is permitted. All ordinary workflow gates remain required. The engine must pause after `1-scaffold` gates and before Step 2. The dated scope record is `research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/external-source-closeout-direction.json`.

13. **Bounded reviewed-local provenance exception.** In the run named in rule 12,
root authorized preserving exactly the eight independently accepted local
lemmas listed in SCHEMA.md under truthful `ai-generated` statement/proof tags.
Only the exact `reviewed-local-lemma` role and root-owned
`local_proof_acceptance` mapping, actual independent-review file, and matching
accepted body SHA256 permit their lemma/dependency use. Root owns those item
metadata and digest bindings. Preserve actual source references, including
Hamilton/Brown adaptations in the composite boundary-link lemma; the exception
does not relabel its complete Statement as a published theorem. This exception
creates no external attribution,
mathematical acceptance, audit coverage, or waiver for other items; ordinary
workflow gates and frozen review histories remain required.
