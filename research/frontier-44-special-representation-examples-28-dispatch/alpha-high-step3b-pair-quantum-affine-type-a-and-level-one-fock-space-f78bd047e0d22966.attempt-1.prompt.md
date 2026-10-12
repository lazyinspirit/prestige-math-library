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
label: step3b-pair-quantum-affine-type-a-and-level-one-fock-space-f78bd047e0d22966
covers: quantum-affine-type-a-and-level-one-fock-space
output: research/frontier-44-special-representation-examples-28-step3b-pair-quantum-affine-type-a-and-level-one-fock-space.md

# step3b: A/B pair quantum-affine-type-a-and-level-one-fock-space

- Run: frontier-44-special-representation-examples-28
- A page: quantum-affine-type-a-and-level-one-fock-space
- B page: quantum-affine-type-a-and-level-one-fock-space-examples
- Batches: 9
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–7.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): balanced-triples-and-global-crystal-bases, tensor-product-crystals-and-highest-weight-crystal-uniqueness.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-44-special-representation-examples-28-step3b-pair-quantum-affine-type-a-and-level-one-fock-space.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-cyclic-affine-type-a-cartan-datum (quantum-affine-type-a-and-level-one-fock-space)
  1. def-the-level-one-vector-representation-its-affinization-and-energy-function (quantum-affine-type-a-and-level-one-fock-space)
  2. def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation (quantum-affine-type-a-and-level-one-fock-space)
  2. lem-integrable-rank-one-actions-force-the-quantum-serre-relations (quantum-affine-type-a-and-level-one-fock-space)
  3. lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel (quantum-affine-type-a-and-level-one-fock-space)
  5. lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis (quantum-affine-type-a-and-level-one-fock-space)
  6. def-finite-q-wedge-space-and-normal-ordering-relations (quantum-affine-type-a-and-level-one-fock-space)
  7. lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel (quantum-affine-type-a-and-level-one-fock-space)
  8. thm-normally-ordered-q-wedges-form-a-basis (quantum-affine-type-a-and-level-one-fock-space)
  9. def-semi-infinite-q-wedge-fock-space-and-q-adic-topology (quantum-affine-type-a-and-level-one-fock-space)
  10. lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness (quantum-affine-type-a-and-level-one-fock-space)
  11. lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas (quantum-affine-type-a-and-level-one-fock-space)
  12. def-level-one-partition-fock-space-and-node-residues (quantum-affine-type-a-and-level-one-fock-space)
  13. lem-the-node-count-is-the-level-one-cartan-pairing (quantum-affine-type-a-and-level-one-fock-space)
  14. def-the-node-order-and-n-i-exponents-for-fock-space (quantum-affine-type-a-and-level-one-fock-space)
  15. lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices (quantum-affine-type-a-and-level-one-fock-space)
  16. def-good-and-cogood-nodes-by-residue-signature-reduction (quantum-affine-type-a-and-level-one-fock-space)
  16. thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations (quantum-affine-type-a-and-level-one-fock-space)
  17. prop-the-empty-partition-generates-an-integrable-highest-weight-submodule (quantum-affine-type-a-and-level-one-fock-space)
  17. thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph (quantum-affine-type-a-and-level-one-fock-space)
  17. thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable (quantum-affine-type-a-and-level-one-fock-space)
  17. ex-level-one-fock-node-actions-for-partitions-up-to-three (quantum-affine-type-a-and-level-one-fock-space-examples)
  18. thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero (quantum-affine-type-a-and-level-one-fock-space)
  18. ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions (quantum-affine-type-a-and-level-one-fock-space-examples)
  19. def-regular-partition-label-convention-and-mullineux-crystal-involution (quantum-affine-type-a-and-level-one-fock-space)
  19. ex-good-node-crystal-component-for-equals-three (quantum-affine-type-a-and-level-one-fock-space-examples)
  20. thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis (quantum-affine-type-a-and-level-one-fock-space)
  21. cex-the-whole-partition-fock-space-is-not-the-basic-representation (quantum-affine-type-a-and-level-one-fock-space-examples)
  21. ex-unitriangular-global-basis-elements-in-small-rank (quantum-affine-type-a-and-level-one-fock-space-examples)
- Write research/frontier-44-special-representation-examples-28-step3b-pair-quantum-affine-type-a-and-level-one-fock-space.md.


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
