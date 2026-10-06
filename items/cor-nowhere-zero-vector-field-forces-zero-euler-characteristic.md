---
id: cor-nowhere-zero-vector-field-forces-zero-euler-characteristic
kind: corollary
title: "A nowhere-zero vector field forces zero Euler characteristic"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-for-closed-manifolds, def-isolated-zero-and-local-index-of-a-vector-field, def-euler-characteristic-of-a-compact-manifold, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, the corollary on nowhere-zero fields and the odd-dimensional Euler number, printed p. 39"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, the Poincare-Hopf index theorem statement and its nowhere-zero consequence, printed p. 134"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed smooth
$n$-manifold, $n\ge1$, and suppose $M$ admits a smooth vector field $X$ with no
zeros at all. Then $\chi(M)=0$
([[def-euler-characteristic-of-a-compact-manifold]]).

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$ with a nowhere-zero smooth vector
field $X$.

[F1] A vector field with no zeros has only isolated zeros, so Poincare-Hopf
applies: $\sum_{p:X(p)=0}\operatorname{ind}_pX=\chi(M)$
([[thm-poincare-hopf-for-closed-manifolds]],
[[def-isolated-zero-and-local-index-of-a-vector-field]]).

## Proof

1.1 The zero set of $X$ is empty by hypothesis, so it consists of isolated zeros vacuously and the hypothesis of [F1] is satisfied; the index sum $\sum_{p:X(p)=0}\operatorname{ind}_pX$ is the empty sum $0$. [F1, algebra]

2.1 Poincare-Hopf [F1] now gives $\chi(M)=\sum_{p:X(p)=0}\operatorname{ind}_pX=0$. [F1, step 1.1, algebra] ∎
