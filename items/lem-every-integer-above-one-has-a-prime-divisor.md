---
id: lem-every-integer-above-one-has-a-prime-divisor
kind: lemma
title: "Every integer $n > 1$ has a prime divisor; indeed the least divisor of $n$ that exceeds $1$ is prime"
status: published
origin: session
deps: [def-prime, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound,
       lem-int-bounded-above-has-greatest, def-int-abs, lem-int-abs-properties,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring, def-natural-numbers, def-nat-order, lem-nat-embeds-int,
       lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
short: "$n > 1$ has a prime divisor"
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
pipeline_run: null
---

## Statement

Let $n \in \mathbb{Z}$ with $n > 1$, and put

$$S \;:=\; \{\, d \in \mathbb{Z} \;:\; d \mid n \ \text{ and } \ d > 1 \,\}$$

([[def-divides-in-z]]). Then $S$ is nonempty and has a least element $q$, and
$q$ is prime ([[def-prime]]). In particular every integer greater than $1$ has a
prime divisor.

## Facts & Assumptions

**Given:** An integer $n$ with $n > 1$, and the set $S$ above.

[L1] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L2] Divisibility is reflexive and transitive ([[lem-divisibility-basic]]).

[L3] A nonempty set of integers with a lower bound has a unique least element ([[lem-int-bounded-above-has-greatest]]).

[L4] If $d \mid u$ and $u \ne 0$ then $d \ne 0$ and $|d| \le |u|$ ([[lem-divisor-bound]]).

[L5] $p$ is prime exactly when $p > 1$ and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[L6] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L7] $\mathbb{Z}$ is a commutative ring: addition is associative and commutative, $x + 0 = x$, and every $x$ has an additive inverse $-x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves addition and order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L9] On $\mathbb{N}$: $0 \le k$ for every $k$, since $0 + k = k$ ([[def-nat-order]]); $m < k$ exactly when $\sigma(m) \le k$ ([[lem-nat-discrete]]); and $1 = \sigma(0)$ ([[def-natural-numbers]]).

[L10] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$; $|x| \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, so $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $\iota(0) = 0$. [L8]

1.2 Discreteness: if $x \in \mathbb{Z}$ and $0 < x$ then $1 \le x$. Indeed $x \ge 0$, so $x = \iota(k)$ for some $k \in \mathbb{N}$; $k \ne 0$ since $\iota(0) = 0 \ne x$; hence $0 < k$ in $\mathbb{N}$, so $1 = \sigma(0) \le k$, and applying the order-preserving $\iota$ gives $1 = \iota(1) \le \iota(k) = x$. [L8, L9]

1.3 $n \in S$, since $n \mid n$ and $n > 1$; so $S$ is nonempty. [L2]

1.4 $1$ is a lower bound for $S$: every $d \in S$ satisfies $d > 1$, hence $1 \le d$. [L6]

2.1 By [L3] the set $S$ has a unique least element $q$: that is, $q \mid n$, $q > 1$, and $q \le d$ for every $d \in S$. [step 1.3, step 1.4, L3]

3.1 $n > 1 > 0$ and $q > 1 > 0$, so $n \ne 0$ and $q \ne 0$, and $|q| = q$. [step 1.1, step 2.1, L6, L10]

3.2 Let $e$ be a positive divisor of $q$ with $e \ne 1$. Then $1 \le e$ by step 1.2, and $e \ne 1$, so $e > 1$. [step 1.2, step 2.1, L6]

4.1 Also $e \mid q$ and $q \mid n$, so $e \mid n$ by transitivity; with $e > 1$ this gives $e \in S$, hence $q \le e$. [step 2.1, step 3.2, L2]

5.1 On the other hand $e \mid q$ with $q \ne 0$ gives $|e| \le |q| = q$, and $|e| = e$ because $e > 0$; so $e \le q$. With step 4.1 and antisymmetry, $e = q$. [step 3.1, step 3.2, step 4.1, L4, L6, L10]

6.1 So every positive divisor of $q$ is $1$ or $q$, and $q > 1$: $q$ is prime. Since $q \mid n$, the integer $n$ has a prime divisor. [step 2.1, step 3.2, step 5.1, L5] ∎

## Remarks

- **Well-ordering is used through the integer bridge, not directly.** [[thm-well-ordering-principle]] gives a least element of a nonempty subset of $\mathbb{N}$, whereas $S$ is a set of *integers*. [[lem-int-bounded-above-has-greatest]] is the published lemma that crosses that gap, and its Statement covers the lower-bound case explicitly, so it is what this proof cites.

- **The bound $q$ is genuinely the least divisor above $1$, not merely some prime divisor.** That is what makes the argument work: minimality is the only reason $q$ has no proper divisor above $1$, since any such divisor would divide $n$ as well and be smaller.

- **The hypothesis $n > 1$ cannot be dropped.** At $n = 1$ the set $S$ is empty, since $d \mid 1$ forces $d = 1$ or $d = -1$ ([[lem-units-of-z]]) and neither exceeds $1$; so $1$ has no prime divisor, which is exactly why the empty product is the right factorisation of $1$ in [[thm-prime-factorisation-exists]]. At $n = 0$ every integer divides $0$, so $S$ is the whole set of integers greater than $1$; it does have a least element, namely $2$, but a statement about the divisors of $0$ is of no use below and the lemma is not claimed there.
