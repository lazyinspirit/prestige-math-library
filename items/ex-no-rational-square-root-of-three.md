---
id: ex-no-rational-square-root-of-three
kind: example
title: "No rational squares to $3$ or to $6$, and none cubes to $2$: three instances of the rational-root corollary"
status: published
origin: session
deps: [cor-rational-root-of-an-integer-is-an-integer, def-prime,
       thm-fundamental-theorem-of-arithmetic, def-coprime, cor-gcd-quotients-coprime,
       def-common-divisor-and-gcd, def-divides-in-z, def-rationals, def-rat-operations,
       thm-rat-field, lem-int-embeds-rat, def-field, def-group-power, lem-group-power-laws,
       lem-units-of-z, def-semigroup-and-monoid, def-int-abs, lem-int-abs-properties,
       thm-int-comm-ring, thm-int-ordered-ring, def-int-operations, def-int-order,
       lem-int-cancellation, def-integers, lem-nat-embeds-int, lem-nat-discrete,
       def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
short: "no rational squares to $3$ or $6$, none cubes to $2$"
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
    - title: "Rational root theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_root_theorem"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
pipeline_run: null
---

## Example

Powers are the natural powers of [[def-group-power]] in the commutative monoid
$(\mathbb{Q},\cdot,1)$ of the field $\mathbb{Q}$ ([[thm-rat-field]],
[[def-field]]), and $j : \mathbb{Z} \to \mathbb{Q}$, $j(u) = [(u,1)]$, is the
embedding of [[lem-int-embeds-rat]]. There is no $x \in \mathbb{Q}$ with

$$x^{2} = j(3), \qquad \text{nor with} \qquad x^{2} = j(6), \qquad \text{nor with} \qquad x^{3} = j(2).$$

Each is an instance of [[cor-rational-root-of-an-integer-is-an-integer]]: such an
$x$ would have to be $j(z)$ for an integer $z$, and the remaining work is to rule
out the finitely many integer candidates by size, which is done below.

## Facts & Assumptions

**Given:** The integers $2$, $3$, $4$, $6$, $8$, $9$ and the rationals they name under $j$.

[L1] If $k \ge 1$, $m \in \mathbb{Z}$, $x \in \mathbb{Q}$ and $x^{k} = j(m)$, then $x = j(z)$ for some $z \in \mathbb{Z}$ ([[cor-rational-root-of-an-integer-is-an-integer]]).

[L2] $j$ is injective and preserves addition and multiplication ([[lem-int-embeds-rat]]); $\mathbb{Q}$ is a field, so $(\mathbb{Q},\cdot,1)$ is a commutative monoid ([[thm-rat-field]], [[def-field]], [[def-semigroup-and-monoid]], [[def-rationals]], [[def-rat-operations]]).

[L3] $g^{0} = e$ and $g^{\sigma(k)} = g^{k} g$ in a monoid ([[def-group-power]]); the exponent laws hold for natural exponents in a monoid ([[lem-group-power-laws]]).

[L4] $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x||y|$; $|x| = x$ for $x \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

[L5] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-int-cancellation]]).

[L6] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]); $m < k$ exactly when $\sigma(m) \le k$, and $1 = \sigma(0)$ ([[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]]).

[L7] Primality and unique factorisation, which the corollary of [L1] rests on ([[def-prime]], [[thm-fundamental-theorem-of-arithmetic]], [[def-coprime]], [[cor-gcd-quotients-coprime]], [[def-common-divisor-and-gcd]], [[def-divides-in-z]], [[lem-units-of-z]]).

## Verification

**Proof technique:** direct.

1.1 $0 < 1$, and every integer $y > 0$ satisfies $y \ge 1$: $y = \iota(t)$ with $t \ne 0$, so $1 = \sigma(0) \le t$ and $\iota$ preserves the order. Consequently $y > c$ implies $y \ge c + 1$ for all integers $y, c$, by applying this to $y - c$. [L5, L6]

1.2 Monotonicity of squaring and cubing on the nonnegative integers: if $0 \le u \le w$ then $u^{2} \le w^{2}$ and $u^{3} \le w^{3}$, since $w^{2} - u^{2} = (w-u)(w+u)$ and $w^{3} - u^{3} = (w-u)(w^{2}+wu+u^{2})$ have both factors nonnegative. [L3, L5]

1.3 Suppose $x \in \mathbb{Q}$ has $x^{2} = j(3)$. By [L1] with $k = 2 \ge 1$ we get $x = j(z)$ for some $z \in \mathbb{Z}$; then $j(z^{2}) = j(z)^{2} = j(3)$, so $z^{2} = 3$ by injectivity of $j$. [L1, L2, L3]

2.1 Now $|z|^{2} = |z^{2}| = |3| = 3$, and $|z| \ge 0$. If $|z| = 0$ then $|z|^{2} = 0 \ne 3$; if $|z| = 1$ then $|z|^{2} = 1 \ne 3$; and if $|z| \ge 2$ then $|z|^{2} \ge 2^{2} = 4 > 3$ by step 1.2. Since $|z| \ge 0$ and $|z| \ne 0$ force $|z| \ge 1$, and $|z| \ne 1$ forces $|z| \ge 2$, no value remains, so no such $x$ exists. [step 1.1, step 1.2, step 1.3, L4, L5]

2.2 Suppose $x^{2} = j(6)$. As in step 1.3, $x = j(z)$ with $z^{2} = 6$, so $|z|^{2} = 6$. Now $0^{2} = 0$, $1^{2} = 1$, $2^{2} = 4$, and $|z| \ge 3$ gives $|z|^{2} \ge 9 > 6$; none of $0$, $1$, $4$ is $6$, and the four ranges are exhaustive by step 1.1. So no such $x$ exists. [step 1.1, step 1.2, step 1.3, L1, L2, L3, L4, L5]

2.3 Suppose $x^{3} = j(2)$. As before $x = j(z)$ with $z^{3} = 2$. If $z \le 0$ then $z^{3} \le 0 < 2$, since $z^{3} = z \cdot z \cdot z$ is a product of three nonpositive factors and is therefore nonpositive. So $z \ge 1$; and $1^{3} = 1 \ne 2$, while $z \ge 2$ gives $z^{3} \ge 2^{3} = 8 > 2$ by step 1.2. No value remains, so no such $x$ exists. [step 1.1, step 1.2, step 1.3, L1, L2, L3, L5]

3.1 The three claims are established. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **A fourth instance was already in the library, proved differently.** The published [[fs-sqrt2-rational]] refutes "some rational number squares to $2$" on the construction pages, by parity alone and long before primes were available here. The case $k = 2$, $m = 2$ of [[cor-rational-root-of-an-integer-is-an-integer]] gives the same conclusion from Euclid's lemma instead, and the two agree.

- **Nothing here asserts that a real square root of $3$ exists.** The statement is entirely about $\mathbb{Q}$: no rational squares to $3$. That $\mathbb{R}$ contains such a number is a separate fact, proved elsewhere in the library from completeness, and it is not used or needed above.

- **The size argument is the whole of the remaining work.** Once the corollary has reduced the question to integers, each case is a finite check, because squaring and cubing are monotone on the nonnegative integers and the candidate values overshoot immediately.
