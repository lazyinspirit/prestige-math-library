---
id: thm-euclid-infinitude-of-primes
kind: theorem
title: "Euclid's theorem: for every $n \\in \\mathbb{N}$ and every list $p : n \\to \\mathbb{Z}$ of primes there is a prime not among $p_0, \\dots, p_{n-1}$; consequently the set of primes is not finite"
status: draft
origin: session
deps: [def-prime, lem-every-integer-above-one-has-a-prime-divisor,
       thm-prime-factorisation-exists, def-semigroup-and-monoid, lem-units-of-z,
       def-monoid-finite-product, thm-generalised-associativity, def-equinumerous,
       def-countable, def-injection-surjection-bijection, def-divides-in-z,
       lem-divisibility-basic, lem-nat-order-is-membership, lem-nat-discrete,
       def-nat-order, def-nat-addition, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
forward_refs: [fs-euclids-product-of-primes-plus-one-is-prime, ex-arbitrarily-long-runs-of-composites]
aliases: [thm-infinitude-of-primes]
landmark: true
short: "there are infinitely many primes"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclid's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_theorem"
pipeline_run: null
---

## Statement

Write $P := \{\, x \in \mathbb{Z} : x \text{ is prime} \,\}$ ([[def-prime]]), and
take finite products in the commutative monoid $(\mathbb{Z},\cdot,1)$ of
[[lem-units-of-z]] as in [[def-monoid-finite-product]].

1. For every $n \in \mathbb{N}$ and every list $p : n \to \mathbb{Z}$ of primes
   there is a prime $q$ with $q \ne p_i$ for every $i < n$.
2. Consequently $P$ is **not finite**: there is no $m \in \mathbb{N}$ with
   $P \approx m$ ([[def-countable]], [[def-equinumerous]]).

Clause 1 holds at $n = 0$ as well, where the empty product is $1$ and the witness
produced by the proof is a prime divisor of $2$.

## Facts & Assumptions

**Given:** The set $P$ of primes.

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(n)} g_i = \bigl(\prod_{i<n} g_i\bigr) \cdot g_n$; the value depends only on $g_0,\dots,g_{n-1}$ ([[def-monoid-finite-product]], [[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L2] Splitting law: $\prod_{i<m+k} g_i = \bigl(\prod_{i<m} g_i\bigr) \cdot \bigl(\prod_{l<k} g_{m+l}\bigr)$ for all $m, k \in \mathbb{N}$ ([[thm-generalised-associativity]]).

[L3] Every finite product of primes is $\ge 1$ ([[thm-prime-factorisation-exists]]).

[L4] Every integer $> 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L5] Every prime satisfies $u > 1$ ([[def-prime]]).

[L6] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L7] Divisibility is reflexive and transitive, and is linear: $d \mid a$ and $d \mid b$ give $d \mid ax + by$, in particular $d \mid a - b$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L8] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, and every $x$ has an additive inverse ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L9] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]); $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image the nonnegative integers, with $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[L10] On $\mathbb{N}$: $j < n$ exactly when $\sigma(j) \le n$ ([[lem-nat-discrete]]); $a \le b$ means $a + c = b$ for some $c \in \mathbb{N}$ ([[def-nat-order]], [[def-nat-addition]]); and $n = \{\, m : m < n \,\}$ with $j < \sigma(j)$ ([[lem-nat-order-is-membership]]).

[L11] A function is injective when it identifies no two points, surjective when its image is the whole codomain, and bijective when it is both ([[def-injection-surjection-bijection]]); $A \approx B$ means a bijection $A \to B$ exists, and $A$ is finite when $A \approx m$ for some $m \in \mathbb{N}$ ([[def-equinumerous]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 $0 < 1$ in $\mathbb{Z}$, since $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by injectivity of $\iota$; adding $1$ gives $1 < 1 + 1$. [L9]

1.2 Fix $n \in \mathbb{N}$ and a list $p : n \to \mathbb{Z}$ of primes, and put $\Pi := \prod_{i<n} p_i$ and $N := \Pi + 1$. [L1, choose]

1.3 Suppose, for contradiction, that $P$ is finite: fix $m \in \mathbb{N}$ and a bijection $g : P \to m$. [assume-contra, L11, choose]

2.1 $\Pi \ge 1$ by [L3], so $N = \Pi + 1 \ge 1 + 1 > 1$ by compatibility of the order with addition. [step 1.1, step 1.2, L3, L9]

2.2 Suppose, for contradiction, that $q = p_j$ for some $j < n$. Since $j < n$ we have $\sigma(j) \le n$, so $n = \sigma(j) + c$ for some $c \in \mathbb{N}$. [assume-contra, step 1.2, L10]

2.3 Define $f : m \to \mathbb{Z}$ by letting $f(i)$ be the unique $x \in P$ with $g(x) = i$; such an $x$ exists because $g$ is surjective and is unique because $g$ is injective. Then $f$ is a list of primes of length $m$, and $f(g(x)) = x$ for every $x \in P$. [step 1.3, L11, construct]

3.1 By [L4] there is a prime $q$ with $q \mid N$. [step 2.1, L4, choose]

3.2 The splitting law then gives $\Pi = \bigl(\prod_{i<\sigma(j)} p_i\bigr) \cdot \bigl(\prod_{l<c} p_{\sigma(j)+l}\bigr)$, and $\prod_{i<\sigma(j)} p_i = \bigl(\prod_{i<j} p_i\bigr) p_j$; by associativity and commutativity $\Pi = p_j \cdot B$ where $B := \bigl(\prod_{i<j} p_i\bigr)\bigl(\prod_{l<c} p_{\sigma(j)+l}\bigr)$. Hence $p_j \mid \Pi$, that is $q \mid \Pi$. [step 2.2, L1, L2, L7, L8]

4.1 So $q \mid N$ and $q \mid \Pi$, whence $q \mid N - \Pi = 1$ by linearity, forcing $q = 1$ or $q = -1$ and contradicting $q > 1 > 0 > -1$. Therefore $q \ne p_i$ for every $i < n$, which is clause 1. [step 1.1, step 1.2, step 3.1, step 3.2, L5, L6, L7, L8, L9]

5.1 Clause 1 applied to $f$ supplies a prime $q_0$ with $q_0 \ne f(i)$ for every $i < m$. But $q_0 \in P$, so $g(q_0) < m$ and $f(g(q_0)) = q_0$, a contradiction. Hence no such $m$ and $g$ exist and $P$ is not finite, which is clause 2. [step 4.1, step 1.3, step 2.3, L10, L11, discharge-contradiction] ∎

## Remarks

- **The theorem does not say $N$ is prime**, and reading it that way is a common slip. What is proved is that $N = p_0 \cdots p_{n-1} + 1$ has *a prime divisor*, and that this divisor is not on the list. The false reading is refuted on the companion page by [[fs-euclids-product-of-primes-plus-one-is-prime]], where $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \cdot 509$.

- **Clause 1 is the constructive statement and clause 2 is a consequence of it.** Clause 1 says nothing about infinite sets and needs no notion of cardinality; it just extends any finite list. Clause 2 turns that into "not finite" in the sense of [[def-countable]], and the only input it needs is that a bijection $P \to m$ produces a list enumerating every prime.

- **This is not a statement about where the primes are.** Arbitrarily long runs of composite integers exist ([[ex-arbitrarily-long-runs-of-composites]]), so the gaps between consecutive primes are unbounded; the two facts are compatible and neither weakens the other.
