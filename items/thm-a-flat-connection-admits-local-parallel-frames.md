---
id: thm-a-flat-connection-admits-local-parallel-frames
kind: theorem
title: A flat connection admits local parallel frames
status: published
origin: pipeline
deps: ["prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball", "def-parallel-transport-along-a-piecewise-smooth-curve", "def-local-frame-and-global-frame-of-a-vector-bundle", "thm-smooth-dependence-of-ode-solutions-on-parameters", "prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 33.9
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lemma 11.2.3 and its use in Proposition 11.2.1, printed pages 73–74
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

A connection on a finite-rank smooth vector bundle $E\to M$ is flat if and
only if every point of $M$ has a neighborhood carrying a local frame
$(e_1,\ldots,e_r)$ of parallel sections, meaning $\nabla_Xe_a=0$ for every
local vector field $X$ and every $a$.

## Facts & Assumptions

[F1] A flat connection has endpoint-dependent parallel transport on a sufficiently small coordinate ball. [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]].

[F2] Parallel transport is the endpoint value of the unique parallel section along the path. [[def-parallel-transport-along-a-piecewise-smooth-curve]].

[F3] A local frame is a tuple of smooth sections that is a basis in every fibre. [[def-local-frame-and-global-frame-of-a-vector-bundle]].

[F4] Parameter-dependent ODE solutions vary smoothly. [[thm-smooth-dependence-of-ode-solutions-on-parameters]].

[F5] Bundle curvature is function-linear in its section input and hence acts fibrewise as an endomorphism. [[prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form]].

## Proof

**Given:** A vector-bundle connection $\nabla$.

1.1 Assume $\nabla$ is flat, fix $p$, and take a coordinate ball $U$ from [F1], small enough to lie in one bundle trivialization. Let $v_1,\ldots,v_r$ be the basis of $E_p$ induced by that trivialization and define $e_a(q)=P_{p,q}v_a$, where [F1] makes the notation independent of the path in $U$. Using the radial coordinate paths, [F4] shows that $e_a$ depends smoothly on $q$. Linear ODE uniqueness makes transport linear, and transport along the reversed path is its inverse; hence the $e_a(q)$ form a basis of $E_q$ and [F3] makes $(e_a)$ a local frame. [F1, F2, F3, F4, construct]

2.1 For $q\in U$ and a smooth curve $c$ through $q$, concatenate any path from $p$ to $q$ with the segment of $c$. Endpoint independence in [F1] identifies $e_a(c(t))$ with parallel transport of $e_a(q)$ along $c$; [F2] therefore gives $\nabla_{\dot c}e_a=0$. Every tangent vector is the velocity of such a local curve, so every $e_a$ is parallel. This proves the forward implication. [F1, F2, step 1.1]

3.1 Conversely, suppose every point has a neighborhood with a parallel frame. On such a neighborhood the defining curvature commutator gives $R^\nabla(X,Y)e_a=0$ because all three covariant derivatives of $e_a$ vanish. At each point the $e_a$ are a basis by [F3], so [F5] gives $R^\nabla(X,Y)=0$ on the whole fibre. These neighborhoods cover $M$, hence the connection is flat. [F3, F5, algebra] ∎
