---
id: cor-cauchy-product-absolute
kind: corollary
title: "If $\\sum a_k$ and $\\sum b_k$ both converge absolutely then their Cauchy product converges absolutely, with sum $AB$"
status: published
origin: session
deps: [thm-mertens, def-cauchy-product, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, thm-nonnegative-series-bounded-partial-sums, thm-direct-comparison-test, lem-triangle-inequality-finite, lem-of-abs-value, lem-finite-sum-laws, def-finite-sum, def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series both converge
absolutely ([[def-absolute-and-conditional-convergence]]), with sums $A$ and $B$,
and let $(c_n)$ be their Cauchy product ([[def-cauchy-product]]). Then $\sum c_n$
converges **absolutely**, and

$$\sum_{n=0}^{\infty} c_n \;=\; A\,B .$$

Moreover $\sum_{n=0}^{\infty} |c_n| \le \bigl(\sum_{k=0}^{\infty}|a_k|\bigr)
\bigl(\sum_{k=0}^{\infty}|b_k|\bigr)$.

Combined with [[thm-dirichlet-rearrangement]] this says that within the
absolutely convergent series the product behaves exactly as one would want: it
converges, its sum is the product of the sums, and neither factor's order nor the
product's order matters.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ with $\sum |a_k|$ and $\sum |b_k|$ convergent, sums $L_a$ and $L_b$ respectively, partial sums $P_N = \sum_{k<N}|a_k|$ and $Q_m = \sum_{j<m}|b_j|$, and the Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[L1] The finite identity of [[thm-mertens]], claim 1: for arbitrary sequences $(x_k)$, $(y_k)$ with partial sums $Y_m = \sum_{j<m} y_j$ and Cauchy product $(z_n)$, one has $\sum_{n<N} z_n = \sum_{i<N} x_i\, Y_{N-i}$ for every $N$.

[L2] Mertens' theorem, claim 2 of [[thm-mertens]]: if $\sum x_k$ converges absolutely and $\sum y_k$ converges, their Cauchy product converges to the product of the sums.

[L3] $\bigl|\sum_{k<n} x_k\bigr| \le \sum_{k<n}|x_k|$ ([[lem-triangle-inequality-finite]]).

[L4] Absolute value: $|xy| = |x|\,|y|$ and $|x| \ge 0$ ([[lem-of-abs-value]]).

[L5] Finite sums are monotone in their terms and scale by a constant factor; the empty sum is $0$ ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L7] Direct comparison ([[thm-direct-comparison-test]]).

[L8] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Both $L_a$ and $L_b$ are nonnegative, and $P_N \le L_a$ and $Q_m \le L_b$ for all $N$ and $m$, the terms $|a_k|$ and $|b_j|$ being nonnegative. [given, L4, L6]

1.2 Put $\gamma_n := \sum_{k=0}^{n} |a_k|\,|b_{n-k}|$, the Cauchy product of the sequences $(|a_k|)$ and $(|b_k|)$; every $\gamma_n$ is nonnegative. [given, L4, L5]

2.1 For every $n$, $|c_n| = \bigl|\sum_{k=0}^{n} a_k b_{n-k}\bigr| \le \sum_{k=0}^{n} |a_k b_{n-k}| = \gamma_n$. [step 1.2, L3, L4]

2.2 Applying [L1] to $(|a_k|)$ and $(|b_k|)$ gives $\sum_{n<N} \gamma_n = \sum_{i<N} |a_i|\, Q_{N-i}$ for every $N$. [step 1.2, L1]

3.1 Since $0 \le Q_{N-i} \le L_b$ and $|a_i| \ge 0$, monotonicity and scaling give $\sum_{i<N} |a_i|\,Q_{N-i} \le \sum_{i<N} |a_i|\,L_b = L_b\,P_N \le L_b L_a$ for every $N$. [step 1.1, step 2.2, L5]

4.1 So $\sum \gamma_n$ is a series of nonnegative terms whose partial sums are bounded above by $L_a L_b$; it therefore converges, with sum at most $L_a L_b$. [step 1.2, step 3.1, L6]

5.1 By step 2.1 and comparison, $\sum |c_n|$ converges, and its sum is at most that of $\sum \gamma_n$, hence at most $L_a L_b$; that is, $\sum c_n$ converges absolutely and satisfies the displayed bound. [step 2.1, step 4.1, L6, L7]

6.1 The hypotheses of Mertens' theorem hold, $\sum a_k$ converging absolutely and $\sum b_k$ converging by step 1.1 and [L8]; so $\sum c_n$ converges with sum $AB$. [given, L2, L8] ∎

## Remarks

- **Only claim 1 of [[thm-mertens]] is reused, and it is reused for a different pair of sequences.** The identity there is proved for arbitrary real sequences and carries no convergence hypothesis, which is exactly what allows it to be applied here to $(|a_k|)$ and $(|b_k|)$. Nothing about the absolute values is reproved.

- **The bound is not an equality.** The sum of $\sum|c_n|$ can be strictly less than $L_a L_b$, since cancellation inside each $c_n$ is invisible to $\gamma_n$; the inequality is all that is claimed and all that is needed.

- **Absolute convergence of both factors is a genuine strengthening.** Mertens' theorem already gives $\sum c_n = AB$ with only one factor absolutely convergent; what the second hypothesis buys is that the product series is itself absolutely convergent, hence unconditionally convergent ([[thm-dirichlet-rearrangement]]), so that its terms may be reordered in turn.
