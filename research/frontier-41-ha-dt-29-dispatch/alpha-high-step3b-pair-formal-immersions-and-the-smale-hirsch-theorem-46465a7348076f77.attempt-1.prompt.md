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
label: step3b-pair-formal-immersions-and-the-smale-hirsch-theorem-46465a7348076f77
covers: formal-immersions-and-the-smale-hirsch-theorem
output: research/frontier-41-ha-dt-29-step3b-pair-formal-immersions-and-the-smale-hirsch-theorem.md

# step3b: A/B pair formal-immersions-and-the-smale-hirsch-theorem

- Run: frontier-41-ha-dt-29
- A page: formal-immersions-and-the-smale-hirsch-theorem
- B page: formal-immersions-and-the-smale-hirsch-theorem-examples
- Batches: 17
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): handle-decompositions-duality-and-rearrangement.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-41-ha-dt-29-step3b-pair-formal-immersions-and-the-smale-hirsch-theorem.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-formal-immersion-between-smooth-manifolds (formal-immersions-and-the-smale-hirsch-theorem)
  0. def-weak-compact-open-smooth-topology-on-mapping-spaces (formal-immersions-and-the-smale-hirsch-theorem)
  0. lem-regular-sublevels-are-compact-manifolds-with-boundary (formal-immersions-and-the-smale-hirsch-theorem)
  0. rem-a-closed-n-manifold-cannot-immerse-in-r-n (formal-immersions-and-the-smale-hirsch-theorem)
  1. def-normal-bundle-of-a-formal-immersion (formal-immersions-and-the-smale-hirsch-theorem)
  1. def-space-of-immersions-and-space-of-formal-immersions (formal-immersions-and-the-smale-hirsch-theorem)
  1. lem-open-manifolds-admit-exhaustions-with-no-caps (formal-immersions-and-the-smale-hirsch-theorem)
  1. lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas (formal-immersions-and-the-smale-hirsch-theorem)
  1. cex-a-bundle-map-with-rank-drop-is-not-a-formal-immersion (formal-immersions-and-the-smale-hirsch-theorem-examples)
  2. def-derivative-map-from-immersions-to-formal-immersions (formal-immersions-and-the-smale-hirsch-theorem)
  2. def-regular-homotopy-of-immersions (formal-immersions-and-the-smale-hirsch-theorem)
  2. lem-formal-immersion-gives-the-tangent-normal-bundle-identity (formal-immersions-and-the-smale-hirsch-theorem)
  2. lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property (formal-immersions-and-the-smale-hirsch-theorem)
  2. lem-smooth-families-and-path-components-in-the-weak-topology (formal-immersions-and-the-smale-hirsch-theorem)
  3. lem-formal-immersion-homotopies-extend-over-a-collar (formal-immersions-and-the-smale-hirsch-theorem)
  3. lem-the-derivative-map-is-continuous (formal-immersions-and-the-smale-hirsch-theorem)
  3. ex-the-standard-sphere-immersion-and-its-normal-line (formal-immersions-and-the-smale-hirsch-theorem-examples)
  4. lem-parametric-immersion-extension-on-a-disk (formal-immersions-and-the-smale-hirsch-theorem)
  5. lem-formal-immersion-homotopies-extend-over-a-subcritical-handle (formal-immersions-and-the-smale-hirsch-theorem)
  8. lem-open-manifolds-admit-handle-filtrations-without-top-index-handles (formal-immersions-and-the-smale-hirsch-theorem)
  9. thm-smale-hirsch-for-open-source-manifolds (formal-immersions-and-the-smale-hirsch-theorem)
  10. lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case (formal-immersions-and-the-smale-hirsch-theorem)
  10. ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension (formal-immersions-and-the-smale-hirsch-theorem-examples)
  11. thm-smale-hirsch-immersion-theorem (formal-immersions-and-the-smale-hirsch-theorem)
  12. cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes (formal-immersions-and-the-smale-hirsch-theorem)
  12. rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence (formal-immersions-and-the-smale-hirsch-theorem)
  12. cex-a-closed-manifold-with-formally-plausible-rank-data-needs-positive-codimension (formal-immersions-and-the-smale-hirsch-theorem-examples)
  13. ex-immersing-the-circle-in-the-plane-from-a-formal-line-monomorphism (formal-immersions-and-the-smale-hirsch-theorem-examples)
- Write research/frontier-41-ha-dt-29-step3b-pair-formal-immersions-and-the-smale-hirsch-theorem.md.


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
