---
title: Point convergence for compact analytic periodic gradient flows
status: published
research_item: prop-expander-prereq-analytic-periodic-flow-convergence
dependency_level: 4
---

## Prerequisites

- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [thm-expander-prereq-analytic-gradient-local-input](item-thm-expander-prereq-analytic-gradient-local-input)
- [prop-expander-prereq-gradient-dissipation](item-prop-expander-prereq-gradient-dissipation)
- [math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-compact-implies-the-other-compactness-forms](https://alphabetamath.cc/item/thm-compact-implies-the-other-compactness-forms)
- [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)
- [math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives)
- [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)
- [math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)
- [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)
- [math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)
- [math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables)
- [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)


## Statement

Assume countable choice. Let $V$ be a nonempty finite set, $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ the finite phase torus with its flat metric, and $U:T_V\to\mathbb R$ a real analytic potential: in every angular chart it is locally represented by a convergent real power series. Let $q:[0,\infty)\to T_V$ be a $C^1$ downward gradient trajectory, meaning $q'(t)=-\operatorname{grad} U(q(t))$ for $t>0$, with the corresponding right derivative at zero. The gradient is the metric dual of $dU$, and a critical point is a point where this gradient vanishes. Then $q$ has finite length on a sufficiently late tail and converges to one critical point. A global rotation direction may be neutral; no isolated-critical-point assumption is made.

For $0\le a\le b<\infty$, write $\ell(a,b)=\int_a^b\|q'(t)\|\,dt$ for the finite-interval Riemannian length in the flat metric. The length of the tail starting at $a$ is $\ell(a,\infty)=\sup_{b\ge a}\ell(a,b)$, with value $+\infty$ allowed.

## Facts & Assumptions

[F1] The phase torus is a compact metric space, its angular charts have Euclidean metric, and its metric distance is bounded by the length of a piecewise $C^1$ curve joining its endpoints ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] Near any point $z$ of a finite-dimensional Euclidean analytic potential $f$, there are a neighborhood and constants $c>0$ and $0<\rho<1$ such that $\|\nabla f(x)\|\ge c|f(x)-f(z)|^\rho$. The positive exponent follows from the stated inequality by shrinking the neighborhood and increasing its exponent if necessary ([thm-expander-prereq-analytic-gradient-local-input](item-thm-expander-prereq-analytic-gradient-local-input)).

[F3] Along a downward gradient curve, energy is nonincreasing and its derivative is minus the squared gradient norm. If the energy is bounded below, it has a finite limit and the squared speed has finite integral over the positive half-line ([prop-expander-prereq-gradient-dissipation](item-prop-expander-prereq-gradient-dissipation), [math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function)).

[F4] Every sequence in a compact metric space has a convergent subsequence, and a continuous real function on a compact metric space attains a lower bound ([math:thm-compact-implies-the-other-compactness-forms](https://alphabetamath.cc/item/thm-compact-implies-the-other-compactness-forms), [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)).

[F5] Positive real powers have their usual derivatives, the scalar chain rule applies to differentiable compositions, and the fundamental theorem integrates a continuously differentiable function on a compact interval ([math:thm-real-power-continuity-and-derivatives](https://alphabetamath.cc/item/thm-real-power-continuity-and-derivatives), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules), [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)).

[F6] Countable choice permits the countable selections used below ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F7] A real analytic germ in $m\ge1$ real variables has an absolutely convergent local power series whose coefficients give a holomorphic complexification on a smaller polydisc. Every holomorphic function on an open subset of $\mathbb C^m$ is smooth in all its real coordinates; restriction to the real slice is therefore smooth ([math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables), [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth)).

[F8] The Riemannian speed of a $C^1$ curve is $\sqrt{g(q',q')}$ and its finite-interval length is the integral of this speed. For the flat metric these are $\|q'\|$ and $\ell(a,b)$ ([math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length)).

[F9] Real powers use $0^\alpha=0$ for $\alpha>0$ and obey $(x^r)^s=x^{rs}$ for $x>0$. A continuous function on a closed real interval, differentiable in its interior, satisfies the mean value theorem ([math:def-real-power](https://alphabetamath.cc/item/def-real-power), [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws), [math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)).

## Proof

**Given:** The torus, analytic potential, and downward gradient trajectory in the Statement.

**Goal:** Prove finite tail length and convergence to a critical point.

1.1 At every point choose an angular chart and put $m=|V|\ge1$. The coordinate potential is a real analytic germ in $m$ variables. By [F7], its absolutely convergent series defines a holomorphic complexification on a smaller complex polydisc. The smoothness supplier applies on that open polydisc. Restricting its successive real coordinate difference quotients to the real slice shows that all real coordinate derivatives of the potential exist and are continuous there. Thus $U$ is smooth. In the flat angular metric its gradient coordinates are the first partial derivatives of $U$, by [F3], so the gradient is smooth as well. Consequently $U$ and its gradient are continuous globally, and the smooth-potential hypothesis of [F3] holds. [given, F1, F3, F7]

1.2 For $\alpha>0$, [F5] gives $(x^\alpha)'=\alpha x^{\alpha-1}>0$ on $(0,\infty)$. Applying the mean value theorem in [F9] on each closed positive interval proves strict monotonicity. Given $\varepsilon>0$, set $\delta=\varepsilon^{1/\alpha}>0$. The iterated-power law gives $\delta^\alpha=\varepsilon$, so $0<x<\delta$ implies $0<x^\alpha<\varepsilon$. Together with $0^\alpha=0$, this proves continuity from the right at zero and $x^\alpha\to0$ as $x\downarrow0$. It applies in particular to $\alpha=1-\rho>0$. [F5, F9, algebra]

2.1 By compactness and [F4], $U$ is bounded below. Put $E(t)=U(q(t))$ and $L=\lim_{t\to\infty}E(t)$. By [F3], $E(t)\ge L$ and $\int_0^\infty\|q'(t)\|^2dt<\infty$. For each positive integer $n$, the integral over $[n,n+1]$ tends to zero as $n\to\infty$; choose $s_n\in[n,n+1]$ with $\|q'(s_n)\|^2$ no larger than that integral. Such a point exists by continuity, since otherwise the integral would exceed itself. [given, F1, F3, F4, F6, step 1.1, choose]

3.1 By sequential compactness, a subsequence of $q(s_n)$ converges to some $p\in T_V$. Since $q'=-\operatorname{grad}U$ and the gradient is continuous, step 2.1 gives $\operatorname{grad}U(p)=0$. Continuity of $U$ and $s_n\to\infty$ give $U(p)=L$. Restricting to this subsequence, write its times as $t_n$. [F1, F3, F4, step 1.1, step 2.1]

4.1 Choose an angular chart centered at $p$ and a closed metric ball of radius $r>0$ around $p$ inside that chart and inside a neighborhood where [F2] applies to the coordinate representation of $U$. Because the chart metric is Euclidean, the Euclidean gradient norm in [F2] equals the flat gradient norm. Thus there are $c>0$ and $0<\rho<1$ such that $\|\operatorname{grad}U(x)\|\ge c|U(x)-L|^\rho$ throughout this ball. [F1, F2, step 3.1, choose]

5.1 Write $e(t)=E(t)-L\ge0$. While $q$ stays in the ball and $e>0$, the chain rule, [F3], [F5], and step 4.1 give $-\frac{d}{dt}e(t)^{1-\rho}\ge c(1-\rho)\|q'(t)\|$. By [F8], integration therefore bounds the length between any two such times $a<b$ by $[e(a)^{1-\rho}-e(b)^{1-\rho}]/[c(1-\rho)]$. If $e$ first reaches zero, monotonicity and $e\ge0$ make it zero thereafter; [F3] then makes the gradient and speed zero thereafter. By step 1.2 the energy-power term tends to zero as the upper endpoint approaches that first zero $T$. Continuity of the speed at $T$ gives a bound $K$ on a small one-sided neighborhood, so $\int_b^T\|q'(t)\|\,dt\le K(T-b)\to0$ as $b\uparrow T$. Taking these limits extends the length bound across that time. If $e(a)=0$ initially, the curve is already stationary and the bound is zero. [F3, F5, F8, step 4.1, step 1.2, algebra]

6.1 Since $q(t_n)\to p$ and $e(t_n)\to0$, choose $n$ so that $d(q(t_n),p)+e(t_n)^{1-\rho}/[c(1-\rho)]<r$. If the curve ever left the ball after $t_n$, continuity would give a first time on its boundary. The distance from $q(t_n)$ to that boundary point is at most the intervening length, which step 5.1 bounds by $e(t_n)^{1-\rho}/[c(1-\rho)]$; the triangle inequality then contradicts its distance $r$ from $p$. Hence the whole tail stays in the ball. Taking the supremum of its finite-interval lengths gives $\ell(t_n,\infty)\le e(t_n)^{1-\rho}/[c(1-\rho)]<\infty$. [F1, F8, step 3.1, step 1.2, step 5.1, choose]

7.1 The estimate in step 5.1 applies to every later pair of times, so $\ell(a,\infty)$ for $a\ge t_n$ is at most $e(a)^{1-\rho}/[c(1-\rho)]$, which tends to zero by step 1.2. For any $t\ge t_n$ and any later subsequence time $t_j\ge t$, the distance $d(q(t),q(t_j))$ is at most this remaining length. Letting $j\to\infty$ and using $q(t_j)\to p$ proves $d(q(t),p)\to0$ as $t\to\infty$. Thus the trajectory converges to the critical point $p$ and has finite tail length. [F1, F8, step 3.1, step 1.2, step 5.1, step 6.1] ∎
