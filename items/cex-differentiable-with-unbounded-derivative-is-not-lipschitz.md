---
id: cex-differentiable-with-unbounded-derivative-is-not-lipschitz
kind: counterexample
title: "$x \\mapsto \\sqrt{x}$ on $(0,1]$ is differentiable with unbounded derivative and is not Lipschitz there, so the boundedness hypothesis in the Lipschitz corollary cannot be dropped"
status: published
origin: session
deps: [cor-bounded-derivative-implies-lipschitz, ex-derivative-of-the-nth-root-by-the-inverse-rule, def-derivative, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-nth-roots-exist, def-bounded-set, def-interval, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-sign-rules, prop-of-multiply-inequalities, lem-power-monotone, def-integer-power, cor-differentiable-implies-continuous, def-interior-closure-boundary-r, def-neighbourhood-r, def-canonical-natural, lem-of-naturals-positive, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "unbounded derivative, not Lipschitz"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Square root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $I \subseteq \mathbb{R}$ be order-convex
([[def-interval]]) and let $h : I \to \mathbb{R}$ be continuous on $I$ and
differentiable at every interior point of $I$ ([[def-derivative]]). Then $h$ is
Lipschitz on $I$, that is, there is a real $L \ge 0$ with
$|h(x)-h(y)| \le L|x-y|$ for all $x, y \in I$
([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]).

That is [[cor-bounded-derivative-implies-lipschitz]] with the hypothesis
$|h'| \le M$ deleted. It is false, and the witness is the square root on
$(0,1]$: an interval on which the derivative exists at every interior point and
is bounded above by no real.

## Facts & Assumptions

**Given:** The set $I := (0,1]$, order-convex with at least two elements ([[def-interval]]), and the function $s : I \to \mathbb{R}$, $s(b) := b^{1/2}$, the nonnegative square root ([[thm-nth-roots-exist]], [[def-rational-power]]); numerals denote canonical naturals ([[def-canonical-natural]]).

[L1] Derivative of the square root ([[ex-derivative-of-the-nth-root-by-the-inverse-rule]], at $n = 2$, with the restriction clause of [[def-derivative]] and $I \subseteq (0,\infty)$): $s$ is differentiable at every $b \in I$ with $s'(b) = \frac{1}{\iota(2)}b^{-1/2}$, every point of $I$ being a limit point of $I$ ([[def-limit-point-r]]).

[L2] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

[L3] Uniqueness of the nonnegative square root ([[thm-nth-roots-exist]]): for $a \ge 0$ there is exactly one $t \ge 0$ with $t^{2} = a$, and it is $a^{1/2}$ ([[def-rational-power]], [[def-integer-power]]).

[L4] Rational powers ([[lem-rational-power-laws]], [[lem-rational-power-monotone]]): $a^{r} > 0$ for $a > 0$; $a^{-r} = 1/a^{r}$; $(a^{r})^{s} = a^{rs}$; and for rational $r > 0$, $0 < a < b$ implies $a^{r} < b^{r}$ (claim 2 of the monotonicity lemma).

[L5] Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]): for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$.

[L6] Order and numeral arithmetic ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[prop-of-multiply-inequalities]], [[lem-of-naturals-positive]], [[lem-power-monotone]], [[lem-of-abs-value]], [[def-canonical-natural]]): $\iota(m) > 0$ for $m \ge 1$; $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); a product of positives is positive and multiplying a STRICT inequality by a positive real preserves it ([[lem-of-sign-rules]]); the NONSTRICT form, $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$, is not stated by [[lem-of-sign-rules]], whose multiplicative claims are strict, but by [[prop-of-multiply-inequalities]], and it is what licenses both multiplying a $\le$ by a positive real and dividing a $\le$ by one, the divisor entering as its positive inverse; $0 \le a \le b$ gives $a^{2} \le b^{2}$ ([[lem-power-monotone]], claim 2); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); and $\iota(mn) = \iota(m)\iota(n)$ and $\iota(m+n) = \iota(m)+\iota(n)$ for naturals $m, n \ge 1$, so $\iota(2)^{2} = \iota(4)$, $\iota(2) - 1 = 1$ and $\iota(4) - 1 = \iota(3)$.

[L7] Interiority and boundedness ([[def-interior-closure-boundary-r]], [[def-neighbourhood-r]], [[def-bounded-set]]): $p$ is interior to $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$; and a set of reals is bounded above when some real exceeds or equals all of its elements.

[L8] The corollary under test ([[cor-bounded-derivative-implies-lipschitz]]) additionally requires a real $M \ge 0$ with $|h'| \le M$ at every interior point.

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the function $s$ is differentiable at every $b \in I$ with $s'(b) = \frac{1}{\iota(2)}b^{-1/2} > 0$, using [L4] and [L6]; and by [L2] it is continuous at every point of $I$, hence continuous on $I$. [L1, L2, L4, L6]

1.2 The interior points of $I = (0,1]$ are exactly the reals $b$ with $0 < b < 1$: for such a $b$ the neighbourhood $N_{\rho}(b)$ with $\rho := \min\{b,\ 1-b\} > 0$ lies in $(0,1) \subseteq I$; the point $1$ is not interior, since $1 + \varepsilon/2 \in N_{\varepsilon}(1)$ and $1 + \varepsilon/2 \notin I$ for every real $\varepsilon > 0$; and every interior point lies in $I$. [L7]

2.1 **The derivative is bounded above by no real.** Let $K$ be a real. If $K \le 0$, any $b$ with $0 < b < 1$ has $s'(b) > 0 \ge K$ by step 1.1. If $K > 0$, put $\beta := \bigl(1/(\iota(2)K)\bigr)^{2}$, a positive real, and use [L5] to fix a natural $m \ge 1$ with $1/\iota(m) < \min\{\beta,\ 1\}$; put $b := 1/\iota(m)$, so $0 < b < 1$ and $b < \beta$. By [L4], $b^{1/2} < \beta^{1/2} = \bigl(1/(\iota(2)K)\bigr)^{2 \cdot (1/2)} = 1/(\iota(2)K)$, so $b^{-1/2} = 1/b^{1/2} > \iota(2)K$ by [L6], and hence $s'(b) = \frac{1}{\iota(2)}b^{-1/2} > K$. So for every real $K$ there is an interior point $b$ of $I$ with $s'(b) > K$, and the set of values of $s'$ on the interior of $I$ is bounded above by no real. [step 1.1, step 1.2, L4, L5, L6, L7]

2.2 **$s$ is not Lipschitz on $I$.** Suppose some real $L \ge 0$ satisfied $|s(x)-s(y)| \le L|x-y|$ for all $x, y \in I$. Let $t$ be a real with $0 < t \le 1/\iota(2)$, and put $x := t^{2}$ and $y := \iota(4)t^{2}$. Then $0 < x \le y = \iota(4)t^{2} \le \iota(4)/\iota(4) = 1$, so $x, y \in I$; and $s(x) = t$ and $s(y) = \iota(2)t$ by [L3], since $t \ge 0$ with $t^{2} = x$ and $\iota(2)t \ge 0$ with $(\iota(2)t)^{2} = \iota(4)t^{2} = y$. Hence $|s(y)-s(x)| = \iota(2)t - t = t$ and $|y - x| = \iota(3)t^{2}$ by [L6], and the supposition gives $t \le L\,\iota(3)t^{2}$; dividing by $t > 0$ gives $1 \le \iota(3)Lt$ for every such $t$. Taking $t := 1/\iota(2)$ shows $\iota(3)L/\iota(2) \ge 1$, so $L > 0$. Now use [L5] to fix a natural $m \ge 1$ with $1/\iota(m) < 1/(\iota(3)L)$ and put $t := \min\{1/\iota(m),\ 1/\iota(2)\}$, a real with $0 < t \le 1/\iota(2)$; then $\iota(3)Lt \le \iota(3)L/\iota(m) < 1$, contradicting $1 \le \iota(3)Lt$. So no such $L$ exists. [step 1.1, L3, L4, L5, L6]

3.1 The refuted claim therefore fails at $I := (0,1]$ and $h := s$: by step 1.1 the function $s$ is continuous on the order-convex set $I$ and differentiable at every point of $I$, in particular at every interior point of $I$ by step 1.2, and yet by step 2.2 it is not Lipschitz on $I$. Nothing in [L8] is contradicted: by step 2.1 no real $M$ bounds $|s'|$ on the interior of $I$, so the hypothesis deleted from that corollary is exactly the one that fails. [step 1.1, step 1.2, step 2.1, step 2.2, L8] ∎

## Remarks

- **The two failures are separate statements, and both are proved.** That the derivative is unbounded (step 2.1) does not by itself refute the claim, since the claim is about a Lipschitz bound and not about $s'$; and the Lipschitz bound is refuted directly, by a pair of points whose square roots differ by $t$ while the points themselves differ by $\iota(3)t^{2}$. Only step 2.1 is needed to say **which** hypothesis of [[cor-bounded-derivative-implies-lipschitz]] is the one that fails.

- **Contrast with the same function on $[1,\infty)$.** There the derivative is bounded by $1/\iota(2)$ and the corollary applies, which is [[ex-mean-value-theorem-bounds-the-square-root-increment]] on this page. The function is the same; the interval is what decides. That is the sense in which the Lipschitz property is a property of the pair (function, domain), exactly as [[def-uniform-continuity-real]] records for uniform continuity.

- **What is not claimed.** This item asserts the failure of the Lipschitz condition on $(0,1]$ and nothing more. In particular nothing above says whether $s$ is uniformly continuous on $(0,1]$, nor whether it satisfies a Hölder condition of some exponent below $1$ there; those are separate questions, and no item on this page is entitled to be cited for either.
