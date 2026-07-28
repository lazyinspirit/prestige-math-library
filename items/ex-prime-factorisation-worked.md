---
id: ex-prime-factorisation-worked
kind: example
title: "$360 = 2^{3} \\cdot 3^{2} \\cdot 5$ and $84 = 2^{2} \\cdot 3 \\cdot 7$, with $\\gcd(360,84) = 12$ and $\\operatorname{lcm}(360,84) = 2520$ read off the exponents"
status: published
origin: session
deps: [thm-gcd-and-lcm-from-valuations, thm-canonical-prime-factorisation,
       lem-p-adic-valuation-additive, lem-p-adic-valuation-basic, def-p-adic-valuation,
       thm-fundamental-theorem-of-arithmetic, thm-prime-factorisation-exists, def-prime,
       thm-euclidean-algorithm, thm-gcd-lcm-product, def-lcm, def-common-divisor-and-gcd,
       cor-common-divisor-divides-gcd, thm-division-algorithm-in-z, def-divides-in-z,
       lem-divisibility-basic, lem-divisor-bound, thm-euclids-lemma, def-group-power, lem-group-power-laws, lem-units-of-z,
       def-semigroup-and-monoid, def-monoid-finite-product, thm-int-comm-ring,
       thm-int-ordered-ring, def-int-operations, def-int-order, def-integers,
       lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "$360$, $84$, and their $\\gcd$ and $\\operatorname{lcm}$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
pipeline_run: null
---

## Example

Powers are the natural powers of [[def-group-power]] in the commutative monoid
$(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]]. For $k \in \mathbb{N}$ the symbol
$k$ inside $\mathbb{Z}$ means $\iota(k)$, the embedding of
[[lem-nat-embeds-int]].

$$360 \;=\; 2^{3} \cdot 3^{2} \cdot 5, \qquad 84 \;=\; 2^{2} \cdot 3 \cdot 7 .$$

Reading these against the injective list of primes $p = (2,3,5,7)$, which
contains every prime divisor of both numbers, [[thm-canonical-prime-factorisation]]
identifies the exponents as valuations ([[def-p-adic-valuation]]):

| $p$ | $2$ | $3$ | $5$ | $7$ |
|---|---|---|---|---|
| $v_p(360)$ | $3$ | $2$ | $1$ | $0$ |
| $v_p(84)$ | $2$ | $1$ | $0$ | $1$ |
| $\min$ | $2$ | $1$ | $0$ | $0$ |
| $\max$ | $3$ | $2$ | $1$ | $1$ |

By [[thm-gcd-and-lcm-from-valuations]] the minimum row is the valuation vector of
$\gcd(360,84)$ and the maximum row that of $\operatorname{lcm}(360,84)$, so

$$\gcd(360,84) \;=\; 2^{2} \cdot 3 \;=\; 12, \qquad \operatorname{lcm}(360,84) \;=\; 2^{3} \cdot 3^{2} \cdot 5 \cdot 7 \;=\; 2520 .$$

Two independent checks are carried out below: the Euclidean algorithm of
[[thm-euclidean-algorithm]] returns $12$ from the descent
$360 = 4 \cdot 84 + 24$, $84 = 3 \cdot 24 + 12$, $24 = 2 \cdot 12 + 0$; and
$12 \cdot 2520 = 30240 = 360 \cdot 84$, as [[thm-gcd-lcm-product]] requires.

## Facts & Assumptions

**Given:** The integers $360$, $84$, $12$ and $2520$, and the primes $2$, $3$, $5$, $7$.

[L1] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, and multiplication distributes over addition ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]); its order is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L2] $g^{0} = 1$ and $g^{\sigma(k)} = g^{k} g$ in $(\mathbb{Z},\cdot,1)$; and $g^{m+n} = g^{m}g^{n}$ ([[def-group-power]], [[lem-group-power-laws]], [[def-semigroup-and-monoid]], [[lem-units-of-z]], [[def-monoid-finite-product]]).

[L3] For $n \ge 1$ and an injective list $p$ of primes containing every prime divisor of $n$: $n = \prod_{i<r} p_i^{\,v_{p_i}(n)}$, the exponents are determined by $n$, and $v_q(n) = 0$ for a prime $q$ off the list ([[thm-canonical-prime-factorisation]], [[thm-fundamental-theorem-of-arithmetic]], [[thm-prime-factorisation-exists]], [[def-p-adic-valuation]], [[lem-p-adic-valuation-basic]], [[lem-p-adic-valuation-additive]]).

[L4] For positive $a, b$ and every prime $p$: $v_p(\gcd(a,b)) = \min\{v_p(a),v_p(b)\}$ and $v_p(\operatorname{lcm}(a,b)) = \max\{v_p(a),v_p(b)\}$; and a positive integer with those valuations *is* the $\gcd$, respectively the $\operatorname{lcm}$ ([[thm-gcd-and-lcm-from-valuations]], [[def-common-divisor-and-gcd]], [[def-lcm]], [[cor-common-divisor-divides-gcd]]).

[L5] For $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$, and $b \mid a$ exactly when $r = 0$ ([[thm-division-algorithm-in-z]], [[def-divides-in-z]], [[lem-divisibility-basic]]).

[L6] The remainder descent from $(a,b)$ with $b > 0$ terminates and its last nonzero remainder is $\gcd(a,b)$ ([[thm-euclidean-algorithm]]).

[L7] $\gcd(a,b)\operatorname{lcm}(a,b) = |ab|$ ([[thm-gcd-lcm-product]]).

[L9] If $q$ is prime and $q \mid uv$ then $q \mid u$ or $q \mid v$ ([[thm-euclids-lemma]]).

[L8] An integer $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$ ([[def-prime]]); and a divisor $d$ of a nonzero $a$ satisfies $|d| \le |a|$ ([[lem-divisor-bound]]).

## Verification

**Proof technique:** direct.

1.1 The two products are correct: $2^{3} = 8$, $3^{2} = 9$, and $8 \cdot 9 = 72$ with $72 \cdot 5 = 360$; likewise $2^{2} = 4$, $4 \cdot 3 = 12$ and $12 \cdot 7 = 84$. [L1, L2, algebra]

1.2 $2$, $3$, $5$ and $7$ are prime, and they are pairwise distinct. Each exceeds $1$; and a positive divisor $d$ of such a number $a$ satisfies $1 \le d \le a$ by [L8], so the candidates are the finitely many integers in that range, and each is settled by its remainder under [L5]: $2 = 1 \cdot 2 + 0$ has only $1$ and $2$ as candidates; for $3$ the extra candidate $2$ gives $3 = 1 \cdot 2 + 1$; for $5$ the extra candidates $2, 3, 4$ give remainders $1$, $2$, $1$; and for $7$ the extra candidates $2,3,4,5,6$ give remainders $1$, $1$, $3$, $2$, $1$. In each case no divisor other than $1$ and the number itself survives. [L1, L5, L8, algebra]

2.1 The list $p = (2,3,5,7)$ is injective and consists of primes, and it contains every prime divisor of $360$ and of $84$. Injectivity and primality are step 1.2. For the covering: if $q$ is prime and $q \mid 360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5$, repeated use of [L9] gives $q \mid 2$, $q \mid 3$ or $q \mid 5$, and $q$ being a positive divisor of a prime with $q > 1$ forces $q$ to be that prime; likewise $q \mid 84 = 2 \cdot 2 \cdot 3 \cdot 7$ forces $q \in \{2,3,7\}$. [step 1.1, step 1.2, L8, L9]

3.1 By [L3] applied to $360$ with this list, the exponents in step 1.1 are the valuations: $v_2(360) = 3$, $v_3(360) = 2$, $v_5(360) = 1$, $v_7(360) = 0$. [step 1.1, step 2.1, L3]

3.2 By [L3] applied to $84$: $v_2(84) = 2$, $v_3(84) = 1$, $v_5(84) = 0$, $v_7(84) = 1$. [step 1.1, step 2.1, L3]

4.1 Taking minima entrywise gives $2, 1, 0, 0$, and $2^{2} \cdot 3^{1} \cdot 5^{0} \cdot 7^{0} = 4 \cdot 3 = 12$; by [L3] the valuations of $12$ against this list are exactly those exponents, so $12$ has the valuation vector of $\gcd(360,84)$ and therefore equals it by [L4]. [step 3.1, step 3.2, L1, L2, L3, L4]

4.2 Taking maxima entrywise gives $3, 2, 1, 1$, and $2^{3} \cdot 3^{2} \cdot 5 \cdot 7 = 72 \cdot 35 = 2520$; the same argument gives $\operatorname{lcm}(360,84) = 2520$. [step 3.1, step 3.2, L1, L2, L3, L4]

5.1 First check, the Euclidean algorithm. $4 \cdot 84 = 336$ and $336 + 24 = 360$ with $0 \le 24 < 84$; $3 \cdot 24 = 72$ and $72 + 12 = 84$ with $0 \le 12 < 24$; $2 \cdot 12 = 24$ and $24 + 0 = 24$ with $0 \le 0 < 12$. By the uniqueness in [L5] these are the divisions of the descent, whose last nonzero remainder is $12$, so $\gcd(360,84) = 12$ by [L6], agreeing with step 4.1. [step 4.1, L1, L5, L6, algebra]

5.2 Second check, the product formula. $12 \cdot 2520 = 30240$ and $360 \cdot 84 = 30240$, and $360 \cdot 84 > 0$ so $|360 \cdot 84| = 360 \cdot 84$; this is [L7], agreeing with steps 4.1 and 4.2. [step 4.1, step 4.2, L1, L7, algebra]

6.1 The factorisations, the valuation table, and both values of $\gcd$ and $\operatorname{lcm}$ are verified, and the two independent checks agree. [step 4.1, step 4.2, step 5.1, step 5.2] ∎

## Remarks

- **The cross-check is the point of the example.** [[thm-euclidean-algorithm]] computes $\gcd(360,84)$ without ever mentioning a prime, and the exponent recipe computes it without ever performing a division; they return the same integer because [[thm-gcd-and-lcm-from-valuations]] proves the recipe *identifies* the $\gcd$ of [[def-common-divisor-and-gcd]] rather than defining a rival.

- **Which method is practical is a separate question.** Factoring $360$ and $84$ is easy because they are small; for large integers the Euclidean algorithm is the only one of the two that runs, since no factorisation is needed. Nothing here claims anything about the cost of either procedure.

- **The exponent $0$ columns matter.** $v_5(84) = 0$ and $v_7(360) = 0$ are what make the same list serve both numbers, and clause 2 of [[thm-canonical-prime-factorisation]] is the statement that every prime off the list contributes $0$ as well.
