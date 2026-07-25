---
id: fs-negative-has-square-root
kind: false-statement
title: "FALSE: every real number has a real square root"
status: published
origin: session
deps: [thm-of-square-roots, lem-of-square-positive, lem-of-zero-mult, thm-nth-roots-exist, def-complete-ordered-field, def-ordered-field, def-integer-power, cor-of-one-positive, cor-of-neg-one-squared, lem-of-sign-rules, lem-of-mult-neg, lem-power-laws, lem-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

**False claim:** every real number has a real square root, that is, for every
$x \in \mathbb{R}$ there exists $y \in \mathbb{R}$ with $y^{2} = x$.

The true statement is [[thm-of-square-roots]], which produces a square root only
for $x \ge 0$, and its generalisation [[thm-nth-roots-exist]], which produces an
$n$-th root only for $x \ge 0$. The nonnegativity hypothesis in both is load
bearing, not decoration.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]), with integer powers as in [[def-integer-power]].

[A1] Every square is nonnegative: $y^{2} > 0$ for $y \ne 0$ ([[lem-of-square-positive]], which states this and only this), and $0^{2} = 0 \cdot 0 = 0$ because a product with a zero factor vanishes ([[lem-of-zero-mult]]); so $y^{2} \ge 0$ for every $y \in \mathbb{R}$.

[A2] $1 > 0$, hence $-1 < 0$; and by trichotomy no element satisfies both $z \ge 0$ and $z < 0$ ([[cor-of-one-positive]], [[def-ordered-field]]).

[A3] Nonnegative reals do have roots: for $a \ge 0$ and $n \ge 1$ there is a unique $a^{1/n} \ge 0$ with $\big(a^{1/n}\big)^{n} = a$ ([[thm-nth-roots-exist]], [[thm-of-square-roots]]).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that every real has a real square root; applying this to $-1 \in \mathbb{R}$ produces $y \in \mathbb{R}$ with $y^{2} = -1$. [assume-contra, given]

2.1 By [A1] the element $y^{2}$ is nonnegative, so $-1 = y^{2} \ge 0$; but $-1 < 0$ by [A2], and no element is both $\ge 0$ and $< 0$. [step 1.1, A1, A2]

3.1 The obstruction is exactly the order, and it applies in every ordered field, not only in $\mathbb{R}$: completeness is never used, so no ordered field contains a square root of a negative element, and adjoining one, as happens in $\mathbb{C}$, necessarily destroys the order. [step 2.1, A1, A2]

4.1 The assumption of step 1.1 therefore fails: there is no real $y$ with $y^{2} = -1$, so the claim that every real has a real square root is false, and the correct statements are [A3] with its hypothesis $a \ge 0$ kept. [step 2.1, step 3.1, step 1.1, A3, discharge-contradiction] ∎

## Remarks

- **What fails is evenness of the exponent, not the taking of roots.** Odd roots of negative numbers do exist in $\mathbb{R}$. The library has no general theory of parity, so fix the local abbreviation: call a natural $n$ **odd** when $n = 2k + 1$ for some natural $k$. Every odd $n$ satisfies $n \ge 1$.
- **First, $(-1)^{n} = -1$ for odd $n$**, which is a computation and not an unstated induction: $(-1)^{2k+1} = \big((-1)^{2}\big)^{k} \cdot (-1)$ by the addition and iterated-power laws for natural exponents ([[lem-power-laws]], claim 1), $(-1)^{2} = (-1)(-1) = 1$ ([[cor-of-neg-one-squared]]), and $1^{k} = 1$ ([[lem-power-monotone]], claim 4); so the product is $1 \cdot (-1) = -1$. Consequently $(-u)^{n} = (-1)^{n} u^{n} = -\,u^{n}$ for every $u \in \mathbb{R}$ and odd $n$ ([[lem-power-laws]], [[lem-of-mult-neg]]).
- **Every real is an $n$-th power, for odd $n$.** For $a \ge 0$ take $x = a^{1/n}$ ([A3], [[thm-nth-roots-exist]]). For $a < 0$ take $x := -\,(-a)^{1/n}$, which is legitimate because $-a > 0$ ([[lem-of-sign-rules]]), and then $x^{n} = -\big((-a)^{1/n}\big)^{n} = -(-a) = a$ by the previous item.
- **And the $n$-th power map is injective for odd $n$**, which the strict increase on $\{x \ge 0\}$ alone does not give, since a sign statement is not a monotonicity statement. The map is strictly increasing on the *whole* line. On $\{x \ge 0\}$ that is [[lem-power-monotone]], claim 2. If $x < y \le 0$ then $0 \le -y < -x$, so $(-y)^{n} < (-x)^{n}$ by that same claim, and negating gives $x^{n} = -(-x)^{n} < -(-y)^{n} = y^{n}$ ([[lem-of-sign-rules]]). If $x < 0 \le y$ then $-x > 0$ gives $(-x)^{n} > 0$, so $x^{n} = -(-x)^{n} < 0$, while $y^{n} \ge 0$ ([[lem-power-monotone]], claim 1). So $x < y$ always implies $x^{n} < y^{n}$; the map is injective, and with the surjectivity above it is a bijection of $\mathbb{R}$ onto itself for every odd $n$.
- **None of this rescues the even case**, and that is the point of the item: for even $n$, meaning $n = 2k$, the same computation gives $(-1)^{n} = \big((-1)^{2}\big)^{k} = 1^{k} = 1$, so $x^{n} = (-x)^{n} \ge 0$ for every $x$, powers of both signs land in $\{x \ge 0\}$, and the refutation above applies verbatim with $n = 2$.
