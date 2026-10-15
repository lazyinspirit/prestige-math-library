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
deps: [def-rpm-spacetime-observer-and-worldline]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
physical_scope: "Explicit Lorentzian model manifolds illustrating that local flatness does not imply global causal regularity or geodesic completeness; these are mathematical countermodels, not claims about nature."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 geodesics"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §§1.2–1.3"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
---

## Example

For $L,\ell>0$, consider the flat Lorentzian cylinder $M_L=(\mathbb R/L\mathbb Z)\times\mathbb R^3$ and the open slab $S_\ell=(0,\ell)\times\mathbb R^3$, each with metric $-d\theta^2+\sum_{i=1}^3d(x^i)^2$ and future direction $\partial_\theta$, where $d\theta$ is induced by the covering coordinate on $\mathbb R/L\mathbb Z$. The cylinder contains a closed future timelike geodesic. The slab contains a timelike geodesic defined on a finite affine interval that cannot be extended inside the slab. Thus a locally Minkowski metric alone supplies neither chronology nor geodesic completeness.

## Facts & Assumptions

**Given:** $L,\ell>0$, the quotient cylinder and open slab with the displayed metric.

[F1] The definition distinguishes a prescribed smooth Lorentzian background from any claim of completeness or global inertial structure ([[def-rpm-spacetime-observer-and-worldline]]).

## Verification

1.1 The quotient coordinate $[s]_L$ has local lifts to real intervals; on every such chart the metric components are constant Minkowski components. Thus its Levi-Civita Christoffel symbols vanish locally. The curve $\gamma(s)=([s]_L,0,0,0)$ has tangent $\partial_\theta$, with norm $-1$ and future sign, and has zero coordinate acceleration in each lift. It is therefore a future timelike geodesic and $\gamma(s+L)=\gamma(s)$, so it is closed. [given, F1, construct, algebra]

2.1 In the slab, $\eta(s)=(s,0,0,0)$ for $s\in(0,\ell)$ has the same unit timelike tangent and zero acceleration, hence is a timelike affine geodesic on a finite interval. If it extended continuously to $s=0$ as a curve in $S_\ell$, its first coordinate would have to equal $0$, which is excluded from the slab; the same obstruction holds at $s=\ell$. Therefore it is inextendible in this manifold despite the locally constant metric. [given, construct, algebra] ∎