---
id: def-qft-qed-finite-grassmann-algebra
kind: definition
title: Finite Grassmann algebra and top-coefficient integral
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, §44, Formal Development of Fermionic Path Integrals
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted 616-page draft; Grassmann generators, coefficient integral, change of variables, and finite complex Gaussian determinant, printed pp. 276–281.
---

## Definition

Let $R$ be a commutative unital $\mathbb C$-algebra and let $d\ge1$. Let $\Lambda_d(R)$ be the exterior algebra over $R$ on $2d$ distinct generators $\psi_1,\ldots,\psi_d,\bar\psi_1,\ldots,\bar\psi_d$. Thus every pair of generators anticommutes, each generator squares to zero, and coefficients from $R$ commute with every generator. The bar is part of a generator's name; no complex-conjugation relation is imposed.

Order the generators as $\bar\psi_1,\ldots,\bar\psi_d,\psi_1,\ldots,\psi_d$. The corresponding ordered monomials form the $R$-basis of $\Lambda_d(R)$. Let
$$ M_d:=\bar\psi_1\cdots\bar\psi_d\psi_1\cdots\psi_d $$
and let $[M_d]P\in R$ denote the coefficient of $M_d$ in $P\in\Lambda_d(R)$. Define the finite Grassmann integral by the $R$-linear functional
$$ \mathcal I_d(P):=(-1)^{d(d+1)/2}[M_d]P . $$
For $K\in M_d(R)$, put $B_K:=\sum_{i,j=1}^d\bar\psi_iK_{ij}\psi_j$. Since every monomial of degree greater than $2d$ vanishes, its exponential is the finite sum
$$ \exp(-B_K):=\sum_{n=0}^{d}\frac{(-B_K)^n}{n!}. $$
The sign factor in $\mathcal I_d$ is the chosen normalization. Its Gaussian determinant identity, including the value at $K=I_d$, is proved separately.
