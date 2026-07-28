---
id: thm-monotonicity-from-the-derivative
kind: theorem
title: "On an interval $I$, for $f$ continuous on $I$ and differentiable at every interior point: $f' \\ge 0$ throughout gives $f$ nondecreasing, $f' > 0$ gives $f$ increasing, $f' \\le 0$ and $f' < 0$ give the two decreasing forms; conversely a nondecreasing $f$ has $f' \\ge 0$ and a nonincreasing $f$ has $f' \\le 0$ wherever it is differentiable, and no strict converse is claimed"
status: draft
origin: session
deps: [cor-mean-value-theorem, def-derivative, def-monotone-function, def-interval, def-continuity-real, lem-function-limit-preserves-order, def-function-limit, def-interior-closure-boundary-r, lem-of-sign-rules, lem-of-inverse-positive, def-ordered-field, def-neighbourhood-r, def-limit-point-r]
justified_by: []
aliases: [thm-derivative-sign-and-monotonicity]
landmark: true
short: "sign of $f'$ and monotonicity"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.11)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]). The words
*nondecreasing*, *increasing*, *nonincreasing* and *decreasing* are those of
[[def-monotone-function]], in which *increasing* is the strict notion.

1. If $f'(x) \ge 0$ at every interior point $x$ of $I$, then $f$ is
   nondecreasing on $I$.
2. If $f'(x) > 0$ at every interior point $x$ of $I$, then $f$ is increasing on
   $I$.
3. If $f'(x) \le 0$ at every interior point $x$ of $I$, then $f$ is
   nonincreasing on $I$.
4. If $f'(x) < 0$ at every interior point $x$ of $I$, then $f$ is decreasing on
   $I$.

Conversely, with no continuity hypothesis and no hypothesis at any other point:

5. If $f : I \to \mathbb{R}$ is nondecreasing on $I$ and differentiable at a
   point $c \in I$ that is a limit point of $I$, then $f'(c) \ge 0$; if $f$ is
   nonincreasing and differentiable at such a $c$, then $f'(c) \le 0$.

**No strict converse is claimed here, and none is true.** Claim 5 gives the
weak inequality only, and it cannot be improved: an increasing function may have
a vanishing derivative at a point. That failure is recorded separately, as a
false statement later on this page, with its witness worked out on the companion
page. Reading claim 2 backwards is the single most common misuse of this
theorem, and this statement does not license it.

**Claims 1 to 4 need the interval; claim 5 does not.** The forward direction
runs through the mean value theorem on a segment joining two points of $I$, so
order-convexity is essential. Claim 5 is a statement about one point and uses
only that the difference quotients have a constant sign.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$; for claims 1 to 4 also that $f$ is continuous on $I$ and differentiable at every interior point of $I$, with the stated sign condition; for claim 5 that $f$ is monotone on $I$ and differentiable at a limit point $c \in I$ of $I$.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v) - h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$; and for $u < v$ in $I$ every $x \in (u,v)$ is interior to $I$, since $N_{\varepsilon}(x) \subseteq (u,v) \subseteq I$ for $\varepsilon := \min\{x-u,\ v-x\} > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L3] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; and every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]).

[L4] Continuity passes to a subset of the domain ([[def-continuity-real]]).

[L5] Monotone vocabulary ([[def-monotone-function]]): $f$ is nondecreasing on $I$ when $f(x) \le f(y)$ for all $x, y \in I$ with $x \le y$; increasing when $f(x) < f(y)$ for all $x < y$; nonincreasing and decreasing are the two conditions with the inequalities on the values reversed.

[L6] Order arithmetic ([[lem-of-sign-rules]], [[lem-of-inverse-positive]], [[def-ordered-field]]): for reals $s$ and $t$ with $t > 0$, $s > 0$ gives $st > 0$, $s < 0$ gives $st < 0$ and $s = 0$ gives $st = 0$, so by trichotomy $s \ge 0$ gives $st \ge 0$ and $s \le 0$ gives $st \le 0$; a nonzero real and its inverse have the same sign, so a quotient $s/t$ with $s \ge 0$ and $t > 0$, or with $s \le 0$ and $t < 0$, is $\ge 0$, and a quotient with $s \le 0$ and $t > 0$, or with $s \ge 0$ and $t < 0$, is $\le 0$.

[L7] Limits preserve the non-strict order ([[lem-function-limit-preserves-order]]): if $h_1, h_2$ are functions on a set $D$ having $c$ as a limit point, if both limits at $c$ exist and if $h_1 \le h_2$ at every $x \in D$ with $0 < |x - c| < \eta$ for some real $\eta > 0$, then $\lim_{x \to c} h_1(x) \le \lim_{x \to c} h_2(x)$. The constant function $0$ on $D$ has limit $0$ at $c$ ([[def-function-limit]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ has at most one element then all four of the conditions in [L5] hold on $I$ vacuously or trivially, since there is no pair $x < y$ in $I$, and claims 1 to 4 are immediate. So assume $I$ has at least two elements, and let $u, v \in I$ with $u < v$ be arbitrary. [given, L5]

1.2 **Claim 5.** Let $f$ be nondecreasing on $I$ and differentiable at a limit point $c \in I$ of $I$, and let $q(x) := (f(x)-f(c))/(x-c)$ on $I \setminus \{c\}$, so $\lim_{x \to c} q(x) = f'(c)$ by [L3]. For $x \in I$ with $x > c$ one has $f(x) \ge f(c)$ by [L5], so the numerator is $\ge 0$ while the denominator $x - c$ is $> 0$, and [L6] gives $q(x) \ge 0$. For $x \in I$ with $x < c$ one has $f(x) \le f(c)$, so the numerator is $\le 0$ while $x - c < 0$, and [L6] again gives $q(x) \ge 0$. So the constant function $0$ is $\le q$ at every point of $I \setminus \{c\}$, in particular at every such point with $0 < |x - c| < 1$; both functions have limits at the limit point $c$ of $I \setminus \{c\}$, namely $0$ and $f'(c)$, so [L7] gives $0 \le f'(c)$. The nonincreasing case is the same argument with both inequalities on the values reversed, which makes $q \le 0$ throughout and hence $f'(c) \le 0$. [L3, L5, L6, L7]

2.1 By [L2] the segment $[u,v]$ is contained in $I$ and is nondegenerate. The restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L4]; and for $x \in (u,v)$ the point $x$ is interior to $I$ by [L2], so $f$ is differentiable at $x$, while $x$ is a limit point of $[u,v]$ by [L3], so $f|_{[u,v]}$ is differentiable at $x$ with $(f|_{[u,v]})'(x) = f'(x)$. [step 1.1, L2, L3, L4]

3.1 By step 2.1 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1] on $[u,v]$, so fix $c \in (u,v)$ with $f(v) - f(u) = f'(c)\,(v-u)$; and $v - u > 0$ since $u < v$. [step 2.1, L1, choose]

4.1 If $f'(x) \ge 0$ at every interior point of $I$ then in particular $f'(c) \ge 0$, so $f(v)-f(u) = f'(c)(v-u) \ge 0$ by [L6], that is $f(u) \le f(v)$. If $f'(x) > 0$ at every interior point then $f'(c) > 0$ and the same product is $> 0$, that is $f(u) < f(v)$. [step 3.1, L6]

4.2 If $f'(x) \le 0$ at every interior point then $f'(c) \le 0$ and $f(v)-f(u) \le 0$ by [L6], that is $f(u) \ge f(v)$. If $f'(x) < 0$ at every interior point then $f'(c) < 0$ and $f(v)-f(u) < 0$, that is $f(u) > f(v)$. [step 3.1, L6]

5.1 The pair $u < v$ in $I$ was arbitrary, so steps 4.1 and 4.2 establish exactly the four conditions of [L5]: for the two non-strict ones the case $u = v$ is the trivial equality $f(u) = f(u)$, and the two strict ones are conditions on pairs $u < v$ only. Claims 1 to 4 are proved. [step 1.1, step 4.1, step 4.2, L5]

6.1 Claims 1 to 4 are step 5.1 and claim 5 is step 1.2. [step 1.2, step 5.1] ∎

## Remarks

- **The forward direction is one application of the mean value theorem, and nothing more.** The sign of $f'$ at the single point the theorem produces is what decides the sign of the increment; no information about $f'$ anywhere else is used in a given comparison, and the hypothesis is imposed at every interior point only because the point produced cannot be located in advance.

- **Claim 5 is genuinely weaker than the converse of claim 2, and that is not a defect of the proof.** [[lem-function-limit-preserves-order]] destroys strictness in the limit, and no argument can restore it here, because the conclusion is false: an increasing function may have a vanishing derivative. The false statement recording that, and its witness on the companion page, are the honest form of what a reader is tempted to write.

- **What a vanishing derivative at every interior point gives** is the case $f' \ge 0$ and $f' \le 0$ together, hence nondecreasing and nonincreasing, hence constant. That is [[cor-zero-derivative-implies-constant]], proved directly above rather than deduced here, since the direct proof is shorter.
