---
id: cor-dimension-of-a-finite-polynomial-ring-over-a-field
kind: corollary
title: "A polynomial ring in n variables over a field has dimension n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $k$ be a field and let $n\ge0$. Then
$$
\dim k[x_1,\ldots,x_n]=n.
$$

## Facts & Assumptions

**Given:** A field $k$ and an integer $n\ge0$.

[L1] Adjoining one polynomial variable to a finite-dimensional Noetherian ring raises dimension by one ([[thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring]]).

## Proof

**Proof technique:** induction on the number of variables.

1.1 For $n=0$, the ring is the field $k$, whose only prime ideal is $(0)$, so its dimension is $0$. [base, given]

1.2 If $\dim k[x_1,\ldots,x_n]=n$, then $k[x_1,\ldots,x_{n+1}]\cong k[x_1,\ldots,x_n][x_{n+1}]$, so [L1] gives dimension $n+1$. [L1, ih]

2.1 Therefore $\dim k[x_1,\ldots,x_n]=n$ for every $n\ge0$. [step 1.1, step 1.2, discharge-induction] ∎
