# Step 3b — scaffold auditor and item author

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Ownership and inputs:** Own only the assigned A/B pairs; audit their scaffolds for authoring readiness, repair local gaps, and author every assigned item and page. Read CLAUDE.md, SCHEMA.md, designs, current manifests and coverage, Step 3a observations and decisions, named repair reports, relevant suppliers, and any owner authoring direction. Recheck applicable pre-splice findings against current inputs. Read sibling work when needed and preserve it in shared files. Thorough independent auditing follows in Steps 5–8.

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

- **Checks and acceptance:** Run explicit-path precheck and rendering, content policy, strict proof contracts, dependency-level checks, and `validate-plan` against `research/plan-spec.json` for each containing batch. Report pre-splice plan mismatches for Step 4 without hiding unresolved dependencies. Reconcile flagged suppliers and actual proof uses, and clear required Step 3 dependency, source, content, and contract gates before Step 4. Use `tools/step3-decisions.mjs record-item` with `accept` or `repaired` only after complete authoring and checks, confidence 1, examined dependency IDs, and concrete evidence; otherwise record `escalate`. Only the owner resolves escalations. Never use `--owner` or add judge/audit stamps.

- **Additions and handoff:** Fully authored new IDs absent from both the immutable pre-author scaffold inventory and its existing-item-file list receive their scope and item certifications from the engine after successful dispatch; do not put these additions through a self-review or review-repair-author loop. Register them normally in manifests, coverage, contracts, and pages; all content, dependency, source, rendering, and contract gates still apply. Original scaffold IDs require ordinary current item decisions even when their files are newly written. At handoff report completed IDs, checks actually run, added suppliers, published concerns, and open obligations; missing items, pages, contracts, or report mean failed handoff. After compaction reread the checkpoint, current item, relevant dependencies, and source passages; summaries are navigation aids, not mathematical evidence.


---

# This dispatch

run: frontier-41-ha-dt-29
role: alpha-high
label: step3b-pair-reeb-stability-and-global-foliation-constructions-bfcc42e757dd4432
covers: reeb-stability-and-global-foliation-constructions
output: research/frontier-41-ha-dt-29-step3b-pair-reeb-stability-and-global-foliation-constructions.md

# step3b: A/B pair reeb-stability-and-global-foliation-constructions

- Run: frontier-41-ha-dt-29
- A page: reeb-stability-and-global-foliation-constructions
- B page: reeb-stability-and-global-foliation-constructions-examples
- Batches: 22
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): foliation-holonomy-and-the-holonomy-groupoid.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-41-ha-dt-29-step3b-pair-reeb-stability-and-global-foliation-constructions.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-c1-germ-of-a-local-diffeomorphism-at-a-point (reeb-stability-and-global-foliation-constructions)
  0. def-c1-regular-codimension-one-foliation-and-transverse-orientation (reeb-stability-and-global-foliation-constructions)
  0. def-countable-choice-principle-for-foliation-pair (reeb-stability-and-global-foliation-constructions)
  0. def-saturated-neighbourhood-of-a-leaf (reeb-stability-and-global-foliation-constructions)
  0. lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite (reeb-stability-and-global-foliation-constructions)
  1. def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary (reeb-stability-and-global-foliation-constructions)
  1. def-stable-leaf-of-a-foliation (reeb-stability-and-global-foliation-constructions)
  1. def-transversely-oriented-codimension-one-foliation (reeb-stability-and-global-foliation-constructions)
  1. lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle (reeb-stability-and-global-foliation-constructions)
  1. lem-axiom-of-choice-implies-countable-choice (reeb-stability-and-global-foliation-constructions)
  1. lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation (reeb-stability-and-global-foliation-constructions)
  1. lem-c1-germs-of-local-diffeomorphisms-form-a-group (reeb-stability-and-global-foliation-constructions)
  1. lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface (reeb-stability-and-global-foliation-constructions)
  1. lem-countable-choice-sequence-and-product-formulations-are-equivalent (reeb-stability-and-global-foliation-constructions)
  1. lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism (reeb-stability-and-global-foliation-constructions)
  2. lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex (reeb-stability-and-global-foliation-constructions)
  2. lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal (reeb-stability-and-global-foliation-constructions)
  2. lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs (reeb-stability-and-global-foliation-constructions)
  2. lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free (reeb-stability-and-global-foliation-constructions)
  2. lem-oriented-intersection-detects-nonvanishing-rational-homology (reeb-stability-and-global-foliation-constructions)
  2. prop-mapping-torus-foliations-realize-global-reeb-stable-examples (reeb-stability-and-global-foliation-constructions)
  2. prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf (reeb-stability-and-global-foliation-constructions)
  2. rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form (reeb-stability-and-global-foliation-constructions)
  2. thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable (reeb-stability-and-global-foliation-constructions)
  3. lem-compact-c1-leaf-has-finitely-generated-fundamental-group (reeb-stability-and-global-foliation-constructions)
  3. lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional (reeb-stability-and-global-foliation-constructions)
  3. lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood (reeb-stability-and-global-foliation-constructions)
  3. prop-gluing-two-reeb-components-gives-a-foliation-of-s-three (reeb-stability-and-global-foliation-constructions)
  3. ex-a-fibration-over-the-circle-as-a-global-stable-foliation (reeb-stability-and-global-foliation-constructions-examples)
  4. thm-reeb-thurston-stability-for-codimension-one-leaves (reeb-stability-and-global-foliation-constructions)
  5. lem-finite-holonomy-acts-on-a-small-transverse-disk (reeb-stability-and-global-foliation-constructions)
  7. lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group (reeb-stability-and-global-foliation-constructions)
  8. def-finite-holonomy-normal-model (reeb-stability-and-global-foliation-constructions)
  8. lem-transverse-holonomy-transport-is-well-defined-and-equivariant (reeb-stability-and-global-foliation-constructions)
  9. lem-the-normal-model-map-is-a-foliated-local-diffeomorphism (reeb-stability-and-global-foliation-constructions)
  9. ex-finite-holonomy-mobius-normal-model (reeb-stability-and-global-foliation-constructions-examples)
  10. lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood (reeb-stability-and-global-foliation-constructions)
  11. thm-local-reeb-stability (reeb-stability-and-global-foliation-constructions)
  12. cor-trivial-holonomy-gives-a-product-foliated-neighbourhood (reeb-stability-and-global-foliation-constructions)
  12. cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour (reeb-stability-and-global-foliation-constructions-examples)
  13. cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis (reeb-stability-and-global-foliation-constructions)
  13. lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented (reeb-stability-and-global-foliation-constructions)
  13. ex-product-foliation-near-a-compact-trivial-holonomy-leaf (reeb-stability-and-global-foliation-constructions-examples)
  14. lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space (reeb-stability-and-global-foliation-constructions)
  14. lem-compact-stable-leaves-form-an-open-saturated-set (reeb-stability-and-global-foliation-constructions)
  14. rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group (reeb-stability-and-global-foliation-constructions)
  14. cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy (reeb-stability-and-global-foliation-constructions-examples)
  15. lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness (reeb-stability-and-global-foliation-constructions)
  16. thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations (reeb-stability-and-global-foliation-constructions)
- Write research/frontier-41-ha-dt-29-step3b-pair-reeb-stability-and-global-foliation-constructions.md.


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
