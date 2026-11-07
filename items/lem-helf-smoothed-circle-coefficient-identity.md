---
dependency_level: 2
id: lem-helf-smoothed-circle-coefficient-identity
kind: lemma
title: "Absolutely summable smoothed series have the circle coefficient identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-smoothed-prime-exponential-sum
  - thm-weierstrass-m-test-for-function-series
  - thm-uniform-limit-interchanges-complex-line-integrals
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-fundamental-theorem-for-complex-line-integrals
  - thm-kernel-and-fibres-of-complex-exponential
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "\u00a71.3 equation1.1 and \u00a77.4 equation7.49; the scaling in coefficients is eta(n/x)"
---

## Statement

Let $(a_n),(b_n),(c_n)$ be complex sequences indexed by positive integers, with $\sum|a_n|,\sum|b_n|,\sum|c_n|<\infty$. Set $e(t)=\exp(2\pi it)$, $A(\alpha)=\sum a_ne(n\alpha)$ and similarly $B,C$. For every integer $N$,
$$\int_0^1 A(\alpha)B(\alpha)C(\alpha)e(-N\alpha)\,d\alpha=\sum_{n_1+n_2+n_3=N}a_{n_1}b_{n_2}c_{n_3}.$$
The integral is the complex Riemann integral. In particular the identity applies to smoothed von Mangoldt sums whenever their defining absolute convergence hypotheses hold.

## Facts & Assumptions

**Given:** The three absolutely summable sequences and an integer $N$.

[F1] Summable uniform majorants give uniform convergence; apply this to the real and imaginary parts. [[thm-weierstrass-m-test-for-function-series]]

[F2] Continuous uniform limits commute with integration on a fixed finite contour. [[thm-uniform-limit-interchanges-complex-line-integrals]]

[F3] The complex exponential is entire with derivative itself; the fundamental theorem integrates its primitives. [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-fundamental-theorem-for-complex-line-integrals]]

[F5] For integer $h$, $e(h)=1$. [[thm-kernel-and-fibres-of-complex-exponential]]

[F4] A smoothed sum has coefficients $\Lambda(n)\eta(n/x)$ and is defined under absolute convergence. [[def-smoothed-prime-exponential-sum]]

## Proof

1.1 Since $|e(n\alpha)|=1$, [F1] gives uniform convergence of each series on $[0,1]$ to a continuous function. Their sup norms are bounded by their respective absolute sums. The difference between the full product and the product of the first $K$ terms is bounded uniformly by the tail of the first absolute sum times the other two complete absolute sums, plus the analogous two terms. Thus these finite products converge uniformly to $ABC$, also after multiplication by $e(-N\alpha)$. [given, F1, algebra]

1.2 For an integer $h\ne0$, [F3] gives primitive $e(h\alpha)/(2\pi i h)$ and integral $(e(h)-1)/(2\pi i h)=0$; for $h=0$ the integral is $1$. Expand a finite product of partial sums and integrate each term. It follows that its integral is exactly the sum with $n_1+n_2+n_3=N$ and $n_i\le K$. For positive indices this coefficient sum is finite, and is already unchanged for $K\ge\max(1,N)$. [F3, F5, construct, algebra]

2.1 Apply [F2] on the real unit segment to the uniform convergence from step 1.1 and use step 1.2. This proves the coefficient identity, including $N\le0$ when the coefficient is empty. The continuous integrand has the standard finite-interval complex Riemann integral. Substituting the absolutely summable coefficients of [F4] proves the stated smoothing application. [F2, F4, F5, step 1.1, step 1.2, algebra] ∎
