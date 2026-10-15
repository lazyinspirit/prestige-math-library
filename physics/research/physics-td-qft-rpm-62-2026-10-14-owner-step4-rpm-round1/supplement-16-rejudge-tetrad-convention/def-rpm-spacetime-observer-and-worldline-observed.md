---
id: def-rpm-spacetime-observer-and-worldline
kind: definition
title: "Particle spacetime, observers and worldlines"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-gr-smooth-lorentzian-objects, def-gr-timelike-worldline-and-proper-time, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-local-frame-and-tetrad-fields, def-sr-chart-tetrad-and-congruence-distinction]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt, §§1.1–1.2"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
    - title: "David Tong, General Relativity, author-hosted Chapter 3 lecture-note excerpt on Lorentzian geometry and connections"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr3.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 and Ch. 3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Use the signature $(-,+,+,+)$ throughout. In the flat case, **Minkowski spacetime** means the affine model $(A,V,\eta,C^+)$ of [[def-sr-affine-minkowski-model]]: $A$ is an affine space, $\eta$ is a nondegenerate Lorentz form on its four-dimensional displacement space, and $C^+$ selects the future cone. In the curved case, a **background spacetime** means a prescribed smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of [[def-gr-smooth-lorentzian-objects]]; the metric and time orientation are fixed data, not dynamical unknowns here. No field equation or completeness assumption is included.

A **massive worldline** on an open interval $I\subseteq\mathbb R$ is a $C^2$ curve $x:I\to M$ with future-directed timelike tangent $T=dx/ds$ at every parameter value. This is the $C^2$ subclass of [[def-gr-timelike-worldline-and-proper-time]]. A **null worldline** is a $C^2$ curve with nonzero future-directed null tangent everywhere. Its tangent has no proper-time normalization: $g(T,T)=0$, so the massive proper-time formula does not apply. In the flat model these are $C^2$ curves $x:I\to A$, with tangent defined by differentiating the displacement $x(s)-o$ for any fixed $o\in A$, lying in the selected future timelike or nonzero null cone of [[def-sr-affine-minkowski-model]]. The derivative is independent of $o$ because a change of origin adds a constant displacement. No affine-line or geodesic condition is imposed.

An **observer at an event** $p\in M$ is a future unit timelike vector $n\in T_pM$ with $g_p(n,n)=-1$, as in [[def-gr-observer-and-rest-space]]. Its instantaneous rest space is $n^\perp=\{v:g_p(v,n)=0\}$. This is a pointwise vector-space construction; the definition does not assign a clock reading or a moving frame to a lone observer.

An **observer congruence** on an open set $U\subseteq M$ is a smooth field of future unit timelike vectors on $U$, as in [[def-gr-observer-congruence-and-adapted-charts]]; its observer curves are its integral curves. A **tetrad** is a chosen orthonormal frame field, as in [[def-gr-local-frame-and-tetrad-fields]]. A **chart** is a coordinate map; an adapted chart is a chart whose spatial coordinates are constant along the congruence's integral curves. These objects are distinct: a chart need not be inertial, a tetrad need not be coordinate induced, and a congruence is a field of observers rather than a chart or a frame. This distinction agrees with [[def-sr-chart-tetrad-and-congruence-distinction]].

The coordinates and units used later are SI: in an inertial chart $x^0=ct$ and $x^i$ are metres, $t$ is seconds, $c>0$ is metres per second, and proper time is measured in seconds. In a general chart, coordinate components inherit their coordinate units; invariant equations are tensorial. No global inertial chart, global tetrad, or global observer congruence is asserted to exist.
