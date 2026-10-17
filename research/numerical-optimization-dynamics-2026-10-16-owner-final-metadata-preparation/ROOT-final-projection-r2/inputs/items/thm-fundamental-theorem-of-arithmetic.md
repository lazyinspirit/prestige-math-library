---
id: thm-fundamental-theorem-of-arithmetic
kind: theorem
title: "The fundamental theorem of arithmetic: every integer $n \\ge 1$ is a product of primes, and the factorisation is unique up to order — if $\\prod_{i<r} p_i = \\prod_{j<s} q_j$ with every $p_i$ and $q_j$ prime, then $r = s$ and $q_i = p_{\\pi(i)}$ for some $\\pi \\in \\operatorname{Sym}(r)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-prime-factorisation-exists, cor-euclids-lemma-for-finite-products,
       thm-euclids-lemma, def-prime, def-symmetric-group, lem-symmetric-group-is-a-group,
       def-injection-surjection-bijection, def-semigroup-and-monoid, lem-units-of-z,
       def-monoid-finite-product, thm-generalised-associativity, thm-induction-principle,
       lem-nat-order-is-membership, lem-nat-nonzero-is-successor, def-divides-in-z,
       lem-divisibility-basic, lem-int-cancellation, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers,
       lem-nat-embeds-int]
justified_by: []
forward_refs: [cex-hilbert-monoid-factorisation-not-unique]
aliases: [thm-fta, thm-unique-factorisation]
landmark: true
short: "unique factorisation in $\\mathbb{Z}$"
proof_strategy: induction
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
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "Inquiry into Advanced Algebra: Division, primes, and factorisation"
      url: "https://web.math.utk.edu/~dcartwr1/iaawa/section-division-algorithm.html"
pipeline_run: null
---

## Statement

Finite products are taken in the commutative monoid $(\mathbb{Z},\cdot,1)$ of
[[lem-units-of-z]] as in [[def-monoid-finite-product]], and a **list of primes
of length $r$** is a function $p : r \to \mathbb{Z}$ on the von Neumann natural
$r = \{0,\dots,r-1\}$ with every $p_i$ prime ([[def-prime]]).

1. **Existence.** Every $n \in \mathbb{Z}$ with $n \ge 1$ is $\prod_{i<r} p_i$
   for some $r \in \mathbb{N}$ and some list $p$ of primes of length $r$
   ([[thm-prime-factorisation-exists]]).
2. **Uniqueness up to order.** Let $p$ and $q$ be lists of primes, of lengths
   $r$ and $s$. If

   $$\prod_{i<r} p_i \;=\; \prod_{j<s} q_j ,$$

   then $r = s$, and there is a permutation $\pi \in \operatorname{Sym}(r)$
   ([[def-symmetric-group]]) with

   $$q_i \;=\; p_{\pi(i)} \qquad \text{for every } i < r .$$

At $r = 0$ clause 2 says that the only list of primes whose product is $1$ is the
empty list, and the permutation condition is vacuous.

## Facts & Assumptions

**Given:** The commutative monoid $(\mathbb{Z},\cdot,1)$ ([[lem-units-of-z]], [[def-semigroup-and-monoid]]); and the property $U(r)$: "for every $s \in \mathbb{N}$ and all lists $p$, $q$ of primes of lengths $r$ and $s$ with $\prod_{i<r} p_i = \prod_{j<s} q_j$, one has $r = s$ and $q_i = p_{\pi(i)}$ for all $i < r$, for some $\pi \in \operatorname{Sym}(r)$".

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(r)} g_i = \bigl(\prod_{i<r} g_i\bigr) \cdot g_r$; the value depends only on $g_0,\dots,g_{r-1}$ ([[def-monoid-finite-product]]).

[L2] Commutative case of generalised associativity: for a commutative monoid, $n \in \mathbb{N}$, $\pi \in \operatorname{Sym}(n)$ and $h$ with $h_i = g_{\pi(i)}$ for $i < n$, one has $\prod_{i<n} h_i = \prod_{i<n} g_i$ ([[thm-generalised-associativity]]).

[L3] If a prime $u$ divides $\prod_{j<s} q_j$ then $u \mid q_k$ for some $k < s$ ([[cor-euclids-lemma-for-finite-products]], [[thm-euclids-lemma]]).

[L4] Every prime $u$ satisfies $u > 1$, and every positive divisor of a prime $w$ is $1$ or $w$ ([[def-prime]]).

[L5] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]); $d \mid v$ means $v = dc$ for some $c$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L6] If $xz = yz$ and $z \ne 0$ then $x = y$ ([[lem-int-cancellation]]).

[L7] $\operatorname{Sym}(X)$ is the set of bijections $X \to X$ under composition, with identity $\mathrm{id}_X$; it is closed under composition, and for $a \ne b$ in $X$ the transposition $(a\,b)$ is a permutation of $X$ with $(a\,b) \circ (a\,b) = \mathrm{id}_X$ ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]], [[def-injection-surjection-bijection]]).

[L8] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L9] On $\mathbb{N}$: $n = \{\, m : m < n \,\}$, $\sigma(n) = n \cup \{n\}$, $n < \sigma(n)$, $m < \sigma(n)$ exactly when $m \le n$, and $n \notin n$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

[L10] Every natural number other than $0$ is a successor ([[lem-nat-nonzero-is-successor]]).

[L11] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $\mathbb{Z}$ is a commutative ring ([[thm-int-ordered-ring]], [[def-int-order]], [[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L12] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image the nonnegative integers, with $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** induction.

1.1 $0 < 1$: $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ by injectivity of $\iota$. Hence every prime $u$ satisfies $u > 1 > 0$, so $u \ne 0$, $u \ne 1$ and, adding $-1$ to $0 < 1$, also $u \ne -1$. [L4, L11, L12]

1.2 If $q$ is a list of primes of length $s \ne 0$ then $q_t \mid \prod_{j<s} q_j$, where $s = \sigma(t)$: indeed the product equals $\bigl(\prod_{j<t} q_j\bigr) q_t$. [L1, L5, L10]

1.3 Let $r \in \mathbb{N}$ and assume $U(r)$. [ih]

1.4 Let $p$ be a list of primes of length $\sigma(r)$ and $q$ one of length $s$, with $N := \prod_{i<\sigma(r)} p_i = \prod_{j<s} q_j$. Then $N = \bigl(\prod_{i<r} p_i\bigr) p_r$, so $p_r \mid N$. [L1, L5]

2.1 A prime never divides $1$: $u \mid 1$ would force $u = 1$ or $u = -1$, both excluded by step 1.1. [step 1.1, L5]

2.2 By [L3] there is $k < s$ with $p_r \mid q_k$. Since $p_r > 1 > 0$, $p_r$ is a positive divisor of the prime $q_k$ other than $1$, so $p_r = q_k$. [step 1.1, step 1.4, L3, L4]

3.1 $U(0)$ holds. Let $q$ be a list of primes of length $s$ with $\prod_{i<0} p_i = \prod_{j<s} q_j$, so $\prod_{j<s} q_j = 1$. If $s \ne 0$, then $s = \sigma(t)$ and step 1.2 gives $q_t \mid 1$, contradicting step 2.1; so $s = 0$. Then $r = s = 0$, $\mathrm{id}_{\varnothing} \in \operatorname{Sym}(0)$ since $0 = \varnothing$, and the condition "$q_i = p_{\pi(i)}$ for all $i < 0$" is vacuous. [base, step 2.1, step 1.2, L1, L7, L9]

3.2 $s \ne 0$: otherwise $N = 1$ and $p_r \mid 1$, contradicting step 2.1. Write $s = \sigma(t)$. [step 2.1, step 1.4, L1, L10]

4.1 Define $\tau \in \operatorname{Sym}(s)$ by $\tau := \mathrm{id}_s$ if $k = t$ and $\tau := (k\,t)$ otherwise; in both cases $\tau$ is a permutation of $s$ with $\tau \circ \tau = \mathrm{id}_s$ and $\tau(t) = k$. Note $t < s$ and $k < s$, so both lie in $s$. [step 3.2, step 2.2, L7, L9, construct]

5.1 Put $q'_j := q_{\tau(j)}$ for $j < s$; every $q'_j$ is prime, and $\prod_{j<s} q'_j = \prod_{j<s} q_j = N$ by the commutative clause [L2], the monoid $(\mathbb{Z},\cdot,1)$ being commutative. [step 4.1, L2]

6.1 Also $q'_t = q_{\tau(t)} = q_k = p_r$, so $N = \prod_{j<\sigma(t)} q'_j = \bigl(\prod_{j<t} q'_j\bigr) q'_t = \bigl(\prod_{j<t} q'_j\bigr) p_r$. [step 2.2, step 4.1, step 5.1, L1]

7.1 Comparing with step 1.4, $\bigl(\prod_{i<r} p_i\bigr) p_r = \bigl(\prod_{j<t} q'_j\bigr) p_r$, and $p_r \ne 0$ by step 1.1, so cancellation gives $\prod_{i<r} p_i = \prod_{j<t} q'_j$. [step 1.1, step 1.4, step 6.1, L6]

8.1 The restrictions of $p$ to $r$ and of $q'$ to $t$ are lists of primes of lengths $r$ and $t$, and their products are the two sides of step 7.1, since a finite product depends only on the entries it names. So $U(r)$ applies: $r = t$, hence $s = \sigma(t) = \sigma(r)$, and there is $\rho \in \operatorname{Sym}(r)$ with $q'_i = p_{\rho(i)}$ for every $i < r$. [step 1.3, step 7.1, L1]

9.1 Define $\hat\rho : \sigma(r) \to \sigma(r)$ by $\hat\rho(i) := \rho(i)$ for $i < r$ and $\hat\rho(r) := r$. Since $\sigma(r) = r \cup \{r\}$ with $r \notin r$, and $\rho$ is a bijection of $r$, the map $\hat\rho$ is a bijection of $\sigma(r)$, that is $\hat\rho \in \operatorname{Sym}(\sigma(r))$. [step 8.1, L7, L9, construct]

10.1 Put $\pi := \hat\rho \circ \tau$, a permutation of $s = \sigma(r)$ because $\operatorname{Sym}(\sigma(r))$ is closed under composition. [step 4.1, step 8.1, step 9.1, L7]

11.1 For $i < \sigma(r)$ we get $q_i = q_{\tau(\tau(i))} = q'_{\tau(i)}$. If $\tau(i) < r$ then $q'_{\tau(i)} = p_{\rho(\tau(i))} = p_{\hat\rho(\tau(i))} = p_{\pi(i)}$; and if $\tau(i) = r = t$ then $q'_{\tau(i)} = q'_t = p_r = p_{\hat\rho(r)} = p_{\pi(i)}$. Since $\tau(i) < \sigma(r)$ these two possibilities are exhaustive, so $q_i = p_{\pi(i)}$ throughout. [step 4.1, step 6.1, step 8.1, step 9.1, step 10.1, L9]

12.1 Steps 8.1 and 11.1 give $s = \sigma(r)$ and a permutation $\pi \in \operatorname{Sym}(\sigma(r))$ with $q_i = p_{\pi(i)}$ for all $i < \sigma(r)$, so $U(\sigma(r))$ holds; with step 3.1 as base, induction gives $U(r)$ for every $r \in \mathbb{N}$, which is clause 2. Clause 1 is [[thm-prime-factorisation-exists]]. [step 3.1, step 8.1, step 11.1, L8, discharge-induction] ∎

## Remarks

- **"Unique up to order" is spelt out, not gestured at.** [[def-symmetric-group]] is available at this point in the library, so the uniqueness clause names a permutation $\pi$ of the von Neumann natural $r$ and asserts an equality for every index, rather than saying the two factorisations "agree up to rearrangement". The letter $\pi$ is used because $\sigma$ is already the successor function on $\mathbb{N}$ throughout this library.

- **The theorem is stated for $n \ge 1$.** It is not stated for $n \ge 2$, which would exclude the empty product and gain nothing, and it is not stated for all nonzero $n$, which is false as it stands because a negative integer is not a product of primes. The signed form is [[cor-factorisation-of-a-nonzero-integer]], where the sign is carried by a unit.

- **Where each hypothesis is used.** Primality of $p_r$ lets [[cor-euclids-lemma-for-finite-products]] supply the index $k$, and also makes $p_r$ a nonzero factor different from $1$. Primality of the selected $q_k$ is then used separately in step 2.2: the positive divisor $p_r\mid q_k$, being different from $1$, must equal $q_k$. Drop Euclid's lemma and the argument collapses before that comparison — [[cex-hilbert-monoid-factorisation-not-unique]] is the witness.

- **Reading the theorem by exponents.** Collecting equal primes turns clause 2 into [[thm-canonical-prime-factorisation]], which records the multiplicity of each prime as its $p$-adic valuation. That is the same theorem in different notation, not a further result.
