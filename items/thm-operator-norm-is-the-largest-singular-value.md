---
id: thm-operator-norm-is-the-largest-singular-value
kind: theorem
title: "The operator norm is 0 on the zero domain and otherwise equals the largest singular value, attained at a right-singular vector"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-singular-value-decomposition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces.

If $V=0$, then

$$\lVert T\rVert=0.$$

If $V\ne0$ and $s_1$ is the largest singular value of $T$, then

$$\lVert T\rVert=s_1.$$

In the nonzero case, the maximum in
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]] is attained at
a right-singular vector for $s_1$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces.

[L1] There is a singular value decomposition $Tv=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$ with $s_1\ge\cdots\ge s_r>0$ ([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 If $V=0$, then [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] gives $\lVert T\rVert=0$. Assume now that $V\ne0$, and choose an SVD from [L1]: $$Tv=\sum_{j=1}^r \sigma_j\langle v,e_j\rangle f_j,\qquad \sigma_1\ge\cdots\ge\sigma_r>0.$$ Extend this list by zeros, setting $\sigma_{r+1}=\cdots=\sigma_n=0$; then the displayed formula gives $Te_j=\sigma_jf_j$ for every $j$, so $\sigma_1$ is the largest singular value of $T$. Writing a unit vector as $v=\sum_j c_je_j$, one gets $$\lVert Tv\rVert^2=\sum_{j=1}^n \sigma_j^2|c_j|^2\le \sigma_1^2\sum_j |c_j|^2=\sigma_1^2,$$ so every unit vector satisfies $\lVert Tv\rVert\le \sigma_1$. [L1, algebra]

2.1 For the right-singular vector $e_1$, step 1.1 gives $\lVert Te_1\rVert=\lVert \sigma_1f_1\rVert=\sigma_1$. Therefore the maximum defining $\lVert T\rVert$ equals the largest singular value $\sigma_1$, and it is attained at $e_1$ when $V\ne0$. [L1, step 1.1] ∎
