---
id: lem-schwarz-p1-product-cutoff-interpolation-energy-estimate
kind: lemma
title: "Elementwise P1 product-cutoff energy estimate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matching-affine-simplicial-meshes
  - lem-shape-regular-affine-simplex-scaling
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1–4.2, pp. 585–594: subspace corrections,
        additive preconditioner, stable splitting, and strengthened
        Cauchy–Schwarz."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4, §§4.1–4.3, printed pp. 57–66, and Chapter 5 §5.3, printed
        pp. 79–80: abstract Schwarz operators and Lemma 5.7 on energy stability
        of P1 interpolation of P2 products."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $d\ge2$ and let $K$ be a nondegenerate affine
$d$-simplex in a shape-regular mesh with $h_K/\rho_K\le\sigma$. Let
$\theta,w\in\mathbb P_1(K)$. Let $I_K(\theta w)\in\mathbb P_1(K)$ be the affine
function whose values at the vertices of $K$ are the nodal values of
$\theta w$. There is a constant $C$ depending only on $d$ and the shape
regularity bound $\sigma$ such that
$$ \|\nabla I_K(\theta w)\|_{L^2(K)} \le C\bigl(\|\theta\nabla w\|_{L^2(K)} +\|w\nabla\theta\|_{L^2(K)}\bigr). $$

## Facts & Assumptions

**Given:** Countable Choice, a nondegenerate affine simplex $K$ from a
shape-regular family, and two affine scalar functions $\theta,w$ on $K$.

[F1] [[def-matching-affine-simplicial-meshes]] gives each cell as a
nondegenerate affine simplex with affinely independent vertices
$x_0,\ldots,x_d$. Thus there are unique barycentric affine functions
$\lambda_0,\ldots,\lambda_d$ satisfying $\sum_i\lambda_i=1$ and
$x=\sum_i\lambda_i(x)x_i$; these are the P1 nodal basis functions used below.

[F2] Under Countable Choice, [[lem-shape-regular-affine-simplex-scaling]]:
for simplex diameter
$h_K$, each barycentric basis function satisfies
$\|\nabla\lambda_i\|_{L^\infty(K)}\le C h_K^{-1}$, and affine maps have
uniform volume scaling under the shape-regularity bound.

[F3] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]:
on the fixed reference simplex the coordinate maximum of a P1 polynomial's
vertex values is bounded by a constant times its $L^2$ norm; affine scaling
transfers this as
$\max_i|v(x_i)|\le C h_K^{-d/2}\|v\|_{L^2(K)}$.

## Proof

1.1 Write the vertices as $x_0,\ldots,x_d$, their barycentric coordinates as $\lambda_0,\ldots,\lambda_d$, and set $\theta_i=\theta(x_i)$ and $w_i=w(x_i)$. Since $\sum_i\nabla\lambda_i=0$, $\nabla I_K(\theta w) =\sum_{i=1}^d(\theta_iw_i-\theta_0w_0)\nabla\lambda_i.$ For each $i\ge1$, $\theta_iw_i-\theta_0w_0 =\theta_i(w_i-w_0)+w_0(\theta_i-\theta_0)$. Affineness gives $|w_i-w_0|\le h_K|\nabla w|$ and $|\theta_i-\theta_0|\le h_K|\nabla\theta|$. Applying [F2] to the barycentric gradients therefore gives pointwise $|\nabla I_K(\theta w)| \le C\left(\max_i|\theta_i|\,|\nabla w| +\max_i|w_i|\,|\nabla\theta|\right).$ [F1, F2, algebra]

2.1 By [F3], the two vertex maxima in step 1.1 are at most $C h_K^{-d/2}\|\theta\|_{L^2(K)}$ and $C h_K^{-d/2}\|w\|_{L^2(K)}$, respectively. The gradients of affine functions are constant on $K$, so multiplying the pointwise estimate by $|K|^{1/2}\asymp h_K^{d/2}$ yields $\|\nabla I_K(\theta w)\|_{L^2(K)} \le C\left(|\nabla w|\|\theta\|_{L^2(K)} +|\nabla\theta|\|w\|_{L^2(K)}\right),$ which is the asserted estimate. [F2, F3, step 1.1, algebra] ∎
