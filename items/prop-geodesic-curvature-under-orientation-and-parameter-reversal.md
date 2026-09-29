---
id: prop-geodesic-curvature-under-orientation-and-parameter-reversal
kind: proposition
title: Signs of geodesic curvature under reversals
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
justified_by: []
landmark: false
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
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed pp. 163–164 (PDF pp. 179–180), lines 6421–6431: signed curvature is the normal component of covariant acceleration and unit-speed acceleration is perpendicular to the tangent. The orientation and parameter reversal identities are derived directly from this definition."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2 opening, PDF p. 16, lines 480–497: signed geodesic curvature of a smooth unit-speed curve is the normal component of covariant acceleration. The orientation and parameter reversal identities are derived directly from this definition."
---

## Statement

Let $(M,g,J)$ be an oriented Riemannian surface and let
$\gamma:I\to M$ be a regular $C^2$ unit-speed curve on an interval $I$ with
nonempty interior. Write $k_{J,\gamma}$ for its signed geodesic curvature.
Reversing the surface orientation replaces $J$ by $-J$, and for every
$s\in I$ gives
$$
k_{-J,\gamma}(s)=-k_{J,\gamma}(s).
$$
Define $I^{\mathrm{rev}}=-I$ and
$\gamma^{\mathrm{rev}}(t)=\gamma(-t)$ for $t\in I^{\mathrm{rev}}$. For every
$t\in I^{\mathrm{rev}}$, reversing the curve parameter with $J$ fixed gives
$$
k_{J,\gamma^{\mathrm{rev}}}(t)=-k_{J,\gamma}(-t),
$$
while reversing both the surface orientation and curve parameter gives
$$
k_{-J,\gamma^{\mathrm{rev}}}(t)=k_{J,\gamma}(-t).
$$
At included endpoints, use one-sided derivatives.

## Facts & Assumptions

**Given:** An oriented Riemannian surface $(M,g,J)$ and a regular $C^2$ unit-speed curve $\gamma:I\to M$ on an interval with nonempty interior. Its parameter reversal is $\gamma^{\mathrm{rev}}: -I\to M$, $\gamma^{\mathrm{rev}}(t)=\gamma(-t)$.

[F1] In a chart, the covariant acceleration has components $$ A^k(t)=\frac{d^2(x^k\circ\gamma)}{dt^2}(t)+\sum_{i,j=1}^2\Gamma^k{}_{ij}(\gamma(t))\frac{d(x^i\circ\gamma)}{dt}(t)\frac{d(x^j\circ\gamma)}{dt}(t), $$ and these define $A_\gamma=\nabla_TT$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F2] Signed geodesic curvature is specified by $A_\gamma=k_gJT$ and $k_g=g(A_\gamma,JT)$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F3] Reversing the surface orientation replaces the positive quarter-turn $J$ by $-J$ ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

## Proof

**Proof technique:** Compare the coordinate acceleration and the signed normal coefficient after each reversal.

1.1 Fix $s\in I$. The metric, curve, and Levi–Civita connection are unchanged when the surface orientation is reversed; by [F3] the quarter-turn becomes $-J$. By [F1] and [F2], $$ k_{-J,\gamma}(s)=g(A_\gamma(s),(-J)T(s))=-g(A_\gamma(s),JT(s))=-k_{J,\gamma}(s). $$ This proves the surface-orientation reversal identity pointwise, including when the curvature is zero. [F1, F2, F3]

1.2 Fix $t\in -I$, and choose a chart containing $\gamma(-t)$. In its coordinates write $x(s)=x\circ\gamma(s)$ and $\bar x(t)=x\circ\gamma^{\mathrm{rev}}(t)=x(-t)$. Then $\dot{\bar x}^{i}(t)=-\dot x^{i}(-t)$ and $\ddot{\bar x}^{k}(t)=\ddot x^{k}(-t)$. Substitution into [F1]'s coordinate formula for covariant acceleration gives $$ \bar A^{k}(t)=\ddot x^{k}(-t)+\Gamma^{k}{}_{ij}(x(-t))\dot x^{i}(-t)\dot x^{j}(-t)=A_\gamma^{k}(-t), $$ because the two velocity signs cancel in the Christoffel term. The reversed unit tangent is $\bar T(t)=-T(-t)$, so [F2] yields $$ k_{J,\gamma^{\mathrm{rev}}}(t)=g(A_\gamma(-t),-JT(-t))=-k_{J,\gamma}(-t). $$ The coordinate calculation and inner product also hold with one-sided derivatives at included endpoints. [F1, F2]

2.1 For both reversals, the acceleration in step 1.2 remains $A_\gamma(-t)$, while the new normal is $(-J)(-T(-t))=JT(-t)$. Hence $$ k_{-J,\gamma^{\mathrm{rev}}}(t)=g(A_\gamma(-t),JT(-t))=k_{J,\gamma}(-t). $$ Thus the two sign changes cancel. The calculations are pointwise and use no division, so zero curvature is included. The curve and both reversal maps are supplied explicitly; no choice is used. [F1, F2, F3, step 1.2] ∎
