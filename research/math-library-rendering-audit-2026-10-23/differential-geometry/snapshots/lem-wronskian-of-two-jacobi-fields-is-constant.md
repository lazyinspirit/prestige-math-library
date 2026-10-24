---
id: lem-wronskian-of-two-jacobi-fields-is-constant
kind: lemma
title: Wronskian of two jacobi fields is constant
status: published
origin: pipeline
deps:
  - cor-zero-derivative-implies-constant
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-jacobi-field
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-riemann-curvature-four-tensor
  - def-riemannian-metric-and-riemannian-manifold
  - thm-algebraic-symmetries-of-the-riemann-tensor
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
      locator: "Proposition 7.4, curvature symmetries, printed pp.121-123 (PDF labels P137-139); Theorem 10.2 and Jacobi-field definition, printed pp.175-176 (PDF labels P191-192)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 11.3.2, printed pp.75-76 (PDF labels P82-83); Definition 21.2.3, printed p.157 (PDF label P163)"
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
propagated through
[[thm-algebraic-symmetries-of-the-riemann-tensor]]. Let $(M,g)$ be a
Riemannian manifold, let $I$ be an interval with nonempty interior, let
$\gamma:I\to M$ be an affinely parametrized geodesic, and let $J,K$ be smooth
Jacobi fields along $\gamma$. Then
$$W(t):=g(D_tJ(t),K(t))-g(J(t),D_tK(t))$$
is constant on $I$. No completeness or unit-speed assumption is required.
Included endpoints use the one-sided covariant derivatives in
[[def-covariant-derivative-along-a-curve]] and
[[def-jacobi-field]]. Constant geodesics are included.

## Facts & Assumptions

**Given:** The inherited assumption is $\mathrm{AC}_\omega$; $I$ is an interval with nonempty interior; $\gamma$ is an affinely parametrized geodesic; and $J,K$ are Jacobi fields along it.

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice ([[def-countable-choice]]).

[F1] Each Jacobi field satisfies
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0,$$
with the curvature sign fixed in [[def-jacobi-field]].

[F2] The curvature four-tensor is
$$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$$
([[def-riemann-curvature-four-tensor]]).

[F3] Pair interchange holds:
$$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(Y,X,Z,W),\quad \operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z),\quad \operatorname{Rm}(X,Y,Z,W)=\operatorname{Rm}(Z,W,X,Y).$$
The symmetry theorem assumes and propagates $\mathrm{AC}_\omega$
([[thm-algebraic-symmetries-of-the-riemann-tensor]]).

[F4] The Levi-Civita connection is metric compatible, so along a curve
$$
\frac{d}{dt}g(U,V)=g(D_tU,V)+g(U,D_tV)
$$
for sections $U,V$ of the pulled-back tangent bundle; in a local frame this is the metric-compatibility identity applied to the connection along $\gamma$ ([[def-levi-civita-connection]], [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]], [[def-covariant-derivative-along-a-curve]]).

[F5] $D_t$ is the covariant derivative along the given curve; it is defined for
intervals with nonempty interior, with one-sided values at included endpoints
([[def-covariant-derivative-along-a-curve]]).

[F6] A continuous real function on an interval whose derivative vanishes at
every interior point is constant on the whole interval
([[cor-zero-derivative-implies-constant]]).

[F7] $g$ is a symmetric inner product on each tangent space
([[def-riemannian-metric-and-riemannian-manifold]]).

## Proof

1.1 On the interior of $I$, apply [F4] to both terms of $W$; the mixed terms cancel and give $W'=g(D_t^2J,K)-g(J,D_t^2K)$. The fields and connection are smooth, so $W$ is continuous on $I$ and differentiable in its interior. [F4, F5]

2.1 Put $T=\dot\gamma$. By [F1], $W'=-g(R(J,T)T,K)+g(J,R(K,T)T)=-\operatorname{Rm}(J,T,T,K)+\operatorname{Rm}(K,T,T,J)$, where [F7] reverses the metric arguments in the second term. Pair interchange and the two skew symmetries [F3] give $\operatorname{Rm}(J,T,T,K)=\operatorname{Rm}(T,K,J,T)=-\operatorname{Rm}(T,K,T,J)=\operatorname{Rm}(K,T,T,J)$. Thus $W'=0$. [A1, F1, F2, F3, F7, step 1.1]

3.1 By step 1.1, $W$ is continuous on $I$; step 2.1 gives zero derivative at every interior point. The interval form of [F6] therefore makes $W$ constant on all of $I$, including any included endpoints. This also covers a constant geodesic, for which $T=0$ and the curvature terms vanish. Exactly $\mathrm{AC}_\omega$ is inherited through [A1] and [F3]; the pointwise differentiation and scalar constancy argument make no further choice and use no full Axiom of Choice. The statement is not an iff claim. [A1, F3, F6, step 1.1, step 2.1] ∎
