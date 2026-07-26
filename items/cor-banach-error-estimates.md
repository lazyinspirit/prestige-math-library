---
id: cor-banach-error-estimates
kind: corollary
title: "The a priori bound $d(x^{*}, x_n) \\le q^n d(x_1,x_0)/(1-q)$ and the a posteriori bound $d(x^{*}, x_{n+1}) \\le q\\,d(x_{n+1},x_n)/(1-q)$"
status: draft
origin: session
deps: [thm-banach-fixed-point, def-lipschitz-holder-contraction, def-integer-power,
       lem-metric-reverse-triangle, lem-limit-preserves-order, def-metric-convergence,
       def-complete-metric-space, def-real-limit, lem-limit-unique, def-metric-space,
       thm-induction-principle, thm-recursion, lem-of-inverse-positive,
       lem-metric-nonnegativity, lem-metric-limits-unique]
justified_by: []
forward_refs: [ex-banach-fixed-point-for-square-roots]
aliases: []
landmark: true
short: "Banach error estimates"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a nonempty complete metric space, let $f : X \to X$ be a
contraction with constant $q$, $0 \le q < 1$
([[def-lipschitz-holder-contraction]]), let $x_0 \in X$, let
$x_{n+1} := f(x_n)$ be the iterates, and let $x^{*}$ be the unique fixed point of
$f$, so that $x^{*} = \lim_{n} x_n$ ([[thm-banach-fixed-point]],
[[lem-metric-limits-unique]]). Then for every $n \in \mathbb{N}$:

1. **A priori bound.**
   $$d(x^{*}, x_n) \;\le\; \frac{q^{\,n}\, d(x_1,x_0)}{1-q}.$$
2. **A posteriori bound.**
   $$d(x^{*}, x_{n+1}) \;\le\; \frac{q\, d(x_{n+1}, x_n)}{1-q}.$$

The first bound is computable before the iteration is run, from the first step
alone; the second uses the step just taken and is therefore sharper in practice.

## Facts & Assumptions

**Given:** A nonempty complete metric space $(X,d)$, a contraction $f : X \to X$ with constant $q$ satisfying $0 \le q < 1$, a starting point $x_0 \in X$, its iterates $x_{n+1} = f(x_n)$, and the unique fixed point $x^{*}$ of $f$; write $C := d(x_1,x_0)/(1-q)$.

[A1] Banach's theorem: $f$ has exactly one fixed point $x^{*}$, the iterates from any starting point converge to it, and $d(x_m,x_n) \le q^{\,n} d(x_1,x_0)/(1-q)$ for all $m \ge n$ ([[thm-banach-fixed-point]]).

[L1] Reverse triangle inequality: $|d(u,w) - d(v,w)| \le d(u,v)$ in any metric space ([[lem-metric-reverse-triangle]]).

[L2] Convergence in $(X,d)$ means $d(x_m, x^{*}) \to 0$ in $\mathbb{R}$; limits in a metric space are unique, which licenses the notation $\lim_n x_n$ for a sequence already known to converge ([[def-metric-convergence]], [[lem-metric-limits-unique]], [[def-real-limit]]).

[L3] Limits of reals preserve non-strict inequalities holding eventually, a constant sequence converges to that constant, and the limit of a real sequence is unique ([[lem-limit-preserves-order]], [[lem-limit-unique]]).

[L4] Recursion determines a sequence from its starting point and the map ([[thm-recursion]]), and induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] $1 - q > 0$, so $1/(1-q) > 0$; $q^{\,1} = q$; and metrics are nonnegative ([[lem-of-inverse-positive]], [[def-integer-power]], [[lem-metric-nonnegativity]], [[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n \in \mathbb{N}$. By [A1] the iterates converge to $x^{*}$, so $d(x_m,x^{*}) \to 0$ as $m$ grows. [A1, L2]

1.2 Fix $n$ and consider the iterates of $f$ started at $y_0 := x_n$. By uniqueness in the recursion theorem, $y_j = x_{n+j}$ for every $j$, since both sides start at $x_n$ and both satisfy the recursion $u_{j+1} = f(u_j)$; in particular $y_1 = x_{n+1}$. [L4]

2.1 By [L1], $|d(x_m,x_n) - d(x^{*},x_n)| \le d(x_m,x^{*})$ for every $m$, so the real sequence $\big(d(x_m,x_n)\big)_{m}$ converges, and $\lim_{m} d(x_m,x_n) = d(x^{*},x_n)$. [step 1.1, L1, L3]

3.1 By [A1], $d(x_m,x_n) \le q^{\,n} C$ for every $m \ge n$, that is eventually in $m$; the constant sequence with value $q^{\,n} C$ converges to $q^{\,n} C$, so passing to the limit gives $d(x^{*},x_n) \le q^{\,n} C$, which is claim 1. [step 2.1, A1, L3, L5]

4.1 The fixed point of $f$ does not depend on the starting point, by uniqueness in [A1], so claim 1 applied to the sequence $(y_j)$ at index $1$ reads $d(x^{*}, y_1) \le q^{\,1} d(y_1,y_0)/(1-q)$. [step 3.1, step 1.2, A1, L5]

5.1 Substituting $y_1 = x_{n+1}$ and $y_0 = x_n$ gives $d(x^{*},x_{n+1}) \le q\,d(x_{n+1},x_n)/(1-q)$, which is claim 2; claim 1 is step 3.1. [step 3.1, step 1.2, step 4.1] ∎

## Remarks

- **The a posteriori bound is the a priori bound restarted.** Nothing new is proved in steps 1.2, 4.1 and 5.1: the iteration is simply begun again at $x_n$, which is legitimate because Banach's theorem holds from *any* starting point and its fixed point is the same one. That is the only place where the "any starting point" clause of [[thm-banach-fixed-point]] is used for something other than reassurance.
- **Which bound to use.** The a priori bound answers "how many steps do I need", since $q^{\,n}C < \varepsilon$ can be solved for $n$ before computing anything; the a posteriori bound answers "how good is what I have", and it is usually far smaller, because $d(x_{n+1},x_n)$ is itself already of size $q^{\,n}$. A worked instance of both, for $\sqrt{2}$, is [[ex-banach-fixed-point-for-square-roots]].
- **Both bounds degrade as $q \to 1$**, through the factor $1/(1-q)$, and neither says anything at $q = 1$, where the theorem itself is false ([[fs-strict-contraction-has-a-fixed-point]]).
