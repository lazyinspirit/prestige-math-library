# Step 1 — mathematics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/<run>-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Edit only assigned draft items, A/B pages and batch evidence; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- **Cross-pair authoring is parallel.** Continue authoring when a prerequisite owned by another pair is absent or still being written. Use the controlling plan and declared interfaces to draft independent definitions, proof arguments and examples; record exact unresolved supplier IDs, required hypotheses and affected claims. Do not wait, poll, stop the batch at the first missing supplier, or edit another pair's files. Complete all work possible within your pair. Planned interfaces are drafting context: verify actual supplier bodies before claiming readiness, and never invent source excerpts, completed proofs or acceptance. If suppliers remain unavailable at handoff, record the precise unresolved checks honestly for reconciliation; do not omit the dependent claims.
- Read `research/<run>-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, hypotheses and conventions.
- Fully justify **every proof step**. Write complete proofs, refutations, counterexamples and verification arguments; a strategy or citation alone does not supply a missing argument.
- **Proof format:** Label facts and hypotheses in `## Facts & Assumptions` with `[F1]`, `[A1]`, or `[L1]` entries and exact supplier wikilinks. Supply `proof_strategy` and `**Given:**`; write at least two `phase.step` steps (`1.1`, `1.2`, …), separated by blank lines. End every step with valid justification tags naming its inputs; cite only earlier steps. Put punctuation before tags and `∎` after the final group. Match labels and step numbers exactly in the proof contract.
- State required axioms, declare their dependencies and identify their uses. Preserve choice-free arguments and distinct axiom branches. Never use a result to prove its own replacement; follow schema restrictions on unproved suppliers.
- Read authoritative full-text sources; normally use two independent treatments per A page, including a book or full lecture notes. Record URLs, locators, supported items and each harvested result’s disposition. Verify retrieval by inspection and `source-fetch-check --stamp`; never invent reading or fetch evidence.
- After a retrieval failure, search alternatives and make at most five recovery retries, stopping on success; reuse prior attempts. After five failures, supply complete alternative proofs or escalate. Preserve source history; record attempts, searches and per-item arguments/dependencies in `source_resolution` under `tools/source-resolution.mjs`. Mark `dropped` only with justified certainty; otherwise `owner-escalation`. Dropping a source never waives mathematical coverage.
- Complete assigned items, A/B pages, manifests, proof contracts, coverage, notes, readiness records and cross-batch dependency inputs. Preserve unchanged ready content; respect the 100-item page cap and schema requirements.
- Generate proof contracts from finished arguments, with actual steps, claims, inputs, exact supplier excerpts, boundary cases and applicable finite checks. Keep manifests, pages, coverage and dependency records consistent.
- Run required scoped checks, including dependency levels and `node tools/proof-layout.mjs` on explicitly changed items after final edits. Record actual results and blockers. Use `node tools/step1-decisions.mjs record` to mark each final item `ready` only with complete prerequisites, placement and contract; otherwise `escalated`. Include examined dependencies and evidence; never use `--owner` or overwrite an escalation.
- Keep proofs concise: retain essential reasoning and caveats; remove repetition and filler. Report defects with exact item IDs and evidence. Completion records do not constitute independent approval.

## Proof example

```markdown
---
proof_strategy: direct
---

## Facts & Assumptions

**Given:** A nonempty open interval $I$, $f\in C^1(I,\mathbb R)$ and $f'=0$. Prove $f$ constant.

[F1] [[cor-mean-value-theorem]]: continuity on $[a,b]$ and differentiability on $(a,b)$ imply $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

## Proof

1.1 Choose arbitrary $a<b$ in $I$. The restriction satisfies [F1], so $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. [given, F1, choose]

1.2 Since $f'(c)=0$, $f(b)=f(a)$. Arbitrary endpoints give constancy on $I$. [given, step 1.1, algebra] ∎
```
