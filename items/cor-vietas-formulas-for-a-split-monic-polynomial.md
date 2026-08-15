---
id: cor-vietas-formulas-for-a-split-monic-polynomial
kind: corollary
title: "Vieta's formulas identify the coefficients of a split monic polynomial with elementary symmetric functions of its roots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-vieta-expansion-in-elementary-symmetric-polynomials, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

Let $f(t)=t^n+a_1t^{n-1}+\cdots+a_n\in R[t]$ be monic and suppose that in a commutative $R$-algebra $S$ it splits as

$$f(t)=\prod_{i=1}^n(t-\alpha_i),$$

with roots repeated according to multiplicity. Then

$$a_k=(-1)^ke_k(\alpha_1,\ldots,\alpha_n)\qquad(1\le k\le n).$$

The assertion includes the monic constant polynomial, for which there are no coefficient equations.

## Facts & Assumptions

**Given:** A split monic polynomial $f$ as in the Statement.

[L1] The universal Vieta expansion is $\prod_{i=1}^n(t-x_i)=\sum_{k=0}^n(-1)^ke_kt^{n-k}$ ([[thm-vieta-expansion-in-elementary-symmetric-polynomials]]).

[L2] A polynomial splits over an extension when it is a product of linear factors there, with roots listed with multiplicity ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Substitute $x_i=\alpha_i$ in [L1] inside $S[t]$ to obtain $f(t)=\sum_{k=0}^n(-1)^ke_k(\alpha_1,\ldots,\alpha_n)t^{n-k}$. [given, L1, L2]

2.1 Equality of polynomials is coefficientwise, so comparison with $f(t)=t^n+a_1t^{n-1}+\cdots+a_n$ gives the displayed formula for every $k$. If $n=0$, the comparison has no positive index. [step 1.1, algebra] ∎
