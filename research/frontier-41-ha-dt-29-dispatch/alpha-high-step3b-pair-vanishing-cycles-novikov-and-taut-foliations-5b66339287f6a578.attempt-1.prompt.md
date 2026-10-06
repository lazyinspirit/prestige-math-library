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
label: step3b-pair-vanishing-cycles-novikov-and-taut-foliations-5b66339287f6a578
covers: vanishing-cycles-novikov-and-taut-foliations
output: research/frontier-41-ha-dt-29-step3b-pair-vanishing-cycles-novikov-and-taut-foliations.md

# step3b: A/B pair vanishing-cycles-novikov-and-taut-foliations

- Run: frontier-41-ha-dt-29
- A page: vanishing-cycles-novikov-and-taut-foliations
- B page: vanishing-cycles-novikov-and-taut-foliations-examples
- Batches: 31
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): codimension-one-foliations-and-secondary-classes, foliation-holonomy-and-the-holonomy-groupoid, reeb-stability-and-global-foliation-constructions.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-41-ha-dt-29-step3b-pair-vanishing-cycles-novikov-and-taut-foliations.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  1. def-accessible-manifold-of-a-leaf (vanishing-cycles-novikov-and-taut-foliations)
  1. def-dead-end-component (vanishing-cycles-novikov-and-taut-foliations)
  1. def-positive-transverse-accessibility-between-leaves (vanishing-cycles-novikov-and-taut-foliations)
  1. def-taut-codimension-one-foliation (vanishing-cycles-novikov-and-taut-foliations)
  2. lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal (vanishing-cycles-novikov-and-taut-foliations)
  2. lem-finite-tangent-zero-count-and-inward-boundary-sum-without-general-thom-existence (vanishing-cycles-novikov-and-taut-foliations)
  3. def-reeb-component-in-a-cooriented-three-manifold-foliation (vanishing-cycles-novikov-and-taut-foliations)
  4. lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal (vanishing-cycles-novikov-and-taut-foliations)
  4. lem-positive-transverse-accessibility-is-a-preorder (vanishing-cycles-novikov-and-taut-foliations)
  5. def-foliation-component-by-mutual-positive-transverse-accessibility (vanishing-cycles-novikov-and-taut-foliations)
  5. lem-nested-pinched-center-frontier-has-a-strict-inner-disk-search (vanishing-cycles-novikov-and-taut-foliations)
  5. lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar (vanishing-cycles-novikov-and-taut-foliations)
  6. lem-area-minimal-three-sector-homoclinic-cycle-has-identity-inward-holonomy (vanishing-cycles-novikov-and-taut-foliations)
  6. lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation (vanishing-cycles-novikov-and-taut-foliations)
  6. lem-null-characteristic-frontier-cap-transports-nullity-to-adjacent-annulus (vanishing-cycles-novikov-and-taut-foliations)
  9. lem-haefliger-nulltransversal-disk-has-a-minimal-one-sided-cycle (vanishing-cycles-novikov-and-taut-foliations)
  10. def-vanishing-cycle-of-a-codimension-one-foliation (vanishing-cycles-novikov-and-taut-foliations)
  10. lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph (vanishing-cycles-novikov-and-taut-foliations)
  10. lem-closed-null-fence-word-has-an-essential-lower-endpoint (vanishing-cycles-novikov-and-taut-foliations)
  11. lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class (vanishing-cycles-novikov-and-taut-foliations)
  11. lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice (vanishing-cycles-novikov-and-taut-foliations)
  11. lem-compatible-arbitrary-pi-fence-reduction (vanishing-cycles-novikov-and-taut-foliations)
  11. lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary (vanishing-cycles-novikov-and-taut-foliations)
  12. lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum (vanishing-cycles-novikov-and-taut-foliations)
  12. lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band (vanishing-cycles-novikov-and-taut-foliations)
  12. lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle (vanishing-cycles-novikov-and-taut-foliations)
  13. lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component (vanishing-cycles-novikov-and-taut-foliations)
  13. lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root (vanishing-cycles-novikov-and-taut-foliations)
  13. lem-center-frontier-selection-and-cancellation-search-has-a-finite-rank (vanishing-cycles-novikov-and-taut-foliations)
  13. lem-paired-regular-disk-sweep-is-open-across-its-base-gluing (vanishing-cycles-novikov-and-taut-foliations)
  13. lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood (vanishing-cycles-novikov-and-taut-foliations)
  14. lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps (vanishing-cycles-novikov-and-taut-foliations)
  14. lem-a-reeb-component-obstructs-tautness (vanishing-cycles-novikov-and-taut-foliations)
  14. lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches (vanishing-cycles-novikov-and-taut-foliations)
  14. lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle (vanishing-cycles-novikov-and-taut-foliations)
  14. prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation (vanishing-cycles-novikov-and-taut-foliations)
  14. prop-transverse-volume-preserving-flow-implies-tautness-in-the-compact-cooriented-three-dimensional-setting (vanishing-cycles-novikov-and-taut-foliations)
  15. lem-a-compressible-leaf-yields-a-vanishing-cycle (vanishing-cycles-novikov-and-taut-foliations)
  15. lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle (vanishing-cycles-novikov-and-taut-foliations)
  15. lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions (vanishing-cycles-novikov-and-taut-foliations)
  15. lem-the-primitive-pi-cap-block-embeds-and-gives-the-global-reeb-model (vanishing-cycles-novikov-and-taut-foliations)
  15. rem-reebless-and-taut-are-not-equivalent-without-extra-hypotheses (vanishing-cycles-novikov-and-taut-foliations)
  15. ex-reeb-foliation-of-s-three-is-not-taut (vanishing-cycles-novikov-and-taut-foliations-examples)
  16. lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal (vanishing-cycles-novikov-and-taut-foliations)
  16. ex-fibre-foliation-of-a-mapping-torus-is-taut (vanishing-cycles-novikov-and-taut-foliations-examples)
  17. lem-recurrent-pi-side-leaf-identifies-a-distinct-accessibility-boundary-class (vanishing-cycles-novikov-and-taut-foliations)
  18. lem-nontrivial-limitwise-nullhomotopy-class-forces-compact-boundary-leaf (vanishing-cycles-novikov-and-taut-foliations)
  19. lem-a-simple-vanishing-cycle-produces-a-compact-leaf (vanishing-cycles-novikov-and-taut-foliations)
  20. lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component (vanishing-cycles-novikov-and-taut-foliations)
  21. thm-novikov-reeb-component-theorem (vanishing-cycles-novikov-and-taut-foliations)
  22. cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses (vanishing-cycles-novikov-and-taut-foliations)
  23. rem-novikov-conclusions-do-not-extend-to-arbitrary-codimension-or-noncompact-manifolds (vanishing-cycles-novikov-and-taut-foliations)
  23. cex-a-noncompact-codimension-one-foliation-need-not-satisfy-novikov-compactness-conclusions (vanishing-cycles-novikov-and-taut-foliations-examples)
- Write research/frontier-41-ha-dt-29-step3b-pair-vanishing-cycles-novikov-and-taut-foliations.md.


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
