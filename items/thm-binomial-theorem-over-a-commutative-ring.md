---
id: thm-binomial-theorem-over-a-commutative-ring
kind: theorem
title: "The binomial theorem over an arbitrary commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutative-ring, def-binomial-coefficient, def-group-power, thm-pascals-rule]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring. For all $x,y\in R$ and $n\in\mathbb N$,

$$ (x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k}.$$

The natural-number coefficients act by repeated addition. The formula includes $n=0$.

## Facts & Assumptions

**Given:** A commutative ring $R$, elements $x,y\in R$, and a natural number $n$.

[L1] Multiplication in a commutative ring is commutative and distributes over addition ([[def-commutative-ring]]).

[L2] The binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set, with $\binom n0=\binom nn=1$ ([[def-binomial-coefficient]]).

[L3] Natural powers satisfy $z^0=1$ and $z^{r+1}=z^rz$ ([[def-group-power]]).

[L4] Pascal's identity is $\binom{n+1}{k+1}=\binom nk+\binom n{k+1}$ ([[thm-pascals-rule]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, both sides are $1$: the left by [L3], and the right is the sole term $\binom00x^0y^0=1$. [base, L2, L3]

1.2 Assume the formula holds for $n$. [ih]

2.1 Multiply the inductive formula by $x+y$, distribute using [L1], and reindex to obtain the coefficient $\binom n{k-1}+\binom nk$ on $x^ky^{n+1-k}$ for each interior $k$. [step 1.2, L1, L3, algebra]

3.1 By [L4] these interior coefficients are $\binom{n+1}k$, and [L2] supplies the two endpoint coefficients $1$. Thus the formula holds for $n+1$. [step 2.1, L2, L4, algebra]

4.1 Induction proves the identity for every natural $n$. [step 1.1, step 3.1, discharge-induction] ∎
