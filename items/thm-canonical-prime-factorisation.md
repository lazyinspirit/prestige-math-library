---
id: thm-canonical-prime-factorisation
kind: theorem
title: "For $n \\ge 1$ and any injective list $p : r \\to \\mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \\prod_{i<r} p_i^{\\,v_{p_i}(n)}$; the exponents are determined by $n$, and $v_q(n) = 0$ for every prime $q$ outside the list"
status: published
origin: session
deps: [thm-fundamental-theorem-of-arithmetic, thm-prime-factorisation-exists,
       lem-p-adic-valuation-additive, lem-p-adic-valuation-basic, def-p-adic-valuation,
       def-prime, lem-every-integer-above-one-has-a-prime-divisor, thm-euclids-lemma,
       def-semigroup-and-monoid, lem-units-of-z, def-monoid-finite-product,
       def-group-power, lem-group-power-laws, def-injection-surjection-bijection,
       thm-induction-principle, def-divides-in-z, lem-divisibility-basic,
       lem-nat-order-is-membership, lem-nat-discrete, lem-int-cancellation,
       def-nat-order, def-nat-addition, lem-nat-add-commutative, def-integers,
       def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring,
       def-natural-numbers, lem-nat-embeds-int]
justified_by: []
aliases: [thm-canonical-factorisation]
landmark: true
short: "$n = \\prod p_i^{v_{p_i}(n)}$"
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
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
pipeline_run: null
---

## Statement

Powers are the natural powers of [[def-group-power]] and finite products those of
[[def-monoid-finite-product]], both taken in the commutative monoid
$(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]]. Call $p : r \to \mathbb{Z}$ an
**injective list of primes** when every $p_i$ is prime ([[def-prime]]) and
$p_i = p_j$ forces $i = j$ ([[def-injection-surjection-bijection]]).

Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an
injective list of primes such that every prime divisor of $n$ equals $p_i$ for
some $i < r$. Then, with $v_q$ as in [[def-p-adic-valuation]]:

1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$;
2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$;
3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and
   $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$.

Clause 3 needs only injectivity of the list, not the covering hypothesis.

## Facts & Assumptions

**Given:** The commutative monoid $(\mathbb{Z},\cdot,1)$ ([[lem-units-of-z]], [[def-semigroup-and-monoid]]); and the property $Q(r)$: "for every $n \ge 1$ and every injective list $p : r \to \mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \prod_{i<r} p_i^{\,v_{p_i}(n)}$".

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(t)} g_i = \bigl(\prod_{i<t} g_i\bigr) g_t$; the value depends only on the entries named ([[def-monoid-finite-product]]).

[L2] $g^{0} = e$ and $g^{\sigma(k)} = g^{k} g$; and $g^{m+n} = g^{m} g^{n}$ for natural exponents in a monoid ([[def-group-power]], [[lem-group-power-laws]]).

[L3] For a prime $p$ and nonzero $a$: $p^{k} \ge 1$ for every $k$, so $p^{k} > 0$ and $p^{k} \ne 0$; $a = p^{v_p(a)} a'$ with $a' \ne 0$ and $p \nmid a'$; $p^{k} \mid a$ exactly for $k \le v_p(a)$; $v_p(a) \ge 1$ exactly when $p \mid a$; $v_p(1) = 0$; and $v_p(p) = 1$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L4] For a prime $p$ and nonzero $a, b$: $ab \ne 0$ and $v_p(ab) = v_p(a) + v_p(b)$ ([[lem-p-adic-valuation-additive]]).

[L5] Every integer $> 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]); every prime $u$ satisfies $u > 1$, and every positive divisor of a prime $w$ is $1$ or $w$ ([[def-prime]]).

[L6] Divisibility is reflexive and transitive; $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] On $\mathbb{N}$: $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k+1$ and addition is commutative ([[def-nat-addition]], [[lem-nat-add-commutative]], [[def-natural-numbers]]); $t < \sigma(t)$ and $i < \sigma(t)$ exactly when $i \le t$ ([[lem-nat-order-is-membership]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]).

[L9] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L10] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

[L11] Every integer $n \ge 1$ is a finite product of primes, and every finite product of primes is $\ge 1$ ([[thm-prime-factorisation-exists]]); such a factorisation is unique up to a permutation ([[thm-fundamental-theorem-of-arithmetic]]).

[L12] If $u$ is prime and $u \mid ab$ then $u \mid a$ or $u \mid b$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** induction.

1.1 Distinct primes do not divide one another: if $q$ and $w$ are primes with $q \mid w$, then $q$ is a positive divisor of $w$ (as $q > 1 > 0$) other than $1$, so $q = w$. Consequently $v_q(w) = 0$ whenever $q \ne w$ are primes. [L3, L5, L9]

1.2 $Q(0)$ holds: an empty list contains no prime, so $n$ has no prime divisor at all; if $n > 1$ it would have one, so $n = 1$, and $\prod_{i<0} p_i^{\,v_{p_i}(n)} = 1 = n$. [base, L1, L5, L9]

1.3 Let $t \in \mathbb{N}$ and assume $Q(t)$. [ih]

1.4 Let $n \ge 1$ and let $p : \sigma(t) \to \mathbb{Z}$ be an injective list of primes containing every prime divisor of $n$. Write $\pi := p_t$, $v := v_{\pi}(n)$, and fix $n'$ with $n = \pi^{v} n'$, $n' \ne 0$ and $\pi \nmid n'$. [L3, choose]

2.1 For a prime $w$ and $k \in \mathbb{N}$: $v_w(w^{k}) = k$, and $v_q(w^{k}) = 0$ for every prime $q \ne w$. Both sets of $k$ for which these hold contain $0$, since $w^{0} = 1$ and $v_u(1) = 0$ for every prime $u$; and if they hold at $k$ then, $w^{k}$ and $w$ being nonzero, additivity gives $v_w(w^{\sigma(k)}) = v_w(w^{k} w) = v_w(w^{k}) + v_w(w) = k + 1 = \sigma(k)$ and $v_q(w^{\sigma(k)}) = v_q(w^{k}) + v_q(w) = 0 + 0 = 0$. Induction finishes both. [step 1.1, L2, L3, L4, L7, L8]

2.2 $n' \ge 1$: $\pi^{v} \ge 1 > 0$ and $n > 0$, so $n' \le 0$ would make $\pi^{v} n' \le 0 < n$; hence $n' > 0$, and a positive integer is $\ge 1$ because $n' = \iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$. [step 1.4, L3, L8, L9]

3.1 Clause 3. Let $p : r \to \mathbb{Z}$ be an injective list of primes, $e : r \to \mathbb{N}$, and $M := \prod_{i<r} p_i^{\,e_i}$; we claim $M \ge 1$, that $v_{p_j}(M) = e_j$ for every $j < r$, and that $v_q(M) = 0$ for every prime $q$ off the list. Let $T$ be the set of $r \in \mathbb{N}$ for which this holds for all such $p$ and $e$. Then $0 \in T$: the empty product is $1$, which is $\ge 1$, has $v_q(1) = 0$ for every prime $q$, and imposes no condition on indices. Suppose $r \in T$ and let $p : \sigma(r) \to \mathbb{Z}$ be injective with primes and $e : \sigma(r) \to \mathbb{N}$. Writing $M' := \prod_{i<r} p_i^{\,e_i}$ we have $M = M' \cdot p_r^{\,e_r}$, with $M' \ge 1 > 0$ and $p_r^{\,e_r} \ge 1 > 0$, so $M \ge 1 > 0$ and both factors are nonzero; additivity then gives $v_u(M) = v_u(M') + v_u(p_r^{\,e_r})$ for every prime $u$. Taking $u = p_j$ with $j < r$ gives $e_j + 0 = e_j$, since $p_j \ne p_r$ by injectivity; taking $u = p_r$ gives $0 + e_r = e_r$, since $p_r$ is off the list $p_0,\dots,p_{r-1}$; and taking a prime $u$ off the whole list gives $0 + 0 = 0$. So $\sigma(r) \in T$, and $T = \mathbb{N}$ by induction. [step 2.1, L1, L3, L4, L7, L8, L9]

3.2 The restriction $p \restriction t$ is an injective list of primes containing every prime divisor of $n'$. Indeed if $q$ is prime with $q \mid n'$ then $q \mid n$, since $n = \pi^{v} n'$; so $q = p_i$ for some $i < \sigma(t)$; and $q \ne \pi = p_t$, because $\pi \nmid n'$; hence $i \ne t$, and $i < \sigma(t)$ gives $i \le t$, so $i < t$. [step 1.4, step 2.2, L5, L6, L8]

3.3 For $i < t$ we have $v_{p_i}(n) = v_{p_i}(\pi^{v}) + v_{p_i}(n') = 0 + v_{p_i}(n') = v_{p_i}(n')$, using additivity on the nonzero factors $\pi^{v}$ and $n'$, and step 2.1 with $p_i \ne \pi$, which holds by injectivity since $i < t$. [step 2.1, step 1.4, step 2.2, L3, L4, L8]

4.1 By step 1.3 applied to $n'$ and $p \restriction t$: $n' = \prod_{i<t} p_i^{\,v_{p_i}(n')}$. [step 1.3, step 2.2, step 3.2]

5.1 Therefore $\prod_{i<\sigma(t)} p_i^{\,v_{p_i}(n)} = \bigl(\prod_{i<t} p_i^{\,v_{p_i}(n)}\bigr) \cdot \pi^{\,v_{\pi}(n)} = \bigl(\prod_{i<t} p_i^{\,v_{p_i}(n')}\bigr) \cdot \pi^{v} = n' \pi^{v} = n$, so $Q(\sigma(t))$ holds. [step 1.4, step 4.1, step 3.3, L1, L9]

6.1 With step 1.2 as base, induction gives $Q(r)$ for every $r \in \mathbb{N}$, which is clause 1. Clause 2 follows because a prime $q$ off the list does not divide $n$ — otherwise it would be a prime divisor of $n$ and hence on the list — so $v_q(n) = 0$; and clause 3 is step 3.1. [step 3.1, step 1.2, step 5.1, L3, L7, discharge-induction] ∎

## Remarks

- **This is [[thm-fundamental-theorem-of-arithmetic]] read by exponents rather than by lists**, not a further theorem. A list of primes with repetitions becomes an injective list with multiplicities, and the multiplicity of $p_i$ is exactly $v_{p_i}(n)$; uniqueness up to a permutation becomes clause 3, that the exponent vector is determined.

- **There is deliberately no product over all primes.** The familiar notation $\prod_p p^{v_p(n)}$ abbreviates a product with finitely many factors different from $1$, and an indexed product with finite support is not available at this point in the library — [[def-monoid-finite-product]] multiplies a finite list. The honest form quantifies over a finite injective list covering the prime divisors of $n$ and adds clause 2, which says every prime off the list contributes exponent $0$. Nothing is lost: any two such lists agree on the exponents by clause 3.

- **Why injectivity is a hypothesis.** Without it clause 3 fails outright: with $r = 2$, $p_0 = p_1 = 2$ and $(e_0,e_1) = (1,1)$ or $(2,0)$, both products are $4$, so the exponent vector is not determined. Injectivity is what makes $v_{p_j}$ read off one multiplicity rather than a sum of several.
