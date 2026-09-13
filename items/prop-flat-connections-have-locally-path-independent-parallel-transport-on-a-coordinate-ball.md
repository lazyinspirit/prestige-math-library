---
id: prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
kind: proposition
title: Flat connections have locally path-independent parallel transport on a coordinate ball
status: draft
origin: pipeline
deps: ["prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form", "thm-existence-and-uniqueness-of-parallel-sections", "def-parallel-transport-along-a-piecewise-smooth-curve", "thm-smooth-dependence-of-ode-solutions-on-parameters"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 33.9, local triviality of a flat connection
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.2.1 proof, printed pages 73–74, adapted from the tangent bundle to a vector bundle
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $E\to M$ carry a flat connection, meaning $R^\nabla=0$. For every
$p\in M$ there is a coordinate ball $U$ about $p$ such that, whenever two
piecewise smooth paths $\gamma_0,\gamma_1:[0,1]\to U$ have the same initial
and terminal points,

$$P_{\gamma_0}=P_{\gamma_1}.$$

This is a local assertion; it makes no claim about transport around loops in a
non-simply-connected larger domain.

## Facts & Assumptions

[F1] Curvature is an End$(E)$-valued two-form acting on bundle sections. [[prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form]].

[F2] Along each piecewise smooth path, every initial vector has a unique parallel section. [[thm-existence-and-uniqueness-of-parallel-sections]].

[F3] Parallel transport sends an initial vector to the terminal value of that unique parallel section. [[def-parallel-transport-along-a-piecewise-smooth-curve]].

[F4] Solutions of a smooth parameter-dependent ODE depend smoothly on their initial data and parameters on a common compact interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]].

## Proof

**Given:** A point $p\in M$, two paths $\gamma_0,\gamma_1$ in a sufficiently small coordinate ball with common endpoints $x,y$, and $v\in E_x$.

1.1 Shrink a chart and bundle trivialization about $p$ so that its coordinate image is a convex ball. Coordinatewise linear interpolation gives a fixed-endpoint homotopy $H(s,t)$ from $\gamma_0$ to $\gamma_1$; after a common finite subdivision it is smooth on each parameter rectangle. Let $V(s,t)$ be the [F2] parallel section along $t\mapsto H(s,t)$ with $V(s,0)=v$. In the fixed trivialization this is a linear ODE with smooth parameter $s$, so [F4] and uniqueness make $V$ smooth on each rectangle and continuous across the subdivision lines. [F2, F4, construct]

2.1 Put $W=\nabla_{\partial_s}V$ along $H$. Expanding the two covariant derivatives in the fixed frame, using $\nabla_{\partial_t}V=0$ and $[\partial_s,\partial_t]=0$, gives $\nabla_{\partial_t}W=-R^\nabla(\partial_sH,\partial_tH)V=0$ by flatness. Because $H(s,0)=x$ and $V(s,0)=v$ are constant in $s$, $W(s,0)=0$; uniqueness in [F2] therefore gives $W=0$ on every rectangle and, successively, across all subdivision lines. [F1, F2, step 1.1, algebra]

3.1 At $t=1$ the base point $H(s,1)=y$ is fixed, so $W(s,1)=0$ says that $s\mapsto V(s,1)\in E_y$ is constant. Hence $P_{\gamma_0}v=V(0,1)=V(1,1)=P_{\gamma_1}v$ by [F3]. This holds for every $v$, proving equality of the transport maps. [F3, step 2.1] ∎
