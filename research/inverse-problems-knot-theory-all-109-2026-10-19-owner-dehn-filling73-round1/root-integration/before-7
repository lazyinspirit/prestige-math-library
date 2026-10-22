---
id: thm-thurston-hyperbolic-dehn-filling
kind: theorem
title: "Thurston's hyperbolic Dehn filling theorem for finitely many cusps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - def-cusp-slope-length
  - lem-dehn-filling-deformation-and-completeness
  - thm-mostow-prasad-rigidity-and-knot-volume
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf"
      locator: "Chapter 5, §5.8, Theorem 5.8.2 and proof, printed pp.102–104"
    - title: "Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem"
      url: "https://arxiv.org/pdf/math/9901045"
      locator: "Theorem 0.1 and §§1–3; Propositions 2.9 and 3.6"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with $k\ge1$ torus cusps and a complete finite-volume hyperbolic metric. Choose an ordered peripheral basis on each cusp. For cusp $i$, let the generalized filling parameter sphere be $S_i=\mathbb R^2\cup\{\infty\}$, with $\infty$ denoting the complete cusp and primitive integral pairs modulo sign denoting ordinary slopes. There is a neighborhood $U$ of $(\infty,\ldots,\infty)$ in $\prod_{i=1}^k S_i$ such that every tuple in $U$ whose finite coordinates are primitive integral slopes determines a complete finite-volume hyperbolic metric on the corresponding ordinary Dehn filling; coordinates equal to $\infty$ remain unfilled complete cusps. Consequently, one may choose neighborhoods $U_i$ of $\infty$ with $\prod_i U_i\subseteq U$, and only finitely many primitive integral pairs at each cusp lie outside $U_i$. Thus every simultaneous filling whose slopes all lie in their respective $U_i$ is hyperbolic. Nonprimitive ray parameters may describe cone or orbifold completions but are not ordinary smooth fillings. No universal numeric length threshold or universal bound on the number of exceptional slopes is asserted.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8, Theorem 5.8.2](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** A complete finite-volume hyperbolic three-manifold with $k$ torus cusps, chosen peripheral bases, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies $\mathrm{AC}_\omega$.

[F2] [[def-multicusped-dehn-filling]]: ordinary filling parameters are primitive integral pairs modulo sign; nonprimitive ray multiples have the stated cone-angle convention.

[F3] [[def-pared-hyperbolic-structures-and-volume]]: the input carries a complete finite-volume curvature $-1$ metric with torus cusp ends.

[F4] [[def-cusp-slope-length]]: each primitive slope has a Euclidean length on a chosen horospherical section; changing the section rescales all lengths by one common factor on that cusp.

[A2] The planned interface [[lem-dehn-filling-deformation-and-completeness]] is not yet a proven fact: its full $k$-cusp local deformation and simultaneous filling conclusion remains under owner escalation.

[A3] [[thm-mostow-prasad-rigidity-and-knot-volume]]: the actual carrier has no proof and its Statement covers only knot exteriors with one cusp, not the general finite-volume $k$-cusped manifolds in this theorem.

## Proof

1.1 By the product topology, any neighborhood $U$ of $(\infty,\ldots,\infty)$ contains a product $\prod_i U_i$ of cuspwise neighborhoods of $\infty$. The complement $S_i\setminus U_i$ is compact in $\mathbb R^2$, so it is bounded; a bounded subset of $\mathbb R^2$ contains only finitely many lattice points in $\mathbb Z^2$. By [F4], the chosen-section length is a norm on this rank-two lattice up to a fixed linear coordinate change, so a sequence of primitive slopes with length tending to infinity eventually lies in $U_i$. Hence only finitely many primitive integral slope pairs at cusp $i$ lie outside $U_i$. This proves the finite-exception conclusion conditional on existence of the asserted neighborhood. [given, F2, F4, construct, algebra]

1.2 For any finite tuple in $\prod_iU_i\subseteq U$ with primitive coordinates, if the unresolved interface [A2] is established, it identifies the full-turn peripheral holonomies with smooth solid-torus cores while leaving coordinates $\infty$ complete. Thus the hyperbolic-filling conclusion follows conditionally from that interface; this step does not establish [A2]. [A2, F2, F3, step 1.1, construct]

1.3 The remaining implication is the existence of such a neighborhood for every complete finite-volume manifold with arbitrary finite $k$. The source proof uses the $k$-cusp analytic deformation space and a general Mostow–Prasad rigidity theorem. By [A3], the actual rigidity carrier has no proof and is restricted to knot exteriors with one cusp; the complete multi-cusp deformation-and-rigidity argument is therefore not supplied by the assigned prerequisites. The theorem assumes AC as required by that planned rigidity route, and [F1] gives its countable-choice consequence. The theorem remains unresolved at exactly this neighborhood-existence step. [A1, F1, F3, A2, A3, step 1.2, given]

## Owner escalation

The full general $k$-cusp statement and all ordinary-versus-cone qualifications are retained. The missing prerequisite is a proved Mostow–Prasad theorem for complete finite-volume orientable hyperbolic 3-manifolds with any finite number of torus cusps, together with the complete local $k$-dimensional deformation/holonomy proof that yields the neighborhood. The current Mostow supplier is unproved and one-cusped. Proposed placement: general rigidity on the hyperbolic-complements A page; multi-cusp deformation and holonomy on this page before the present theorem. The finite-lattice argument in step 1.1 is complete, but it does not prove neighborhood existence. This theorem is escalated, not accepted.

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8, Theorem 5.8.2](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)
