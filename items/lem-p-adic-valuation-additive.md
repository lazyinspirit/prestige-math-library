---
id: lem-p-adic-valuation-additive
kind: lemma
title: "$v_p(ab) = v_p(a) + v_p(b)$ for nonzero integers $a, b$, and $v_p(a+b) \\ge \\min\\{v_p(a), v_p(b)\\}$ whenever $a$, $b$ and $a+b$ are all nonzero"
status: draft
origin: session
deps: [def-p-adic-valuation, lem-p-adic-valuation-basic, thm-euclids-lemma, def-prime,
       def-group-power, lem-group-power-laws, def-semigroup-and-monoid, lem-units-of-z,
       def-divides-in-z, lem-divisibility-basic, thm-nat-linear-order,
       lem-nat-order-is-membership, lem-nat-discrete, def-nat-order, def-nat-addition,
       def-natural-numbers, lem-nat-add-associative, lem-nat-add-commutative, lem-int-cancellation, def-integers, def-int-operations,
       def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
forward_refs: [ex-prime-factorisation-worked]
aliases: []
landmark: false
short: "$v_p(ab) = v_p(a) + v_p(b)$"
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
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$ be nonzero,
with $v_p$ as in [[def-p-adic-valuation]]. Then $ab \ne 0$ and

$$v_p(ab) \;=\; v_p(a) + v_p(b),$$

the sum taken in $\mathbb{N}$ ([[def-nat-addition]]). If moreover $a + b \ne 0$,
then

$$v_p(a+b) \;\ge\; \min\{\, v_p(a),\, v_p(b) \,\},$$

the minimum of two natural numbers, which exists because the order on
$\mathbb{N}$ is total ([[thm-nat-linear-order]]).

## Facts & Assumptions

**Given:** A prime $p$ and nonzero integers $a, b$; $\alpha := v_p(a)$ and $\beta := v_p(b)$.

[L1] For a nonzero $u$: $p^{v_p(u)} \mid u$, and $u = p^{v_p(u)} u'$ for some nonzero $u'$ with $p \nmid u'$; moreover $p^{k} \mid u$ holds exactly for $k \le v_p(u)$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L2] Exponent law in a monoid for natural exponents: $g^{m+n} = g^{m} g^{n}$ ([[lem-group-power-laws]], [[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] If $p$ is prime and $p \mid uv$ then $p \mid u$ or $p \mid v$ ([[thm-euclids-lemma]]).

[L4] Divisibility is linear: $d \mid u$ and $d \mid v$ give $d \mid ux + vy$, in particular $d \mid u + v$ ([[lem-divisibility-basic]]); $d \mid u$ means $u = dc$ for some $c$ ([[def-divides-in-z]]).

[L5] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

[L6] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative and $x \cdot 1 = x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]); its order is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L7] On $\mathbb{N}$: $\le$ is a linear order, so any two naturals are comparable and have a minimum ([[thm-nat-linear-order]]); $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]), and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]).

[L8] Addition on $\mathbb{N}$ is associative and commutative ([[lem-nat-add-associative]], [[lem-nat-add-commutative]], [[def-nat-addition]]).

## Proof

**Proof technique:** direct.

1.1 $ab \ne 0$, so $v_p(ab)$ is defined. [L5]

1.2 Fix $a'$ and $b'$ with $a = p^{\alpha} a'$, $b = p^{\beta} b'$, both nonzero, and $p \nmid a'$, $p \nmid b'$. [L1, choose]

1.3 Now assume also $a + b \ne 0$, and put $m := \min\{\alpha,\beta\}$, which exists because $\le$ is total on $\mathbb{N}$; then $m \le \alpha$ and $m \le \beta$. [L7]

2.1 $ab = (p^{\alpha} a')(p^{\beta} b') = (p^{\alpha} p^{\beta})(a' b') = p^{\alpha+\beta}(a'b')$, using commutativity, associativity and the exponent law. [step 1.2, L2, L6]

2.2 $p \nmid a'b'$: otherwise [L3] would give $p \mid a'$ or $p \mid b'$, both excluded by step 1.2. [step 1.2, L3]

2.3 By [L1], $p^{m} \mid a$ and $p^{m} \mid b$, so $p^{m} \mid a + b$ by linearity; since $a + b \ne 0$, [L1] applied to $a+b$ gives $m \le v_p(a+b)$, which is the second assertion. [step 1.3, L1, L4]

3.1 $p^{\alpha+\beta} \ne 0$, since $ab \ne 0$ and $ab = p^{\alpha+\beta}(a'b')$ would otherwise be $0$. [step 1.1, step 2.1, L6]

3.2 $p^{\alpha+\beta} \mid ab$ by step 2.1, so $\alpha + \beta \le v_p(ab)$. [step 1.1, step 2.1, L1, L4]

4.1 Suppose $\alpha + \beta < v_p(ab)$. Then $\alpha + \beta + 1 \le v_p(ab)$, so $p^{\alpha+\beta+1} \mid ab$; fix $c$ with $ab = p^{\alpha+\beta+1}c = p^{\alpha+\beta}(pc)$, using the exponent law. Cancelling $p^{\alpha+\beta} \ne 0$ against step 2.1 gives $a'b' = pc$, that is $p \mid a'b'$, contradicting step 2.2. [step 2.1, step 2.2, step 3.1, L1, L2, L4, L5, L7]

5.1 Hence $v_p(ab) = \alpha + \beta$ by totality and antisymmetry of the order on $\mathbb{N}$, which is the first assertion. [step 3.2, step 4.1, L7]

6.1 Both assertions are established. [step 5.1, step 2.3] ∎

## Remarks

- **Primality is used exactly once**, at step 2.2, and it is used through [[thm-euclids-lemma]]. That is the whole reason the additivity of $v_p$ is a theorem about *primes* and not about arbitrary integers greater than $1$: for a composite base the analogue fails, and the companion page of the divisibility page already carries the failure of the product principle ([[cex-divides-a-product-without-dividing-a-factor]]).

- **The second clause is an inequality and cannot be an equality.** Take $p = 2$, $a = 2$, $b = 2$: then $v_2(a) = v_2(b) = 1$ while $v_2(a+b) = v_2(4) = 2$. The companion page's worked example computes such valuations explicitly ([[ex-prime-factorisation-worked]]).

- **The minimum is taken in $\mathbb{N}$, through [[thm-nat-linear-order]]**, not through the library's [[def-max-min]], which is stated for real numbers. The values of $v_p$ are natural numbers, so no passage to $\mathbb{R}$ is needed or wanted here.
