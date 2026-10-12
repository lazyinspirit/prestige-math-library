# Step 3b — scaffold auditor and item author

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/ITEM_ID.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Ownership and inputs:** Own only the assigned A/B pairs; audit their scaffolds for authoring readiness, repair local gaps, and author every assigned item and page. Read CLAUDE.md, SCHEMA.md, designs, current manifests and coverage, Step 3a observations and decisions, named repair reports, relevant suppliers, and any owner authoring direction. Recheck applicable pre-splice findings against current inputs. Read sibling work when needed and preserve it in shared files. Thorough independent auditing follows in Steps 5–7.

- **Dependency order and checkpoints:** Create the assigned report at entry with owned IDs and open obligations. Audit, author, check, and checkpoint one item at a time in ascending `dependency_level`, breaking ties by page order and item ID as listed in the dispatch task. Read the first item's exact suppliers and write it before surveying later items or tool implementations. Recompute labels and order after dependency changes; never justify an earlier item with a later one.

- **New-item dependency levels:** Give every newly created item the correct `dependency_level` computed from its actual dependencies, and record that level consistently in its item metadata and manifest entry. Verify the level with the repository's dependency-level checks before handoff.

- **Mathematical soundness and proof quality:** Mathematical soundness is non-negotiable; never pretend to understand something you do not. Proofs must be complete; make them concise wherever possible. Stress important caveats, but do not repeat the same argument twice. Do not use fillers or unnecessary padding.

- **Complete mathematics and source verification:** Logical validity is ground truth; authoritative sources can also contain mistakes. Provide complete calculations and counterexample witnesses with their failed conclusions. Check each inference, hypothesis, quantifier, well-definedness condition, and supplier use independently rather than accepting citations as proof. Cite facts where used; consult complete authoritative arguments when uncertain and record exact locators and unresolved qualifications. Record provenance accurately; scripts may format completed mathematics, not generate generic proofs from scaffold strategies.

- **Track Choice precisely:** State AC and its exact use, declare its dependency, and propagate it. Preserve choice-free arguments and incompatible-axiom branches.

- **Prerequisites:** Identify prerequisites missing from both the published library and current scaffold, be extra vigilant about silently assumed facts that require proper justification. Create and fully author the necessary prerequisite items on assigned existing A pages, register them in manifests, coverage, and contracts, and place them before their consumers. Before accepting a consumer, verify that its prerequisites are proved earlier or supplied locally. When a sibling supplier is unfinished, inspect it provisionally, flag the exact supplier ID, consumer ID, and consuming proof step, and author the consumer with its open obligation stated plainly. Keep that decision escalated until the completed supplier and its actual use are verified; continue other assigned work. Escalate prerequisites that cannot be supplied within the authorized scope.

- **Escalate genuine blockers:** Report substantial prerequisite gaps, irrecoverable source uncertainty, and required cross-group changes with exact IDs and remedies. Never mark unresolved work complete or override owner-held decisions.

- **Scope and published-content boundaries:** Preserve every original item/page ID and promised claim. Do not add pairs, consume Recorded results, edit sibling or published content, or invent owner decisions. Replace load-bearing examples-page dependencies with exact A-page suppliers or complete local arguments.

- **Report published concerns:** Give exact IDs, evidence, confidence, required suppliers, and repair strategy; distinguish suspicion from confirmed defects. Leave shared-ledger updates to the serial reconciler. Unrelated published debt does not block sound new work.

- **Proof contracts and registration:** Derive item-specific contracts from completed arguments: each numbered step's actual claim and inputs, exact cited excerpts and uses, and evidence for empty, zero, one, degenerate, endpoint, Choice, and both iff cases. Explain inapplicable cases specifically. Maintain manifests and coverage, preserving sibling rows. Keep generated statements within permitted leaf examples/corollaries.

- **Maintain records:** Update cross-batch dependency inputs without disturbing siblings. Report shared plan/prose amendments for Step 4. Refresh scope and item decisions when actual changes invalidate them; do not re-author unchanged completed items. Follow `briefs/tasks/frontier-dependency-ledger.md`. Refresh sufficient scope decisions after local repairs and additions; unresolved or owner-held scope still requires the owner. Preserve independent review records.

- **Checks and acceptance:** Run explicit-path precheck and rendering, content policy, strict proof contracts, dependency-level checks, and `validate-plan` against `research/plan-spec.json` for each containing batch. Report pre-splice plan mismatches for Step 4 without hiding unresolved dependencies. Reconcile flagged suppliers and actual proof uses, and clear required Step 3 dependency, source, content, and contract gates before Step 4.

- **Item bookkeeping:** Use `tools/step3-decisions.mjs record-item` with `accept`, `repaired` or `escalate` after authoring and checks. Supply only defect types (`--defects '[]'` for unchanged acceptance, or `--defects '["dependency"]'` for a repair) and one repair or gap sentence via `--reason` (at most 400 characters, no newlines or abbreviations with sentence-ending punctuation). The tool records identity, decision, owner authority, current input hash and time. Omit confidence, examined dependency lists and detailed review narratives. Only the owner resolves escalations; never use `--owner` or add judge/audit stamps.

- **Additions and handoff:** Fully authored new IDs absent from both the immutable pre-author scaffold inventory and its existing-item-file list receive their scope and item certifications from the engine after successful dispatch; do not put these additions through a self-review or review-repair-author loop. Register them normally in manifests, coverage, contracts, and pages; all content, dependency, source, rendering, and contract gates still apply. Original scaffold IDs require ordinary current item decisions even when their files are newly written. At handoff report completed IDs, checks actually run, added suppliers, published concerns, and open obligations; missing items, pages, contracts, or report mean failed handoff. After compaction reread the checkpoint, current item, relevant dependencies, and source passages; summaries are navigation aids, not mathematical evidence.


---

# This dispatch

run: frontier-44-special-representation-examples-28
role: alpha-high
label: step3b-pair-type-a-hecke-specht-modules-and-cellular-bases-208a7a4d099f43c0
covers: type-a-hecke-specht-modules-and-cellular-bases
output: research/frontier-44-special-representation-examples-28-step3b-pair-type-a-hecke-specht-modules-and-cellular-bases.md

# step3b: A/B pair type-a-hecke-specht-modules-and-cellular-bases

- Run: frontier-44-special-representation-examples-28
- A page: type-a-hecke-specht-modules-and-cellular-bases
- B page: type-a-hecke-specht-modules-and-cellular-bases-examples
- Batches: 20
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–7.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison, rim-hooks-and-the-murnaghan-nakayama-rule.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-44-special-representation-examples-28-step3b-pair-type-a-hecke-specht-modules-and-cellular-bases.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-cellular-algebra-basis-and-cell-module (type-a-hecke-specht-modules-and-cellular-bases)
  0. def-e-regular-and-e-restricted-partitions (type-a-hecke-specht-modules-and-cellular-bases)
  0. def-quantum-characteristic-of-an-invertible-hecke-parameter (type-a-hecke-specht-modules-and-cellular-bases)
  0. lem-central-idempotent-decompositions-of-one-are-unique (type-a-hecke-specht-modules-and-cellular-bases)
  0. lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents (type-a-hecke-specht-modules-and-cellular-bases)
  0. lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra (type-a-hecke-specht-modules-and-cellular-bases)
  1. def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents (type-a-hecke-specht-modules-and-cellular-bases)
  1. def-hecke-jucys-murphy-elements-and-q-contents (type-a-hecke-specht-modules-and-cellular-bases)
  1. def-murphy-elements-and-murphy-tableau-elements (type-a-hecke-specht-modules-and-cellular-bases)
  1. lem-cell-form-is-associative-and-its-radical-is-a-submodule (type-a-hecke-specht-modules-and-cellular-bases)
  2. def-type-a-q-schur-algebra-and-weyl-modules (type-a-hecke-specht-modules-and-cellular-bases)
  2. thm-murphy-tableau-elements-form-a-cellular-basis (type-a-hecke-specht-modules-and-cellular-bases)
  2. thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra (type-a-hecke-specht-modules-and-cellular-bases)
  3. cor-cellular-decomposition-matrices-are-dominance-unitriangular (type-a-hecke-specht-modules-and-cellular-bases)
  3. def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras (type-a-hecke-specht-modules-and-cellular-bases)
  3. lem-semistandard-weight-dimensions-detect-virtual-weyl-classes (type-a-hecke-specht-modules-and-cellular-bases)
  9. def-type-a-hecke-specht-module-and-cell-form (type-a-hecke-specht-modules-and-cellular-bases)
  10. def-alternating-weyl-and-specht-symbols-from-beta-sequences (type-a-hecke-specht-modules-and-cellular-bases)
  10. def-jantzen-filtration-of-a-lifted-cell-module (type-a-hecke-specht-modules-and-cellular-bases)
  10. thm-hecke-jucys-murphy-action-is-dominance-triangular (type-a-hecke-specht-modules-and-cellular-bases)
  10. thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions (type-a-hecke-specht-modules-and-cellular-bases)
  11. cor-type-a-hecke-decomposition-matrix-is-dominance-unitriangular (type-a-hecke-specht-modules-and-cellular-bases)
  11. lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation (type-a-hecke-specht-modules-and-cellular-bases)
  11. prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one (type-a-hecke-specht-modules-and-cellular-bases)
  11. thm-q-schur-weyl-weight-space-gram-determinant-hook-product (type-a-hecke-specht-modules-and-cellular-bases)
  11. thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules (type-a-hecke-specht-modules-and-cellular-bases)
  11. thm-separated-hecke-residues-give-seminormal-idempotents-and-bases (type-a-hecke-specht-modules-and-cellular-bases)
  11. ex-hecke-jucys-murphy-elements-through-rank-four (type-a-hecke-specht-modules-and-cellular-bases-examples)
  12. thm-q-schaper-virtual-radical-layer-formula (type-a-hecke-specht-modules-and-cellular-bases)
  12. cex-residue-sequences-need-not-separate-when-e-is-at-most-n (type-a-hecke-specht-modules-and-cellular-bases-examples)
  12. ex-murphy-cellular-basis-for-h3 (type-a-hecke-specht-modules-and-cellular-bases-examples)
  13. rem-general-type-a-decomposition-numbers-remain-unsolved (type-a-hecke-specht-modules-and-cellular-bases)
  13. ex-q-schaper-for-shape-three-two-at-e-two (type-a-hecke-specht-modules-and-cellular-bases-examples)
  14. cex-cellularity-does-not-make-every-cell-module-simple (type-a-hecke-specht-modules-and-cellular-bases-examples)
- Write research/frontier-44-special-representation-examples-28-step3b-pair-type-a-hecke-specht-modules-and-cellular-bases.md.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Context continuity

Read complete relevant source passages in bounded chunks; truncated output is incomplete
evidence. Read current owned files and relevant sibling pair or library files;
avoid historical runs and dispatch logs.
After each item, checkpoint in the assigned notes: IDs, exact claim/conventions,
source locators, dependencies, decisions, checks, open gaps, and next action.
Context may compact mid-proof. Resume by rereading those notes, the current item,
dependency statements, and source passages. Never infer a missing hypothesis from
a summary. Preserve independent reviews; report unrecoverable evidence as a blocker.
Use only task-authorized notes; do not create transcripts.
