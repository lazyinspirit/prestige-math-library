---
id: ex-brownian-path-p-variation-threshold
kind: example
title: "The Brownian p-variation threshold"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-brownian-motion, cor-brownian-paths-are-locally-holder-of-every-order-below-one-half, thm-brownian-quadratic-variation-along-dyadic-partitions, cor-brownian-paths-have-infinite-total-variation-on-every-interval, cor-brownian-law-of-the-iterated-logarithm-at-zero, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-rat-embeds-dense, def-countable-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

No published item on this page defines $p$-variation, so the convention is
fixed here. For a continuous $x:[a,b]\to\mathbb R$ and a real $p\ge1$ put
$$V_p(x;[a,b]):=\sup\Bigl\{\sum_{i<n}|x_{t_{i+1}}-x_{t_i}|^p\Bigr\},$$
the supremum running over all partitions of $[a,b]$ in the sense of
[[def-partition-and-refinement]], and declared $+\infty$ when the set of sums
is unbounded above. For a standard Brownian motion $B$ [[def-brownian-motion]],
almost surely on every nondegenerate compact interval $[a,b]$:
$$V_p(B;[a,b])<\infty\quad\text{for every }p>2, \qquad V_p(B;[a,b])=+\infty\quad\text{for every }1\le p\le2 .$$
The threshold exponent is therefore $2$, and the example keeps the supremal
two-variation $V_2$ distinct from the dyadic quadratic sums of
[[thm-brownian-quadratic-variation-along-dyadic-partitions]], which are finite
and converge to $b-a$.

## Facts & Assumptions

**Given:** AC, AC$_\omega$, a standard Brownian motion $B$ with its all-path continuous jointly measurable version, rationals $1\le p$, $a<b$ and the notation $V_p$ above.

[F1] Almost surely there is one event on which every path is continuous and, for every $T>0$ and $0<\gamma<1/2$, a finite $K=K(\omega,T,\gamma)$ bounds $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,T]$. [[cor-brownian-paths-are-locally-holder-of-every-order-below-one-half]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] Almost surely the dyadic squared-increment sums of $[a,b]$ converge to $b-a$; almost surely the variation sums of the path are unbounded on every nondegenerate compact interval. [[thm-brownian-quadratic-variation-along-dyadic-partitions]] [[cor-brownian-paths-have-infinite-total-variation-on-every-interval]]

[F3] Almost surely $\limsup_{h\downarrow0}|B_h|/\sqrt{2h\log\log(1/h)}=1$, and the shifted increment process $h\mapsto B_{t+h}-B_t$ is again a standard Brownian motion, so the same statement holds for every fixed deterministic $t\ge0$. [[cor-brownian-law-of-the-iterated-logarithm-at-zero]] [[def-brownian-motion]]

[F4] An indefinite integral of a bounded measurable function is continuous, so the accumulated two-variation $t\mapsto V_2(x;[a,t])$ of a continuous $x$ with finite two-variation is a nondecreasing finite-valued function of $t$; every nondecreasing function is differentiable at Lebesgue-almost every point, and the monotone-differentiability interface assumes AC$_\omega$. [[thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]] [[def-countable-choice]]

[F5] Fubini applies to the indicator of a product-measurable set on $[a,b]\times\Omega$, so its $\omega$-section lengths integrate to its product measure. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F6] The rationals are dense in $\mathbb R$; AC is the ambient assumption of the Brownian interfaces. [[lem-rat-embeds-dense]] [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Fix a continuous $x$ on $[a,b]$ with finite oscillation $M:=\max_{[a,b]}x-\min_{[a,b]}x$, and let $1\le p\le q$; for every partition, $\sum_i|x_{t_{i+1}}-x_{t_i}|^q\le M^{q-p}\sum_i|x_{t_{i+1}}-x_{t_i}|^p$, so taking suprema gives $V_q(x;[a,b])\le M^{q-p}V_p(x;[a,b])$; consequently $V_p<\infty$ implies $V_q<\infty$ and $V_q=\infty$ implies $V_p=\infty$. [given]

1.2 Suppose that for some continuous $x$ on $[a,b]$ and some $1\le p<2$ one had $V_p(x;[a,b])<\infty$; then for the dyadic partition with mesh $h=(b-a)/2^n$ one has $\sum_k(\Delta_kx)^2=\sum_k|\Delta_kx|^{2-p}|\Delta_kx|^p\le(\max_k|\Delta_kx|)^{2-p}V_p(x;[a,b])$, and the maximum increment tends to $0$ by uniform continuity of the continuous $x$ on the compact $[a,b]$, so those quadratic sums would tend to $0$. [given]

1.3 Suppose now that a continuous $x$ on $[a,b]$ satisfies $V_2(x;[a,b])<\infty$, and let $v(t):=V_2(x;[a,t])$; then $v$ is nondecreasing and finite-valued, and for $t<b$, $h>0$ with $t+h\le b$ one has $|x_{t+h}-x_t|^2\le v(t+h)-v(t)$ by adding the single point $t+h$ to partitions of $[a,t]$ and taking suprema. [given]

1.4 For each fixed rational $t\ge0$ the shifted process $h\mapsto B_{t+h}-B_t$ is a standard Brownian motion, so [F3] gives almost surely $\limsup_{h\downarrow0}|B_{t+h}-B_t|^2/h=+\infty$; intersecting over the countably many rational $t\in[a,b)$ yields an event of probability one on which every rational $t\in[a,b)$ is a point where the squared difference quotient is unbounded. [F3]

2.1 Let $p>2$ be rational and choose a rational $\gamma$ with $1/p<\gamma<1/2$; by [F1] there is, on a probability-one event, a finite $K$ with $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,b]$; then for every partition of $[a,b]$, $\sum_i|B_{t_{i+1}}-B_{t_i}|^p\le K^p\sum_i(t_{i+1}-t_i)^{\gamma p}\le K^p(b-a)^{\gamma p}$ because $\gamma p>1$ and $\sum_ih_i^{\gamma p}\le(\sum_ih_i)^{\gamma p}$; hence $V_p(B;[a,b])\le K^p(b-a)^{\gamma p}<\infty$ almost surely. [step 1.1, F1]

2.2 But by [F2] the dyadic quadratic sums of the Brownian path converge to $b-a>0$ almost surely, so the hypothesis of [step 1.2] fails for $B$ on every rational interval $[a,b]$ and rational $p\in[1,2)$ almost surely; intersecting countably many events and using [step 1.1] to pass to every real $p\in[1,2)$ gives $V_p(B;[a,b])=\infty$ almost surely for every $p\in[1,2)$ and every nondegenerate compact interval. [step 1.1, step 1.2, F2]

2.3 By [F4] the function $v$ is differentiable at Lebesgue-almost every $t\in(a,b)$ with finite derivative, so at those $t$ one has $\limsup_{h\downarrow0}|x_{t+h}-x_t|^2/h\le v'(t)<\infty$. [step 1.3, F4]

2.4 Let $N:=\{t\in[a,b]:\limsup_{h\downarrow0,h\in\mathbb Q}|B_{t+h}-B_t|^2/h<\infty\}$; the set is product measurable because the Brownian evaluation is jointly measurable, and by [step 1.4] every rational $t\in[a,b)$ satisfies $P(t\in N)=0$, so [F5] gives $E\lambda(N)=\int_a^bP(t\in N)\,dt=0$ and hence $\lambda(N)=0$ almost surely. [step 1.4, F5]

3.1 Intersecting the events of [step 2.1] over the countably many rational $p>2$ and rational pairs $a<b$, and using [step 1.1] to pass from a rational $p$ to every real $q>2$ with $p\le q$, we obtain: almost surely $V_q(B;[a,b])<\infty$ for every $q>2$ and every compact interval with rational endpoints, hence by containment for every nondegenerate compact interval. [step 1.1, step 2.1, F6]

3.2 On the probability-one event of [step 2.4] the set of $t$ at which [step 2.3] would hold has measure zero, so a continuous path with $V_2(x;[a,b])<\infty$ cannot be a Brownian path: almost surely $V_2(B;[a,b])=\infty$ for every rational interval and hence every nondegenerate compact interval. [step 2.3, step 2.4]

4.1 Combining [step 3.1], [step 2.2] and [step 3.2] on the intersection of the countably many probability-one events, almost surely $V_p(B;[a,b])<\infty$ for all $p>2$ and $V_p(B;[a,b])=\infty$ for all $1\le p\le2$, simultaneously on every nondegenerate compact interval; the exponent $p=1$ case is the infinite total variation of the path, and the value $p=2$ is handled by the accumulated-variation argument rather than by the dyadic sums, which are finite. [step 3.1, step 2.2, step 3.2, F2]

5.1 The boundary cases are covered: $p\ge1$ is required by the statement, so no fractional exponents below one occur; the interval is nondegenerate and compact, and rational endpoints suffice by [F6]; the two-variation $V_2$ is a supremum over all partitions and is deliberately distinguished from the dyadic quadratic sums, which are finite and converge to $b-a$; the monotonicity of [step 1.1] transfers between exponents using the finite oscillation of a continuous function on a compact interval; AC$_\omega$ is declared exactly at the monotone-differentiability interface [F4], and AC is the ambient assumption of [F6]. [step 1.1, step 4.1, F2, F4, F6, given] ∎

## Source notes

Lawler, Section 2.8, computes the finite dyadic quadratic variation and infinite total variation of Brownian paths; the $p$-variation threshold for $p\neq2$ follows by interpolating between the total variation ($p=1$), the supremal two-variation ($p=2$) and the subcritical Hölder regularity ($p>2$). Durrett's law of the iterated logarithm at zero, transported along the shifted increments, is what rules out finite supremal two-variation, by upgrading a deterministic almost-everywhere bound to a contradiction with the values at rational times.
