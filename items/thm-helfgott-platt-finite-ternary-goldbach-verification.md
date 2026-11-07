---
id: thm-helfgott-platt-finite-ternary-goldbach-verification
kind: theorem
title: "Imported Helfgott–Platt Finite Ternary Goldbach Verification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-prime
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. A. Helfgott and D. J. Platt, Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30, arXiv:1305.3062v2"
      url: "https://arxiv.org/pdf/1305.3062v2"
      locator: "Theorem 4.1, printed p. 3; computation and independent checks, §4, printed pp. 3–4."
---

## Statement

Every odd integer $n$ with $7\le n\le8{,}875{,}694{,}145{,}621{,}773{,}516{,}800{,}000{,}000{,}000$ is a sum of three primes.

## Statement references

[Helfgott–Platt, *Numerical Verification of the Ternary Goldbach Conjecture up to 8.875e30*, Theorem 4.1](https://arxiv.org/pdf/1305.3062v2)

## Facts & Assumptions

**Given:** An odd integer $n$ satisfying the inclusive bounds in the Statement.

[F1] The exact imported established finite computation is Helfgott–Platt, Theorem 4.1, printed p. 3: every odd integer in the stated range is a sum of three primes. The complete four-page v2 paper was read. Section 4 says the checked ladder data files were deleted; this item does not claim a production replay or accepted local certificate.

[A1] The run-specific owner authorization `research/number-theory-all-141-2026-10-25-external-computation-authorization.json`, input key `helfgott-platt-finite-ternary-goldbach`, permits this exact imported finite conclusion and no replay claim.

[F2] [[def-prime]]: a prime integer is greater than $1$ and has no positive divisors other than $1$ and itself.

## Proof

1.1 Fix an arbitrary odd integer $n$ in the stated range. Its parity and inclusive endpoint hypotheses are exactly those of [F1]. [given, F1, choose]

2.1 Applying the authorized imported conclusion [F1] to this $n$ gives primes $p_1,p_2,p_3$ with $n=p_1+p_2+p_3$. This is the stated conclusion. [given, F1, algebra] ∎
