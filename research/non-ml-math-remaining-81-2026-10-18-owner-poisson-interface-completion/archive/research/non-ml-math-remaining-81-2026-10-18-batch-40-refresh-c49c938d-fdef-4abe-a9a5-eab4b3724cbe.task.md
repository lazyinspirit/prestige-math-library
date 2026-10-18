# Owner-requested Step-1 continuation: batch 40
Request: c49c938d-fdef-4abe-a9a5-eab4b3724cbe; requested at 2026-10-17T15:26:15.706Z.
Owner reason: Owner resolved historical prose-only scope conflict: complete the distinct comoment observable-action definition, Poisson-derivation representation proposition and quadratic sl2 verification under current owner directions. Preserve original successful evidence, existing canonical suppliers and all original pair claims.
Original native result: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/beta-batch-40.result.json; original session: 01a14a61-5863-7c51-99e1-2f88f59fea64.
Original result SHA-256: c2b9ad10ce33d1afc4c388616c46773b0a388ed480d6b764fa539f53f9b72ac7; original prompt SHA-256: 205b54cfbbcf22dca46f380f43f251f3fd3316a4650e6ef3af6b8d27098e1a43.
Continue the original assigned authoring against current sources. Preserve all completed sound work and original native evidence. This is the single operational continuation; report genuine mathematical blockers precisely to the owner. A successful process or hold report is not completed authoring. Complete actual item/page carriers, manifests, contracts and current readiness under the full original assignment.

# Full original assignment (historical input)
# Step 1 — mathematics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Edit only assigned draft items, A/B pages and batch evidence; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- **Cross-pair authoring is parallel.** Continue authoring when a prerequisite owned by another pair is absent or still being written. Use the controlling plan and declared interfaces to draft independent definitions, proof arguments and examples; record exact unresolved supplier IDs, required hypotheses and affected claims. Do not wait, poll, stop the batch at the first missing supplier, or edit another pair's files. Complete all work possible within your pair. Planned interfaces are drafting context: verify actual supplier bodies before claiming readiness, and never invent source excerpts, completed proofs or acceptance. If suppliers remain unavailable at handoff, record the precise unresolved checks honestly for reconciliation; do not omit the dependent claims.
- Read `research/non-ml-math-remaining-81-2026-10-18-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, hypotheses and conventions.
- Use TikZ to draw commutative diagrams, string diagrams, Young's tableaux, knots, braids, Temperley–Lieb algebra diagrams, quantum circuit diagrams, quantum logic gates, DFAs, NFAs, Turing machines, and other mathematical objects whenever and wherever appropriate. These diagrams must be fully and rigorously explained and justified. Keep their conventions compatible with the literature; rigorous proofs must not rely on diagrams.
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


---

# This dispatch

run: non-ml-math-remaining-81-2026-10-18
role: beta
label: batch-40
covers: 40
output: research/non-ml-math-remaining-81-2026-10-18-batch-40.pages.json

Batch 40: dependency_level 1; prerequisite batches: 32.
Current scheduling input: 7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903.
Determine item inventories, logical deps and item dependency_level labels in the scaffold manifest before writing carriers. Author suppliers before consumers in ascending item level.
Continue authoring this pair even if another pair has not supplied a prerequisite yet. Use the controlling plan and declared interfaces to draft independent definitions, arguments and examples; record exact unresolved supplier IDs and required hypotheses. Do not wait, poll or edit another pair. Verify actual supplier bodies before claiming readiness; never invent supplier excerpts or approval.

<!-- Source: research/non-ml-math-remaining-81-2026-10-18-beta-40.task.md -->
# Batch 40 of run `non-ml-math-remaining-81-2026-10-18` — Poisson Algebras, Symplectic Brackets, and Hamiltonian Actions

1 A/B pair in differential-geometry. Own only these pairs.

Read `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md` before constructing any item. It is binding and overrides stale task or design text.

## `poisson-algebras-and-hamiltonian-representations`

| | |
|---|---|
| A page | `poisson-algebras-and-hamiltonian-representations` · order **2894** · `differential-geometry` |
| B page | `poisson-algebras-and-hamiltonian-representations-examples` |
| title | Poisson Algebras, Symplectic Brackets, and Hamiltonian Actions |
| requires | `algebraic-representation-and-tensor-symmetry-map`, `moment-maps-and-symplectic-reduction` |
| design | `research/plan-physics-algebras-track.md` L28 (id mention, not a heading — locate the section yourself) |

- Read the complete design section; preserve its scope, conventions, warnings and proof route.

- Compare the design with `research/plan-spec.json`; record conflicts in batch notes.


<!-- Source: research/non-ml-math-remaining-81-2026-10-18-beta-batch.task.md -->
# Step 1 — batch `40`, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/beta-scaffold.md` and the generated batch assignment.


# Current owner directions (research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md)
# Owner directions: exact next 81 mathematics pairs

Build exactly the 81 A/B pairs in research/non-ml-math-next-frontier-81-2026-10-17.json (78 completely unbuilt and 3 partial). The controlling owner instruction is research/NEXT-FRONTIER-81-OWNER-INSTRUCTION-2026-10-17.md. Both numerical-analysis categories and ML are excluded; another session owns the numerical 71-pair run. Do not edit or control that run.

The preceding physics 80-pair frontier genuinely concluded and all 80 pairs and 712 items were separately published locally. This new run builds mathematics; newly authored content remains draft. The owner handles VPS deployment. Preserve rich sound claims and all established published work. Finish actual missing authoring; never substitute an empty summary or a plan change for a required proof.

For the three partial pairs: reuse Frattini/Burnside published items while completing its A/B page placement; finish the Sard/transversality unfinished false-statement/counterexample obligations with actual arguments; retain the monotone-functions pair in this exact scope while recognizing that ex-conway-base-13-function was a stale plan-only entry. Its removal is documented in this run's owner-plan-reconciliation.json; do not invent that example. Existing monotone page inventories and 43 published carriers remain the substantive work. Report any necessary published-carrier repair to the owner for focused handling under CLAUDE.md.

Follow native dependency-priority scheduling and continue independent authoring while in-run suppliers are being built. Planned interfaces are drafting context, never proof or acceptance. Record exact missing supplier checks honestly, and do not omit rich claims merely because suppliers are pending.

Read the owner construction directions in research/plan-physics-algebras-track.md and every linked construction.md for each affected pair, before scaffolding or authoring. They authorize local helper placement for all thirteen original prerequisite blockers and preserve the full rich claims and both companion duties. Their explicit source gaps are mandatory local proof work, not permission to omit a result. Historical placement holds in the original research are retained as history; actual source eligibility still requires accepted proofs and authenticated published-repair receipts.

Owner construction reconciliation: all seven representation gateways are governed by the Native construction section of research/plan-physics-algebras-track.md and research/non-ml-math-remaining-81-2026-10-18-owner-reuse-scope/construction.md. These directions explicitly replace the historical no-new-items splice limitation for distinct interfaces within the original claims. Batch40 must complete the specified two A and one B carriers through genuine native continuation; preserve existing sound work. Do not duplicate existing canonical suppliers, leave empty inventories as accepted work, add pairs or broaden mathematical claims.


Re-read the current owner direction file before acting. Current explicit owner releases supersede historical operational holds only; all mathematical, source, authored-carrier and readiness obligations remain mandatory.