---
id: cor-euclids-lemma-for-finite-products
kind: corollary
title: "If a prime $p$ divides a finite product $\\prod_{i<n} a_i$ of integers then $p \\mid a_i$ for some $i < n$; at $n = 0$ the product is $1$ and the hypothesis cannot hold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclids-lemma, def-prime, def-semigroup-and-monoid, lem-units-of-z,
       def-monoid-finite-product, thm-induction-principle, lem-nat-order-is-membership,
       def-divides-in-z, lem-divisibility-basic, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers,
       lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "$p \\mid \\prod a_i \\Rightarrow p \\mid a_i$ for some $i$"
proof_strategy: induction
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
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
    - title: "Number Theory: In Context — Fundamental Theorem of Arithmetic"
      url: "https://math-cs.gordon.edu/ntic/ntic2020/section-fta.html"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]), let $n \in \mathbb{N}$, and let
$a : \mathbb{N} \to \mathbb{Z}$, with the finite product $\prod_{i<n} a_i$ taken
in the commutative monoid $(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]] as in
[[def-monoid-finite-product]]. If

$$p \;\Big|\; \prod_{i<n} a_i ,$$

then $p \mid a_i$ for some $i < n$.

At $n = 0$ the product is the empty product $1$, and $p \mid 1$ is impossible for
a prime, so the hypothesis is never satisfied there and the assertion is true
rather than excluded. Since $\prod_{i<n} a_i$ depends only on $a_0, \dots,
a_{n-1}$ ([[def-monoid-finite-product]]), the statement applies verbatim to a
finite list $a : n \to \mathbb{Z}$.

## Facts & Assumptions

**Given:** A prime $p$; the property $P(n)$: "for every family $a : \mathbb{N} \to \mathbb{Z}$, if $p \mid \prod_{i<n} a_i$ then $p \mid a_i$ for some $i < n$".

[L1] $(\mathbb{Z},\cdot,1)$ is a commutative monoid, and $u \mid 1$ holds exactly for $u = 1$ and $u = -1$ ([[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L2] In a monoid, $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(n)} g_i = \bigl(\prod_{i<n} g_i\bigr) \cdot g_n$; the value depends only on $g_0, \dots, g_{n-1}$ ([[def-monoid-finite-product]]).

[L3] If $q$ is prime and $q \mid uv$ then $q \mid u$ or $q \mid v$ ([[thm-euclids-lemma]]).

[L4] $p > 1$ ([[def-prime]]).

[L5] Induction: a property holding at $0$ and inherited by successors holds at every natural number ([[thm-induction-principle]]).

[L6] On $\mathbb{N}$: $n < \sigma(n)$, and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]); $\mathbb{Z}$ is a commutative ring ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$; and $0 \ne 1$ in $\mathbb{N}$ ([[lem-nat-embeds-int]]).

[L9] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

## Proof

**Proof technique:** induction.

1.1 $0 < 1$, since $1 = \iota(1)$ is nonnegative and $1 \ne 0$ by injectivity of $\iota$; adding $-1$ gives $-1 < 0$. Hence $-1 < 0 < 1 < p$, so $p \ne 1$ and $p \ne -1$. [L4, L7, L8]

1.2 Let $n \in \mathbb{N}$ and assume $P(n)$. [ih]

1.3 Let $a : \mathbb{N} \to \mathbb{Z}$ and suppose $p \mid \prod_{i<\sigma(n)} a_i$. By the recursion clause this product equals $\bigl(\prod_{i<n} a_i\bigr) \cdot a_n$, so [L3] gives $p \mid \prod_{i<n} a_i$ or $p \mid a_n$. [L1, L2, L3, L9]

2.1 $P(0)$ holds: $\prod_{i<0} a_i = 1$ for every family $a$, and $p \mid 1$ would force $p = 1$ or $p = -1$, which step 1.1 excludes. So the hypothesis of $P(0)$ is never satisfied and $P(0)$ is true vacuously. [base, step 1.1, L1, L2]

2.2 In the first case step 1.2 supplies $i < n$ with $p \mid a_i$, and $i < n < \sigma(n)$ gives $i < \sigma(n)$; in the second case $i := n$ works, since $n < \sigma(n)$. Either way some $i < \sigma(n)$ has $p \mid a_i$, so $P(\sigma(n))$ holds. [step 1.2, step 1.3, L6]

3.1 $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n$, so $P(n)$ holds for every $n \in \mathbb{N}$. [step 2.1, step 2.2, L5, discharge-induction] ∎

## Remarks

- **The case $n = 0$ is real and is not an exception.** The empty product is $1$ by [[def-monoid-finite-product]], and a prime never divides $1$, so the implication holds with a false hypothesis. Stating the corollary from $n = 1$ upwards would be a weaker theorem for no gain, and would have to be repaired at every use.

- **No commutativity is used.** The proof consumes only the recursion clause $\prod_{i<\sigma(n)} a_i = \bigl(\prod_{i<n} a_i\bigr) a_n$ and Euclid's lemma; the monoid is named commutative only because $(\mathbb{Z},\cdot,1)$ is, and because later items on this page do use commutativity.

- **A prime dividing a product of primes equals one of them.** If every $a_i$ is prime and $p \mid \prod_{i<n} a_i$, then $p \mid a_k$ for some $k$, and then $p$ is a positive divisor of the prime $a_k$ other than $1$, so $p = a_k$ by [[def-prime]]. That one-line consequence is the engine of the uniqueness half of [[thm-fundamental-theorem-of-arithmetic]].
