---
id: def-reduced-burau-representation
kind: definition
title: "The reduced Burau representation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - lem-the-reduced-burau-module-is-free-of-rank-n-minus-one
  - lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover
  - def-invertible-matrix-and-similarity-over-a-commutative-ring
  - def-the-laurent-polynomial-ring
  - thm-the-artin-presentation-is-complete-for-geometric-braids
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume AC (inherited from the lift of braid mapping classes). Let
$M_{\mathrm{red}}$ be the reduced Burau module over
$\Lambda_1=\mathbb Z[t^{\pm1}]$, free of rank $n-1$. Write
$h_i=[\epsilon_i-\epsilon_n]$ for the transported basis of
[[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]], and put $h_n=0$.
For the matrix representation fix the adjacent weighted basis
$$b_i:=t^i(h_i-h_{i+1})=[t^i(\epsilon_i-\epsilon_{i+1})],\qquad 1\le i\le n-1.$$
It is a basis because $h_i=\sum_{k=i}^{n-1}t^{-k}b_k$; these formulas are
inverse changes of coordinates. For $n=1$ both bases are empty. Let
$\tilde h$ be the basepoint-normalised lift of a representative homeomorphism
of $\beta\in B_n$ constructed in
[[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]]. The
**reduced Burau representation** is
$$\bar\rho_n:B_n\longrightarrow\operatorname{GL}_{n-1}(\Lambda_1),\qquad \beta\longmapsto\text{the matrix of }(\tilde h)_*\text{ on }M_{\mathrm{red}}\text{ in the fixed basis}.$$

It is well defined because a different representative is isotopic and its lift
acts by the same $\Lambda_1$-module automorphism, and because the matrix is
taken in the basis $(b_1,\dots,b_{n-1})$; it is a homomorphism because the induced homology action is a
homomorphism; and it is $\Lambda_1$-linear because the lift commutes with the
deck group. Conventions: matrices act on column vectors, with the basis
$(b_i)$ in increasing index order. The original basis $(h_i)$ gives conjugate
matrices.

## Facts & Assumptions

**Given:** AC; the identification $B_n\cong\operatorname{Mod}(D^2,Q_n;\partial D^2)$ of [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]]; the reduced Burau module $M_{\mathrm{red}}$ with its fixed $\Lambda_1$-basis; and a braid $\beta\in B_n$.

[F1] For every braid class there is a homeomorphism representative; the basepoint-normalised lifts of isotopic representatives are isotopic as maps of pairs and therefore induce equal homology maps; these induced maps form a homomorphism from $B_n$, and each $\tilde h$ acts on $M_{\mathrm{red}}$ by a $\Lambda_1$-module automorphism ([[lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover]], [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[thm-the-artin-presentation-is-complete-for-geometric-braids]]).

[F2] $M_{\mathrm{red}}$ is free of rank $n-1$ over $\Lambda_1$ with basis $(h_i)$; the inverse coordinate formulas in the definition give the fixed basis $(b_i)$. The matrix of a $\Lambda_1$-module endomorphism in a fixed basis is invertible exactly when the endomorphism is an automorphism; matrices compose under the library convention that the leftmost factor is applied last ([[lem-the-reduced-burau-module-is-free-of-rank-n-minus-one]], [[def-invertible-matrix-and-similarity-over-a-commutative-ring]], [[def-the-laurent-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 *Well-definedness.* Choose a representative homeomorphism $h$ of the mapping class of $\beta$; any two such representatives are isotopic through boundary-fixed homeomorphisms preserving $Q_n$ setwise, so by [F1] their basepoint-normalised lifts have the same action on $M_{\mathrm{red}}$. Hence the $\Lambda_1$-module automorphism $(\tilde h)_*$ depends only on $\beta$; its matrix in the fixed basis therefore depends only on $\beta$. [F1, F2]

1.2 *Homomorphism property.* If $h_1,h_2$ represent $\beta_1,\beta_2$, then $\widetilde{h_1h_2}=\tilde h_1\circ\tilde h_2$ by [F1], so $(\widetilde{h_1h_2})_*=(\tilde h_1)_*\circ(\tilde h_2)_*$ and, in the fixed basis, the matrix of the composite is the product of the matrices in the library composition order of [F2]. Thus $\bar\rho_n(\beta_1\beta_2)=\bar\rho_n(\beta_1)\bar\rho_n(\beta_2)$. [F1, F2]

2.1 *$\Lambda_1$-linearity and target.* By [F1] each $(\tilde h)_*$ is a $\Lambda_1$-module automorphism of the free module $M_{\mathrm{red}}$ of rank $n-1$; its matrix in the fixed basis is therefore an invertible matrix over $\Lambda_1$, i.e. an element of $\operatorname{GL}_{n-1}(\Lambda_1)$, with inverse the matrix of $(\tilde h^{-1})_*$. This proves that $\bar\rho_n$ is a well-defined group homomorphism into $\operatorname{GL}_{n-1}(\Lambda_1)$. AC enters only through the mapping-class identification and the lift of [F1]. [F1, F2, step 1.1, step 1.2] ∎
