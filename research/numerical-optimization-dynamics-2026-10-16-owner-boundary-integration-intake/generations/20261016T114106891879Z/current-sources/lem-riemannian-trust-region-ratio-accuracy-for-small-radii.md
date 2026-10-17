---
id: lem-riemannian-trust-region-ratio-accuracy-for-small-radii
kind: lemma
title: Retraction trust-region ratios are accurate at small radii
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-riemannian-trust-region
  - thm-stiefel-retractions-are-first-order
  - thm-complex-grassmann-polar-retraction-is-first-order
  - alg-trust-region-cauchy-step
  - lem-trust-region-cauchy-decrease
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 7 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap7.pdf"
    locator: "Complete 32-page chapter, §§7.2–7.4.1: Riemannian pullback models, ratio/radius branches, Cauchy decrease and first-order analysis."
  - title: "Nicolas Boumal, P.-A. Absil, and Coralia Cartis, Global rates of convergence for nonconvex optimization on manifolds (2018), arXiv v2"
    url: "https://arxiv.org/pdf/1605.08101"
    locator: "Complete 33-page PDF, §§3.1–3.4 and Appendices B–C: pullback regularity, model decrease, radius bounds and O(epsilon^-2) counts."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§6.4–6.5: Riemannian trust-region subproblems and model conditions."
verification:
  precheck: n/a
---

## Statement

Let $M$ be a finite-dimensional real Stiefel or Grassmann manifold, or a
complex Grassmannian, with its real Frobenius metric. Regard every tangent
space as real, let $x\in M$, and let $g=\operatorname{grad}f(x)\ne0$.
Choose a first-order retraction $R$ and write
$\widehat f_x(s)=f(R_x(s))$ on the tangent (or horizontal) space, equipped
with its real Frobenius inner product. Suppose $\nabla\widehat f_x$ is
$L_R$-Lipschitz on the ball $\|s\|\le\Delta$, and let
$m_x(s)=f(x)+\langle g,s\rangle+\tfrac12\langle s,B_xs\rangle$ with
$B_x$ self-adjoint and real-linear. Define its induced operator norm by
$$\|B_x\|_{\rm op}:=\sup_{s\ne0}\frac{\|B_xs\|}{\|s\|},$$
and assume $\|B_x\|_{\rm op}\le M_B$. Let $p_C$ be the negative-gradient
Cauchy step, and let a feasible trial $p$ satisfy
$m_x(0)-m_x(p)\ge\theta_C[m_x(0)-m_x(p_C)]$ for $0<\theta_C\le1$.
With a zero denominator interpreted as $+\infty$, if
$\Delta\le\|g\|/(2M_B)$, then its predicted decrease $P$ is positive and
$$|\rho-1|\le\frac{2(L_R+M_B)\Delta}{\theta_C\|g\|},\qquad \rho=\frac{f(x)-f(R_x(p))}{P}.$$
Consequently, for $0<\eta_2<1$, if
$$\Delta\le \min\left\{\frac{\|g\|}{2M_B}, \frac{\theta_C(1-\eta_2)\|g\|}{2(L_R+M_B)}\right\},$$
then $\rho\ge\eta_2$. If $L_R+M_B=0$, the ratio equals $1$.

## Facts & Assumptions

**Given:** The $C^2$ pullback, gradient Lipschitz bound, self-adjoint model operator and norm bound, Cauchy-fraction condition, and small-radius safeguard in the Statement.

[F1] A first-order real Stiefel/Grassmann or complex Grassmann retraction satisfies $D R_x(0)[s]=s$ ([[thm-stiefel-retractions-are-first-order]], [[thm-complex-grassmann-polar-retraction-is-first-order]]).

[F2] The Riemannian trust-region step is feasible, has predicted decrease at least $\theta_C$ times Cauchy decrease, and uses the Cauchy step when $\Delta\le\|g\|/(2M_B)$ ([[alg-riemannian-trust-region]]).

[F3] The negative-gradient Cauchy step is the segment minimizer with the formula stated in [[alg-trust-region-cauchy-step]].

[F4] In orthonormal real coordinates on the finite-dimensional tangent or horizontal space, the operator $B_x$ has a symmetric matrix with Euclidean induced norm $\|B_x\|_{\rm op}$, so the Cauchy decrease estimate gives at least $\tfrac12\|g\|\min\{\Delta,\|g\|/\|B_x\|_{\rm op}\}$, with the zero-operator convention ([[lem-trust-region-cauchy-decrease]]).

[F5] The matrix norm is compatible with the vector norm and the Euclidean inner product satisfies Cauchy–Schwarz ([[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F6] A scalar function continuous on a closed interval and differentiable in its interior has an interior point where its derivative is the endpoint slope ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** lower-bound the model decrease and compare pullback actual decrease with its quadratic model.

1.1 Write $a=\|g\|>0$ and $c=\langle g,B_xg\rangle$. The operator norm bound and Cauchy–Schwarz in [F5] give $c\le |c|\le a\|B_xg\|\le M_Ba^2$. If $c\le0$, [F3] gives a boundary Cauchy step. If $c>0$, then $M_B>0$, the unconstrained segment minimizer has length $a^3/c\ge a/M_B$, and $\Delta\le a/(2M_B)$ forces the constrained minimizer to the boundary. Thus $\|p_C\|=\Delta$ in both branches, including $M_B=0$. [F3, F5, given, cases, algebra]

2.1 Choose orthonormal real coordinates on the finite-dimensional tangent or horizontal space. In these coordinates [F4] applies, and $\|B_x\|_2=\|B_x\|_{\rm op}$. Since $\|B_x\|_{\rm op}\le M_B$ and step 1.1 gives $\|p_C\|=\Delta$, the Cauchy decrease is at least $\tfrac12a\Delta$. The trial condition and [F2] therefore give $P=m_x(0)-m_x(p)\ge\tfrac12\theta_Ca\Delta>0$. This verifies that $\rho$ is defined. [F2, F4, given, step 1.1, choose, algebra]

3.1 Put $\phi(t)=\widehat f_x(tp)$ and $h(t)=\phi(t)-\phi(0)-t\phi'(0)$. By [F1], $\phi'(0)=\langle g,p\rangle$. Lipschitz continuity and [F5] give $|h'(t)|\le L_Rt\|p\|^2\le L_R\|p\|^2$ for $0\le t\le1$. Apply [F6] on $[0,1]$ to obtain $|h(1)|\le L_R\|p\|^2$. The quadratic model contributes at most $\tfrac12M_B\|p\|^2$ beyond the linear term, so $$|f(x)-f(R_x(p))-P|\le(L_R+M_B)\|p\|^2.$$ Since $\|p\|\le\Delta$, step 2.1 gives $$|\rho-1|\le\frac{(L_R+M_B)\Delta^2}{\theta_Ca\Delta/2} =\frac{2(L_R+M_B)\Delta}{\theta_Ca}.$$ If $L_R+M_B=0$, the numerator error is zero and $\rho=1$. Otherwise the stated radius threshold makes $|\rho-1|\le1-\eta_2$, hence $\rho\ge\eta_2$. [F1, F2, F5, F6, given, step 2.1, algebra] ∎
