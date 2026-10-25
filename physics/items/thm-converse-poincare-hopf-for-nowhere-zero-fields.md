---
id: thm-converse-poincare-hopf-for-nowhere-zero-fields
kind: theorem
title: "Converse Poincare-Hopf for nowhere-zero fields"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-for-closed-manifolds, cor-nowhere-zero-vector-field-forces-zero-euler-characteristic, thm-index-of-a-nondegenerate-vector-field-zero, lem-local-index-is-additive-under-a-transverse-perturbation, lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball, lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball, lem-closed-connected-one-manifolds-are-circles, cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, def-riemannian-gradient-of-a-smooth-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, thm-every-smooth-manifold-admits-a-riemannian-metric, def-morse-function-and-excellent-morse-function, def-nondegenerate-zero-of-a-vector-field, def-euler-characteristic-of-a-compact-manifold, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §6, Exercises 10-13 with hints, printed pp. 146-148 (existence of a nowhere-zero field after cancelling opposite zeros)"
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Hopf's existence remark and the circle case, printed pp. 39-40"
dependency_level: 7
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
connected smooth $n$-manifold, $n\ge1$. Then $M$ admits a nowhere-zero smooth
vector field ([[def-smooth-vector-field-as-a-tangent-bundle-section]]) if and
only if $\chi(M)=0$ ([[def-euler-characteristic-of-a-compact-manifold]]).

## Facts & Assumptions

**Given:** A closed connected smooth $n$-manifold $M$, $n\ge1$.

[F1] If $M$ admits a nowhere-zero field then $\chi(M)=0$ ([[cor-nowhere-zero-vector-field-forces-zero-euler-characteristic]]).

[F2] For $n=1$: if $M\neq\varnothing$ then $M$ is diffeomorphic to the circle $S^1=\mathbb R/\mathbb Z$, which carries the standard nowhere-zero rotational field $\partial_\theta$; the empty manifold admits the empty field vacuously ([[lem-closed-connected-one-manifolds-are-circles]]).

[F3] For $n\ge2$: choose an excellent Morse function $f$ and a Riemannian metric $g$; the field $X:=\operatorname{grad}_gf$ has only nondegenerate zeros, namely the critical points, and a critical point of index $\lambda$ has index $(-1)^{\lambda}=\pm1$ ([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]], [[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[def-riemannian-gradient-of-a-smooth-function]], [[lem-riemannian-gradient-vanishes-exactly-at-critical-points]], [[cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda]], [[thm-index-of-a-nondegenerate-vector-field-zero]]).

[F4] Poincare-Hopf: $\sum_p\operatorname{ind}_pX=\chi(M)$ ([[thm-poincare-hopf-for-closed-manifolds]]).

[F5] Given two remaining zeros of opposite index, the ball-selection lemma gives a smooth closed ball containing them in its interior and avoiding every other remaining zero ([[lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball]]). They can be cancelled by a modification supported in the interior of that ball, agreeing with the current field near its boundary ([[lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball]]). Subsequent balls may overlap previous ones; they need only avoid the other zeros of the current field.

## Proof

1.1 The forward implication is [F1]. For the converse, the empty manifold has the empty nowhere-zero field. A nonempty closed connected $1$-manifold is a circle by [F2]; transporting its rotational field gives a nowhere-zero field. [F1, F2, given, construct]

1.2 Let $n\ge2$ and $\chi(M)=0$. Choose the Morse gradient $X$ of [F3]. Its finite zero set has indices $\pm1$, and their sum is zero by [F4], so the numbers of positive and negative zeros agree. If there are no zeros, the claim follows immediately. [F3, F4, given, algebra]

2.1 Otherwise select one zero of each sign and use [F5] with the finite set of all other current zeros. The resulting ball contains exactly that pair and no boundary zero. Cancel the pair inside it, leaving the field unchanged near the boundary and outside the ball. No new zeros are introduced, and every other zero and its local germ are unchanged. Thus the new field again has equally many positive and negative nondegenerate zeros, with two fewer zeros. Repeating this finite process ends with a smooth nowhere-zero field. This uses neither disjoint supports nor a claim that deleting balls preserves connectedness. [F5, step 1.2, construct, algebra] ∎

