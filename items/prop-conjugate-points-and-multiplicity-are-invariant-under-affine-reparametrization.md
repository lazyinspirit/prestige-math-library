---
id: prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization
kind: proposition
title: Conjugate points and multiplicity are invariant under affine reparametrization
status: published
origin: pipeline
deps:
  - def-jacobi-field
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-vector-field-and-section-along-a-smooth-curve
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-curvature-is-a-type-one-three-tensor
  - thm-chain-rule
  - def-linear-map
  - def-linear-isomorphism-and-invertible-linear-map
  - cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-dimension
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "Chapter 10, Conjugate Points, printed p.182 / PDF label P198, lines 7174–7184."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 22, §22.3, printed pp.163–164 / PDF labels P170–171, lines 9304–9314."
---

## Statement

Let $(M,g)$ be a finite-dimensional Riemannian manifold without boundary, let
$a<b$, and let $\gamma:[a,b]\to M$ be an affinely parametrized geodesic. Let
$c<d$ and let $\phi:[c,d]\to[a,b]$ be an affine bijection,
$\phi(s)=\lambda s+\mu$ with $\lambda\ne0$. Put
$\widetilde\gamma=\gamma\circ\phi$. Composition defines a real-linear
isomorphism
$$P_\phi:\mathcal K_\gamma(a,b)\longrightarrow\mathcal K_{\widetilde\gamma}(c,d),\qquad P_\phi(J)=J\circ\phi,$$
where $\mathcal K$ is the endpoint-vanishing Jacobi-field space from
[[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]. Thus the two
endpoint spaces have the same dimension: $\gamma(a)$ and $\gamma(b)$ are
conjugate along $\gamma$ if and only if $\widetilde\gamma(c)$ and
$\widetilde\gamma(d)$ are conjugate along $\widetilde\gamma$, and their
multiplicities agree whenever they are conjugate. If $\lambda<0$, the two
endpoints are exchanged. Constant geodesics and dimension zero are included.

## Facts & Assumptions

**Given:** The finite-dimensional Riemannian manifold, the geodesic segment,
and the affine bijection in the statement.

[F1] A smooth field $J$ is Jacobi exactly when
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$
throughout the interval ([[def-jacobi-field]]).

[F2] $\mathcal K_\gamma(a,b)$ consists of the Jacobi fields vanishing at both
endpoints; it is a finite-dimensional real vector space, conjugacy means it
contains a nonzero field, and multiplicity is its real dimension when the
endpoints are conjugate
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F3] A field along $\gamma$ is a smooth section of the pulled-back tangent
bundle; in a pulled-back frame it has smooth coefficient functions
([[def-vector-field-and-section-along-a-smooth-curve]]).

[F4] Composing an affinely parametrized geodesic with an affine parameter map
gives a geodesic ([[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]]).

[F5] In a local frame, if $V(t)=e(\gamma(t))v(t)$ and
$B(t)=\omega_{\gamma(t)}(\dot\gamma(t))$, then
$$D_tV=e(\gamma(t))(v'(t)+B(t)v(t))$$
([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F6] At each point, the curvature map on three tangent vectors is trilinear
([[thm-curvature-is-a-type-one-three-tensor]]).

[F7] For differentiable real functions, the derivative of a composite is the
product of the outer derivative and inner derivative ([[thm-chain-rule]]).

[F8] A function between real vector spaces is linear when it preserves every
linear combination ([[def-linear-map]]).

[F9] A linear map with a two-sided linear inverse is a linear isomorphism
([[def-linear-isomorphism-and-invertible-linear-map]]).

[F10] Isomorphic finite-dimensional real vector spaces have equal dimension
([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]).

[F11] Each tangent space of a smooth $n$-manifold is an $n$-dimensional real
vector space ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[F12] A vector space of dimension zero is the zero space
([[def-dimension]]).

## Proof

**Proof technique:** Pull fields back by the affine bijection and transform the
Jacobi equation in a local frame.

1.1 Define $\widetilde\gamma=\gamma\circ\phi$. Since $\phi$ is affine, [F4] makes $\widetilde\gamma$ a geodesic; by [F3], composing the smooth local-frame coefficients of a field $J$ with the smooth map $\phi$ gives a smooth field $J\circ\phi$ along it. The intervals are nondegenerate by $a<b$ and $c<d$. [F3, F4, F7, given]

1.2 Locally write $J(t)=e(\gamma(t))j(t)$ and $B(t)=\omega_{\gamma(t)}(\dot\gamma(t))$; then $\dot{\widetilde\gamma}=\lambda\dot\gamma\circ\phi$ and $\widetilde B(s)=\omega_{\gamma(\phi(s))}(\dot{\widetilde\gamma}(s))=\lambda B(\phi(s))$. The coefficient column becomes $j\circ\phi$, so the chain rule [F7] and frame formula [F5] give $D_s(J\circ\phi)=\lambda(D_tJ)\circ\phi$ and, applying it again, $D_s^2(J\circ\phi)=\lambda^2(D_t^2J)\circ\phi$. These local identities are intrinsic and hold at included endpoints with one-sided derivatives. [F5, F7, given, algebra]

2.1 The velocity scales by $\dot{\widetilde\gamma}=\lambda\dot\gamma\circ\phi$; trilinearity of curvature [F6] gives $R(J\circ\phi,\dot{\widetilde\gamma})\dot{\widetilde\gamma}=\lambda^2(R(J,\dot\gamma)\dot\gamma)\circ\phi$. Hence the full Jacobi operator of $J\circ\phi$ equals $\lambda^2(D_t^2J+R(J,\dot\gamma)\dot\gamma)\circ\phi$. By [F1], a Jacobi field pulls back to a Jacobi field; applying the same calculation to $\phi^{-1}$, whose slope is $1/\lambda$, proves the converse. [F1, F6, F7, step 1.2, algebra]

3.1 Since $\phi$ bijects the endpoints, $J$ vanishes at $a,b$ exactly when $J\circ\phi$ vanishes at $c,d$, even when $\lambda<0$ exchanges their order. Steps 1.1, 1.2, and 2.1 show $P_\phi$ maps the endpoint-vanishing Jacobi space to the other one with inverse pullback by $\phi^{-1}$; composition preserves every real linear combination, so [F8] makes $P_\phi$ linear and [F9] makes it a linear isomorphism. [F1, F2, F8, F9, step 1.1, step 1.2, step 2.1, given]

4.1 Both spaces are finite-dimensional by [F2], so their isomorphism gives equal dimensions by [F10]. Since $P_\phi$ and its inverse preserve nonzero fields, each space contains a nonzero Jacobi field exactly when the other does; [F2] then gives both directions of conjugacy and equality of multiplicities. If $\dim M=0$, [F11] and [F12] make every tangent fiber zero, so both endpoint spaces are zero; if $\gamma$ is constant in any dimension, [F2] gives the same conclusion. No choice principle is needed because $\phi^{-1}$ is explicit. [F2, F10, F11, F12, step 3.1, given] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10,
“Conjugate Points,” printed p.182 / PDF label P198, lines 7174–7184, defines
conjugacy along a specified segment and multiplicity as the dimension of its
endpoint-vanishing Jacobi-field space. Datar, *Lectures on Riemannian
Geometry*, Lecture 22, §22.3, printed pp.163–164 / PDF labels P170–171, lines
9304–9314, gives the same endpoint-space definition and notes symmetry under
reversal. Neither passage proves arbitrary nonzero affine reparametrization
invariance; the pullback and scaled-equation calculation above supplies that
claim, including multiplicity.
