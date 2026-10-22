---
id: lem-dehn-filling-deformation-and-completeness
kind: lemma
title: "Peripheral holonomy equations produce smooth hyperbolic fillings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - def-cusp-slope-length
  - lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy
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
      locator: "Chapter 5, §5.8, Lemma 5.8.1 and Theorem 5.8.2, printed pp.101–104"
    - title: "Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem"
      url: "https://arxiv.org/pdf/math/9901045"
      locator: "Theorem 0.1 and §§1–3; Propositions 2.9 and 3.6"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with $k\ge1$ torus cusps and a complete finite-volume hyperbolic metric. Choose a peripheral basis $(\mu_i,\lambda_i)$ on each cusp. Near the complete structure, write $u_i$ and $v_i$ for the logarithms of the eigenvalue ratios of the peripheral holonomies of $\mu_i$ and $\lambda_i$, with branches chosen so $u_i=v_i=0$ at the complete structure. There is a neighborhood of the complete point in the $k$ generalized parameter spheres such that primitive integral filling data $(p_i,q_i)$ in that neighborhood satisfying $p_i u_i+q_i v_i=2\pi i$ at every filled cusp produce a complete finite-volume hyperbolic structure on the ordinary filled manifold. The peripheral full-turn equations are solved simultaneously across the $k$ cusps; unfilled cusps retain their complete parabolic holonomy. No universal numeric length threshold is asserted.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** The complete finite-volume hyperbolic structure, its $k$ torus cusps and chosen peripheral bases, the Axiom of Choice, and primitive filling pairs at selected cusps.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$.

[F2] [[def-multicusped-dehn-filling]]: an ordinary filling uses a primitive integral pair modulo sign; nonprimitive ray parameters represent cone or orbifold completions, not ordinary slopes.

[F3] [[def-pared-hyperbolic-structures-and-volume]]: a complete hyperbolic structure is a curvature $-1$ metric with torus cusp ends.

[F4] [[def-cusp-slope-length]]: the Euclidean length of each primitive slope is measured on a chosen horospherical section, and changes by the stated scale factor when the section changes.

[F5] [[lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy]]: when a primitive filling curve has full-turn angular holonomy and the developed end is the stated standard tube, the metric extends smoothly over the filled core.

[A2] [[thm-mostow-prasad-rigidity-and-knot-volume]]: the actual carrier has no proof and its Statement is restricted to interiors of knot exteriors with one cusp, whereas this lemma requires the complete finite-volume theorem for arbitrary finite $k$-cusped manifolds.

## Proof

1.1 The complete point has parabolic peripheral holonomy, so the chosen logarithm branches satisfy $u_i=v_i=0$ there. A solution of $p_i u_i+q_i v_i=2\pi i$ gives a full-turn meridional holonomy at cusp $i$. If its developed end has the standard tube model in [F5], then [F5] extends the metric across that filled cusp; disjoint tube neighborhoods allow these finite extensions to be performed simultaneously. [given, A1, F1, F2, F3, F5, construct]

1.2 The large-slope condition is measured by the chosen-section lengths in [F4]; rescaling a section multiplies every length by one positive constant and therefore does not change which sequences of slopes tend to infinity. The source proof obtains the required nearby parameters by a local deformation-space theorem for the $k$-cusped gluing equations, proves the peripheral logarithms have the needed rank, and uses rigidity to isolate the complete structure in the quotient. By [A2], the currently supplied Mostow carrier has no proof and only states rigidity for knot exteriors (one cusp); the assigned claim requires the finite-volume $k$-cusped theorem. No complete local proof of the multi-cusp rank and simultaneous holonomy-solution step is available in the assigned materials, so the derivation of the neighborhood and of solutions for all sufficiently large primitive tuples remains unresolved. [F2, F3, F4, A2, step 1.1, given]

## Owner escalation

The statement remains at its planned $k$-cusp scope. It requires (i) a proved local $k$-complex-dimensional deformation theorem for complete finite-volume ideal triangulations with torus cusps, including the peripheral logarithm rank and simultaneous filling-equation solution, and (ii) a proved Mostow–Prasad rigidity theorem for complete finite-volume orientable hyperbolic 3-manifolds with any finite number of torus cusps. The actual Mostow carrier is unproved and one-cusped. Proposed placement: add/repair the general rigidity supplier on the hyperbolic-complements A page, then prove the multi-cusp deformation module on this A page before this lemma. Affected claim: existence of the stated neighborhood and smooth hyperbolic fillings for all primitive large slope tuples. This item is escalated, not accepted.

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)
