---
id: lem-leading-multidegrees-of-elementary-symmetric-monomials
kind: lemma
title: "The leading multidegree of $e_1^{b_1}\\cdots e_n^{b_n}$ is $(b_1+\\cdots+b_n,b_2+\\cdots+b_n,\\ldots,b_n)$ with coefficient one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-symmetric-polynomials, def-lexicographic-order-and-polynomial-multidegree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring with $1\ne0$. For $b_1,\ldots,b_n\in\mathbb N$, the leading multidegree in $R[x_1,\ldots,x_n]$ of $e_1^{b_1}\cdots e_n^{b_n}$ is

$$\bigl(b_1+\cdots+b_n,\ b_2+\cdots+b_n,\ \ldots,\ b_n\bigr),$$

and its leading coefficient is $1$. Distinct tuples $(b_1,\ldots,b_n)$ give distinct leading multidegrees.

## Facts & Assumptions

**Given:** A commutative ring $R$ with $1\ne0$ and natural numbers $b_1,\ldots,b_n$. The hypothesis $1\ne0$ is needed: over the zero ring every polynomial is $0$, and [L2] gives a leading multidegree only for a nonzero polynomial.

[L1] The elementary polynomial $e_k$ is the sum of all squarefree monomials of degree $k$ in the variables ([[def-elementary-symmetric-polynomials]]).

[L2] Lexicographic leading multidegree is the greatest exponent tuple carrying a nonzero coefficient ([[def-lexicographic-order-and-polynomial-multidegree]]).

## Proof

**Proof technique:** direct.

1.1 The lexicographically leading monomial of $e_k$ is $x_1\cdots x_k$, and its coefficient is $1$: at the first omitted variable, any other squarefree degree-$k$ monomial has exponent $0$ where this one has exponent $1$. [L1, L2]

2.1 If $a>_{\mathrm{lex}}b$ first differs at coordinate $r$, then for every $c$ the tuples $a+c$ and $b+c$ still first differ at $r$, with the former coordinate larger. Thus, among the products formed from copies of the $e_k$, the unique largest term is obtained by choosing the leading monomial from every factor. Its coefficient is $1$. [step 1.1, L2, algebra]

3.1 Applying step 2.1 to $e_1^{b_1}\cdots e_n^{b_n}$ gives exponent $b_k+\cdots+b_n$ on $x_k$ and coefficient $1$. [step 1.1, step 2.1, algebra]

4.1 The displayed cumulative sums determine $b_n$ and then successively $b_{n-1},\ldots,b_1$ by adjacent subtraction, so the map from $b$ to the leading multidegree is injective. [step 3.1, algebra] ∎
