---
id: ex-qa-shor-factorization-retry-branches
kind: example
title: "Shor factoring preprocessing and retry branches"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-shor-factoring
  - lem-qa-shor-perfect-power-precheck
  - lem-qa-shor-residue-gcd-branch
  - thm-qa-order-to-factor-correctness
  - def-integers-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-group-power
  - def-common-divisor-and-gcd
  - def-divides-in-z
  - thm-unit-criterion-modulo-n
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
      locator: "§5, ‘Prime factorization’, PDF pp. 16–19; local branch examples."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.2–5.3, “Reduction from factoring to period-finding” and “Shor’s period-finding algorithm”; local branch examples."
---
## Example

The following exact inputs exercise the early return and retry branches of [[alg-qa-shor-factoring]]: the even input $14$, the perfect power $81=3^4$, the nonunit choice $a=5$ for $N=15$, and the unit samples $(N,a)=(35,11)$ and $(15,14)$. For these two retry executions, take the order-finding subroutine to return candidate $q=3$ for $(35,11)$ and candidate $q=2$ for $(15,14)$.

## Facts & Assumptions

**Given:** The stated Shor algorithm, the displayed residue samples, and the chosen order-finding candidate outputs $q=3$ for $(N,a)=(35,11)$ and $q=2$ for $(N,a)=(15,14)$.

[F1] The even precheck returns $2$ for even composite $N\ge4$. When the root-search branch is reached on a perfect-power input, it detects an exact representation $N=c^e$ with $c\ge2$ and $e\ge2$, and returns that representation's base $c$ as a proper factor ([[alg-qa-shor-factoring]], [[lem-qa-shor-perfect-power-precheck]]).

[F2] A nonunit sample in $\{1,\ldots,N-1\}$ gives a proper gcd factor; conditional on gcd one, it is a unit ([[lem-qa-shor-residue-gcd-branch]], [[thm-unit-criterion-modulo-n]]).

[F3] A period candidate is continued only when it is even, between $2$ and $N$, and passes $a^q\equiv1\pmod N$; the half-power gcds are returned only after the strict divisor checks ([[alg-qa-shor-factoring]], [[thm-qa-order-to-factor-correctness]]).

[F4] Modular powers and gcds here are computed by integer multiplication, congruence and common-divisor calculations ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]], [[def-group-power]], [[def-common-divisor-and-gcd]], [[def-divides-in-z]]).

## Verification

1.1 For $N=14$, the even branch checks $1<2<14$ and $14\bmod2=0$, so it returns the proper factor $2$ before sampling. For $N=81$, the root search starts at $e=2$ and finds $9^2=81$; since $1<9<81$, that branch returns $9$. The alternative representation $81=3^4$ is not reached after this earlier return. [given, F1, algebra]

1.2 For $N=15$ and sample $a=5$, $\gcd(5,15)=5$, which is strictly between $1$ and $15$ and divides $15$; the nonunit branch returns $5$ without order finding. [given, F2, F4, algebra]

1.3 For $N=35$ and $a=11$, $\gcd(11,35)=1$. The powers satisfy $11^1\equiv11$, $11^2\equiv16$, and $11^3\equiv1\pmod{35}$, so the true order is $3$, agreeing with the chosen candidate $q=3$. This candidate is odd and therefore fails the algorithm's even-period check; this attempt continues. [given, F3, F4, algebra]

2.1 For $N=15$ and $a=14$, $\gcd(14,15)=1$ and $14^2\equiv1\pmod{15}$ while $14\not\equiv1$, so the true order is $2$, agreeing with the chosen candidate $q=2$. The half-power is $z=14\equiv-1\pmod{15}$, giving $\gcd(z-1,15)=\gcd(13,15)=1$ and $\gcd(z+1,15)=\gcd(15,15)=15$. Neither passes the strict check, so the algorithm continues. [given, F3, F4, algebra] ∎
