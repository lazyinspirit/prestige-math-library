---
id: thm-gcd-and-lcm-from-valuations
kind: theorem
title: "For positive integers $a$ and $b$ and every prime $p$: $v_p(\\gcd(a,b)) = \\min\\{v_p(a), v_p(b)\\}$ and $v_p(\\operatorname{lcm}(a,b)) = \\max\\{v_p(a), v_p(b)\\}$; so the exponent-wise greatest common divisor is the $\\gcd$ of the divisibility page and not a second notion"
status: published
origin: session
deps: [lem-divisibility-via-valuations, lem-p-adic-valuation-additive,
       lem-p-adic-valuation-basic, def-p-adic-valuation, def-common-divisor-and-gcd,
       cor-common-divisor-divides-gcd, lem-gcd-basic-values, def-lcm, thm-gcd-lcm-product,
       def-prime, thm-nat-linear-order, lem-nat-add-commutative, lem-nat-add-cancellative,
       def-group-power, def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z,
       lem-divisibility-basic, lem-associates-characterisation, def-int-abs,
       lem-int-abs-properties, lem-int-cancellation, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers,
       def-nat-order, def-nat-addition, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: true
short: "$v_p(\\gcd) = \\min$, $v_p(\\operatorname{lcm}) = \\max$"
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
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
    - title: "Least common multiple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least_common_multiple"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$ with $a \ge 1$ and $b \ge 1$, write
$g := \gcd(a,b)$ ([[def-common-divisor-and-gcd]]) and
$\ell := \operatorname{lcm}(a,b)$ ([[def-lcm]]), and let $p$ be any prime
([[def-prime]]). Then $g \ge 1$ and $\ell \ge 1$, so all four valuations below
are defined ([[def-p-adic-valuation]]), and

1. $v_p(g) = \min\{\, v_p(a),\, v_p(b) \,\}$;
2. $v_p(\ell) = \max\{\, v_p(a),\, v_p(b) \,\}$,

the minimum and maximum being taken in $\mathbb{N}$, whose order is total
([[thm-nat-linear-order]]).

3. **The exponent recipe does not define a second notion.** If $d \ge 1$
   satisfies $v_p(d) = \min\{v_p(a),v_p(b)\}$ for every prime $p$, then
   $d = \gcd(a,b)$; and if $d \ge 1$ satisfies $v_p(d) = \max\{v_p(a),v_p(b)\}$
   for every prime $p$, then $d = \operatorname{lcm}(a,b)$.

## Facts & Assumptions

**Given:** Integers $a, b \ge 1$; $g := \gcd(a,b)$, $\ell := \operatorname{lcm}(a,b)$; and, for a prime $p$, $m_p := \min\{v_p(a), v_p(b)\}$ and $M_p := \max\{v_p(a), v_p(b)\}$.

[L1] $\gcd(u,v) \ge 1$ unless $u = v = 0$; $\gcd(u,v)$ is a common divisor of $u$ and $v$, and every common divisor of $u$ and $v$ divides it ([[def-common-divisor-and-gcd]], [[lem-gcd-basic-values]], [[cor-common-divisor-divides-gcd]]).

[L2] For $u, v$ both nonzero, $\operatorname{lcm}(u,v)$ is the least *positive* common multiple of $u$ and $v$; in particular $u \mid \operatorname{lcm}(u,v)$ and $v \mid \operatorname{lcm}(u,v)$ ([[def-lcm]]).

[L3] $\gcd(u,v) \cdot \operatorname{lcm}(u,v) = |uv|$, and every common multiple of $u$ and $v$ is a multiple of $\operatorname{lcm}(u,v)$ ([[thm-gcd-lcm-product]]).

[L4] For positive $u, w$: $u \mid w$ exactly when $v_q(u) \le v_q(w)$ for every prime $q$ ([[lem-divisibility-via-valuations]]).

[L5] For a prime $p$ and nonzero $u, w$: $v_p(uw) = v_p(u) + v_p(w)$ ([[lem-p-adic-valuation-additive]]).

[L6] For a prime $p$ and nonzero $u$: $p^{k} \mid u$ exactly when $k \le v_p(u)$; and $p^{k} \ge 1$ for every $k$ ([[lem-p-adic-valuation-basic]], [[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L7] $u \mid w$ and $w \mid u$ hold together exactly when $|u| = |w|$ ([[lem-associates-characterisation]]); $|x| = x$ for $x \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L8] Divisibility is reflexive and transitive; $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L9] On $\mathbb{N}$: the order is total, so any two naturals have a minimum and a maximum ([[thm-nat-linear-order]]); addition is commutative ([[lem-nat-add-commutative]]) and cancellative ([[lem-nat-add-cancellative]]); $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]], [[def-nat-addition]]); $m < n$ exactly when $\sigma(m) \le n$, and $1 = \sigma(0)$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L10] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; a product of two nonzero integers is nonzero and cancellation holds ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-int-cancellation]]).

[L11] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$, and every integer $x > 0$ satisfies $x \ge 1$: $x = \iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$ and $\iota$ preserves the order. [L9, L11]

1.2 For naturals $x, y$ the minimum and maximum exist by totality, and $\min\{x,y\} + \max\{x,y\} = x + y$: if $x \le y$ the left side is $x + y$, and if $y \le x$ it is $y + x = x + y$. [L9]

2.1 $a > 0$ and $b > 0$, so $a \ne 0$, $b \ne 0$ and $(a,b) \ne (0,0)$; hence $g \ge 1$, and $\ell$ is the least positive common multiple of $a$ and $b$, so $\ell \ge 1$. All of $a, b, g, \ell$ are nonzero and their valuations are defined. [step 1.1, L1, L2, L10]

3.1 $g \mid a$ and $g \mid b$, so $v_p(g) \le v_p(a)$ and $v_p(g) \le v_p(b)$ by [L4]; hence $v_p(g) \le m_p$. [step 2.1, step 1.2, L1, L4]

3.2 Conversely $m_p \le v_p(a)$ and $m_p \le v_p(b)$, so $p^{m_p} \mid a$ and $p^{m_p} \mid b$ by [L6]; thus $p^{m_p}$ is a common divisor of $a$ and $b$ and therefore divides $g$. Since $g \ne 0$, [L6] applied to $g$ gives $m_p \le v_p(g)$. [step 2.1, step 1.2, L1, L6]

3.3 $ab > 0$, so $|ab| = ab$, and [L3] gives $g \ell = ab$. Applying [L5] to the nonzero pairs $(g,\ell)$ and $(a,b)$ gives $v_p(g) + v_p(\ell) = v_p(ab) = v_p(a) + v_p(b)$. [step 2.1, L3, L5, L7, L10]

4.1 Clause 1: $v_p(g) = m_p$, by antisymmetry of the order on $\mathbb{N}$. [step 3.1, step 3.2, L9]

5.1 Clause 2: substituting step 4.1 and step 1.2, $m_p + v_p(\ell) = v_p(a) + v_p(b) = m_p + M_p$, so $v_p(\ell) = M_p$ by cancellation of addition on $\mathbb{N}$. [step 1.2, step 4.1, step 3.3, L9]

5.2 Clause 3, first half. Let $d \ge 1$ satisfy $v_p(d) = m_p$ for every prime $p$. Then $v_p(d) = v_p(g)$ for every $p$ by step 4.1, so $d \mid g$ and $g \mid d$ by [L4], hence $|d| = |g|$; both are positive, so $d = g$. [step 2.1, step 4.1, L4, L7]

6.1 Clause 3, second half, by the same argument with step 5.1 in place of step 4.1: $v_p(d) = M_p = v_p(\ell)$ for every $p$ forces $d \mid \ell$ and $\ell \mid d$, hence $d = \ell$. [step 2.1, step 5.1, L4, L7]

7.1 Clauses 1, 2 and 3 are established. [step 4.1, step 5.1, step 5.2, step 6.1] ∎

## Remarks

- **This is the agreement item for the two pages.** The exponent-wise recipe $\min$ for $\gcd$ and $\max$ for $\operatorname{lcm}$ is a *computation of* the $\gcd$ and $\operatorname{lcm}$ defined on the divisibility page, not a rival definition: clause 3 says any positive integer with the right valuations *is* that $\gcd$, respectively that $\operatorname{lcm}$. Nothing here redefines either symbol.

- **The identity $\min + \max = $ sum recovers the product formula.** Adding clauses 1 and 2 gives $v_p(g) + v_p(\ell) = v_p(a) + v_p(b) = v_p(ab)$ for every $p$, which is $g\ell = |ab|$ of [[thm-gcd-lcm-product]] read through valuations. That is a consistency check, and in this proof the implication was used in the other direction: the product formula is what pins $v_p(\ell)$ from above. The independent bound $M_p \le v_p(\ell)$, from $a \mid \ell$ and $b \mid \ell$, also follows from [L2] and [L4] and agrees.

- **Both arguments are restricted to positive integers, and the restriction is not cosmetic.** $v_p(0)$ is undefined ([[def-p-adic-valuation]]), so the pair $(0,0)$ — the one where the $\gcd$ convention lives — is out of scope entirely, and a negative argument is handled first by $\gcd(a,b) = \gcd(|a|,|b|)$ ([[lem-gcd-basic-values]]).

- **The minimum and maximum are taken in $\mathbb{N}$**, through the totality of its order ([[thm-nat-linear-order]]), and not through the library's [[def-max-min]], which is stated for real numbers. Valuations are natural numbers and there is no reason to leave $\mathbb{N}$.
