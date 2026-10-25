---
id: thm-qa-order-to-factor-success
kind: theorem
title: "Classical randomized order-to-factor success bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - lem-qa-prime-power-order-two-adic-law
  - lem-qa-even-order-square-root
  - lem-qa-crt-sign-vector-factorization
  - thm-unit-group-chinese-remainder-decomposition
  - thm-unit-group-modulo-odd-prime-power-is-cyclic
  - thm-canonical-prime-factorisation
  - thm-fundamental-theorem-of-arithmetic
  - def-finite-probability-space-and-event
  - def-product-of-finite-probability-spaces
  - def-order-in-a-group
  - def-group-power
  - lem-order-characterisation
  - def-p-adic-valuation
  - def-common-divisor-and-gcd
  - def-divides-in-z
  - def-coprime
  - lem-coprime-criterion
  - lem-coprime-divides-product
  - thm-bezout-identity
  - thm-int-comm-ring
  - lem-int-cancellation
  - def-unit-group-modulo-n-and-euler-totient
  - def-integers-modulo-n
  - cor-order-of-element-divides-group-order
  - thm-integers-modulo-n-basic-algebra
  - thm-product-probability-has-independent-coordinate-events
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finitely many components and finite probability spaces occur."
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

Let $N$ be an odd composite that is not a perfect power, and write its prime-power factorization
$$N=\prod_{i<k}p_i^{e_i},$$
where the $p_i$ are distinct odd primes, $e_i\ge1$, and $k$ is their number. Choose $a$ uniformly from $(\mathbb Z/N)^\times$ and let $r=\operatorname{ord}_N(a)$. The true-order reduction sets $z=a^{r/2}\bmod N$ when $r$ is even and succeeds when $r$ is even and $z\not\equiv\pm1\pmod N$; on that event both gcds give proper factors. This event has probability at least
$$1-2^{-(k-1)}\ge\frac12.$$

## Facts & Assumptions

**Given:** The stated odd composite $N$, its prime-power factorization, a uniform unit $a$, and the true order $r=\operatorname{ord}_N(a)$.

[F1] Every integer $N\ge2$ has a finite prime factorization unique up to order ([[thm-fundamental-theorem-of-arithmetic]], [[thm-canonical-prime-factorisation]]).

[F2] The CRT map restricts to an isomorphism from the unit group modulo $N$ to the product of the unit groups modulo the pairwise-coprime prime powers ([[thm-unit-group-chinese-remainder-decomposition]]).

[F3] The uniform product law has independent coordinates ([[def-finite-probability-space-and-event]], [[def-product-of-finite-probability-spaces]], [[thm-product-probability-has-independent-coordinate-events]]).

[F4] For each odd prime power, every possible value of $v_2$ of a uniform unit's order has probability at most $1/2$ ([[lem-qa-prime-power-order-two-adic-law]]).

[F5] The half-power of a true even order is a nonidentity square root of one; in each odd prime-power component the only square roots are $\pm1$, and mixed CRT signs give proper gcd factors ([[lem-qa-even-order-square-root]], [[lem-qa-crt-sign-vector-factorization]]).

[F6] The order of a unit is the least positive exponent giving the identity; its powers equal the identity exactly at multiples of that order ([[def-order-in-a-group]], [[def-group-power]], [[lem-order-characterisation]]).

[F7] The exponent of $2$ in a positive integer is the greatest $s$ with $2^s$ dividing that integer ([[def-p-adic-valuation]]); cancellation by a nonzero integer is valid ([[lem-int-cancellation]]), and Bézout and Euclid's lemma justify cancellation of coprime factors ([[def-common-divisor-and-gcd]], [[def-divides-in-z]], [[def-coprime]], [[lem-coprime-criterion]], [[lem-coprime-divides-product]], [[thm-bezout-identity]]).

[F8] Each unit group modulo a positive integer is finite, so a unit in it has a finite positive order ([[def-unit-group-modulo-n-and-euler-totient]], [[cor-order-of-element-divides-group-order]]).

## Proof

1.1 By [F1], $N$ has a factorization into distinct prime powers. Since $N$ is odd, every prime factor is odd. If there were only one distinct prime $p$, then $N=p^e$; $e=1$ would make $N$ prime, while $e\ge2$ would make it a perfect power. Both contradict the hypotheses, so $k\ge2$. [given, F1, algebra]

1.2 Under the CRT isomorphism [F2], a uniform unit corresponds to a uniform tuple $(a_i)_{i<k}$ in the product of the local unit groups: the map is a bijection and preserves equal weights. By [F3], the local components, and hence their orders $r_i=\operatorname{ord}_{p_i^{e_i}}(a_i)$ and valuations $j_i=v_2(r_i)$, are independent. Each local unit group is finite, so only finitely many valuation values occur. [given, F2, F3, algebra]

2.1 By [F8], $r$ is finite and positive. Since $a^r=1$ modulo $N$, CRT and [F6] give $r_i\mid r$ for each $i$. Let $J=\max_i j_i$ and $m=v_2(r)$. Since $2^{j_i}\mid r_i\mid r$, the definition of $m$ gives $j_i\le m$ for every $i$, so $J\le m$. If $m>J$, write $r=2^m s$ and $r_i=2^{j_i}s_i$ with $s,s_i$ odd; here $m\ge1$. From $r_i\mid r$, canceling the nonzero factor $2^{j_i}$ gives $s_i\mid2^{m-j_i}s$. Since $s_i$ is odd, it is coprime to $2^{m-j_i}$, so Euclid's lemma gives $s_i\mid s$. Also $j_i\le J<m$, so $2^{j_i}\mid2^{m-1}$. Thus every $r_i\mid r/2$, so every local component and therefore $a^{r/2}$ equals the identity by [F2,F6]. This contradicts the minimality of $r$, since $0<r/2<r$. Therefore $m=J$. [step 1.2, F2, F6, F7, F8, algebra]

2.2 Write $p_i(j)=\mathbb P(j_i=j)$. By independence [F3], the probability that all valuations agree is $\sum_j\prod_{i<k}p_i(j)$. For every possible $j$, [F4] bounds each of $p_1(j),\ldots,p_{k-1}(j)$ by $1/2$, so $\prod_{i<k}p_i(j)\le2^{-(k-1)}p_0(j)$. Summing over the finite set of possible $j$ gives probability at most $2^{-(k-1)}$, since $\sum_jp_0(j)=1$. [step 1.2, F3, F4, algebra]

3.1 If the $j_i$ are not all equal, then $J\ge1$; choose indices $i,h$ with $j_i=J$ and $j_h<J$. Write $r=2^J s$ and $r_h=2^{j_h}s_h$ with $s,s_h$ odd. Since $r_h\mid r$, cancellation gives $s_h\mid2^{J-j_h}s$; because $s_h$ is odd, it is coprime to $2^{J-j_h}$, so Euclid's lemma gives $s_h\mid s$. As $j_h<J$, $2^{j_h}\mid2^{J-1}$, hence $r_h\mid2^{J-1}s=r/2$. By [F6], $a_h^{r/2}=1$. For the maximum index, $r_i\nmid r/2$ because its two-adic valuation is $J$ while $v_2(r/2)=J-1$; hence [F6] gives $a_i^{r/2}\ne1$. Its square is $1$ because $r_i\mid r$. By [F5], this local root is $-1$, while the $h$ component is $+1$. Thus the global square root is neither global sign, and [F5] gives proper gcd factors. [step 2.1, F5, F6, F7, choose, algebra]

4.1 By step 2.2, the valuations differ with probability at least $1-2^{-(k-1)}$; step 3.1 shows that every such outcome gives a proper factor. Since $k\ge2$ by step 1.1, this probability is at least $1/2$. [step 1.1, step 2.2, step 3.1, algebra] ∎
