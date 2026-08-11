---
id: ex-x-to-the-beta-separates-the-holder-classes
kind: example
title: "On $[0,1]$ the function $x^{\\beta}$ is $\\beta$-Hölder and is $\\alpha$-Hölder for no rational $\\alpha > \\beta$, so the Hölder classes are strictly nested"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lipschitz-holder-contraction, lem-real-and-metric-notions-agree, thm-metric-regularity-hierarchy, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-nth-roots-exist, def-integer-power, def-uniform-continuity-real, def-continuity-real, def-interval, def-rat-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$x^{\\beta}$ separates the Hölder classes"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Hölder condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder_condition"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "University of Zaragoza thesis on Hölder continuity"
      url: "https://zaguan.unizar.es/record/125531/files/TAZ-TFG-2022-2652.pdf"
    - title: "University of Wisconsin Math 521 exercises"
      url: "https://people.math.wisc.edu/~angenent/521.2016s/index.html"
pipeline_run: null
---

## Example

Let $\beta \in \mathbb{Q}$ with $0 < \beta \le 1$ ([[def-rat-order]]) and let

$$f_{\beta} : [0,1] \to \mathbb{R}, \qquad f_{\beta}(x) := x^{\beta}$$

be the rational power of a nonnegative base ([[def-rational-power]], with the
convention $0^{\beta} = 0$), on the closed bounded interval $[0,1]$
([[def-interval]]). Hölder conditions for a real function on $[0,1]$ are the
metric ones instantiated, by [[lem-real-and-metric-notions-agree]], clause 4:
$g$ is **$\gamma$-Hölder with constant $C$** when
$|g(x) - g(y)| \le C\,|x-y|^{\gamma}$ for all $x, y \in [0,1]$
([[def-lipschitz-holder-contraction]]). Then:

1. **$f_{\beta}$ is $\beta$-Hölder with constant $1$:**
   $$\bigl|x^{\beta} - y^{\beta}\bigr| \;\le\; |x-y|^{\beta} \qquad \text{for all } x, y \in [0,1].$$
2. **$f_{\beta}$ is $\alpha$-Hölder for no rational $\alpha$ with
   $\beta < \alpha \le 1$**: for such an $\alpha$ there is no real $C \ge 0$
   with $|x^{\beta} - y^{\beta}| \le C|x-y|^{\alpha}$ throughout $[0,1]$.
3. **The classes are nested:** if $0 < \beta < \alpha \le 1$ are rational and
   $g : [0,1] \to \mathbb{R}$ is $\alpha$-Hölder with constant $C$, then $g$ is
   $\beta$-Hölder with the same constant $C$.
4. **Hence the nesting is strict**, at every pair of rational exponents
   $0 < \beta < \alpha \le 1$: the $\alpha$-Hölder functions on $[0,1]$ form a
   **proper** subclass of the $\beta$-Hölder ones, $f_{\beta}$ lying in the
   second and not the first. Taking $\alpha = 1$: for rational $0 < \beta < 1$
   the function $f_{\beta}$ is uniformly continuous on $[0,1]$
   ([[def-uniform-continuity-real]]) and is **not** Lipschitz.

**What this witnesses.** [[thm-metric-regularity-hierarchy]] asserts Lipschitz
$\Rightarrow$ uniformly continuous $\Rightarrow$ continuous and $\alpha$-Hölder
$\Rightarrow$ uniformly continuous, and claims no converse; it says so
explicitly. This item supplies the missing witnesses on the real line, and it is
one of the two named in the remarks of [[lem-real-and-metric-notions-agree]].
The other is
[[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]], which
separates continuity from uniform continuity.

**Why the exponents are rational.** [[def-rational-power]] is the exponent theory
available at this page's position in the reading order, so the example is stated
for rational exponents. The later [[def-real-power]] supplies real exponents; the
restriction here belongs to the local toolkit, not to the Hölder notion. Exponents
above $1$ are excluded there for a reason of
substance: they force constancy
([[thm-holder-exponent-above-one-forces-constancy]]).

## Facts & Assumptions

**Given:** A rational $\beta$ with $0 < \beta \le 1$, the interval $[0,1]$, and $f_{\beta}(x) = x^{\beta}$. Naturals are identified with their canonical images in $\mathbb{R}$.

[L1] Rational powers: $a^{r}$ is defined for $a > 0$ and $r \in \mathbb{Q}$, with $a^{1} = a$ and $a^{q/1} = a^{q}$ agreeing with the integer power; $0^{r} = 0$ for rational $r > 0$; and $1^{r} = 1$ ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[lem-rational-power-monotone]]).

[L2] Laws of rational exponents for $a, b > 0$ and $r, s \in \mathbb{Q}$: $a^{r} > 0$; $a^{r+s} = a^{r}a^{s}$; $(ab)^{r} = a^{r}b^{r}$; $a^{-r} = 1/a^{r}$; $(a^{r})^{s} = a^{rs}$. The product law persists for $a, b \ge 0$ when $r > 0$ ([[lem-rational-power-laws]]).

[L3] Monotonicity: for $0 < a < 1$ and rationals $r < s$ one has $a^{r} > a^{s}$; for $a > 1$ and $r < s$ one has $a^{r} < a^{s}$; for $a = 1$ all powers are $1$; and for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L4] Hölder conditions for real functions on $[0,1]$ are $|g(x) - g(y)| \le C|x-y|^{\gamma}$ for all $x,y$, and an $\alpha$-Hölder real function with rational $0 < \alpha \le 1$ is uniformly continuous, hence continuous; "Lipschitz" is the case $\gamma = 1$ ([[lem-real-and-metric-notions-agree]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-uniform-continuity-real]], [[def-continuity-real]]).

[L5] Archimedean property: for every real $\eta > 0$ there is a natural $q \ge 1$ with $1/q < \eta$, and for every real $t$ a natural $n$ with $t < n$; and $0 < s < t$ implies $0 < 1/t < 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Absolute value and order in $\mathbb{R}$: $|u| \ge 0$; $|u| = u$ for $u \ge 0$; the order is total, so two points of $[0,1]$ may be named so that one is $\le$ the other; and $[0,1] = \{\, x : 0 \le x \le 1 \,\}$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 **For $0 \le t \le 1$ one has $t^{\beta} \ge t$.** If $t = 0$ then $t^{\beta} = 0 = t$ by [L1]; if $t = 1$ then $t^{\beta} = 1 = t$ by [L1]. If $0 < t < 1$ then, when $\beta < 1$, [L3] with $r := \beta < s := 1$ gives $t^{\beta} > t^{1} = t$, and when $\beta = 1$ it is an equality. [L1, L3, L6]

1.2 **Claim 3.** Let $0 < \beta < \alpha \le 1$ be rational and let $g$ satisfy $|g(x) - g(y)| \le C|x-y|^{\alpha}$ on $[0,1]$. For $x, y \in [0,1]$ put $a := |x-y|$, so $0 \le a \le 1$ by [L6]. If $a = 0$ then $a^{\alpha} = a^{\beta} = 0$ by [L1]; if $a = 1$ then both are $1$ by [L1]; and if $0 < a < 1$ then [L3] with $r := \beta < s := \alpha$ gives $a^{\alpha} < a^{\beta}$. In every case $a^{\alpha} \le a^{\beta}$, so $|g(x) - g(y)| \le C a^{\alpha} \le C a^{\beta}$ and $g$ is $\beta$-Hölder with the same constant. [L1, L3, L4, L6]

1.3 **Claim 2, the setup.** Let $\alpha \in \mathbb{Q}$ with $\beta < \alpha \le 1$ and suppose, for contradiction, that some real $C \ge 0$ satisfies $|x^{\beta} - y^{\beta}| \le C|x-y|^{\alpha}$ for all $x, y \in [0,1]$. Taking $x := 1$ and $y := 0$ gives $1 = |1 - 0| \le C \cdot 1 = C$ by [L1], so $C \ge 1 > 0$. Taking $y := 0$ and an arbitrary $x$ with $0 < x \le 1$ gives $x^{\beta} \le C x^{\alpha}$. [L1, L6]

2.1 **Subadditivity: $(u+v)^{\beta} \le u^{\beta} + v^{\beta}$ for all reals $u, v \ge 0$.** If $u + v = 0$ then $u = v = 0$ and both sides are $0$ by [L1]. Otherwise put $s := u+v > 0$, $p := u/s$ and $q := v/s$, so $p, q \ge 0$ and $p + q = 1$, whence $0 \le p \le 1$ and $0 \le q \le 1$. By step 1.1, $p^{\beta} \ge p$ and $q^{\beta} \ge q$, so $p^{\beta} + q^{\beta} \ge p + q = 1$. By the product law of [L2], valid for nonnegative bases since $\beta > 0$, $u^{\beta} = (p s)^{\beta} = p^{\beta}s^{\beta}$ and $v^{\beta} = q^{\beta}s^{\beta}$; hence $u^{\beta} + v^{\beta} = (p^{\beta} + q^{\beta})s^{\beta} \ge s^{\beta} = (u+v)^{\beta}$, using $s^{\beta} > 0$ from [L2]. [step 1.1, L1, L2, L6]

2.2 **Claim 2, the estimate.** Put $\gamma := \alpha - \beta$, a rational with $\gamma > 0$. For $0 < x \le 1$, dividing the inequality of step 1.3 by $x^{\alpha} > 0$ and using [L2] gives $x^{\beta - \alpha} = x^{\beta}x^{-\alpha} \le C$, that is $1/x^{\gamma} \le C$ and hence $x^{\gamma} \ge 1/C > 0$ by [L5]. Applying this at $x := 1/n$ for a natural $n \ge 1$, and using $(1/n)^{\gamma} = 1/n^{\gamma}$ from [L2], gives $n^{\gamma} \le C$ for every natural $n \ge 1$. [step 1.3, L2, L5]

3.1 **Claim 1.** Let $x, y \in [0,1]$; by [L6] name them so that $y \le x$. Put $u := y \ge 0$ and $v := x - y \ge 0$, so $x = u + v$. By step 2.1, $x^{\beta} \le y^{\beta} + (x-y)^{\beta}$, that is $x^{\beta} - y^{\beta} \le (x-y)^{\beta} = |x-y|^{\beta}$. Also $y^{\beta} \le x^{\beta}$: for $y = 0$ this reads $0 \le x^{\beta}$ by [L1] and [L2], and for $0 < y \le x$ it is [L3] with the exponent $\beta > 0$, together with equality when $y = x$. Hence $|x^{\beta} - y^{\beta}| = x^{\beta} - y^{\beta} \le |x-y|^{\beta}$, so $f_{\beta}$ is $\beta$-Hölder with constant $1$. [step 2.1, L1, L2, L3, L4, L6]

3.2 **Claim 2, the contradiction.** By [L5] fix a natural $q \ge 1$ with $1/q < \gamma$, and then a natural $n$ with $C^{q} < n$; since $C^{q} > 0$ we have $n \ge 1$, and since $C \ge 1$ we have $C^{q} \ge 1$ and so $n > 1$. By [L3] with the exponent $1/q > 0$ applied to the bases $C^{q} < n$, and by $(C^{q})^{1/q} = C^{q \cdot (1/q)} = C^{1} = C$ from [L1] and [L2], we get $n^{1/q} > C$; and by [L3] with the base $n > 1$ and the exponents $1/q < \gamma$ we get $n^{\gamma} > n^{1/q} > C$. That contradicts step 2.2, so no such $C$ exists and claim 2 holds. [step 2.2, L1, L2, L3, L5]

4.1 **Claim 4.** Let $0 < \beta < \alpha \le 1$ be rational. Every $\alpha$-Hölder function on $[0,1]$ is $\beta$-Hölder by step 1.2, and $f_{\beta}$ is $\beta$-Hölder by step 3.1 and not $\alpha$-Hölder by step 3.2; so the inclusion of classes is proper. With $\alpha := 1$ and $0 < \beta < 1$: $f_{\beta}$ is $\beta$-Hölder, hence uniformly continuous on $[0,1]$ by [L4], and it is not $1$-Hölder, that is not Lipschitz. [step 3.1, step 1.2, step 3.2, L4] ∎

## Remarks

- **The witness is as concrete as it can be here.** For $\beta = 1/2$ the function is $\sqrt{x}$, and the failure of the Lipschitz condition is the familiar one: $|\sqrt{x} - \sqrt{0}| = \sqrt{x}$ exceeds $C x$ for every $C$ once $x < 1/C^{2}$. Step 2.2 is that computation written for a general rational exponent.

- **Subadditivity is the whole of claim 1**, and it is proved by normalising to $p + q = 1$ and using $t^{\beta} \ge t$ on $[0,1]$. No derivative and no convexity argument is used; neither is available at this point in the reading order.

- **What happens at the two ends of the range.** At $\beta = 1$ the function is the identity, Lipschitz and not $\alpha$-Hölder for any rational $\alpha > 1$ — indeed no nonconstant function is, by [[thm-holder-exponent-above-one-forces-constancy]], which is why [[def-lipschitz-holder-contraction]] stops at $1$. As $\beta$ decreases the class grows, and claim 4 says it grows strictly at every rational step.
