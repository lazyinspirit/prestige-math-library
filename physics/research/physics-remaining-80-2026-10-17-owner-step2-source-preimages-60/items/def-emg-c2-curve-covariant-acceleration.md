---
id: def-emg-c2-curve-covariant-acceleration
kind: definition
title: "Covariant acceleration along a $C^2$ curve"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-covariant-derivative-along-a-curve
  - def-affine-connection-on-a-smooth-manifold
  - def-christoffel-symbols-of-an-affine-connection
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-interval
  - def-gr-timelike-worldline-and-proper-time
dependency_roles:
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
justified_by:
  - lem-emg-c2-curve-covariant-acceleration-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos, Michaelmas 2019, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Coordinate covariant differentiation and the metric-selected connection; this local definition extends the coordinate formula from smooth curves to $C^2$ curves."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.1), (3.12)–(3.14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Coordinate connection coefficients and covariant differentiation of vectors and tensors; the local $C^2$ extension is defined and checked here."
verification:
  precheck: pending
---

## Definition

Let $M$ be a smooth manifold with an affine connection $\nabla$, let $I\subseteq\mathbb R$ be any interval with nonempty interior ([[def-interval]]), and let $z:I\to M$ be $C^2$ in the sense of clause (a) of [[def-gr-timelike-worldline-and-proper-time]]: in each curve chart the first and second coordinate derivatives extend continuously to every included endpoint, where derivatives are one-sided. Put $U(\tau):=z'(\tau)$, using the one-sided derivative at included endpoints. A continuous vector field along $z$ means an assignment $V(\tau)\in T_{z(\tau)}M$ whose component functions are continuous in every local chart. In a chart $x=(x^a)$ covering a segment of $z$, write $U^a(\tau):=\frac{d}{d\tau}(x^a\circ z)(\tau)$ and let $\Gamma^a{}_{bc}$ be the Christoffel symbols of $\nabla$. Define the **covariant acceleration of $z$** on this segment by the component formula

$$\bigl(\nabla_UU\bigr)^a(\tau):=\frac{dU^a}{d\tau}(\tau)+\Gamma^a{}_{bc}(z(\tau))U^b(\tau)U^c(\tau).$$

The $C^2$ regularity makes $U^a$ continuously differentiable, including one-sided endpoint derivatives, so these components are continuous on the relative parameter interval. The name and notation extend the pullback covariant derivative of [[def-covariant-derivative-along-a-curve]] from smooth curves; the coordinate expression is well-defined on overlaps by [[lem-emg-c2-curve-covariant-acceleration-well-defined]].

