---
id: prop-angle-derivative-formula-for-geodesic-curvature
kind: proposition
title: Tangent-angle formula for geodesic curvature
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-connection-one-form-of-an-oriented-orthonormal-frame
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
justified_by: []
landmark: false
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
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, Theorem 9.3 proof, equations (9.3)–(9.4), printed pp. 164–165 (PDF pp. 180–181), lines 6466–6494. Lee uses ω_std(X)=g(E₁,∇_X E₂)=−ω(X), derives κ_N=θ′−ω_std(γ˙), and identifies N=JT."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, Lemma 2.1.2, printed p. 12 (PDF p. 19), lines 604–629. Datar uses ω_std(X)=⟨E₁,∇_X E₂⟩=−ω(X), derives k_g=θ′−ω_std(γ˙), and notes the Euclidean case ω_std=0."
---

## Statement

Let $(M,g,J)$ be an oriented Riemannian surface, $U\subseteq M$ an open set
with a specified smooth positively oriented $g$-orthonormal frame
$(E_1,E_2)$, and $\omega(X)=g(\nabla_XE_1,E_2)$ the connection one-form in
this convention. For a regular $C^2$ unit-speed curve $\gamma:I\to U$ on
an interval $I$ with nonempty interior, and any connected subinterval on which $T=\dot\gamma=\cos\theta\,E_1+
\sin\theta\,E_2$ for a $C^1$ angle lift $\theta$, the signed geodesic
curvature satisfies
$$
k_g=\theta'+\omega(T),
$$
with one-sided derivatives at included endpoints.

## Facts & Assumptions

**Given:** The oriented Riemannian surface, its Levi–Civita connection, an open set $U$ with a specified positive orthonormal frame, and a regular $C^2$ unit-speed curve in $U$ on a parameter interval with nonempty interior. On the connected subinterval under consideration, a $C^1$ real angle lift $\theta$ satisfying $T=\cos\theta E_1+\sin\theta E_2$ is supplied.

[F1] For the chosen frame and sign convention, $\nabla_XE_1=\omega(X)E_2$ and $\nabla_XE_2=-\omega(X)E_1$ ([[def-connection-one-form-of-an-oriented-orthonormal-frame]]).

[F2] The covariant acceleration of the curve is $A_\gamma=\nabla_TT$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F3] In the positive orthonormal frame, $JE_1=E_2$ and $JE_2=-E_1$ ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F4] The signed geodesic curvature is specified by $A_\gamma=k_gJT$ and $k_g=g(A_\gamma,JT)$ ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

## Proof

**Proof technique:** Differentiate the tangent's frame expansion and take its coefficient along $JT$.

1.1 Along the curve, the product rule and [F1] give $\nabla_TT=-\theta'\sin\theta\,E_1+\cos\theta\,\omega(T)E_2+\theta'\cos\theta\,E_2-\sin\theta\,\omega(T)E_1=(\theta'+\omega(T))(-\sin\theta\,E_1+\cos\theta\,E_2)$. By [F3], the final vector in parentheses is $JT$. [F1, F3, given]

2.1 By [F2] and [F4], $k_g=g(\nabla_TT,JT)$. By [F3] and step 1.1, $JT=-\sin\theta\,E_1+\cos\theta\,E_2$, whose squared norm is $\sin^2\theta+\cos^2\theta=1$. Step 1.1 therefore gives $k_g=\theta'+\omega(T)$. If $\widetilde\theta$ is another angle lift on the same connected subinterval, then $\widetilde\theta-\theta$ is continuous and takes values in $2\pi\mathbb Z$, so it is constant and has zero derivative. Thus the formula is lift-independent. The same computation uses one-sided derivatives at included endpoints. If $k_g=0$, the equality still holds without division; if no curve is present, the universal assertion is vacuous. The argument uses only the supplied frame, curve and local lift, so it makes no choice from any nonempty family. [F2, F3, F4, given, step 1.1] ∎
