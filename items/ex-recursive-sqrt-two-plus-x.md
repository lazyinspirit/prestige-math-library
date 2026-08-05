---
id: ex-recursive-sqrt-two-plus-x
kind: example
title: "The sequence $x_1 = 1$, $x_{k+1} = \\sqrt{2 + x_k}$ increases to $2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-monotone-convergence, def-monotone-sequence, thm-of-square-roots, thm-algebra-of-limits, lem-limit-of-tail, lem-limit-preserves-order, lem-power-monotone, lem-limit-unique, thm-recursion, def-sequence, def-real-limit, def-integer-power, def-bounded-set, lem-of-no-zero-divisors, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field]
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
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested radical (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_radical"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Example

Let $(x_k)_{k \ge 1}$ be given by

$$x_1 = 1, \qquad x_{k+1} = \sqrt{2 + x_k} \qquad (k \ge 1).$$

Then $(x_k)$ is **strictly increasing**, every term satisfies $0 \le x_k < 2$,
and

$$\lim_{k} x_k = 2 .$$

Informally this is the value of the nested radical
$\sqrt{2 + \sqrt{2 + \sqrt{2 + \cdots}}}$, and the point of the example is that
the expression means nothing until the sequence is shown to converge; only then
does passing to the limit in the recursion identify the value.

**Indexing.** As in [[ex-babylonian-sqrt-two]], the family indexed from $1$ is
realised as $x_k := g_{k-1}$ for the sequence $(g_j)_{j \in \mathbb{N}}$ with
$g_0 = 1$ and $g_{j+1} = \sqrt{2 + g_j}$, and the verification works with
$(g_j)$ ([[def-sequence]], [[lem-limit-of-tail]]).

## Facts & Assumptions

**Given:** The set $A := \{u \in \mathbb{R} : 0 \le u < 2\}$, the element $1 \in A$, and the function $f : A \to A$ with $f(u) = \sqrt{2+u}$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 1$ and $g_{j+1} = f(g_j)$. We write $x_k := g_{k-1}$ for $k \ge 1$, so $x_1 = 1$ and $x_{k+1} = \sqrt{2 + x_k}$.

[L1] Recursion theorem ([[thm-recursion]]).

[L2] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L3] Powers and order: for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$, and $a \le b$ exactly when $a^2 \le b^2$ ([[lem-power-monotone]]).

[L4] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$ and $4 = 2 \cdot 2$; adding a constant preserves the order, and inequalities may be added ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L5] A field has no zero divisors: $uv = 0$ forces $u = 0$ or $v = 0$ ([[lem-of-no-zero-divisors]]).

[L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]); boundedness above of a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L7] Monotone convergence: a nondecreasing sequence whose range is bounded above converges, to the supremum of its range ([[thm-monotone-convergence]], [[def-real-limit]]).

[L8] Algebra of limits ([[thm-algebra-of-limits]]); limits preserve non-strict inequalities ([[lem-limit-preserves-order]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

## Verification

**Proof technique:** direct.

1.1 The function $f$ does map $A$ into $A$, so the construction is legitimate: for $0 \le u < 2$ we have $2 \le 2 + u < 4$, hence $\sqrt{2+u} \ge 0$ and $(\sqrt{2+u})^2 = 2 + u < 4 = 2^2$, which gives $\sqrt{2+u} < 2$. [given, L2, L3, L4]

1.2 Consequently every term satisfies $0 \le g_j < 2$, since $g$ takes its values in $A$. [given, L1]

2.1 The sequence is strictly increasing. Fix $j$. From $0 \le g_j < 2$ we get $g_j - 2 < 0$ and $g_j + 1 > 0$, so $(g_j - 2)(g_j + 1) < 0$, that is $(g_j)^2 - g_j - 2 < 0$, that is $(g_j)^2 < 2 + g_j = (g_{j+1})^2$. Since $g_j \ge 0$ and $g_{j+1} \ge 0$, this gives $g_j < g_{j+1}$; consecutive comparisons then give strict increase, hence also that $(g_j)$ is nondecreasing. [step 1.2, L2, L3, L4, L6]

3.1 The range of $(g_j)$ is bounded above by $2$, so by monotone convergence $(g_j)$ converges; write $L$ for its limit. [step 1.2, step 2.1, L6, L7]

4.1 $1 \le L \le 2$: the inequalities $1 = g_0 \le g_j \le 2$ hold at every index, by step 2.1 and step 1.2, and pass to the limit in their non-strict form. [step 1.2, step 2.1, step 3.1, L8]

4.2 The sequence $j \mapsto g_{j+1}$ is the first tail of $(g_j)$, so it converges to $L$, and therefore $j \mapsto (g_{j+1})^2$ converges to $L^2$ by the algebra of limits. [step 3.1, L8]

4.3 The same sequence satisfies $(g_{j+1})^2 = 2 + g_j$ for every $j$, and $j \mapsto 2 + g_j$ converges to $2 + L$. [step 3.1, L8, L2]

5.1 By uniqueness of limits, $L^2 = 2 + L$, that is $(L-2)(L+1) = 0$. [step 4.2, step 4.3, L8]

6.1 Since $L \ge 1$ we have $L + 1 \ge 2 > 0$, so $L + 1 \ne 0$, and a field has no zero divisors, so $L - 2 = 0$ and $L = 2$. Thus $(g_j)$, and with it $(x_k)$, is strictly increasing, lies in $[0,2)$, and converges to $2$. [step 4.1, step 5.1, step 1.2, step 2.1, L4, L5] ∎

## Remarks

- **The limit is not attained.** Every term is strictly below $2$ and the limit is
  $2$, which is the supremum of the range and does not belong to it. That is the
  ordinary situation for a strictly increasing convergent sequence, and it is why
  [[thm-monotone-convergence]] is stated with a supremum rather than a maximum.

- **The quadratic has two roots and only one is admissible.** The limit equation
  $L^2 = 2 + L$ is solved by $L = 2$ and by $L = -1$. The second is excluded by
  step 4.1, which is why the bound $L \ge 1$ is proved rather than waved through:
  without it the argument would identify the limit only up to a sign, and a
  reader who writes down the limit equation without checking the range of $L$ has
  proved strictly less than the example claims.

- **Squaring the recursion avoids a continuity argument.** Passing to the limit in
  $g_{j+1} = \sqrt{2 + g_j}$ directly would need continuity of the square root,
  which this library has not proved at this point. Squaring first turns the
  recursion into $(g_{j+1})^2 = 2 + g_j$, in which only the algebra of limits is
  required. The device is worth remembering: an identity between polynomials in
  the terms passes to the limit for free, whereas an identity involving a
  function does not.
