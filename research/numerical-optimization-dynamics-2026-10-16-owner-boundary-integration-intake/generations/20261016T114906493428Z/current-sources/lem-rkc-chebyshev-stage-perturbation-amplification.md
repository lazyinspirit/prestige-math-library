---
id: lem-rkc-chebyshev-stage-perturbation-amplification
kind: lemma
title: "Chebyshev stage perturbations have an explicit quadratic bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-rkc1-chebyshev
  - alg-rkc2-linear-chebyshev
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-chebyshev-polynomials-first-and-second-kind
  - def-euclidean-inner-product
  - def-linear-map
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-polynomial-evaluation-at-an-endomorphism
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-and-normal-endomorphism
  - def-vector-space-of-linear-maps
  - lem-chebyshev-rkc-bounds-and-endpoint-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ibrahim Almuslimani and Gilles Vilmart, Explicit Stabilized Integrators for Stiff Optimal Control Problems, §2.2.1"
      url: "https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf"
    - title: "B.P. Sommeijer, L.F. Shampine, and J.G. Verwer, RKC: An explicit solver for parabolic PDEs, §2"
      url: "https://ir.cwi.nl/pub/109/0109D.pdf"
---

## Statement

Let $d\ge1$, let $A$ be a self-adjoint endomorphism of $\mathbb R^d$ with its Euclidean inner product and $\langle Av,v\rangle\le0$. For first-order RKC assume the integer stage count $s\ge1$ and $h\rho\le2s^2$; for linear second-order RKC assume $s\ge2$ and $h\rho\le2(s^2-1)/3$, where $\rho=\max_i(-\lambda_i(A))$. In either branch, let $X=I+hA/s^2$ or $X=I+w_1hA$, respectively.

Write $Y_j$ for the generic recurrence stage; in the second-order branch this is the $V_j$ of [[alg-rkc2-linear-chebyshev]]. Model the error injected into each recurrence update by vectors $\delta_1,\ldots,\delta_s$:
$$\widehat Y_0=y,\qquad \widehat Y_1=X\widehat Y_0+\delta_1,\qquad \widehat Y_j=2X\widehat Y_{j-1}-\widehat Y_{j-2}+\delta_j\quad(2\le j\le s).$$
If $\|\delta_j\|_2\le\varepsilon$ for every $j$, then the final stage error relative to the unperturbed recurrence is at most
$$\|\widehat Y_s-Y_s\|_2\le\frac{s(s+1)}2\,\varepsilon.$$
For linear second-order RKC the returned state multiplies this bound by $b_s\le1$. An additional output perturbation of norm $\varepsilon_{\rm out}$ adds at most $\varepsilon_{\rm out}$. This is a bound for the stated additive-error model; it does not assert a floating-point error size.

## Facts & Assumptions

**Given:** The RKC recurrences, the stage-error vectors and their uniform bound, a self-adjoint nonpositive $A$, and the corresponding spectral interval condition.

[F1] [[alg-rkc1-chebyshev]]: in the linear case the stage recurrence is $Y_0=y$, $Y_1=(I+hA/s^2)Y_0$, and $Y_j=2(I+hA/s^2)Y_{j-1}-Y_{j-2}$.

[F2] [[alg-rkc2-linear-chebyshev]]: the linear RKC2 recurrence uses $X=I+w_1hA$ and returns $a_sy+b_sV_s$.

[F3] [[def-chebyshev-polynomials-first-and-second-kind]]: $U_0=1$, $U_1=2X$, and $U_k=2XU_{k-1}-U_{k-2}$.

[F4] [[lem-chebyshev-rkc-bounds-and-endpoint-derivatives]]: $|U_k(x)|\le k+1$ for $x\in[-1,1]$.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism on finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F6] [[def-polynomial-evaluation-at-an-endomorphism]] and [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]: a polynomial acts on an eigenvector by its scalar evaluation at the eigenvalue; orthonormal coordinates give the squared norm as the sum of squared coordinates.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality.

## Proof

1.1 Put $e_j=\widehat Y_j-Y_j$, where $Y_j$ is the unperturbed recurrence with the same $A,h,y$. The first two updates give $e_0=0$ and $e_1=\delta_1$, and subtraction of the recurrences gives $e_j=2Xe_{j-1}-e_{j-2}+\delta_j$ for $j\ge2$. [given, F1, F2, algebra]

1.2 By [F5], choose an orthonormal eigenbasis of $A$. Under either spectral interval premise, the eigenvalues of $X$ lie in $[-1,1]$. Thus [F4] and [F6] imply $\|U_k(X)v\|_2\le(k+1)\|v\|_2$ for every vector $v$: expand in that eigenbasis and bound each squared coordinate. [given, F4, F5, F6, algebra]

2.1 Define $U_k(X)$ by polynomial evaluation [F6]. Induction using [F3] and step 1.1 gives $e_s=\sum_{j=1}^s U_{s-j}(X)\delta_j.$ For $s=1$ this is $U_0(X)\delta_1=\delta_1$. At a successor stage, the coefficient of the most recent old perturbation is $2X=U_1(X)$; for every earlier perturbation, multiplying by $2X$ and subtracting its prior coefficient uses $2XU_k(X)-U_{k-1}(X)=U_{k+1}(X)$. The new perturbation has coefficient $U_0(X)=I$. This proves the formula by induction. [F3, F6, step 1.1, induction, algebra]

3.1 Apply the triangle inequality [F7] to step 2.1 and then step 1.2: $\|e_s\|_2\le\sum_{j=1}^s(s-j+1)\|\delta_j\|_2\le\varepsilon\sum_{k=0}^{s-1}(k+1)=\frac{s(s+1)}2\varepsilon.$ For linear RKC2 the returned perturbation is $b_se_s$; since $0<b_s<1$, its norm is at most the same bound. Adding a separate output perturbation uses the triangle inequality once more. [given, F7, step 2.1, step 1.2, algebra] ∎

## Remarks

The bound grows quadratically with the number of stages. It applies to self-adjoint operators whose scaled eigenvalues stay in the certified interval. It does not control nonnormal transient growth or replace a separate bound on each arithmetic or matrix-action perturbation.
