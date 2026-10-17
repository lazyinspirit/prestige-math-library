---
id: lem-emg-c2-curve-covariant-acceleration-well-defined
kind: lemma
title: "The covariant acceleration formula is well-defined along a $C^2$ curve"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-c2-curve-covariant-acceleration
  - def-affine-connection-on-a-smooth-manifold
  - def-christoffel-symbols-of-an-affine-connection
  - def-connection-one-form-in-a-local-frame
  - thm-connection-one-form-transformation-law
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-interval
dependency_roles:
  def-emg-c2-curve-covariant-acceleration: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-connection-one-form-in-a-local-frame: mathematical-premise
  thm-connection-one-form-transformation-law: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos, Michaelmas 2019, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Coordinate covariant differentiation and the metric-selected connection; the overlap calculation for $C^2$ curves is supplied in full here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.1), (3.12)–(3.14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Coordinate connection coefficients and covariant differentiation; its transformation is locally verified for $C^2$ curves here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For every smooth manifold with affine connection, every interval $I\subseteq\mathbb R$ with nonempty interior ([[def-interval]]), and every curve $z:I\to M$ that is $C^2$ in the chartwise sense of [[def-emg-c2-curve-covariant-acceleration]], the coordinate formula in that definition transforms as a tangent vector along $z$ on chart overlaps. At included endpoints the derivatives are one-sided. It therefore defines a unique continuous vector field along $z$, including its endpoints.

## Facts & Assumptions

**Given:** A smooth manifold $M$, an affine connection $\nabla$, an interval $I\subseteq\mathbb R$ with nonempty interior, and a curve $z:I\to M$ that is locally $C^2$ in the chartwise sense of [[def-emg-c2-curve-covariant-acceleration]], including its one-sided endpoint conditions.

[F1] [[def-emg-c2-curve-covariant-acceleration]]: in a chart $x$, $U^a=\frac{d}{d\tau}(x^a\circ z)$ and $a_x^a=\dot U^a+\Gamma^a{}_{bc}U^bU^c$ is the candidate acceleration component; $z$ is locally $C^2$ in chart coordinates, with first and second derivatives extending continuously and one-sidedly to included endpoints.

[F2] [[def-connection-one-form-in-a-local-frame]] and [[def-christoffel-symbols-of-an-affine-connection]]: in the coordinate frame, the connection matrix has entries $\omega^a{}_b=\Gamma^a{}_{cb}\,dx^c$, and a section with component column $u$ has covariant derivative $du+\omega u$.

[F3] [[thm-connection-one-form-transformation-law]]: if two frames satisfy $e'=eA$, then their connection matrices obey $\omega'=A^{-1}\omega A+A^{-1}dA$.

[F4] [[def-c-r-and-smooth-maps-between-smooth-manifolds]] and [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: chart transition maps are smooth, and their compositions with the locally $C^2$ curve have $C^2$ coordinate representatives. On the interior this follows by composition; at an included endpoint the first- and second-derivative chain-rule expressions have continuous one-sided limits because the transition map is smooth and the curve derivatives through order two do.

[F5] [[def-interval]] and [[def-emg-c2-curve-covariant-acceleration]]: $I$ is order-convex with nonempty interior, and the local $C^2$ definition supplies continuous derivatives through order two and one-sided endpoint values at included endpoints.

## Proof

1.1 In an $x$-chart, $U_x(\tau)$ is $C^1$ in the interior and its derivative extends continuously to each included endpoint by [F5]. The connection coefficients composed with $z$ and $U_x$ are continuous, so $a_x=\dot U_x+\omega_x(\dot z_x)U_x$ is continuous on the relative parameter segment, using one-sided endpoint values. [F1, F2, F4, F5, algebra]

2.1 On an overlap with coordinates $y$, put $J(\tau):=\frac{\partial y}{\partial x}(z(\tau))$ and $A(\tau):=J(\tau)^{-1}$, so the coordinate frames satisfy $e_y=e_xA$ and $U_y=JU_x$. By [F3], $\omega_y(\dot z_y)=J\omega_x(\dot z_x)A+J\dot A$. Differentiating $AJ=I$ gives $\dot A J+A\dot J=0$, hence $J\dot A J=-\dot J$. Differentiating $U_y=JU_x$ and using this identity gives $\dot U_y+\omega_y(\dot z_y)U_y=\dot J U_x+J\dot U_x+J\omega_x(\dot z_x)U_x+J\dot A J U_x=J(\dot U_x+\omega_x(\dot z_x)U_x)$ at every interior parameter value. Both sides extend continuously to included endpoints by [F4] and [F5], so the equality holds there by taking the one-sided limit. Thus the candidate components transform by the tangent-vector Jacobian. They agree as vectors on every overlap; the locally defined continuous fields therefore patch uniquely to a continuous vector field along $z$. [F1, F2, F3, F4, F5, algebra] ∎
