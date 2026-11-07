---
id: ex-fuchsian-vertex-cycle-deficit-budgets
kind: example
title: Fuchsian vertex-cycle deficit budgets
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-cofinite-dirichlet-domains-have-finitely-many-sides
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, author text
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
    locator: 'Sections 4.10-4.11, printed pp.75-77: fundamental/Dirichlet domains
      and face-cycle setup. The finite-area and cusp arguments here are supplied locally.'
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version 1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections 2.1-2.4 and 3.8-3.9: models and horospheres. Sections 5.10-5.11
      are a distinct thick-thin treatment in the manifold setting, not an imported
      proof of the torsion-bearing Fuchsian assertion.'
dependency_level: 4
---

## Example

For an ordinary vertex cycle of a free-basepoint finite-area Dirichlet
polygon, let $n$ be the number of its representatives in the polygon
and $m$ its point-stabilizer order. The total exterior-angle deficit
over this cycle is $n\pi-2\pi/m$. If $m=1$, then $n\ge3$ and the deficit
is at least $\pi$; if $n=1$, then $m\ge3$ and it is at least $\pi/3$;
if $n=2$, then $m\ge2$ and it is at least $\pi$. Thus the torsion-free
case and both low-representative elliptic cases all contribute a
strictly positive amount to the finite area budget.

## Facts & Assumptions

**Given:** An actual ordinary vertex cycle of the Example; no realization
of arbitrary pairs $(n,m)$ is asserted.

[F1] The vertex-orbit angle sum, total deficit, finite corner-deficit
budget, and non-realization caveat are recorded in the Remark of
[[lem-cofinite-dirichlet-domains-have-finitely-many-sides]].

## Verification

1.1 Summing $\pi-\alpha_i$ and substituting [F1] gives $n\pi-2\pi/m$. When $m=1$, the strict angle bounds give $n>2$, hence $n\ge3$ and deficit at least $\pi$. [F1, given, algebra]

2.1 If $n=1$, the strict inequality $2\pi/m<\pi$ gives $m\ge3$ and deficit $\pi-2\pi/m\ge\pi/3$. If $n=2$, then $2\pi/m<2\pi$ forces $m\ge2$, and the deficit $2\pi-2\pi/m$ is at least $\pi$. These are precisely the low-representative cases which a torsion-free argument would miss; their positive contributions obey the same finite budget in [F1]. [F1, step 1.1, algebra] ∎
