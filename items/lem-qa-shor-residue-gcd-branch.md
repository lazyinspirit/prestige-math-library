---
id: lem-qa-shor-residue-gcd-branch
kind: lemma
title: "Random residue gcd branch for factoring"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-integers-modulo-n
  - def-common-divisor-and-gcd
  - lem-gcd-basic-values
  - lem-divisor-bound
  - def-finite-probability-space-and-event
  - def-conditional-probability
  - thm-standard-representatives-modulo-n
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

Let $N\ge2$ and choose $a$ uniformly from the integers $1,\ldots,N-1$. If $\gcd(a,N)>1$, then $\gcd(a,N)$ is a proper factor of $N$. Conditional on $\gcd(a,N)=1$, the residue class $[a]_N$ is uniformly distributed in the unit group $(\mathbb Z/N)^\times$.

## Facts & Assumptions

**Given:** An integer $N\ge2$ and the uniform finite sample space $\Omega_N=\{1,\ldots,N-1\}$.

[F1] Each residue class modulo $N$ has a unique standard representative in $\{0,\ldots,N-1\}$ ([[thm-standard-representatives-modulo-n]], [[def-integers-modulo-n]]).

[F2] A residue $[a]_N$ is a unit exactly when $\gcd(a,N)=1$ ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[F3] In a finite uniform probability space, each outcome has equal weight; event probability is the sum of those weights ([[def-finite-probability-space-and-event]]), and $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$ when $\mathbb P(B)>0$ ([[def-conditional-probability]]).

[F4] The gcd is a positive common divisor and is greatest in the usual order ([[def-common-divisor-and-gcd]]); $\gcd(0,N)=N$ for $N\ge1$ ([[lem-gcd-basic-values]]).

[F5] If $d\mid a$ and $a\ne0$, then $|d|\le|a|$ ([[lem-divisor-bound]]).

## Proof

1.1 If $g=\gcd(a,N)>1$, then $g\mid a$ and $g\mid N$ by [F4]. Since $g$ is positive and divides the nonzero $a$, [F5] gives $g\le a<N$; hence $1<g<N$ and $g$ is a proper factor. [given, F4, F5, algebra]

1.2 The event $U=\{a\in\Omega_N:\gcd(a,N)=1\}$ is nonempty because $a=1$ belongs to it. By [F1] and [F2], the map $a\mapsto[a]_N$ is a bijection from $U$ to $(\mathbb Z/N)^\times$: every unit has its unique standard representative, and the zero class is not a unit because [F2] and [F4] give $\gcd(0,N)=N\ne1$. [given, F1, F2, F4, choose]

2.1 Every $a\in U$ has probability $1/(N-1)$, so $\mathbb P(U)=|U|/(N-1)>0$. For any fixed unit representative $a\in U$, its conditional probability is $(1/(N-1))/\mathbb P(U)=1/|U|$. By [F2], this is the uniform law on the unit group. [step 1.2, F3, algebra]

3.1 Step 1.1 proves the immediate proper-factor branch, and step 2.1 proves conditional uniformity of the unit branch. [step 1.1, step 2.1] ∎
