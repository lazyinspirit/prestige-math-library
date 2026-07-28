---
id: cex-an-integrable-function-with-no-primitive
kind: counterexample
title: "The sign function is Riemann integrable on $[-1,1]$ and has no primitive there"
status: draft
origin: session
deps: [thm-ftc-first-part, thm-finitely-many-discontinuities-integrable, thm-additivity-over-subintervals, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, cor-zero-derivative-implies-constant, cor-differentiable-implies-continuous, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-derivative, def-function-limit, def-the-integral-function, def-continuity-real, def-classification-of-discontinuities, def-oriented-integral, def-darboux-integral, def-abs-value, lem-of-abs-value, def-interval, def-bounded-set, def-limit-point-r, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "integrable with no primitive"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
pipeline_run: null
---

## Statement refuted

**False claim:** every Riemann integrable function on a closed bounded interval
has a primitive there, that is, is the derivative of some function on that
interval.

Let $s : [-1,1] \to \mathbb{R}$ be the sign function,

$$s(x) \;:=\; \begin{cases} -1 & -1 \le x < 0, \\ 0 & x = 0, \\ 1 & 0 < x \le 1. \end{cases}$$

Then $s$ is Riemann integrable on $[-1,1]$ with $\int_{-1}^{1} s = 0$, and there
is **no** $G : [-1,1] \to \mathbb{R}$ differentiable at every point of $[-1,1]$
with $G' = s$.

**The integral function of $s$ is $F(x) = |x| - 1$**, which is differentiable at
every point of $[-1,1]$ except $x = 0$ — exactly the one point where $s$ is
discontinuous. That is consistent with [[thm-ftc-first-part]], which claims
$F'(c) = s(c)$ only at points of continuity of $s$, and it is what the refutation
below turns into a contradiction.

## Facts & Assumptions

**Given:** The sign function $s$ on $[-1,1]$ and its integral function $F(x) = \int_{-1}^{x} s$.

[A1] There is $G : [-1,1] \to \mathbb{R}$, differentiable at every point of $[-1,1]$ as a function on $[-1,1]$, with $G'(x) = s(x)$ for every $x \in [-1,1]$.

[L1] A bounded function on $[p,q]$ with at most finitely many discontinuities is Riemann integrable there ([[thm-finitely-many-discontinuities-integrable]], [[def-bounded-set]], [[def-darboux-integral]], [[def-classification-of-discontinuities]]).

[L2] Changing an integrable function at finitely many points changes neither its integrability nor its integral, and $\int_p^q c = c(q-p)$ for a constant ([[lem-changing-a-function-at-finitely-many-points]], [[lem-integral-elementary-bounds]]).

[L3] Additivity, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]], [[def-the-integral-function]]).

[L4] If $u$ is continuous on an order-convex $I$ and differentiable with $u' = 0$ at every interior point of $I$, then $u$ is constant on $I$ ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[L5] A function differentiable at a point is continuous there, and a restriction to a subinterval still having the point as a limit point is differentiable there with the same derivative; every point of a nondegenerate interval is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-limit-point-r]], [[def-continuity-real]]).

[L6] If both one-sided limits of a function at $c$ exist and differ, the two-sided limit does not exist ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]]).

[L7] Absolute value: $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$; $|x|/x = 1$ for $x>0$ and $= -1$ for $x<0$ ([[def-abs-value]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $s$ is bounded, with $|s| \le 1$, and continuous at every point of $[-1,1]$ other than $0$: near a point $x \ne 0$ it is locally constant. So $s$ is integrable on $[-1,1]$, and likewise on $[-1,0]$ and on $[0,1]$, by [L1]. [given, L1]

1.2 **Assume [A1].** Then $G' = s$ everywhere on $[-1,1]$. [assume-contra, A1]

2.1 On $[-1,0]$ the function $s$ agrees with the constant $-1$ except at the single point $0$, so $\int_{-1}^{0} s = -1\cdot(0-(-1)) = -1$ by [L2]; on $[0,1]$ it agrees with the constant $1$ except at $0$, so $\int_0^1 s = 1$. [step 1.1, L2]

2.2 On $I_{+} := [0,1]$ the function $u_{+}(x) := G(x) - x$ is continuous, by [L5], and differentiable at every interior point $x \in (0,1)$ with $u_{+}'(x) = s(x) - 1 = 0$; so $u_{+}$ is constant on $[0,1]$ by [L4], say $G(x) = x + c_1$ there. [step 1.2, L4, L5, choose]

2.3 On $I_{-} := [-1,0]$ the function $u_{-}(x) := G(x) + x$ is continuous and differentiable at every $x \in (-1,0)$ with $u_{-}'(x) = s(x)+1 = 0$; so $G(x) = -x + c_2$ on $[-1,0]$. [step 1.2, L4, L5, choose]

3.1 By [L3], $\int_{-1}^{1} s = \int_{-1}^{0} s + \int_0^1 s = -1 + 1 = 0$. [step 2.1, L3]

3.2 By [L3] again, $F(x) = \int_{-1}^{x} s$ equals $-1 + x$ for $x \in [0,1]$ and equals $-(x-(-1)) = -x-1$ for $x \in [-1,0]$, by [L2] applied on the relevant piece; in both cases $F(x) = |x| - 1$ by [L7]. [step 2.1, L2, L3, L7]

3.3 Evaluating both formulas at $x = 0$ gives $c_1 = G(0) = c_2$; write $c$ for the common value, so $G(x) = |x| + c$ for every $x \in [-1,1]$ by [L7]. [step 2.2, step 2.3, L7]

4.1 The difference quotient of $G$ at $0$ is $x \mapsto (G(x)-G(0))/x = |x|/x$, which equals $1$ for $x > 0$ and $-1$ for $x < 0$ by [L7]; so its right-hand limit at $0$ is $1$ and its left-hand limit is $-1$. [step 3.3, L7]

5.1 By [L6] the two-sided limit of that quotient at $0$ does not exist, so $G$ is not differentiable at $0$; this contradicts [A1]. [step 4.1, A1, L6]

6.1 Hence no such $G$ exists: $s$ is integrable on $[-1,1]$ by step 1.1 and has no primitive there, so the claim is false. [step 1.1, step 3.1, step 5.1, discharge-contradiction] ∎

## Remarks

- **Darboux's theorem is not used, and is not available.** The slick argument — a derivative has the intermediate value property, and $s$ does not — rests on Darboux's theorem on the intermediate value property of derivatives, which this library does not have: it is planned for the page on Darboux's theorem, l'Hopital's rule and Taylor expansion, and that page is not built, so the result is unavailable here whatever its position in the reading order. The refutation above uses only [[cor-zero-derivative-implies-constant]] and the one-sided limits of a difference quotient, both already published.

- **The tension with the first fundamental theorem is only apparent.** $F$ *is* differentiable with $F' = s$ at every point of $[-1,1]$ except $0$, which is exactly what [[thm-ftc-first-part]] promises, since $s$ is continuous exactly off $0$. What fails is the existence of *any* function differentiable at $0$ too with derivative $s(0)$ there, and step 4.1 shows the obstruction is the jump of $s$ at $0$, not a defect of $F$.

- **The value $s(0)$ is irrelevant to both halves.** Changing it changes neither the integral, by [[lem-changing-a-function-at-finitely-many-points]], nor the conclusion of step 5.1, which shows $G$ is not differentiable at $0$ at all and therefore cannot have any prescribed derivative there.
