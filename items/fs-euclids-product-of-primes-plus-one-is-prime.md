---
id: fs-euclids-product-of-primes-plus-one-is-prime
kind: false-statement
title: "FALSE: for every finite list $p_0, \\dots, p_{n-1}$ of distinct primes, $p_0 \\cdots p_{n-1} + 1$ is prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-euclid-infinitude-of-primes, def-prime, lem-every-integer-above-one-has-a-prime-divisor, def-monoid-finite-product, def-semigroup-and-monoid, lem-units-of-z, def-injection-surjection-bijection, thm-division-algorithm-in-z, def-divides-in-z, lem-divisibility-basic, lem-int-cancellation, thm-int-comm-ring, thm-int-ordered-ring, def-int-operations, def-int-order, def-integers, lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, def-nat-order]
justified_by: []
aliases: [fs-euclid-number-is-prime]
landmark: false
short: "FALSE: $p_0 \\cdots p_{n-1} + 1$ is prime"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Euclid number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid_number"
    - title: "Euclid's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_theorem"
    - title: "Discrete mathematics notes: Prime numbers and Euclid's argument"
      url: "https://homepage.iis.sinica.edu.tw/~bywang/courses/discrete-math/note-3.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every $n \in \mathbb{N}$ and every injective list
$p : n \to \mathbb{Z}$ of primes ([[def-prime]],
[[def-injection-surjection-bijection]]),

$$\Bigl(\prod_{i<n} p_i\Bigr) + 1$$

is prime, the product being that of [[def-monoid-finite-product]] in the
commutative monoid $(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]].

The true statement is [[thm-euclid-infinitude-of-primes]], which concludes only
that this integer has *a prime divisor not on the list* — never that it is
itself prime.

**Witness:** $n = 6$ and $p = (2,3,5,7,11,13)$. Here
$2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 30030$ and

$$30031 \;=\; 59 \cdot 509 ,$$

so $30031$ has the positive divisor $59$, which is neither $1$ nor $30031$: it is
composite.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The integers $2, 3, 5, 7, 11, 13, 59, 509, 30030, 30031$.

[L1] $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$; an integer $> 1$ that is not prime is composite ([[def-prime]]).

[L2] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(m)} g_i = \bigl(\prod_{i<m} g_i\bigr) g_m$ ([[def-monoid-finite-product]], [[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L3] Every integer $n > 1$ has a prime divisor, and the least divisor of $n$ exceeding $1$ is prime ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L4] For $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$, and $b \mid a$ exactly when $r = 0$ ([[thm-division-algorithm-in-z]]).

[L6] $d \mid a$ means $a = dc$ for some $c$; divisibility is transitive ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L7] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; a product of two nonzero integers is nonzero ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-int-cancellation]]).

[L8] $\iota$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]); $m < k$ exactly when $\sigma(m) \le k$ and $1 = \sigma(0)$ ([[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]]).

## Refutation

**Proof technique:** direct.

1.1 $0 < 1$, and every integer $y > 0$ satisfies $y \ge 1$; consequently $y > c$ implies $y \ge c + 1$. [L7, L8]

1.2 $59 \cdot 509 = 30031$: indeed $59 \cdot 500 = 29500$ and $59 \cdot 9 = 531$, and $29500 + 531 = 30031$. So $59 \mid 30031$. [L6, L7, algebra]

2.1 A composite integer $n$ has a prime divisor $q$ with $q \cdot q \le n$. Let $q$ be the least divisor of $n$ exceeding $1$, which is prime by [L3], and write $n = qm$. Then $m > 0$, since $n > 0$ and $q > 0$; and $m \ne 1$, since $m = 1$ would make $n = q$ prime. So $m > 1$, and $m \mid n$, so $m$ is a divisor of $n$ exceeding $1$ and minimality gives $q \le m$; multiplying by $q > 0$ gives $q \cdot q \le qm = n$. [step 1.1, L1, L3, L6, L7]

2.2 $59 \ne 1$ and $59 \ne 30031$, and $59 > 0$; also $30031 > 1$. So $30031$ has a positive divisor other than $1$ and itself, hence is not prime, and being greater than $1$ it is composite. [step 1.1, step 1.2, L1, L7]

3.1 $2$, $3$, $5$, $7$, $11$ and $13$ are prime. Each exceeds $1$, so by step 2.1 it suffices to check the primes $q$ with $q \cdot q$ at most the number. For $2$ and $3$ there is none, since the least prime is $2$ and $2 \cdot 2 = 4 > 3$. For $5$ and $7$ only $q = 2$ qualifies, and $5 = 2 \cdot 2 + 1$, $7 = 3 \cdot 2 + 1$. For $11$ and $13$ only $q = 2$ and $q = 3$ qualify, since $4 \cdot 4 = 16 > 13$, and $11 = 5 \cdot 2 + 1$, $11 = 3 \cdot 3 + 2$, $13 = 6 \cdot 2 + 1$, $13 = 4 \cdot 3 + 1$. In every case no such divisor exists, so none of the six is composite, and each is therefore prime. [step 2.1, L1, L4, L7, algebra]

4.1 The six are pairwise distinct, and the list $p = (2,3,5,7,11,13)$ is therefore an injective list of primes of length $6$. [step 3.1, L7, L8]

5.1 $\prod_{i<6} p_i = 30030$: applying [L2] six times, $1 \cdot 2 = 2$, $2 \cdot 3 = 6$, $6 \cdot 5 = 30$, $30 \cdot 7 = 210$, $210 \cdot 11 = 2310$ and $2310 \cdot 13 = 30030$. Hence the integer named by the claim is $30030 + 1 = 30031$. [step 4.1, L2, L7, algebra]

6.1 Steps 4.1, 5.1 and 2.2 exhibit an injective list of primes whose product plus $1$ is composite: the claim is false. [step 4.1, step 5.1, step 2.2] ∎

## Remarks

- **Re-reading the true theorem shows it never says otherwise.** [[thm-euclid-infinitude-of-primes]] takes $N = \prod_{i<n} p_i + 1$, applies [[lem-every-integer-above-one-has-a-prime-divisor]] to get *a* prime divisor $q$ of $N$, and then shows $q$ is not among the $p_i$. Primality of $N$ is never claimed and is never used.

- **The promise the theorem does make is kept here.** $59$ is prime — by step 2.1 the only candidates are the primes $q$ with $q \cdot q \le 59$, that is $q \in \{2,3,5,7\}$ since $8 \cdot 8 = 64 > 59$, and $59 = 29 \cdot 2 + 1$, $59 = 19 \cdot 3 + 2$, $59 = 11 \cdot 5 + 4$, $59 = 8 \cdot 7 + 3$ all have nonzero remainder — and $59$ is not among $2,3,5,7,11,13$, exactly as [[thm-euclid-infinitude-of-primes]] promises. Nothing is claimed here about $509$.

- **Smaller lists do not refute the claim.** For $n = 0,1,2,3,4,5$ with the first primes in order, the six values $2$, $3$, $7$, $31$, $211$ and $2311$ are classically known to be prime; this item does not verify that, and it is beside the point — one witness suffices, and no amount of small cases could establish a universal claim.
