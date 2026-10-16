---
id: ex-qa-shor-factorization-of-fifteen
kind: example
title: "A Shor order sample for factoring fifteen"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-shor-factoring
  - thm-qa-order-to-factor-correctness
  - def-integers-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-group-power
  - def-common-divisor-and-gcd
  - def-divides-in-z
justified_by: []
proof_strategy: direct
axiom_use: "None; all computations are finite integer arithmetic."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§5, ‘Prime factorization’, PDF pp. 16–19; local arithmetic example."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.2–5.3, “Reduction from factoring to period-finding” and “Shor’s period-finding algorithm”; local arithmetic example."
---
## Example

Take $N=15$ and suppose the sampler returns the unit $a=2$. A valid order-finding result is $q=4$. Then $z=2^{q/2}=4\pmod{15}$, and the two gcds are $\gcd(3,15)=3$ and $\gcd(5,15)=5$.

## Facts & Assumptions

**Given:** The Shor factoring instructions on $N=15$, a sample $a=2$, and the candidate $q=4$.

[F1] A candidate is accepted for the reduction only when $2\le q\le N$, $q$ is even, and $a^q\equiv1\pmod N$; the algorithm then computes the two gcds and returns only a verified proper divisor ([[alg-qa-shor-factoring]]).

[F2] Residue powers are computed by multiplication of congruence classes ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]], [[def-group-power]]).

[F3] A gcd is a common divisor, so a gcd strictly between $1$ and $N$ is a proper nontrivial divisor when it divides $N$ ([[def-common-divisor-and-gcd]], [[def-divides-in-z]]).

[F4] In an odd modulus, an accepted even exponent gives a square root of one; a non-global sign gives both gcds as proper factors ([[thm-qa-order-to-factor-correctness]]).

## Verification

1.1 Direct multiplication gives $2^1\equiv2$, $2^2\equiv4$, $2^3\equiv8$, and $2^4\equiv1\pmod{15}$. Since none of the first three powers is $1$, the true order is $4$. Thus $q=4$ satisfies $2\le q\le15$, is even, and passes the power check in [F1]. [given, F1, F2, algebra]

2.1 The half-power is $z=2^2\equiv4\pmod{15}$, which is neither $1$ nor $-1\equiv14$. The computed values are $\gcd(z-1,15)=\gcd(3,15)=3$ and $\gcd(z+1,15)=\gcd(5,15)=5$. [given, step 1.1, F2, F3, F4, algebra]

3.1 Both candidates divide $15$ and satisfy $1<3,5<15$. Since the algorithm checks $d_-$ first, it returns $3$ on this execution; both factors are certified by [F3] and [F4]. [given, step 2.1, F1, F3, F4] ∎
