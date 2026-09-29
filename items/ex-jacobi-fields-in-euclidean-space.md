---
id: ex-jacobi-fields-in-euclidean-space
kind: example
title: Jacobi fields in euclidean space
status: draft
origin: pipeline
deps:
  - cor-zero-derivative-implies-constant
  - def-covariant-derivative-along-a-curve
  - def-christoffel-symbols-of-an-affine-connection
  - def-derivative
  - def-euclidean-inner-product
  - def-interval
  - def-jacobi-field
  - def-vector-field-and-section-along-a-smooth-curve
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-criterion-for-a-riemannian-metric
  - prop-coordinate-formula-for-the-curvature-tensor
  - prop-coordinate-geodesic-equation
  - thm-algebra-of-derivatives
  - thm-coordinate-derivations-form-a-basis-of-the-tangent-space
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
      locator: "Chapter 5, Geodesics of the Model Spaces—Euclidean Space, printed p.81 / PDF labels P97–98, lines 3393–3399: constant metric coefficients, zero Christoffel symbols, Euclidean connection and straight geodesics."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 22, Example 22.1.1, printed p.160 / PDF label P167, lines 9120–9128: the affine-line Jacobi equation and affine solution claim."
---

## Example

For $n\ge0$, give $\mathbb R^n$ its standard Euclidean metric
$$g_{\mathrm E}=\sum_{i=1}^n dx^i\otimes dx^i.$$
Let $I\subseteq\mathbb R$ be a nondegenerate interval, choose $x,v\in\mathbb R^n$,
and set $\gamma(t)=x+tv$. In the standard Cartesian trivialization, a smooth
field $J$ along $\gamma$ is Jacobi if and only if there are constant vectors
$A,B\in\mathbb R^n$ such that
$$J(t)=A+tB\qquad(t\in I).$$
This includes the constant geodesic $v=0$ and the zero-dimensional case $n=0$.

## Facts & Assumptions

**Given:** The standard Euclidean metric on $\mathbb R^n$, a nondegenerate
interval $I$, and $x,v\in\mathbb R^n$ defining $\gamma(t)=x+tv$.

[F1] The standard Euclidean inner product is $\langle u,w\rangle=\sum_i u_iw_i$, so its global Cartesian metric matrix is $\delta_{ij}$; a smooth symmetric positive-definite coordinate matrix defines a Riemannian metric ([[def-euclidean-inner-product]], [[prop-coordinate-criterion-for-a-riemannian-metric]]).

[F2] In a smooth chart, the coordinate derivations $\partial_1|_p,\ldots,\partial_n|_p$ form a basis of $T_pM$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[F3] The connection coefficients are defined by $\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k$, and the Levi-Civita symbols satisfy $\Gamma^k{}_{ij}=\frac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[def-christoffel-symbols-of-an-affine-connection]], [[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F4] In coordinates, $R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$ ([[prop-coordinate-formula-for-the-curvature-tensor]]).

[F5] A smooth curve is geodesic exactly when $\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0$ in its coordinates ([[prop-coordinate-geodesic-equation]]).

[F6] A smooth vector field along a smooth curve has smooth coefficient functions in a pulled-back frame ([[def-vector-field-and-section-along-a-smooth-curve]]).

[F7] Along the curve, $D_tV=(\gamma^*\nabla)_{\partial/\partial t}V$ and $D_t(fV)=f'V+fD_tV$ ([[def-covariant-derivative-along-a-curve]]).

[F8] The Jacobi equation is $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ ([[def-jacobi-field]]).

[F9] A continuous real function on an order-convex interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[F10] Sums and scalar multiples obey the derivative sum and scalar rules ([[thm-algebra-of-derivatives]]); from the difference quotient, the identity function has derivative $1$ and a constant function has derivative $0$ ([[def-derivative]]).

[F11] Every interval is order-convex, and a nondegenerate interval has at least two points ([[def-interval]]).

## Proof

**Proof technique:** Cartesian coordinates and the componentwise Jacobi equation.

1.1 In the global Cartesian chart, [F1] gives the constant metric matrix $g_{ij}=\delta_{ij}$, which is smooth, symmetric, and positive definite. All coordinate derivatives $\partial_i g_{j\ell}$ vanish, so [F3] gives $\Gamma^k{}_{ij}=0$ identically. [F1, F3]

1.2 Write an arbitrary smooth field as $J(t)=\sum_i j_i(t)\partial_i|_{\gamma(t)}$ using [F6]. By the pullback-connection definition in [F7] and the Christoffel definition in [F3],
$$D_t\partial_i=\sum_j\dot\gamma^j\nabla_{\partial_j}\partial_i=\sum_{j,k}\dot\gamma^j\Gamma^k{}_{ji}\partial_k=0,$$
because step 1.1 gives every $\Gamma^k{}_{ji}=0$. The product rule in [F7], applied twice, gives $D_tJ=\sum_i j_i'(t)\partial_i$ and $D_t^2J=\sum_i j_i''(t)\partial_i$. [F3, F6, F7, step 1.1]

2.1 The coordinate functions of $\gamma$ are $x^i+tv^i$, hence $\ddot\gamma^i=0$; [F5] and step 1.1 show that $\gamma$ is an affinely parametrized geodesic. Substitution of $\Gamma=0$ and its zero derivatives into [F4] gives every curvature component zero; [F2] then gives $R=0$. By step 1.2 and [F8], the Jacobi equation is therefore $\sum_i j_i''\partial_i=0$, and [F2] implies $j_i''=0$ for every coordinate on the interior of $I$. [F2, F4, F5, F8, step 1.1, step 1.2]

3.1 For each $i$, the function $j_i'$ is continuous on $I$ and has derivative $j_i''=0$ at every interior point, so [F9] makes it a constant $B_i$. By [F10], the continuous function $j_i(t)-B_it$ has derivative $j_i'(t)-B_i=0$ on the interior; another application of [F9] makes it a constant $A_i$. Thus $j_i(t)=A_i+tB_i$ throughout $I$, including any endpoints by continuity, and the component vectors give $J(t)=A+tB$. [F9, F10, F11, step 2.1]

3.2 Conversely, for any constant $A,B\in\mathbb R^n$, the field $J(t)=A+tB$ is smooth. Steps 1.1–1.2 and [F7] give $D_tJ=B$ in the constant coordinate frame, $D_t^2J=0$, and step 2.1 gives $R=0$; [F8] therefore makes $J$ Jacobi. [F7, F8, step 1.1, step 1.2, step 2.1]

4.1 If $n=0$, the tangent spaces and field contain only zero, represented by the unique $A=B=0$; if $n=1$, the same component calculation is scalar. The case $v=0$ is included because step 2.1 still gives a constant geodesic and step 1.2 allows arbitrary smooth coefficient functions; $A=0$, $B=0$, or $J=0$ need no exclusion. At included time endpoints all derivatives are one-sided and the affine formula extends by continuity. Only finitely many coordinates are considered, and the proof makes no choice; singleton intervals are excluded by the nondegeneracy hypothesis. Steps 2.1, 3.1 and 3.2 prove both directions of the stated classification. [F2, F6, F7, F8, F11, step 1.2, step 2.1, step 3.1, step 3.2] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 5,
“Geodesics of the Model Spaces—Euclidean Space,” printed p.81 / PDF labels
P97–98, lines 3393–3399, states that the Euclidean metric has constant
coefficients, its Christoffel symbols vanish, and its geodesics are straight
lines. Datar, *Lectures on Riemannian Geometry*, Lecture 22, Example 22.1.1,
printed p.160 / PDF label P167, lines 9120–9128, states the component equation
$J''=0$ and the affine solution form but does not derive them; the proof above
supplies that calculation. Datar's immediately following statement that every
nonzero Jacobi field “has a unique zero” is not used: a nonzero constant affine
field has no zero, and in general the valid conclusion is at most one zero.
