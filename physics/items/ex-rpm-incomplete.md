---
id: ex-rpm-incomplete
kind: example
title: "Flat local geometry without completeness"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
deps: [def-rpm-spacetime-observer-and-worldline, def-geodesic-of-an-affine-connection, lem-gr-constant-component-chart-flatness]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
physical_scope: "Explicit Lorentzian model manifolds illustrating that local flatness does not imply global causal regularity or geodesic completeness; these are mathematical countermodels, not claims about nature."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 geodesics"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §§1.2–1.3"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
---

## Example

Use SI length coordinates: $\theta,x^1,x^2,x^3$, the periods $L,\ell$, and the affine parameters $s$ below are measured in metres; the displayed metric has dimensionless components and its line element has units square metres. Thus the tangent $d\gamma/ds$ is dimensionless with norm $-1$, while the physical four-velocity is $c\,d\gamma/ds$ and the ideal proper-time increment is $ds/c$, with $c$ in metres per second. For $L,\ell>0$, consider the flat Lorentzian cylinder $M_L=(\mathbb R/L\mathbb Z)\times\mathbb R^3$ and the open slab $S_\ell=(0,\ell)\times\mathbb R^3$, each with metric $-d\theta^2+\sum_{i=1}^3d(x^i)^2$ and future direction $\partial_\theta$, where $d\theta$ is induced by the covering coordinate on $\mathbb R/L\mathbb Z$. The cylinder curve $\gamma:\mathbb R\to M_L$, $\gamma(s)=([s]_L,0,0,0)$, is a closed future timelike geodesic. The slab contains a timelike geodesic defined on a finite affine interval that cannot be extended inside the slab. Thus locally Minkowski metrics need not preclude a closed future timelike geodesic or a finite-affine-interval geodesic that cannot be extended within its manifold.

## Facts & Assumptions

**Given:** $L,\ell>0$, the quotient cylinder and open slab with the displayed metric.

[F1] The definition distinguishes a prescribed smooth Lorentzian background from any claim of completeness or global inertial structure ([[def-rpm-spacetime-observer-and-worldline]]).

[F2] A geodesic is an affinely parametrized curve satisfying $D_s\gamma'=0$; in a chart with constant metric components, each coordinate line is an affine geodesic of the metric-selected connection ([[def-geodesic-of-an-affine-connection]], [[lem-gr-constant-component-chart-flatness]]).

## Verification

1.1 The quotient coordinate $[s]_L$ has local lifts to real intervals; on every such chart the metric components are constant Minkowski components. The curve $\gamma(s)=([s]_L,0,0,0)$ is locally a coordinate line with tangent $\partial_\theta$, norm $-1$, and future sign. By [F2] it is a future timelike affine geodesic. Since $\gamma(s+L)=\gamma(s)$, it is closed. [given, F1, F2, construct, algebra]

2.1 In the slab, $\beta(s)=(s,0,0,0)$ for $s\in(0,\ell)$ is a vertical coordinate line with unit future timelike tangent; [F2] makes it an affine geodesic on this finite interval. If it extended continuously to $s=0$ as a curve in $S_\ell$, its first coordinate would have to equal $0$, which is excluded from the slab; the same obstruction holds at $s=\ell$. Therefore it cannot be extended within this manifold despite the locally constant metric. [given, F2, construct, algebra] ∎
