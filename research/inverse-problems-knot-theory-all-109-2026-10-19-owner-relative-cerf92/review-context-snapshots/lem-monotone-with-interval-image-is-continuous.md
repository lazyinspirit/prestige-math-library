---
id: lem-monotone-with-interval-image-is-continuous
kind: lemma
title: "A function on an interval satisfying $f(x) \\le f(y)$ whenever $x \\le y$, whose image is order-convex, is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, def-interval, thm-connected-subsets-of-r-are-intervals, def-connected-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-monotone-darboux-implies-continuous]
landmark: true
short: "monotone with order-convex image is continuous"
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ satisfy

$$f(x) \le f(y) \qquad \text{whenever } x, y \in I \text{ and } x \le y .$$

If the image $f[I]$ is order-convex, then $f$ is continuous on $I$
([[def-continuity-real]]).

**No definition of a monotone function is used, and none is available at this
point in the reading order.** The hypothesis is written out as the displayed
inequality; the classification of monotone functions and their discontinuities
comes later in the library. Equivalently, by
[[thm-connected-subsets-of-r-are-intervals]], the hypothesis on the image is
that $f[I]$ is connected ([[def-connected-r]]).

**The hypothesis on the image cannot be dropped.** Define $f$ on $I = [0,1]$ by
$f(x) := x$ for $x < 1$ and $f(1) := 2$. It satisfies the displayed inequality,
its image is $[0,1) \cup \{2\}$, which is not order-convex, and it is not
continuous at $1$: no $\delta$ works for $\varepsilon = 1/2$, since points of
$[0,1)$ arbitrarily close to $1$ have values close to $1$, at distance close to
$1$ from $f(1) = 2$.

**This is a genuine converse to the intermediate value property, in the presence
of the inequality.** It does not need one-sided limits of monotone functions,
which are not available at this point in the reading order; the entire proof is
the two paragraphs below, which read the required $\delta$ off the image.

## Facts & Assumptions

**Given:** An order-convex set $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$ with $f(x) \le f(y)$ whenever $x, y \in I$ and $x \le y$, such that $f[I]$ is order-convex; and a point $c \in I$ together with a real $\varepsilon > 0$.

[L1] Continuity of $f$ at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in I$ satisfying $|x - c| < \delta$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Order-convexity of $f[I]$: if $u, v \in f[I]$ and $u \le w \le v$ then $w \in f[I]$ ([[def-interval]]); equivalently $f[I]$ is connected ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]]).

[L3] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality of the order, so any two reals are comparable and exactly one of $r < c$, $r = c$, $r > c$ holds; $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $f(c) - \varepsilon < f(c) - \varepsilon/2 < f(c)$ ([[def-ordered-field]]).

[L4] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Absolute value: for $s > 0$, $|t| < s$ holds exactly when $-s < t < s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **A point of $I$ below $c$ with a value close to $f(c)$, when one exists at all.** Suppose some $p \in I$ has $p < c$. We claim there is $q \in I$ with $q < c$ and $f(q) > f(c) - \varepsilon$. If there were none, then $f(q) \le f(c) - \varepsilon$ for every $q \in I$ with $q < c$, and in particular $f(p) \le f(c) - \varepsilon$. Put $w := f(c) - \varepsilon/2$, so $f(p) \le f(c) - \varepsilon < w < f(c)$ by [L3]. Since $f(p), f(c) \in f[I]$, [L2] gives $r \in I$ with $f(r) = w$. By [L3] exactly one of $r < c$, $r = c$, $r > c$ holds: the first gives $w = f(r) \le f(c) - \varepsilon < w$, the second gives $w = f(c)$, and the third gives $w = f(r) \ge f(c)$ by the monotonicity hypothesis; each contradicts $f(c) - \varepsilon < w < f(c)$. So the claimed $q$ exists. [L2, L3]

2.1 **The left radius.** If some $p \in I$ has $p < c$, fix $q$ as in step 1.1 and put $\delta_1 := c - q > 0$; then every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $q < x \le c$, hence $f(q) \le f(x) \le f(c)$ by monotonicity, hence $f(c) - \varepsilon < f(x) \le f(c)$. If no point of $I$ lies below $c$, put $\delta_1 := 1$; then the only $x \in I$ with $c - \delta_1 < x \le c$ is $x = c$, for which $f(c) - \varepsilon < f(c) = f(x) \le f(c)$ holds as well. In both cases $\delta_1 > 0$ and every $x \in I$ with $c - \delta_1 < x \le c$ satisfies $f(c) - \varepsilon < f(x) \le f(c)$. [step 1.1, L3, choose]

2.2 **The right radius, symmetrically.** Suppose some $p \in I$ has $p > c$. If every $s \in I$ with $s > c$ had $f(s) \ge f(c) + \varepsilon$, then with $w' := f(c) + \varepsilon/2$ we would have $f(c) < w' < f(c) + \varepsilon \le f(p)$, so [L2] would give $r \in I$ with $f(r) = w'$; but by [L3] exactly one of $r > c$, $r = c$, $r < c$ holds, and the first gives $w' = f(r) \ge f(c) + \varepsilon > w'$, the second gives $w' = f(c)$, and the third gives $w' = f(r) \le f(c)$ by the monotonicity hypothesis, each contradicting $f(c) < w' < f(c) + \varepsilon$. So there is $s \in I$ with $s > c$ and $f(s) < f(c) + \varepsilon$; put $\delta_2 := s - c > 0$. If no point of $I$ lies above $c$, put $\delta_2 := 1$. In both cases $\delta_2 > 0$ and every $x \in I$ with $c \le x < c + \delta_2$ satisfies $f(c) \le f(x) < f(c) + \varepsilon$. [step 1.1, L2, L3, choose]

3.1 **Combining.** Put $\delta := \min\{\delta_1, \delta_2\}$, which is a positive real by [L4]. Let $x \in I$ with $|x - c| < \delta$, so $c - \delta < x < c + \delta$ by [L5]. By totality either $x \le c$, and then $c - \delta_1 \le c - \delta < x \le c$, so step 2.1 gives $f(c) - \varepsilon < f(x) \le f(c)$; or $x \ge c$, and then $c \le x < c + \delta \le c + \delta_2$, so step 2.2 gives $f(c) \le f(x) < f(c) + \varepsilon$. In either case $-\varepsilon < f(x) - f(c) < \varepsilon$, that is $|f(x) - f(c)| < \varepsilon$ by [L5]. [step 2.1, step 2.2, L3, L4, L5]

4.1 The point $c \in I$ and the real $\varepsilon > 0$ were arbitrary, so by [L1] the function $f$ is continuous at every point of $I$, that is, continuous on $I$. [step 3.1, L1] ∎

## Remarks

- **Where order-convexity of the image is used, and where it is not.** It is used exactly twice, in steps 1.1 and 2.2, each time to convert a value strictly between two attained values into an attained value. Nothing else in the argument looks at the image. In particular, no continuity of $f$ is assumed anywhere, which is what makes the lemma a converse rather than a reformulation.

- **The endpoint cases are not a technicality.** If $c$ is the left endpoint of $I$ there is no point of $I$ below it, and the left half of the estimate is vacuous; the same at the right. Handling them by the fixed radius $1$ keeps the proof free of any hypothesis that $I$ be open or nondegenerate.

- **What this lemma is for.** It is the standard route to continuity of a function defined by a monotone construction whose image is known independently — the Cantor function is the classical instance, its image being all of $[0,1]$ — and it is stated here as a standalone lemma so that a later page may cite it rather than repeat the argument.
