---
id: thm-rauch-comparison-theorem-first-form
kind: theorem
title: Rauch comparison theorem first form
status: draft
origin: pipeline
deps:
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-index-lemma
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - thm-radial-riccati-equation
  - def-sectional-curvature
  - thm-sturm-comparison-for-scalar-jacobi-equations
  - def-countable-choice
  - def-index-form-of-a-geodesic-segment
  - lem-integration-by-parts-for-the-index-form
  - def-jacobi-field
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - thm-taylor-peano-remainder
  - def-riemannian-metric-and-riemannian-manifold
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 25.3.1, printed p.188, and the proof in §26.2, printed pp.195–197: index comparison lemma and the logarithmic-derivative argument"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Rauch I, printed p.13, with the Riccati comparison of Theorem 3.1, printed pp.11–12"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$M_1,M_2$ be Riemannian manifolds of dimension $n\ge2$, let
$\gamma_i:[0,T]\to M_i$ be unit-speed geodesics, and let $J_i$ be normal
Jacobi fields along $\gamma_i$ with
$$J_i(0)=0,\qquad |D_tJ_i(0)|=a>0\qquad(i=1,2)$$
for one common positive number $a$. Suppose:

1. for every $t\in[0,T]$ and all nonzero $v\in\{\dot\gamma_1(t)\}^{\perp}$,
   $\tilde v\in\{\dot\gamma_2(t)\}^{\perp}$,
   $$\sec_{M_1}\bigl(v\wedge\dot\gamma_1(t)\bigr) \ge\sec_{M_2}\bigl(\tilde v\wedge\dot\gamma_2(t)\bigr);$$
2. $\gamma_1(0)$ has no conjugate point along $\gamma_1$ in $(0,T]$, that is,
   the first conjugate instant of $\gamma_1(0)$ along $\gamma_1$ is $>T$.

Then
$$|J_1(t)|\le|J_2(t)|\qquad(0\le t\le T).$$
Moreover $J_2$ has no zero in $(0,T]$. The comparison carries no information
past the first zero of $J_1$; hypothesis 2 places it beyond $T$.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the manifolds $M_1,M_2$ of dimension $n\ge2$, the unit-speed geodesics $\gamma_i:[0,T]\to M_i$, and the normal Jacobi fields $J_1,J_2$ with $J_i(0)=0$ and $|D_tJ_i(0)|=a>0$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the curvature and index-lemma interfaces named below;
the Jacobi and parallel initial-value suppliers themselves require no choice.

[F1] Index lemma: if $\gamma:[0,b]\to M$ has no pair of conjugate points $\gamma(0),\gamma(t)$, $t\in(0,b]$, and $V$ is a continuous field that is $C^1$ on the pieces of a finite subdivision with $V(0)=u$, $V(b)=w$, then there is exactly one Jacobi field $J$ with $J(0)=u$, $J(b)=w$, and $I_\gamma(J,J)\le I_\gamma(V,V)$ ([[thm-index-lemma]]).

[F2] Index form and integration by parts: on the space of continuous piecewise $C^1$ fields the index form is $I_\gamma(V,W)=\int_a^b\bigl(g(D_tV,D_tW)-g(R(V,\dot\gamma)\dot\gamma,W)\bigr)dt$, and for a smooth Jacobi field $J$ it equals the boundary term $I_\gamma(J,J)=[g(D_tJ,J)]_a^b$ ([[def-index-form-of-a-geodesic-segment]], [[lem-integration-by-parts-for-the-index-form]]).

[F3] Jacobi fields: the Jacobi equation is $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$, as defined by [[def-jacobi-field]]. The initial value and covariant
derivative determine a unique solution, and zero initial data give the zero
field ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).
Linearity of the equation makes real linear combinations Jacobi fields; no
solution-space dimension claim is needed here.

[F4] Parallel frames: along a geodesic segment there is a smooth parallel orthonormal frame, it may be prescribed as any orthonormal basis at one time, and parallel transport is a linear isometry preserving inner products ([[thm-existence-and-uniqueness-of-parallel-sections]], [[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

[F5] Radial data and invertibility: the radial Jacobi tensor $A$ of [[def-radial-jacobi-tensor]] sends $w\in\{\dot\gamma(0)\}^{\perp}$ to the normal Jacobi field with $A(0)=0$, $D_tA(0)=\operatorname{id}$, and if $\gamma(0)$ has no conjugate point along $\gamma$ on $(0,t]$, then $A(t)$ is an isomorphism of normal spaces ([[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]). For a nonzero normal Jacobi field $J$ with $J(0)=0$ and $D_tJ(0)\ne0$ this gives $J(t)\ne0$ for every $t$ before the first conjugate instant ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F6] Sectional curvature: for linearly independent vectors $v,w$, $\sec(v\wedge w)=\operatorname{Rm}(v,w,w,v)/\bigl(|v|^2|w|^2-\langle v,w\rangle^2\bigr)$; in particular if $v\perp w$ and $v\ne0$ then $\operatorname{Rm}(v,w,w,v)=\sec(v\wedge w)|v|^2|w|^2$, and both sides vanish when $v=0$ ([[def-sectional-curvature]], [[def-riemannian-metric-and-riemannian-manifold]]).

[F7] Taylor expansion: a $C^2$ curve $t\mapsto X(t)$ in a finite-dimensional normed space with $X(0)=0$ satisfies $X(t)=tX'(0)+O(t^2)$, componentwise by [[thm-taylor-peano-remainder]].

[F8] The Riccati equation and the Sturm comparison item of this page record the same logarithmic-derivative mechanism in the scalar and operator forms; no further input from them is needed below.

## Proof

**Proof technique:** direct: compare the index forms of the two fields at each terminal time with the index lemma and the curvature hypothesis, convert the inequality into an inequality of logarithmic derivatives of the squared norms, and integrate from the common quadratic asymptotics at $t=0$, bootstrapping over the first zero of $J_2$.

1.1 Index comparison at a terminal time. [F1, F2, F4, F6, A1, given]
Let $0<b\le T$ and let $J$, $\tilde J$ be normal Jacobi fields along $\gamma_1$, $\gamma_2$ with $J(0)=\tilde J(0)=0$ and $|J(b)|=|\tilde J(b)|=\beta>0$. We claim $$I_{\gamma_1}(J,J)\le I_{\gamma_2}(\tilde J,\tilde J),$$ each index form taken over the respective geodesic segment from $0$ to $b$. Choose by [F4] parallel orthonormal frames $(E_1,\dots,E_n)$ along $\gamma_1$ and $(\tilde E_1,\dots,\tilde E_n)$ along $\gamma_2$ with $E_1=\dot\gamma_1$, $\tilde E_1=\dot\gamma_2$ and $$E_2(b)=\frac{J(b)}{\beta},\qquad \tilde E_2(b)=\frac{\tilde J(b)}{\beta};$$ this is possible because $J(b)$ and $\tilde J(b)$ are normal, unit after division, and a parallel frame is determined by its value at $b$ and the prescription of any orthonormal basis there [F4]. Writing the normal fields in these frames, $$J(t)=\sum_{i=2}^n a_i(t)E_i(t),\qquad \tilde J(t)=\sum_{i=2}^n\tilde a_i(t)\tilde E_i(t),$$ the coefficients are smooth, and $a_i(0)=\tilde a_i(0)=0$ by $J(0)= \tilde J(0)=0$ [F3]. Define the transferred field $$X(t):=\sum_{i=2}^n\tilde a_i(t)E_i(t)$$ along $\gamma_1$. Then $X$ is continuous piecewise $C^1$, $X(0)=J(0)=0$ and $X(b)=J(b)$, because $a_i(b)=\tilde a_i(b)$ for $i\ge2$: in the chosen frames the normal vector $J(b)/\beta$ has coordinates $(0,1,0, \dots,0)$, and so does $\tilde J(b)/\beta$. Hypothesis 2 gives no conjugate point in $(0,b]$, so the index lemma [F1] applies on $[0,b]$ and yields $$I_{\gamma_1}(J,J)\le I_{\gamma_1}(X,X).$$ Now $X$ is normal to $\dot\gamma_1$, $|X(t)|^2=\sum_{i\ge2}\tilde a_i(t)^2 =|\tilde J(t)|^2$ and $|D_tX(t)|^2=\sum_{i\ge2}\tilde a_i'(t)^2 =|D_t\tilde J(t)|^2$ whenever both sides are evaluated, because the frames are orthonormal [F4]. At each $t$ where $X(t)\ne0$, hypothesis 1 applied to the normal vectors $X(t)$ and $\tilde J(t)$ gives $$\sec_{M_1}\bigl(X(t)\wedge\dot\gamma_1(t)\bigr) \ge\sec_{M_2}\bigl(\tilde J(t)\wedge\dot\gamma_2(t)\bigr),$$ and at points where $X(t)=0$ the curvature term of $I_{\gamma_1}(X,X)$ vanishes by [F6]. Multiplying by the common value $|X(t)|^2=|\tilde J(t)|^2$ and integrating, $$I_{\gamma_1}(X,X) =\int_0^b\Bigl(|D_tX|^2-\operatorname{Rm}_{M_1}(X,\dot\gamma_1, \dot\gamma_1,X)\Bigr)dt \le\int_0^b\Bigl(|D_t\tilde J|^2-\operatorname{Rm}_{M_2}(\tilde J, \dot\gamma_2,\dot\gamma_2,\tilde J)\Bigr)dt =I_{\gamma_2}(\tilde J,\tilde J),$$ the last equality being the definition of the index form for the geodesic $\gamma_2$ [F2]. Chaining the two inequalities proves the claim. [F1, F2, F4, F6, A1, given]

2.1 Logarithmic derivatives of the squared norms. [F2, F3, F5, F7, step 1.1, given]
Put $u:=|J_1|^2$ and $\tilde u:=|J_2|^2$ on $[0,T]$, and let $$b_0:=\sup\bigl\{t\in(0,T]:\tilde u(s)>0\text{ for all }s\in(0,t)\bigr\}.$$ By [F7], $J_2(t)=tD_tJ_2(0)+O(t^2)$ and hence $\tilde u(t)=t^2|D_tJ_2(0)|^2+O(t^3)=a^2t^2(1+O(t))$, so $\tilde u>0$ on some $(0,\varepsilon)$ and $b_0>0$; the same expansion holds for $u$. By hypothesis 2 and [F5], $u(t)>0$ for every $t\in(0,T]$. Let $0<b<b_0$ and consider the normalized fields $$J_1^b:=\frac{J_1}{|J_1(b)|},\qquad J_2^b:=\frac{J_2}{|J_2(b)|};$$ these are normal Jacobi fields [F3] vanishing at $0$ and of unit norm at $b$, and the index comparison of step 1.1 gives $I_{\gamma_1}(J_1^b,J_1^b)\le I_{\gamma_2}(J_2^b,J_2^b)$. Since $J_1^b$ and $J_2^b$ are Jacobi fields, [F2] turns their index forms into boundary terms, $$I_{\gamma_i}(J_i^b,J_i^b) =\Bigl[g\bigl(D_tJ_i^b,J_i^b\bigr)\Bigr]_0^b =\frac{\langle D_tJ_i(b),J_i(b)\rangle}{|J_i(b)|^2} =\frac{u_i'(b)}{2u_i(b)},$$ where $u_1=u$, $u_2=\tilde u$ and the vanishing at $0$ removed the lower boundary term. Multiplying the index inequality by $2$ gives $$\bigl(\log\tilde u\bigr)'(b)\ge\bigl(\log u\bigr)'(b)$$ for every $b\in(0,b_0)$, so $\tilde u/u$ is nondecreasing on $(0,b_0)$. Finally the Taylor expansions give $$\frac{\tilde u(t)}{u(t)}\longrightarrow \frac{a^2}{a^2}=1\qquad(t\downarrow0),$$ and therefore $\tilde u(t)\ge u(t)$ for all $t\in(0,b_0)$. [F2, F3, F5, F7, step 1.1, given]

3.1 The bootstrap and the conclusion. [step 2.1, F5, F7, given]
Suppose $b_0<T$. Both $u$ and $\tilde u$ are continuous, so the inequality $\tilde u\ge u$ on $(0,b_0)$ passes to the limit $t\uparrow b_0$: $\tilde u(b_0)\ge u(b_0)>0$, the strict positivity holding by hypothesis 2 and [F5] because $b_0\le T$. By continuity of $\tilde u$ there is $\delta>0$ with $\tilde u>0$ on $(0,b_0+\delta)$ and $b_0+\delta<T$, which contradicts the definition of $b_0$ as a supremum. Hence $b_0=T$. The inequality $\tilde u\ge u$ holds on $(0,T)$ and extends to $T$ by continuity, where $u(T)>0$; thus $\tilde u>0$ on $(0,T]$, and $$|J_1(t)|^2=u(t)\le\tilde u(t)=|J_2(t)|^2\qquad(0\le t\le T).$$ Taking square roots gives $|J_1(t)|\le|J_2(t)|$ on $[0,T]$, and $\tilde u>0$ on $(0,T]$ says exactly that $J_2$ has no zero there. The excluded endpoint $t=0$ is the common zero of both fields, and the first zero of $J_1$, excluded by hypothesis 2, is the point past which no comparison is asserted. [step 2.1, F5, F7, given] ∎

## Source locator

Datar Theorem 25.3.1 (printed p.188) states the theorem in this two-manifold form with the pointwise sectional hypothesis, and the proof in §26.2 (printed pp.195–197) is the index comparison lemma plus the logarithmic-derivative and $b_0$-bootstrap argument reproduced above. Eschenburg §3 states `Rauch I` (printed p.13) with the eigenvalue form $\lambda_-(R_1)\ge\lambda_+(R_2)$ of the same hypothesis and derives it from the Riccati comparison of Theorem 3.1; the norm conclusion and the `up to the first zero of $J_1$` restriction agree with the statement above. The proof here uses the published in-library index lemma and the in-run radial-tensor invertibility supplier.
