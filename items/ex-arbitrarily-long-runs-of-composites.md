---
id: ex-arbitrarily-long-runs-of-composites
kind: example
title: "For every $n \\in \\mathbb{N}$ there are $n$ consecutive composite integers: with $N := \\prod_{j<n}(j+2)$, each of $N+2, \\dots, N+n+1$ is composite"
status: draft
origin: session
deps: [def-prime, def-monoid-finite-product, thm-generalised-associativity,
       lem-units-of-z, def-semigroup-and-monoid, def-divides-in-z, lem-divisibility-basic,
       lem-divisor-bound, thm-induction-principle, lem-nat-order-is-membership,
       lem-nat-discrete, lem-nat-add-commutative, lem-nat-embeds-int, def-natural-numbers,
       def-nat-order, def-nat-addition, thm-int-comm-ring, thm-int-ordered-ring,
       def-int-operations, def-int-order, def-integers]
justified_by: []
forward_refs: [lem-factorial-beats-geometric]
aliases: [ex-prime-gaps-are-unbounded]
landmark: false
short: "$n$ consecutive composites, for every $n$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Prime gap (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Prime_gap"
pipeline_run: null
---

## Example

Let $n \in \mathbb{N}$, write $\iota : \mathbb{N} \to \mathbb{Z}$ for the
embedding of [[lem-nat-embeds-int]], and put

$$N \;:=\; \prod_{j<n} \iota(j+2),$$

the finite product of [[def-monoid-finite-product]] taken in the commutative
monoid $(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]]; so $N$ is the product of the
$n$ integers $2, 3, \dots, n+1$, and $N = 1$ when $n = 0$.

Then $N + \iota(j+2)$ is composite ([[def-prime]]) for every $j < n$. Those $n$
integers are $N+2, N+3, \dots, N+n+1$, consecutive because consecutive values of
$j$ change the summand by $1$. So for every $n$ there is a run of $n$ consecutive
composite integers.

## Facts & Assumptions

**Given:** $n \in \mathbb{N}$ and $N := \prod_{j<n} \iota(j+2)$.

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(m)} g_i = \bigl(\prod_{i<m} g_i\bigr) g_m$; the value depends only on the entries named ([[def-monoid-finite-product]], [[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L2] Splitting law: $\prod_{i<m+c} g_i = \bigl(\prod_{i<m} g_i\bigr)\bigl(\prod_{l<c} g_{m+l}\bigr)$ ([[thm-generalised-associativity]]).

[L3] $n > 1$ that is not prime is composite; $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[L4] Divisibility is reflexive and transitive and is linear: $d \mid u$ and $d \mid w$ give $d \mid u + w$; $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L5] If $d \mid a$ and $a \ne 0$ then $|d| \le |a|$ ([[lem-divisor-bound]]).

[L6] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] $\iota$ is injective, preserves addition, multiplication and order, and has as image the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L8] On $\mathbb{N}$: $m + 0 = m$ and $m + \sigma(k) = \sigma(m+k)$, so $\sigma(k) = k+1$; addition is commutative ([[def-nat-addition]], [[lem-nat-add-commutative]], [[def-natural-numbers]]); $a \le b$ means $a + c = b$ for some $c$ ([[def-nat-order]]); $a < b$ exactly when $\sigma(a) \le b$ ([[lem-nat-discrete]]); and $j < \sigma(j)$, with $i < \sigma(j)$ exactly when $i \le j$ ([[lem-nat-order-is-membership]]).

[L9] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]]).

## Verification

**Proof technique:** direct.

1.1 $0 < 1$ in $\mathbb{Z}$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 = \sigma(0) \le t$ and $\iota$ preserves the order. [L7, L8, L9]

1.2 Fix $j < n$ and put $k := \iota(j+2)$. Then $k \mid N$: since $j < n$ we have $\sigma(j) \le n$, so $n = \sigma(j) + c$ for some $c \in \mathbb{N}$, and the splitting law gives $N = \bigl(\prod_{i<\sigma(j)} \iota(i+2)\bigr)\bigl(\prod_{l<c} \iota(\sigma(j)+l+2)\bigr)$, while $\prod_{i<\sigma(j)} \iota(i+2) = \bigl(\prod_{i<j} \iota(i+2)\bigr) k$. Rearranging by associativity and commutativity, $N = k \cdot B$ for an integer $B$. [L1, L2, L4, L8, L9]

2.1 For every $j \in \mathbb{N}$, $\iota(j+2) \ge 2 > 1$, where $2 := 1+1$. Indeed $2 = \sigma(1) = 1 + 1$ in $\mathbb{N}$ gives $\iota(2) = \iota(1) + \iota(1) = 1 + 1$; and $2 \le j + 2$ in $\mathbb{N}$ because $2 + j = j + 2$, so $\iota(2) \le \iota(j+2)$. [step 1.1, L7, L8, L9]

2.2 Hence $k \mid N + k$, by linearity applied to $k \mid N$ and $k \mid k$. [step 1.2, L4]

3.1 $N \ge 1$. Let $T$ be the set of $m \in \mathbb{N}$ with $\prod_{i<m} \iota(i+2) \ge 1$. Then $0 \in T$, the empty product being $1$. If $m \in T$ then $\prod_{i<\sigma(m)} \iota(i+2) = \bigl(\prod_{i<m} \iota(i+2)\bigr) \iota(m+2)$ has both factors $\ge 1 > 0$, so the product is positive and hence $\ge 1$ by step 1.1. By induction $T = \mathbb{N}$, so $N \ge 1 > 0$. [step 1.1, step 2.1, L1, L6, L9]

4.1 $N + k > k > 1$, because $N > 0$; in particular $N + k > 1$ and $N + k \ne k$. [step 2.1, step 3.1, L9]

5.1 So $k$ is a positive divisor of $N + k$ with $k \ne 1$ and $k \ne N + k$, and $N + k > 1$; therefore $N + k$ is not prime, and being greater than $1$ it is composite. [step 2.1, step 2.2, step 4.1, L3]

6.1 As $j$ runs over $0, 1, \dots, n-1$ the integers $N + \iota(j+2)$ run over $N+2, N+3, \dots, N+n+1$, each obtained from the previous by adding $1$, since $\iota(\sigma(j)+2) = \iota(j+2) + 1$. All $n$ of them are composite by step 5.1. [step 5.1, L7, L8, L9] ∎

## Remarks

- **No factorial is used, and none is available.** The library's $k!$ is introduced inside $\mathbb{R}$ by way of a finite sum ([[lem-factorial-beats-geometric]]), a different object on a different page; minting a factorial on $\mathbb{Z}$ here would create a dictionary obligation this page cannot discharge. The finite product of [[def-monoid-finite-product]] in $(\mathbb{Z},\cdot,1)$ does everything needed, and $N$ is $(n+1)!$ only in the informal sense.

- **The case $n = 0$ is real and vacuous.** The empty product is $1$, there is no $j < 0$, and the claim asserts nothing — correctly, since a run of $0$ consecutive composites is no claim at all.

- **This says the gaps are unbounded and nothing about where the primes are.** It is entirely compatible with [[thm-euclid-infinitude-of-primes]]: primes keep coming, and yet one can always find a stretch of any prescribed length containing none. No claim is made here about how large $N$ must be, or about the smallest run of a given length.
