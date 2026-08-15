---
id: thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
kind: theorem
title: "Cauchy–Schwarz: $|\\langle u,v\\rangle|\\leq\\lVert u\\rVert\\lVert v\\rVert$, with equality exactly for linearly dependent vectors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-space, def-inner-product-norm, lem-complex-conjugation-and-modulus-laws, thm-nth-roots-exist, def-linear-independence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

For vectors $u,v$ in a real or complex inner product space,

$$|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert.$$

Equality holds if and only if $u$ and $v$ are linearly dependent, including the case in which either vector is zero.

## Facts & Assumptions

**Given:** Vectors $u,v$ in an inner product space over $\mathbb R$ or $\mathbb C$.

[L1] The inner product is linear in the first variable, conjugate-linear in the second, conjugate symmetric, and positive definite ([[def-inner-product-space]]).

[L2] The norm is the nonnegative square root of the diagonal pairing ([[def-inner-product-norm]], [[thm-nth-roots-exist]]).

[L3] Complex modulus satisfies $z\overline z=|z|^2$ and vanishes exactly at zero ([[lem-complex-conjugation-and-modulus-laws]]).

[L4] A two-vector list is dependent exactly when a nontrivial scalar combination vanishes ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 If $v=0$, both sides are zero and the pair is dependent. Suppose $v\ne0$, put $c=\langle u,v\rangle/\langle v,v\rangle$, and use [L1] to expand $0\le\langle u-cv,u-cv\rangle=\lVert u\rVert^2-|\langle u,v\rangle|^2/\lVert v\rVert^2$. [L1, L2, L3]

1.2 Conversely, if $u,v$ are dependent and neither is zero, write $u=cv$; then $|\langle u,v\rangle|=|c|\lVert v\rVert^2=\lVert u\rVert\lVert v\rVert$. If either is zero, equality is immediate. [L1, L2, L3, L4]

2.1 Multiplying step 1.1 by the positive number $\lVert v\rVert^2$ gives $|\langle u,v\rangle|^2\le\lVert u\rVert^2\lVert v\rVert^2$. Since both sides of the desired inequality are nonnegative, factoring the difference of their squares gives the stated inequality. [step 1.1, L2, L3, algebra]

3.1 Under $v\ne0$, equality in step 2.1 holds exactly when $\langle u-cv,u-cv\rangle=0$, which by [L1] is exactly $u=cv$. Thus equality implies dependence. The already separated case $v=0$ does too. [step 1.1, step 2.1, L1, L4]

4.1 Steps 2.1, 3.1, and 1.2 prove the inequality and both equality directions. [step 1.2, step 2.1, step 3.1] ∎
