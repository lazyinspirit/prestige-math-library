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
label: step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions-2550e742d02b5abf
covers: hamilton-jacobi-equations-and-viscosity-solutions
output: research/frontier-39-analysis-30-step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions.md

# step3b: A/B pair hamilton-jacobi-equations-and-viscosity-solutions

- Run: frontier-39-analysis-30
- A page: hamilton-jacobi-equations-and-viscosity-solutions
- B page: hamilton-jacobi-equations-and-viscosity-solutions-examples
- Batches: 19
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): analytic-semigroups-and-linear-evolution-equations.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-39-analysis-30-step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. def-hamilton-jacobi-cauchy-problem (hamilton-jacobi-equations-and-viscosity-solutions)
  0. def-legendre-transform-of-a-hamiltonian (hamilton-jacobi-equations-and-viscosity-solutions)
  0. def-upper-and-lower-semicontinuous-envelopes (hamilton-jacobi-equations-and-viscosity-solutions)
  1. def-hopf-lax-operator (hamilton-jacobi-equations-and-viscosity-solutions)
  1. def-viscosity-subsolution-and-supersolution (hamilton-jacobi-equations-and-viscosity-solutions)
  1. lem-envelopes-are-the-least-semicontinuous-majorants (hamilton-jacobi-equations-and-viscosity-solutions)
  1. lem-finite-valued-convex-hamiltonian-equals-its-biconjugate (hamilton-jacobi-equations-and-viscosity-solutions)
  2. cor-hopf-lax-is-a-contraction-in-the-supremum-norm (hamilton-jacobi-equations-and-viscosity-solutions)
  2. def-discontinuous-viscosity-solution (hamilton-jacobi-equations-and-viscosity-solutions)
  2. def-half-relaxed-limits (hamilton-jacobi-equations-and-viscosity-solutions)
  2. lem-hopf-lax-infima-localise (hamilton-jacobi-equations-and-viscosity-solutions)
  2. lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation (hamilton-jacobi-equations-and-viscosity-solutions)
  2. lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary (hamilton-jacobi-equations-and-viscosity-solutions)
  2. lem-viscosity-testing-by-first-order-jets (hamilton-jacobi-equations-and-viscosity-solutions)
  2. rem-value-functions-and-hamilton-jacobi-bellman-equations (hamilton-jacobi-equations-and-viscosity-solutions)
  2. thm-comparison-for-autonomous-convex-superlinear-hamiltonians (hamilton-jacobi-equations-and-viscosity-solutions)
  2. cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  3. cor-hopf-lax-preserves-a-modulus-of-continuity (hamilton-jacobi-equations-and-viscosity-solutions)
  3. lem-doubling-variables-maximum-localisation (hamilton-jacobi-equations-and-viscosity-solutions)
  3. lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points (hamilton-jacobi-equations-and-viscosity-solutions)
  3. prop-classical-solutions-are-viscosity-solutions (hamilton-jacobi-equations-and-viscosity-solutions)
  3. prop-maxima-of-subsolutions-and-minima-of-supersolutions (hamilton-jacobi-equations-and-viscosity-solutions)
  3. thm-half-relaxed-limit-stability-for-viscosity-solutions (hamilton-jacobi-equations-and-viscosity-solutions)
  3. thm-stability-of-viscosity-solutions-under-local-uniform-convergence (hamilton-jacobi-equations-and-viscosity-solutions)
  3. thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions (hamilton-jacobi-equations-and-viscosity-solutions)
  3. cex-hopf-lax-without-convex-superlinear-coercivity (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  3. cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  4. lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump (hamilton-jacobi-equations-and-viscosity-solutions)
  4. lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers (hamilton-jacobi-equations-and-viscosity-solutions)
  4. thm-comparison-for-first-order-hamilton-jacobi-equations (hamilton-jacobi-equations-and-viscosity-solutions)
  4. thm-hopf-lax-dynamic-programming-semigroup (hamilton-jacobi-equations-and-viscosity-solutions)
  4. cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  4. ex-eikonal-equation-as-a-viscosity-equation (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  4. ex-quadratic-hopf-lax-formula-and-moreau-envelope (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  5. cor-finite-speed-of-dependence-for-lipschitz-hamiltonians (hamilton-jacobi-equations-and-viscosity-solutions)
  5. cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions (hamilton-jacobi-equations-and-viscosity-solutions)
  5. thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation (hamilton-jacobi-equations-and-viscosity-solutions)
  5. ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  5. ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  5. ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution (hamilton-jacobi-equations-and-viscosity-solutions-examples)
  6. thm-perron-method-for-hamilton-jacobi-equations (hamilton-jacobi-equations-and-viscosity-solutions)
  6. thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations (hamilton-jacobi-equations-and-viscosity-solutions)
  6. ex-hopf-lax-solution-with-a-forming-corner (hamilton-jacobi-equations-and-viscosity-solutions-examples)
- Write research/frontier-39-analysis-30-step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions.md.


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
