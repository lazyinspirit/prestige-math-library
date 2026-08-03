---
id: cex-calling-one-prime-destroys-uniqueness
kind: counterexample
title: "If $1$ were admitted as a prime, uniqueness would fail: $6 = 2 \\cdot 3 = 1 \\cdot 2 \\cdot 3 = 1 \\cdot 1 \\cdot 2 \\cdot 3$, lists of different lengths that no permutation matches"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime, thm-fundamental-theorem-of-arithmetic, thm-prime-factorisation-exists,
       def-symmetric-group, lem-pigeonhole, def-equinumerous,
       def-injection-surjection-bijection, def-monoid-finite-product,
       def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z, lem-divisor-bound,
       thm-division-algorithm-in-z, thm-int-comm-ring, thm-int-ordered-ring,
       def-int-operations, def-int-order, def-integers, def-natural-numbers,
       lem-nat-order-is-membership, lem-nat-embeds-int, lem-nat-discrete, def-nat-order]
justified_by: []
aliases: []
landmark: false
short: "admitting $1$ breaks uniqueness"
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
    - title: "Prime number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Prime_number"
    - title: "Janssen and Lindsey, Rings with Inquiry: Primes and Factorization"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/01%3A_The_Integers/1.03%3A_Primes_and_Factorization"
pipeline_run: null
---

## Statement refuted

**Refuted claim.** The clause $p > 1$ in [[def-prime]] is an arbitrary
convention: replacing it by $p \ge 1$ would leave
[[thm-fundamental-theorem-of-arithmetic]] true as stated.

Write **prime$^{*}$** for the modified notion — $p \ge 1$ and the only positive
divisors of $p$ are $1$ and $p$ — so that $1$ is prime$^{*}$ and every prime is
prime$^{*}$. The claim under refutation is that for lists of prime$^{*}$s,
$\prod_{i<r} p_i = \prod_{j<s} q_j$ still forces $r = s$ and $q_i = p_{\pi(i)}$
for some $\pi \in \operatorname{Sym}(r)$ ([[def-symmetric-group]],
[[def-monoid-finite-product]]).

**Witness.** The lists $(2,3)$, $(1,2,3)$ and $(1,1,2,3)$, of lengths $2$, $3$
and $4$, all consist of prime$^{*}$s and all have product $6$. So $r = s$ fails
already between the first two, and no permutation can exist because the index
sets have different sizes.

**Numerals.** For $k \in \mathbb{N}$ the symbol $k$ inside $\mathbb{Z}$ means
$\iota(k)$, the embedding of [[lem-nat-embeds-int]].

## Facts & Assumptions

**Given:** The integers $1$, $2$, $3$ and $6$, and the three lists above.

[L1] $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[L2] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(m)} g_i = \bigl(\prod_{i<m} g_i\bigr) g_m$, in the commutative monoid $(\mathbb{Z},\cdot,1)$ ([[def-monoid-finite-product]], [[lem-units-of-z]], [[def-semigroup-and-monoid]]).

[L3] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]); $d \mid a$ means $a = dc$ for some $c$ ([[def-divides-in-z]]).

[L4] If $d \mid a$ and $a \ne 0$ then $|d| \le |a|$ ([[lem-divisor-bound]]).

[L5] For $a \in \mathbb{Z}$ and $b > 0$ there is exactly one pair $(q,r)$ with $a = qb+r$ and $0 \le r < b$, and $b \mid a$ exactly when $r = 0$ ([[thm-division-algorithm-in-z]]).

[L6] If $n \approx m$ with $n, m \in \mathbb{N}$ then $n = m$; equivalently there is no bijection between two distinct natural numbers ([[lem-pigeonhole]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L7] A permutation of the von Neumann natural $r$ is a bijection $r \to r$ ([[def-symmetric-group]]); $n = \{\, m : m < n \,\}$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

[L8] $\mathbb{Z}$ is a commutative ring with $x \cdot 1 = x$; its order is total, antisymmetric and transitive ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]]); $\iota$ is injective and order preserving with image the nonnegative integers ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-nat-order]]).

[L9] Every $n \ge 1$ is a finite product of primes ([[thm-prime-factorisation-exists]]).

## Counterexample

**Proof technique:** direct.

1.1 $0 < 1 < 2 < 3$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 \le y$ since $\iota$ preserves the order. [L8]

1.2 All three products are $6$. By [L2], $\prod_{i<2}(2,3)_i = (1 \cdot 2) \cdot 3 = 6$; $\prod_{i<3}(1,2,3)_i = ((1 \cdot 1) \cdot 2) \cdot 3 = 6$; and $\prod_{i<4}(1,1,2,3)_i = (((1 \cdot 1) \cdot 1) \cdot 2) \cdot 3 = 6$. [L2, L8, algebra]

2.1 $1$ is prime$^{*}$: $1 \ge 1$, and a positive divisor $d$ of $1$ satisfies $d \mid 1$, hence $d = 1$ or $d = -1$ by [L3], and positivity leaves $d = 1$, which is $1$ itself. [step 1.1, L3, L8]

2.2 $2$ and $3$ are prime, hence prime$^{*}$. Each exceeds $1$; a positive divisor $d$ of such an $a$ satisfies $1 \le d \le a$ by [L4] and step 1.1, and the intermediate candidate for $a = 3$ is settled by $3 = 1 \cdot 2 + 1$, whose remainder is nonzero. For $a = 2$ there is no intermediate candidate. [step 1.1, L1, L4, L5, algebra]

3.1 The three lists consist of prime$^{*}$s, by steps 2.1 and 2.2, and their lengths are $2$, $3$ and $4$, which are pairwise distinct natural numbers. [step 2.1, step 2.2, L8]

4.1 So the uniqueness clause fails at its very first assertion: taking $p = (2,3)$ and $q = (1,2,3)$ gives $\prod_{i<2} p_i = \prod_{j<3} q_j$ with $2 \ne 3$, so "$r = s$" is false. [step 1.2, step 3.1]

5.1 Nor could the clause be rescued by dropping "$r = s$" and asking only for a bijection: a permutation in the sense of [L7] is a bijection between index sets, and by [L6] no bijection exists between the distinct naturals $2$ and $3$. [step 3.1, step 4.1, L6, L7]

6.1 Existence, by contrast, survives the change: $6 = 2 \cdot 3$ is still a factorisation into prime$^{*}$s, and every $n \ge 1$ still has one by [L9], since every prime is prime$^{*}$. So it is precisely the uniqueness half that forces the convention $p > 1$. [step 2.2, step 1.2, step 5.1, L9] ∎

## Remarks

- **The failure is not a technicality about lists.** Under the modified definition an integer would have infinitely many factorisations, one for each number of padding factors $1$, so no formulation of uniqueness survives: neither "the same length", nor "the same multiset of factors", nor "the same exponent vector", since $1$ would carry an arbitrary exponent.

- **Existence is what makes the convention a genuine choice rather than a necessity.** Both notions give factorisations of every $n \ge 1$, and the difference shows up only when one asks whether the factorisation is unique. That is exactly the asymmetry [[def-prime]] appeals to when it excludes $1$.

- **$0$ is excluded for a different reason.** It is not that $0$ would break uniqueness; it is that $0$ has every positive integer as a divisor, so it fails the divisor clause outright, and a product containing the factor $0$ is $0$ rather than the integer being factored.
