---
id: fs-the-integral-function-is-always-a-primitive
kind: false-statement
title: "FALSE: for every integrable $f$ on $[a,b]$, the integral function $F(x)=\\int_a^x f$ satisfies $F' = f$ on $[a,b]$"
status: draft
origin: session
deps: [thm-ftc-first-part, def-the-integral-function, cex-an-integrable-function-with-no-primitive, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-additivity-over-subintervals, thm-finitely-many-discontinuities-integrable, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-function-limit, def-derivative, def-continuity-real, def-classification-of-discontinuities, def-oriented-integral, def-darboux-integral, def-abs-value, lem-of-abs-value, def-interval, def-bounded-set, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: $F$ is always a primitive"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
pipeline_run: null
---

## Statement

**False claim:** let $a<b$ be reals and let $f : [a,b] \to \mathbb{R}$ be
Riemann integrable ([[def-darboux-integral]]). Then its integral function
$F(x) = \int_a^x f$ ([[def-the-integral-function]]) is differentiable at every
point of $[a,b]$ with $F'(x) = f(x)$ there.

The claim fails in **two independent ways**, and both are exhibited below.

1. $F'$ may fail to exist. For the sign function $s$ on $[-1,1]$
   ([[cex-an-integrable-function-with-no-primitive]]) one has $F(x) = |x|-1$,
   which is not differentiable at $0$.
2. $F'$ may exist and differ from $f$. On $[0,1]$ let $f(x) := 0$ for
   $x \ne 1/2$ and $f(1/2) := 1$. Then $F$ is the zero function, so $F'(1/2) = 0$
   while $f(1/2) = 1$.

The second witness shows the failure is not exotic: **any** integrable $f$ that
differs from a continuous $g$ at a single point has the same integral function as
$g$, by [[lem-changing-a-function-at-finitely-many-points]], and therefore has
$F' = g \ne f$ at that point. Continuity of $f$ at the point is what the true
theorem [[thm-ftc-first-part]] asks for, and it asks for nothing more. It is not
claimed here to be *necessary*: what the conclusion needs is the equality
$F'(c) = f(c)$, and the last Remark below exhibits an $f$ discontinuous at a
point where that equality nevertheless holds.

## Facts & Assumptions

**Given:** The sign function $s$ on $[-1,1]$ of [[cex-an-integrable-function-with-no-primitive]], with $s(x) = -1$ for $x<0$, $s(0) = 0$ and $s(x) = 1$ for $x>0$; and the function $f$ on $[0,1]$ with $f(1/2) = 1$ and $f(x) = 0$ otherwise.

[A1] The false claim: for every integrable $u$ on $[p,q]$, the integral function of $u$ is differentiable everywhere on $[p,q]$ with derivative $u$.

[L1] $s$ is Riemann integrable on $[-1,1]$ ([[cex-an-integrable-function-with-no-primitive]], [[thm-finitely-many-discontinuities-integrable]], [[def-classification-of-discontinuities]], [[def-bounded-set]]).

[L2] Changing an integrable function at finitely many points changes neither its integrability nor its integral, and $\int_p^q c = c(q-p)$ for a constant ([[lem-changing-a-function-at-finitely-many-points]], [[lem-integral-elementary-bounds]]).

[L3] Additivity in the oriented form for arbitrary points, and $\int_p^p u = 0$ ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]], [[def-the-integral-function]]).

[L4] If both one-sided limits of a function at $c$ exist and differ, the two-sided limit does not exist, so the derivative there does not exist ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]], [[def-derivative]]).

[L5] Absolute value: $|x| = x$ for $x \ge 0$, $|x| = -x$ for $x \le 0$, and $|x|/x$ is $1$ for $x>0$ and $-1$ for $x<0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L6] First fundamental theorem: if $u$ is integrable on $[p,q]$ and continuous at $c$, then the integral function of $u$ has derivative $u(c)$ at $c$ ([[thm-ftc-first-part]], [[def-continuity-real]]).

[L7] Ordered-field arithmetic: the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Refutation

**Proof technique:** direct.

1.1 **First witness.** $s$ is integrable on $[-1,1]$ by [L1], and its integral function is $F(x) = \int_{-1}^{x}s$. [given, L1]

1.2 **Second witness.** The function $f$ on $[0,1]$ is bounded and agrees with the constant $0$ off the single point $1/2$, so it is integrable with $\int_0^{x}f = \int_0^{x}0 = 0$ for every $x \in [0,1]$ by [L2] and [L3]; hence its integral function is the zero function. [given, L2, L3]

2.1 For $x \in [0,1]$: by [L3], $F(x) = \int_{-1}^{0}s + \int_0^{x}s$, and $s$ agrees with the constant $-1$ on $[-1,0]$ off the single point $0$ and with the constant $1$ on $[0,x]$ off the single point $0$, so [L2] gives $F(x) = -1 + x$. For $x \in [-1,0]$: $s$ agrees with the constant $-1$ on $[x,0]$ off $0$, so $\int_{-1}^{x}s = -(x-(-1)) = -x-1$ by [L2] and [L3]. In both cases $F(x) = |x|-1$ by [L5]. [step 1.1, L2, L3, L5]

2.2 The zero function is differentiable everywhere with derivative $0$, so its derivative at $1/2$ is $0$, while $f(1/2) = 1 \ne 0$. Here $F'$ **exists** at the point and differs from $f$ there, so [A1] fails again, in a different way. [step 1.2, given, L2, L7]

3.1 The difference quotient of $F$ at $0$ is $x \mapsto (F(x)-F(0))/x = |x|/x$, which is $1$ for $x>0$ and $-1$ for $x<0$ by [L5]; so its one-sided limits at $0$ are $1$ and $-1$. [step 2.1, L5]

4.1 By [L4] the limit of that quotient at $0$ does not exist, so $F$ is not differentiable at $0$ and [A1] fails at $s$: the claim is false. [step 3.1, A1, L4]

5.1 Both failures occur exactly at a discontinuity of the integrand: $s$ is discontinuous at $0$ and $f$ at $1/2$. Off those points [L6] applies and gives $F' = f$, so the correct statement is [[thm-ftc-first-part]], whose hypothesis is continuity of the integrand at the point in question. [step 4.1, step 2.2, L6] ∎

## Remarks

- **The two witnesses are genuinely different failures.** In the first, $F$ has no derivative at the bad point at all; in the second, $F$ is as smooth as could be wished and simply computes a different number. A repair attempting to weaken the conclusion to "$F$ is differentiable wherever it can be" would still be refuted by the second witness.

- **What is always true of $F$ is one dimension weaker.** For every integrable $f$ the integral function is Lipschitz, hence uniformly continuous ([[thm-the-integral-function-is-lipschitz]]); differentiability is exactly what continuity of the integrand buys, and nothing more is available.

- **The failure set can be much larger than a point.** For Thomae's function $t$ on $[0,1]$ the integral function is identically $0$, so $F' = 0$ while $t$ is positive at every rational: the claim above then fails at every point of an infinite set, not merely at finitely many. No general statement is made here about an arbitrary integrable $f$ — at a discontinuity where $f$ happens to take the value $F'$ does, the two agree, and $f$ vanishing off $\{1/\iota(n+1)\}$ is such a case at the point $0$.
