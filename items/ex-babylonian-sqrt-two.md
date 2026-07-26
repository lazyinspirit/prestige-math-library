---
id: ex-babylonian-sqrt-two
kind: example
title: "The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$"
status: draft
origin: session
deps: [thm-monotone-convergence, def-monotone-sequence, thm-of-square-roots, thm-algebra-of-limits, lem-limit-unique, thm-induction-principle, lem-power-monotone, lem-limit-preserves-order, lem-limit-of-tail, thm-recursion, def-sequence, def-real-limit, def-integer-power, def-bounded-set, lem-of-square-positive, lem-of-inverse-positive, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field]
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
    - title: "Methods of computing square roots (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Methods_of_computing_square_roots"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3 (recursive sequences and their limits)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Example

Let $(x_k)_{k \ge 1}$ be given by

$$x_1 = 2, \qquad x_{k+1} = \frac{1}{2}\Big(x_k + \frac{2}{x_k}\Big) \qquad (k \ge 1).$$

Then $(x_k)$ is **strictly decreasing**, every term satisfies
$x_k > \sqrt 2$, and

$$\lim_{k} x_k = \sqrt 2 .$$

This is the Babylonian, or Heron, iteration for the square root, and it is the
standard illustration of [[thm-monotone-convergence]]: monotone plus bounded
delivers a limit, and the recursion then *identifies* the limit, because the
limit must be a fixed point of the map that produced the sequence.

**Indexing.** Sequences in this library are functions on $\mathbb{N}$, which
starts at $0$ ([[def-sequence]]). The family above, indexed from $1$, is realised
as $x_k := g_{k-1}$ for the sequence $(g_j)_{j \in \mathbb{N}}$ with $g_0 = 2$
and $g_{j+1} = (g_j + 2/g_j)/2$, and the verification below works with $(g_j)$.
The shift changes nothing: convergence and monotonicity read the same under it
([[lem-limit-of-tail]]).

## Facts & Assumptions

**Given:** The set $A := \{u \in \mathbb{R} : u > 0\}$, the element $2 \in A$, and the function $f : A \to A$ with $f(u) = (u + 2/u)/2$, which does land in $A$ because $u > 0$ gives $2/u > 0$ and hence $f(u) > 0$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 2$ and $g_{j+1} = f(g_j)$. We write $x_k := g_{k-1}$ for $k \ge 1$, so $x_1 = 2$ and $x_{k+1} = f(x_k)$.

[L1] Recursion theorem ([[thm-recursion]]) and the induction principle ([[thm-induction-principle]]).

[L2] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$; in particular $(\sqrt 2)^2 = 2$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]).

[L4] A nonzero square is positive: $t \ne 0$ gives $t^2 > 0$ ([[lem-of-square-positive]]).

[L5] Order and arithmetic: $1 > 0$, hence $2 = 1 + 1 > 0$ and $2 > 1$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and a quotient of positives is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]), and boundedness below of a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L7] Monotone convergence: a nonincreasing sequence whose range is bounded below converges, to the infimum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

[L8] Algebra of limits, including the quotient case when the denominators and the limit are nonzero ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

## Verification

**Proof technique:** direct.

1.1 Every term is positive, since $g$ takes values in $A$ by construction. [given, L5]

1.2 By induction, $(g_j)^2 > 2$ for every $j$. Base: $(g_0)^2 = 4 > 2$. Step: assuming $(g_j)^2 > 2$, the identity $(g_{j+1})^2 - 2 = \Big(\dfrac{(g_j)^2 - 2}{2 g_j}\Big)^2$ holds by field arithmetic, and its right-hand side is the square of a nonzero element, since $(g_j)^2 - 2 > 0$ and $2g_j > 0$, hence is $> 0$. [given, L1, L4, L5]

2.1 Every term satisfies $g_j > \sqrt 2$: both $g_j$ and $\sqrt 2$ are $\ge 0$, and $(\sqrt 2)^2 = 2 < (g_j)^2$. [step 1.1, step 1.2, L2, L3]

2.2 The sequence is strictly decreasing: $g_j - g_{j+1} = g_j - \tfrac12\big(g_j + 2/g_j\big) = \dfrac{(g_j)^2 - 2}{2 g_j} > 0$, since the numerator is positive by step 1.2 and the denominator by step 1.1; consecutive comparisons then give strict decrease, hence also that $(g_j)$ is nonincreasing. [step 1.1, step 1.2, L5, L6]

3.1 The range of $(g_j)$ is bounded below by $\sqrt 2$, so by monotone convergence $(g_j)$ converges; write $L$ for its limit. [step 2.1, step 2.2, L6, L7]

4.1 $L \ge \sqrt 2$: the inequality $g_j > \sqrt 2$ holds at every index, so it passes to the limit in its non-strict form. In particular $L > 0$, since $\sqrt 2 > 0$ by $(\sqrt 2)^2 = 2 > 0$ and $\sqrt 2 \ge 0$. [step 2.1, step 3.1, L2, L4, L8]

5.1 By the algebra of limits, using $g_j \ne 0$ for every $j$ and $L \ne 0$, the sequence $j \mapsto \tfrac12\big(g_j + 2/g_j\big)$ converges to $\tfrac12\big(L + 2/L\big)$. [step 1.1, step 3.1, step 4.1, L8]

6.1 The sequence $j \mapsto g_{j+1}$ is the first tail of $(g_j)$, so it also converges to $L$; and it is the same sequence as in step 5.1, by the recursion clause. [step 3.1, L8]

7.1 By uniqueness of limits, $L = \tfrac12(L + 2/L)$, hence $2L = L + 2/L$, hence $L = 2/L$ and $L^2 = 2$. [step 5.1, step 6.1, L8, L5]

8.1 Since $L \ge 0$ and $L^2 = 2$, uniqueness of the nonnegative square root gives $L = \sqrt 2$. So $(g_j)$, and with it $(x_k)$, is strictly decreasing, stays above $\sqrt 2$, and converges to $\sqrt 2$. [step 4.1, step 7.1, step 2.1, step 2.2, L2] ∎

## Remarks

- **The identification of the limit is the interesting half.** Monotone
  convergence produces $L$ but says only that it is the infimum of the range,
  which is not a usable description. Passing to the limit in the recursion turns
  the description into an equation, $L = (L + 2/L)/2$, and that equation has
  exactly one nonnegative solution. The step that makes this legitimate is
  [[lem-limit-of-tail]]: the shifted sequence $(g_{j+1})$ has the same limit as
  $(g_j)$, so the two sides of the recursion may be compared in the limit.

- **The hypothesis $L \ne 0$ is not free.** The quotient case of
  [[thm-algebra-of-limits]] requires it, and it is supplied by step 4.1, not
  assumed. Had the sequence been allowed to approach $0$ the argument would break
  exactly there, and this is the usual place where a proof of this example is
  incomplete.

- **Convergence is very fast, though nothing above uses that.** The identity in
  step 1.2 also gives
  $g_{j+1} - \sqrt 2 = (g_j - \sqrt 2)^2/(2 g_j)$, so the error is squared at
  each step: the iteration is Newton's method applied to $u^2 - 2$. The
  contractive estimate of [[thm-contractive-implies-cauchy]] would give only
  geometric decay, so it is a weaker tool here, and the monotone route is both
  shorter and sharper.

- **Nothing in the argument is special to $2$.** The same proof with $2$ replaced
  by any $a > 0$, starting from any $x_1 > 0$ with $x_1^2 > a$, converges to
  $\sqrt a$. The starting value $2$ is chosen because $2^2 = 4 > 2$ makes the
  base case of step 1.2 immediate.
