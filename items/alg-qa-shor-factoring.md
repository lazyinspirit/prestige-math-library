---
id: alg-qa-shor-factoring
kind: algorithm
title: "Shor factoring with verified output and bounded outer retries"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-modular-order-finding
  - alg-qa-modular-multiplication-circuit
  - alg-qa-shor-uniform-residue-sampler
  - def-integers-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-common-divisor-and-gcd
  - def-divides-in-z
  - thm-bezout-identity
  - thm-standard-representatives-modulo-n
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - def-natural-numbers
  - def-nat-order
axiom_use: "Countable choice and dependent choice supply the sampler's countable fair-bit tapes; the number-theoretic reductions use finite arguments."
provenance:
  statement: ai-altered
  proof: not-applicable
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
## Definition

**Inputs.** A composite integer $N\ge4$, encoded in binary, and a rational target failure probability $\delta=u/v$ with coprime integers $0<u<v$. Use the modular-order-finding procedure on the earlier A page with its explicit reversible modular-multiplication circuit. Output is a verified proper divisor of $N$ or `FAIL`.

**Arithmetic subroutines.** For $c\ge1$ and exponent $e\ge0$, `CappedPower(c,e)` returns $\min\{c^e,N+1\}$: initialize $(r,d,k)=(1,c,e)$; while $k>0$, replace $r$ by $\min\{rd,N+1\}$ if $k$ is odd, then replace $k$ by $\lfloor k/2\rfloor$ and, if the new $k>0$, replace $d$ by $\min\{d^2,N+1\}$. For any integer $c$ and exponent $e\ge0$, `ModPower(c,e)` returns $c^e\bmod N$: initialize $(r,d,k)=(1,c\bmod N,e)$; while $k>0$, replace $r$ by $rd\bmod N$ if $k$ is odd, then replace $k$ by $\lfloor k/2\rfloor$ and, if the new $k>0$, replace $d$ by $d^2\bmod N$. In both routines, parity, quotient, product, comparison, and remainder operations are exact integer operations.

1. Set $n=\lceil\log_2N\rceil$. If $N$ is even, set $d=2$, check $1<d<N$ and $N\bmod d=0$, and return $d$ if both checks pass.

2. For each integer exponent $e=2,3,\ldots,n$, initialize $L=2$ and $R=N$. While $L\le R$, set $b=\lfloor(L+R)/2\rfloor$ and $y=\texttt{CappedPower}(b,e)$. If $y<N$, set $L=b+1$. If $y>N$, set $R=b-1$. If $y=N$, verify $1<b<N$ and $N\bmod b=0$; return $b$ if both checks pass, and otherwise set $R=b-1$. If the loop ends without a return, continue to the next exponent.

3. Initialize $T=1$, $A=5$, and $B=8$. While $Av>Bu$, replace $(T,A,B)$ by $(T+1,5A,8B)$. Continue to instruction 4 with this $T$; it is the least positive integer satisfying $5^T v\le8^T u$, equivalently $T=\lceil\ln(1/\delta)/(-\ln(5/8))\rceil$.

4. For attempts $i=1,\ldots,T$, obtain a fresh independent sample $a$ by running [[alg-qa-shor-uniform-residue-sampler]] on $N$ with a fresh independent countable fair-bit tape. Compute $g=\gcd(a,N)$. If $1<g<N$ and $N\bmod g=0$, return $g$. If $g\ne1$, start the next attempt; the case $g=N$ is rejected as an invalid sample and also starts the next attempt.

5. When $g=1$, run modular order finding on $(N,a)$ with target parameter $b=2$, so its target failure is $2^{-2}=1/4$. Use fresh measurement randomness independent of the sampler tape and all previous attempts. If it returns `FAIL`, start the next attempt. Otherwise let $q$ be its candidate. Reject the candidate unless $2\le q\le N$, $q$ is even, and $\texttt{ModPower}(a,q)=1$. Set $z=\texttt{ModPower}(a,q/2)$, the standard representative of $a^{q/2}\bmod N$. Compute $d_- =\gcd(z-1,N)$ and $d_+=\gcd(z+1,N)$. Return the first of these satisfying $1<d_\pm<N$ and $N\bmod d_\pm=0$; if neither passes, start the next attempt.

6. If all $T$ attempts finish without returning a divisor, return `FAIL`.

The residue sampler's exact uniformity, almost-sure termination, and expected-bit bound are proved separately. The outer attempt count, root search, modular exponentiation, and divisor checks have the finite bounds stated above. Correctness, success probability, and costs are separate claims.

## Remarks

The odd-composite branch reaches order finding only after the gcd test establishes $\gcd(a,N)=1$, so the residue class of $a$ is a unit by [[thm-unit-criterion-modulo-n]]. A returned candidate period is rechecked even though the order-finding contract also verifies candidates. Its fair-bit tapes use countable choice and dependent choice through the sampler's countable product model; the number-theoretic and output-verification branches use finite arguments. Order-finding success and cost are separate claims.
