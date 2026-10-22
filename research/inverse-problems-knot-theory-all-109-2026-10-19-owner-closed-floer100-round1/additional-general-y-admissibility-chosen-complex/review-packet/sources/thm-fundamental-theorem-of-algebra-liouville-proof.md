---
id: thm-fundamental-theorem-of-algebra-liouville-proof
kind: theorem
title: "Fundamental theorem of algebra by Liouville's theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-liouville-bounded-entire-function, thm-complex-polynomials-and-rational-functions-are-holomorphic, lem-complex-polynomial-growth-and-minimum-modulus, cor-complex-differentiability-implies-continuity, lem-complex-conjugation-and-modulus-laws, def-complex-metric-convergence-and-continuity, thm-heine-borel-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: true
short: "FTA by Liouville"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Corollary 4.6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Corollary 2.3.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.4"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Every nonconstant complex polynomial has a complex root.

This proof uses Liouville's theorem and is independent of the minimum-modulus proof cited in the accompanying agreement remark.

## Facts & Assumptions

**Given:** A nonconstant complex polynomial $p$.

[L1] If $P,Q$ are complex polynomials, then $P/Q$ is holomorphic on the open set where $Q$ does not vanish ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] If $p$ is a nonconstant complex polynomial, then $|p(z)|\to\infty$ as $|z|\to\infty$ ([[lem-complex-polynomial-growth-and-minimum-modulus]]).

[L3] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L4] Complex modulus is multiplicative, nonnegative, and zero exactly at zero, and it satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] Under $\mathbb C=\mathbb R^2$, the metric $d_{\mathbb C}(z,w)=|z-w|$ is the Euclidean metric ([[def-complex-metric-convergence-and-continuity]]).

[L6] A subset of Euclidean space is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L7] A continuous real-valued function on a nonempty compact metric space is bounded and attains a maximum ([[thm-extreme-value-metric]]).

[L8] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $p$ has no complex root. [given, assume-contra]

2.1 The denominator $p$ is then nonzero throughout $\mathbb C$, so [L1] makes $g:=1/p$ entire. [step 1.1, L1]

3.1 By [L2], choose $R\ge1$ such that $|p(z)|\ge1$ whenever $|z|\ge R$; then step 2.1 and [L4] give $|g(z)|=1/|p(z)|\le1$ on that exterior region. [step 2.1, L2, L4, choose, algebra]

3.2 By step 2.1 and [L3], $g$ is continuous; the inequality $||u|-|v||\le|u-v|$ derived from [L4] makes the real-valued function $|g|$ continuous. [step 2.1, L3, L4, algebra]

4.1 The closed disc $K=\{z:|z|\le R\}$ contains $0$, is bounded, and is closed because $||z|-|w||\le|z-w|$; by [L5] it is a nonempty closed bounded subset of $\mathbb R^2$, so [L6] makes it compact. [step 3.1, L4, L5, L6, algebra]

5.1 Applying [L7] to the continuous function $|g|$ from step 3.2 on the compact set from step 4.1 gives a finite maximum $M\ge0$ with $|g(z)|\le M$ for $z\in K$. [step 3.2, step 4.1, L7]

6.1 If $|z|\le R$, step 5.1 gives $|g(z)|\le M$, while if $|z|\ge R$, step 3.1 gives $|g(z)|\le1$; hence $|g(z)|\le\max\{M,1\}$ on the whole plane, with the boundary $|z|=R$ covered by both estimates. [step 3.1, step 5.1, algebra]

7.1 The function $g$ is entire by step 2.1 and bounded by step 6.1, so [L8] makes it constant. [step 2.1, step 6.1, L8]

8.1 The constant value of $g=1/p$ is nonzero by [L4], so $p=1/g$ is constant, contradicting the given nonconstancy; the assumption of step 1.1 is false, and $p$ has a complex root. [step 1.1, step 2.1, step 7.1, L4, algebra, discharge-contradiction] ∎
