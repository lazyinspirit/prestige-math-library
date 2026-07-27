---
id: thm-prime-factorisation-exists
kind: theorem
title: "Every integer $n \\ge 1$ is a finite product of primes: there are $r \\in \\mathbb{N}$ and a list $p : r \\to \\mathbb{Z}$ of primes with $n = \\prod_{i<r} p_i$, the case $n = 1$ being the empty product"
status: draft
origin: session
deps: [lem-every-integer-above-one-has-a-prime-divisor, def-prime,
       def-semigroup-and-monoid, lem-units-of-z, def-monoid-finite-product,
       thm-strong-induction, thm-induction-principle, lem-nat-order-is-membership,
       def-divides-in-z, lem-divisibility-basic, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers,
       def-nat-order, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
forward_refs: [cex-hilbert-monoid-factorisation-not-unique]
aliases: []
landmark: true
short: "$n \\ge 1$ is a product of primes"
proof_strategy: induction
verification:
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
pipeline_run: null
---

## Statement

Write finite products in the commutative monoid $(\mathbb{Z},\cdot,1)$ of
[[lem-units-of-z]], as in [[def-monoid-finite-product]]; a **list of primes of
length $r$** means a function $p : r \to \mathbb{Z}$ on the von Neumann natural
$r = \{0,\dots,r-1\}$ with every $p_i$ prime ([[def-prime]]).

1. **Existence.** For every $n \in \mathbb{Z}$ with $n \ge 1$ there are
   $r \in \mathbb{N}$ and a list $p : r \to \mathbb{Z}$ of primes with

   $$n \;=\; \prod_{i<r} p_i .$$

   At $n = 1$ this holds with $r = 0$: the empty product is $1$, so $1$ is a
   product of primes, of no primes at all, and needs no separate clause.

2. **Every such product is at least $1$.** Conversely, for every $r \in
   \mathbb{N}$ and every list $p : r \to \mathbb{Z}$ of primes,
   $\prod_{i<r} p_i \ge 1$. So the integers of clause 1 are exactly the values
   of finite products of primes.

## Facts & Assumptions

**Given:** The commutative monoid $(\mathbb{Z},\cdot,1)$ ([[lem-units-of-z]], [[def-semigroup-and-monoid]]); the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of [[lem-nat-embeds-int]]; and the property $P(k)$: "if $\iota(k) \ge 1$ then $\iota(k) = \prod_{i<r} p_i$ for some $r \in \mathbb{N}$ and some list $p : r \to \mathbb{Z}$ of primes".

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(r)} g_i = \bigl(\prod_{i<r} g_i\bigr) \cdot g_r$; the value depends only on $g_0,\dots,g_{r-1}$, so a list $u : r \to M$ determines $\prod_{i<r} u_i$ ([[def-monoid-finite-product]]).

[L2] Every integer $n > 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]], [[def-divides-in-z]]).

[L3] Strong induction: if for every $k$ the truth of $P$ below $k$ implies $P(k)$, then $P$ holds everywhere on $\mathbb{N}$ ([[thm-strong-induction]]).

[L4] Induction: a subset of $\mathbb{N}$ containing $0$ and closed under $\sigma$ is $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-integers]]).

[L6] Every prime satisfies $p > 1$ ([[def-prime]]).

[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-ordered-ring]], [[def-int-order]]).

[L8] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative, $x \cdot 1 = x$, $x \cdot 0 = 0$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$, with $-(-x) = x$ and $(-x)y = -(xy)$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L9] On $\mathbb{N}$: $0 \le k$ for every $k$ ([[def-nat-order]]); $m < k$ exactly when $\sigma(m) \le k$ ([[lem-nat-discrete]]); $1 = \sigma(0)$ ([[def-natural-numbers]]); and $r < \sigma(r)$, with $i < \sigma(r)$ exactly when $i \le r$ ([[lem-nat-order-is-membership]]).

[L10] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

## Proof

**Proof technique:** induction.

1.1 $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, so $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $\iota(0) = 0$. [L5]

1.2 Discreteness: if $x \in \mathbb{Z}$ and $0 < x$ then $1 \le x$. Indeed $x \ge 0$, so $x = \iota(k)$ for some $k$; $k \ne 0$ since $\iota(0) = 0 \ne x$; so $0 < k$ in $\mathbb{N}$, hence $1 = \sigma(0) \le k$, and applying the order-preserving $\iota$ gives $1 \le x$. [L5, L9]

1.3 Let $k \in \mathbb{N}$ and assume $P(j)$ for every $j < k$. [ih]

2.1 Clause 2. Let $T$ be the set of $r \in \mathbb{N}$ such that $\prod_{i<r} p_i \ge 1$ for every list $p : r \to \mathbb{Z}$ of primes. Then $0 \in T$, the empty product being $1$. If $r \in T$ and $p : \sigma(r) \to \mathbb{Z}$ is a list of primes, then $\prod_{i<\sigma(r)} p_i = \bigl(\prod_{i<r} p_i\bigr) p_r$, where the restriction of $p$ to $r$ is again a list of primes, so the first factor is $\ge 1 > 0$; and $p_r > 1 > 0$; positives being closed under multiplication the product is $> 0$, hence $\ge 1$ by step 1.2. So $\sigma(r) \in T$, and $T = \mathbb{N}$. [step 1.1, step 1.2, L1, L4, L6, L7]

2.2 $P(0)$ holds vacuously: $\iota(0) = 0$ and $0 \ge 1$ is false, since $0 < 1$. [base, step 1.1, L5]

2.3 Suppose $\iota(k) \ge 1$ and write $n := \iota(k)$; by totality either $n = 1$ or $n > 1$. If $n = 1$, take $r := 0$: the empty list is a list of primes and $\prod_{i<0} p_i = 1 = n$, so $P(k)$ holds. [step 1.1, L1, L7]

3.1 Suppose instead $n > 1$. Fix a prime $q$ with $q \mid n$ and an integer $m$ with $n = qm$. [step 2.3, L2, L10, choose]

4.1 $m > 0$: $m = 0$ would give $n = q \cdot 0 = 0 < 1$, and $m < 0$ would give $-m > 0$, hence $q(-m) > 0$, that is $-n > 0$ and $n < 0 < 1$; both contradict $n \ge 1$. So $m > 0$ and therefore $m \ge 1$ by step 1.2. [step 1.1, step 1.2, step 3.1, L7, L8]

5.1 $m < n$: since $q > 1$ we have $q - 1 > 0$, and $m > 0$, so $(q-1)m > 0$; and $(q-1)m = qm - m = n - m$, whence $n - m > 0$ and $m < n$. [step 3.1, step 4.1, L6, L7, L8]

6.1 As $m \ge 1 > 0$, write $m = \iota(j)$ with $j \in \mathbb{N}$. Then $j < k$: otherwise $k \le j$, and $\iota$ preserving the order would give $n = \iota(k) \le \iota(j) = m$, contradicting step 5.1. [step 4.1, step 5.1, L5, L7]

7.1 By step 1.3 applied to $j$ there are $s \in \mathbb{N}$ and a list $p : s \to \mathbb{Z}$ of primes with $m = \prod_{i<s} p_i$. [step 1.3, step 4.1, step 6.1]

8.1 Define $p' : \sigma(s) \to \mathbb{Z}$ by $p'_i := p_i$ for $i < s$ and $p'_s := q$; every value is prime, and $\prod_{i<\sigma(s)} p'_i = \bigl(\prod_{i<s} p'_i\bigr) \cdot p'_s = m q = q m = n$, the middle equality because the product over $i < s$ depends only on $p'_0,\dots,p'_{s-1}$, which agree with $p$. So $P(k)$ holds with $r := \sigma(s)$. [step 3.1, step 7.1, L1, L8, L9]

9.1 Steps 2.3 and 8.1 cover the two possibilities for $n$, so $P(k)$ follows from the truth of $P$ below $k$; with step 2.2 as the case $k = 0$, strong induction gives $P(k)$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3, step 8.1, L3]

10.1 Finally, any $n \ge 1$ satisfies $n > 0$, so $n = \iota(k)$ for some $k \in \mathbb{N}$, and $P(k)$ is clause 1 for that $n$; clause 2 is step 2.1. [step 1.1, step 2.1, step 9.1, L5, L7, discharge-induction] ∎

## Remarks

- **$1$ is a product of primes here, and this is not a dodge.** The empty product is the identity of the monoid by [[def-monoid-finite-product]], so $r = 0$ gives the value $1$ exactly. Excluding $n = 1$ and starting at $n \ge 2$ would force a special case into every later statement, including [[thm-fundamental-theorem-of-arithmetic]], whose uniqueness clause at $r = 0$ is precisely the assertion that only the empty list represents $1$.

- **Uniqueness is a separate theorem and is not proved here.** Existence needs only a least prime divisor and a descent; uniqueness needs Euclid's lemma. [[cex-hilbert-monoid-factorisation-not-unique]] on the companion page exhibits a setting where the existence half holds and the uniqueness half fails, which is what shows the two halves are genuinely independent.

- **The list is appended to, not prepended to.** The successor clause of [[def-monoid-finite-product]] multiplies on the right, so putting the new prime $q$ at position $s$ costs nothing, whereas putting it at position $0$ would need the splitting law of [[thm-generalised-associativity]]. Order is irrelevant to the value, by the commutative clause of that theorem, so nothing is lost.
