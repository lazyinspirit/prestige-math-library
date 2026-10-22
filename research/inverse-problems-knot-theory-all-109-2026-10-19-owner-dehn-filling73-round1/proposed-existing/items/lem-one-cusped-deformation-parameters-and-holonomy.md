---
id: lem-one-cusped-deformation-parameters-and-holonomy
kind: lemma
title: "One-cusped deformation and peripheral logarithm coordinates"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - def-cusp-slope-length
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions
  - thm-augmented-finite-volume-hyperbolic-holonomy-coordinates
  - lem-simultaneous-peripheral-full-turn-equations-have-small-solutions
  - thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings
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

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with one torus cusp and a complete finite-volume hyperbolic metric. In a neighborhood of its complete holonomy, the representation deformation space modulo conjugacy is a complex one-dimensional manifold, with local coordinate $s=\operatorname{tr}^2\rho(\mu)$ near $s=4$ for a chosen peripheral basis $(\mu,\lambda)$.

Augment a representation by choosing a common invariant line of its peripheral holonomy. The augmented deformation space is a smooth complex curve, with holomorphic eigenvalue-ratio logarithm coordinate $u$ vanishing at the complete point. The forgetful map to the ordinary conjugacy quotient is $s=4\cosh^2(u/2)$. The corresponding logarithm $v(u)$ for $\lambda$ satisfies $v(0)=0$ and $v(u)=\tau u+O(u^2)$. Here $\operatorname{Im}\tau\ne0$; it is positive for a positively oriented basis of the oriented horotorus, and changes sign if the basis orientation is reversed. In particular the eigenvalue logarithm is a coordinate on the augmented space, rather than a single-valued holomorphic coordinate on the ordinary quotient.

The pair $(u,v)$ records the local generalized filling parameters. The primitive slope equation $p u+q v(u)=2\pi i$ has its full-turn holonomy meaning for ordinary smooth filling when $\gcd(p,q)=1$; sufficiently large primitive coefficients admit such small solutions and smooth complete hyperbolic fillings. Nonprimitive ray parameters are not ordinary slopes.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Danny Calegari, *Kleinian Groups*, §§2.3.2–2.4.1](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)

## Facts & Assumptions

**Given:** AC, the complete one-cusped metric and the chosen ordered peripheral basis.

[A1] AC supplies DC and countable choice for the analytic and geometric suppliers. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A complete oriented curvature-minus-one manifold is a Kleinian quotient, and finite volume supplies a compact smooth core with finitely many standard rank-two cusps. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions]]

[F2] For any such finite-volume quotient, the ordinary conjugacy quotient has independent trace-squared coordinates; its augmented space has independent eigenvalue-ratio logarithms, the stated branched forgetful map and peripheral factorization. [[thm-augmented-finite-volume-hyperbolic-holonomy-coordinates]]

[F3] Holomorphic peripheral factors with nonreal complete values admit unique simultaneous small full-turn solutions for all sufficiently large real coefficient tuples, including the partially unfilled coordinates. [[lem-simultaneous-peripheral-full-turn-equations-have-small-solutions]]

[F4] Small augmented solutions with primitive full-turn meridians give smooth complete finite-volume ordinary fillings. [[thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings]]

[F5] Ordinary slopes are primitive pairs modulo sign, and the chosen-section length is a lattice norm up to a fixed invertible real-linear map. [[def-multicusped-dehn-filling]], [[def-cusp-slope-length]], [[def-pared-hyperbolic-structures-and-volume]]

## Proof

1.1 Apply [F1] to the given complete metric. Its one cusp has the standard quotient description needed by [F2]. First choose a positively oriented basis. Specializing [F2] to $k=1$ gives the smooth ordinary curve with coordinate $s$, the smooth augmented curve with coordinate $u$, $s=4\cosh^2(u/2)$, and the holomorphic factorization $v(u)=u\tau(u)$ with $\operatorname{Im}\tau(0)>0$. Holomorphy gives $\tau(u)=\tau(0)+O(u)$, hence the asserted first-order expansion. This uses no ideal triangulation. [A1, F1, F2, given]

2.1 For an arbitrary supplied basis, keep its first element $\mu$. If its orientation is negative, replace $\lambda$ by $-\lambda$ temporarily to apply step 1.1, then return to the supplied basis by $v\mapsto-v$ and $\tau\mapsto-\tau$. This preserves $u$, the ordinary trace coordinate, the branched forgetful map, and all deformations. It proves precisely the signed nonreal assertion for every ordered basis. A holomorphic logarithm coordinate on the ordinary curve cannot replace this augmentation: differentiating $s=4\cosh^2(u/2)$ at $u=0$ gives $ds=0$ if $u$ were a holomorphic function on that curve, contradicting that $s$ is its local coordinate. [F2, step 1.1, algebra]

3.1 The coefficient equation has unique real coefficients when $u\ne0$, because $1,\tau(u)$ are real-linearly independent; $u=0$ is the complete parameter. Apply [F3] for the small-solution assertion. For a negatively oriented supplied basis, the simultaneous equation is unchanged after replacing $q$ by $-q$ and $v$ by $-v$, so [F4] supplies the same geometric completion after returning to the positive basis. By [F5], primitivity is exactly the ordinary meridian convention and nonprimitive multiples do not become ordinary slopes. Thus the full analytic and ordinary-filling conclusions hold for the entire given one-cusped class. [F3, F4, F5, step 2.1, algebra] ∎
