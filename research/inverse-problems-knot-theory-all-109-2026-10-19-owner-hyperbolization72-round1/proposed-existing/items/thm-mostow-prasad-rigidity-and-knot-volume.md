---
id: thm-mostow-prasad-rigidity-and-knot-volume
kind: theorem
title: "Mostow–Prasad rigidity and knot volume"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-exterior
  - def-pared-hyperbolic-structures-and-volume
  - def-finite-volume-hyperbolic-knot-exterior
  - thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds
  - lem-isometry-preserves-finite-volume-integral
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
justified_by: []
aliases: []
axiom_use: "Full AC is retained through the proved general finite-volume rigidity theorem, its quotient and cusp constructions, and the measure and boundary suppliers; it supplies their countable-choice hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gopal Prasad, Strong Rigidity of Q-Rank 1 Lattices"
      url: "https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf"
      locator: "Theorems A–C and complete proof of Theorem C, pp.1–31"
    - title: "Danny Calegari, 3-Manifolds"
      url: "https://math.uchicago.edu/~dannyc/books/3manifolds/3_manifolds_chapter_2.pdf"
      locator: "§3.1.5, closed Mostow proof and finite-volume Prasad extension discussion"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/6.pdf"
      locator: "Chapter 6, §6.3, closed-manifold Mostow proof via simplicial volume"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ and $N$ be interiors of compact connected oriented knot exteriors carrying complete finite-volume hyperbolic metrics. Every isomorphism $\pi_1(M)\to\pi_1(N)$, considered up to the conjugacy induced by basepoint changes, is realized by a unique isometry in the corresponding proper homotopy class. If the isomorphism is induced by an orientation-preserving proper homotopy equivalence, the isometry preserves orientation. In particular, the two metrics have equal volume, where volume is the integral of their Riemannian volume densities.

## Statement references

[Gopal Prasad, *Strong Rigidity of Q-Rank 1 Lattices*, Theorem C](https://www.maths.gla.ac.uk/~mpowell/Prasad-on-Mostow-rigidity.pdf)

[Danny Calegari, *3-Manifolds*, §3.1.5](https://math.uchicago.edu/~dannyc/books/3manifolds/3_manifolds_chapter_2.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 6](https://library.slmath.org/nonmsri/gt3m/PDF/6.pdf)

## Facts & Assumptions

**Given:** AC, the two connected oriented knot-exterior interiors with their complete finite-volume hyperbolic metrics, and the stated outer fundamental-group isomorphism.

[A1] Full choice is [[def-axiom-of-choice]] and supplies the countable-choice hypothesis in [[def-countable-choice]].

[F1] [[thm-mostow-prasad-rigidity-for-standard-finite-volume-cusped-three-manifolds]] proves that every isomorphism between the fundamental groups of connected oriented complete finite-volume curvature-$-1$ three-manifolds is induced by a unique isometry, properly homotopic to every proper homotopy equivalence inducing the same outer isomorphism. It proves orientation agreement and equality of volume integrals. Its quotient presentation and finite torus-cusp decomposition are proved consequences of its metric hypotheses, not extra assumptions.

## Proof

1.1 The two given knot-exterior interiors are nonempty connected oriented boundaryless three-manifolds. Their metrics are complete, have sectional curvature $-1$ and have finite volume by hypothesis. Thus every geometric hypothesis of [F1] holds. No generic hyperbolization, fibering, triangulation or deformation theorem is needed, since the metrics are already supplied. [A1, F1, given, algebra]

2.1 Apply [F1] to the supplied group isomorphism. It gives its unique realizing isometry and the asserted proper homotopy classification. In the stated orientation-preserving proper homotopy class that isometry preserves orientation, and its Riemannian volume integral agrees on the two manifolds. These are exactly the claimed conclusions. [F1, step 1.1, algebra] ∎
