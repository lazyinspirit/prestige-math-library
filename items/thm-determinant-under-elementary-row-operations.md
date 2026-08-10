---
id: thm-determinant-under-elementary-row-operations
kind: theorem
title: "For every square matrix, including singular ones, a row swap negates the determinant, scaling a row by any scalar scales it, and row addition leaves it unchanged"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-determinant-is-alternating-multilinear-in-the-rows, def-row-transformations-over-a-commutative-ring, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.23"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $A\in M_n(R)$ be a matrix over a commutative ring.

1. Interchanging two rows changes $\det(A)$ to $-\det(A)$.
2. Multiplying one row by any $c\in R$ changes it to $c\det(A)$.
3. Adding $c$ times one row to a distinct row leaves it equal to $\det(A)$.

No invertibility assumption is made on $A$ or on $c$.

## Facts & Assumptions

**Given:** A square matrix $A$ over a commutative ring and a row transformation.

[L1] Determinant is alternating and multilinear in its rows ([[cor-determinant-is-alternating-multilinear-in-the-rows]]).

[L2] Ring row transformations include swaps, scaling by any scalar, and addition of a multiple of a distinct row ([[def-row-transformations-over-a-commutative-ring]]).

[L3] Determinant takes values in the same commutative ring ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Row multilinearity gives $\det(\ldots,cR_p,\ldots)=c\det(A)$ for every scalar $c$, including $c=0$ and zero divisors. [L1, L2, L3]

2.1 Row antisymmetry gives $\det(A')=-\det(A)$ when $A'$ is obtained by a row swap. [step 1.1, L1, L2]

3.1 Replacing $R_p$ by $R_p+cR_q$ expands the new determinant as $\det(A)+cD$, where $D$ has row $R_q$ in both positions $p$ and $q$; alternation gives $D=0$, so the determinant is unchanged. [step 2.1, L1, L2, algebra]

4.1 The derivations used only row multilinearity and alternation, not cancellation, matrix invertibility or scalar invertibility. Hence all three formulas include singular matrices and arbitrary scalars. [step 3.1] ∎
