---
id: ex-cantor-set-measure-from-the-removed-intervals
kind: example
title: "The complement of the Cantor set in $[0,1]$ has Lebesgue measure one, computed from the removed intervals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set,
       cor-cantor-set-is-an-uncountable-lebesgue-null-set,
       thm-geometric-series,
       thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.9"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Countable Choice and let $C$ be the Cantor set. Then the
open intervals removed in its construction form a countable pairwise disjoint
family whose total Lebesgue measure is

$$\sum_{n=0}^{\infty} 2^n 3^{-n-1} = 1,$$

so the complement $[0,1] \setminus C$ has Lebesgue measure one.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Cantor set $C$ with stages $(C_n)_{n \in \mathbb{N}}$.

[L1] The Cantor set is an uncountable subset of $\mathbb R$ of Lebesgue measure zero ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[F1] There is a unique family $(C_n)_{n \in \mathbb{N}}$ of subsets of $\mathbb{R}$ with $C_0 = [0,1]$ and $C_{n+1} = \tfrac13 C_n \cup \big(\tfrac23 + \tfrac13 C_n\big)$ for every $n \in \mathbb{N}$ ([[def-cantor-set]]).

[F2] If $|r| < 1$ then the series $\sum r^k$ converges ([[thm-geometric-series]]).

[L2] Assuming countable choice, a box in $\mathbb R^n$ with parameters $a_i \le b_i$ is Lebesgue measurable of measure $\prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Verification

**Proof technique:** direct.

1.1 By induction from [F1], the $n$-th stage removes exactly $2^n$ pairwise disjoint open intervals, each of length $3^{-n-1}$; the case $n=0$ is the single interval $(\tfrac13,\tfrac23)$. [F1, algebra]

2.1 By [L2], the union removed at stage $n$ has Lebesgue measure $2^n 3^{-n-1}$, so the full removed set has measure $\sum_{n=0}^{\infty} 2^n 3^{-n-1} = \tfrac13 \sum_{n=0}^{\infty} (\tfrac23)^n = 1$ by [F2]. [step 1.1, F2, L2, algebra]

3.1 The complement of $C$ in $[0,1]$ is exactly the union of those removed intervals, so step 2.1 computes $\lambda_1([0,1] \setminus C)=1$; this agrees with [L1], which already gives $\lambda_1(C)=0$. [step 2.1, L1] ∎
