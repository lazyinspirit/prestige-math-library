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
label: step3b-pair-cyclotomic-hecke-and-quiver-hecke-algebras-9ed34f1b010fa010
covers: cyclotomic-hecke-and-quiver-hecke-algebras
output: research/frontier-44-special-representation-examples-28-step3b-pair-cyclotomic-hecke-and-quiver-hecke-algebras.md

# step3b: A/B pair cyclotomic-hecke-and-quiver-hecke-algebras

- Run: frontier-44-special-representation-examples-28
- A page: cyclotomic-hecke-and-quiver-hecke-algebras
- B page: cyclotomic-hecke-and-quiver-hecke-algebras-examples
- Batches: 24
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–7.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): cores-quotients-and-blocks-of-symmetric-groups, cyclotomic-klr-algebras-and-highest-weight-categorification, klr-algebras-induction-and-quantum-serre-categorification, quantum-affine-type-a-and-level-one-fock-space, type-a-hecke-specht-modules-and-cellular-bases.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-44-special-representation-examples-28-step3b-pair-cyclotomic-hecke-and-quiver-hecke-algebras.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules (cyclotomic-hecke-and-quiver-hecke-algebras)
  0. lem-laurent-binomial-valuation-at-one-over-any-field (cyclotomic-hecke-and-quiver-hecke-algebras)
  0. lem-ultra-tight-multisets-admit-column-potentials (cyclotomic-hecke-and-quiver-hecke-algebras)
  1. def-type-a-affine-presentations-and-charged-cyclotomic-quotients (cyclotomic-hecke-and-quiver-hecke-algebras)
  1. lem-dvr-cellular-jantzen-filtration-and-gram-valuation (cyclotomic-hecke-and-quiver-hecke-algebras)
  1. lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis (cyclotomic-hecke-and-quiver-hecke-algebras)
  2. lem-cyclotomic-hecke-bounded-ordered-monomials-span (cyclotomic-hecke-and-quiver-hecke-algebras)
  2. lem-degenerate-affine-hecke-ordered-monomials-form-a-basis (cyclotomic-hecke-and-quiver-hecke-algebras)
  2. lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage (cyclotomic-hecke-and-quiver-hecke-algebras)
  2. lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes (cyclotomic-hecke-and-quiver-hecke-algebras)
  2. lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents (cyclotomic-hecke-and-quiver-hecke-algebras)
  3. lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors (cyclotomic-hecke-and-quiver-hecke-algebras)
  4. def-cyclotomic-hecke-central-content-sector-notation (cyclotomic-hecke-and-quiver-hecke-algebras)
  5. lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity (cyclotomic-hecke-and-quiver-hecke-algebras)
  10. lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension (cyclotomic-hecke-and-quiver-hecke-algebras)
  11. lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations (cyclotomic-hecke-and-quiver-hecke-algebras)
  11. prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras (cyclotomic-hecke-and-quiver-hecke-algebras)
  12. def-affine-and-cyclotomic-type-a-hecke-algebras (cyclotomic-hecke-and-quiver-hecke-algebras)
  13. def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras (cyclotomic-hecke-and-quiver-hecke-algebras)
  13. lem-cyclotomic-hecke-intertwiners-and-local-power-series (cyclotomic-hecke-and-quiver-hecke-algebras)
  14. lem-cyclotomic-klr-block-satisfies-the-hecke-relations (cyclotomic-hecke-and-quiver-hecke-algebras)
  14. lem-hecke-intertwiners-produce-local-klr-generators (cyclotomic-hecke-and-quiver-hecke-algebras)
  14. ex-homogeneous-degree-check-for-the-corrected-klr-braid-relation (cyclotomic-hecke-and-quiver-hecke-algebras-examples)
  15. thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras (cyclotomic-hecke-and-quiver-hecke-algebras)
  16. lem-cyclotomic-hecke-algebra-basis-and-dimension (cyclotomic-hecke-and-quiver-hecke-algebras)
  16. lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis (cyclotomic-hecke-and-quiver-hecke-algebras)
  17. lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image (cyclotomic-hecke-and-quiver-hecke-algebras)
  17. lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric (cyclotomic-hecke-and-quiver-hecke-algebras)
  17. thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular (cyclotomic-hecke-and-quiver-hecke-algebras)
  18. lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular (cyclotomic-hecke-and-quiver-hecke-algebras)
  19. lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases (cyclotomic-hecke-and-quiver-hecke-algebras)
  20. lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis (cyclotomic-hecke-and-quiver-hecke-algebras)
  21. thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage (cyclotomic-hecke-and-quiver-hecke-algebras)
  22. lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms (cyclotomic-hecke-and-quiver-hecke-algebras)
  23. lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms (cyclotomic-hecke-and-quiver-hecke-algebras)
  24. lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums (cyclotomic-hecke-and-quiver-hecke-algebras)
  25. thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations (cyclotomic-hecke-and-quiver-hecke-algebras)
  26. lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage (cyclotomic-hecke-and-quiver-hecke-algebras)
  27. lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected (cyclotomic-hecke-and-quiver-hecke-algebras)
  28. thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected (cyclotomic-hecke-and-quiver-hecke-algebras)
  29. thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks (cyclotomic-hecke-and-quiver-hecke-algebras)
  30. def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks (cyclotomic-hecke-and-quiver-hecke-algebras)
  31. thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism (cyclotomic-hecke-and-quiver-hecke-algebras)
  31. ex-degenerate-level-one-hecke-klr-map-for-s3 (cyclotomic-hecke-and-quiver-hecke-algebras-examples)
  31. ex-level-one-rank-two-cyclotomic-klr-algebra-at-e-three (cyclotomic-hecke-and-quiver-hecke-algebras-examples)
  32. cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading (cyclotomic-hecke-and-quiver-hecke-algebras)
  32. cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block (cyclotomic-hecke-and-quiver-hecke-algebras-examples)
- Write research/frontier-44-special-representation-examples-28-step3b-pair-cyclotomic-hecke-and-quiver-hecke-algebras.md.


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
