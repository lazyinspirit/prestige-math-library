---
id: cex-the-first-mean-value-theorem-needs-a-one-signed-weight
kind: counterexample
title: "Continuous $f$ and integrable sign-changing $g$ with $\\int_a^b fg \\ne f(\\xi)\\int_a^b g$ for every $\\xi$"
status: draft
origin: session
deps: [thm-first-mean-value-theorem-for-integrals, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-oriented-integral, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-continuity-real, def-darboux-integral, def-derivative, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "the weight must not change sign"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement refuted

**False claim:** if $f$ is continuous on $[a,b]$ and $g$ is integrable on
$[a,b]$, then there is $\xi \in [a,b]$ with
$\int_a^b f g = f(\xi)\int_a^b g$.

That is [[thm-first-mean-value-theorem-for-integrals]] with the hypothesis
$g \ge 0$ deleted, and it is false. On $[-1,1]$ take

$$f(t) \;=\; t, \qquad g(t) \;=\; t .$$

Both are continuous, hence integrable, and $g$ changes sign. Then

$$\int_{-1}^{1} f g \;=\; \int_{-1}^{1} t^{2}\,\mathrm{d}t \;=\; \frac{2}{\iota(3)} \;>\; 0, \qquad \int_{-1}^{1} g \;=\; \int_{-1}^{1} t\,\mathrm{d}t \;=\; 0 ,$$

so $f(\xi)\int_{-1}^{1} g = 0$ for **every** $\xi \in [-1,1]$, while the left-hand
side is positive. No $\xi$ works.

## Facts & Assumptions

**Given:** The functions $f(t) = g(t) = t$ on $[-1,1]$, and $\xi \in [-1,1]$ arbitrary.

[L1] Every polynomial function is continuous, and a continuous function on $[-1,1]$ is integrable there ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]], [[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L2] A product of two integrable functions on $[-1,1]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L3] For $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$, and a scalar multiple of a differentiable function is differentiable with the scaled derivative ([[lem-derivative-of-a-power]], claim 2, [[thm-algebra-of-derivatives]], claim 2, [[def-derivative]]).

[L4] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$; a continuous function on an interval has a primitive ([[thm-ftc-second-part]], [[cor-primitives-of-a-continuous-function]]).

[L5] Powers and canonical naturals: $1^{2} = 1$, $(-1)^{2} = 1$, $1^{3} = 1$, $(-1)^{3} = -1$, $\iota(2) = 2 > 0$ and $\iota(3) = 3 > 0$ ([[def-integer-power]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[def-ordered-field]]).

[L6] If $u \ge 0$ is integrable then $\int_p^q u \ge 0$, and $u \cdot 0 = 0$ for every real $u$ ([[thm-monotonicity-of-the-integral]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]], [[def-oriented-integral]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ and $g$ are continuous on $[-1,1]$, hence integrable there by [L1], and $fg$, the function $t \mapsto t^{2}$, is integrable by [L1] or [L2]. [given, L1, L2]

1.2 The function $H_1(t) := t^{3}/\iota(3)$ is differentiable at every real with $H_1'(t) = \iota(3)t^{2}/\iota(3) = t^{2}$, by [L3] and [L5]. [L3, L5, construct]

1.3 The function $H_2(t) := t^{2}/\iota(2)$ is differentiable at every real with $H_2'(t) = \iota(2)\,t/\iota(2) = t$, by [L3] and [L5]. [L3, L5, construct]

2.1 By [L4] applied to $H_1$ on $[-1,1]$, $\int_{-1}^{1} t^{2}\,\mathrm{d}t = H_1(1)-H_1(-1) = 1/\iota(3) - (-1)/\iota(3) = 2/\iota(3)$, a positive real by [L5]. [step 1.1, step 1.2, L4, L5]

2.2 By [L4] applied to $H_2$ on $[-1,1]$, $\int_{-1}^{1} t\,\mathrm{d}t = H_2(1)-H_2(-1) = 1/\iota(2) - 1/\iota(2) = 0$. [step 1.1, step 1.3, L4, L5]

3.1 For every $\xi \in [-1,1]$, $f(\xi)\int_{-1}^{1} g = \xi \cdot 0 = 0$ by step 2.2 and [L6], while $\int_{-1}^{1} fg = 2/\iota(3) > 0$ by step 2.1. [step 2.1, step 2.2, L5, L6]

4.1 Hence $\int_{-1}^{1} fg \ne f(\xi)\int_{-1}^{1}g$ for every $\xi \in [-1,1]$, and the claim fails at this pair. [step 3.1, L5] ∎

## Remarks

- **What survives when the weight changes sign.** The bound $\bigl|\int_a^b fg\bigr| \le \bigl(\sup_{[a,b]}|f|\bigr)\int_a^b|g|$ still holds, by [[thm-monotonicity-of-the-integral]] applied to $-\sup|f|\,|g| \le fg \le \sup|f|\,|g|$ together with [[cor-integrability-of-absolute-values-products-and-lattice-operations]]. What is lost is the *identity*: the weighted average $\int fg / \int g$ need not be a value of $f$, and here it is not even defined.

- **Where the proof of the theorem breaks.** With $g \ge 0$ the pointwise inequalities $mg \le fg \le Mg$ survive integration and bracket $\int_a^b fg$ between $m\int_a^b g$ and $M\int_a^b g$ ([[thm-first-mean-value-theorem-for-integrals]], step 2.1 there). Multiplying $m \le f \le M$ by a $g$ that changes sign reverses the inequality where $g < 0$, so no such bracket is available, and the pair above shows that no weaker bracket can rescue the conclusion: the left-hand side is positive and the right-hand side is $0$ whatever $\xi$ is.

- **The theorem with $g \le 0$ holds too**, by applying [[thm-first-mean-value-theorem-for-integrals]] to $-g$ and using linearity; what cannot be dropped is that $g$ has *one* sign.
