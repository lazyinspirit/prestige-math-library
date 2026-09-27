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
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Proposition 6.29 and its second proof
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 4, Theorem 4.1
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
---

## Statement

The Plucker image of $\operatorname{Gr}(r,V)$ is a closed projective algebraic set in $\mathbf P(\Lambda^rV)$, cut out by the quadratic Plucker relations.

## Facts & Assumptions

**Given:** Coordinates $p_I$ indexed by increasing $r$-subsets $I$ of a basis of $V$. Extend the notation to any ordered $r$-tuple by declaring $p_{i_1\ldots i_r}=0$ for repeated indices and otherwise using the sign of the permutation that sorts the tuple.

## Proof

1.1 For $r=0$ or $r=n$, the Grassmannian and $\mathbf P(\Lambda^rV)$ are both one point, so the assertion is immediate. Suppose henceforth that $0<r<n$. For ordered tuples $(i_1,\ldots,i_{r-1})$ and $(j_1,\ldots,j_{r+1})$, alternating multilinearity gives the signed Plucker relation $$\sum_{a=1}^{r+1}(-1)^a p_{i_1\ldots i_{r-1}j_a} p_{j_1\ldots\widehat{j_a}\ldots j_{r+1}}=0.$$ The ordered-coordinate convention supplies every insertion sign and makes repeated indices contribute zero. [given, algebra]

2.1 On a chart with $p_{1\cdots r}\ne0$, rescale so that $p_{1\cdots r}=1$ and define the entries of $A$ by the coordinates with exactly one index outside $\{1,\ldots,r\}$, using their alternating signs. The maximal minors of $(I_r\mid A)$ agree with these coordinates when zero or one index is outside the base set. Induct on the number of outside indices in an ordered $r$-tuple $I$. For an outside index $j\in I$, apply the relation of step 1.1 to the $(r-1)$-tuple $I\setminus\{j\}$ and the $(r+1)$-tuple $(1,\ldots,r,j)$. The term omitting $j$ is, up to sign, $p_Ip_{1\cdots r}=p_I$; every other term is a product of a coordinate with fewer outside indices and a one-outside coordinate. The minors of $(I_r\mid A)$ satisfy the same relation, so the induction identifies $p_I$ with its corresponding minor. Thus the row span has precisely the given projective coordinates. [step 1.1, algebra]

3.1 The analogous charts cover every nonzero coordinate point satisfying the relations. Thus every such point is decomposable, while step 1.1 proved the reverse inclusion; homogeneous quadratic equations make this locus closed, and the injective Plucker map realizes it as the required projective algebraic set. [step 2.1] ∎
