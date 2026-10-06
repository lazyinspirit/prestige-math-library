# Step 3b — scaffold auditor and item author

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/ITEM_ID.md ...`, batching all
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
label: step3b-pair-sobolev-poincare-and-morrey-inequalities-cc09535983e36168
covers: sobolev-poincare-and-morrey-inequalities
output: research/frontier-39-analysis-30-step3b-pair-sobolev-poincare-and-morrey-inequalities.md

# step3b: A/B pair sobolev-poincare-and-morrey-inequalities

- Run: frontier-39-analysis-30
- A page: sobolev-poincare-and-morrey-inequalities
- B page: sobolev-poincare-and-morrey-inequalities-examples
- Batches: 4
- Own only this pair; preserve other pairs in shared batch files.
- Read access: the entire library and all current-frontier A/B pairs, including sibling pairs still being constructed. Inspect their current manifests, items and pages when dependencies require it.
- Read current manifests, coverage, prose, plan and dependency records.
- Audit scaffolds for authoring readiness: hypotheses, sources, direct suppliers and proof route. Author every assigned item, including consumers with flagged unfinished suppliers; reconcile their actual proof uses and clear all required Step-3 gates before handoff. Thorough independent mathematical audit and systematic defect repair follow in Steps 5–8.
- Direct in-run prerequisite pairs to inspect (they may still be unfinished): none.
- If an item supplier is not yet authored, flag its exact ID and consuming step in research/frontier-39-analysis-30-step3b-pair-sobolev-poincare-and-morrey-inequalities.md; author the assigned consumer anyway, then leave its decision escalated until the supplier and proof use are reconciled.
- Audit and author in this exact dependency-level order (lower first; ties by page order and item ID):
  0. cor-poincare-wirtinger-on-convex-domains (sobolev-poincare-and-morrey-inequalities)
  0. def-john-domain-and-john-constant (sobolev-poincare-and-morrey-inequalities)
  0. def-sobolev-conjugate-exponent (sobolev-poincare-and-morrey-inequalities)
  0. lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n (sobolev-poincare-and-morrey-inequalities)
  0. lem-pointwise-potential-bound-for-compactly-supported-smooth-functions (sobolev-poincare-and-morrey-inequalities)
  0. lem-weak-partial-derivatives-lower-sobolev-order (sobolev-poincare-and-morrey-inequalities)
  0. lem-weak-product-rule-for-bounded-sobolev-functions (sobolev-poincare-and-morrey-inequalities)
  0. rem-critical-sobolev-does-not-embed-in-linfinity (sobolev-poincare-and-morrey-inequalities)
  0. thm-gagliardo-nirenberg-sobolev-inequality-for-p-one (sobolev-poincare-and-morrey-inequalities)
  0. thm-poincare-inequality-for-w-one-p-zero (sobolev-poincare-and-morrey-inequalities)
  0. ex-poincare-on-an-interval-with-sharp-scaling (sobolev-poincare-and-morrey-inequalities-examples)
  1. lem-john-domain-admits-bounded-overlap-ball-chains (sobolev-poincare-and-morrey-inequalities)
  1. lem-truncated-riesz-kernel-potential-bounded-on-lp (sobolev-poincare-and-morrey-inequalities)
  1. thm-gagliardo-nirenberg-sobolev-inequality (sobolev-poincare-and-morrey-inequalities)
  1. thm-poincare-inequality-on-a-ball (sobolev-poincare-and-morrey-inequalities)
  1. thm-w-one-infinity-functions-have-lipschitz-representatives (sobolev-poincare-and-morrey-inequalities)
  1. cex-poincare-without-mean-trace-or-zero-set-normalisation-fails (sobolev-poincare-and-morrey-inequalities-examples)
  1. cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation (sobolev-poincare-and-morrey-inequalities-examples)
  1. ex-scaling-for-the-sobolev-conjugate (sobolev-poincare-and-morrey-inequalities-examples)
  2. cor-sobolev-inequality-for-w-one-p-zero (sobolev-poincare-and-morrey-inequalities)
  2. lem-ball-mean-oscillation-potential-bound (sobolev-poincare-and-morrey-inequalities)
  2. thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n (sobolev-poincare-and-morrey-inequalities)
  2. cex-sobolev-embedding-on-an-unbounded-domain-needs-the-full-norm-or-decay (sobolev-poincare-and-morrey-inequalities-examples)
  3. thm-critical-sobolev-embedding-into-every-finite-lq (sobolev-poincare-and-morrey-inequalities)
  3. thm-morrey-inequality-for-p-greater-than-n (sobolev-poincare-and-morrey-inequalities)
  3. thm-poincare-wirtinger-on-bounded-john-domains (sobolev-poincare-and-morrey-inequalities)
  3. thm-sobolev-poincare-on-bounded-connected-extension-domains (sobolev-poincare-and-morrey-inequalities)
  4. rem-domain-classes-for-the-mean-zero-poincare-inequality (sobolev-poincare-and-morrey-inequalities)
  4. thm-higher-order-sobolev-embedding (sobolev-poincare-and-morrey-inequalities)
  4. thm-poincare-inequality-with-a-positive-measure-zero-set (sobolev-poincare-and-morrey-inequalities)
  4. cex-morrey-endpoint-p-equals-n-fails (sobolev-poincare-and-morrey-inequalities-examples)
  4. cex-poincare-wirtinger-needs-connectedness (sobolev-poincare-and-morrey-inequalities-examples)
  4. ex-holder-representative-of-a-radial-sobolev-function (sobolev-poincare-and-morrey-inequalities-examples)
  5. cor-sobolev-algebra-above-the-critical-index (sobolev-poincare-and-morrey-inequalities)
  5. cex-critical-w-one-n-does-not-embed-in-linfinity (sobolev-poincare-and-morrey-inequalities-examples)
- Write research/frontier-39-analysis-30-step3b-pair-sobolev-poincare-and-morrey-inequalities.md.


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
