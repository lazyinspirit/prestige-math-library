---
id: lem-one-cusped-deformation-parameters-and-holonomy
kind: lemma
title: "One-cusped deformation and peripheral logarithm coordinates"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - def-cusp-slope-length
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy
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
      locator: "Chapter 5, §5.8, Lemma 5.8.1 and proof, printed pp.101–103"
    - title: "Danny Calegari, Kleinian Groups"
      url: "https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf"
      locator: "§§2.3.2–2.4.1, one-cusped holonomy deformation and slope equation, PDF pp.14–19"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with one torus cusp and a complete finite-volume hyperbolic metric. In a neighborhood of its complete structure, the local deformation space modulo conjugacy is a complex one-dimensional manifold. For a chosen peripheral basis $(\mu,\lambda)$, there is a holomorphic coordinate $u$ vanishing at the complete structure such that the peripheral eigenvalue-ratio logarithms are $u$ and $v(u)$, where $v(0)=0$ and $v(u)=\tau u+O(u^2)$ for a complex cusp shape $\tau$ with $\operatorname{Im}\tau>0$. Thus $(u,v)$ records the local generalized filling parameters, and the primitive slope equation $p u+q v(u)=2\pi i$ has the stated local holonomy meaning for ordinary filling only when $\gcd(p,q)=1$.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Danny Calegari, *Kleinian Groups*, §§2.3.2–2.4.1](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)

## Facts & Assumptions

**Given:** The complete one-cusped finite-volume hyperbolic structure, a chosen peripheral basis, the Axiom of Choice, and a nondegenerate ideal triangulation used to describe nearby shapes.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies $\mathrm{AC}_\omega$.

[F2] [[def-pared-hyperbolic-structures-and-volume]]: the complete structure is represented by a curvature $-1$ metric and peripheral holonomy on its torus cusp.

[F3] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]]: positive ideal shapes determine local tetrahedron metrics and peripheral multipliers.

[F4] [[lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy]]: positive shapes satisfying the edge equations give the glued metric away from the ideal vertex; trivial cusp multipliers give completeness at the complete point.

[F5] [[def-multicusped-dehn-filling]]: the primitive-pair convention distinguishes ordinary slopes from nonprimitive generalized parameters.

[F6] [[def-cusp-slope-length]]: the meaning of a slope becoming large depends on a chosen horospherical section, with scale changes multiplying all lengths by a positive constant.

[A2] [[lem-dehn-filling-deformation-and-completeness]]: the current multi-cusp local filling interface remains escalated and cannot yet supply the solution-existence claim.

[A3] [[thm-mostow-prasad-rigidity-and-knot-volume]]: the current carrier is unproved and its Statement is limited to one-cusped knot exteriors.

## Proof

1.1 By [F2] and [F3], the complete structure determines a positive shape solution of the edge equations, and the complete cusp has parabolic peripheral holonomies. The shape equations and peripheral holonomy expressions are analytic in the shape parameters near this nondegenerate point. This constructs the analytic equations whose local solution set must be analyzed. [given, A1, F1, F2, F3, F4, construct]

1.2 By [F5], the equation is an ordinary filling equation only when $(p,q)$ is primitive. To conclude that the local solution set modulo conjugacy is a smooth complex curve, one must prove the exact Jacobian rank for the edge equations and prove that a peripheral logarithm is a nonvanishing local coordinate; the cusp-shape expansion and $\operatorname{Im}\tau>0$ then require the corresponding first-order holonomy calculation. The assigned fixed-shape gluing lemma [F4] does not establish these deformation-space rank statements, the large-slope scaling interface [F6] supplies no rank calculation, the filling interface [A2] is unresolved, and the rigidity supplier [A3] is unproved and only one-cusped. These missing calculations are not supplied as completed arguments here, so the one-cusped deformation claim remains unresolved. [F3, F4, F5, F6, A2, A3, given]

## Owner escalation

The full one-cusped statement is retained. The unresolved work is the local analytic deformation theorem: compute the gluing-equation Jacobian at the complete shape, prove its rank modulo conjugacy, show a peripheral logarithm is a holomorphic coordinate, and derive $v'(0)=\tau$ with $\operatorname{Im}\tau>0$. The existing Mostow carrier has no proof; the separate multi-cusp consumer also needs a general finite-volume rigidity statement. Proposed placement is this A page for the one-cusp deformation proof and the hyperbolic-complements A page for general Mostow–Prasad rigidity. Affected claims are the local dimension, holonomy coordinate and first-order cusp-shape expansion. This item is escalated, not accepted.

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Danny Calegari, *Kleinian Groups*, §§2.3.2–2.4.1](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)
