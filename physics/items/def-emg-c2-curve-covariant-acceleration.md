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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $M$ be a smooth manifold with an affine connection $\nabla$, let $I\subseteq\mathbb R$ be any interval with nonempty interior ([[def-interval]]), and let $z:I\to M$ be continuous. We say that $z$ is **$C^2$ on $I$** in this definition when the following chartwise conditions hold. At each interior parameter value $\tau_0\in\operatorname{int}I$, there are a chart $x:U\to x(U)\subseteq\mathbb R^n$ around $z(\tau_0)$ and an open interval $J\subseteq\operatorname{int}I$ containing $\tau_0$, with $z(J)\subseteq U$, such that $x\circ z$ is twice continuously differentiable on $J$. At each included endpoint $\tau_0\in I\setminus\operatorname{int}I$, there are such a chart and a relative neighborhood $J=I\cap(\tau_0-\delta,\tau_0+\delta)$, with $\delta>0$ and $z(J)\subseteq U$, for which the first and second derivatives on $J\cap\operatorname{int}I$ extend continuously to $\tau_0$; their endpoint values are the corresponding one-sided derivatives. Here $n=\dim M$, and differentiability of $x\circ z$ is componentwise as a map of one real variable. Smooth chart transitions and $C^2$ composition make this condition independent of the chosen chart ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]); at an included endpoint, the first- and second-derivative chain-rule expressions have the corresponding continuous one-sided limits. On a time-oriented Lorentzian four-manifold, this is exactly the curve regularity specified in clause (a) of [[def-gr-timelike-worldline-and-proper-time]]; that definition's causal conditions are not part of the present regularity convention.

The parameter $\tau$ is an arbitrary real parameter here; no causal or nonzero-velocity condition is imposed. Put $U(\tau):=z'(\tau)$, using the one-sided derivative at included endpoints. A **vector field along $z$** assigns $V(\tau)\in T_{z(\tau)}M$ to each $\tau\in I$; it is **continuous** when its component functions are continuous in every chart along $z$. In a chart $x=(x^1,\ldots,x^n)$ covering a segment of $z$, write $U^a(\tau):=\frac{d}{d\tau}(x^a\circ z)(\tau)$ and let $\Gamma^a{}_{bc}$ be the Christoffel symbols of $\nabla$. The components $U^a$ transform by the tangent-map Jacobian on chart overlaps, by the chain rule, so $U$ is a vector field along $z$. All indices range from $1$ to $n$, and repeated upper/lower indices are summed. Define the **covariant acceleration of $z$** on this segment by the component formula

$$\bigl(\nabla_UU\bigr)^a(\tau):=\frac{dU^a}{d\tau}(\tau)+\Gamma^a{}_{bc}(z(\tau))U^b(\tau)U^c(\tau).$$

The local $C^2$ regularity makes $U^a$ continuously differentiable, including one-sided endpoint derivatives, so these components are continuous on the relative parameter interval. The name and notation extend the pullback covariant derivative of [[def-covariant-derivative-along-a-curve]] from smooth curves; the coordinate expression is well-defined on overlaps by [[lem-emg-c2-curve-covariant-acceleration-well-defined]].

