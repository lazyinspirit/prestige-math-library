---
id: thm-algebraic-verlinde-formula
kind: theorem
title: "The algebraic Verlinde formula"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-balancing-and-hopf-link-character-identity, lem-modular-hopf-matrix-squared]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Corollaries 8.14.4–8.14.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.1"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\mathcal C$ be modular with $S=s/D$ as in [[def-modular-ribbon-category-and-hopf-link-data]]. For simple labels $i,j,k$,

$$N_{ij}^k=\sum_{x\in I}\frac{S_{ix}S_{jx}S_{k^*x}}{S_{0x}}.$$

For simultaneous diagonalization, define the fusion matrix $N_i$ with rows indexed by the second input $j$, columns indexed by the output $k$, and entries $(N_i)_{j,k}=N_{ij}^k$. Then

$$N_iS=S\operatorname{diag}\!\left(\frac{S_{ix}}{S_{0x}}\right)_{x\in I}.$$

This is the algebraic formula; no complex conjugation is used.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, its Hopf-link matrix $s$, chosen square root $D$, normalized matrix $S=s/D$, and fusion coefficients $N_{ij}^k$.

[F1] The Hopf-link character identity is $s_{xi}s_{xj}=d_x\sum_kN_{ij}^ks_{xk}$, with $h_x(i)=s_{xi}/d_x$ a unital character ([[lem-balancing-and-hopf-link-character-identity]]).

[F2] The matrix identity is $s^2=D^2C$, where $C_{ij}=\delta_{i,j^*}$, and therefore $\sum_xs_{x\ell}s_{x,k^*}=D^2\delta_{\ell,k}$ ([[lem-modular-hopf-matrix-squared]]).

[F3] $S$ is symmetric, $S_{0x}=d_x/D$, and $S$ is invertible ([[def-modular-ribbon-category-and-hopf-link-data]], [[lem-balancing-and-hopf-link-character-identity]], [[lem-modular-hopf-matrix-squared]]).

## Proof

**Given:** The data in the Statement.

1.1 Divide the character identity in [F1] by $d_x$ to get $s_{xi}s_{xj}/d_x=\sum_\ell N_{ij}^{\ell}s_{x\ell}$. Multiply by $s_{x,k^*}$ and sum over $x$. By [F2], the right side is $\sum_\ell N_{ij}^{\ell}D^2\delta_{\ell,k}=D^2N_{ij}^k$. Thus $\sum_xs_{xi}s_{xj}s_{x,k^*}/d_x=D^2N_{ij}^k$. [F1, F2, given, algebra]

2.1 Since $S_{0x}=d_x/D$ and $S=s/D$, dividing step 1.1 by $D^2$ rewrites it as $N_{ij}^k=\sum_xS_{ix}S_{jx}S_{k^*x}/S_{0x}$, using symmetry of $S$ to exchange $S_{xi}$ with $S_{ix}$. [F2, F3, step 1.1, algebra]

3.1 For the stated matrix convention, $(N_iS)_{j,x}=\sum_kN_{ij}^kS_{kx}$. The character equation in [F1] gives $\sum_kN_{ij}^kS_{kx}=(S_{ix}/S_{0x})S_{jx}$. Hence $N_iS=S\operatorname{diag}(S_{ix}/S_{0x})$. Since $S$ is invertible, it simultaneously diagonalizes these explicitly indexed fusion matrices. [F1, F3, given, algebra] ∎
