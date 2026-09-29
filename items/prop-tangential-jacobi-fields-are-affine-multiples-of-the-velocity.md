---
id: prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity
kind: proposition
title: Tangential jacobi fields are affine multiples of the velocity
status: draft
origin: pipeline
deps:
  - cor-zero-derivative-implies-constant
  - def-covariant-derivative-along-a-curve
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-levi-civita-connection
  - def-riemannian-metric-and-riemannian-manifold
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - prop-curvature-is-skew-in-its-first-two-arguments
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
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
      locator: "The discussion of trivial Jacobi fields and Lemma 10.6 with proof, printed pp.176-177 (PDF labels P192-193)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 22, Remark 22.1.2, Definition 22.1.3, Proposition 22.1.4 and proof, printed pp.160-161 (PDF labels P167-168)"
---

## Statement

Let $(M,g)$ be a Riemannian manifold, let $I\subseteq\mathbb R$ be an
interval with nonempty interior, let $\gamma:I\to M$ be an affinely
parametrized geodesic of the Levi-Civita connection, and let
$f:I\to\mathbb R$ be smooth. If $\gamma$ is nonconstant, then the tangential
field $J(t)=f(t)\dot\gamma(t)$ is a Jacobi field if and only if there are
constants $a,b\in\mathbb R$ such that $f(t)=at+b$ for every $t\in I$. If
$\gamma$ is constant, then $J\equiv0$ is Jacobi for every smooth $f$, so no
affine condition on $f$ is required. No axiom of choice is assumed or used.

## Facts & Assumptions

**Given:** The Riemannian manifold, nondegenerate interval, affine Levi-Civita geodesic, and smooth scalar function in the statement.

[F1] For $T=\dot\gamma$, the geodesic equation is $D_tT=0$, including the one-sided interpretation at included endpoints ([[def-geodesic-of-an-affine-connection]]).

[F2] Along the curve, $D_t(hV)=h'V+hD_tV$ for a smooth scalar $h$ and a smooth section $V$ ([[def-covariant-derivative-along-a-curve]]).

[F3] The Jacobi equation is $$D_t^2J+R(J,T)T=0,$$ with the curvature convention and one-sided endpoint interpretation in [[def-jacobi-field]].

[F4] Curvature is $C^\infty$-linear in its first slot and skew in its first two slots. In particular, $R(fT,T)T=fR(T,T)T=0$ ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]], [[prop-curvature-is-skew-in-its-first-two-arguments]]).

[F5] The Levi-Civita connection is metric compatible and $g$ is positive definite; therefore the speed proposition applies and $|T|$ is constant. Positive definiteness gives $|T(t)|=0$ exactly when $T(t)=0$ ([[def-levi-civita-connection]], [[def-riemannian-metric-and-riemannian-manifold]], [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F6] A continuous real function on an interval whose derivative vanishes at every interior point is constant on the whole interval ([[cor-zero-derivative-implies-constant]]).

## Proof

1.1 Put $T=\dot\gamma$. By [F1] and [F2], on the interior of $I$, $$D_t(fT)=f'T,\qquad D_t^2(fT)=f''T.$$ By [F4], $R(fT,T)T=0$. Hence the left side of the Jacobi equation for $J=fT$ is exactly $f''T$. [F1, F2, F4]

2.1 By [F5], the speed is constant. If it were zero, positive definiteness would give $T=0$ throughout. In a chart around each image point, the coordinate derivative is then zero, so the curve is locally constant; because $I$ is an interval it is connected, and $\gamma$ would be constant globally. This contradicts the hypothesis. Thus $T(t)\ne0$ throughout $I$, and [F3] with step 1.1 shows that $J$ is Jacobi exactly when $f''(t)=0$ at every interior point. If an endpoint is included, the same equation there follows by continuity and the one-sided derivative convention. [F3, F5, step 1.1]

3.1 Suppose $J$ is Jacobi. By step 2.1, $f''=0$ on the interior. The function $f'$ is continuous on $I$ and has zero derivative throughout its interior, so [F6] makes $f'$ a constant $a$ on all of $I$. The continuous function $h(t)=f(t)-at$ has zero derivative on the interior; a second application of [F6] gives a constant $b$ with $f(t)=at+b$ for every $t\in I$. [F6, step 2.1, algebra]

3.2 Conversely, if $f(t)=at+b$ on $I$, then $f''=0$ throughout its interior. Step 2.1 therefore gives that $J=fT$ is Jacobi, with the endpoint equation following by the same one-sided continuity argument. [F3, step 1.1, step 2.1, algebra]

4.1 If $\gamma$ is constant, then $T=0$ and $fT$ is the zero field for every smooth $f$; [F3] makes it Jacobi. This explains why the iff assertion is restricted to nonconstant geodesics. The argument makes no selections and uses no choice axiom. [F3, given] ∎
