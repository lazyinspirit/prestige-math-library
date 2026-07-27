---
id: lem-p-adic-valuation-basic
kind: lemma
title: "For a prime $p$ and a nonzero integer $a$: $p^{v_p(a)} \\mid a$ and $p^{v_p(a)+1} \\nmid a$; $p^{k} \\mid a$ holds exactly for $k \\le v_p(a)$; $v_p(a) \\ge 1$ exactly when $p \\mid a$; $v_p(1) = v_p(-1) = 0$; and $v_p(p) = 1$"
status: draft
origin: session
deps: [def-p-adic-valuation, def-prime, def-group-power, lem-group-power-laws,
       def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z, lem-divisibility-basic,
       lem-int-cancellation, thm-induction-principle, lem-nat-order-is-membership, lem-nat-discrete,
       thm-nat-linear-order, def-nat-order, def-nat-addition, def-natural-numbers,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "basic properties of $v_p$"
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
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]), let $a \in \mathbb{Z}$ with $a \ne 0$, and
write $v := v_p(a)$ ([[def-p-adic-valuation]]). Powers are the natural powers of
[[def-group-power]] in the commutative monoid $(\mathbb{Z},\cdot,1)$
([[lem-units-of-z]]), and $k + 1$ means $\sigma(k)$. Then:

0. $p^{k} \ge 1$ for every $k \in \mathbb{N}$; in particular $p^{k} > 0$ and
   $p^{k} \ne 0$;
1. $p^{v} \mid a$ and $p^{v+1} \nmid a$;
2. for $k \in \mathbb{N}$: $p^{k} \mid a$ if and only if $k \le v$;
3. $a = p^{v} a'$ for some $a' \in \mathbb{Z}$ with $a' \ne 0$ and $p \nmid a'$;
4. $v \ge 1$ if and only if $p \mid a$;
5. $v_p(1) = v_p(-1) = 0$ and $v_p(p) = 1$.

## Facts & Assumptions

**Given:** A prime $p$, a nonzero integer $a$, and $v := v_p(a)$.

[L1] $v_p(a)$ is the greatest $k \in \mathbb{N}$ with $p^{k} \mid a$; in particular $p^{v} \mid a$, and $p^{k} \mid a$ fails for every $k > v$ ([[def-p-adic-valuation]]).

[L2] $p^{0} = 1$ and $p^{\sigma(k)} = p^{k} \cdot p$ ([[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] Exponent law in a monoid, for natural exponents: $g^{m+n} = g^{m} g^{n}$ ([[lem-group-power-laws]]).

[L4] Divisibility is reflexive and transitive; $d \mid u$ implies $d \mid uc$; and $d \mid u$, $d \mid -u$, $-d \mid u$ are equivalent ([[lem-divisibility-basic]]).

[L5] $d \mid u$ means $u = dc$ for some $c \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L6] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L7] Every prime satisfies $p > 1$ ([[def-prime]]).

[L8] If $xz = yz$ and $z \ne 0$ then $x = y$; and a product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

[L9] On $\mathbb{N}$: $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); $k < \sigma(k)$ and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]); and $\le$ is a linear order, so it is antisymmetric and total ([[thm-nat-linear-order]]).

[L10] $\mathbb{Z}$ is a commutative ring, its order is total, antisymmetric and transitive and compatible with addition, and $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, order preserving, with image the nonnegative integers and $\iota(0) = 0$, $\iota(1) = 1$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L11] Induction on $\mathbb{N}$: a subset containing $0$ and closed under $\sigma$ is all of $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 $p^{1} = p^{\sigma(0)} = p^{0} \cdot p = 1 \cdot p = p$. [L2, L10]

1.2 $0 < 1 < p$ in $\mathbb{Z}$, since $1 = \iota(1)$ is nonnegative and differs from $0$; hence $p \ne 0$, $p \ne 1$ and $p \ne -1$. [L7, L10]

1.3 Clause 1. $p^{v} \mid a$ by [L1], and $v < \sigma(v) = v + 1$, so $p^{v+1} \mid a$ would contradict the maximality of $v$; hence $p^{v+1} \nmid a$. [L1, L9]

1.4 Clause 2, the other direction. If $p^{k} \mid a$ then $k$ belongs to the set of which $v$ is the greatest element, so $k \le v$. [L1, L9]

2.1 Clause 0: $p^{k} \ge 1$ for every $k \in \mathbb{N}$. The set of such $k$ contains $0$, since $p^{0} = 1$; and if $p^{k} \ge 1$ then $p^{\sigma(k)} = p^{k} p$ has both factors $\ge 1 > 0$, so the product is positive, hence $\ge 1$ by discreteness of the order on $\mathbb{Z}$ (a positive integer is $\iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$ and $1 \le \iota(j)$). By induction the set is all of $\mathbb{N}$, and in particular $p^{k} > 0$ and $p^{k} \ne 0$. [step 1.1, step 1.2, L2, L9, L10, L11]

2.2 Clause 2, one direction. Let $k \le v$ and write $v = k + c$ with $c \in \mathbb{N}$. Then $p^{v} = p^{k+c} = p^{k} p^{c}$, so $p^{k} \mid p^{v}$; with $p^{v} \mid a$ and transitivity, $p^{k} \mid a$. [step 1.3, L1, L3, L4, L5, L9]

2.3 Clause 3. By [L1] fix $a'$ with $a = p^{v} a'$. Then $a' \ne 0$, since $a \ne 0$. If $p \mid a'$, say $a' = pb$, then $a = p^{v}(pb) = (p^{v} p) b = p^{v+1} b$, so $p^{v+1} \mid a$, contradicting step 1.3. Hence $p \nmid a'$. [step 1.3, L1, L2, L5, L9, L10, choose]

2.4 If $k \ge 1$ then $p \mid p^{k}$: write $k = 1 + c$, so $p^{k} = p^{1} p^{c} = p \cdot p^{c}$. [step 1.1, L3, L5, L9]

3.1 Clause 4. If $v \ge 1$ then $p = p^{1} \mid a$ by step 2.2. Conversely if $p \mid a$ then $p^{1} \mid a$, so $1 \le v$ by step 1.4. [step 1.1, step 2.2, step 1.4]

3.2 $v_p(1) = 0$. If $p^{k} \mid 1$ with $k \ge 1$, then $p \mid p^{k} \mid 1$ by step 2.4 and transitivity, so $p = 1$ or $p = -1$, contradicting step 1.2. So no $k \ge 1$ satisfies $p^{k} \mid 1$, while $p^{0} = 1 \mid 1$; the greatest such $k$ is $0$. [step 1.2, step 2.4, L1, L2, L4, L6, L9]

3.3 $v_p(p) = 1$. First $p^{1} = p \mid p$, so $1 \le v_p(p)$ by step 1.4 applied to $a := p$. Next $p^{2} \nmid p$, where $2 = \sigma(1)$: otherwise $p = p^{2}c = p(pc)$ for some $c$, and cancelling $p \ne 0$ gives $1 = pc$, so $p \mid 1$, contradicting step 1.2. Hence $v_p(p) < 2$ by step 2.2, that is $v_p(p) \le 1$, and antisymmetry gives $v_p(p) = 1$. [step 1.1, step 1.2, step 2.2, step 1.4, L2, L5, L8, L9]

4.1 $v_p(-1) = 0$, because $p^{k} \mid -1$ holds exactly when $p^{k} \mid 1$, so the two sets of exponents coincide. [step 3.2, L1, L4]

5.1 Clauses 0 to 5 are established. [step 1.3, step 2.1, step 2.2, step 1.4, step 2.3, step 3.1, step 3.2, step 4.1, step 3.3] ∎

## Remarks

- **Clause 3 is the working form.** Every later proof on this page writes a nonzero integer as $a = p^{v_p(a)} a'$ with $p \nmid a'$ and then argues about $a'$; that is how [[lem-p-adic-valuation-additive]] gets additivity, and it is where Euclid's lemma enters.

- **The hypothesis $a \ne 0$ is carried everywhere** because $v_p(0)$ is not defined: every power of $p$ divides $0$, so there is no greatest exponent ([[def-p-adic-valuation]]).

- **Clause 2 says the exponents form an initial segment**, which is what makes "the greatest $k$ with $p^{k} \mid a$" the same as "the number of times $p$ divides $a$". Without it the maximum could in principle skip values.
