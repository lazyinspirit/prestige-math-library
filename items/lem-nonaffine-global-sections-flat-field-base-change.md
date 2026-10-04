---
id: lem-nonaffine-global-sections-flat-field-base-change
kind: lemma
title: "Global sections commute with extension of scalars over a field"
status: published
origin: pipeline
deps: [thm-affine-fibre-product-tensor-ring, thm-global-sections-affine-scheme, def-separated-morphism-schemes]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Cohomology of Schemes, flat base change for H0"
      url: https://stacks.math.columbia.edu/tag/02KH
    - title: "Milne, Algebraic Groups (2022), Appendix A, global sections and base extension"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Let $X$ be a quasi-compact separated scheme over a field $k$ and $R$ a $k$-algebra. Then the natural map
$$\Gamma(X,\mathcal O_X)\otimes_kR\longrightarrow\Gamma(X\times_k\operatorname{Spec}R,\mathcal O)$$
is an isomorphism.

## Facts & Assumptions

[F1] Affine products over $k$ are spectra of tensor products, and global sections of an affine scheme recover its ring. ([[thm-affine-fibre-product-tensor-ring]], [[thm-global-sections-affine-scheme]])

[F2] Separatedness means the diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

## Proof

**Given:** $X$, $k$, and $R$ as in the statement.

1.1 Choose a finite affine open cover $X=\bigcup_{j=1}^rU_j$, using quasi-compactness. Each $U_j\cap U_l$ is affine: it is the inverse image of the closed diagonal under $U_j\times_kU_l\to X\times_kX$, hence a closed subscheme of an affine scheme. The sheaf gluing axiom gives an exact sequence beginning with $0\to\Gamma(X,\mathcal O_X)\to\prod_j\Gamma(U_j,\mathcal O_X)\to\prod_{j,l}\Gamma(U_j\cap U_l,\mathcal O_X)$, where the last arrow takes differences of restrictions. [F1, F2, given]

2.1 Every $k$-module is a vector space and is flat: a short exact sequence of vector spaces splits by extending a basis, so tensoring with any vector space preserves its exactness. In the particular equalizer in step 1.1 this can also be checked using the finitely many linearly independent coefficients of each tensor, with only finite basis selections. Tensor that equalizer with $R$. Finite products commute with this tensor product. By [F1] the resulting rings are precisely the rings of the affine opens $(U_j)_R$ and their intersections. Their equalizer is the global-section ring of $X_R$ by the same sheaf gluing axiom. This identifies the natural map in the statement with an isomorphism. The coefficient argument uses no arbitrary basis choice. [F1, step 1.1, algebra] ∎
