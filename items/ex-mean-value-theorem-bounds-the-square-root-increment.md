---
id: ex-mean-value-theorem-bounds-the-square-root-increment
kind: example
title: "The mean value theorem gives $|\\sqrt{x} - \\sqrt{y}| \\le \\tfrac{1}{\\iota(2)} |x - y|$ for $x, y \\ge 1$, so the square root is Lipschitz with constant $1/2$ on $[1,\\infty)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-bounded-derivative-implies-lipschitz, prop-of-multiply-inequalities, ex-derivative-of-the-nth-root-by-the-inverse-rule, thm-nth-roots-exist, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, def-interval, lem-real-and-metric-notions-agree, def-lipschitz-holder-contraction, lem-of-abs-value, def-derivative, cor-differentiable-implies-continuous, lem-of-inverse-positive, lem-of-sign-rules, def-uniform-continuity-real, def-interior-closure-boundary-r, def-neighbourhood-r, def-limit-point-r, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "square root is $1/2$-Lipschitz on $[1,\\infty)$"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Write $\sqrt{b} = b^{1/2}$ for the nonnegative square root
([[thm-nth-roots-exist]], [[def-rational-power]]) and $\iota$ for the canonical
natural ([[def-canonical-natural]]).

**Claim.** Let $I := [1,\infty)$ and let $s : I \to \mathbb{R}$, $s(b) :=
\sqrt{b}$. Then

$$|\sqrt{x} - \sqrt{y}| \;\le\; \frac{1}{\iota(2)}\,|x - y| \qquad \text{for all } x, y \in I ,$$

so $s$ is Lipschitz with constant $1/\iota(2)$ on $I$
([[def-lipschitz-holder-contraction]], clause 3 of
[[lem-real-and-metric-notions-agree]]) and hence uniformly continuous on $I$
([[def-uniform-continuity-real]]).

**The constant is what the derivative bound gives, and the domain is what makes
the bound available.** On $[1,\infty)$ the derivative of $s$ is at most
$1/\iota(2)$; on $(0,1]$ it is not bounded at all, and the companion
counterexample on this page shows that there the Lipschitz conclusion fails.

## Facts & Assumptions

**Given:** The set $I := [1,\infty)$, order-convex with at least two elements ([[def-interval]]), and the function $s : I \to \mathbb{R}$, $s(b) := b^{1/2}$.

[L1] Derivative of the square root ([[ex-derivative-of-the-nth-root-by-the-inverse-rule]], at $n = 2$): the map $u \mapsto u^{1/2}$ on $(0,\infty)$ is differentiable at every $b > 0$ with derivative $\frac{1}{\iota(2)}b^{-1/2}$.

[L2] Restriction of the domain ([[def-derivative]]): $I \subseteq (0,\infty)$, every point of $I$ is a limit point of $I$ ([[def-limit-point-r]], [[def-interval]]), and a function differentiable at such a point remains differentiable there after restriction, with the same derivative.

[L3] A function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

[L4] Rational powers ([[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[thm-nth-roots-exist]]): $a^{r} > 0$ for $a > 0$; $a^{-r} = 1/a^{r}$; $1^{1/2} = 1$, since $1 \ge 0$ and $1^{2} = 1$ and the nonnegative square root is unique; and for rational $t > 0$, $a > 1$ implies $a^{t} > 1$ (claim 3 of the monotonicity lemma).

[L5] Order arithmetic ([[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[lem-of-naturals-positive]], [[prop-of-multiply-inequalities]]): $\iota(2) > 0$, so $1/\iota(2) > 0$ and $\iota(2) \ne 0$; $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]); a product of two positive reals is positive ([[lem-of-sign-rules]]); and the NONSTRICT multiplication of inequalities between nonnegatives, $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$, is [[prop-of-multiply-inequalities]] and is not stated by [[lem-of-sign-rules]], whose multiplicative claims are strict. Also $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]).

[L6] Interiority ([[def-interior-closure-boundary-r]], [[def-neighbourhood-r]]): $p$ is interior to $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$.

[L7] Bounded derivative gives Lipschitz ([[cor-bounded-derivative-implies-lipschitz]]): for $J$ order-convex, $h : J \to \mathbb{R}$ continuous on $J$ and differentiable at every interior point of $J$, and a real $M \ge 0$ with $|h'| \le M$ at every interior point, one has $|h(x)-h(y)| \le M|x-y|$ for all $x, y \in J$; such an $h$ is Lipschitz with constant $M$ and uniformly continuous on $J$ ([[def-lipschitz-holder-contraction]], [[lem-real-and-metric-notions-agree]], [[def-uniform-continuity-real]]).

## Verification

**Proof technique:** direct.

1.1 The interior points of $I = [1,\infty)$ are exactly the reals $b > 1$. For $b > 1$ the neighbourhood $N_{b-1}(b)$ is contained in $(1,\infty) \subseteq I$, so $b$ is interior; the point $1$ is not interior, since $1 - \varepsilon/2 \in N_{\varepsilon}(1)$ and $1 - \varepsilon/2 \notin I$ for every real $\varepsilon > 0$; and every interior point of $I$ lies in $I$, hence is $\ge 1$. [L6]

1.2 For every real $b \ge 1$ one has $b^{-1/2} \le 1$. If $b = 1$ then $1^{1/2} = 1$ by [L4], so $1^{-1/2} = 1/1 = 1$. If $b > 1$ then $b^{1/2} > 1$ by [L4], and $b^{1/2} > 0$, so $b^{-1/2} = 1/b^{1/2} < 1$ by [L4] and [L5]. [L4, L5]

2.1 By [L1] and [L2] the function $s$ is differentiable at every $b \in I$ with $s'(b) = \frac{1}{\iota(2)}b^{-1/2}$, and by [L3] it is continuous at every point of $I$, hence continuous on $I$. [step 1.1, L1, L2, L3]

3.1 At every interior point $b$ of $I$ one has $b > 1$ by step 1.1, so $b^{-1/2} > 0$ by [L4] and $b^{-1/2} \le 1$ by step 1.2; multiplying the pair $0 \le b^{-1/2} \le 1$ and $0 \le 1/\iota(2) \le 1/\iota(2)$ as in [L5] gives $0 < s'(b) \le 1/\iota(2)$ by step 2.1, and therefore $|s'(b)| = s'(b) \le 1/\iota(2)$ by [L5]. [step 1.1, step 1.2, step 2.1, L4, L5]

4.1 Apply [L7] with $J := I$, $h := s$ and $M := 1/\iota(2)$, a real $\ge 0$ by [L5]: the hypotheses hold by step 2.1 for the continuity and differentiability and by step 3.1 for the bound, so $|s(x)-s(y)| \le \frac{1}{\iota(2)}|x-y|$ for all $x, y \in I$, that is $|\sqrt{x} - \sqrt{y}| \le \frac{1}{\iota(2)}|x-y|$; $s$ is Lipschitz with constant $1/\iota(2)$ on $I$; and $s$ is uniformly continuous on $I$. [step 2.1, step 3.1, L5, L7] ∎

## Remarks

- **Why the bound is $1/2$ and not something smaller.** The supremum of $s'$ over $(1,\infty)$ is approached at $b = 1$, where $s'(1) = 1/\iota(2)$, and the argument uses nothing sharper than $b^{-1/2} \le 1$. No claim is made that $1/\iota(2)$ is the least Lipschitz constant on $I$; the corollary produces one constant that works, which is all the statement asserts.

- **Everything depends on the left endpoint being $1$ and not $0$.** The bound $b^{-1/2} \le 1$ is exactly the statement $b \ge 1$, read through the monotonicity of rational powers. On $(0,1]$ the same expression is unbounded, and [[cex-differentiable-with-unbounded-derivative-is-not-lipschitz]] on this page shows the conclusion then fails outright, so the hypothesis of [[cor-bounded-derivative-implies-lipschitz]] is doing real work here.

- **The mean value theorem is inside the corollary, not applied directly.** [[cor-bounded-derivative-implies-lipschitz]] is one application of [[cor-mean-value-theorem]] on the segment joining $x$ and $y$; quoting the packaged form avoids repeating the segment argument and, more importantly, avoids restating the endpoint conventions each time.
