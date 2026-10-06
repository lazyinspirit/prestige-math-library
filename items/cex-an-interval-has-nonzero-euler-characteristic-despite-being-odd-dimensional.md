---
id: cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional
kind: counterexample
title: "An interval has nonzero Euler characteristic despite being odd-dimensional"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic, def-euler-characteristic-of-a-compact-manifold, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, thm-poincare-hopf-with-outward-pointing-boundary, def-inward-outward-and-boundary-tangent-vectors, thm-index-of-a-nondegenerate-vector-field-zero, def-interval, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 39-41 (the closedness hypothesis in the odd-dimensional vanishing)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed p. 134 (the boundary case and its conventions)"
dependency_level: 9
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the applications of Poincare-Hopf below.

The closedness hypothesis in
[[cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic]] cannot
be dropped: the closed interval $[0,1]$ ([[def-interval]]) is a compact smooth
$1$-manifold with boundary, of odd dimension, and
$$\chi([0,1])=1\ne0,$$ because $[0,1]$ is contractible, so
$H_0([0,1];\mathbb Q)\cong\mathbb Q$ and all higher rational homology vanishes
([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]],
[[def-euler-characteristic-of-a-compact-manifold]]). The boundary form
[[thm-poincare-hopf-with-outward-pointing-boundary]] is consistent with this:
the outward field $X(t)=t-\tfrac12$ has its only zero at $t=\tfrac12$,
nondegenerate with linearization $1$ and index $+1$
([[thm-index-of-a-nondegenerate-vector-field-zero]]), so its index sum $1$
equals $\chi([0,1])$, exactly as the outward-boundary formula requires.

## Facts & Assumptions

**Given:** The closed interval $[0,1]$ as a compact smooth $1$-manifold with boundary ([[def-interval]]), and the field $X(t)=t-\tfrac12$.

[F1] A contractible nonempty space has the rational homology of a point, so $H_0([0,1];\mathbb Q)\cong\mathbb Q$, all higher groups vanish, and $\chi([0,1])=1$ ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]], [[def-euler-characteristic-of-a-compact-manifold]]).

[F2] The field $X(t)=t-\tfrac12$ is strictly outward on $\partial[0,1]$ at the endpoint $1$ (where $X(1)=\tfrac12>0$, pointing out of $[0,1]$) and strictly outward at the endpoint $0$ (where $X(0)=-\tfrac12<0$, pointing out of $[0,1]$); its only zero is $t=\tfrac12$, nondegenerate with index $\operatorname{sign}\det(1)=+1$ ([[thm-index-of-a-nondegenerate-vector-field-zero]], [[def-inward-outward-and-boundary-tangent-vectors]]).

[F3] The outward-boundary form of Poincare-Hopf applies to this smooth field and gives $\sum_p\operatorname{ind}_pX=\chi([0,1])$, i.e. $1=1$ ([[thm-poincare-hopf-with-outward-pointing-boundary]]).

## Counterexample

1.1 The interval $[0,1]$ has dimension one, which is odd, but by [F1] its Euler characteristic is $\chi([0,1])=1\ne0$; thus the conclusion of the odd-dimensional vanishing fails as soon as the closedness hypothesis is dropped. [F1, algebra]

2.1 The standard outward field $X(t)=t-\tfrac12$ has the single nondegenerate zero $t=\tfrac12$ of index $+1$ by [F2], so its index sum is $1=\chi([0,1])$ and the outward-boundary formula remains true here; the interval therefore refutes only the closedness hypothesis of the odd-dimensional corollary, not the boundary form itself. [F2, F3, step 1.1, algebra] ∎
