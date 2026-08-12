---
id: thm-nonzero-commutative-rings-have-invariant-basis-number
kind: theorem
title: "Every nonzero commutative ring has invariant basis number for finite bases"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invariant-basis-number-and-rank-of-a-free-module, def-free-module-on-a-set-and-standard-basis, def-ring-matrix-product-identity-and-transpose, thm-ring-matrix-arithmetic-laws, def-determinant-of-a-square-matrix, thm-determinant-is-the-unique-normalized-alternating-multilinear-function, cor-determinant-vanishes-with-a-zero-or-repeated-column]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Every nonzero commutative unital ring has invariant basis number for finite bases: if $R^m\cong R^n$ as $R$-modules, then $m=n$. The proof is choice-free.

## Facts & Assumptions

**Given:** A nonzero commutative unital ring $R$ and inverse module isomorphisms $R^m\rightleftarrows R^n$.

[F1] Invariant basis number means precisely that $R^m\cong R^n$ forces $m=n$ for finite $m,n$ ([[def-invariant-basis-number-and-rank-of-a-free-module]]).

[F2] Rectangular matrix products use $(AB)_{ik}=\sum_j a_{ij}b_{jk}$; matrix multiplication is associative and the identity matrices are multiplicative identities, including for zero-sized shapes ([[def-ring-matrix-product-identity-and-transpose]], [[thm-ring-matrix-arithmetic-laws]]).

[F4] The module $R^n$ is free on its standard coordinate vectors, and every vector has a unique finite coordinate expression ([[def-free-module-on-a-set-and-standard-basis]]).

[F3] The determinant of an $n\times n$ matrix over a commutative ring is normalized and multilinear in its columns ([[def-determinant-of-a-square-matrix]], [[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

[L1] An $n\times n$ matrix with a zero column or two equal columns has determinant zero ([[cor-determinant-vanishes-with-a-zero-or-repeated-column]]).

## Proof

**Proof technique:** contradiction.

1.1 Record the images of the standard basis vectors from [F4] as the columns of rectangular matrices $A$ and $B$. The coordinate formula and [F2] turn the two inverse composites into $AB=I_n$ and $BA=I_m$. [given, F2, F4]

2.1 Suppose first that $n>m$. Each of the $n$ columns of $AB$ is an $R$-linear combination of the $m$ columns of $A$. [assume-contra, step 1.1, F2]

3.1 Expanding $\det(AB)$ by multilinearity in all $n$ columns, each term chooses one of the $m$ columns of $A$ in each of $n$ positions. Since $n>m$, some chosen column repeats, so every term is zero by [L1]. Thus $\det(AB)=0$. [step 2.1, F3, L1]

4.1 But $AB=I_n$, so normalization gives $\det(AB)=1_R\ne0$, contradicting step 3.1. Hence $n\le m$. [step 1.1, step 3.1, F3]

5.1 Interchanging $A,B$ and $m,n$ gives $m\le n$. Therefore $m=n$, proving [F1]. The cases $m=0$ or $n=0$ are included: a strict inequality makes the other positive and the same determinant argument applies. [step 4.1, F1, discharge-contradiction] ∎
