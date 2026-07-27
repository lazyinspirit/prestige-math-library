---
id: lem-divisibility-via-valuations
kind: lemma
title: "For positive integers $a$ and $b$: $a \\mid b$ if and only if $v_p(a) \\le v_p(b)$ for every prime $p$"
status: draft
origin: session
deps: [lem-p-adic-valuation-additive, lem-p-adic-valuation-basic, def-p-adic-valuation,
       lem-every-integer-above-one-has-a-prime-divisor, def-prime, thm-strong-induction,
       def-divides-in-z, lem-divisibility-basic, lem-int-cancellation,
       lem-nat-order-add-compatible, lem-nat-discrete, def-nat-order, def-nat-addition,
       def-natural-numbers, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "$a \\mid b$ iff $v_p(a) \\le v_p(b)$ for all $p$"
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
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$ with $a \ge 1$ and $b \ge 1$, and let $v_p$ be the
$p$-adic valuation of [[def-p-adic-valuation]]. Then

$$a \mid b \qquad \Longleftrightarrow \qquad v_p(a) \le v_p(b) \ \text{ for every prime } p .$$

Both valuations are defined, since $a$ and $b$ are nonzero.

## Facts & Assumptions

**Given:** The property $R(k)$: "for every $b \ge 1$, if $\iota(k) \ge 1$ and $v_p(\iota(k)) \le v_p(b)$ for every prime $p$, then $\iota(k) \mid b$", where $\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]].

[L1] For a prime $p$ and nonzero $u, v$: $uv \ne 0$ and $v_p(uv) = v_p(u) + v_p(v)$ ([[lem-p-adic-valuation-additive]]).

[L2] For a prime $p$ and nonzero $u$: $v_p(u) \ge 1$ exactly when $p \mid u$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L3] Every integer $> 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]); every prime satisfies $q > 1$ ([[def-prime]]).

[L4] Strong induction on $\mathbb{N}$ ([[thm-strong-induction]]).

[L5] $d \mid u$ means $u = dc$ for some $c$; divisibility is reflexive and transitive, and $d \mid u$ implies $d \mid uc$ ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L6] A product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

[L7] On $\mathbb{N}$: $m \le n$ means $m + c = n$ for some $c$, so $m \le m + n$ always ([[def-nat-order]], [[def-nat-addition]]); $m + x \le m + y$ holds exactly when $x \le y$ ([[lem-nat-order-add-compatible]]); $m < n$ exactly when $\sigma(m) \le n$, and $1 = \sigma(0)$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L8] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]]).

[L9] $\iota$ is injective, preserves addition, multiplication and order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** induction.

1.1 $0 < 1$, since $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$; and every integer $x > 0$ satisfies $x \ge 1$, because $x = \iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$ and $\iota$ preserves the order. [L7, L9]

1.2 The forward implication. Suppose $a \mid b$ and fix $c$ with $b = ac$. Then $c \ne 0$, since $b \ne 0$, so [L1] gives $v_p(b) = v_p(a) + v_p(c) \ge v_p(a)$ for every prime $p$. [L1, L5, L7, L8]

1.3 Let $k \in \mathbb{N}$ and assume $R(j)$ for every $j < k$. [ih]

2.1 $R(0)$ holds vacuously: $\iota(0) = 0$ and $0 \ge 1$ is false. [base, step 1.1, L9]

2.2 Put $a := \iota(k)$ and suppose $a \ge 1$, and let $b \ge 1$ satisfy $v_p(a) \le v_p(b)$ for every prime $p$. If $a = 1$ then $a \mid b$, so assume $a > 1$. [step 1.1, L5, L8]

3.1 Fix a prime $q$ with $q \mid a$, and fix $a_1$ with $a = q a_1$. Then $v_q(a) \ge 1$, hence $v_q(b) \ge 1$ by hypothesis, so $q \mid b$; fix $b_1$ with $b = q b_1$. [step 2.2, L2, L3, L5, choose]

4.1 $a_1 \ge 1$ and $b_1 \ge 1$: they are nonzero because $a$ and $b$ are, and if $a_1 < 0$ then $q a_1 < 0$ contradicting $a > 0$, so $a_1 > 0$ and hence $a_1 \ge 1$; the same argument applies to $b_1$. [step 1.1, step 3.1, L6, L8]

5.1 $a_1 < a$: since $q > 1$ we have $q - 1 > 0$, and $a_1 > 0$, so $a - a_1 = (q-1)a_1 > 0$. [step 3.1, step 4.1, L3, L8]

5.2 For every prime $p$: $v_p(q) + v_p(a_1) = v_p(a) \le v_p(b) = v_p(q) + v_p(b_1)$, so $v_p(a_1) \le v_p(b_1)$ by cancellation of $v_p(q)$ in the order of $\mathbb{N}$. [step 2.2, step 3.1, step 4.1, L1, L7]

6.1 Write $a_1 = \iota(j)$; then $j < k$, since otherwise $k \le j$ and the order-preserving $\iota$ would give $a \le a_1$, contradicting step 5.1. By step 1.3 applied to $j$, together with steps 4.1 and 5.2, $a_1 \mid b_1$. [step 1.3, step 4.1, step 5.1, step 5.2, L9]

7.1 Hence $b = q b_1 = q(a_1 c) = (q a_1) c = a c$ for the $c$ with $b_1 = a_1 c$, so $a \mid b$ and $R(k)$ holds. [step 3.1, step 6.1, L5, L8]

8.1 Steps 2.2 and 7.1 cover both possibilities for $a$, so $R$ at $k$ follows from $R$ below $k$; with step 2.1, strong induction gives $R(k)$ for every $k$. Since a positive integer $a$ is $\iota(k)$ for a unique $k$, that is the reverse implication, and step 1.2 is the forward one. [step 1.2, step 2.1, step 2.2, step 7.1, L4, L9, discharge-induction] ∎

## Remarks

- **No canonical factorisation is needed.** The reverse implication is often proved by writing both integers over a common list of primes and comparing exponents; the descent used here peels off one prime divisor at a time and needs only additivity of $v_p$ ([[lem-p-adic-valuation-additive]]) and the existence of a prime divisor. The factorisation route is available too, via [[thm-canonical-prime-factorisation]], and gives the same statement.

- **Positivity is a real hypothesis, and only mildly so.** $v_p$ is undefined at $0$, so the pair must avoid it; signs are harmless, since $a \mid b$ is unchanged by replacing either argument by its negative ([[lem-divisibility-basic]]) and $v_p(-u) = v_p(u)$ for the same reason. The statement is therefore about $|a|$ and $|b|$ in substance.

- **The valuation criterion is the shape the $\gcd$ and $\operatorname{lcm}$ formulas need**, and [[thm-gcd-and-lcm-from-valuations]] uses exactly this lemma to check the characterisation of $\gcd$ proved on the divisibility page.
