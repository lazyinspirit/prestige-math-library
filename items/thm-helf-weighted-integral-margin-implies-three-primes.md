---
dependency_level: 4
id: thm-helf-weighted-integral-margin-implies-three-primes
kind: theorem
title: "A certified weighted integral margin implies three odd primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-helf-smoothed-circle-coefficient-identity
  - lem-helf-elementary-prime-power-error-bound
  - thm-helf-smoothed-arc-bounds-imply-positive-integral
  - def-prime
  - lem-sine-chord-and-lipschitz-bounds
  - thm-quarter-turn-values-and-shift-formulas
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Goldbach analytic proof; bounded local reconstruction"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "\u00a77.4 equations7.25,7.48\u20137.50: exact conditional terminal composition, with elementary prime-power exclusion"
---

## Statement

Let $N\ge10^{27}$ be an odd integer, $x>0$, and let three smoothings $\eta_1,\eta_2,\eta_3$ satisfy $|\eta_i(t)|\le2$ for $t>0$ and absolute convergence of their smoothed von Mangoldt sums. If
$$\operatorname{Re}\int_0^1 S_{\eta_1}(\alpha,x)S_{\eta_2}(\alpha,x)S_{\eta_3}(\alpha,x)e(-N\alpha)d\alpha\ge\frac{39}{100000}N^2,$$
then $N$ is a sum of three odd primes. In particular the premise follows, conditionally, from the aggregate bounds
$$\operatorname{Re}I_M\ge1.058259\,x^2/49,\qquad |I_m|\le0.97392\,x^2/49,$$
for a partition of the circle, when $x=N/(2+9/(196\sqrt{2\pi}))$ and the full integral is $I_M+I_m$. These aggregate inequalities are explicit hypotheses here, not claimed proved arc estimates.

## Facts & Assumptions

**Given:** The integer, scale, three bounded absolutely summable smoothings, and the certified integral inequality; for the final implication also the two aggregate bounds and displayed scale.

[F1] Absolute convergence gives the smoothed circle coefficient identity. [[lem-helf-smoothed-circle-coefficient-identity]]

[F2] The absolute contribution from triples with a non-odd-prime entry is less than $8N^2/100000$ under the stated sup bounds. [[lem-helf-elementary-prime-power-error-bound]]

[F3] Real major-integral lower bounds and minor absolute upper bounds subtract to bound the real part of the whole integral. [[thm-helf-smoothed-arc-bounds-imply-positive-integral]]

[F4] Prime integers have the stated divisor convention. [[def-prime]]

[F5] $|\sin u-\sin v|\le|u-v|$, with $\sin0=0$ and $\sin(\pi/2)=1$. [[lem-sine-chord-and-lipschitz-bounds]] [[thm-quarter-turn-values-and-shift-formulas]]

## Proof

1.1 By [F1], the integral is the finite weighted sum over positive $n_1+n_2+n_3=N$, with coefficients $\Lambda(n_i)\eta_i(n_i/x)$. Separate the terms whose entries are all odd primes from the remaining terms. The absolute value, and hence the real part from above, of the remaining sum is bounded by [F2]. The real part of the odd-prime sum is therefore greater than $(39-8)N^2/100000>0$. It cannot be an empty sum; a triple of odd primes summing to $N$ exists, regardless of any signs or complex values of the smoothing weights. [given, F1, F2, F4, algebra]

2.1 For the aggregate implication, taking the real part of the major integral does not alter the full real-part sum. Apply [F3] after dividing both contributions by the positive number $x^2/49$, so its certified comparison bounds are exactly the rationals $1.058259$ and $0.97392$, then multiply back. Its lower bound is $(1.058259-0.97392)x^2/49>0.08433x^2/49$. From [F5], $\pi\ge2$, so $2+9/(196\sqrt{2\pi})\le2+9/392<21/10$. Hence $x>10N/21$, and the preceding lower bound is greater than $[0.08433/(49(21/10)^2)]N^2>39N^2/100000$. The final comparison is exact rational arithmetic. Thus these conditional aggregate inputs imply the first premise, and step 1.1 gives the conclusion. This implication supplies neither aggregate estimate nor its analytic proof. [F3, F5, step 1.1, algebra] ∎
