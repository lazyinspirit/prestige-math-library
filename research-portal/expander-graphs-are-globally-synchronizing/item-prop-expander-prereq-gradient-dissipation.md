---
title: Energy dissipation along a downward gradient curve
status: published
research_item: prop-expander-prereq-gradient-dissipation
dependency_level: 0
---

## Prerequisites

- [math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)
- [math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)
- [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)
- [math:lem-inf-epsilon](https://alphabetamath.cc/item/lem-inf-epsilon)
- [math:def-riemannian-metric-and-riemannian-manifold](https://alphabetamath.cc/item/def-riemannian-metric-and-riemannian-manifold)
- [math:def-piecewise-c-one-curve-on-a-manifold](https://alphabetamath.cc/item/def-piecewise-c-one-curve-on-a-manifold)
- [math:def-coordinate-derivations-at-a-point](https://alphabetamath.cc/item/def-coordinate-derivations-at-a-point)
- [math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space](https://alphabetamath.cc/item/thm-coordinate-derivations-form-a-basis-of-the-tangent-space)
- [math:def-differential-of-a-smooth-real-valued-function](https://alphabetamath.cc/item/def-differential-of-a-smooth-real-valued-function)


## Statement

Let $(M,g)$ be a smooth Riemannian manifold, let $U:M\to\mathbb R$ be smooth, and let $q:[0,\infty)\to M$ be a $C^1$ downward gradient curve: $q'(t)=-\operatorname{grad}_g U(q(t))$. At $t=0$ the derivative is understood from the right. The gradient is the vector field characterized by $g_x(\operatorname{grad}_g U(x),v)=dU_x(v)$ for every $v\in T_xM$; write $\|v\|_g^2=g_x(v,v)$. Then $\frac{d}{dt}U(q(t))=-\|\operatorname{grad}_g U(q(t))\|_g^2$, with a right derivative at $0$, and $U(q(t))$ is nonincreasing. If $U$ is bounded below along the curve, there is a finite limit $L=\lim_{t\to\infty}U(q(t))$ and $$\int_0^\infty\|\operatorname{grad}_g U(q(t))\|_g^2\,dt=U(q(0))-L.$$ Here the integral is the limit of the finite-interval integrals. Square-integrability of the speed is not asserted to imply finite length or convergence to a single point.

## Facts & Assumptions

**Given:** The manifold, metric, potential and curve in the statement.

[F1] The gradient is the metric dual of the differential, and the metric is positive definite ([math:def-riemannian-gradient-of-a-smooth-function](https://alphabetamath.cc/item/def-riemannian-gradient-of-a-smooth-function), [math:def-riemannian-metric-and-riemannian-manifold](https://alphabetamath.cc/item/def-riemannian-metric-and-riemannian-manifold)).

[F2] In Euclidean coordinates the derivative of a composition is the composition of the derivatives ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)).

[F3] The fundamental theorem integrates the derivative of a continuously differentiable real function on an interval with endpoints in its domain ([math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)).

[F4] A continuous real function on a closed interval, differentiable in its interior, has an interior derivative equal to its secant slope ([math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)).

[F5] Every nonempty real set bounded below has a greatest lower bound ([math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)), and values of the set lie arbitrarily close above that bound ([math:lem-inf-epsilon](https://alphabetamath.cc/item/lem-inf-epsilon)).

[F6] On each finite restriction of $q$, use chartwise $C^1$ regularity with continuous first derivatives and the one-sided endpoint convention; the derivatives match at interior subdivision points, so there are no interior corners ([math:def-piecewise-c-one-curve-on-a-manifold](https://alphabetamath.cc/item/def-piecewise-c-one-curve-on-a-manifold)).

[F7] In a smooth chart $x=(x^1,\ldots,x^n)$ around $p$, the coordinate derivation $\partial_i|_p$ acts on a smooth local function $h$ by $\partial_i|_p([h])=\partial_i(h\circ x^{-1})(x(p))$, and these derivations form a basis of $T_pM$ ([math:def-coordinate-derivations-at-a-point](https://alphabetamath.cc/item/def-coordinate-derivations-at-a-point), [math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space](https://alphabetamath.cc/item/thm-coordinate-derivations-form-a-basis-of-the-tangent-space)).

[F8] The differential of a smooth real-valued function acts on a tangent derivation by $dh_p(v)=v([h])$ ([math:def-differential-of-a-smooth-real-valued-function](https://alphabetamath.cc/item/def-differential-of-a-smooth-real-valued-function)).

## Proof

**Given:** The manifold, metric, potential and curve in the statement.

**Proof technique:** direct.

**Goal:** Prove the energy dissipation identity, monotonicity and the stated limiting integral.

1.1 Fix $t\ge0$, put $p=q(t)$, choose a smooth chart $x$ around $p$, and write $y=x\circ q$ near $t$. By [F6], $y$ is $C^1$, with the right derivative at $0$. By [F7], $V_t=\sum_i y_i'(t)\partial_i|_p$ is a tangent vector. For any smooth local function $h$ near $p$, [F7], [F8] and the Euclidean chain rule give $dh_p(V_t)=\sum_i y_i'(t)\partial_i(h\circ x^{-1})(y(t))=(h\circ q)'(t)$ when $t>0$. At zero, substitute $y(s)=y(0)+s y'_+(0)+o(s)$ as $s\downarrow0$ into the first-order expansion of $h\circ x^{-1}$ to obtain the same identity with right derivatives. These identities determine the action of $V_t$ on every smooth germ by [F8], independently of the chart. Thus $V_t$ is the intrinsic tangent velocity denoted by $q'(t)$, including its right endpoint value. [given, F2, F6, F7, F8, construct, algebra]

2.1 Put $f(t)=U(q(t))$. Step 1.1 with $h=U$ gives $f'(t)=dU_{q(t)}(q'(t))$, with the right derivative at zero. The chartwise $C^1$ curve and the smooth potential make this derivative continuous, including from the right at zero. Substituting the downward gradient equation and the metric-dual identity yields $f'(t)=-g_{q(t)}(\operatorname{grad}_g U,\operatorname{grad}_g U)=-\|\operatorname{grad}_g U(q(t))\|_g^2\le0$. [given, F1, F2, F6, F8, step 1.1, algebra]

3.1 For $0\le a<b$, the mean value theorem applied to $f$ on $[a,b]$ gives $f(b)-f(a)=f'(c)(b-a)\le0$ for some $c\in(a,b)$. Thus $f$ is nonincreasing. [step 2.1, F4]

3.2 For $T>0$, extend $f$ to a continuously differentiable real function on an open interval containing $[0,T]$ by setting $f(t)=f(0)+t f'_+(0)$ for $t<0$ near zero. The fundamental theorem and step 2.1 give $\int_0^T\|\operatorname{grad}_g U(q(t))\|_g^2\,dt=f(0)-f(T)$. [step 2.1, F3, construct, algebra]

4.1 Suppose $f$ is bounded below and set $L=\inf\{f(t):t\ge0\}$. This is finite because the set is nonempty and bounded below. For every $\varepsilon>0$ there is $s\ge0$ with $f(s)<L+\varepsilon$; for all $t\ge s$, monotonicity gives $L\le f(t)\le f(s)<L+\varepsilon$. Hence $f(t)\to L$ as $t\to\infty$. Taking the limit in step 3.2 proves the stated improper integral identity. Since $q'=-\operatorname{grad}_g U$, its squared speed is the integrand. [given, F5, step 3.1, step 3.2, algebra] ∎
