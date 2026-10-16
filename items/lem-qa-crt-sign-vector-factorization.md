---
id: lem-qa-crt-sign-vector-factorization
kind: lemma
title: "Mixed CRT signs yield proper gcd factors"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-unit-group-chinese-remainder-decomposition
  - thm-chinese-remainder-theorem
  - thm-unit-group-modulo-odd-prime-power-is-cyclic
  - def-unit-group-modulo-n-and-euler-totient
  - def-order-in-a-group
  - def-group-power
  - lem-order-characterisation
  - def-common-divisor-and-gcd
  - def-divides-in-z
  - def-prime
  - def-integers-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-int-ordered-ring
  - lem-divisor-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
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

Let $N=\prod_{i<k}p_i^{e_i}$, where $k\ge1$, the $p_i$ are distinct odd primes, and every $e_i\ge1$. If $z^2\equiv1\pmod N$ but $z\not\equiv1,-1\pmod N$, then both $\gcd(z-1,N)$ and $\gcd(z+1,N)$ are proper nontrivial divisors of $N$. When $k=1$, the hypotheses cannot hold, because the proof below shows the only roots are the two global signs.

## Facts & Assumptions

**Given:** The stated factorization of odd $N$, an integer $z$ with $z^2\equiv1\pmod N$, and $z\not\equiv\pm1\pmod N$.

[F1] The Chinese remainder map is a bijection preserving multiplication, and it restricts to the product isomorphism of the corresponding unit groups for pairwise-coprime moduli ([[thm-chinese-remainder-theorem]], [[thm-unit-group-chinese-remainder-decomposition]]).

[F2] For odd prime $p$ and $e\ge1$, $(\mathbb Z/p^e)^\times$ is cyclic of even order $p^{e-1}(p-1)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]]).

[F3] For a generator $g$ of a cyclic group of order $M$, $g^t=1$ exactly when $M\mid t$ ([[lem-order-characterisation]]).

[F4] For a nonzero pair, gcd is a common divisor and is greatest in the usual order ([[def-common-divisor-and-gcd]]); divisibility is transitive ([[def-divides-in-z]]).

[F5] Every odd prime is at least $3$ ([[def-prime]], [[thm-int-ordered-ring]]). If $d\mid a$ and $a\ne0$, then $d\le|a|$ ([[lem-divisor-bound]]).

[F6] Congruence classes multiply by multiplying representatives, and equal classes are equivalent to congruence ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 By [F1], $z$ has components $z_i=[z]_{p_i^{e_i}}$. Each satisfies $z_i^2=1$, hence is a unit. Choose a generator $g_i$ of its cyclic unit group of even order $M_i$ by [F2], and write $z_i=g_i^{t_i}$. By [F3], $z_i^2=1$ exactly when $M_i\mid2t_i$. Among residues $t_i$ modulo even $M_i$, this gives only $t_i=0$ or $t_i=M_i/2$, so $z_i$ is one of the two roots $1,-1$: the second is $-1$ because $-1$ is a root and it is distinct from $1$ modulo $p_i^{e_i}>2$ (otherwise $p_i^{e_i}\mid2$, contrary to [F5]). To see the two exponent classes explicitly, write $M_i=2s_i$; $M_i\mid2t_i$ is equivalent to $s_i\mid t_i$, which has the two residue classes $0,s_i$ modulo $2s_i$. [given, F1, F2, F3, F5, F6, choose, algebra]

2.1 The signs cannot all be $+1$, since CRT injectivity would then give $z\equiv1\pmod N$, and they cannot all be $-1$, since it would give $z\equiv-1\pmod N$. Choose indices $i_+$ and $i_-$ with signs $+1$ and $-1$, respectively. This also shows that when $k=1$ the hypotheses are impossible. [given, step 1.1, F1, choose]

3.1 Since $p_{i_+}^{e_{i_+}}\mid z-1$ and $p_{i_+}^{e_{i_+}}\mid N$, it is a common divisor, so $\gcd(z-1,N)\ge p_{i_+}^{e_{i_+}}>1$. Since $z\equiv-1\pmod{p_{i_-}^{e_{i_-}}}$, that prime power divides $z+1$; it cannot divide $z-1$ because then it would divide $2=(z+1)-(z-1)$, whereas $p_{i_-}^{e_{i_-}}>2$. Thus $N\nmid z-1$ and $\gcd(z-1,N)<N$. [given, step 2.1, F4, F5, F6, algebra]

4.1 Interchanging the two signs in step 3.1 gives $1<\gcd(z+1,N)<N$. Hence both gcds are proper nontrivial divisors. [step 3.1, step 2.1, F4] ∎
