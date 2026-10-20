---
id: thm-operator-norm-is-the-largest-singular-value
kind: theorem
title: "The operator norm is 0 on the zero domain and otherwise equals the largest singular value, attained at a right-singular vector"
status: published
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
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-operator-norm-is-the-largest-singular-value.json
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
The operator norm is zero on the zero domain and otherwise is max_{||v||=1} ||Tv|| is attained at
a right-singular vector for $s_1$.

## Statement references

[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces.

[L1] There is a singular value decomposition $Tv=\sum_{j=1}^r s_j\langle v,e_j\rangle f_j$ with $s_1\ge\cdots\ge s_r>0$ ([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 If $V=0$, then [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] gives $\lVert T\rVert=0$. Assume now that $V\ne0$, and choose an SVD from [L1] with orthonormal bases $(e_1,\ldots,e_n)$ of $V$ and $(f_1,\ldots,f_m)$ of $W$, where $n\ge1$. Write its positive singular values as $\sigma_1\ge\cdots\ge\sigma_r>0$ and set $\sigma_j=0$ for $r<j\le n$. The SVD formula gives $Te_j=\sigma_jf_j$ only for $j\le r$, while $Te_j=0$ for $j>r$. In particular, when $r=0$, the formula is the empty sum, $T=0$, and the largest singular value on the nonzero domain is $\sigma_1=0$. [L1, algebra]

2.1 If $r>0$, write a unit vector as $v=\sum_{j=1}^n c_je_j$. Orthonormality of the input and output bases gives $$\lVert Tv\rVert^2=\sum_{j=1}^r \sigma_j^2|c_j|^2\le \sigma_1^2\sum_{j=1}^n |c_j|^2=\sigma_1^2.$$ Thus every unit vector satisfies $\lVert Tv\rVert\le\sigma_1$. If $r=0$, then $Tv=0$ for every $v$, and the same bound holds with $\sigma_1=0$. [L1, step 1.1, algebra]

3.1 Since $n\ge1$, the unit right-singular vector $e_1$ exists. If $r>0$, then $f_1$ exists and $\lVert Te_1\rVert=\lVert\sigma_1f_1\rVert=\sigma_1$. If $r=0$, then $Te_1=0$ and $\lVert Te_1\rVert=0=\sigma_1$, without requiring any vector of $W$. Together with step 2.1, this proves that the maximum defining $\lVert T\rVert$ equals the largest singular value and is attained at $e_1$ whenever $V\ne0$, including $W=0$. [L1, step 1.1, step 2.1] ∎
