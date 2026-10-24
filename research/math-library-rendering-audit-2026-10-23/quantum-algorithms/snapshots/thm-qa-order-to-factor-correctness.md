---
id: thm-qa-order-to-factor-correctness
kind: theorem
title: "Order-to-factor output correctness"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-shor-factoring
  - lem-qa-shor-perfect-power-precheck
  - lem-qa-shor-residue-gcd-branch
  - lem-qa-even-order-square-root
  - lem-qa-crt-sign-vector-factorization
  - thm-unit-group-chinese-remainder-decomposition
  - thm-chinese-remainder-theorem
  - thm-integers-modulo-n-basic-algebra
  - def-integers-modulo-n
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - thm-fundamental-theorem-of-arithmetic
  - thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
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
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---
## Statement

For every promised composite $N\ge4$, every non-`FAIL` output of [[alg-qa-shor-factoring]] is a proper divisor of $N$. In its odd-unit branch, any candidate $q$ that passes the algorithm's checks and is even has $a^q\equiv1\pmod N$; with $z=a^{q/2}\bmod N$, if $z\not\equiv\pm1\pmod N$, both $\gcd(z-1,N)$ and $\gcd(z+1,N)$ are proper nontrivial divisors. No minimality of $q$ is needed for this output-correctness claim.

## Facts & Assumptions

**Given:** The input/output instructions in [[alg-qa-shor-factoring]], a promised composite $N\ge4$, and an execution that returns rather than `FAIL`.

[F1] The even and perfect-power preprocessing return only a divisor $d$ satisfying $1<d<N$ ([[lem-qa-shor-perfect-power-precheck]]).

[F2] For a uniform residue $a\in\{1,\ldots,N-1\}$, if $\gcd(a,N)>1$ it is a proper factor; if the gcd is one then $a$ is a unit ([[lem-qa-shor-residue-gcd-branch]], [[thm-unit-criterion-modulo-n]]).

[F3] For a unit $a$ and an accepted even exponent $q$ with $a^q\equiv1$, $z=a^{q/2}$ satisfies $z^2\equiv1$ ([[lem-qa-even-order-square-root]]).

[F4] Every odd composite $N$ has a factorization $N=\prod_{i<k}p_i^{e_i}$ into distinct odd primes with $k\ge1$ ([[thm-fundamental-theorem-of-arithmetic]], [[thm-canonical-prime-factorisation]]). For this factorization, a square root $z^2\equiv1$ other than the two global signs gives both gcds as proper nontrivial divisors ([[lem-qa-crt-sign-vector-factorization]]).

## Proof

1.1 The even branch returns $2$ only after checking $1<2<N$ and $N\bmod2=0$. The perfect-power branch returns only after the exact checks $1<b<N$ and $N\bmod b=0$, and [F1] proves its candidate is proper. [given, F1, algebra]

1.2 In a random-residue branch, a returned gcd candidate is checked to satisfy $1<d<N$ and $N\bmod d=0$; [F2] also shows that a nonunit gcd cannot equal $N$ because the sampled representative satisfies $a<N$. Thus any returned candidate in this branch is proper. [given, F2, algebra]

1.3 The order-finding branch is reached only after the even and perfect-power branches, so $N$ is odd. It first verifies $\gcd(a,N)=1$ and $a^q\equiv1\pmod N$. If $q$ is even it sets $z=a^{q/2}$; [F3] gives $z^2\equiv1\pmod N$. If $z\not\equiv\pm1$, [F4] gives a prime-power factorization and the CRT sign lemma shows that both computed gcds lie strictly between $1$ and $N$ and divide $N$, so the explicit verification accepts a proper factor. [given, F3, F4, algebra]

2.1 Every return branch is one of steps 1.1, 1.2 or 1.3, and each branch verifies the strict divisor conditions before returning. Therefore every non-`FAIL` output is a proper divisor. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

This theorem proves output correctness conditional on the outer algorithm's exact period and gcd checks. It does not rely on a candidate being the minimal order, and it makes no probability claim about whether the order-finding branch is reached.
