---
id: ex-jacobi-fields-in-constant-sectional-curvature
kind: example
title: Jacobi fields in constant sectional curvature
status: published
origin: pipeline
deps:
  - cor-zero-derivative-implies-constant
  - def-constant-sectional-curvature-and-space-form
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-parallel-section-along-a-curve
  - prop-curvature-tensor-of-constant-sectional-curvature
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Lemma 10.8 and proof, printed pp.179–180 / PDF labels P195–196, lines 6974–7020."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 24, Proposition 24.1.1 and proof, printed pp.174–175 / PDF labels P181–182, lines 9810–9848; Datar assumes a complete space form."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Assume exactly $\mathrm{AC}_\omega$ through the declared constant-curvature
interface. Let $(M,g)$ be a finite-dimensional Riemannian manifold without boundary
of constant sectional curvature $K\in\mathbb R$, let $I\subseteq\mathbb R$ be a
nondegenerate interval containing $0$, and let
$\gamma:I\to M$ be a unit-speed affinely parametrized geodesic. Put
$T=\dot\gamma$ and define
$$
s_K(t)=\begin{cases}\sin(\sqrt K\,t)/\sqrt K,&K>0,\\ t,&K=0,\\ \sinh(\sqrt{-K}\,t)/\sqrt{-K},&K<0.\end{cases}
$$
Then the normal Jacobi fields $J$ with $J(0)=0$ are exactly
$$J(t)=s_K(t)E(t),$$
where $E$ is a unique parallel normal field along $\gamma$. The tangential
Jacobi fields are exactly
$$J(t)=(at+b)\dot\gamma(t),\qquad a,b\in\mathbb R.$$
No completeness is assumed. If an endpoint of $I$ is included, derivatives there
are one-sided.

## Facts & Assumptions

**Given:** The constant sectional curvature $K$, a nondegenerate interval $I$
containing $0$, and a supplied unit-speed affine geodesic $\gamma$ on $I$.

[A1] $\mathrm{AC}_\omega$ is countable choice. Its only role here is inherited
through the constant-sectional-curvature and curvature-tensor interfaces;
the coordinate computations and the unique extensions of supplied vectors use
no further choice, and no full AC is assumed ([[def-countable-choice]],
[[def-constant-sectional-curvature-and-space-form]],
[[prop-curvature-tensor-of-constant-sectional-curvature]]).

[F1] Constant sectional curvature $K$ means that every tangent two-plane has
sectional curvature $K$. In dimensions zero and one this predicate is vacuous
for every $K$ ([[def-constant-sectional-curvature-and-space-form]]).

[F2] Under this hypothesis, the curvature operator is
$$R(X,Y)Z=K\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$$
([[prop-curvature-tensor-of-constant-sectional-curvature]]).

[F3] A Jacobi field is a smooth field satisfying
$$D_t^2J+R(J,T)T=0$$
throughout the interval ([[def-jacobi-field]]).

[F4] The affine geodesic equation gives $D_tT=0$, and unit speed gives
$g(T,T)=1$ ([[def-geodesic-of-an-affine-connection]], given).

[F5] Levi-Civita metric compatibility, expressed in a local frame with metric
matrix $H$ and connection matrix $B$, gives $H'=B^{\mathsf T}H+HB$. The
along-curve frame formula is $D_t(eu)=e(u'+Bu)$, and covariant
differentiation also satisfies $D_t(fV)=f'V+fD_tV$. Therefore, for fields
$U,V$ along $\gamma$,
$$(g(U,V))'=g(D_tU,V)+g(U,D_tV).$$
([[def-levi-civita-connection]],
[[def-metric-compatible-connection-on-a-riemannian-vector-bundle]],
[[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]],
[[def-covariant-derivative-along-a-curve]])

[F6] Every supplied initial vector along $\gamma$ has a unique parallel
extension to all of $I$; a field is parallel when $D_tE=0$
([[thm-existence-and-uniqueness-of-parallel-sections]],
[[def-parallel-section-along-a-curve]]).

[F7] A continuous real function on an interval whose derivative vanishes at
every interior point is constant on that interval
([[cor-zero-derivative-implies-constant]]).

[F8] Initial value and covariant derivative at $0$ determine a unique Jacobi
field along all of $I$, including when $0$ is an included endpoint
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F9] Since $\gamma$ has unit speed it is nonconstant, and for every smooth
$f:I\to\mathbb R$, $fT$ is Jacobi exactly when $f(t)=at+b$ for constants
$a,b$ ([[prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity]]).

## Verification

**Proof technique:** parallel transport reduces the normal Jacobi equation to a scalar initial-value equation.

1.1 Direct differentiation in the three sign cases gives $s_K''+Ks_K=0$, $s_K(0)=0$, and $s_K'(0)=1$ on the full interval, regardless of later zeros of $s_K$. [given, algebra]

1.2 Unit speed makes $\gamma$ nonconstant, so [F9] proves both directions of the tangential classification: a tangential Jacobi field has affine coefficient and every affine coefficient gives a Jacobi field. [F9, given]

2.1 For any parallel normal $E$, the product rule gives $D_t(s_KE)=s_K'E$ and $D_t^2(s_KE)=s_K''E$; [F2] and [F4] give $R(s_KE,T)T=K(g(T,T)s_KE-g(s_KE,T)T)=Ks_KE$, so [F3] and step 1.1 make it Jacobi, normal, and zero at $0$. [F2, F3, F4, F5, F6, step 1.1]

3.1 If $J$ is normal Jacobi with $J(0)=0$, differentiating $g(J,T)=0$ at $0$ using [F5] and [F4] shows $W=D_tJ(0)\perp T(0)$; extend $W$ uniquely to a parallel $E$ by [F6]. Then $h=g(E,T)$ has zero derivative by [F5], is zero at $0$, and so vanishes on $I$ by [F7]. Since [F6] gives $E(0)=W$, steps 1.1 and 2.1 give $(s_KE)(0)=0$ and $D_t(s_KE)(0)=s_K'(0)E(0)=W$. Jacobi initial-data uniqueness [F8] now gives $J=s_KE$ on all of $I$, and [F6] makes $E$ unique. [F4, F5, F6, F7, F8, step 1.1, step 2.1]

4.1 A supplied geodesic rules out empty $M$; dimension zero has no unit-speed geodesic, and in dimension one the normal subspace is zero, so the normal case is $J=E=0$ while the tangential result remains valid. [F1] records the vacuous low-dimensional curvature convention. The interval is nondegenerate; included endpoints use one-sided derivatives; $W=0$ gives $E=J=0$; the zero tangential field has $a=b=0$; and constant geodesics are excluded by unit speed. The three signs of $K$ are covered in step 1.1. Exactly the inherited $\mathrm{AC}_\omega$ of [A1] is assumed, and no choice beyond unique extension of a supplied vector is made. [A1, F1, F3, F4, F6, F8, F9, step 1.1, step 3.1, step 1.2] ∎

## Source notes

Lee, *Riemannian Manifolds*, Lemma 10.8 and proof, printed pp.179–180 / PDF
labels P195–196, lines 6974–7020, derives the normal equation from the
constant-curvature tensor formula and solves the scalar equation. His proof
uses the dimension of the normal Jacobi space to conclude exhaustiveness; the
argument above instead matches the initial derivative and uses the library's
Jacobi initial-value uniqueness theorem. Datar, *Lectures on Riemannian
Geometry*, Proposition 24.1.1 and proof, printed pp.174–175 / PDF labels
P181–182, lines 9810–9848, gives the same normal-field formula for a complete
space form. Completeness is part of Datar's setting and is not used here. The
tangential branch is supplied by the separately cited library proposition.
