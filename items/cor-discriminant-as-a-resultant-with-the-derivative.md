---
id: cor-discriminant-as-a-resultant-with-the-derivative
kind: corollary
title: "For monic $f$ of degree $n$, $\\operatorname{Res}(f,f')=(-1)^{n(n-1)/2}\\operatorname{Disc}(f)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monic-resultant-root-product-and-common-root-criterion, thm-discriminant-root-formula-and-repeated-root-criterion, def-formal-derivative-of-a-polynomial, prop-formal-derivative-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 and discriminant discussion"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $f\in F[t]$ be monic of degree $n$. Then

$$\operatorname{Res}(f,f')=(-1)^{n(n-1)/2}\operatorname{Disc}(f).$$

## Facts & Assumptions

**Given:** A monic polynomial $f\in F[t]$ of degree $n$, split as $f(t)=\prod_{i=1}^n(t-\alpha_i)$ in a splitting field.

[L1] The root-product formula gives $\operatorname{Res}(f,f')=\prod_i f'(\alpha_i)$ ([[thm-monic-resultant-root-product-and-common-root-criterion]]).

[L2] The discriminant root formula is $\operatorname{Disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2$ ([[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[L3] The formal derivative of $f=\sum_ia_ix^i$ is $f'=\sum_{i\ge1}ia_ix^{i-1}$ ([[def-formal-derivative-of-a-polynomial]]).

[L4] Over a commutative ring, formal differentiation is additive and $F$-linear and satisfies $(fg)'=f'g+fg'$ ([[prop-formal-derivative-laws]]).

## Proof

**Proof technique:** direct.

1.1 Iterating the Leibniz rule of [L4] over the $n$ factors of $f=\prod_{i=1}^n(t-\alpha_i)$ gives $f'=\sum_{i=1}^n\prod_{j\ne i}(t-\alpha_j)$, since each $(t-\alpha_i)'=1$ by [L3]. At $t=\alpha_i$, every summand except the $i$-th contains the zero factor $\alpha_i-\alpha_i$, so $f'(\alpha_i)=\prod_{j\ne i}(\alpha_i-\alpha_j)$. [given, L3, L4, algebra]

2.1 By [L1], $\operatorname{Res}(f,f')=\prod_i\prod_{j\ne i}(\alpha_i-\alpha_j)$. Group the two ordered factors belonging to each unordered pair $i<j$. [step 1.1, L1, algebra]

3.1 For each $i<j$, $(\alpha_i-\alpha_j)(\alpha_j-\alpha_i)=-(\alpha_i-\alpha_j)^2$. There are $n(n-1)/2$ unordered pairs, so step 2.1 becomes $(-1)^{n(n-1)/2}\prod_{i<j}(\alpha_i-\alpha_j)^2$. [step 2.1, algebra]

4.1 Apply [L2] to identify the remaining product with $\operatorname{Disc}(f)$. The empty-degree cases $n=0,1$ give $1=1$. [step 3.1, L2] ∎
