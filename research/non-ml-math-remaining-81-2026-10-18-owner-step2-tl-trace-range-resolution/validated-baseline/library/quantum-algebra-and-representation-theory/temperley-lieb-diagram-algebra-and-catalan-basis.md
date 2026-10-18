---
page: temperley-lieb-diagram-algebra-and-catalan-basis
title: "Temperley–Lieb Diagram Algebra and Catalan Basis"
status: draft
items:
  - def-temperley-lieb-diagram-category
  - def-temperley-lieb-generator-presentation
  - thm-temperley-lieb-diagram-category-laws
  - thm-temperley-lieb-diagrams-have-catalan-cardinality
  - thm-temperley-lieb-generator-normal-form
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-temperley-lieb-diagram-generators-span
  - thm-temperley-lieb-presentation-isomorphism
examples: []
---

This page defines the finite Temperley–Lieb diagram algebra over a commutative ring, proves the diagram and generator presentations agree, and identifies the Catalan-sized basis. The coefficient convention is that each removed loop contributes $\delta$ and the product $xy$ stacks $x$ above $y$. No assumption that $\delta$ is nonzero or invertible is made.

## Results

- [[def-temperley-lieb-diagram-category]] defines the noncrossing pairings, free diagram modules, stacking operation, identities, elementary cup-cap diagrams, and rank-$n$ diagram module.
- [[def-temperley-lieb-generator-presentation]] defines the abstract algebra with $u_i^2=\delta u_i$, $u_i u_{i\pm1}u_i=u_i$, and distant commutation.
- [[thm-temperley-lieb-diagram-category-laws]] proves stacking is well defined and associative, identities act on both sides, and juxtaposition is strict monoidal.
- [[thm-temperley-lieb-diagrams-have-catalan-cardinality]] gives an explicit matching-to-parentheses bijection and counts $C_n$ loop-free diagrams.
- [[thm-temperley-lieb-generator-normal-form]] proves spanning by Jones normal forms and counts the candidate forms by Dyck paths.
- [[lem-temperley-lieb-generators-satisfy-local-relations]] derives the local generator relations from the diagram multiplication.
- [[thm-temperley-lieb-diagram-generators-span]] constructs every noncrossing pairing from the elementary generators.
- [[thm-temperley-lieb-presentation-isomorphism]] proves the diagram representation is an isomorphism and the Jones normal forms form a basis over every commutative ring.

The independence argument uses surjectivity between finite free modules of the same Catalan rank and the determinant criterion for invertibility over a commutative ring. It does not infer independence from spanning or divide by the loop parameter.

## Reading route and scope

The declared page prerequisites are [[algebraic-representation-and-tensor-symmetry-map]], [[generic-coxeter-hecke-algebras-and-the-standard-basis]], [[lattice-paths-and-catalan-numbers]], and [[tensor-and-fusion-categories]]. The Catalan and ring-theoretic suppliers enter the local proofs; the Hecke, representation-map, and tensor-category links are contextual routes and do not replace any proof here.

The published [[def-temperley-lieb-quotient-and-jones-specialization]] is a localized Hecke quotient using a different idempotent normalization. This page keeps that parameter conversion separate and proves the classical diagram/presentation isomorphism directly. Cellularity, standard modules, semisimplicity, Jones–Wenzl projectors, traces, root-of-unity behavior, and physics realizations belong to later Temperley–Lieb pages.

The diagram TikZ figure in [[def-temperley-lieb-diagram-category]] fixes the cap/cup and boundary conventions. Diagrams illustrate the objects; the proofs count paths and connected components in the glued finite graphs.
