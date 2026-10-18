---
page: modular-categories-verlinde-and-tqft
title: "Modular Categories, Verlinde Formula, and TQFT"
status: draft
items:
  - def-modular-ribbon-category-and-hopf-link-data
  - def-pointed-metric-group-ribbon-category
  - lem-finite-sine-transform-orthogonality
  - lem-fusion-ring-character-orthogonality
  - lem-lagrangian-relation-sends-lagrangian-to-lagrangian
  - lem-maslov-index-four-lagrangian-cocycle
  - lem-3-manifold-boundary-kernel-is-lagrangian
  - lem-maslov-correction-composes-for-lagrangian-relations
  - def-weighted-lagrangian-ribbon-bordism
  - lem-simple-ribbon-fusion-dimensions-are-nonzero
  - thm-pointed-metric-group-is-modular-iff-radical-trivial
  - def-rt-state-spaces
  - lem-balancing-and-hopf-link-character-identity
  - lem-relative-one-parameter-morse-path-with-finite-events
  - lem-parametrized-relative-elementary-handle-comparison
  - lem-relative-three-bordism-surgery-presentation
  - lem-modular-hopf-matrix-squared
  - lem-su2-hopf-link-sine-data-from-truncated-fusion
  - lem-modular-gauss-sums-and-kirby-color
  - thm-algebraic-verlinde-formula
  - thm-su2-root-unity-ribbon-category-is-modular
  - lem-rt-handlebody-pairing-and-surgery-gluing
  - thm-weighted-rt-tqft-and-factorization
  - lem-modular-hom-state-spaces-have-exact-sewing-inverses
  - cor-rt-torus-and-state-dimension-formula
examples: []
---

This draft develops the general modular-category route from the ribbon trace to the algebraic Verlinde formula, verifies two nondegeneracy families, and lays out the weighted Reshetikhin–Turaev construction and factorization claim. The finite sine calculation is conditional; it does not establish the existence or ribbon convention of the root-of-unity tilting quotient.

## Conventions

Throughout, $\mathcal C$ is a complex finite semisimple rigid ribbon category with simple unit, finitely many simple labels, and a specified spherical pivotal structure $j=u\theta$. Write $d_i=\operatorname{tr}_j(1_i)$, $s_{ij}=\operatorname{tr}_j(c_{j,i}c_{i,j})$, $D^2=\sum_i d_i^2$, and $S=s/D$ when $D^2\ne0$. “Modular” means $\det(s)\ne0$; finite semisimplicity and ribbon structure alone do not imply this.

## Authored results

- **Data and helper proofs:** [[def-modular-ribbon-category-and-hopf-link-data]], [[lem-simple-ribbon-fusion-dimensions-are-nonzero]], [[lem-fusion-ring-character-orthogonality]], [[lem-balancing-and-hopf-link-character-identity]], and [[lem-modular-hopf-matrix-squared]].
- **General consequence:** [[thm-algebraic-verlinde-formula]] proves the normalized formula without complex conjugation and fixes the fusion-matrix indexing convention.
- **Nondegeneracy families:** [[def-pointed-metric-group-ribbon-category]] and [[thm-pointed-metric-group-is-modular-iff-radical-trivial]] give the pointed test; [[lem-finite-sine-transform-orthogonality]] and [[lem-su2-hopf-link-sine-data-from-truncated-fusion]] give the conditional sine matrix.
- **Boundary and weights:** [[lem-3-manifold-boundary-kernel-is-lagrangian]], [[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]], [[lem-maslov-index-four-lagrangian-cocycle]], and [[def-weighted-lagrangian-ribbon-bordism]] fix the boundary kernels, reduction, Maslov sign, and weighted composition rule.
- **TQFT carriers:** [[def-rt-state-spaces]], [[lem-modular-gauss-sums-and-kirby-color]], [[lem-relative-three-bordism-surgery-presentation]], [[lem-rt-handlebody-pairing-and-surgery-gluing]], [[thm-weighted-rt-tqft-and-factorization]], and [[cor-rt-torus-and-state-dimension-formula]] record the state spaces, normalization, surgery, maps, and gluing route.

## Readiness and exact gaps

The boundary-kernel, relation-reduction, Maslov, trace-character, modular-inversion, Verlinde, and conditional sine calculations have local proof carriers. Current batch 61/62 draft bodies for `def-temperley-lieb-rank-one-lusztig-tilting-category`, `thm-temperley-lieb-rank-one-tilting-quotient-fusion-category`, `thm-temperley-lieb-root-negligible-quotient-is-semisimple`, and `thm-temperley-lieb-rank-one-pivotal-ribbon-conversion` now exist and contain substantial numbered proof drafts. Existing Step 1 records for the Weyl/character, quotient, root-path, and pivotal-conversion claims remain escalated against earlier carrier versions and have not been reconciled; the category definition has an author-ready record, which is not independent approval. The actual category definition also references `lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series`; that draft file exists but is absent from its batch manifest and has no Step 1 record. The A18 modularity claim therefore remains escalated pending owner reconciliation of those exact supplier bodies and records.

The relative surgery carrier proves existence from a relative handle decomposition but does not prove completeness of the boundary Cerf/Kirby move list. The Kirby-color carrier proves Gauss sums, the meridian projector, and blow-up normalization but leaves the full coupon-bearing slide calculation open. Consequently the surgery-defined bordism maps, composition/coupon cancellation, cylinder law, and unconditional modular-functor factorization remain escalated. A framed-link evaluator alone is not asserted to be a TQFT.

Companion examples: [[modular-categories-verlinde-and-tqft-examples]].

Reading prerequisite: [[noninvertible-symmetries-and-anyonic-chains]]. This is a reading route; it does not imply modularity.
