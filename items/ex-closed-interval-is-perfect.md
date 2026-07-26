---
id: ex-closed-interval-is-perfect
kind: example
title: "Every nondegenerate closed interval is perfect, giving a second proof that it is uncountable"
status: draft
origin: session
deps: [def-perfect-set-r, thm-perfect-set-uncountable-r, cor-interval-uncountable, def-interval, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, lem-finite-set-has-max, def-max-min, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43 and its corollary)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $a, b \in \mathbb{R}$ with $a < b$. Then the closed interval
$E := [a,b]$ ([[def-interval]]) is perfect ([[def-perfect-set-r]]), and
therefore uncountable by [[thm-perfect-set-uncountable-r]].

This is a second proof of the uncountability of a nondegenerate interval. The
first, [[cor-interval-uncountable]], runs a trisection argument directly against
an assumed enumeration; the route here checks two purely local properties,
closedness and the absence of isolated points, and lets the perfect-set theorem
do the counting.

## Facts & Assumptions

**Given:** Reals $a < b$ and the interval $E := [a,b] = \{\, x : a \le x \le b \,\}$.

[L1] A set is perfect when it is closed and no point of it is isolated in it; $x \in P$ is isolated in $P$ when some $N_\varepsilon(x)$ meets $P$ only in $x$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] Each interval of the form $[a,b]$ is a closed set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L3] $N_\varepsilon(x) = \{\, y : |y - x| < \varepsilon \,\}$ ([[def-neighbourhood-r]], [[lem-of-abs-value]]).

[L4] Every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]]).

[L5] For $a < b$ the intervals $[a,b]$ and $(a,b)$ are uncountable ([[cor-interval-uncountable]]).

[L6] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L7] Ordered-field arithmetic: $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $E$ is closed by [L2], and nonempty since $a \in E$. [L2]

1.2 No point of $E$ is isolated in $E$: let $x \in E$ and let $\varepsilon > 0$ be real. If $x < b$, put $t := \min\{\varepsilon,\ b - x\} \cdot 2^{-1}$, which is positive by [L6] and [L7], and $y := x + t$; then $y > x$, and $y \le x + (b-x) \cdot 2^{-1} < b$ by [L7], while $y > x \ge a$, so $y \in E$ with $y \ne x$ and $|y - x| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$. If $x = b$, then $x > a$; put $t := \min\{\varepsilon,\ b - a\} \cdot 2^{-1} > 0$ and $y := x - t$; then $y < x \le b$, and $y \ge b - (b-a) \cdot 2^{-1} > a$ by [L7], so $y \in E$ with $y \ne x$ and $|y - x| = t < \varepsilon$. In both cases $N_\varepsilon(x)$ contains a point of $E$ other than $x$, so no $\varepsilon$ isolates $x$. [L1, L3, L6, L7]

2.1 By steps 1.1 and 1.2 the set $E$ is closed with no isolated points, that is, perfect, and it is nonempty. [step 1.1, step 1.2, L1]

3.1 By [L4] the nonempty perfect set $E$ is uncountable, which reproves for $[a,b]$ the first claim of [L5] along an independent route. [step 1.1, step 2.1, L4, L5] ∎

## Remarks

- **Nondegeneracy is exactly what is needed.** For $a = b$ the set $[a,a] =
  \{a\}$ is closed, its single point is isolated, and it is finite; the argument
  of step 1.2 breaks precisely there, since neither $x < b$ nor $x > a$ holds.
  This matches the hypothesis $a < b$ of [[cor-interval-uncountable]].

- **The open interval supplies only half of the definition.** The computation of
  step 1.2 applies verbatim inside $(a,b)$ and shows it has no isolated points,
  but $(a,b)$ is not closed, so it is not perfect. Perfectness needs both halves,
  which is why the example is stated for the closed interval.

- **Two proofs of one fact, sharing one ingredient.** Both routes use
  [[thm-nested-interval-property]], the first inside
  [[cor-interval-uncountable]] and the second inside
  [[thm-perfect-set-uncountable-r]]. They differ in everything else: the first
  trisects a given interval against a given enumeration, the second selects
  rational-endpoint intervals by least index. Neither is a corollary of the
  other.
