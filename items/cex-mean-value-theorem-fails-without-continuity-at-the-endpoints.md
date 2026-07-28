---
id: cex-mean-value-theorem-fails-without-continuity-at-the-endpoints
kind: counterexample
title: "$f(x) = x$ on $[0,1)$ with $f(1) = 0$ is differentiable at every point of $(0,1)$ with $f' \\equiv 1$, yet no $c$ satisfies $f(1) - f(0) = f'(c)$, so continuity on the closed interval cannot be dropped from the mean value theorem"
status: draft
origin: session
deps: [fs-mean-value-theorem-needs-no-continuity-at-the-endpoints, cor-mean-value-theorem, thm-rolle, def-derivative, def-continuity-real, def-interval, def-function-limit, def-one-sided-limits, def-limit-point-r, cor-of-one-positive, lem-of-abs-value, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "MVT fails without endpoint continuity"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $a, b \in \mathbb{R}$ with $a < b$ and let
$f : [a,b] \to \mathbb{R}$ be differentiable at every point of $(a,b)$ as a
function on $[a,b]$ ([[def-derivative]]). Then there is $c \in (a,b)$ with
$f(b) - f(a) = f'(c)(b-a)$.

That is [[cor-mean-value-theorem]] with the hypothesis of continuity on
$[a,b]$ deleted, and it is false; the false statement itself is recorded as
[[fs-mean-value-theorem-needs-no-continuity-at-the-endpoints]]. This item works
the witness out: it locates the failure at a single point, measures it, and
shows that repairing that one value restores the conclusion.

## Facts & Assumptions

**Given:** The function $f : [0,1] \to \mathbb{R}$ with $f(x) := x$ for $x \in [0,1)$ and $f(1) := 0$, and the identity $h : [0,1] \to \mathbb{R}$, $h(x) := x$ ([[def-interval]]).

[L1] The refutation of [[fs-mean-value-theorem-needs-no-continuity-at-the-endpoints]] establishes, for this $f$: that $f$ is differentiable at every $c \in (0,1)$ with $f'(c) = 1$; that $f(0) = f(1) = 0$, so $f(1) - f(0) = 0$; and that no $c \in (0,1)$ satisfies $f(1)-f(0) = f'(c)(1-0)$.

[L2] One-sided limits ([[def-one-sided-limits]], [[def-interval]]): the left limit of $f$ at $p$ is the limit at $p$ of $f$ restricted to $[0,1] \cap (-\infty,p)$, defined when $p$ is a limit point of that set; the right limit is the same with $[0,1] \cap (p,\infty)$.

[L3] The limit condition ([[def-function-limit]]): $\lim_{x \to p} u(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $u$ with $0 < |x - p| < \delta$ satisfies $|u(x) - L| < \varepsilon$. The clause $0 < |x-p|$ removes $x = p$ from the quantifier ([[lem-of-abs-value]], [[def-neighbourhood-r]]).

[L4] Continuity at a limit point ([[def-continuity-real]], clause 1): for $p \in [0,1]$ a limit point of $[0,1]$, the function $f$ is continuous at $p$ if and only if $\lim_{x \to p} f(x)$ exists and equals $f(p)$.

[L5] Mean value theorem ([[cor-mean-value-theorem]]) and Rolle's theorem ([[thm-rolle]]), both of which additionally require continuity on the closed interval.

[L6] The identity on $[0,1]$ is continuous on $[0,1]$ and differentiable at every point of $[0,1]$ with derivative $1$, its difference quotient at any $c$ being the constant $1$ ([[def-derivative]], [[def-function-limit]], [[def-continuity-real]]).

[L7] $0 \ne 1$, since $0 < 1$ ([[cor-of-one-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the function $f$ is differentiable at every $c \in (0,1)$ with $f'(c) = 1$, satisfies $f(0) = f(1) = 0$, and admits no $c \in (0,1)$ with $f(1)-f(0) = f'(c)(1-0)$. So the refuted claim fails at $a := 0$, $b := 1$. [L1]

1.2 The point $1$ is a limit point of $[0,1]$ and of $[0,1] \cap (-\infty,1) = [0,1)$: for every real $\varepsilon > 0$ the point $y := \max\{1-\varepsilon/2,\ 1/2\}$ satisfies $1/2 \le y < 1$, hence $y \in [0,1)$, and $0 < |y - 1| \le \varepsilon/2 < \varepsilon$. [L2, L3]

2.1 $\lim_{x \to 1} f(x) = 1$, the limit taken over the domain $[0,1]$. Given a real $\varepsilon > 0$, take $\delta := \varepsilon$; every $x \in [0,1]$ with $0 < |x - 1| < \delta$ has $x \ne 1$ by [L3], hence $x \in [0,1)$ and $f(x) = x$, so $|f(x) - 1| = |x-1| < \varepsilon$. Since the same quantifier ranges over the same points when the domain is cut down to $[0,1)$, this also says $\lim_{x \to 1^{-}} f(x) = 1$ by [L2]. The right limit at $1$ is not defined, since $[0,1] \cap (1,\infty)$ is empty and $1$ is therefore not a limit point of it. [step 1.2, L2, L3]

3.1 $f$ is not continuous at $1$. By step 1.2 the point $1$ is a limit point of $[0,1]$, so [L4] makes continuity there equivalent to $\lim_{x \to 1} f(x) = f(1)$; by step 2.1 the left side is $1$ and by [L1] the right side is $0$, and $0 \ne 1$ by [L7]. So exactly one hypothesis of [L5] fails, at exactly one point, and it is the deleted one. [step 2.1, L1, L4, L5, L7]

4.1 **The repair.** The identity $h$ agrees with $f$ at every point of $[0,1]$ except $1$, where $h(1) = 1$ and $f(1) = 0$. By [L6] the function $h$ is continuous on $[0,1]$ and differentiable at every point of $(0,1)$ with $h'(c) = 1$, so [L5] applies to $h$; and indeed $h(1) - h(0) = 1 = 1 \cdot (1-0) = h'(c)(1-0)$ for **every** $c \in (0,1)$. So moving the single value $f(1)$ back to $1$ turns a function with no admissible $c$ into one for which every $c$ is admissible. [step 1.1, step 3.1, L5, L6]

5.1 The same witness refutes the corresponding weakening of Rolle's theorem: $f(0) = f(1) = 0$ by step 1.1, and yet $f'(c) = 1 \ne 0$ at every $c \in (0,1)$ by step 1.1 and [L7]. So neither theorem in [L5] survives the deletion of continuity on the closed interval. [step 1.1, step 4.1, L5, L7] ∎

## Remarks

- **The discontinuity is of the mildest possible kind.** Both of the quantities that exist at $1$, the left limit and the value, exist and are finite; they simply differ. In the vocabulary of the page on monotone functions and discontinuities this is a removable discontinuity, and step 4.1 removes it. Nothing pathological is needed to break the mean value theorem.

- **Why the derivative sees nothing.** The difference quotient of $f$ at an interior $c$ is evaluated only at points within $\min\{c, 1-c\}$ of $c$, and every such point lies in $[0,1)$, where $f$ is the identity. So $f'$ carries no information at all about $f(1)$, while the conclusion of the mean value theorem is an equation containing $f(1)$. Continuity on the closed interval is precisely the bridge between the two.

- **Reflecting the witness covers the other endpoint.** The function $x \mapsto -f(1-x)$ is differentiable at every point of $(0,1)$ with the same constant derivative and fails continuity at $0$ instead of at $1$, so nothing is special about which endpoint is broken.
