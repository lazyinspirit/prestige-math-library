---
id: thm-plucker-image-closed
kind: theorem
title: The Plucker image is a closed projective algebraic set
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-plucker-map-well-defined-injective, thm-closed-projective-embedding-by-homogeneous-generators, thm-exterior-algebra-laws]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Proposition 6.29 and its second proof
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 4, Theorem 4.1
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The Plucker image of $\operatorname{Gr}(r,V)$ is a closed projective algebraic set in $\mathbf P(\Lambda^rV)$, cut out by the quadratic Plucker relations.

## Facts & Assumptions

**Given:** Coordinates $p_I$ indexed by increasing $r$-subsets $I$ of a basis of $V$. Extend the notation to any ordered $r$-tuple by declaring $p_{i_1\ldots i_r}=0$ for repeated indices and otherwise using the sign of the permutation that sorts the tuple.

## Proof

1.1 For $r=0$ or $r=n$, the Grassmannian and $\mathbf P(\Lambda^rV)$ are both one point, so the assertion is immediate. Suppose henceforth that $0<r<n$. For ordered tuples $(i_1,\ldots,i_{r-1})$ and $(j_1,\ldots,j_{r+1})$, alternating multilinearity gives the signed Plucker relation $$\sum_{a=1}^{r+1}(-1)^a p_{i_1\ldots i_{r-1}j_a} p_{j_1\ldots\widehat{j_a}\ldots j_{r+1}}=0.$$ The ordered-coordinate convention supplies every insertion sign and makes repeated indices contribute zero. [given, algebra]

2.1 On the chart $p_{1\cdots r}\ne0$, divide by that coordinate and use the relations with $I\subseteq\{1,\ldots,r\}$ to express every $p_I$ as the corresponding minor of the matrix $(I_r\mid A)$. Its row span has precisely those coordinates. [step 1.1, algebra]

3.1 The analogous charts cover every nonzero coordinate point satisfying the relations. Thus every such point is decomposable, while step 1.1 proved the reverse inclusion; homogeneous quadratic equations make this locus closed, and the injective Plucker map realizes it as the required projective algebraic set. [step 2.1] ∎
