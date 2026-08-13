---
id: thm-conditional-probability-multiplication-and-chain-rules
kind: theorem
title: "The multiplication rule and finite chain rule for conditional probability"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-conditional-probability]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., equation (4.2)"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

If $\mathbb P(B)>0$, then
$$\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B).$$
More generally, let $A_0,\ldots,A_{n-1}$ be events such that $\mathbb P(A_0\cap\cdots\cap A_{k-1})>0$ for every $1\le k<n$. Then
$$\mathbb P\!\left(\bigcap_{i<n}A_i\right)=\mathbb P(A_0)\prod_{k=1}^{n-1}\mathbb P\!\left(A_k\mid\bigcap_{i<k}A_i\right).$$
For $n=0$ the intersection and product both have probability or value $1$; for $n=1$ the formula is $\mathbb P(A_0)=\mathbb P(A_0)$.

## Facts & Assumptions

**Given:** Events satisfying the positivity hypotheses in the Statement.

[L1] For $\mathbb P(B)>0$, $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$ ([[def-conditional-probability]]).

## Proof

**Proof technique:** induction.

1.1 Multiplying the identity in [L1] by the positive denominator gives $\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B)$. [L1, algebra]

1.2 For $n=0$ the empty intersection is $\Omega$ and the empty product is $1$, while for $n=1$ the asserted identity is immediate. [base, algebra]

1.3 Assume the chain formula holds for $n=k\ge1$, and suppose the stated prefix probabilities are positive for $A_0,\ldots,A_k$. [ih]

2.1 Apply step 1.1 to $A=A_k$ and $B=\bigcap_{i<k}A_i$, then substitute the induction hypothesis for $\mathbb P(B)$; this gives the chain formula for $k+1$. [step 1.1, step 1.3, algebra]

3.1 Induction proves the formula for every finite $n$, and every displayed conditional probability has a positive conditioning event by hypothesis. [step 1.2, step 2.1, discharge-induction] ∎
