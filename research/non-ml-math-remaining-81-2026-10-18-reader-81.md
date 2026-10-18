# Step 3a reader report — batch 81

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Coverage: batch `81`

## Opened inventory

### Assigned pages and items

- A page: [library/hall-algebras-and-tensor-categories/frobenius-algebras-and-two-dimensional-sewing.md](../library/hall-algebras-and-tensor-categories/frobenius-algebras-and-two-dimensional-sewing.md) (draft).
- B page: [library/hall-algebras-and-tensor-categories/frobenius-algebras-and-two-dimensional-sewing-examples.md](../library/hall-algebras-and-tensor-categories/frobenius-algebras-and-two-dimensional-sewing-examples.md) (draft).

Read the assigned items in supplier order:

1. `def-oriented-open-closed-surface-category`
2. `def-frobenius-object-and-knowledgeable-sewing-data`
3. `lem-finite-frobenius-functional-determines-coproduct`
4. `lem-relative-surface-collars-and-elementary-decomposition`
5. `lem-elementary-surface-sewing-relations`
6. `lem-frobenius-sewing-derived-moves`
7. `def-relative-open-closed-surface-normal-form`
8. `lem-boundary-relative-two-dimensional-surface-normal-form`
9. `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras`
10. `thm-knowledgeable-frobenius-data-classify-open-closed-sewing`
11. `ex-dual-numbers-are-nonsemisimple-symmetric-frobenius`
12. `ex-group-algebra-is-symmetric-but-not-closed-sector`

### Page prerequisites and other supplier context

Opened the required pages `algebraic-representation-and-tensor-symmetry-map` (draft), `finite-hopf-integrals-frobenius-duality-and-maschke` (published), `braided-and-symmetric-monoidal-categories` (published), `morse-critical-points-hessians-and-indices` (published), and `modular-representations-and-projective-covers` (published). The displayed prerequisite-page summaries were read; their unrelated item sets were not audited. The A-page's finite-Hopf reuse claim was also checked against `thm-hh-finite-hopf-algebras-are-frobenius`.

Opened the external item suppliers needed for the assigned arguments: `def-category`, `def-countable-choice`, `def-monoidal-category`, `def-lax-strong-and-strict-monoidal-functor`, `def-monoidal-natural-transformation`, `def-equivalence-and-adjoint-equivalence-of-categories`, `def-braiding`, `def-braided-monoidal-category`, `def-braided-monoidal-functor`, `def-symmetric-monoidal-category`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, `thm-fundamental-theorem-on-flows`, `thm-collar-neighborhood-theorem`, `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `def-morse-function-and-excellent-morse-function`, `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`, `thm-morse-lemma`, `thm-parametric-transversality`, `def-algebra-over-a-commutative-ring`, `def-hh-frobenius-functional-and-associative-pairing`, `thm-dual-family-is-a-basis-in-finite-dimension`, `def-semisimple-module`, `def-simple-module`, `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`, and `prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra`.

The batch proof-contract sidecar was consulted for its step maps, citations, and source locators. Contracts were treated as author evidence and checked against the item bodies and cited targets.

## Mathematical review and edits

### Repaired items

- [def-oriented-open-closed-surface-category.md](../items/def-oriented-open-closed-surface-category.md#L31): the opening definition said that black/free intersections are corners but did not state that every corner has one black and one free incident face. The local collar construction and all subsequent boundary decompositions rely on this incidence condition. Lauda–Pfeiffer's open-closed definition explicitly requires every corner to separate black from colored boundary (arXiv:math/0510664v3, introduction and Definition 3.2, §§1 and 3.2). I made that condition explicit and excluded same-type corners. I checked every assigned direct and indirect consumer of this definition: `lem-relative-surface-collars-and-elementary-decomposition`, `lem-elementary-surface-sewing-relations`, `def-relative-open-closed-surface-normal-form`, `lem-boundary-relative-two-dimensional-surface-normal-form`, `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras`, and `thm-knowledgeable-frobenius-data-classify-open-closed-sewing` already use this convention; no consumer proof repair was needed. Updated the item's step-1.1 contract and the five consumer source-quote mirrors present in the batch proof-contract file.
- [lem-relative-surface-collars-and-elementary-decomposition.md](../items/lem-relative-surface-collars-and-elementary-decomposition.md#L99): step 5.1 used `|df|` and a positive minimum without specifying a cotangent norm or constructing a metric. I added the finite-chart construction of a smooth Riemannian metric using the partition procedure already proved in step 1.1, then stated the compactness argument with its induced norm. Updated the step-5.1 proof-contract claim and added its step-1.1 input.

Neither changed item contained a `verification.judge` record to remove. Reflow reported both items unchanged; precheck passed each as `direct`. The final proof-layout command checked both changed paths together: 2 items, 16 steps, 0 defects.

### Supporting source review

- Lauda–Pfeiffer, [Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras](https://arxiv.org/html/math/0510664), arXiv:math/0510664v3: §3.1.3 and Definition 3.2 specify the face/corner and colored-boundary conventions; Definition 3.18 and Theorem 3.22 give the single-color normal form and reduction; Definition 5.1 gives the typed colored equations; Theorem 5.6 states the arbitrary-color classification. The authors state in §5 that they omit the colored proof, so the local typed and boundary-relative arguments were reviewed directly.
- Moore–Segal, [D-branes and K-theory in 2D topological field theory](https://arxiv.org/pdf/hep-th/0609042v1), Appendix A.2, printed pp. 71–79: boundary critical points are required to be Morse on the boundary with nonzero normal derivative; the text lists the four index/normal-sign types, six boundary events, and the mixed interior-saddle interactions. This matches the local cases; the assigned item supplies the detailed collar-compatible construction and cut checks.
- Kock, [Frobenius algebras and 2D topological quantum field theories](https://mat.uab.cat/~kock/TQFT/FS.pdf), Proposition 2.4.10 and Theorem 3.1.13: unique Frobenius coproduct with the given counit and the closed TQFT/commutative Frobenius equivalence. These corroborate the finite-dimensional coproduct and closed-sector claims; the local proofs were checked independently.

## Defects not edited

None found in the assigned carriers or in the supplier claims needed to verify them. The group-algebra proposition has a narrower title than its all-field statement; the assigned example quotes the actual statement accurately and uses no defining-characteristic restriction.

## Page verdicts

- `frobenius-algebras-and-two-dimensional-sewing`: no remaining page-summary or interface defect after the corner-incidence clarification. Its claims distinguish symmetric from commutative Frobenius algebras, the closed subcategory from the circle-object full subcategory, and the arbitrary-color open/closed classification.
- `frobenius-algebras-and-two-dimensional-sewing-examples`: no page-summary or example defect found. Both examples preserve the stated all-field hypotheses and limit the group-algebra conclusion to the closed circle sector.

## Blocker

None.

## Coverage note

All 12 assigned items and both assigned pages were read, along with the direct suppliers opened above and the five required prerequisite-page summaries. The algebraic-representation prerequisite page was draft context; its separate representation/module proofs were not needed by any assigned claim and were not audited. The cited Lauda–Pfeiffer, Moore–Segal, and Kock sections listed above were inspected; unrelated sections of those sources were not reviewed.
