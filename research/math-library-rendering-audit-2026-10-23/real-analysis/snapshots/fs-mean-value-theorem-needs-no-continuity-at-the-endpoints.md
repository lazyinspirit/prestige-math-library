---
id: fs-mean-value-theorem-needs-no-continuity-at-the-endpoints
kind: false-statement
title: "FALSE: differentiability at every point of $(a,b)$ alone yields a $c \\in (a,b)$ with $f(b) - f(a) = f'(c)(b-a)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-mean-value-theorem, thm-rolle, def-derivative, def-continuity-real, def-interval, def-function-limit, def-limit-point-r, lem-of-abs-value, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
short: "FALSE: MVT without endpoint continuity"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Statement

**False claim:** let $a, b \in \mathbb{R}$ with $a < b$ and let
$f : [a,b] \to \mathbb{R}$ be differentiable at every point of $(a,b)$ as a
function on $[a,b]$ ([[def-derivative]], [[def-interval]]). Then there is
$c \in (a,b)$ with

$$f(b) - f(a) \;=\; f'(c)\,(b - a) .$$

This is [[cor-mean-value-theorem]] with the hypothesis "$f$ is continuous on
$[a,b]$" deleted, everything else left as it stands. It is false.

**Why it is tempting.** The conclusion mentions $f'$ only at interior points,
and the hypothesis of continuity on the closed interval looks like a technical
condition guaranteeing nothing the differentiability does not already give. It
is not: the values $f(a)$ and $f(b)$ appear on the left-hand side of the
conclusion, and nothing in a hypothesis about $(a,b)$ alone connects them to the
behaviour of $f$ inside. A single unrelated value at one endpoint breaks the
identity outright.

## Facts & Assumptions

**Given:** The interval $[0,1]$ and the function $f : [0,1] \to \mathbb{R}$ defined by $f(x) := x$ for $x \in [0,1)$ and $f(1) := 0$ ([[def-interval]]).

[L1] Derivative ([[def-derivative]]): for $c \in [0,1]$ a limit point of $[0,1]$, the difference quotient $q(x) := (f(x)-f(c))/(x-c)$ is a function on $[0,1] \setminus \{c\}$, and $f$ is differentiable at $c$ with $f'(c) = L$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in [0,1]$ with $0 < |x-c| < \delta$ satisfies $|q(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Every point of $[0,1]$ is a limit point of $[0,1]$, that set being order-convex with at least two elements ([[def-derivative]], [[def-interval]], [[def-limit-point-r]]).

[L3] Absolute value and order ([[lem-of-abs-value]]): $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; and for $\delta > 0$ the condition $|y - c| < \delta$ is $c - \delta < y < c + \delta$.

[L4] $0 \ne 1$ in $\mathbb{R}$, since $0 < 1$ ([[cor-of-one-positive]]).

[L5] Continuity at a point ([[def-continuity-real]]): $f$ is continuous at $p \in [0,1]$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in [0,1]$ with $|x - p| < \delta$ satisfies $|f(x) - f(p)| < \varepsilon$.

[L6] Rolle's theorem ([[thm-rolle]]) carries the same continuity hypothesis on the closed interval as [[cor-mean-value-theorem]] does.

## Refutation

**Proof technique:** direct.

1.1 $f$ is a well-defined function on $[0,1]$: every $x \in [0,1]$ either equals $1$ or does not, exclusively, so exactly one of the two clauses applies to it. [given]

1.2 $f(0) = 0$, since $0 \in [0,1)$, and $f(1) = 0$ by the second clause. Hence $f(1) - f(0) = 0$, and also $f(0) = f(1)$. [given]

2.1 **The derivative inside.** Let $c \in (0,1)$ and put $\delta := \min\{c,\ 1-c\}$, a positive real. Every $x \in [0,1]$ with $0 < |x - c| < \delta$ satisfies $x < c + \delta \le c + (1-c) = 1$ by [L3], so $x \in [0,1)$ and $f(x) = x$; and $c \in [0,1)$, so $f(c) = c$. Therefore $q(x) = (x - c)/(x - c) = 1$ for every such $x$. [step 1.1, L3]

2.2 **$f$ is not continuous at $1$.** Take $\varepsilon := 1/2$ and let a real $\delta > 0$ be given. Put $x := \max\{1 - \delta/2,\ 1/2\}$; then $1/2 \le x < 1$, so $x \in [0,1)$ and $f(x) = x$, while $|x - 1| \le \delta/2 < \delta$. Yet $|f(x) - f(1)| = |x - 0| = x \ge 1/2 = \varepsilon$. So no $\delta$ witnesses the condition of [L5] at $p = 1$ for this $\varepsilon$. [step 1.1, L3, L5]

3.1 Let $c \in (0,1)$ and let a real $\varepsilon > 0$ be given. The $\delta$ of step 2.1 satisfies: every $x \in [0,1]$ with $0 < |x-c| < \delta$ has $|q(x) - 1| = |1 - 1| = 0 < \varepsilon$ by [L3]. Since $c$ is a limit point of $[0,1]$ by [L2], this is exactly the condition of [L1] with $L := 1$. So $f$ is differentiable at $c$ with $f'(c) = 1$. [step 2.1, L1, L2, L3]

4.1 **The claim fails on this witness.** By step 3.1 the function $f$ is differentiable at every point of $(0,1)$, so it satisfies the hypothesis of the false claim with $a := 0$ and $b := 1$. For every $c \in (0,1)$ one has $f'(c)(b-a) = 1 \cdot (1 - 0) = 1$, while $f(b) - f(a) = f(1) - f(0) = 0$ by step 1.2. By [L4] these are different, so no $c \in (0,1)$ satisfies the asserted identity, and the claim is false. [step 1.2, step 3.1, L4]

5.1 The same witness refutes the corresponding weakening of Rolle's theorem: by step 1.2 one has $f(0) = f(1)$, and by step 3.1 one has $f'(c) = 1 \ne 0$ at every $c \in (0,1)$, so no interior point carries a vanishing derivative. What is missing in both cases is exactly the hypothesis deleted, continuity on the closed interval, and step 2.2 shows it fails at the single point $1$. [step 1.2, step 2.2, step 3.1, step 4.1, L6] ∎

## Remarks

- **The witness is as small as it can be.** It agrees with the identity except at one endpoint, and it is differentiable at every interior point with the constant derivative $1$. Nothing about the interior is disturbed; only the value $f(1)$ is moved, and the conclusion of the mean value theorem is a statement about that value.

- **Where the true proof would break.** [[cor-mean-value-theorem]] runs through [[thm-rolle]], and Rolle runs through [[thm-extreme-value-r]], which needs $f$ continuous on the compact set $[a,b]$. With continuity failing at $1$ the supremum of $f$ over $[0,1]$ is $1$ and is not attained, so the extreme value theorem has nothing to hand back and every later step is unavailable.

- **Continuity at the endpoints is the only thing deleted.** In particular the witness is continuous at every point of $(0,1)$, being differentiable there; it is even continuous at $0$. So the false claim cannot be repaired by asking for continuity on $[a,b)$, or on $(a,b]$ after reflecting the witness, and it is the closed interval that is needed.
