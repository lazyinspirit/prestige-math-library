---
id: thm-enhanced-a-polynomial-newton-edge-is-strict-boundary-slope
kind: theorem
title: Enhanced A-polynomial Newton edges give strict boundary slopes
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-enhanced-a-polynomial
  - thm-ccgls-newton-edge-slope-is-boundary-slope
  - def-boundary-slope-of-an-incompressible-surface
  - lem-newton-edges-have-valued-finite-peripheral-representation-models
  - thm-nonelliptic-lattice-tree-actions-produce-essential-boundary-surfaces
  - def-axiom-of-choice
  - lem-knot-normal-circle-bundle-trivialization
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is the original hypothesis and is used through actual finite normalization, representation-field selection, valuation extension and the equivariant-map essential-surface construction. Ordinary edge slopes use no irreducibility or nonfiber conclusion; the enhanced case uses an actual absolutely irreducible model."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), Theorem 4.4 and Remark 4.5
      url: https://arxiv.org/pdf/2405.19197v2
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, §3
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume full AC and let $K\subset S^3$ be a nontrivial knot. Every finite rational or infinite slope of an edge of the Newton polygon of the enhanced A-polynomial is a strict boundary slope of $K$: it is realized by an incompressible, boundary-incompressible, orientable surface in the exterior which is not a fiber of any exterior fibration over $S^1$.

## Statement references

[[def-enhanced-a-polynomial|Enhanced A-polynomial with the reducible component removed]]

[[def-boundary-slope-of-an-incompressible-surface|Boundary and strict boundary slopes]]

[Baldwin and Sivek, Theorem 4.4 and Remark 4.5](https://arxiv.org/pdf/2405.19197v2)

[Cooper, Culler, Gillet, Long, and Shalen, §3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

## Facts & Assumptions

**Given:** Full AC, the nontrivial smooth knot with its chosen compact exterior and peripheral marking, and the stated Newton edge.

[A1] Full AC is retained. [[def-axiom-of-choice]]

[F1] The exterior is compact orientable and irreducible, with no proper compressing disk. Full AC supplies the countable choice needed by its smooth Schoenflies branch. Its tube is a smooth $S^1\times D^2$ product by the normal-circle frame supplier, so the boundary is the marked smooth torus. It is connected: join two distinct exterior points by an embedded spherical arc, perturb it relative to its endpoints to be transverse to the knot, and use $1+1<3$ to conclude it misses the knot. Radial projection of nonzero tube fibers to their boundary fixes the exterior and retracts that arc to an exterior path; equal endpoints need the constant path. [[lem-knot-exterior-is-irreducible]] [[lem-nontrivial-knot-exterior-boundary-incompressible]] [[lem-knot-normal-circle-bundle-trivialization]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F2] Every selected Newton edge has an ACTUAL finite representation field and extending local curve valuation with peripheral eigenvalue pair a positive multiple of its primitive minimum normal. For an enhanced edge the representation is absolutely irreducible, including when its factor is also $L-1$. [[lem-newton-edges-have-valued-finite-peripheral-representation-models]]

[F3] For that valued representation, the actual lattice-tree/equivariant-map construction gives a connected orientable smooth essential surface with nonempty boundary whose primitive class annihilates the valuation pair. It proves both incompressibility and boundary-incompressibility by map-preserving compression complexity. With an absolutely irreducible representation it also proves that the chosen component cannot be a fiber. [[thm-nonelliptic-lattice-tree-actions-produce-essential-boundary-surfaces]]

[F4] In the stated marking $a[\lambda]+b[\mu]$ has slope $b/a$, including $a=0$ as infinity. [[def-boundary-slope-of-an-incompressible-surface]]

## Proof

1.1 Let $e$ be any edge of the enhanced Newton polygon. By [F2], choose its minimum-normal valued model using the irreducible-character incidence charts in that supplier, not merely a factor of the ordinary polynomial. The finite word-matrix determinant certificate is inverted before the generic-fiber closed point is selected; hence it stays nonzero in the resulting finite field. Thus the constructed representation is absolutely irreducible, its peripheral eigenvalues are the actual coordinate functions, and their valuation pair is a positive multiple of the primitive normal to $e$. This also treats a factor $L-1$ contributed by irreducible characters. [A1, F2, given, construct]

2.1 Apply [F3] in the exterior verified by [F1]. It yields a connected orientable essential surface with nonempty boundary and the primitive kernel slope of that nonzero valuation pair. That is the edge slope by the same orthogonality equation as in [F4]. Moreover the last clause of [F3] applies to the ACTUAL absolutely irreducible representation from step 1.1. If the selected component were a fiber, its normal subgroup would fix an edge; integrality of all stable-letter conjugates would force the representation to be reducible, the contradiction proved there. Thus this surface is not a fiber of any fibration having it as fiber. [F1, F2, F3, F4, step 1.1, construct]

3.1 The surface is precisely a realizing orientable incompressible boundary-incompressible nonfiber surface in [F4]'s definition of strict boundary slope. Hence every specified enhanced edge slope is strict, including zero or infinity when those occur. No claim that the ordinary abelian $L-1$ edge is strict has been used: enhanced strictness depends on the actual irreducible-character model, while the ordinary boundary-slope theorem retains its weaker valid conclusion. [F4, step 2.1] ∎
