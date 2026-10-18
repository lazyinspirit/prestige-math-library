---
id: lem-crouzeix-raviart-local-interpolation-estimates
kind: lemma
title: Local approximation by the face-average Crouzeix–Raviart interpolant
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-crouzeix-raviart-face-average-interpolant
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - lem-crouzeix-raviart-local-face-unisolvence
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - lem-shape-regular-affine-simplex-scaling
  - thm-reference-simplex-poincare-wirtinger
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.1 and its proof, PDF p. 2: local interpolation estimate for every r in [0,1]."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 326–343: reference-simplex Bramble–Hilbert interpolation estimate and face scaling in the H2 case."
---

## Statement

Assume Countable Choice and the setup of [[def-crouzeix-raviart-face-average-interpolant]], a
shape-regular affine mesh, and $1/2<r\le1$. The face-average interpolant is
defined for every $u\in H^{1+r}(K)$ by the traces of
[[lem-crouzeix-raviart-simplex-traces-and-green-identity]] and reproduces
$\mathbb P_1(K)$. Uniformly over all cells,
$$\|\nabla(u-I_K^{CR}u)\|_{L^2(K)} \le C h_K^r|u|_{H^{1+r}(K)},\qquad \|u-I_K^{CR}u\|_{L^2(K)} \le C h_K^{1+r}|u|_{H^{1+r}(K)}.$$
For each facet $F\subset\partial K$,
$$h_F^{-1/2}\|\gamma_F(u-I_K^{CR}u)\|_{L^2(F)} \le C h_K^r|u|_{H^{1+r}(K)}.$$
If $u\in H^1_0(\Omega)$, then the global interpolant has matching interior
face means and zero boundary face means, so $I_h^{CR}u\in V_h^{CR,0}$.

## Facts & Assumptions

**Given:** Countable Choice, a shape-regular affine simplex, the local and global face-average interpolants, and the Slobodeckij regularity convention of [[def-crouzeix-raviart-fractional-sobolev-regularity]].

[A1] Countable Choice is required by the simplex trace, reference Poincare, and affine shape-scaling suppliers. ([[def-countable-choice]])

For a cell or face $E$ of positive measure, write
$\operatorname{avg}_E f:=|E|^{-1}\int_E f$.

[F1] The face mean of a continuous affine polynomial is its value at the face barycenter, and the face-average interpolant reproduces every affine polynomial. ([[lem-crouzeix-raviart-local-face-unisolvence]])

[F2] Face traces on a simplex are bounded on $H^1$; for $1/2<r<1$ they satisfy the face-mean estimate in the preceding item. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F3] The mean-zero Poincare–Wirtinger inequality holds on the reference simplex. ([[thm-reference-simplex-poincare-wirtinger]])

[F4] Shape regularity gives $\|A_K\|\asymp h_K$, $\|A_K^{-1}\|\asymp h_K^{-1}$, $|K|\asymp h_K^d$, and $|F|\asymp h_K^{d-1}$. ([[lem-shape-regular-affine-simplex-scaling]])

## Proof
1.1 On the reference simplex, each face mean of $v\in H^1$ is bounded by $C\|v\|_{H^1}$ by [F2]. The interpolant is a finite sum of these means times fixed affine shape polynomials, so it is bounded from $H^1$ to $H^1$. The trace-defined formula of [[def-crouzeix-raviart-face-average-interpolant]] is therefore continuous on $H^{1+r}\subset H^1$. [A1, F2, given]

2.1 First work on the reference simplex. Choose an affine polynomial $p$ with $\nabla p=\operatorname{avg}_K\nabla u$ and $\operatorname{avg}_K(u-p)=0$. For $1/2<r<1$, applying the fractional Poincare estimate proved in step 1.1 of [[lem-crouzeix-raviart-simplex-traces-and-green-identity]] to each component of $\nabla u$ gives $\|\nabla(u-p)\|_{L^2(K)}\le C|u|_{H^{1+r}(K)}$. The mean-zero Poincare–Wirtinger inequality [F3] then gives $\|u-p\|_{L^2(K)}\le C\|\nabla(u-p)\|_{L^2(K)}$. At $r=1$, apply [F3] to the mean-zero first derivatives, then again to $u-p$, obtaining $\|u-p\|_{H^1(K)}\le C|u|_{H^2(K)}$. [A1, F3, given, step 1.1]

3.1 Since $p$ is affine, reproduction [F1] gives $u-I_K^{CR}u=(u-p)-I_K^{CR}(u-p)$. The reference stability from step 1.1 and the estimates of step 2.1 bound the reference $H^1$ error by $C|u|_{H^{1+r}}$. Under the affine map $F_K(\widehat x)=b_K+A_K\widehat x$, each face surface Jacobian is constant, so face averages and the interpolant commute with pullback. The fractional gradient seminorm obeys $|\widehat u|_{H^{1+r}(\widehat K)}\le C h_K^{1+r-d/2}|u|_{H^{1+r}(K)}$: substitute $x=F_K(\widehat x)$ in the double integral, use $|A_Kz|\asymp h_K|z|$ and $|\det A_K|\asymp h_K^d$ from [F4], and include the factor $A_K^T$ in the pulled-back gradient. The physical gradient and $L^2$ error scaling factors are respectively $h_K^{d/2-1}$ and $h_K^{d/2}$, yielding the two stated powers. [A1, F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 Apply the scaled $H^1$ trace bound [F2] to $e=u-I_K^{CR}u$: $h_F^{-1/2}\|e\|_{L^2(F)} \le C\bigl(h_K^{-1}\|e\|_{L^2(K)}+\|\nabla e\|_{L^2(K)}\bigr).$ Substituting step 3.1 gives the stated face estimate. On an interior facet, both adjacent restrictions of $u$ have the same Sobolev trace because $u\in H^1(\Omega)$; on a boundary facet the trace of $u\in H^1_0(\Omega)$ is zero. The global interpolant therefore has matching interior face means and zero boundary means. [A1, F2, step 3.1, given, algebra] ∎
