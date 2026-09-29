---
id: ex-no-conjugate-points-in-nonpositive-constant-curvature
kind: example
title: No conjugate points in nonpositive constant curvature
status: draft
origin: pipeline
deps:
  - cor-second-derivative-characterises-convexity
  - cor-zero-derivative-implies-constant
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-convex-concave-and-midpoint-convex-functions
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-riemannian-metric-and-riemannian-manifold
  - prop-curvature-tensor-of-constant-sectional-curvature
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-algebraic-symmetries-of-the-riemann-tensor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, Jacobi fields and conjugate points in constant curvature, printed pp.173–190; the flat and hyperbolic model cases have no conjugate points."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§23.3, conjugate points and the index form, printed pp.165–169; Lecture 24, Proposition 24.1.1 on Jacobi fields in space forms, printed pp.174–175."
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§2, Jacobi fields in constant curvature, PDF labels P4–P8; the nonpositive curvature model has nonvanishing sine-type solutions away from the base point."
---

## Example

Assume exactly $\mathrm{AC}_\omega$ through the declared dependencies. Let
$(M,g)$ be a finite-dimensional Riemannian manifold without boundary of
constant sectional curvature $K\le0$, let $I\subseteq\mathbb R$ be an interval
with nonempty interior, and let $\gamma:I\to M$ be a nonconstant affinely
parametrized geodesic. Then for all $a<b$ in $I$ the points $\gamma(a)$ and
$\gamma(b)$ are not conjugate along $\gamma|_{[a,b]}$: the real vector space
of Jacobi fields along $\gamma|_{[a,b]}$ vanishing at both endpoints is
$\{0\}$. So no pair of distinct times of $\gamma$ is joined by a vanishing
Jacobi field, and no positive multiplicity occurs along $\gamma$.

## Facts & Assumptions

**Given:** The constant-curvature manifold $(M,g)$ with $K\le0$, the interval
$I$, the nonconstant affinely parametrized geodesic $\gamma$, and a
nondegenerate subinterval $[a,b]\subseteq I$ with a Jacobi field $J$ along
$\gamma$ satisfying $J(a)=J(b)=0$.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ of
[[def-countable-choice]]. It is inherited through the curvature and Riemann
tensor interfaces ([[prop-curvature-tensor-of-constant-sectional-curvature]],
[[thm-algebraic-symmetries-of-the-riemann-tensor]]). The direct computation
below uses no further choice, and no full Axiom of Choice is assumed.

[F1] Conjugacy along a segment and vanishing spaces: $\gamma(a)$ and
$\gamma(b)$ are conjugate along $\gamma|_{[a,b]}$ exactly when some nonzero
Jacobi field along the segment vanishes at both endpoints, and the multiplicity
is the dimension of that space; for a constant geodesic the space is $\{0\}$
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F2] A Jacobi field satisfies $D_t^2J+R(J,T)T=0$ on the interval, with
one-sided derivatives at an included endpoint
([[def-jacobi-field]], [[def-covariant-derivative-along-a-curve]]).

[F3] An affinely parametrized geodesic satisfies $D_tT=0$
([[def-geodesic-of-an-affine-connection]]). For a geodesic of a
metric-compatible connection the quantity $g(T,T)=|\dot\gamma|^2$ and the speed
are constant on $I$ ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F4] Levi-Civita metric compatibility, expressed in a local frame with metric
matrix $H$ and connection matrix $B$, gives $H'=B^{\mathsf T}H+HB$; the
along-curve frame formula is $D_t(eu)=e(u'+Bu)$. Hence for fields $U,V$ along
$\gamma$ the product rule
$$(g(U,V))'=g(D_tU,V)+g(U,D_tV)$$
holds ([[def-levi-civita-connection]],
[[def-metric-compatible-connection-on-a-riemannian-vector-bundle]],
[[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]],
[[def-covariant-derivative-along-a-curve]]).

[F5] Field quantities are continuous up to included endpoints: a smooth field
along the closed segment and the smooth metric give continuous functions
$t\mapsto g(U(t),V(t))$ there, with the one-sided endpoint convention of
[[def-covariant-derivative-along-a-curve]], and $g$ is a smooth symmetric
bilinear positive-definite tensor, so $|U|^2=g(U,U)\ge0$ with equality only for
$U=0$ ([[def-riemannian-metric-and-riemannian-manifold]]).

[F6] Under constant sectional curvature $K$ the curvature operator is
$$R(X,Y)Z=K\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$$
([[prop-curvature-tensor-of-constant-sectional-curvature]]).

[F7] The Riemann tensor is skew in its last two slots:
$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z)$, so
$\operatorname{Rm}(J,T,T,T)=0$
([[thm-algebraic-symmetries-of-the-riemann-tensor]]).

[F8] A continuous function on an interval whose derivative vanishes at every
interior point is constant; consequently two continuous functions with equal
interior derivatives differ by a constant
([[cor-zero-derivative-implies-constant]]).

[F9] A function twice differentiable on an open interval with nonnegative
second derivative there is convex, and convexity means the convex-combination
inequality for all weights in $[0,1]$
([[cor-second-derivative-characterises-convexity]],
[[def-convex-concave-and-midpoint-convex-functions]]).

## Verification

**Proof technique:** show that every endpoint-vanishing Jacobi field is normal,
then apply convexity to the squared norm of a normal Jacobi field.

1.1 For every Jacobi field $J$ along $\gamma$ the function $\varphi=g(J,T)$ is affine on $[a,b]$. [F2, F3, F4, F7, F8]
By [F3] and [F4], $\varphi'=g(D_tJ,T)+g(J,D_tT)=g(D_tJ,T)$, and then $\varphi''=g(D_t^2J,T)+g(D_tJ,D_tT)=g(D_t^2J,T)$. By the Jacobi equation [F2] and last-pair skewness [F7], $\varphi''=-g(R(J,T)T,T)=-\operatorname{Rm}(J,T,T,T)=0$ at every interior point. Since $\varphi'$ is continuous on $[a,b]$ with vanishing derivative inside, [F8] makes $\varphi'$ constant, and a further application of [F8] makes $\varphi$ affine: $\varphi(t)=\alpha t+\beta$.

1.2 Let $J$ be a normal Jacobi field along $\gamma$, so $g(J,T)=0$ on $[a,b]$, and put $u(t)=|J(t)|^2$. Then $D_t^2J=-K c^2 J$ and $u''=-2Kc^2u+2|D_tJ|^2$ on $(a,b)$, where $c^2=g(T,T)$ is the constant squared speed. [F2, F3, F4, F5, F6]
The curvature term of the Jacobi equation is $R(J,T)T=K(g(T,T)J-g(J,T)T)=Kc^2J$ by [F6] and normality, so [F2] gives $D_t^2J=-Kc^2J$. The product rule [F4] gives $u'=2g(D_tJ,J)$ and then $u''=2g(D_t^2J,J)+2g(D_tJ,D_tJ)=-2Kc^2u+2|D_tJ|^2$, where $c^2=g(T,T)$ is constant by [F3] and both $u$ and $|D_tJ|^2$ are continuous up to the endpoints by [F5].

2.1 Every Jacobi field $J$ with $J(a)=J(b)=0$ is normal on $[a,b]$. [given, step 1.1]
By step 1.1, $\varphi=g(J,T)$ is affine; the endpoint hypotheses give $\varphi(a)=g(0,T(a))=0$ and $\varphi(b)=g(0,T(b))=0$. An affine function vanishing at the two distinct points $a<b$ is identically zero: writing $\varphi(t)=\alpha t+\beta$, the two equations give $\alpha(b-a)=0$, hence $\alpha=\beta=0$. Therefore $g(J,T)=0$ throughout $[a,b]$.

2.2 For a normal Jacobi field $J$ along $\gamma$ with $J(a)=J(b)=0$, the function $u=|J|^2$ satisfies $u''\ge0$ on $(a,b)$ because $K\le0$; hence $u$ is convex on $(a,b)$ by [F9], and $u\ge0$ on $[a,b]$ with $u(a)=u(b)=0$ and $u$ continuous on $[a,b]$. [F5, F9, given, step 1.2]
By step 1.2, $u''=-2Kc^2u+2|D_tJ|^2$; since $K\le0$ and $u\ge0$ the first term is nonnegative, and the second is nonnegative as well, so $u''\ge0$ on $(a,b)$. [F9] therefore makes $u$ convex on the open interval. Nonnegativity and the endpoint values come from [F5] and the hypotheses, and continuity up to the endpoints is [F5].

3.1 If $J$ is a Jacobi field along $\gamma$ with $J(a)=J(b)=0$, then $J$ vanishes identically on $[a,b]$. [F5, step 2.1, step 2.2]
By step 2.1 such a $J$ is normal, so step 2.2 applies to $u=|J|^2$. Fix $t\in(a,b)$. For $a<t_1<t<t_2<b$ convexity gives $u(t)\le\lambda u(t_1)+(1-\lambda)u(t_2)$ with $\lambda=(t_2-t)/(t_2-t_1)\in(0,1)$. Letting $t_1\downarrow a$ and $t_2\uparrow b$ and using the endpoint values and continuity gives $u(t)\le0$; with $u(t)\ge0$ this forces $u(t)=0$, and positive definiteness of $g$ gives $J(t)=0$. As $t\in(a,b)$ was arbitrary, $J\equiv0$ on $[a,b]$, the endpoint values being given.

4.1 Consequently $\gamma(a)$ and $\gamma(b)$ are not conjugate along $\gamma|_{[a,b]}$ and no positive multiplicity occurs. [F1, given, step 3.1]
By step 3.1 the only Jacobi field along the segment vanishing at both endpoints is the zero field, so the vanishing space is $\{0\}$; by [F1] the endpoints are not conjugate along the segment, and the multiplicity, being defined only for a conjugate pair, does not arise. Since $a<b$ were arbitrary in $I$, no pair of distinct times of $\gamma$ is conjugate along the corresponding subsegment.

4.2 Boundary, degeneracy and choice audit. [A1, F1, F2, F5, step 1.1, step 2.1, step 2.2, step 3.1]
The subinterval $[a,b]$ is nondegenerate by hypothesis, and included endpoints carry the one-sided conventions of [F2] and [F5]. If $M$ is empty there is no geodesic; in dimension zero the only field is zero, so the vanishing space is $\{0\}$ by [F1]; in dimension one a field normal to $T$ vanishes, so step 2.1 already forces $J=0$. The constant-geodesic case is excluded by the hypothesis that $\gamma$ is nonconstant and would in any case be a non-conjugate case by the explicit clause of [F1]. The zero field is the only endpoint-vanishing Jacobi field, which is exactly the claim, and the case $K=0$ is included in the estimate $u''\ge0$; the argument never divides by $K$. The function $u$ is a squared length and is allowed to vanish on all of $[a,b]$; no strict convexity is asserted. Assumption [A1] is inherited from the curvature and Riemann-tensor suppliers, and no selection or countable family is used. The example proves the stated one-way non-conjugacy claim and asserts no converse.
$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173–190, develops Jacobi fields and conjugate points and treats the constant-curvature model solutions; Datar, *Lectures on Riemannian Geometry*, §23.3 (printed pp.165–169) and Lecture 24, Proposition 24.1.1 (printed pp.174–175), gives the space-form Jacobi classification; Eschenburg, *Comparison Theorems in Riemannian Geometry*, §2 (PDF labels P4–P8), records the model solutions in constant curvature. The convexity argument for the squared norm of a normal Jacobi field and the affineness of $g(J,\dot\gamma)$ are carried out above rather than quoted.
