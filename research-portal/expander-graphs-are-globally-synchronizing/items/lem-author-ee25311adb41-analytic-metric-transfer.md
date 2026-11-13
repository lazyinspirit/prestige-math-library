---
id: lem-author-ee25311adb41-analytic-metric-transfer
kind: lemma
title: Transfer of the analytic gradient inequality to a smooth metric
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-smooth-manifold
  - math:def-riemannian-metric-and-riemannian-manifold
  - math:def-riemannian-gradient-of-a-smooth-function
  - math:def-real-analytic-germ-in-several-variables
  - thm-expander-prereq-analytic-gradient-local-input
  - math:lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:thm-real-power-laws
  - math:cor-holomorphic-functions-in-several-variables-are-smooth
  - math:def-real-power
  - math:thm-natural-logarithm-laws
  - math:thm-exponential-is-strictly-increasing
  - math:def-euclidean-inner-product
  - math:def-jacobian-matrix-and-gradient
  - math:def-differential-of-a-smooth-real-valued-function
  - math:def-coordinate-derivations-at-a-point
  - math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space
dependency_roles:
  math:def-smooth-manifold: mathematical-premise
  math:def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  math:def-riemannian-gradient-of-a-smooth-function: mathematical-premise
  math:def-real-analytic-germ-in-several-variables: mathematical-premise
  thm-expander-prereq-analytic-gradient-local-input: mathematical-premise
  math:lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:thm-real-power-laws: mathematical-premise
  math:cor-holomorphic-functions-in-several-variables-are-smooth: mathematical-premise
  math:def-real-power: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:def-euclidean-inner-product: mathematical-premise
  math:def-jacobian-matrix-and-gradient: mathematical-premise
  math:def-differential-of-a-smooth-real-valued-function: mathematical-premise
  math:def-coordinate-derivations-at-a-point: mathematical-premise
  math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement

Let $M$ be a finite-dimensional real analytic manifold without boundary: a smooth manifold equipped with a smooth atlas whose transition maps have real analytic coordinate functions. A function $U:M\to\mathbb R$ is real analytic when its expression in every chart of this atlas is locally a convergent real power series. Equip $M$ with any smooth positive-definite Riemannian metric $g$; it need not be analytic. Write $\|v\|_g=\sqrt{g(v,v)}$ and define $\operatorname{grad}_g U$ by $g(\operatorname{grad}_g U,v)=dU(v)$. For each $p\in M$ there are a neighborhood $W$ of $p$, $c>0$ and $0<\rho<1$ such that $\|\operatorname{grad}_g U(x)\|_g\ge c|U(x)-U(p)|^\rho$ for $x\in W$. A critical point means $\operatorname{grad}_g U=0$.

## Facts & Assumptions

[F1] The local analytic input supplies the Euclidean gradient inequality with exponent in $[0,1)$. On a compact subset of a chart, local metric comparison gives $g(v,v)\le C|v|^2$ for some $C>0$. Cauchy–Schwarz holds for each tangent inner product.

[F2] The real-analytic-germ supplier gives a local holomorphic complexification in every positive dimension. By [[math:cor-holomorphic-functions-in-several-variables-are-smooth]], a holomorphic function on an open subset of $\mathbb C^m$, $m\ge1$, has continuous real coordinate derivatives of every order. The restriction to the real slice will supply smoothness of the coordinate potential; dimension zero is treated directly.

[F3] [[math:def-real-power]] defines $a^r=\exp(r\log a)$ for $a>0$ and $0^r=0$ for $r>0$, leaving $0^0$ undefined. [[math:thm-real-power-laws]] supplies the algebraic power laws for positive bases. [[math:thm-natural-logarithm-laws]] gives that $\log$ is increasing and $\log1=0$; [[math:thm-exponential-is-strictly-increasing]] gives that $\exp$ is increasing. These order statements will justify increasing the exponent on a base at most one.

[F4] [[math:def-euclidean-inner-product]] defines $\langle a,b\rangle=\sum_{i<m}a_i b_i$ and $\|a\|_2=\sqrt{\langle a,a\rangle}$. [[math:def-jacobian-matrix-and-gradient]] defines the Euclidean coordinate gradient $\nabla f=(\partial_i f)_{i<m}$. We write $|a|=\|a\|_2$ for a coordinate vector; the gradient vector is distinct from a differential.

[F5] [[math:def-coordinate-derivations-at-a-point]] defines $\partial_i|_x([U])=\partial_i(U\circ\varphi^{-1})(\varphi(x))$ in a smooth chart. [[math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space]] makes these derivations a basis of $T_xM$. [[math:def-differential-of-a-smooth-real-valued-function]] defines $dU_x(v)=v([U])$. Coordinate indices are relabelled $0\le i<m$ to agree with the coordinate gradient.

[F9] Exact suppliers: [[math:def-smooth-manifold]], [[math:def-riemannian-metric-and-riemannian-manifold]], [[math:def-riemannian-gradient-of-a-smooth-function]], [[math:def-real-analytic-germ-in-several-variables]], [[thm-expander-prereq-analytic-gradient-local-input]], [[math:lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]], [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[math:thm-real-power-laws]], [[math:cor-holomorphic-functions-in-several-variables-are-smooth]], [[math:def-real-power]], [[math:thm-natural-logarithm-laws]], [[math:thm-exponential-is-strictly-increasing]], [[math:def-euclidean-inner-product]], [[math:def-jacobian-matrix-and-gradient]], [[math:def-differential-of-a-smooth-real-valued-function]], [[math:def-coordinate-derivations-at-a-point]], [[math:thm-coordinate-derivations-form-a-basis-of-the-tangent-space]].

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusion.

1.1 In positive dimension, at every point of an analytic chart the real-analytic-germ supplier gives a holomorphic complexification $H$ on a complex polydisc, with real restriction $f=U\circ\varphi^{-1}$. By the several-variable smoothness corollary, $H$ has continuous real coordinate derivatives of every order. Holding the imaginary coordinates zero in each coordinate difference quotient shows inductively that every iterated real partial derivative of $f$ is the restriction of the corresponding real partial derivative of $H$. Those restrictions are continuous, so $f$ is smooth. Thus $U$ is smooth in the given smooth atlas, and its Riemannian gradient is defined. In dimension zero every point has a singleton chart and $U$ is locally constant, hence smooth as well. [F2, F9, given]

2.1 In positive dimension apply the local analytic inequality to $f$ at $\varphi(p)$, obtaining $c_0>0$ and $\rho_0\in[0,1)$. Choose an analytic coordinate ball centered there with compact closure inside both the chart image and the inequality neighborhood. By continuity of $f$, shrink the ball so $|f-f(\varphi(p))|\le1$. Put $\rho=(1+\rho_0)/2$, so $0<\rho<1$ and $\rho\ge\rho_0$. [F1, F9, step 1.1, choose]

2.2 In positive dimension $m=\dim M$, fix $x$ in the inverse image of the chosen coordinate ball and put $y=\varphi(x)$. By the coordinate basis theorem write any $v\in T_xM$ uniquely as $v=\sum_{i<m}a_i\partial_i|_x$, with coordinate vector $a\in\mathbb R^m$. The differential and coordinate-derivation definitions, together with linearity of a tangent derivation, give $dU_x(v)=v([U])=\sum_{i<m}a_i\partial_i f(y)=\langle\nabla f(y),a\rangle$. This derives the coordinate pairing without identifying a covector with a vector by notation alone. [F4, F5, step 1.1, algebra]

3.1 For $0<a\le1$, logarithm monotonicity gives $\log a\le\log1=0$. Multiplying by $\rho-\rho_0\ge0$ yields $\rho\log a\le\rho_0\log a$, so exponential monotonicity and the power definition give $a^\rho=\exp(\rho\log a)\le\exp(\rho_0\log a)=a^{\rho_0}$. Apply this at $a=|f-f(\varphi(p))|>0$ to the inequality of step 2.1. At $a=0$ the desired right side is zero because $\rho>0$, so the inequality follows from nonnegativity of the norm, with no evaluation of $0^0$. Consequently $\|\nabla f\|_2\ge c_0|U-U(p)|^\rho$ on the ball. [F1, F3, F4, step 2.1, algebra]

4.1 On the compact chart closure, choose $C>0$ from metric comparison, so $g_x(v,v)\le C\|a\|_2^2$ for the coordinates of step 2.2. If $\nabla f(y)\ne0$, choose $a=\nabla f(y)/\|\nabla f(y)\|_2$ and $v=\sum_{i<m}a_i\partial_i|_x$. The Euclidean inner-product formula gives $\|a\|_2=1$ and $dU_x(v)=\|\nabla f(y)\|_2$. The metric-dual identity and Cauchy–Schwarz give $\|\nabla f(y)\|_2=|g_x(\operatorname{grad}_g U(x),v)|\le\|\operatorname{grad}_g U(x)\|_g\sqrt{g_x(v,v)}\le\sqrt C\|\operatorname{grad}_g U(x)\|_g$. The same bound holds trivially if $\nabla f(y)=0$. Combining with step 3.1 proves the claim on the inverse image $W$ of the ball with $c=c_0/\sqrt C$. In dimension zero choose a singleton chart: $U$ is constant there and both sides vanish for any $c>0$, $0<\rho<1$. [F1, F3, F4, F5, F9, step 1.1, step 2.1, step 3.1, step 2.2, algebra] ∎

## Source notes

The only imported analytic inequality is the independent supplier thm-expander-prereq-analytic-gradient-local-input, whose precise source is Absil–Kurdyka, Section 3, Lemma 4, PDF p. 4. The coordinate-to-metric transfer is proved here; it uses smooth positive definiteness, not analyticity of the metric. The analytic-manifold and potential conventions are defined in the Statement.
