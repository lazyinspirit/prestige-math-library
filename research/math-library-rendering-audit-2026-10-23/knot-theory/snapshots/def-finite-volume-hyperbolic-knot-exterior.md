---
id: def-finite-volume-hyperbolic-knot-exterior
kind: definition
title: "Finite-volume hyperbolic knot exterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-exterior
  - lem-knot-exterior-has-peripheral-torus
  - def-pared-hyperbolic-structures-and-volume
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§4.3, Definition 4.9 and Theorem 4.10, printed pp.73–74; §8.1, finite-volume cusp conventions"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.3–4.4, cusp completeness and metric completion"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

For a smooth knot $K$ with chosen compact exterior $E_K$ and boundary torus $T_K$, a finite-volume hyperbolic knot exterior structure is a complete Riemannian metric of constant sectional curvature $-1$ on $\operatorname{int}(E_K)$ with finite volume and exactly one cusp whose torus cross-section is isotopic in $\operatorname{int}(E_K)$ to a parallel copy of $T_K$. The definition asserts no existence.

## Definition references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §§4.3 and 8.1](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
