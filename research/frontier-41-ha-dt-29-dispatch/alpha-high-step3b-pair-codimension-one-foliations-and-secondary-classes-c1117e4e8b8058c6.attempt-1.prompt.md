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
label: step3b-pair-codimension-one-foliations-and-secondary-classes-c1117e4e8b8058c6
covers: codimension-one-foliations-and-secondary-classes
output: research/frontier-41-ha-dt-29-step3b-pair-codimension-one-foliations-and-secondary-classes.md

# step3b: A/B pair codimension-one-foliations-and-secondary-classes

- Run: frontier-41-ha-dt-29
- A page: codimension-one-foliations-and-secondary-classes
- B page: codimension-one-foliations-and-secondary-classes-examples
- Batches: 23
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): foliation-holonomy-and-the-holonomy-groupoid, reeb-stability-and-global-foliation-constructions.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-41-ha-dt-29-step3b-pair-codimension-one-foliations-and-secondary-classes.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-bott-partial-connection-on-the-normal-bundle-of-a-foliation (codimension-one-foliations-and-secondary-classes)
  0. lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary (codimension-one-foliations-and-secondary-classes)
  0. lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood (codimension-one-foliations-and-secondary-classes)
  0. lem-c2-inverses-and-scalar-return-roots (codimension-one-foliations-and-secondary-classes)
  0. lem-c2-saddle-function-has-c1-morse-coordinates (codimension-one-foliations-and-secondary-classes)
  0. lem-forms-annihilated-by-a-nowhere-vanishing-one-form-are-divisible-by-it (codimension-one-foliations-and-secondary-classes)
  0. lem-winding-number-is-locally-constant-via-integral-estimate (codimension-one-foliations-and-secondary-classes)
  0. lem-winding-number-jumps-by-one-across-a-regular-planar-arc (codimension-one-foliations-and-secondary-classes)
  1. lem-c1-euclidean-maximal-flow-with-c2-upgrade (codimension-one-foliations-and-secondary-classes)
  1. lem-c2-leaf-intersection-with-a-box-transversal-is-countable (codimension-one-foliations-and-secondary-classes)
  1. lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups (codimension-one-foliations-and-secondary-classes)
  1. lem-finitely-cornered-regular-plane-curve-separates-without-choice (codimension-one-foliations-and-secondary-classes)
  1. lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions (codimension-one-foliations-and-secondary-classes)
  2. def-smooth-foliated-concordance (codimension-one-foliations-and-secondary-classes)
  2. lem-c1-planar-hyperbolic-gradient-has-local-stable-and-unstable-curves (codimension-one-foliations-and-secondary-classes)
  2. lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary (codimension-one-foliations-and-secondary-classes)
  2. lem-characteristic-period-annulus-has-a-smooth-product-coordinate (codimension-one-foliations-and-secondary-classes)
  2. lem-curvature-of-an-extending-bott-connection-lies-in-the-transverse-differential-ideal (codimension-one-foliations-and-secondary-classes)
  2. lem-frobenius-divisibility-gives-d-omega-equals-eta-wedge-omega (codimension-one-foliations-and-secondary-classes)
  2. lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit (codimension-one-foliations-and-secondary-classes)
  3. lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity (codimension-one-foliations-and-secondary-classes)
  3. lem-characteristic-disk-center-saddle-index-count (codimension-one-foliations-and-secondary-classes)
  3. lem-eta-wedge-d-eta-is-closed (codimension-one-foliations-and-secondary-classes)
  3. lem-finite-saddle-omega-graph-is-strongly-connected (codimension-one-foliations-and-secondary-classes)
  3. thm-bott-vanishing-for-real-pontryagin-monomials-of-a-codimension-q-foliation (codimension-one-foliations-and-secondary-classes)
  4. lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative (codimension-one-foliations-and-secondary-classes)
  4. lem-c2-first-integral-period-annuli-have-c2-products (codimension-one-foliations-and-secondary-classes)
  4. lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar (codimension-one-foliations-and-secondary-classes)
  4. lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots (codimension-one-foliations-and-secondary-classes)
  4. lem-godbillon-vey-form-is-independent-of-the-choice-of-eta-up-to-an-exact-form (codimension-one-foliations-and-secondary-classes)
  4. lem-godbillon-vey-form-is-invariant-under-rescaling-the-defining-form (codimension-one-foliations-and-secondary-classes)
  4. lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle (codimension-one-foliations-and-secondary-classes)
  5. def-godbillon-vey-class (codimension-one-foliations-and-secondary-classes)
  5. lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar (codimension-one-foliations-and-secondary-classes)
  5. lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit (codimension-one-foliations-and-secondary-classes)
  5. lem-nullhomotopy-persists-under-a-compact-transverse-deformation (codimension-one-foliations-and-secondary-classes)
  5. lem-one-sided-trivial-holonomy-classes-form-a-normal-subgroup (codimension-one-foliations-and-secondary-classes)
  5. lem-separated-characteristic-disk-has-an-inclusion-minimal-nonidentity-simple-cycle (codimension-one-foliations-and-secondary-classes)
  5. ex-godbillon-vey-rescaling-calculation (codimension-one-foliations-and-secondary-classes-examples)
  6. cor-a-codimension-one-foliation-defined-by-a-closed-one-form-has-zero-godbillon-vey-class (codimension-one-foliations-and-secondary-classes)
  6. def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation (codimension-one-foliations-and-secondary-classes)
  6. lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier (codimension-one-foliations-and-secondary-classes)
  6. rem-classical-godbillon-vey-requires-at-least-c-two-regularity (codimension-one-foliations-and-secondary-classes)
  6. thm-godbillon-vey-class-is-invariant-under-smooth-foliated-concordance (codimension-one-foliations-and-secondary-classes)
  7. def-limitwise-nullhomotopy-predicate-on-based-loops (codimension-one-foliations-and-secondary-classes)
  7. lem-a-finite-characteristic-circuit-has-c2-regular-port-traces (codimension-one-foliations-and-secondary-classes)
  7. ex-a-fibration-over-the-circle-has-zero-godbillon-vey-class (codimension-one-foliations-and-secondary-classes-examples)
  8. lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup (codimension-one-foliations-and-secondary-classes)
  8. lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family (codimension-one-foliations-and-secondary-classes)
  9. def-limitwise-nullhomotopy-subgroup-of-a-leaf (codimension-one-foliations-and-secondary-classes)
  9. lem-fixed-transverse-fences-have-a-finite-crossing-word (codimension-one-foliations-and-secondary-classes)
- Write research/frontier-41-ha-dt-29-step3b-pair-codimension-one-foliations-and-secondary-classes.md.


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
