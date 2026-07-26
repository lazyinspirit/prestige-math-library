---
id: ex-contractive-sequence-fixed-point
kind: example
title: "The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$"
status: draft
origin: session
deps: [thm-contractive-implies-cauchy, def-contractive-sequence, thm-algebra-of-limits, lem-limit-of-tail, lem-limit-unique, thm-recursion, def-sequence, def-real-limit, lem-of-abs-value, lem-of-inverse-positive, prop-of-reciprocal-order, cor-of-one-positive, lem-of-add-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
---

## Example

Fix any $a \in \mathbb{R}$ and let $(x_k)$ be the sequence with $x_0 = a$ and

$$x_{k+1} = \frac{x_k + 1}{3} \qquad (k \in \mathbb{N}).$$

Then $(x_k)$ is contractive with contraction constant $c = 1/3$
([[def-contractive-sequence]]), and

$$\lim_{k} x_k = \frac{1}{2},$$

**whatever the starting value $a$ is**. Moreover
[[thm-contractive-implies-cauchy]] supplies the error bound
$|1/2 - x_k| \le 3^{\,-(k-1)}|x_2 - x_1|/(1 - 1/3)$ for $k \ge 1$, which is
computable from the first three terms alone.

The limit $1/2$ is the unique solution of $L = (L+1)/3$, that is the unique fixed
point of the map $u \mapsto (u+1)/3$. This is the smallest honest instance of the
Banach fixed point theorem: a contraction on $\mathbb{R}$ has one fixed point,
and every orbit converges to it.

## Facts & Assumptions

**Given:** A real $a$, and by the recursion theorem ([[thm-recursion]]) applied to $\mathbb{R}$, the element $a$ and the function $f(u) = (u+1)/3$, the unique sequence $(x_k)$ of reals with $x_0 = a$ and $x_{k+1} = f(x_k)$ ([[def-sequence]]); the constant $c := 1/3$.

[L1] Recursion theorem ([[thm-recursion]]).

[L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L3] Field arithmetic: $(u+1)/3 - (v+1)/3 = (u - v)/3$, and $3L = L + 1$ is equivalent to $2L = 1$ ([[def-field]]).

[L4] Absolute value: $|ab| = |a|\,|b|$, and $|t| = t$ for $t \ge 0$, so $|(u-v)/3| = |u-v|/3$ ([[lem-of-abs-value]]).

[L5] Contractive sequences: a constant $c$ with $0 < c < 1$ and $|x_{k+2} - x_{k+1}| \le c|x_{k+1} - x_k|$ at every index ([[def-contractive-sequence]]).

[L6] Every contractive sequence is Cauchy and converges, with the stated error bound for $k \ge 1$ ([[thm-contractive-implies-cauchy]], [[def-real-limit]]).

[L7] Algebra of limits ([[thm-algebra-of-limits]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

## Verification

**Proof technique:** direct.

1.1 The constant $c = 1/3$ satisfies $0 < c < 1$. [given, L2]

1.2 For every $k$: $x_{k+2} - x_{k+1} = \dfrac{x_{k+1} + 1}{3} - \dfrac{x_k + 1}{3} = \dfrac{x_{k+1} - x_k}{3}$, so $|x_{k+2} - x_{k+1}| = \tfrac13 |x_{k+1} - x_k|$. [given, L1, L3, L4]

2.1 Hence $(x_k)$ is contractive with contraction constant $c = 1/3$, the inequality of [L5] holding with equality at every index. [step 1.1, step 1.2, L5]

3.1 By [L6] the sequence converges; write $L$ for its limit, and the error bound of [L6] holds for it with $c = 1/3$. [step 2.1, L6]

4.1 The sequence $k \mapsto x_{k+1}$ is the first tail of $(x_k)$, so it converges to $L$; and by the algebra of limits $k \mapsto (x_k + 1)/3$ converges to $(L+1)/3$. [step 3.1, L7]

5.1 The two sequences of step 4.1 are the same sequence, by the recursion clause, so uniqueness of limits gives $L = (L+1)/3$, hence $3L = L + 1$, hence $2L = 1$ and $L = 1/2$. [step 4.1, L1, L3, L7]

6.1 So for every starting value $a$ the sequence is contractive with $c = 1/3$ and converges to $1/2$, with the error bound of step 3.1. [step 2.1, step 3.1, step 5.1] ∎

## Remarks

- **The starting value is genuinely arbitrary.** Nothing in the verification uses
  anything about $a$, and the limit does not depend on it. What does depend on it
  is the error bound, through $|x_2 - x_1|$, which for this recursion equals
  $|a - 1/2| \cdot 2/9$.

- **Contractivity is exact here, not an estimate.** Step 1.2 gives equality,
  $|x_{k+2} - x_{k+1}| = \tfrac13|x_{k+1} - x_k|$, so $c = 1/3$ is the smallest
  admissible contraction constant and the error bound of
  [[thm-contractive-implies-cauchy]] is as sharp as that theorem can make it.
  Contrast [[cex-strictly-decreasing-gaps-no-limit]], where the ratio of
  consecutive gaps tends to $1$ and no admissible constant exists at all.

- **Why a fixed point is forced.** The limit satisfies the recursion equation
  because a sequence and its shift have the same limit ([[lem-limit-of-tail]]) and
  the algebra of limits transports the right-hand side. This is the same move as
  in [[ex-babylonian-sqrt-two]] and [[ex-recursive-sqrt-two-plus-x]]; the
  difference is that here convergence comes from contractivity rather than from
  monotonicity, and no monotonicity is available, since for $a > 1/2$ the sequence
  decreases and for $a < 1/2$ it increases while for $a = 1/2$ it is constant.
