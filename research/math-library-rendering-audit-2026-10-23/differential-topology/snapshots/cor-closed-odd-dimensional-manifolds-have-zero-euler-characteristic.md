---
id: cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic
kind: corollary
title: "Closed odd-dimensional manifolds have zero Euler characteristic"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, lem-negation-scales-the-local-index-by-minus-one-to-the-dimension, thm-poincare-hopf-for-closed-manifolds, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, def-riemannian-gradient-of-a-smooth-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, thm-every-smooth-manifold-admits-a-riemannian-metric, def-euler-characteristic-of-a-compact-manifold, def-morse-function-and-excellent-morse-function, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed p. 39 (the odd-dimensional Euler number vanishes because X and -X give opposite sums)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 134-137 (odd-dimensional consequence of the index theorem)"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed smooth
$n$-manifold with $n$ odd. Then $\chi(M)=0$
([[def-euler-characteristic-of-a-compact-manifold]]).

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$ with $n$ odd.

[F1] There is an excellent Morse function $f$ on $M$, and for any Riemannian
metric $g$ the field $X:=\operatorname{grad}_gf$ vanishes exactly at the
(finitely many, nondegenerate) critical points of $f$
([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]],
[[thm-every-smooth-manifold-admits-a-riemannian-metric]],
[[def-riemannian-gradient-of-a-smooth-function]],
[[lem-riemannian-gradient-vanishes-exactly-at-critical-points]],
[[def-morse-function-and-excellent-morse-function]]).

[F2] The field $-X$ has the same zeros as $X$, and
$\operatorname{ind}_p(-X)=(-1)^n\operatorname{ind}_pX$; for odd $n$ this is
$-\operatorname{ind}_pX$ ([[lem-negation-scales-the-local-index-by-minus-one-to-the-dimension]],
[[def-isolated-zero-and-local-index-of-a-vector-field]]).

[F3] Poincare-Hopf: for a smooth field with only isolated zeros on a closed
manifold, the index sum equals $\chi(M)$
([[thm-poincare-hopf-for-closed-manifolds]]).

## Proof

1.1 Choose an excellent Morse function $f$ and a Riemannian metric $g$; the field $X=\operatorname{grad}_gf$ has only isolated (indeed nondegenerate) zeros, so [F3] gives $\chi(M)=\sum_p\operatorname{ind}_pX$. [F1, F3, algebra]

2.1 The field $-X$ has the same zero set, and since $n$ is odd [F2] gives $\operatorname{ind}_p(-X)=-\operatorname{ind}_pX$; applying [F3] to $-X$ gives $\chi(M)=\sum_p\operatorname{ind}_p(-X)=-\sum_p\operatorname{ind}_pX=-\chi(M)$ by step 1.1. Hence $2\chi(M)=0$ in $\mathbb Z$, so $\chi(M)=0$. [F2, F3, step 1.1, algebra] ∎
