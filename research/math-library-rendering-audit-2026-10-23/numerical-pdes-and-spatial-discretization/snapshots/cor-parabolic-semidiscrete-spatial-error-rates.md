---
id: cor-parabolic-semidiscrete-spatial-error-rates
kind: corollary
title: Semidiscrete parabolic energy and L2 rates from elliptic approximation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - lem-parabolic-zero-boundary-sobolev-space-is-separable
  - thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound
  - def-parabolic-ritz-projection
  - lem-parabolic-ritz-projection-well-defined
  - lem-parabolic-projection-time-product-rule
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
  - cor-shape-regular-affine-fe-primal-energy-approximation
  - cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.2, PDF pp. 104–105: semidiscrete Ritz residual and spatial approximation estimates."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§§2.4–2.5, pp. 5–6: Ritz error splitting, initial projection error, and conditional semidiscrete rates."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice and the real scalar finite-element setting of
[[cor-shape-regular-affine-fe-primal-energy-approximation]], on a
shape-regular affine mesh family with $h\le1$. Let $V=H^1_0(\Omega)$
with its $H^1$ norm,
$H=L^2(\Omega)$, and let $a$ be a time-independent bounded coercive form
with constants $M,\alpha$. Let $R_h$ be its Ritz projection and let $u_h$
be the semidiscrete solution initialized by $u_h(0)=R_hu(0)$. Assume the
continuous solution obeys $u\in H^1(0,T;V)$,
$$u\in L^\infty(0,T;W^{r+1,2}(\Omega)\cap V),\qquad u'\in L^2(0,T;W^{r+1,2}(\Omega)\cap V),$$
for an integer $r\ge1$. For almost every $t$, assume the adjoint solution
and approximation inequalities in
[[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]]
hold for each target $w=u(t)$ and $w=u'(t)$ with common
$s\in(0,1]$, $C_D$, and $C_R$, uniformly in $h,t$. Let $C_{\rm FE}$ be the
primal interpolation constant in that corollary and put
$$C_A=\frac{M^2}{\alpha}C_{\rm FE}C_DC_R, \qquad c_i=\|V\hookrightarrow H\|.$$
Then $\rho=R_hu-u$ and $\theta=u_h-R_hu$ satisfy
$$\|\rho\|_{L^\infty(0,T;V)} \le\frac M\alpha C_{\rm FE}h^r \|u\|_{L^\infty(0,T;W^{r+1,2})},$$
$$\|\rho\|_{L^\infty(0,T;H)} \le C_Ah^{r+s}\|u\|_{L^\infty(0,T;W^{r+1,2})},\qquad \|\rho'\|_{L^2(0,T;H)} \le C_Ah^{r+s}\|u'\|_{L^2(0,T;W^{r+1,2})},$$
and
$$\|\theta\|_{L^\infty(0,T;H)} \le\frac{c_i C_A}{\sqrt\alpha}h^{r+s} \|u'\|_{L^2(0,T;W^{r+1,2})},\qquad \|\theta\|_{L^2(0,T;V)} \le\frac{c_i C_A}{\alpha}h^{r+s} \|u'\|_{L^2(0,T;W^{r+1,2})}.$$
Consequently, $\|u_h-u\|_{L^\infty(0,T;H)}$ is bounded by the sum of the two
$L^\infty(0,T;H)$ bounds for $\rho,\theta$, and
$$\|u_h-u\|_{L^2(0,T;V)} \le\sqrt T\frac M\alpha C_{\rm FE}h^r \|u\|_{L^\infty(0,T;W^{r+1,2})} +\frac{c_i C_A}{\alpha}h^{r+s} \|u'\|_{L^2(0,T;W^{r+1,2})}.$$
In particular, the full-adjoint branch $s=1$ gives the conditional
semidiscrete max-in-time rate $h^{r+1}$ in $L^\infty(H)$; it requires both stated dual hypotheses and
does not assert full adjoint regularity on an arbitrary polyhedral domain.

## Facts & Assumptions

**Given:** Countable Choice; the exact shape-regular affine finite-element
interpolation hypotheses; a real time-independent bounded/coercive form;
the continuous and semidiscrete solutions with exact initial Ritz projection;
the spatial regularity of $u,u'$; and the two uniform adjoint conditions for
each of those targets.

[A1] Countable Choice is assumed in the Cea and adjoint Galerkin suppliers
([[def-countable-choice]]).

[A2] The two adjoint regularity and approximation inequalities hold uniformly
for the elliptic Ritz errors with targets $u(t)$ and $u'(t)$, with the common
constants $C_D,C_R$ in **Statement**
([[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]]).

[A3] The displayed time-dependent spatial Sobolev regularity assumptions on
$u$ and $u'$ hold.

[F6] $W^{1,2}_0(\Omega)$ with its usual $H^1$ norm, $L^2(\Omega)$, and the
dual form a separable real evolution triple
([[lem-parabolic-zero-boundary-sobolev-space-is-separable]]).

[F1] Céa's estimate gives the Galerkin error at most $M/\alpha$ times best
approximation in $V$ ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F2] The affine finite-element interpolant maps the declared regular
zero-boundary class into $V_h$ and has
$\|w-I_hw\|_{H^1}\le C_{\rm FE}h^r|w|_{W^{r+1,2}}$
([[cor-shape-regular-affine-fe-primal-energy-approximation]]).

[F3] Under the two exact dual regularity/approximation inequalities stated
above and Countable Choice, the static Galerkin error has the conditional bound
$\|w-R_hw\|_{L^2}\le C_Ah^{r+s}|w|_{W^{r+1,2}}$
([[cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation]]).

[F4] The time-independent Ritz map is bounded linear; every
$u\in H^1(0,T;V)$ has the unique continuous $V$ representative used for
$u(0)$, and its weak derivative commutes with $R_h$
([[def-parabolic-ritz-projection]],
[[lem-parabolic-ritz-projection-well-defined]],
[[lem-parabolic-projection-time-product-rule]]).

[F5] The semidiscrete Ritz error satisfies the residual energy estimate;
for this autonomous Ritz map its form residual vanishes
([[thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound]]).

## Proof

1.1 For almost every $t$, use the Ritz equation with target $w=u(t)$. It is the conforming Galerkin solution for the bounded functional $F_w(v)=a(w,v)$. By [F1] and [F2], $\|R_hu(t)-u(t)\|_V \le\frac M\alpha\inf_{v_h\in V_h}\|u(t)-v_h\|_V \le\frac M\alpha C_{\rm FE}h^r |u(t)|_{W^{r+1,2}}.$ Taking the essential supremum proves the first estimate. [F1, F2, F6, A1, A3]

1.2 The target $w=u(t)$ satisfies the real scalar finite-element hypotheses of [F3]; its Ritz projection is its Galerkin solution for $F_w$. The assumed uniform adjoint constants therefore give $\|\rho(t)\|_H\le C_Ah^{r+s}|u(t)|_{W^{r+1,2}}$. Apply the same argument to $w=u'(t)$ for almost every $t$. [F3, F6, A1, A2, A3]

2.1 Since $R_h$ is fixed, [F4] gives $\rho'=R_hu'-u'$. The $w=u'$ estimate in step 1.2 bounds $\|\rho'\|_{L^2(H)}$. The canonical embedding $H\to V_h^*$ has norm at most $c_i$, hence $\|\rho'\|_{L^2(V_h^*)}\le c_iC_Ah^{r+s} \|u'\|_{L^2(W^{r+1,2})}$. [F4, A1, given, step 1.2, algebra]

3.1 For the error splitting $\theta$, the fixed Ritz orthogonality removes $a(t;\rho,v_h)$ from the residual in [F5]. Its initial value is zero because $u_h(0)=R_hu(0)$. Applying [F5] and step 2.1 gives $\|\theta(t)\|_H^2+\alpha\|\theta\|_{L^2(0,t;V)}^2 \le\alpha^{-1}c_i^2C_A^2h^{2(r+s)} \|u'\|_{L^2(0,t;W^{r+1,2})}^2.$ Taking the supremum and square roots proves the two stated bounds for $\theta$. [F5, A1, step 2.1, given]

4.1 The decomposition $u_h-u=\theta+\rho$ gives the $L^\infty(H)$ bound by the triangle inequality. For the $L^2(V)$ bound, step 1.1 gives $\|\rho\|_{L^2(V)}\le\sqrt T(M/\alpha)C_{\rm FE}h^r \|u\|_{L^\infty(W^{r+1,2})}$, and step 3.1 bounds $\theta$; adding them proves the displayed estimate. The $h^{r+1}$ case follows by setting $s=1$ in the conditional dual branch. [step 1.1, step 3.1, algebra] ∎
