---
id: lem-qa-prime-power-order-two-adic-law
kind: lemma
title: "Two-adic order distribution in odd prime-power unit groups"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-unit-group-modulo-odd-prime-power-is-cyclic
  - def-unit-group-modulo-n-and-euler-totient
  - def-order-in-a-group
  - def-group-power
  - lem-order-characterisation
  - def-p-adic-valuation
  - def-finite-probability-space-and-event
  - def-common-divisor-and-gcd
  - lem-gcd-basic-values
  - def-divides-in-z
  - def-coprime
  - lem-coprime-criterion
  - lem-coprime-divides-product
  - thm-bezout-identity
  - thm-int-comm-ring
  - lem-int-cancellation
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

Let $p$ be an odd prime and $e\ge1$. If $A$ is uniform in $(\mathbb Z/p^e)^\times$, then for every possible integer $j$,

$$\mathbb P\bigl(v_2(\operatorname{ord}_{p^e}(A))=j\bigr)\le\frac12.$$

Here $v_2(r)$ is the greatest $s\in\mathbb N$ such that $2^s\mid r$, for the positive integer order $r$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $e\ge1$, and the uniform finite probability law on $(\mathbb Z/p^e)^\times$.

[F1] The unit group is cyclic of order $M=p^{e-1}(p-1)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]], [[def-unit-group-modulo-n-and-euler-totient]]).

[F2] For a finite-order group element, its powers equal the identity exactly at multiples of its order ([[def-order-in-a-group]], [[def-group-power]], [[lem-order-characterisation]]).

[F3] For a positive integer $r$, $v_2(r)$ is the greatest $s$ with $2^s\mid r$ ([[def-p-adic-valuation]], with prime $2$).

[F4] A finite uniform probability space assigns each outcome equal weight ([[def-finite-probability-space-and-event]]).

[F5] The gcd is a greatest common divisor in the divisibility order and $\gcd(M,0)=M$ for $M>0$ ([[def-common-divisor-and-gcd]], [[lem-gcd-basic-values]]); Bézout's identity characterizes coprimality, and if $c,d$ are coprime and $c\mid dx$, then $c\mid x$ ([[def-divides-in-z]], [[def-coprime]], [[lem-coprime-criterion]], [[lem-coprime-divides-product]], [[thm-bezout-identity]]).

[F6] Integer multiplication is associative and cancellation by a nonzero factor is valid ([[thm-int-comm-ring]], [[lem-int-cancellation]]).

## Proof

1.1 Since $p$ is odd, $M=p^{e-1}(p-1)$ is even; write $M=2^s u$ with $s\ge1$ and $u$ odd. Choose a generator $g$ by [F1]. The map $t\mapsto g^t$ for $0\le t<M$ is a bijection onto the unit group, by the order statement in [F2], so a uniform unit corresponds to a uniform such exponent $t$. [given, F1, F2, choose]

1.2 Put $d=\gcd(M,t)$. For $t>0$, write $M=dM_0$ and $t=dt_0$. Bézout's identity for $M,t$ divides through by $d$ to give $M_0x+t_0y=1$, so $M_0,t_0$ are coprime by [F5]. For every $h\ge1$, [F2] gives $(g^t)^h=1$ exactly when $M\mid th$, equivalently $M_0\mid t_0h$; [F5] makes this equivalent to $M_0\mid h$. Hence the least such $h$ is $M_0=M/d$. If $t=0$, then $d=M$ and $g^t=1$ has order $1=M/d$. [given, F2, F5, F6, algebra]

2.1 The exponent of $2$ in $d=\gcd(M,t)$ is $s$ exactly when $2^s\mid t$: if $2^s\mid t$, then $2^s$ is a common divisor and hence divides $d$; if $2^s$ divides $d$, it divides $t$. Since $2^s$ is the full power of $2$ dividing $M$, this is equivalent to $v_2(M/d)=0$. There are $M/2^s=u$ such residues among $0,\ldots,M-1$, so this probability is $u/M=2^{-s}\le1/2$. [step 1.1, step 1.2, F3, F4, F5, algebra]

3.1 For $1\le j\le s$, $v_2(M/d)=j$ exactly when the exponent of $2$ in $d$ is $s-j$. As in step 2.1, this is exactly when $2^{s-j}\mid t$ and $2^{s-j+1}\nmid t$. The number of such residues is
$$\frac{M}{2^{s-j}}-\frac{M}{2^{s-j+1}}=2^{j-1}u,$$
so their probability is $2^{j-1}u/M=2^{j-s-1}\le1/2$. No other valuation occurs because $M/d$ divides $M$. [step 1.1, step 1.2, F3, F4, F5, algebra]

4.1 The cases $j=0$ and $1\le j\le s$ exhaust all possible valuations, and each has probability at most $1/2$ by steps 2.1 and 3.1. [step 2.1, step 3.1] ∎
