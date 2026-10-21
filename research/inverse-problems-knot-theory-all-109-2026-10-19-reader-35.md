# Step 3a reader report — batch 35

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Scope and opened inventory

I read the batch-35 manifest, the reader brief, the current batch author notes, and the relevant evidence records as context rather than verdicts. The live autopilot status showed the run active at Step 3a, with no dispatch in flight; batch 35 had not yet been covered by the reader stage.

Assigned pages opened:

- `library/inverse-problems/manifold-and-physical-constraint-inversion.md` (`manifold-and-physical-constraint-inversion`, A)
- `library/inverse-problems/manifold-and-physical-constraint-inversion-examples.md` (`manifold-and-physical-constraint-inversion-examples`, B)

Assigned items opened and reviewed in their within-batch dependency order:

- `def-ip-admissible-constraint-class`
- `prop-ip-constraints-can-remove-kernel-ambiguity`
- `alg-ip-stiefel-constrained-regularized-gradient`
- `lem-ip-stiefel-gradient-finite-budget-return-and-feasibility`
- `ex-ip-pde-inadmissible-state-rejected-before-solve`
- `ex-ip-constraint-eliminates-a-kernel-direction`
- `ex-ip-halfspace-constraint-leaves-continuous-kernel-ambiguity`

Direct item dependencies opened to check the assigned claims:

- `def-ip-forward-map-and-solution-classes`
- `def-linear-map`
- `def-kernel-and-image-of-a-linear-map`
- `def-ip-nonlinear-forward-map`
- `def-stiefel-grassmann-optimization-conventions`
- `thm-stiefel-grassmann-tangent-projections`
- `def-stiefel-qr-polar-retractions`
- `thm-stiefel-retractions-are-first-order`

## Review and page verdicts

The constraint-class definition correctly constructs discrete metrics for algebraic vector-space examples, restricts the forward map, and defines exact identifiability and the difference set. The proposition proves both directions of the kernel-intersection criterion; its nonempty-class hypothesis is used to ensure zero belongs to the difference set. All three examples' matrix, kernel, fiber, stencil, and admissibility calculations are correct.

The Stiefel procedure has a finite positive step schedule, an explicit ambient gradient-oracle condition, the real Frobenius projection formula, and the displayed polar update. The lemma correctly shows tangentness, the metric-dual formula, full rank of each polar input, feasibility of every returned iterate, nonincrease on accepted steps, and the finite-budget/status claims. The algorithm makes no convergence or stability claim. Its use of `X` is read as the current-frame state initialized by `X_0` and updated on acceptance; no repair was needed. No assigned item requires a diagram, and none contains TikZ material.

**A page — pass.** Its YAML inventory matches the four assigned A items. The file has no Markdown body or summary and preserves `page_layout: compact-v1`.

**B page — pass.** Its YAML inventory matches the three assigned examples and its prerequisite is the A page. The file has no Markdown body or summary and preserves `page_layout: compact-v1`.

## Uneditable findings

Both findings are in published dependency items, outside this reader's edit scope. They are editorial interruptions of complete sections; neither changes the mathematical meaning of the claim. The findings JSON names an assigned consumer for each.

- `def-kernel-and-image-of-a-linear-map`, Definition closing sentence: the sentence about subspaces and injectivity contains `[[thm-linear-kernel-image-and-injectivity]]` inside the Definition section. Use plain wording in the complete Definition and move the preserved link to an immediately following `## Definition references` section. Assigned consumer: `prop-ip-constraints-can-remove-kernel-ambiguity`.
- `thm-stiefel-retractions-are-first-order`, Statement opening sentence: “On the full-column-rank domains of `[[def-stiefel-qr-polar-retractions]]`...” contains a wikilink inside the Statement. State the domain in plain words and move the preserved link to an immediately following `## Statement references` section. Assigned consumer: `alg-ip-stiefel-constrained-regularized-gradient`.

## Edits, checks, and blockers

No assigned item or A-page prose was changed. Accordingly, no proof contract or judge record was changed, and reflow, precheck, and proof-layout were not run. There is no batch-specific blocker. The broader run remains active at Step 3a.

Coverage limit: I opened all seven assigned items, both assigned pages, and the eight direct item dependencies listed above. I did not independently fetch the external source PDFs or audit every deeper dependency of those supplier items; no citation was judged insufficient and no review claim is made about uninspected transitive material.
