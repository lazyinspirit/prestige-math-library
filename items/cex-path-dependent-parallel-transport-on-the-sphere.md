---
id: cex-path-dependent-parallel-transport-on-the-sphere
kind: counterexample
title: "Path dependent parallel transport on the sphere"
status: published
origin: pipeline
deps: ["ex-parallel-transport-on-the-round-sphere-along-the-equator","prop-parallel-transport-under-reparametrization-reversal-and-concatenation","thm-existence-and-uniqueness-of-parallel-sections"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement refuted

Levi–Civita parallel transport on the unit round sphere depends only on the two endpoints.

## Facts & Assumptions

**Given:** The unit sphere, its round metric, and the standard ambient basis $e_1,e_2,e_3$.

[F1] The sphere connection is projected ambient differentiation: along a curve $D_t^{\nabla}V=V'+\langle\dot\gamma,V\rangle\gamma$ ([[ex-parallel-transport-on-the-round-sphere-along-the-equator]]).

[F2] Concatenation composes transport and constant curves give identity ([[prop-parallel-transport-under-reparametrization-reversal-and-concatenation]]).

[F3] Parallel initial-value sections are unique ([[thm-existence-and-uniqueness-of-parallel-sections]]).

## Counterexample

1.1 For two distinct standard basis vectors $a,b$, the quarter circle $\gamma(t)=\cos t\,a+\sin t\,b$, $0\leq t\leq\pi/2$, has unit tangent $T(t)=-\sin t\,a+\cos t\,b$. Formula [F1] gives $D_t^{\nabla}T=-\gamma+\gamma=0$. A constant vector perpendicular to $a,b$ has zero derivative and zero inner product with $\dot\gamma$, so it too is parallel. This determines transport on a tangent basis by [F3]. [F1, F3, given]

2.1 Traverse the three arcs $e_1\to e_2$, $e_2\to e_3$, $e_3\to e_1$ in that order. The initial tangent vector $e_2$ is $T(0)$ on the first arc and therefore becomes $-e_1$ at $e_2$. On the second arc $-e_1$ is a constant perpendicular vector, so remains $-e_1$ at $e_3$. On the third arc $T(0)=e_1$ and $T(\pi/2)=-e_3$; hence the transported input $-e_1$ becomes $e_3$ at $e_1$. Composition in [F2] thus sends $e_2$ to $e_3$ around this closed loop. [F2, step 1.1]

3.1 The constant loop at $e_1$ sends $e_2$ to $e_2$ by [F2], which differs from $e_3$. Both are unit tangent vectors at $e_1$ and the loops have identical endpoints, proving the failure. The nonzero input detects the difference; zero is fixed by both. The three arcs join continuously and each is smooth up to its endpoints, so they are admissible even at the corners. No curvature or area formula is used. [F2, step 2.1] ∎
