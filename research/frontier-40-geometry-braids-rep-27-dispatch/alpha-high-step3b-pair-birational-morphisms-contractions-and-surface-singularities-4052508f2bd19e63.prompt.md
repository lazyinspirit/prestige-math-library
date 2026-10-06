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

run: frontier-40-geometry-braids-rep-27
role: alpha-high
label: step3b-pair-birational-morphisms-contractions-and-surface-singularities-4052508f2bd19e63
covers: birational-morphisms-contractions-and-surface-singularities
output: research/frontier-40-geometry-braids-rep-27-step3b-pair-birational-morphisms-contractions-and-surface-singularities.md

# step3b: A/B pair birational-morphisms-contractions-and-surface-singularities

- Run: frontier-40-geometry-braids-rep-27
- A page: birational-morphisms-contractions-and-surface-singularities
- B page: birational-morphisms-contractions-and-surface-singularities-examples
- Batches: 25
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): none.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-40-geometry-braids-rep-27-step3b-pair-birational-morphisms-contractions-and-surface-singularities.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-exceptional-curve-and-contraction (birational-morphisms-contractions-and-surface-singularities)
  0. def-normal-surface-modification-and-normalized-point-blowup (birational-morphisms-contractions-and-surface-singularities)
  0. lem-cm-local-codimension-and-regular-quotient-ext-concentration (birational-morphisms-contractions-and-surface-singularities)
  0. lem-effective-cartier-divisor-has-no-embedded-associated-primes (birational-morphisms-contractions-and-surface-singularities)
  0. lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc (birational-morphisms-contractions-and-surface-singularities)
  0. lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces (birational-morphisms-contractions-and-surface-singularities)
  0. lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood (birational-morphisms-contractions-and-surface-singularities)
  0. lem-finite-over-projective-noetherian-affine-base-is-projective (birational-morphisms-contractions-and-surface-singularities)
  0. lem-finite-regular-base-algebra-dualizing-biduality (birational-morphisms-contractions-and-surface-singularities)
  0. lem-nonzero-section-vanishing-at-a-point-has-positive-degree (birational-morphisms-contractions-and-surface-singularities)
  0. lem-normal-local-surface-radical-multiple-of-a-principal-divisor (birational-morphisms-contractions-and-surface-singularities)
  0. lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup (birational-morphisms-contractions-and-surface-singularities)
  0. lem-regular-surface-reflexive-modules-and-codimension-one-lattices (birational-morphisms-contractions-and-surface-singularities)
  0. lem-relative-projective-space-regular-local-base-twisted-resolution (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-completion-base-change-preserves-closed-fibre-local-completions (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-derivations-and-regular-hypersurfaces (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-finite-completion-factors (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-flat-base-change-coherent-cohomology-by-cech (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-geometric-regularity-field-test-and-generic-spread (birational-morphisms-contractions-and-surface-singularities)
  0. lem-surface-p-basis-subfield-separation (birational-morphisms-contractions-and-surface-singularities)
  1. lem-blowing-up-a-regular-point-is-a-contraction (birational-morphisms-contractions-and-surface-singularities)
  1. lem-cm-projective-curve-canonical-positive-twist-vanishing-generation (birational-morphisms-contractions-and-surface-singularities)
  1. lem-existence-of-a-fibre-cutter (birational-morphisms-contractions-and-surface-singularities)
  1. lem-finite-length-duality-over-a-regular-local-base (birational-morphisms-contractions-and-surface-singularities)
  1. lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point (birational-morphisms-contractions-and-surface-singularities)
  1. lem-proper-surface-regularity-transfers-to-and-from-completion (birational-morphisms-contractions-and-surface-singularities)
  1. lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square (birational-morphisms-contractions-and-surface-singularities)
  1. lem-relative-projective-space-derived-duality-regular-local-base (birational-morphisms-contractions-and-surface-singularities)
  1. lem-surface-modification-isomorphism-in-codimension-one (birational-morphisms-contractions-and-surface-singularities)
  1. lem-surface-non-pth-power-detected-by-derivation (birational-morphisms-contractions-and-surface-singularities)
  1. lem-universal-property-of-a-contraction (birational-morphisms-contractions-and-surface-singularities)
  1. cex-normalization-is-not-a-blowup (birational-morphisms-contractions-and-surface-singularities-examples)
  2. lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces (birational-morphisms-contractions-and-surface-singularities)
  2. lem-local-normal-surface-modification-dimension-and-projective-cohomology (birational-morphisms-contractions-and-surface-singularities)
  2. lem-positive-conormal-degree-of-a-fibre-divisor (birational-morphisms-contractions-and-surface-singularities)
  2. lem-projective-regular-local-base-coherent-duality-by-embedding (birational-morphisms-contractions-and-surface-singularities)
  2. lem-surface-complete-equicharacteristic-finite-integral-closure (birational-morphisms-contractions-and-surface-singularities)
  2. lem-surface-generic-power-series-formal-fibres (birational-morphisms-contractions-and-surface-singularities)
  2. lem-surface-open-regular-locus (birational-morphisms-contractions-and-surface-singularities)
  2. ex-blowup-of-a-smooth-point (birational-morphisms-contractions-and-surface-singularities-examples)
  3. lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate (birational-morphisms-contractions-and-surface-singularities)
  3. lem-normal-projective-surface-dualizing-module-over-regular-local-base (birational-morphisms-contractions-and-surface-singularities)
  3. lem-normal-surface-fibre-divisor-conormal-degree-positive (birational-morphisms-contractions-and-surface-singularities)
  3. lem-normal-surface-modification-leray-short-exact-sequence (birational-morphisms-contractions-and-surface-singularities)
  3. lem-surface-complete-equicharacteristic-formal-fibres (birational-morphisms-contractions-and-surface-singularities)
  3. thm-negativity-for-exceptional-curves-on-smooth-surfaces (birational-morphisms-contractions-and-surface-singularities)
  4. lem-surface-completed-polynomial-generic-fibre (birational-morphisms-contractions-and-surface-singularities)
  5. lem-surface-finite-type-formal-fibres (birational-morphisms-contractions-and-surface-singularities)
  6. lem-surface-finite-type-normalization-finite (birational-morphisms-contractions-and-surface-singularities)
  6. lem-surface-regular-fibres-preserve-normality (birational-morphisms-contractions-and-surface-singularities)
  7. lem-finite-normal-surface-cover-completed-local-degree-bound (birational-morphisms-contractions-and-surface-singularities)
  7. lem-local-normalized-point-blowup-sequences-spread-at-closed-points (birational-morphisms-contractions-and-surface-singularities)
  7. lem-normal-surface-normalization-commutes-with-base-completion (birational-morphisms-contractions-and-surface-singularities)
  7. lem-normalized-point-blowups-dominate-local-normal-surface-modifications (birational-morphisms-contractions-and-surface-singularities)
  7. lem-projective-normal-surface-modification-h1-injects-off-special-fibre (birational-morphisms-contractions-and-surface-singularities)
  8. def-rational-normal-surface-singularity-and-bounded-modification-h1 (birational-morphisms-contractions-and-surface-singularities)
  8. lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point (birational-morphisms-contractions-and-surface-singularities)
  8. lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme (birational-morphisms-contractions-and-surface-singularities)
  8. lem-normal-surface-modification-no-derived-residue-map (birational-morphisms-contractions-and-surface-singularities)
  8. lem-normal-surface-modification-uniform-principal-torsion-bound (birational-morphisms-contractions-and-surface-singularities)
  8. lem-normalized-surface-point-blowup-resolution-descends-from-completion (birational-morphisms-contractions-and-surface-singularities)
  9. lem-contracted-curve-count-decreases-under-a-point-blowup-factorization (birational-morphisms-contractions-and-surface-singularities)
  9. lem-finite-separable-normal-surface-extension-preserves-bounded-h1 (birational-morphisms-contractions-and-surface-singularities)
  9. lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points (birational-morphisms-contractions-and-surface-singularities)
  9. lem-projective-normal-surface-grauert-riemenschneider-vanishing (birational-morphisms-contractions-and-surface-singularities)
  9. lem-rational-surface-exceptional-ideal-powers-and-sections (birational-morphisms-contractions-and-surface-singularities)
  9. lem-rational-surface-local-rings-propagate-by-point-sequence-spreading (birational-morphisms-contractions-and-surface-singularities)
  9. lem-regular-local-surface-is-rational-by-point-blowup-domination (birational-morphisms-contractions-and-surface-singularities)
  10. lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it (birational-morphisms-contractions-and-surface-singularities)
  10. lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology (birational-morphisms-contractions-and-surface-singularities)
  10. lem-regular-base-dualizing-traces-compose-on-rational-modifications (birational-morphisms-contractions-and-surface-singularities)
  10. thm-factorization-of-birational-morphisms-of-smooth-surfaces (birational-morphisms-contractions-and-surface-singularities)
  11. lem-regular-base-surface-cartier-curve-canonical-adjunction (birational-morphisms-contractions-and-surface-singularities)
  11. lem-regular-surface-point-blowup-canonical-transform (birational-morphisms-contractions-and-surface-singularities)
  12. lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module (birational-morphisms-contractions-and-surface-singularities)
  12. lem-rational-singular-point-blowup-canonical-pullback-surjective (birational-morphisms-contractions-and-surface-singularities)
  13. lem-complete-regular-surface-degree-p-extension-has-bounded-h1 (birational-morphisms-contractions-and-surface-singularities)
  13. lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function (birational-morphisms-contractions-and-surface-singularities)
  13. lem-rational-normal-surface-reduced-to-invertible-canonical-module (birational-morphisms-contractions-and-surface-singularities)
  14. lem-nonsquare-tangent-conic-rational-surface-blowups-terminate (birational-morphisms-contractions-and-surface-singularities)
  15. lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic (birational-morphisms-contractions-and-surface-singularities)
  16. lem-double-plus-simple-cubic-rational-surface-branch-terminates (birational-morphisms-contractions-and-surface-singularities)
  17. lem-triple-cubic-rational-surface-branch-reduces-in-two-steps (birational-morphisms-contractions-and-surface-singularities)
  18. thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups (birational-morphisms-contractions-and-surface-singularities)
  19. lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups (birational-morphisms-contractions-and-surface-singularities)
  20. thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups (birational-morphisms-contractions-and-surface-singularities)
  21. thm-resolution-of-normal-surface-singularities (birational-morphisms-contractions-and-surface-singularities)
  22. rem-surface-contraction-and-resolution-scope-boundaries (birational-morphisms-contractions-and-surface-singularities)
- Write research/frontier-40-geometry-braids-rep-27-step3b-pair-birational-morphisms-contractions-and-surface-singularities.md.


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
