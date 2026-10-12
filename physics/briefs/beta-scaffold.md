# Step 1 — physics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/<run>-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Work in `physics/`; edit only assigned draft items, A/B pages and batch evidence. Imported mathematics and root mathematical originals are read-only; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- Read `research/<run>-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, regularity, hypotheses, units and conventions.
- Fully justify **every proof step**. Write complete conditional proofs, refutations, counterexamples and verification arguments; a strategy or citation alone does not supply a missing argument.
- **Proof format:** Label facts and hypotheses in `## Facts & Assumptions` with `[F1]`, `[A1]`, or `[L1]` entries and exact supplier wikilinks. Supply `proof_strategy` and `**Given:**`; write at least two `phase.step` steps (`1.1`, `1.2`, …), separated by blank lines. End every step with valid justification tags naming its inputs; cite only earlier steps. Put punctuation before tags and `∎` after the final group. Match labels and step numbers exactly in the proof contract.
- Distinguish adopted postulates, derived predictions, reported observations and statistical inference. Physics proofs are conditional deductions; experiments do not prove models. Preserve apparatus assumptions, sampling conditions, uncertainty and empirical qualifications. Never invent measurements or precision.
- Preserve `domain`, `library`, `dependency_roles` and `physical_scope`. Mathematical items use only mathematical prerequisites; develop missing mathematics locally. Treat draft/planned suppliers at their actual inspected statement, hypotheses and proof status, never as proved by their label.
- Read authoritative full-text sources; normally use two independent treatments per A page, including a book or full lecture notes. Record URLs, locators, supported items and each harvested result’s disposition. Verify retrieval by inspection and `source-fetch-check --stamp`; never invent reading or fetch evidence.
- After a retrieval failure, search alternatives and make at most five recovery retries, stopping on success; reuse prior attempts. After five failures, supply complete alternative proofs or escalate. Preserve source history; record attempts, searches and per-item arguments/dependencies in `source_resolution` under `tools/physics-support/source-resolution.mjs`. Mark `dropped` only with justified certainty; otherwise `owner-escalation`. Dropping a source never waives mathematical coverage.
- Complete assigned items, A/B pages, manifests, proof contracts, coverage, notes, readiness records and cross-batch dependency inputs. Preserve unchanged ready content; respect the 100-item page cap and schema requirements.
- Generate proof contracts from finished arguments, with actual steps, claims, inputs, exact supplier excerpts, boundary cases and applicable finite checks. Keep manifests, pages, coverage and dependency records consistent.
- Run required scoped checks, including dependency levels and `node tools/physics-support/proof-layout.mjs` on explicitly changed items after final edits. Record actual results and blockers. Use `node tools/physics-support/step1-decisions.mjs record` to mark each final item `ready` only with complete prerequisites, placement and contract; otherwise `escalated`. Include examined dependencies and evidence; never use `--owner` or overwrite an escalation.
- Keep proofs concise: retain essential reasoning and caveats; remove repetition and filler. Report defects with exact item IDs and evidence. Completion records do not constitute independent approval.

## Proof example

```markdown
---
proof_strategy: direct
---

## Facts & Assumptions

**Given:** Time interval $I\subseteq\mathbb R$ open, $t_0\in I$, constant mass $m>0$, scalar velocity $v\in C^1(I,\mathbb R)$ and force $F=0$. Use SI units.

[A1] Adopted model equation: $mv'(t)=F(t)$ on $I$.

[F1] [[cor-zero-derivative-implies-constant]]: a continuous interval function with zero interior derivative is constant.

## Proof

1.1 Divide [A1] by $m>0$: $v'(t)=0$ throughout $I$. [given, A1, algebra]

1.2 Apply [F1] to $v$: $v(t)=v(t_0)$ on $I$. This is a model deduction. [given, F1, step 1.1] ∎
```
