---
id: def-rpm-h-temporal-chart-data
kind: definition
title: "Temporal chart with lapse, shift and positive slice metric"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, §1.2.6"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 26–28: metric geodesics and proper-time parameterization in a prescribed Lorentzian metric."
---

## Definition

Assume countable choice ACω, as in [[def-countable-choice]], for the smooth cotangent-bundle carrier convention used by this page; no full Axiom of Choice is assumed.

Let $(M,g,T)$ be a smooth, time-oriented Lorentzian four-manifold of signature $(-+++)$, with the geometric meaning fixed by [[def-gr-smooth-lorentzian-objects]]. A **temporal product chart** is a smooth coordinate map from an open product $I\times\Omega\subset\mathbb R\times\mathbb R^3$ onto an open subset of $M$, with coordinates $(x^0,x^1,x^2,x^3)$. We require $x^0$ to have length units and each $x^i$ to have length units in the physical interpretation.

The chart has **lapse-shift data** $(N,\beta,h)$ when $N:I\times\Omega\to(0,\infty)$, $\beta^i:I\times\Omega\to\mathbb R$, and $h_{ij}:I\times\Omega\to\mathbb R$ are smooth, $h_{ij}=h_{ji}$, and the matrix $(h_{ij})$ is positive definite at each point, with

$$g=-N^2(dx^0)^2+h_{ij}(dx^i+\beta^i dx^0)(dx^j+\beta^j dx^0).$$

Write $h^{ij}$ for the inverse matrix. The normal field is

$$n=N^{-1}(\partial_0-\beta^i\partial_i).$$

Direct contraction gives $g(n,n)=-1$; require that $n$ is future-directed in the supplied time orientation. This field of observers is distinct from the coordinate vector $\partial_0$, which may be spacelike. The coefficients $N,\beta^i,h_{ij}$ are dimensionless when all four coordinates are in metres. This definition is local to the specified product chart; it asserts no global temporal foliation.
