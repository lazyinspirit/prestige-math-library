---
id: ex-square-root-is-half-holder
kind: example
title: "$\\sqrt{\\cdot}$ on $[0,\\infty)$ is uniformly continuous and exactly $1/2$-Hölder, and is not Lipschitz"
status: draft
origin: session
deps: [thm-metric-regularity-hierarchy, def-lipschitz-holder-contraction, thm-of-square-roots,
       def-rational-power, def-metric-uniform-continuity, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, lem-rational-power-monotone,
       lem-rational-power-laws, cor-archimedean-reciprocal, lem-of-inverse-positive,
       def-interval, lem-of-square-monotone, lem-of-abs-value, thm-of-archimedean,
       def-rat-order, lem-of-sign-rules, def-metric-space, lem-of-square-positive]
justified_by: []
aliases: []
landmark: true
short: "$\\sqrt{\\cdot}$ is $1/2$-Hölder, not Lipschitz"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
pipeline_run: null
---

## Example

Let $X := [0,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) with the metric
$d(x,y) = |x-y|$ inherited from $\mathbb{R}$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and
let $g : X \to X$ be $g(x) := \sqrt{x} = x^{1/2}$
([[thm-of-square-roots]], [[def-rational-power]]). Then:

1. $\big|\sqrt{x} - \sqrt{y}\big| \le |x-y|^{1/2}$ for all $x,y \ge 0$, so $g$ is
   $1/2$-Hölder with constant $1$ ([[def-lipschitz-holder-contraction]]).
2. $g$ is uniformly continuous ([[def-metric-uniform-continuity]]).
3. The constant $1$ cannot be improved: every $1/2$-Hölder constant $C$ for $g$
   satisfies $C \ge 1$.
4. For **every** rational $\alpha$ with $1/2 < \alpha \le 1$, the map $g$ is not
   $\alpha$-Hölder. In particular, at $\alpha = 1$, $g$ is not Lipschitz.

So $1/2$ is exactly the Hölder exponent of the square root, and the example
separates "Hölder" from "Lipschitz" inside
[[thm-metric-regularity-hierarchy]].

## Facts & Assumptions

**Given:** $X = [0,\infty)$ with the metric inherited from $\mathbb{R}$; $g(x) = \sqrt x$; reals $x,y \in X$; a rational $\alpha$ with $0 < \alpha \le 1$; a real $C \ge 0$.

[L1] Every $a \ge 0$ has a unique $\sqrt a \ge 0$ with $(\sqrt a)^2 = a$, and $a^{1/2} = \sqrt a$; the base $0$ is covered, with $0^{r} = 0$ for rational $r > 0$ ([[thm-of-square-roots]], [[def-rational-power]], [[def-rat-order]]).

[L2] For $a,b \ge 0$: $a \le b$ if and only if $a^2 \le b^2$; and squares are nonnegative ([[lem-of-square-monotone]], [[lem-of-square-positive]]).

[L3] Rational power laws for a positive base: $a^{r} > 0$, $a^{r+s} = a^{r}a^{s}$, $a^{-r} = 1/a^{r}$, $(a^{r})^{s} = a^{rs}$, and $(ab)^{r} = a^{r}b^{r}$ ([[lem-rational-power-laws]]).

[L4] Monotonicity in the base: for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n$; and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L6] The absolute value and its properties, and the usual metric of $\mathbb{R}$ ([[lem-of-abs-value]], [[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[lem-of-sign-rules]]).

[L7] A Hölder map is uniformly continuous ([[thm-metric-regularity-hierarchy]]).

## Verification

**Proof technique:** direct.

1.1 Both sides of the inequality of claim 1 are symmetric in $x$ and $y$, so it is enough to prove it when $x \ge y \ge 0$; then $\sqrt x \ge \sqrt y$ and $|x-y| = x - y$. [L2, L6]

1.2 Claim 4: let $\alpha$ be rational with $1/2 < \alpha \le 1$, put $\beta := \alpha - 1/2$, a positive rational, and suppose $\big|\sqrt x - \sqrt y\big| \le C\,|x-y|^{\alpha}$ for all $x,y \ge 0$ with some real $C \ge 0$. Taking $y = 0$ gives $t^{1/2} \le C\,t^{\alpha}$ for every real $t > 0$. [L1, L3, L5]

2.1 With $x \ge y \ge 0$ put $u := \sqrt y + \sqrt{x-y} \ge 0$. Then $u^2 = y + 2\sqrt{y}\sqrt{x-y} + (x-y) = x + 2\sqrt y \sqrt{x-y} \ge x$, the added term being a product of nonnegatives. [step 1.1, L1, L2]

2.2 At $t = 1$ this reads $1 \le C$, so $C > 0$; and dividing the inequality of step 1.2 by $t^{\alpha} > 0$ gives $t^{1/2 - \alpha} = t^{-\beta} = 1/t^{\beta} \le C$, hence $t^{\beta} \ge 1/C$ for every real $t > 0$. [step 1.2, L3, L5]

3.1 Since $u \ge 0$, $\sqrt x \ge 0$ and $(\sqrt x)^2 = x \le u^2$, we get $\sqrt x \le u = \sqrt y + \sqrt{x-y}$, hence $\big|\sqrt x - \sqrt y\big| = \sqrt x - \sqrt y \le \sqrt{x-y} = |x-y|^{1/2}$. This is claim 1, with Hölder constant $1$ and exponent $1/2$. [step 1.1, step 2.1, L1, L2]

3.2 Apply this at $t = 1/n$ for a natural $n \ge 1$: $(1/n)^{\beta} = 1/n^{\beta}$, so $1/n^{\beta} \ge 1/C$ and therefore $n^{\beta} \le C$ for every $n \ge 1$. [step 2.2, L3, L5]

4.1 By [L7] a $1/2$-Hölder map is uniformly continuous, so $g$ is uniformly continuous: claim 2. [step 3.1, L7]

4.2 Claim 3: suppose $\big|\sqrt x - \sqrt y\big| \le C\,|x-y|^{1/2}$ for all $x,y \ge 0$. Taking $y = 0$ and $x = 1$ gives $1 = \sqrt 1 \le C \cdot 1^{1/2} = C$, so $C \ge 1$. [step 3.1, L1, L3]

5.1 But $C > 0$, so $C^{1/\beta}$ is a positive real and [L5] supplies a natural $n \ge 1$ with $n > C^{1/\beta}$; raising to the positive rational power $\beta$ gives $n^{\beta} > \big(C^{1/\beta}\big)^{\beta} = C$, contradicting step 3.2. So no such $C$ exists and $g$ is not $\alpha$-Hölder: claim 4, and at $\alpha = 1$ it says $g$ is not Lipschitz. [step 2.2, step 3.2, L3, L4, L5] ∎

## Remarks

- **Where the failure is located.** The obstruction in claims 3 and 4 sits at $0$: the inequality $t^{1/2} \le C\,t^{\alpha}$ is comfortable for large $t$ and impossible for small $t$ once $\alpha > 1/2$, because $t^{1/2}$ then dominates $t^{\alpha}$. Away from $0$ the square root is perfectly Lipschitz: on $[a,\infty)$ with $a > 0$ one has $\big|\sqrt x - \sqrt y\big| = |x-y|/(\sqrt x + \sqrt y) \le |x-y|/(2\sqrt a)$, since $\sqrt x + \sqrt y \ge 2\sqrt a > 0$ and $(\sqrt x - \sqrt y)(\sqrt x + \sqrt y) = x - y$.
- **The exponent is rational, and that is not a restriction here.** This library defines $a^{r}$ only for rational $r$ ([[def-rational-power]]), and both $1/2$ and every exponent used above are rational; claim 4 quantifies over rational $\alpha$ only, and says nothing about real exponents, which do not exist here.
- **What this example is for.** It is one of the two witnesses named in [[thm-metric-regularity-hierarchy]]: it shows that "Hölder" is strictly weaker than "Lipschitz", so the implication proved there from Hölder to uniform continuity is not a detour through the Lipschitz condition. The other witness, separating continuity from uniform continuity, is [[cex-continuous-map-destroying-cauchyness]].
- **Claim 1 is sharp in a second sense as well**: equality holds whenever one of the two arguments is $0$, since $\big|\sqrt x - \sqrt 0\big| = \sqrt x = |x-0|^{1/2}$. So the estimate is attained and not merely approached.
