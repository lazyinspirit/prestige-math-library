---
id: thm-helf-ternary-goldbach
kind: theorem
title: "Helfgott's Ternary Goldbach Theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-helf-ternary-goldbach-analytic-range
  - thm-helfgott-platt-finite-ternary-goldbach-verification
  - def-prime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. A. Helfgott, The ternary Goldbach conjecture is true"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "Main Theorem, printed p. 2; §1.2.1, printed pp. 2–3."
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30, arXiv:1305.3062v2"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "Theorem 4.1, printed p. 3; owner-authorized imported result."
---

## Statement

Every odd integer $n>5$ is a sum of three primes.

## Statement references

[Helfgott, *The ternary Goldbach conjecture is true*, Main Theorem](https://arxiv.org/pdf/1312.7748v2)

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*, Theorem 4.1](https://arxiv.org/pdf/1305.3062v2)

## Facts & Assumptions

**Given:** An odd integer $n>5$.

[F1] [[thm-helf-ternary-goldbach-analytic-range]]: every odd integer $m\ge10^{27}$ is a sum of three primes.

[F2] [[thm-helfgott-platt-finite-ternary-goldbach-verification]]: every odd integer $m$ with $7\le m\le8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$ is a sum of three primes.

[F3] [[def-prime]]: an integer $p$ is prime when $p>1$ and its only positive divisors are $1$ and $p$.

## Proof

1.1 Since $n$ is an integer, odd, and greater than $5$, it satisfies $n\ge7$. The imported endpoint $N_{\mathrm{HP}}=8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$ satisfies $N_{\mathrm{HP}}>8\cdot10^{30}>10^{27}$. [given, F2, algebra]

1.2 If $n\ge10^{27}$, [F1] supplies three primes summing to $n$. [given, F1]

2.1 If $n<10^{27}$, then $7\le n<N_{\mathrm{HP}}$, so [F2] supplies three primes summing to $n$. [given, F2, step 1.1]

3.1 Every integer $n$ satisfies exactly one of $n<10^{27}$ or $n\ge10^{27}$. Steps 2.1 and 1.2 therefore prove the stated conclusion for the arbitrary $n$. [given, step 2.1, step 1.2, algebra] ∎
