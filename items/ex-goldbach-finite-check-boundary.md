---
id: ex-goldbach-finite-check-boundary
kind: example
title: "Analytic, Imported Finite, and Conditional Checker Ranges"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-helf-ternary-goldbach-analytic-range
  - thm-helfgott-platt-finite-ternary-goldbach-verification
  - thm-finite-ternary-goldbach-certificate-is-sound
  - def-prime
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. A. Helfgott, The ternary Goldbach conjecture is true"
      url: "https://arxiv.org/pdf/1312.7748v2"
      locator: "§1.2.1, printed pp. 2–3; analytic threshold $10^{27}$."
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30, arXiv:1305.3062v2"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "Theorem 4.1, printed p. 3."
---

## Example

Writing $N_{\mathrm{HP}}=8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$, the imported result covers every odd $7\le n<N_{\mathrm{HP}}$, and the analytic-range statement applies for odd $n\ge10^{27}$. In particular, $10^{27}-1$ lies in the imported range and $10^{27}+1$ lies in the analytic range. The local finite-checker soundness theorem is conditional on an accepted certificate and supplies no claim that such a certificate was accepted through $10^{27}$.

## Example references

[Helfgott, *The ternary Goldbach conjecture is true*, §1.2.1](https://arxiv.org/pdf/1312.7748v2)

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*, Theorem 4.1](https://arxiv.org/pdf/1305.3062v2)

## Facts & Assumptions

**Given:** $N_{\mathrm{HP}}=8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$ and the boundary threshold $10^{27}$.

[F1] [[thm-helf-ternary-goldbach-analytic-range]]: every odd integer $n\ge10^{27}$ is a sum of three primes.

[F2] [[thm-helfgott-platt-finite-ternary-goldbach-verification]]: every odd integer $n$ with $7\le n\le N_{\mathrm{HP}}$ is a sum of three primes.

[F3] [[thm-finite-ternary-goldbach-certificate-is-sound]]: if the exhaustive local checker accepts a certificate through $N$, then every odd $7\le n\le N$ is a sum of three primes. This implication assumes actual checker acceptance.

[F4] [[def-prime]]: a prime integer $p$ is an integer greater than $1$ whose only positive divisors are $1$ and $p$.

## Verification

1.1 The written endpoint is $N_{\mathrm{HP}}>8\cdot10^{30}>10^{27}$. Hence every odd $n$ with $7\le n<10^{27}$ is in the inclusive imported interval of [F2]. [given, F2, algebra]

1.2 The integer $10^{27}$ is even, so $10^{27}-1$ and $10^{27}+1$ are odd. The first is at least $7$ and below $N_{\mathrm{HP}}$, so [F2] applies; the second is at least $10^{27}$, so [F1] applies. [given, F1, F2, algebra]

2.1 The local checker result [F3] has an acceptance antecedent. No accepted certificate is a hypothesis of this example, so [F3] supplies only a conditional soundness statement here, not an affirmative computation through $10^{27}$. [given, F3, algebra] ∎
