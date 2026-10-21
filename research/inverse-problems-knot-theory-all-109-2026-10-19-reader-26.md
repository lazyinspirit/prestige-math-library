# Step 3a reader report — batch 26

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `26`

## Run state and review basis

The recomputed autopilot status showed the run active, batch 26 still outstanding in `3a-read`, and no worker running. I reviewed the authored files independently; the batch manifest, notes, coverage record, proof contracts, and cross-batch dependency record were treated as navigation and evidence, not as verdicts.

## Assigned page inventory and verdicts

- `library/inverse-problems/nonlinear-tikhonov-existence-and-stability.md` — opened. Its YAML frontmatter lists the eight assigned A items, the four declared prerequisites, and `page_layout: compact-v1`; it has no Markdown body or summary. Inventory and presentation are consistent. **Verdict: pass.**
- `library/inverse-problems/nonlinear-tikhonov-existence-and-stability-examples.md` — opened. Its YAML frontmatter lists the two assigned examples, the A page prerequisite, and `page_layout: compact-v1`; it has no Markdown body or summary. Inventory and presentation are consistent. **Verdict: pass.**

## Assigned item inventory

Opened all ten assigned items, in dependency order:

1. `def-ip-weakly-closed-nonlinear-forward-map`
2. `def-ip-nonlinear-tikhonov-functional`
3. `def-ip-x0-minimum-norm-solution-on-weak-domain`
4. `lem-ip-nonlinear-exact-solution-set-is-weakly-closed`
5. `thm-ip-nonlinear-tikhonov-minimizer-exists`
6. `thm-ip-nonlinear-exact-solutions-have-x0-minimum-norm-solution`
7. `thm-ip-nonlinear-tikhonov-weak-cluster-stability`
8. `thm-ip-nonlinear-tikhonov-vanishing-noise-convergence`
9. `ex-ip-nonlinear-tikhonov-has-two-global-minimizers`
10. `ex-ip-bochner-integral-defines-weakly-closed-nonlinear-map`

The seven proof contracts covering the assigned lemma, theorems, and examples were checked against their current facts, cited suppliers, derivations, and boundary notes. I also checked the assigned statements, titles, definitions, examples, remarks, reference placement, and proof formatting. Statements and definitions are uninterrupted by hyperlinks; links are retained after their complete sections in the corresponding `references` headings. No diagram occurs in the assigned scope.

## Dependencies and source evidence opened

The following current draft interfaces were opened before their consumers:

- `def-ip-forward-map-and-solution-classes` (batch 1): its general `F:U→Y` forward-map interface applies to the real-Hilbert maps used here.
- `def-ip-nonlinear-forward-map` (batch 25): its nonempty norm-open-domain interface applies to both examples with `U=R`; neither example imports derivative or tangential-cone conclusions.
- `def-ip-x0-minimum-norm-solution` (batch 25): opened as the cross-reference for the separate open-domain version of the distance-minimizing definition.

Published suppliers opened for the reviewed proofs were `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-weak-topology-on-a-normed-space`, `def-weak-convergence-of-nets-and-sequences`, `def-ultrafilter-extension-principle`, `def-dependent-choice`, `def-countable-choice`, `def-hahn-banach-extension-principle-relative`, `lem-dependent-choice-implies-countable-choice`, `def-infimum`, `thm-infimum-property`, `lem-inf-epsilon`, `thm-hilbert-spaces-are-reflexive-by-riesz-representation`, `lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`, `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm`, `thm-direct-method-in-a-reflexive-banach-space`, `def-proper-coercive-and-weakly-lower-semicontinuous-functional`, `thm-reals-cauchy-complete`, `def-measure-space`, `def-measure`, `def-banach-space`, `def-banach-valued-simple-function-and-integral`, `def-bochner-integrable-function`, and `lem-banach-valued-simple-integral-is-well-defined`.

I opened Clason, *Regularization of Inverse Problems*, Chapter 10 at equation (10.1) and Theorems 10.1–10.3 (PDF pp. 91–95), and checked its Chapter 9 sequential weak-closedness formulation (PDF p. 83). Equation (10.1) matches the authored half-scaled functional; the source's weakly closed map condition and Chapter 10 weakly closed-domain premise match the local sequential graph and domain conditions. I opened Wirth, *Inverse Problems* (official Münster lecture notes, 56-page PDF), pp. 18–20: Definition 83, Remark 84, Theorems 85–87 and their relevant proof discussions. Wirth's functional scales both summands without the factor `1/2`, which leaves minimizers unchanged; Theorems 85–87 impose stronger operator continuity assumptions and serve only as supporting comparisons. Theorem 87's condition `δ/√α→0` is equivalent to `δ²/α→0` for the nonnegative noise and positive regularization parameters here. Remark 84 supports general nonuniqueness, while the two-minimizer example is established by its own computation.

## Mathematical review and repairs

- The weakly closed map definition separates topological weak closedness of `D` from sequential weak-to-weak graph closure and states the actual real-Hilbert weak convergence convention. The exact-solution-set lemma follows from constant-output weak convergence and the graph condition.
- The Tikhonov existence proof obtains a finite infimum, constructs a minimizing sequence using `DC⇒ACω`, bounds both the input and output sequences, extracts weak subsequences in both Hilbert spaces using the stated `UL/DC/HB` suppliers, identifies the graph limit, and applies weak lower semicontinuity to the two objective terms.
- The exact-solution minimum-norm proof verifies properness, coercivity, and sequential weak lower semicontinuity on the exact solution set. The opened direct-method theorem explicitly accepts a weakly sequentially closed admissible set, so the lemma supplies the needed closure hypothesis without assuming topological weak closedness of the solution set.
- The fixed-parameter stability proof bounds arbitrary chosen minimizers for strongly convergent data and compares their limit objective with every fixed competitor. The vanishing-noise proof uses the exact-solution comparison to bound both the minimizers and residuals, then proves each weak cluster point is exact and minimum-norm under `δ_n²/α_n→0`.
- The first example's completed-square computation gives exactly `t=±1/√2`. The finite Bochner example verifies countable additivity on the two-point space, computes `F(s)=(s+s²)/2`, verifies sequential weak graph closure directly, and invokes the proved existence theorem under its explicit axioms.
- Titles and claims preserve the stated scope; the vanishing-noise theorem asserts weakly convergent subsequences and characterizes every weak limit, not full-sequence convergence or uniqueness.

No defect was confirmed, so no assigned item or A-page prose was edited. There are no unedited defects to escalate. No proof contract or verification record needed updating, and item reflow, precheck, and proof-layout were not run because no item changed.

## Uneditable findings and blocker

None. There is no blocker.

## Coverage limit

All assigned pages and items, the seven assigned proof contracts, the directly used supplier statements/proofs, the relevant local cross-references, and the cited Chapter 10 source discussions listed above were opened. This was a batch review, not a whole-library or whole-source-book audit; unrelated transitive material in foundational suppliers was not reviewed.
