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

run: frontier-39-analysis-30
role: alpha-high
label: step3b-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum-7f8708cf88b6f43f
covers: fredholm-elliptic-problems-and-the-elliptic-spectrum
output: research/frontier-39-analysis-30-step3b-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum.md

# step3b: A/B pair fredholm-elliptic-problems-and-the-elliptic-spectrum

- Run: frontier-39-analysis-30
- A page: fredholm-elliptic-problems-and-the-elliptic-spectrum
- B page: fredholm-elliptic-problems-and-the-elliptic-spectrum-examples
- Batches: 11
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): lax-milgram-and-weak-elliptic-solutions.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-39-analysis-30-step3b-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  1. cex-nonsymmetric-elliptic-operators-need-not-have-an-orthonormal-eigenbasis (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  1. ex-coercive-nonsymmetric-form-can-have-nonreal-galerkin-eigenvalues (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  2. thm-garding-inequality-for-a-divergence-form-elliptic-operator (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  3. cor-a-sufficiently-large-shift-is-coercive (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  4. def-formal-adjoint-and-adjoint-weak-dirichlet-problem (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  5. thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  6. def-shifted-elliptic-solution-operator (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  6. rem-neumann-spectrum-and-the-constant-zero-mode (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  7. def-ltwo-operator-associated-with-a-symmetric-elliptic-form (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  7. lem-shifted-elliptic-solution-operator-is-compact-on-ltwo (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  7. ex-disconnected-neumann-domain-has-multiple-zero-eigenvalue (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  8. def-symmetric-elliptic-weak-eigenpair (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  8. lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  8. lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  8. lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  9. cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  9. lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  9. lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  9. thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  10. thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  10. thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  11. cor-elliptic-kernel-and-cokernel-are-finite-dimensional (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  11. lem-eigenbasis-expansion-in-the-form-norm (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  11. rem-a-repeated-eigenvalue-has-no-canonical-eigenfunction-basis (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  12. cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  12. cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  12. thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  13. cor-poincare-constant-and-first-dirichlet-eigenvalue (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  13. lem-elliptic-resolvent-identity (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  13. thm-courant-fischer-minimax-for-elliptic-eigenvalues (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  13. thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  13. ex-dirichlet-laplacian-eigenpairs-on-an-interval (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  13. ex-resolvent-norm-blows-up-when-a-real-parameter-approaches-an-eigenvalue (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  14. thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion (fredholm-elliptic-problems-and-the-elliptic-spectrum)
  14. cex-elliptic-eigenvalues-need-not-be-simple (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  14. cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  14. ex-neumann-laplacian-has-a-zero-constant-mode (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
  14. ex-shift-removes-a-negative-zero-order-obstruction (fredholm-elliptic-problems-and-the-elliptic-spectrum-examples)
- Write research/frontier-39-analysis-30-step3b-pair-fredholm-elliptic-problems-and-the-elliptic-spectrum.md.


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
