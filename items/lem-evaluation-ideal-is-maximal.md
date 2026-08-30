---
id: lem-evaluation-ideal-is-maximal
kind: lemma
title: "Evaluation at a point has kernel (x_1-a_1, ..., x_n-a_n)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-polynomial-evaluation-and-root, thm-monic-polynomial-division, thm-quotient-is-field-iff-ideal-maximal]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 13.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field and let $a=(a_1,\ldots,a_n)\in k^n$. The evaluation map
$$
\operatorname{ev}_a:k[x_1,\ldots,x_n]\to k,\qquad f\mapsto f(a),
$$
has kernel $(x_1-a_1,\ldots,x_n-a_n)$. In particular, this ideal is maximal.

## Facts & Assumptions

**Given:** A field $k$, a point $a=(a_1,\ldots,a_n)\in k^n$, and the evaluation map at $a$.

[L1] Polynomial evaluation at a point is well defined ([[def-polynomial-evaluation-and-root]]).

[L2] Division by a monic polynomial produces quotient and remainder ([[thm-monic-polynomial-division]]).

[L3] A quotient ring is a field exactly when the ideal is maximal ([[thm-quotient-is-field-iff-ideal-maximal]]).

## Proof

**Proof technique:** induction on the number of variables.

1.1 Base case $n=1$: divide $f(x_1)$ by the monic polynomial $x_1-a_1$. By [L2], $$ f(x_1)=(x_1-a_1)q(x_1)+r $$ with $r\in k$. Evaluating at $x_1=a_1$ gives $r=f(a_1)$ by [L1], so $f-f(a_1)\in (x_1-a_1)$. Therefore the kernel of $\operatorname{ev}_{a_1}$ is $(x_1-a_1)$. [L1, L2, base]

1.2 Inductive hypothesis: assume the statement for $n-1$ variables. [ih]

2.1 Write $f$ as a polynomial in $x_n$ with coefficients in $k[x_1,\ldots,x_{n-1}]$ and divide by the monic polynomial $x_n-a_n$: $$ f=(x_n-a_n)q+r, $$ where $r\in k[x_1,\ldots,x_{n-1}]$. Evaluating at $a$ gives $f(a)=r(a_1,\ldots,a_{n-1})$. By the induction hypothesis, $r-r(a_1,\ldots,a_{n-1})\in (x_1-a_1,\ldots,x_{n-1}-a_{n-1})$, and hence $$ f-f(a)\in (x_1-a_1,\ldots,x_n-a_n). $$ [L1, L2, step 1.2]

3.1 Step 2.1 shows that every polynomial differs from its value at $a$ by an element of $(x_1-a_1,\ldots,x_n-a_n)$, so the quotient by that ideal is isomorphic to $k$. By [L3] the ideal is maximal, and its kernel description is the one established above. [L3, step 1.1, step 2.1, discharge-induction] ∎
