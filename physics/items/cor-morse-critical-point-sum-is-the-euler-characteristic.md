---
id: cor-morse-critical-point-sum-is-the-euler-characteristic
kind: corollary
title: "The Morse critical-point sum is the Euler characteristic"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-for-closed-manifolds, cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda, def-riemannian-gradient-of-a-smooth-function, thm-every-smooth-manifold-admits-a-riemannian-metric, def-morse-function-and-excellent-morse-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, def-euler-characteristic-of-a-compact-manifold, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Theorem 1 and the odd-dimensional corollary, printed pp. 38-39"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Corollary 2.3.3 and its discussion, printed pp. 48-49 (the alternating critical-point sum equals the Euler characteristic)"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed smooth
$n$-manifold with $n\ge1$, and let $f:M\to\mathbb R$ be a Morse function
([[def-morse-function-and-excellent-morse-function]]) and let $g$ be a
Riemannian metric on $M$
([[thm-every-smooth-manifold-admits-a-riemannian-metric]]). Then
$$\sum_{p\in\operatorname{Crit}(f)}(-1)^{\operatorname{ind}(p)}=\chi(M),$$
the sum over the finitely many critical points of $f$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f$ and a
Riemannian metric $g$ on $M$.

[F1] The field $\operatorname{grad}_gf$ vanishes exactly at the critical points
of $f$, which are finitely many, and at a critical point of index $\lambda$ its
index is $(-1)^{\lambda}$
([[def-riemannian-gradient-of-a-smooth-function]],
[[lem-riemannian-gradient-vanishes-exactly-at-critical-points]],
[[cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda]],
[[def-morse-function-and-excellent-morse-function]]).

[F2] Poincare-Hopf: the index sum of a smooth field with only isolated zeros on
a closed manifold equals $\chi(M)$
([[thm-poincare-hopf-for-closed-manifolds]],
[[def-euler-characteristic-of-a-compact-manifold]]).

## Proof

1.1 The critical points of a Morse function on a closed manifold are finitely many and each is a nondegenerate zero of $\operatorname{grad}_gf$; hence the field has only isolated zeros and [F2] gives $\sum_p\operatorname{ind}_p(\operatorname{grad}_gf)=\chi(M)$. [F1, F2, algebra]

2.1 By [F1] each summand is $\operatorname{ind}_p(\operatorname{grad}_gf)=(-1)^{\operatorname{ind}(p)}$, so substituting into step 1.1 gives $\sum_{p\in\operatorname{Crit}(f)}(-1)^{\operatorname{ind}(p)}=\chi(M)$. [F1, step 1.1, algebra] ∎
