---
id: cex-rolle-fails-over-a-non-complete-field
kind: counterexample
title: "Over $\\mathbb{Q}$ there is a nonconstant differentiable function with identically zero derivative, so Rolle and the mean value theorem both fail"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cex-evt-and-ivt-fail-over-a-non-complete-field, def-sequences-in-an-ordered-field, def-completeness-properties, def-rationals, thm-rat-ordered-field, thm-of-square-roots, fs-sqrt2-rational, def-integer-power, lem-power-monotone, lem-of-abs-value, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**The notion of derivative used here is stated in full, and is not imported.**
Let $F$ be an ordered field, $D \subseteq F$, $\varphi : D \to F$ and $c \in D$
a point that is not isolated in $D$, meaning that for every $\delta > 0$ in $F$
there is $x \in D$ with $0 < |x - c| < \delta$. Say $\varphi$ is
**differentiable at $c$ with derivative $L \in F$** when

$$\text{for every } \varepsilon > 0 \text{ in } F \text{ there is } \delta > 0 \text{ in } F \text{ with } \Big|\frac{\varphi(x)-\varphi(c)}{x-c} - L\Big| < \varepsilon \text{ for all } x \in D \text{ with } 0 < |x-c| < \delta,$$

and write $\varphi'(c) = L$. This is the ordinary difference-quotient condition,
read entirely inside $F$. Nothing below cites a definition of the derivative
from elsewhere in this library, because there is none yet.

**Refuted claim:** over every ordered field $F$, if
$\varphi : [a,b]_F \to F$ with $a < b$ is differentiable at every point of
$[a,b]_F$ ([[def-sequences-in-an-ordered-field]]), then

1. **(Rolle)** $\varphi(a) = \varphi(b)$ implies $\varphi'(c) = 0$ for some
   $c \in [a,b]_F$, and
2. **(Mean value)** $\varphi(b) - \varphi(a) = \varphi'(c)\,(b-a)$ for some
   $c \in [a,b]_F$.

The witness is $F = \mathbb{Q}$ and $D = [0,2]_{\mathbb{Q}}$ with

$$\varphi(x) \;=\; \begin{cases} 0 & x^2 < 2, \\ 1 & x^2 > 2, \end{cases} \qquad\text{and}\qquad \rho(x) \;=\; \varphi(x) - \frac{x}{2}.$$

$\varphi$ is well defined on $D$ because no rational squares to $2$
([[fs-sqrt2-rational]]). It is locally constant, hence differentiable everywhere
on $D$ with $\varphi' \equiv 0$, and it is not constant, since
$\varphi(0) = 0$ and $\varphi(2) = 1$; that refutes clause 2. And $\rho$
satisfies $\rho(0) = \rho(2) = 0$ while $\rho'(c) = -1/2$ for every $c$; that
refutes clause 1.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$; $D := [0,2]_{\mathbb{Q}}$; the functions $\varphi$ and $\rho$ above.

[L1] $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-ordered-field]]); closed intervals $[a,b]_F$ are as in [[def-sequences-in-an-ordered-field]].

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]]); consequently $x^2 \ne 2$ and $|x^2-2| > 0$ for every $x \in D$, and $\mathbb{Q}$ is not a complete ordered field, since a complete one would contain a square root of $2$ ([[thm-of-square-roots]], [[def-complete-ordered-field]], [[def-completeness-properties]]). This is step 1.1 and step 1.2 of [[cex-evt-and-ivt-fail-over-a-non-complete-field]].

[L3] For all $x, c \in D$: $|x^2 - c^2| \le 4\,|x - c|$, which is step 1.4 of [[cex-evt-and-ivt-fail-over-a-non-complete-field]].

[L4] Absolute value: $|u| \ge 0$, $|u| = u$ for $u \ge 0$, $|uv| = |u||v|$, and $|u| < c$ exactly when $-c < u < c$ ([[lem-of-abs-value]]); powers ([[def-integer-power]], [[lem-power-monotone]]).

[L5] Order arithmetic: a positive element is invertible with positive inverse ([[lem-of-inverse-positive]]); for $c > 0$, $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); $2 \cdot 1 > 0$ and $8 \cdot 1 > 0$ ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 Every $x \in D$ has $x^2 \ne 2$, so exactly one of $x^2 < 2$, $x^2 > 2$ holds and $\varphi$ is well defined on $D$; moreover $0^2 = 0 < 2$ and $1^2 = 1 < 2$ and $2^2 = 4 > 2$, so $\varphi(0) = \varphi(1) = 0$ and $\varphi(2) = 1$, and $\varphi$ is not constant on $D$. [L1, L2, L5]

1.2 For all $x, c \in D$ one has $|x^2 - c^2| \le 4|x-c|$. [L3]

1.3 No point of $D$ is isolated in $D$: given $c \in D$ and $\delta > 0$, let $\eta$ be the smaller of $\delta$ and $1$, and take $x := c + \eta/2$ if $c \le 1$ and $x := c - \eta/2$ otherwise; then $x \in D$ and $0 < |x - c| < \delta$. [L1, L5]

2.1 $\varphi$ is differentiable at every $c \in D$ with $\varphi'(c) = 0$. Put $A := |c^2-2| > 0$ and $\delta_0 := A\,(8)^{-1} > 0$. For $x \in D$ with $|x - c| < \delta_0$ step 1.2 gives $|x^2 - c^2| < A\,(2)^{-1}$; so if $c^2 < 2$, that is $A = 2 - c^2$, then $x^2 < c^2 + A(2)^{-1} = (c^2+2)(2)^{-1} < 2$, while if $c^2 > 2$, that is $A = c^2 - 2$, then $x^2 > c^2 - A(2)^{-1} = (c^2+2)(2)^{-1} > 2$. In either case $\varphi(x) = \varphi(c)$, so the difference quotient is $0$ for every such $x$ with $x \ne c$, and $|0 - 0| < \varepsilon$ for every $\varepsilon > 0$; the same $\delta_0$ serves for every $\varepsilon$. [step 1.1, step 1.2, step 1.3, L4, L5]

3.1 $\rho$ is differentiable at every $c \in D$ with $\rho'(c) = -1/2$: with $\delta_0$ as in step 2.1, every $x \in D$ with $0 < |x-c| < \delta_0$ has $(\rho(x)-\rho(c))(x-c)^{-1} = (\varphi(x)-\varphi(c))(x-c)^{-1} - (2)^{-1} = -(2)^{-1}$, so the quotient is constantly $-1/2$ near $c$; and $\rho(0) = 0$, $\rho(2) = 1 - 1 = 0$, $\rho(1) = -1/2$. [step 1.1, step 2.1, L5]

3.2 The mean value clause fails for $\varphi$ on $D$: $\varphi(2) - \varphi(0) = 1$ while $\varphi'(c)(2-0) = 0$ for every $c \in D$, and $1 \ne 0$. [step 1.1, step 2.1, L5]

4.1 The Rolle clause fails for $\rho$ on $D$: $\rho$ is differentiable at every point of $D$, $\rho(0) = \rho(2)$, and yet $\rho'(c) = -1/2 \ne 0$ for every $c \in D$. [step 3.1, L5]

5.1 So over the ordered field $\mathbb{Q}$, on the closed interval $D = [0,2]_{\mathbb{Q}}$, both clauses of the claim are false, and $\mathbb{Q}$ is an ordered field without the least-upper-bound property. [step 1.1, step 3.2, step 4.1, L2] ∎

## Remarks

- **Where the classical proof breaks.** Rolle's theorem is proved by taking a point where the function attains its maximum and showing the derivative vanishes there. Over $\mathbb{Q}$ the maximum need not exist: that is [[cex-evt-and-ivt-fail-over-a-non-complete-field]], proved on the same interval and by the same missing $\sqrt 2$. So this counterexample is not independent of that one, it is its consequence for the differential calculus.

- **A locally constant function need not be constant** when the domain is disconnected, and $D$ is disconnected in exactly the way $\mathbb{Q}$ is: the sets $\{x \in D : x^2 < 2\}$ and $\{x \in D : x^2 > 2\}$ are disjoint, nonempty, cover $D$, and each is open in the $\varepsilon$-$\delta$ sense. Over $\mathbb{R}$ no such split of an interval exists, and that is the connectedness that the mean value theorem really rests on.

- **The derivative here is genuinely a derivative**, not a degenerate reading: the difference quotient is not merely small near $c$, it is exactly $0$ for $\varphi$ and exactly $-1/2$ for $\rho$ on a whole punctured neighbourhood, so the limit exists in the strongest possible sense.

- **This item does not use, and does not need, a general theory of differentiation.** The difference-quotient condition is stated in the Statement refuted and every use of it above is a direct verification, so the item is self-contained and nothing here waits on a later page. As with [[cex-evt-and-ivt-fail-over-a-non-complete-field]], that is deliberate: the claim refuted is a claim about an *arbitrary* ordered field and is refuted over $\mathbb{Q}$, so a derivative defined for real functions on subsets of $\mathbb{R}$ would not apply to it. The condition above is the ordinary difference-quotient one read inside $F$, and it specialises to the real-variable definition at $F = \mathbb{R}$.
