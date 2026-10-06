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
label: step3b-pair-characteristic-numbers-and-cobordism-obstructions-8ac712ecdee01bdf
covers: characteristic-numbers-and-cobordism-obstructions
output: research/frontier-41-ha-dt-29-step3b-pair-characteristic-numbers-and-cobordism-obstructions.md

# step3b: A/B pair characteristic-numbers-and-cobordism-obstructions

- Run: frontier-41-ha-dt-29
- A page: characteristic-numbers-and-cobordism-obstructions
- B page: characteristic-numbers-and-cobordism-obstructions-examples
- Batches: 11
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): intersection-pairings-self-intersection-and-euler-classes, pontryagin-thom-and-framed-cobordism, thom-spectra-and-unoriented-bordism-detection.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-41-ha-dt-29-step3b-pair-characteristic-numbers-and-cobordism-obstructions.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. lem-fundamental-class-of-a-product-of-closed-manifolds (characteristic-numbers-and-cobordism-obstructions)
  0. lem-kronecker-pairing-is-multiplicative-under-cross-products (characteristic-numbers-and-cobordism-obstructions)
  0. lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes (characteristic-numbers-and-cobordism-obstructions)
  0. rem-characteristic-class-constructions-and-normalizations-are-at-owned (characteristic-numbers-and-cobordism-obstructions)
  0. rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion (characteristic-numbers-and-cobordism-obstructions)
  0. thm-characteristic-numbers-are-cobordism-invariants (characteristic-numbers-and-cobordism-obstructions)
  0. ex-stiefel-whitney-number-of-real-projective-space (characteristic-numbers-and-cobordism-obstructions-examples)
  1. cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds (characteristic-numbers-and-cobordism-obstructions)
  1. lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas (characteristic-numbers-and-cobordism-obstructions)
  1. ex-orientation-reversal-negates-pontryagin-numbers (characteristic-numbers-and-cobordism-obstructions-examples)
  1. ex-pontryagin-numbers-of-complex-projective-two-space (characteristic-numbers-and-cobordism-obstructions-examples)
  2. lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum (characteristic-numbers-and-cobordism-obstructions)
  2. lem-projective-space-products-have-triangular-characteristic-number-matrix (characteristic-numbers-and-cobordism-obstructions)
  3. lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse (characteristic-numbers-and-cobordism-obstructions)
  3. lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism (characteristic-numbers-and-cobordism-obstructions)
  3. ex-characteristic-numbers-of-a-product (characteristic-numbers-and-cobordism-obstructions-examples)
  4. thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism (characteristic-numbers-and-cobordism-obstructions)
  5. lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem (characteristic-numbers-and-cobordism-obstructions)
  8. prop-products-of-complex-projective-spaces-span-rational-oriented-bordism (characteristic-numbers-and-cobordism-obstructions)
  9. thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers (characteristic-numbers-and-cobordism-obstructions)
  15. thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism (characteristic-numbers-and-cobordism-obstructions)
- Write research/frontier-41-ha-dt-29-step3b-pair-characteristic-numbers-and-cobordism-obstructions.md.


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
