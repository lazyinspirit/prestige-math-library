---
id: ex-smith-normal-form-of-an-explicit-integer-matrix
kind: example
title: "Smith normal form of an explicit three-by-three integer matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-smith-normal-form-algorithm-over-a-euclidean-domain, thm-smith-normal-form-uniqueness-via-determinantal-divisors, thm-invariant-factor-decomposition-over-a-pid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Lecture 10 worksheet, Problem 1"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Example

For

$$A=\begin{pmatrix}2&1&0\\4&4&6\\2&2&6\end{pmatrix},$$

the Smith normal form over $\mathbb Z$ is $\operatorname{diag}(1,2,6)$, and

$$\operatorname{coker}A\cong\mathbb Z/2\oplus\mathbb Z/6.$$

## Facts & Assumptions

**Given:** Euclidean Smith reduction from [[prop-smith-normal-form-algorithm-over-a-euclidean-domain]] and the invariant-factor quotient interpretation of [[thm-invariant-factor-decomposition-over-a-pid]].

[L1] Smith normal form is unique and its entries are recovered from successive determinantal divisors ([[thm-smith-normal-form-uniqueness-via-determinantal-divisors]]).

## Verification

**Proof technique:** direct.

1.1 Swap the first two columns, replace the second row by $R_2-4R_1$ and the third by $R_3-2R_1$, and replace the second column by $C_2-2C_1$. The remaining lower block is $\begin{pmatrix}-4&6\\-2&6\end{pmatrix}$. Swap its rows, replace the last row by the last row minus twice the preceding row, and clear the off-diagonal $6$ by adding three times the pivot column. Unit row scalings give $\operatorname{diag}(1,2,6)$. [given, algebra]

2.1 The gcd of all entries is $1$; the minor from rows $1,3$ and columns $1,2$ is $2$, and every two-by-two minor is even, so their gcd is $2$; the determinant is $12$. Thus the determinantal divisors are $1,2,12$, whose successive quotients are $1,2,6$, confirming step 1.1 by [L1]. [step 1.1, L1, algebra]

3.1 Quotienting the diagonal presentation gives $\mathbb Z/(1)\oplus\mathbb Z/(2)\oplus\mathbb Z/(6)$; the first summand is zero, yielding the displayed cokernel with no free part because the determinant is nonzero. [step 1.1, given] ∎
