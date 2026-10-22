---
id: thm-thurston-hyperbolization-for-atoroidal-knot-exteriors
kind: theorem
title: "Thurston hyperbolization for atoroidal knot exteriors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-exterior
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-pared-hyperbolic-structures-and-volume
  - def-finite-volume-hyperbolic-knot-exterior
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
aliases: []
axiom_use: "Full AC is retained as an explicit theorem hypothesis. Its precise use in the missing complete hyperbolization proof is unresolved and is part of the escalation."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, ideal-triangulation development; see also Chapters 5–9 for Haken hyperbolization route"
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "Chapter 8, Theorem 8.17 and surrounding discussion of the hyperbolic alternative"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $E_K$ be the compact connected orientable exterior of a smooth knot in $S^3$, with one torus boundary component. If $E_K$ is irreducible, its boundary is incompressible, $E_K$ is atoroidal, and $E_K$ is not Seifert-fibered, then $\operatorname{int}(E_K)$ admits a complete finite-volume Riemannian metric of constant sectional curvature $-1$ with one torus cusp. No conclusion is asserted for a torus or satellite knot unless its exterior satisfies all four topological hypotheses.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapters 4–9](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Chapter 8](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
