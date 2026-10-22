---
id: thm-ccgls-newton-edge-slope-is-boundary-slope
kind: theorem
title: Newton polygon edge slopes are boundary slopes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-knot-a-polynomial
  - def-boundary-slope-of-an-incompressible-surface
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-knot-a-polynomial-boundary-elimination
  - lem-knot-exterior-is-irreducible
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - lem-newton-edges-have-valued-finite-peripheral-representation-models
  - thm-nonelliptic-lattice-tree-actions-produce-essential-boundary-surfaces
  - def-axiom-of-choice
  - lem-knot-normal-circle-bundle-trivialization
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is the original hypothesis and is used through actual finite normalization, representation-field selection, valuation extension and the equivariant-map essential-surface construction. Ordinary edge slopes use no irreducibility or nonfiber conclusion; the enhanced case uses an actual absolutely irreducible model."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane
        curves associated to character varieties of 3-manifolds, Theorem 3.4
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
    - title: Stephan Tillmann, Varieties associated to 3-manifolds, §7
      url: https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf
---

## Statement

Assume full AC and let $K\subset S^3$ be a nontrivial smooth knot. Form the Newton polygon of the ordinary A-polynomial using the exponent convention that the lattice point $(a,b)$ represents the monomial $M^bL^a$, so edge slopes are measured in the preferred meridian-longitude convention. Every finite rational slope or infinite slope of an edge of this Newton polygon is a boundary slope of an incompressible, boundary-incompressible, orientable surface in the knot exterior. This statement does not assert that the realizing surface is non-fibered or that the slope is strict.

## Statement references

[Cooper, Culler, Gillet, Long, and Shalen, Theorem 3.4](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Tillmann, §7](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, the nontrivial smooth knot with its chosen compact exterior and peripheral marking, and the stated Newton edge.

[A1] Full AC is retained. [[def-axiom-of-choice]]

[F1] The exterior is compact orientable and irreducible, with no proper compressing disk. Full AC supplies the countable choice needed by its smooth Schoenflies branch. Its tube is a smooth $S^1\times D^2$ product by the normal-circle frame supplier, so the boundary is the marked smooth torus. It is connected: join two distinct exterior points by an embedded spherical arc, perturb it relative to its endpoints to be transverse to the knot, and use $1+1<3$ to conclude it misses the knot. Radial projection of nonzero tube fibers to their boundary fixes the exterior and retracts that arc to an exterior path; equal endpoints need the constant path. [[lem-knot-exterior-is-irreducible]] [[lem-nontrivial-knot-exterior-boundary-incompressible]] [[lem-knot-normal-circle-bundle-trivialization]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F2] Every selected Newton edge has an ACTUAL finite representation field and extending local curve valuation with peripheral eigenvalue pair a positive multiple of its primitive minimum normal. For an enhanced edge the representation is absolutely irreducible, including when its factor is also $L-1$. [[lem-newton-edges-have-valued-finite-peripheral-representation-models]]

[F3] For that valued representation, the actual lattice-tree/equivariant-map construction gives a connected orientable smooth essential surface with nonempty boundary whose primitive class annihilates the valuation pair. It proves both incompressibility and boundary-incompressibility by map-preserving compression complexity. With an absolutely irreducible representation it also proves that the chosen component cannot be a fiber. [[thm-nonelliptic-lattice-tree-actions-produce-essential-boundary-surfaces]]

[F4] In the stated marking $a[\lambda]+b[\mu]$ has slope $b/a$, including $a=0$ as infinity. [[def-boundary-slope-of-an-incompressible-surface]]

## Proof

1.1 Let $e$ be any edge of the ordinary Newton polygon. Apply [F2] to the ordinary polynomial: it selects an irreducible peripheral curve factor with parallel minimum face, constructs the boundary-branch DVR by the unimodular toric chart, selects an actual generic representation over a finite extension of the peripheral function field by a closed point of the nonzero incidence fiber, and extends the valuation to that field. If $(u,v)$ is the primitive minimum normal in exponent coordinates $(a,b)$, its eigenvalues satisfy $(w(L),w(M))=d(u,v)$ for an integer $d>0$. Nothing in this step assumes that this ordinary representation is irreducible; it includes the abelian $L-1$ factor. [A1, F2, given, construct]

2.1 The manifold hypotheses of [F3] are exactly [F1]. Its valued-field hypotheses are supplied by step 1.1, and the valuation pair is nonzero. Thus [F3] gives a connected orientable neatly properly embedded smooth surface with nonempty boundary, no compression or boundary compression, and primitive boundary class $(a,b)$ satisfying $au+bv=0$. This is an actual associated midpoint surface after the finite compression and deletion homotopies, not an assumed Culler–Shalen witness. [F1, F3, step 1.1, construct]

3.1 Every direction $(\Delta a,\Delta b)$ of the original edge also satisfies $u\Delta a+v\Delta b=0$. Consequently its extended rational slope $\Delta b/\Delta a$ is exactly $b/a$ by [F4], including the vertical case where both denominators vanish and the value is infinity. This is a boundary slope realized by the surface of step 2.1, as required. The proof uses only the ordinary branch of [F2]–[F3] and makes no nonfiber or strictness assertion for that branch. [F2, F4, step 1.1, step 2.1, algebra] ∎
