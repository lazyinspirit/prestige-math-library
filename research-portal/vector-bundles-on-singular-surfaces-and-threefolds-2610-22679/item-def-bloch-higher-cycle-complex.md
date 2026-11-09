---
title: Bloch cycle complexes and higher Chow groups
status: draft
research_item: def-bloch-higher-cycle-complex
dependency_level: 3
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)
- [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)
- [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)


## Definition
Let $k$ be a field, $X$ smooth of finite type over $k$, and $r\geq0$. For $n\geq0$ put $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$. A nonempty coordinate face is obtained by setting a proper subset of the coordinates to zero. An integral closed subscheme $W\subset X\times\Delta^n$ of codimension $r$ is **admissible** if every component of its intersection with every such face has codimension $r$ in that face; empty intersections are allowed. Codimension is measured on the ambient irreducible component containing the generic point. Define $z^r(X,n)$ as the free abelian group on the admissible subschemes.

For $n\geq1$, identify $\{t_i=0\}$ with $\Delta^{n-1}$ by retaining the remaining coordinates in increasing order and set
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ ranges over the components of $W\cap\{t_i=0\}$ and $\eta_T$ is its generic point. The empty sum is zero. Extend by integral linearity and set $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$. Put $z^r(X,n)=0$ for $n<0$ and $\partial_n=0:z^r(X,n)\to z^r(X,n-1)$ for every $n\leq0$. The resulting homological complex is **Bloch's cycle complex** $z^r(X,\bullet)$, and its **higher Chow groups** are
$$\mathrm{CH}^r(X,n)=H_n(z^r(X,\bullet))=\ker\partial_n/\operatorname{im}\partial_{n+1}.$$
In particular they vanish for $n<0$. This is the unnormalized complex; no quotient by degenerate simplices is taken.

## Definition references

[lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

## Facts & Assumptions

**Given:** $k,X,r$ as above.

**Goal:** Justify the coefficients, differential and homology quotient.

[F1] The admissible face lemma supplies finite coefficients, admissible face images and the identities $d_i d_j=d_{j-1}d_i$ for $i<j$. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] Alternating face sums form a chain complex, whose homology is the displayed quotient and vanishes in negative degrees. [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

## Justification
The local rings in the coefficient formula need not be discrete valuation rings and the cycles need not be smooth. The proper single-face calculation in [F1] supplies exactly the finite lengths shown. The cycle-level compatibility in [F1] uses the explicitly imported simplicial-cycle input locally on integral smooth affine opens; no quotient by rational equivalence is used. Thus all face maps are defined, and [F2] gives $\partial^2=0$ and makes the homology quotient well-defined. This definition does not assert the separate comparison with motivic cohomology or the identification of degree zero with the classical Chow group.
