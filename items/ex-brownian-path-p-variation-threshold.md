---
id: ex-brownian-path-p-variation-threshold
kind: example
title: "The Brownian p-variation threshold"
status: draft
origin: pipeline
deps: [def-partition-and-refinement, thm-heine-cantor-r, def-quadratic-variation-along-a-partition-sequence, lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-brownian-motion, cor-brownian-paths-are-locally-holder-of-every-order-below-one-half, thm-brownian-quadratic-variation-along-dyadic-partitions, cor-brownian-paths-have-infinite-total-variation-on-every-interval, cor-brownian-law-of-the-iterated-logarithm-at-zero, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-rat-embeds-dense, def-countable-choice, def-axiom-of-choice]
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

Assume the Axiom of Choice (hence Countable Choice). The convention for
supremal $p$-variation is fixed here. For a continuous $x:[a,b]\to\mathbb R$ and a real $p\ge1$ put
$$V_p(x;[a,b]):=\sup\Bigl\{\sum_{i<n}|x_{t_{i+1}}-x_{t_i}|^p\Bigr\},$$
the supremum running over all partitions of $[a,b]$ in the sense of
[[def-partition-and-refinement]], and declared $+\infty$ when the set of sums
is unbounded above. For a standard Brownian motion $B$ [[def-brownian-motion]],
almost surely on every nondegenerate compact interval $[a,b]\subseteq[0,\infty)$:
$$V_p(B;[a,b])<\infty\quad\text{for every }p>2, \qquad V_p(B;[a,b])=+\infty\quad\text{for every }1\le p\le2 .$$
The threshold exponent is therefore $2$, and the example keeps the supremal
two-variation $V_2$ distinct from the dyadic quadratic sums of
[[thm-brownian-quadratic-variation-along-dyadic-partitions]], which, for each fixed deterministic interval, converge almost surely to
$b-a$. This last assertion has its own fixed-interval null set; no
simultaneous uncountable family of dyadic convergence claims is asserted.
For the proof use the version obtained by keeping $B$ on its one measurable
continuity-and-zero-start event and replacing the whole path by zero outside
it [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]].
The simultaneous variation conclusion transfers to the original process
on that same event.

## Facts & Assumptions

**Given:** AC, AC$_\omega$, a standard Brownian motion $B$ with its all-path continuous jointly measurable version, rationals $1\le p$, $0\le a<b$ and the notation $V_p$ above.

[F1] Almost surely there is one event on which every path is continuous and, for every $T>0$ and $0<\gamma<1/2$, a finite $K=K(\omega,T,\gamma)$ bounds $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,T]$. [[cor-brownian-paths-are-locally-holder-of-every-order-below-one-half]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] For each fixed $T>0$, the dyadic squared-increment sums on $[0,T]$ converge almost surely to $T$. Application to a shifted Brownian motion will be justified in step 1.4. Almost surely total variation is infinite on every nondegenerate compact interval. [[thm-brownian-quadratic-variation-along-dyadic-partitions]] [[cor-brownian-paths-have-infinite-total-variation-on-every-interval]]

[F3] Almost surely $\limsup_{h\downarrow0}|B_h|/\sqrt{2h\log\log(1/h)}=1$, and the shifted increment process $h\mapsto B_{t+h}-B_t$ is again a standard Brownian motion, so the same statement holds for every fixed deterministic $t\ge0$. [[cor-brownian-law-of-the-iterated-logarithm-at-zero]] [[def-brownian-motion]]

[F4] Every finite-valued nondecreasing function on a compact interval is differentiable with finite derivative at Lebesgue-almost every interior point. The monotone-differentiability interface assumes AC$_\omega$; no integral representation or continuity of accumulated variation is needed. [[thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]] [[def-countable-choice]]

[F5] Fubini applies to the indicator of a product-measurable set on $[a,b]\times\Omega$, so its $\omega$-section lengths integrate to its product measure. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F7] A continuous real function on a compact interval is uniformly continuous. Partitions are finite increasing endpoint lists. [[thm-heine-cantor-r]] [[def-partition-and-refinement]]

[F6] The rationals are dense in $\mathbb R$; AC is the ambient assumption of the Brownian interfaces. [[lem-rat-embeds-dense]] [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 If $x$ is constant all its variation sums are zero, and if $p=q$ the comparison is equality. Otherwise fix a nonconstant continuous $x$ on $[a,b]$ with finite oscillation $M:=\max_{[a,b]}x-\min_{[a,b]}x$, and let $1\le p<q$; for every partition, $\sum_i|x_{t_{i+1}}-x_{t_i}|^q\le M^{q-p}\sum_i|x_{t_{i+1}}-x_{t_i}|^p$, so taking suprema gives $V_q(x;[a,b])\le M^{q-p}V_p(x;[a,b])$; consequently $V_p<\infty$ implies $V_q<\infty$ and $V_q=\infty$ implies $V_p=\infty$. [F7, given]

1.2 Suppose that for some continuous $x$ on $[a,b]$ and some $1\le p<2$ one had $V_p(x;[a,b])<\infty$; then for the dyadic partition with mesh $h=(b-a)/2^n$ one has $\sum_k(\Delta_kx)^2=\sum_k|\Delta_kx|^{2-p}|\Delta_kx|^p\le(\max_k|\Delta_kx|)^{2-p}V_p(x;[a,b])$, and the maximum increment tends to $0$ by uniform continuity of the continuous $x$ on the compact $[a,b]$, so those quadratic sums would tend to $0$. [F7, given]

1.3 Suppose now that a continuous $x$ on $[a,b]$ satisfies $V_2(x;[a,b])<\infty$, and put $v(a)=0$ and $v(t):=V_2(x;[a,t])$ for $a<t\le b$; then $v$ is nondecreasing and finite-valued, and for $t<b$, $h>0$ with $t+h\le b$ one has $|x_{t+h}-x_t|^2\le v(t+h)-v(t)$ by adding the single point $t+h$ to partitions of $[a,t]$ and taking suprema. [F7, given]

1.4 For each fixed deterministic $t\ge0$ the process $Y_h=B_{t+h}-B_t$, $h\ge0$, starts at zero and has continuous paths. Its increments on disjoint $h$-intervals are increments of $B$ on disjoint time-translated intervals, so they have the independent centered normal laws with the required lengths. Thus $Y$ is standard Brownian motion. Applying [F2] to $Y$ with $t=a$ and $T=b-a$ identifies its dyadic sums term by term with those on $[a,b]$ and proves their almost-sure limit $b-a$ for each fixed interval. Applying [F3] to $Y$ at each fixed $t$ gives $\limsup_{h\downarrow0}|B_{t+h}-B_t|^2/h=\infty$ almost surely: along a sequence where the LIL ratio is at least $1/2$, that quotient is at least $\tfrac12\log\log(1/h)\to\infty$. [F2, F3, given]

2.1 Let $p>2$ be rational and choose a rational $\gamma$ with $1/p<\gamma<1/2$; by [F1] there is, on a probability-one event, a finite $K$ with $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,b]$; then for every partition of $[a,b]$, $\sum_i|B_{t_{i+1}}-B_{t_i}|^p\le K^p\sum_i(t_{i+1}-t_i)^{\gamma p}\le K^p(b-a)^{\gamma p}$ because $\gamma p>1$ and $\sum_ih_i^{\gamma p}\le(\sum_ih_i)^{\gamma p}$; hence $V_p(B;[a,b])\le K^p(b-a)^{\gamma p}<\infty$ almost surely. [step 1.1, F1]

2.2 But by step 1.4 the dyadic quadratic sums of the Brownian path converge to $b-a>0$ almost surely, so the hypothesis of [step 1.2] fails for $B$ on every rational interval $[a,b]$ and rational $p\in[1,2)$ almost surely; intersecting countably many events and using [step 1.1] to pass to every real $p\in[1,2)$ gives $V_p(B;[a,b])=\infty$ almost surely for every $p\in[1,2)$ and every nondegenerate compact interval. [step 1.1, step 1.2, step 1.4, F2]

2.3 By [F4] the function $v$ is differentiable at Lebesgue-almost every $t\in(a,b)$ with finite derivative, so at those $t$ one has $\limsup_{h\downarrow0}|x_{t+h}-x_t|^2/h\le v'(t)<\infty$. [step 1.3, F4]

2.4 Let $N:=\{t\in[a,b]:\limsup_{h\downarrow0,h\in\mathbb Q}|B_{t+h}-B_t|^2/h<\infty\}$; the set is product measurable: for each rational $h>0$ the map $(t,\omega)\mapsto(t+h,\omega)$ is product measurable, so joint measurability of $B$ makes each difference quotient measurable, and the limsup is the infimum over positive integers $n$ of the countable suprema over rational $0<h<1/n$. Its indicator is integrable since the product space has total measure $b-a$. For every fixed deterministic $t\in[a,b)$ the shifted process $h\mapsto B_{t+h}-B_t$ is again a standard Brownian motion by [F3], so the divergence recorded in [step 1.4] holds for that $t$: along a sequence $h_k\downarrow0$ the squared difference quotient is unbounded. Since the path $h\mapsto B_{t+h}$ is continuous, the function $h\mapsto|B_{t+h}-B_t|^2/h$ is finite-valued and continuous on $(0,\infty)$, so for every $\delta>0$ its supremum over the dense subset $\mathbb Q\cap(0,\delta)$ equals its supremum over all of $(0,\delta)$, the limsup along rational $h\downarrow0$ coincides with the limsup along real $h\downarrow0$, and the latter is $+\infty$ almost surely; hence $P(t\in N)=0$ for every $t\in[a,b)$ and not merely for the rational ones. Therefore [F5] gives $E\lambda(N)=\int_a^bP(t\in N)\,dt=0$ and hence $\lambda(N)=0$ almost surely. [F3, step 1.4, F5]

3.1 Intersecting the events of [step 2.1] over the countably many rational $p>2$ and rational pairs $a<b$, and using [step 1.1] to pass from a rational $p$ to every real $q>2$ with $p\le q$, we obtain: almost surely $V_q(B;[a,b])<\infty$ for every $q>2$ and every compact interval with rational endpoints, hence by containment for every nondegenerate compact interval. [step 1.1, step 2.1, F6]

3.2 First intersect the events from step 2.4 over all rational $0\le a<b$. On the resulting probability-one event the set of $t$ at which [step 2.3] would hold has measure zero, so a continuous path with $V_2(x;[a,b])<\infty$ cannot be a Brownian path: almost surely $V_2(B;[a,b])=\infty$ for every rational interval and hence every nondegenerate compact interval in $[0,\infty)$: it contains a nondegenerate rational subinterval, and any partition of the latter extends to a partition of the former by adjoining the two outer endpoints; all extra terms are nonnegative. [step 2.3, step 2.4, F6, F7]

4.1 Combining [step 3.1], [step 2.2] and [step 3.2] on the intersection of the countably many probability-one events, almost surely $V_p(B;[a,b])<\infty$ for all $p>2$ and $V_p(B;[a,b])=\infty$ for all $1\le p\le2$, simultaneously on every nondegenerate compact interval; the exponent $p=1$ case is the infinite total variation of the path, and the value $p=2$ is handled by the accumulated-variation argument rather than by the dyadic sums, which are finite. [step 3.1, step 2.2, step 3.2, F2]

5.1 The boundary cases are covered: $p\ge1$ is required by the statement, so no fractional exponents below one occur; the interval is nondegenerate and compact, and rational endpoints suffice by [F6]; the two-variation $V_2$ is a supremum over all partitions and is deliberately distinguished from the dyadic quadratic sums, which converge almost surely to $b-a$ for each fixed interval by step 1.4; the monotonicity of [step 1.1] transfers between exponents using the finite oscillation of a continuous function on a compact interval; AC$_\omega$ is declared exactly at the monotone-differentiability interface [F4], and AC is the ambient assumption of [F6]. [step 1.1, step 4.1, F2, F4, F6, given] ∎

## Source notes

Lawler, Section 2.8, computes the finite dyadic quadratic variation and infinite total variation of Brownian paths; the $p$-variation threshold for $p\neq2$ follows by interpolating between the total variation ($p=1$), the supremal two-variation ($p=2$) and the subcritical Hölder regularity ($p>2$). Durrett's law of the iterated logarithm at zero, transported along the shifted increments, is what rules out finite supremal two-variation, by Fubini at every fixed real time, contradicting the finite derivative of accumulated variation at almost every time. Rational times alone would not yield that contradiction.
