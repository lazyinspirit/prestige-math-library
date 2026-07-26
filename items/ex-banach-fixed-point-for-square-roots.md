---
id: ex-banach-fixed-point-for-square-roots
kind: example
title: "The map $x \\mapsto (x + 2/x)/2$ is a contraction of $[1,2]$ with fixed point $\\sqrt{2}$, and the a priori bound gives the error after $n$ steps"
status: published
origin: session
deps: [thm-banach-fixed-point, cor-banach-error-estimates, def-lipschitz-holder-contraction,
       thm-of-square-roots, thm-euclidean-space-complete, def-interval,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       thm-complete-subspace-iff-closed, thm-metric-sequential-closure,
       lem-limit-preserves-order, lem-of-inverse-positive, lem-of-square-monotone,
       def-integer-power, lem-of-abs-value, lem-of-sign-rules, def-metric-space,
       def-metric-topology, def-metric-convergence, def-complete-metric-space,
       lem-of-square-positive]
justified_by: []
aliases: []
landmark: true
short: "Newton iteration for $\\sqrt{2}$"
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
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
pipeline_run: null
---

## Example

Let $X := [1,2] \subseteq \mathbb{R}$ ([[def-interval]]) with the metric
$d(x,y) = |x-y|$ inherited from $\mathbb{R}$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and
define

$$f(x) \;:=\; \frac{x + 2/x}{2} \;=\; \frac{x}{2} + \frac{1}{x} .$$

Then:

1. $(X,d)$ is a nonempty complete metric space
   ([[def-complete-metric-space]]).
2. $f$ maps $X$ into $X$.
3. $f$ is a contraction with constant $q = 1/2$
   ([[def-lipschitz-holder-contraction]]).
4. $f$ has exactly one fixed point in $X$, namely $\sqrt{2}$
   ([[thm-of-square-roots]]), and the iterates $x_{n+1} = f(x_n)$ converge to it
   from every starting point $x_0 \in X$ ([[thm-banach-fixed-point]]).
5. Starting from $x_0 = 1$ one has $x_1 = 3/2$ and $d(x_1,x_0) = 1/2$, so the a
   priori bound of [[cor-banach-error-estimates]] reads
   $$\big|\sqrt{2} - x_n\big| \;\le\; \frac{(1/2)^n \cdot (1/2)}{1 - 1/2} \;=\; \Big(\tfrac{1}{2}\Big)^{n},$$
   and the a posteriori bound reads
   $\big|\sqrt{2} - x_{n+1}\big| \le |x_{n+1} - x_n|$.

## Facts & Assumptions

**Given:** The interval $X = [1,2]$ with the metric inherited from $\mathbb{R}$, and $f(x) = x/2 + 1/x$ for $x \in X$; reals $x, y \in X$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, a restriction of a metric is a metric, and $|uv| = |u||v|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] $\mathbb{R}$ is complete; a closed subset of a complete metric space is complete; a subset is closed exactly when it is sequentially closed; and limits preserve non-strict inequalities ([[thm-euclidean-space-complete]], [[thm-complete-subspace-iff-closed]], [[thm-metric-sequential-closure]], [[lem-limit-preserves-order]], [[def-metric-topology]], [[def-metric-convergence]]).

[L3] Every $a \ge 0$ has a unique $\sqrt{a} \ge 0$ with $(\sqrt a)^2 = a$, and $\sqrt{a}\sqrt{b} = \sqrt{ab}$ for $a,b \ge 0$, since both sides are nonnegative with the same square ([[thm-of-square-roots]], [[def-integer-power]]).

[L4] For $a,b \ge 0$: $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]); and squares are nonnegative ([[lem-of-square-positive]]).

[L5] Positivity of inverses, reversal of order under reciprocation, and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L6] Banach's fixed point theorem and its error estimates ([[thm-banach-fixed-point]], [[cor-banach-error-estimates]], [[def-lipschitz-holder-contraction]]).

## Verification

**Proof technique:** direct.

1.1 $X$ is nonempty, since $1 \in X$; and $X$ is sequentially closed in $\mathbb{R}$, since a sequence in $X$ converging to a real $p$ has $1 \le x_k \le 2$ for every $k$ and hence $1 \le p \le 2$. So $X$ is closed in $\mathbb{R}$, and $\mathbb{R}$ is complete, so $(X,d)$ is a nonempty complete metric space: claim 1. [L1, L2]

1.2 $\sqrt{2}$ lies in $X$: $1^2 = 1 \le 2$ and $2^2 = 4 \ge 2$, so $1 \le \sqrt 2 \le 2$. [L3, L4]

1.3 For $x \in X$ one has $x \ge 1 > 0$, so $f(x)$ is defined, and $\big(\sqrt{x} - \sqrt{2/x}\big)^2 \ge 0$ expands to $x + 2/x \ge 2\sqrt{x}\sqrt{2/x} = 2\sqrt{2}$; hence $f(x) \ge \sqrt 2 \ge 1$. [L3, L4, L5]

1.4 For $x,y \in X$: $f(x) - f(y) = \frac{x-y}{2} + \Big(\frac{1}{x} - \frac{1}{y}\Big) = \frac{x-y}{2} + \frac{y-x}{xy} = (x-y)\Big(\frac{1}{2} - \frac{1}{xy}\Big)$. [L5]

2.1 Also $1 \le x \le 2$ gives $x/2 \le 1$ and $1/x \le 1$, so $f(x) \le 2$; with step 1.3 this puts $f(x) \in [1,2] = X$, which is claim 2. [step 1.2, step 1.3, L5]

2.2 Since $1 \le x,y \le 2$ we have $1 \le xy \le 4$, hence $1/4 \le 1/(xy) \le 1$ and therefore $-1/2 \le 1/2 - 1/(xy) \le 1/4$, so $\big|1/2 - 1/(xy)\big| \le 1/2$. [step 1.4, L5]

3.1 Consequently $d(f(x),f(y)) = |x-y| \cdot \big|1/2 - 1/(xy)\big| \le \tfrac12 |x-y| = \tfrac12 d(x,y)$, so $f$ is a contraction with constant $q = 1/2$: claim 3. [step 1.4, step 2.2, L1, L6]

4.1 By claims 1 to 3 and Banach's theorem, $f$ has exactly one fixed point in $X$ and the iterates converge to it from every starting point. [step 1.1, step 2.1, step 3.1, L6]

5.1 For $x \in X$: $f(x) = x$ is equivalent to $x/2 + 1/x = x$, hence to $1/x = x/2$, hence to $x^2 = 2$; since $x > 0$ this holds exactly for $x = \sqrt 2$, which lies in $X$ by step 1.2. So the fixed point is $\sqrt 2$: claim 4. [step 1.2, step 4.1, L3, L4, L5]

6.1 Taking $x_0 = 1$ gives $x_1 = f(1) = 1/2 + 1 = 3/2$ and $d(x_1,x_0) = 1/2$; the a priori bound with $q = 1/2$ therefore reads $\big|\sqrt 2 - x_n\big| \le (1/2)^n (1/2)/(1 - 1/2) = (1/2)^n$, and the a posteriori bound reads $\big|\sqrt 2 - x_{n+1}\big| \le (1/2)|x_{n+1}-x_n|/(1-1/2) = |x_{n+1}-x_n|$: claim 5. [step 3.1, step 5.1, L6] ∎

## Remarks

- **No derivative is used anywhere.** The contraction constant comes from the algebraic identity of step 1.4, $f(x) - f(y) = (x-y)\big(1/2 - 1/(xy)\big)$, and from the bound $1 \le xy \le 4$ that the interval supplies. This matters here: the mean value theorem, which is how this estimate is usually obtained, belongs to a later page of this library and is not available at this point.
- **The lower endpoint is what makes the estimate close.** The bound $|1/2 - 1/(xy)| \le 1/2$ of step 2.2 needs $xy \ge 1$, and that is exactly what $x, y \ge 1$ supplies; on a set of small positive reals the factor $1/(xy)$ is large and the same computation gives nothing. The self-mapping property uses both endpoints: step 1.3 gives the lower bound $\sqrt 2$ and step 2.1 the upper bound $2$.
- **What the bounds say numerically.** From $x_0 = 1$ the a priori bound guarantees $|\sqrt 2 - x_n| \le 2^{-n}$, so ten steps give an error at most $2^{-10}$. This is a guarantee, not the truth: the iteration is Newton's method for $x^2 - 2$, and it converges far faster than the bound admits. The a posteriori bound of claim 5, which costs one subtraction, is what a computation would actually report.
- **The restriction to $[1,2]$ is convenience, not necessity.** On $[1,\infty)$ one still has $x,y \ge 1$, hence $0 < 1/(xy) \le 1$ and $|1/2 - 1/(xy)| \le 1/2$, so the same computation makes $f$ a contraction with the same constant there, and step 1.3 already shows $f$ maps $[1,\infty)$ into itself. The shorter interval is used only to keep the arithmetic of step 2.2 explicit.
