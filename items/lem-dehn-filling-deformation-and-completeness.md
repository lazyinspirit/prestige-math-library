---
id: lem-dehn-filling-deformation-and-completeness
kind: lemma
title: Peripheral holonomy equations produce smooth hyperbolic fillings
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
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
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: William P. Thurston, The Geometry and Topology of Three-Manifolds
      url: https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf
      locator: Chapter 5, §5.8, Lemma 5.8.1 and Theorem 5.8.2, printed pp.101–104
    - title: Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations
        and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem
      url: https://arxiv.org/pdf/math/9901045
      locator: Theorem 0.1 and §§1–3; Propositions 2.9 and 3.6
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $M$ be the interior of a compact connected orientable three-manifold with $k\ge1$ torus cusps and a complete finite-volume hyperbolic metric. Choose a peripheral basis $(\mu_i,\lambda_i)$ on each cusp. On the augmented holonomy space obtained by selecting one common invariant line on each peripheral subgroup, near the complete structure write $u_i$ and $v_i$ for the logarithms of the eigenvalue ratios of the peripheral holonomies of $\mu_i$ and $\lambda_i$, with branches chosen so $u_i=v_i=0$ at the complete structure. There is a neighborhood of the complete point in the $k$ generalized parameter spheres such that primitive integral filling data $(p_i,q_i)$ in that neighborhood satisfying $p_i u_i+q_i v_i=2\pi i$ at every filled cusp produce a complete finite-volume hyperbolic structure on the ordinary filled manifold. The peripheral full-turn equations are solved simultaneously across the $k$ cusps; unfilled cusps retain their complete parabolic holonomy. No universal numeric length threshold is asserted.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 5, §5.8](https://library.slmath.org/nonmsri/gt3m/PDF/5.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, Theorem 0.1 and §§1–3](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** AC, the full finite-volume $k$-cusped metric, the ordered peripheral bases and the primitive filling data.

[A1] AC supplies DC and countable choice. [[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The given metric has a Kleinian quotient description and a compact smooth core with standard torus cusps. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]], [[lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions]]

[F2] The augmented deformation germ is smooth of complex dimension $k$, with independent logarithms $u_i$ and $v_i=u_i\tau_i(u)$, where the complete $\tau_i$ are nonreal; for positive bases their imaginary parts are positive. [[thm-augmented-finite-volume-hyperbolic-holonomy-coordinates]]

[F3] These factors admit a product neighborhood of the complete generalized parameters with unique simultaneous small full-turn solutions, continuous also at partially unfilled tuples. [[lem-simultaneous-peripheral-full-turn-equations-have-small-solutions]]

[F4] Given such primitive solutions, the explicit developed ends extend to smooth solid-torus cores; the resulting metric is complete and has finite volume. Coordinates $u_i=0$ remain complete cusps. [[thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings]]

[F5] Ordinary fillings use primitive slopes modulo sign, and cusp lengths use chosen-section Euclidean norms. [[def-multicusped-dehn-filling]], [[def-cusp-slope-length]], [[def-pared-hyperbolic-structures-and-volume]]

## Proof

1.1 By [F1], the input metric satisfies the standard cusp and quotient hypotheses of [F2]. Temporarily orient every peripheral basis positively by replacing its second element by its negative exactly where necessary. The augmented theorem [F2] supplies one common neighborhood of $0\in\mathbb C^k$ with holomorphic $\tau_i$ and $\operatorname{Im}\tau_i(0)>0$. Changing back the second basis element negates $v_i$ and $\tau_i$, so their complete values remain nonreal for every original basis. The logarithms are taken on this augmented space; their branched relationship with ordinary trace-squared coordinates is part of [F2]. [A1, F1, F2, given]

2.1 Shrink the small neighborhood enough for [F4]. Apply [F3] there to all $k$ factors simultaneously, rather than solving independent one-cusp deformations. It gives a radius $R$ and a product neighborhood $V=\prod_i(\{(p,q):p^2+q^2>R^2\}\cup\{\infty\})$ in which every tuple has its unique small solution. Its $i$th coordinate is zero exactly for the parameters $\infty$. At every finite coordinate it satisfies $p_i u_i+q_i v_i=2\pi i$. This is the asserted neighborhood and the full simultaneous solution. [F2, F3, step 1.1, construct]

3.1 At a primitive integral coordinate, [F4] realizes the holonomy family by a metric and identifies the developed end as a punctured ordinary tube whose meridional angular period is precisely one full turn. It fills that end by a smooth geodesic core. Its complete proof treats the finite collection of ends together, proves metric completeness and finite volume, and leaves each $u_i=0$ end a complete translation cusp. If a supplied basis was negative, change $q_i$ to $-q_i$ along with $v_i$ to $-v_i$ before applying that supplier; the equation and unoriented primitive slope are unchanged. Return afterward to the supplied bases. Thus the construction applies to every allowed tuple and its ordinary filling data. By [F5], no nonprimitive coefficient is being called an ordinary slope. The constants depend on the original metric and the cusp coordinates, as permitted; no universal length bound is asserted. [F4, F5, step 1.1, step 2.1, algebra] ∎
