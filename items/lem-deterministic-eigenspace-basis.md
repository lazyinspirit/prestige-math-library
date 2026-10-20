---
id: lem-deterministic-eigenspace-basis
kind: lemma
title: "Projected coordinate vectors give a deterministic orthonormal basis"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-orthogonal-projection
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $m\ge1$, let $E$ be a subspace of $\mathbb R^m$ with its standard inner product, and let $P_E$ be the orthogonal projection onto $E$. Let $e_1,\ldots,e_m$ be the standard coordinate vectors. Start a list with an optional unit vector $q_0\in E$. For each $i=1,\ldots,m$ in order, set $v_i=P_Ee_i$, subtract from $v_i$ its orthogonal projections onto the vectors already in the list, discard the residual if it is zero, and otherwise append the residual divided by its Euclidean norm. The resulting list is an orthonormal basis of $E$, beginning with $q_0$ when it is supplied.

## Statement references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Facts & Assumptions

**Given:** A subspace $E\subseteq\mathbb R^m$ with the standard inner product, its orthogonal projection $P_E$, the standard coordinate vectors $e_1,\ldots,e_m$, and an optional unit vector $q_0\in E$.

[F1] [[def-orthogonal-projection]]: every vector has a unique decomposition as a component in $E$ plus a component in $E^\perp$, and $P_Ev$ is the $E$-component.

## Proof

1.1 Write $x=\sum_{i=1}^m x_i e_i$. The unique decompositions of two vectors add, and scalar multiples of a decomposition remain decompositions, so uniqueness makes $P_E$ linear. If $x\in E$, its decomposition is $x+0$, hence $P_Ex=x$. Therefore $x=P_Ex=\sum_i x_iP_Ee_i$, and the projected coordinate vectors span $E$. [given, F1, algebra]

2.1 Start with $q_0$ if supplied, then process $v_i=P_Ee_i$ in order. Each residual $r_i=v_i-\sum_j\langle v_i,b_j\rangle b_j$ lies in $E$ and is orthogonal to every previously accepted orthonormal vector $b_j$. If $r_i=0$, then $v_i$ is already in their span; if $r_i\ne0$, appending $r_i/\|r_i\|_2$ preserves orthonormality and the span of all processed vectors. By induction, after the finite scan the accepted list is orthonormal and spans the initial vector together with all $P_Ee_i$. Step 1.1 shows this span is $E$, and the initial unit vector is first when present. [given, F1, step 1.1, algebra, construct] ∎
