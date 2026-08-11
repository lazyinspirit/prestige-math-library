---
id: thm-holder-exponent-above-one-forces-constancy
kind: theorem
title: "If $|f(x) - f(y)| \\le C|x-y|^{\\alpha}$ on an interval for some rational $\\alpha > 1$ then $f$ is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-nth-roots-exist, def-integer-power, def-interval, def-finite-sum, lem-finite-sum-laws, lem-triangle-inequality-finite, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-abs-value, def-rat-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-holder-above-one-constant]
forward_refs: [ex-x-to-the-beta-separates-the-holder-classes]
landmark: true
short: "Hölder exponent above 1 forces constancy"
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
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "Cornell numerical methods notes: Calculus"
      url: "https://www.cs.cornell.edu/~bindel/nmds/00-Background/04-Calculus.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$, let $C \in \mathbb{R}$ with $C \ge 0$, and let
$\alpha \in \mathbb{Q}$ with $\alpha > 1$ ([[def-rat-order]]). Suppose

$$|f(x) - f(y)| \;\le\; C\,|x - y|^{\alpha} \qquad \text{for all } x, y \in I ,$$

the power being the rational power of a nonnegative base
([[def-rational-power]], with the convention $0^{\alpha} = 0$ for $\alpha > 0$).
Then $f$ is **constant** on $I$: $f(x) = f(y)$ for all $x, y \in I$.

**The hypothesis is written out, and not expressed through
[[def-lipschitz-holder-contraction]], because it cannot be.** That definition
introduces the $\alpha$-Hölder condition for rational $\alpha$ with
$0 < \alpha \le 1$ only, and says explicitly that no claim is made about an
exponent above $1$. The displayed inequality is the natural extension of the
formula to $\alpha > 1$, and this theorem is what that extension is worth: for
rational $0 < \alpha \le 1$ the same inequality is the $\alpha$-Hölder
condition of [[def-lipschitz-holder-contraction]] instantiated at
$I \subseteq \mathbb{R}$ by [[lem-real-and-metric-notions-agree]], clause 4, and
then it makes $f$ uniformly continuous, hence continuous
([[thm-metric-regularity-hierarchy]], [[def-continuity-real]]); above $1$ it
makes $f$ constant, which is why the definition stops at $1$.

**Order-convexity is essential.** On a domain that is not order-convex the
conclusion fails: on $I = \{0\} \cup \{1\}$ the function $f(0) = 0$, $f(1) = 1$
satisfies the inequality with $C = 1$ and any $\alpha$, and is not constant.
What the proof uses is that the whole segment between two points of $I$ lies in
$I$, so that the distance between them can be subdivided.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a function $f : I \to \mathbb{R}$, a real $C \ge 0$ and a rational $\alpha > 1$ with $|f(x) - f(y)| \le C|x-y|^{\alpha}$ for all $x, y \in I$. Natural numbers are identified with their canonical images in $\mathbb{R}$, as elsewhere in this library.

[L1] Order-convexity: $x, y \in I$ with $x \le z \le y$ gives $z \in I$ ([[def-interval]]).

[L2] Rational powers of a positive base: $a^{r}$ is defined for $a > 0$ and $r \in \mathbb{Q}$, with $a^{1} = a$ and $a^{q/1} = a^{q}$ agreeing with the integer power; and $0^{r} = 0$ for rational $r > 0$ ([[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]]).

[L3] Laws of rational exponents for $a, b > 0$ and $r, s \in \mathbb{Q}$: $a^{r} > 0$; $a^{r+s} = a^{r}a^{s}$; $(ab)^{r} = a^{r}b^{r}$; $a^{-r} = 1/a^{r}$; $(a^{r})^{s} = a^{rs}$ ([[lem-rational-power-laws]]).

[L4] Monotonicity of rational powers: for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$; and for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$ ([[lem-rational-power-monotone]]).

[L5] Finite sums: $\sum_{k<n}(c_{k+1} - c_k) = c_n - c_0$; $\sum_{k<n} \lambda = n\lambda$; and $\bigl|\sum_{k<n} a_k\bigr| \le \sum_{k<n} |a_k|$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[lem-triangle-inequality-finite]]).

[L6] Archimedean property: for every real $t$ there is a natural $m \ge 1$ with $t < m$; and for every real $\eta > 0$ there is a natural $q \ge 1$ with $1/q < \eta$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L7] Reciprocals: $0 < s \le t$ implies $0 < 1/t \le 1/s$, and $0 < s < t$ implies $1/t < 1/s$ ([[lem-of-inverse-positive]]).

[L8] Absolute value and ordered-field arithmetic: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$; the order is total; a real that is $\ge 0$ and smaller than every positive real is $0$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Normalisations.** Since $|x-y|^{\alpha} \ge 0$ by [L2] and [L3], the hypothesis with the constant $C$ implies the same inequality with the constant $C + 1 > 0$; so we may and do assume $C > 0$. Also, the hypothesis and the conclusion are symmetric in $x$ and $y$ and are trivial when $x = y$, so it suffices to prove $f(x) = f(y)$ for $x, y \in I$ with $x < y$; fix such a pair and put $A := C\,(y-x)^{\alpha}$, a real with $A > 0$ by [L3]. [L2, L3, L8, suffices: prove it for C positive and x strictly less than y]

1.2 **The exponent gap.** Put $\beta := \alpha - 1$, a rational with $\beta > 0$. By [L6] fix a natural $q \ge 1$ with $1/q < \beta$. [L6, choose]

1.3 **Subdividing.** Let $n \in \mathbb{N}$ with $n \ge 1$ and put $h := (y-x)/n > 0$ and $t_k := x + k h$ for $k \in \mathbb{N}$. For $k \le n$ one has $x \le t_k \le y$, so $t_k \in I$ by [L1]; and $|t_{k+1} - t_k| = h$ for $k < n$. Define the sequence $c : \mathbb{N} \to \mathbb{R}$ by $c_k := f\bigl(t_{\min\{k,n\}}\bigr)$, so that $c_0 = f(x)$, $c_n = f(y)$, and $c_{k+1} - c_k = f(t_{k+1}) - f(t_k)$ for every $k < n$. [L1, L8]

2.1 **The telescoped estimate.** By [L5], $f(y) - f(x) = c_n - c_0 = \sum_{k<n}(c_{k+1} - c_k)$, hence $|f(y) - f(x)| \le \sum_{k<n} |c_{k+1} - c_k| = \sum_{k<n} |f(t_{k+1}) - f(t_k)| \le \sum_{k<n} C h^{\alpha} = n\,C\,h^{\alpha}$, the middle inequality being the hypothesis applied to the pair $t_k, t_{k+1}$ of points of $I$ and the last equality being the constant-sum rule of [L5]. [step 1.3, L5]

2.2 **The bound can be made arbitrarily small.** Let a real $\eta > 0$ be given and put $R := A/\eta > 0$. By [L6] fix a natural $N$ with $R^{q} < N$; then $N \ge 1$, since $R^{q} > 0$ by [L3] and [L2]. By [L4] applied with the rational exponent $1/q > 0$ to the bases $R^{q} < N$, and by [L2] and [L3] which give $(R^{q})^{1/q} = R^{q \cdot (1/q)} = R^{1} = R$, we get $N^{1/q} > R$. [step 1.1, step 1.2, L2, L3, L4, L6, choose]

3.1 **Rewriting the bound.** By [L3], $h^{\alpha} = \bigl((y-x)\cdot n^{-1}\bigr)^{\alpha} = (y-x)^{\alpha}\,(n^{-1})^{\alpha} = (y-x)^{\alpha}\,n^{-\alpha}$, and $n\,n^{-\alpha} = n^{1}n^{-\alpha} = n^{1-\alpha} = n^{-\beta} = 1/n^{\beta}$. Hence $n\,C\,h^{\alpha} = A/n^{\beta}$, and step 2.1 gives $|f(y) - f(x)| \le A/n^{\beta}$ for every natural $n \ge 1$. [step 1.1, step 1.2, step 2.1, L2, L3]

3.2 By [L4], $N^{1/q} \le N^{\beta}$: this is an equality if $N = 1$, since then both sides are $1$ by [L3], and it is the strict inequality of [L4] for the base $N > 1$ and the exponents $1/q < \beta$. Hence $N^{\beta} \ge N^{1/q} > R > 0$, so $1/N^{\beta} < 1/R$ by [L7] and therefore $A/N^{\beta} < A/R = \eta$. [step 1.2, step 2.2, L3, L4, L7]

4.1 Combining steps 3.1 and 3.2, $|f(y) - f(x)| \le A/N^{\beta} < \eta$. The real $\eta > 0$ was arbitrary and $|f(y) - f(x)| \ge 0$, so $|f(y) - f(x)| = 0$ by [L8], that is $f(y) = f(x)$. Since $x < y$ in $I$ were arbitrary, and by the reduction of step 1.1, $f$ is constant on $I$. [step 1.1, step 3.1, step 3.2, L8] ∎

## Remarks

- **The mechanism in one line.** Splitting $[x,y]$ into $n$ equal pieces costs $n$ applications of the hypothesis, each of size $C(|x-y|/n)^{\alpha}$, for a total of $C|x-y|^{\alpha}n^{1-\alpha}$. For $\alpha = 1$ the factor $n^{1-\alpha}$ is $1$ and the estimate says nothing new; for $\alpha < 1$ it grows and the estimate is useless; only for $\alpha > 1$ does it tend to $0$, and then it forces the increment to vanish.

- **Why the vanishing of $n^{1-\alpha}$ is proved rather than asserted.** Neither real exponents nor a general theorem of the form $n^{-\beta}\to0$ is available at this point in the reading order, so the proof supplies the one rational instance it needs. The general real-power theory is developed later in [[def-real-power]]. Steps 2.2 and 3.2 supply the one instance that is needed, by reducing to the exponent $1/q$ with $q$ a natural number, where the $q$-th root of [[thm-nth-roots-exist]] and the Archimedean property do the work.

- **The boundary case $\alpha = 1$ is exactly the Lipschitz condition**, which does not force constancy: the identity is $1$-Lipschitz and not constant. So the theorem is sharp at the endpoint of the range that [[def-lipschitz-holder-contraction]] admits, and the strict nesting of the classes below $1$ is witnessed on the companion page by [[ex-x-to-the-beta-separates-the-holder-classes]].
