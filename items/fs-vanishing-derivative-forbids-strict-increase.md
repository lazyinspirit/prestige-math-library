---
id: fs-vanishing-derivative-forbids-strict-increase
kind: false-statement
title: "FALSE: if $f'(c) = 0$ then $f$ is not increasing on any interval containing $c$"
status: draft
origin: session
deps: [def-derivative, def-monotone-function, lem-derivative-of-a-power, thm-monotonicity-from-the-derivative, def-integer-power, lem-power-monotone, def-interval, lem-of-sign-rules, thm-algebra-of-continuous-functions, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, def-neighbourhood-r, def-interior-closure-boundary-r, def-ordered-field, def-limit-point-r]
justified_by: []
forward_refs: [ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]
aliases: []
landmark: false
short: "FALSE: $f'(c)=0$ forbids strict increase"
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
    - title: "Stationary point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stationary_point"
pipeline_run: null
---

## Statement

**False claim:** let $I \subseteq \mathbb{R}$ be an interval
([[def-interval]]), let $f : I \to \mathbb{R}$ and let $c \in I$ be a point at
which $f$ is differentiable with

$$f'(c) \;=\; 0$$

([[def-derivative]]). Then $f$ is **not** increasing on $I$, in the strict sense
of [[def-monotone-function]].

**Why it is tempting.** [[thm-monotonicity-from-the-derivative]] proves that
$f' > 0$ at every interior point gives an increasing function, and one reads the
implication backwards: if strict increase comes from a strictly positive
derivative, surely a derivative that fails to be strictly positive somewhere
must destroy the strict increase there. It does not. Claim 5 of that theorem is
the true converse, and it is non-strict: an increasing $f$ has $f' \ge 0$
wherever it is differentiable, and nothing forbids equality at isolated points.

## Facts & Assumptions

**Given:** The interval $I := \mathbb{R}$, the point $c := 0$ and the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := x^{3}$ ([[def-integer-power]], [[def-interval]]).

[L1] Power rule ([[lem-derivative-of-a-power]], claim 2): for a natural $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$.

[L2] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(n) > 0$ for every natural $n \ge 1$, so in particular $\iota(3) > 0$.

[L3] Powers ([[def-integer-power]]): $a^{0} = 1$, $a^{2} = a \cdot a$, and $0 \cdot a = 0$, so $0^{2} = 0$.

[L4] Order arithmetic ([[lem-of-sign-rules]], [[def-ordered-field]]): a product of two positive reals is positive and a product of two negative reals is positive; the order is total and transitive, and trichotomy holds.

[L5] Monotonicity from the derivative ([[thm-monotonicity-from-the-derivative]], claim 2): for $J$ order-convex and $h : J \to \mathbb{R}$ continuous on $J$ and differentiable at every interior point of $J$ with $h' > 0$ there, $h$ is increasing on $J$.

[L6] Continuity ([[thm-algebra-of-continuous-functions]], claim 5): $x \mapsto x^{n}$ is continuous at every point of its domain for every natural $n$; and continuity passes to a subset of the domain ([[def-continuity-real]]).

[L7] Restriction of the derivative ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with the same derivative; every point of an order-convex set with at least two elements is a limit point of it ([[def-limit-point-r]]); and a point $p$ is interior to a set $S$ exactly when $N_{\varepsilon}(p) \subseteq S$ for some real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]]).

[L8] Increasing on a set $J$ means $h(x) < h(y)$ for all $x, y \in J$ with $x < y$ ([[def-monotone-function]]).

[L9] A positive base has positive natural powers ([[lem-power-monotone]], claim 1).

## Refutation

**Proof technique:** direct.

1.1 By [L1] with $n := 3$, the function $f$ is differentiable at every real $c$ with $f'(c) = \iota(3)\,c^{2}$. In particular $f'(0) = \iota(3) \cdot 0^{2} = \iota(3) \cdot 0 = 0$ by [L3]. [L1, L3]

1.2 For every real $c \ne 0$ one has $c^{2} > 0$: if $c > 0$ this is [L9]; if $c < 0$ then $c^{2} = c \cdot c$ is a product of two negative reals, hence positive by [L3] and [L4]. Therefore $f'(c) = \iota(3)c^{2} > 0$ for every $c \ne 0$, being a product of two positive reals by [L2] and [L4]. [L2, L3, L4, L9]

1.3 Put $I_1 := (-\infty, 0]$ and $I_2 := [0,\infty)$, both order-convex with at least two elements ([[def-interval]]). Every real $x < 0$ is interior to $I_1$, since $N_{|x|}(x) \subseteq (-\infty,0) \subseteq I_1$; and $0$ is **not** interior to $I_1$, since every $N_{\varepsilon}(0)$ contains $\varepsilon/2 > 0$, which is not in $I_1$. As every interior point of $I_1$ lies in $I_1$ and so satisfies $x \le 0$, the interior points of $I_1$ are exactly the reals $x < 0$. The same argument gives that the interior points of $I_2$ are exactly the reals $x > 0$. [L4, L7]

2.1 By [L6] the function $f$ is continuous on $\mathbb{R}$, hence $f|_{I_1}$ is continuous on $I_1$ and $f|_{I_2}$ is continuous on $I_2$. At every interior point $x$ of $I_1$ one has $x < 0$ by step 1.3, so $x$ is a limit point of $I_1$ by [L7] and $f|_{I_1}$ is differentiable at $x$ with derivative $f'(x) = \iota(3)x^{2} > 0$ by step 1.2 and [L7]. So [L5] gives that $f|_{I_1}$ is increasing on $I_1$; the same argument on $I_2$ gives that $f|_{I_2}$ is increasing on $I_2$. [step 1.2, step 1.3, L5, L6, L7]

3.1 Let $a, b \in \mathbb{R}$ with $a < b$. If $b \le 0$ then $a, b \in I_1$ and step 2.1 gives $f(a) < f(b)$. If $a \ge 0$ then $a, b \in I_2$ and step 2.1 gives $f(a) < f(b)$. Otherwise $b > 0$ and $a < 0$, so $a, 0 \in I_1$ with $a < 0$ gives $f(a) < f(0)$, while $0, b \in I_2$ with $0 < b$ gives $f(0) < f(b)$, and transitivity gives $f(a) < f(b)$. The three cases are exhaustive, since failing both $b \le 0$ and $a \ge 0$ means $b > 0$ and $a < 0$. So $f$ is increasing on $\mathbb{R}$ by [L8]. [step 2.1, L4, L8]

4.1 The false claim fails on this witness: $\mathbb{R}$ is an interval, $f$ is differentiable at $c = 0$ with $f'(0) = 0$ by step 1.1, and yet $f$ is increasing on $\mathbb{R}$ by step 3.1. So a vanishing derivative forbids nothing of the kind, and the claim is false. [step 1.1, step 3.1] ∎

## Remarks

- **What survives.** Claim 5 of [[thm-monotonicity-from-the-derivative]] is the correct converse and is non-strict: an increasing function differentiable at a point of its interval has $f' \ge 0$ there. This witness saturates that inequality at exactly one point, and no more can be said in general.

- **How large the vanishing set can be is not settled here.** The witness has $f' = 0$ at a single point. Nothing on this page says how big the set $\{ f' = 0 \}$ may be for an increasing $f$, and nothing here should be read as suggesting that it must be small.

- **The same function is the standard witness for a second false reading**, that a vanishing derivative marks a local extremum: $f$ has neither a local maximum nor a local minimum at $0$, precisely because it is increasing. [[ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative]] on the companion page computes the derivative in full and draws the further consequence, through [[thm-derivative-of-an-inverse]], that the inverse of this function is not differentiable at $0$.
