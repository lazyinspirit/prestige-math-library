---
id: lem-horocusp-truncation-has-finite-volume
kind: lemma
title: "A rank-two horocusp truncation has finite volume"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§4.3, cusp neighborhoods and completeness equations, printed pp.73–77"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.3–4.4, horospheres and ideal-polyhedron metric completion"
---

## Statement

Let $\Gamma\subset\mathbb C$ be a rank-two lattice acting on $\mathbb H^3$ by horizontal translations, and let
$$
C=\{(x+iy,t):t\ge1\}/\Gamma
$$
be the quotient of the horoball $t\ge1$. If $A$ is the Euclidean area of a fundamental parallelogram for $\Gamma$, then the end is at infinite hyperbolic distance and $\operatorname{Vol}(C)=A/2$.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §4.3](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Facts & Assumptions

**Given:** The upper half-space metric and a rank-two translation lattice $\Gamma$.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] gives $ds^2=t^{-2}(dx^2+dy^2+dt^2)$ and its volume density $dx\,dy\,dt/t^3$.

## Proof

1.1 Let $Q$ be a fundamental parallelogram of area $A$. Integrating the density from [F1] over $Q\times[1,\infty)$ gives $\operatorname{Vol}(C)=\int_Q\int_1^\infty t^{-3}\,dt\,dx\,dy=A[1/(2t^2)]_1^\infty=A/2$. The improper integral converges because $t^{-3}$ is integrable on $[1,\infty)$. [given, F1, algebra]

2.1 Along any piecewise smooth path with height coordinate $t$, its hyperbolic length is at least $\int |dt|/t$, since the metric contains the term $dt^2/t^2$. A path escaping the end has $t\to\infty$, so this lower bound diverges as $\log t$. Thus the end is at infinite distance and is complete toward its ideal end. [given, F1, algebra] ∎

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
