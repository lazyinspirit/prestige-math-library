---
id: thm-two-level-p1-poisson-additive-and-multiplicative-bounds
kind: theorem
title: "Two-level overlapping P1 Poisson bounds with explicit H-overlap dependence"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-two-level-p1-poisson-stable-decomposition
  - thm-additive-schwarz-stable-decomposition-condition-number
  - thm-multiplicative-schwarz-exact-sweep-contraction
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 4.1–4.2, printed pp. 591–594: stable splitting, additive
        spectrum, and multiplicative correction estimates."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §3.4 and Chapter 4 §§4.1–4.3, printed pp. 48–66; Chapter 5
        §5.4, printed pp. 86–92: overlapping P1 subdomains and abstract, then
        concrete, Schwarz bounds."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For the two-level P1 Poisson family of
[[thm-two-level-p1-poisson-stable-decomposition]], let
$N_0=7^d$ and $N_1=11^d$. The coarse-plus-local synthesis constant can be
chosen as $C_1=1+N_0$, and the local overlap matrix can be chosen with
$\rho\le N_1$. Consequently, for the exact additive Schwarz operator,
$$ \kappa_A(BA)\le C_{\rm FE}\left(1+(H/\delta)^2\right)(1+7^d). $$
For the coarse-first exact multiplicative sweep,
$$ \|E_{\rm mult}\|_A^2\le 1-\frac{1}{ C_{\rm FE}(1+(H/\delta)^2) \left(1+2(1+7^d)+2(1+11^d)^2\right) }<1. $$
In particular, if $H/\delta$ is uniformly bounded, both estimates are
independent of the fine mesh size and the number of subdomains. These are
constant-coefficient Poisson bounds; they assert no robustness for arbitrary
coefficient contrast or anisotropy.

## Facts & Assumptions

**Given:** Countable Choice, the structured nested meshes, padded cube
subdomains, coarse and local P1 spaces, and Poisson energy of
[[thm-two-level-p1-poisson-stable-decomposition]].

[F1] The stable splitting constant satisfies
$C_0\le C_{\rm FE}(1+(H/\delta)^2)$
([[thm-two-level-p1-poisson-stable-decomposition]]).

[F2] The additive condition number and multiplicative sweep estimates use
$C_0,C_1,\rho$ exactly as stated in their theorem contracts
([[thm-additive-schwarz-stable-decomposition-condition-number]],
[[thm-multiplicative-schwarz-exact-sweep-contraction]]).

[F3] The local spaces consist of P1 functions supported in the padded coarse
cubes, and the coarse space is global
([[thm-two-level-p1-poisson-stable-decomposition]]).

[F4] The real $L^2$ inner product satisfies
$|\int_\Omega f g|\le\|f\|_{L^2(\Omega)}\|g\|_{L^2(\Omega)}$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 At almost every point of $\Omega$, at most $N_0=7^d$ local subdomains are present by [F3] and the coordinate count in [[thm-two-level-p1-poisson-stable-decomposition]]. For any coarse component $v_0$ and local components $v_j$, at most $N_0+1$ gradients can be nonzero there. [F4] in the finite-dimensional Euclidean inner product gives the pointwise inequality $\left|\nabla v_0+\sum_j\nabla v_j\right|^2 \le (1+N_0)\left( |\nabla v_0|^2+\sum_j|\nabla v_j|^2 \right)$. Integrating gives $\left\|\nabla\left(v_0+\sum_jv_j\right)\right\|_{L^2(\Omega)}^2 \le (1+N_0)\left( \|\nabla v_0\|_2^2+\sum_j\|\nabla v_j\|_2^2 \right).$ Thus $C_1=1+N_0$ is a valid synthesis constant. [F3, F4, given, algebra]

1.2 Set $\epsilon_{ij}=1$ when the interiors of $\Omega_i$ and $\Omega_j$ overlap in positive measure and $0$ otherwise, with $\epsilon_{ii}=1$. If the interiors are disjoint, local gradients have disjoint supports almost everywhere, so $a(v_i,v_j)=0$. If they overlap, [F4] gives $|a(v_i,v_j)|\le\|v_i\|_A\|v_j\|_A$. Thus this symmetric nonnegative matrix satisfies the pairwise overlap hypothesis. Since each padded cube has side at most $5a$, two cubes can intersect only when their coarse indices differ by at most five in each coordinate. Thus every row of the overlap matrix has at most $N_1=11^d$ nonzero entries. For any vector $x$, applying [F4] to the vectors $(\sqrt{\epsilon_{ij}})_j$ and $(\sqrt{\epsilon_{ij}}x_j)_j$ gives $|(\epsilon x)_i|^2\le(\sum_j\epsilon_{ij})(\sum_j\epsilon_{ij}|x_j|^2)\le N_1\sum_j\epsilon_{ij}|x_j|^2$. Summing over $i$ and using the column sums, also at most $N_1$, yields $\|\epsilon x\|_2^2\le N_1^2\|x\|_2^2$. Hence $\rho=\|\epsilon\|_2\le N_1$. [F3, F4, given, algebra]

2.1 Substituting the stable constant [F1] and $C_1=1+7^d$ from step 1.1 into the additive estimate [F2] proves $\kappa_A(BA)\le C_{\rm FE}(1+(H/\delta)^2)(1+7^d)$. [F1, F2, step 1.1, algebra]

3.1 Substituting [F1], step 1.1, and $\rho\le11^d$ from step 1.2 into the multiplicative estimate [F2] gives the displayed contraction factor. Its denominator is finite and positive, and the multiplicative theorem proves the factor is nonnegative and strictly below one. The bound is uniform as $h\to0$ and the subdomain count grows whenever $H/\delta$ stays bounded. [F1, F2, step 1.1, step 1.2, algebra] ∎
