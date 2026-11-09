---
id: lem-author-f08c343a07fc-local-chern-interface
kind: lemma
title: The ordinary Chow Chern map on isomorphism classes
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
Assume AC. For a smooth equidimensional finite-type scheme $X$ over a field and $r\geq1$, write $\mathrm{CH}^i(X)=A^i(X)$ for the group of codimension-$i$ cycles modulo rational equivalence. The tuple map $C_r:\mathrm{Vect}_r(X)\to\prod_{i=1}^r\mathrm{CH}^i(X)$ sends $[E]_{\mathrm{iso}}$ to $(c_i(E))_i$. It is well-defined and uses the quotient-projective-bundle convention: if $\xi=c_1(\mathcal O(1))$, its coefficients satisfy $\xi^r+\sum_{i=1}^r(-1)^i\pi^*c_i(E)\xi^{r-i}=0$. Equality of total Chern polynomials $1+\sum c_i(E)t^i$ is exactly equality of these tuples.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] Bundle isomorphism classes are a set. [[def-vector-bundle-classes]]

[F2] The Chow Chern classes are the unique coefficients of the quotient-projective-bundle relation and lie in $A^i(X)$. [[math:def-chern-classes-of-a-vector-bundle]]

## Proof

1.1 An isomorphism $E\cong F$ identifies their quotient projective bundles, projections and tautological quotient lines. The projective relations therefore identify, and coefficient uniqueness gives $c_i(E)=c_i(F)$. The tuple consequently descends to the set in [F1]. [F1, F2]

2.1 For a formal variable $t$, a polynomial is its finite list of coefficients. Thus equality of the total polynomials is equivalent to equality in each degree $1,\ldots,r$, precisely equality of $C_r$. This fixes the actual operation and its sign normalization. [F2, step 1.1] ∎
