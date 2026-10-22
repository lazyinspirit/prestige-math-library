---
id: ex-emx-flat-nonexact-connection
kind: example
title: Flat potentials with nonzero circulation
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emx-lorentz-star
  - thm-poincare-lemma-for-differential-forms-on-star-shaped-domains
  - cor-zero-total-derivative-on-a-convex-open-set-is-constant
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emx-lorentz-star: mathematical-premise
  thm-poincare-lemma-for-differential-forms-on-star-shaped-domains: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: Pure mathematical example; no electromagnetic or quantum interpretation is asserted.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

On $\mathbb R^2\setminus\{0\}$, define $A=(-y\,dx+x\,dy)/(x^2+y^2)$. This smooth one-form is closed and has period $2\pi$ on the smooth singular cycle $\gamma(t)=(\cos(2\pi t),\sin(2\pi t))$, $0\le t\le1$; hence it is not $d\chi$ for any globally defined smooth real-valued $\chi$. On every convex open ball $B\subset\mathbb R^2\setminus\{0\}$, $A$ has local primitives, and any two such primitives on $B$ differ by a constant.

## Example references

[[def-emx-lorentz-star]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

[[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]

## Facts & Assumptions

**Given:** The punctured plane, the one-form $A$, and the smooth loop $\gamma$ in the Example.

[F1] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $dh=(\partial_xh)\,dx+(\partial_yh)\,dy$ for a smooth function $h$, and $d(P\,dx+Q\,dy)=(\partial_xQ-\partial_yP)\,dx\wedge dy$ for a smooth one-form.

[F2] [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]] justify differentiating the coefficients of $A$ where $x^2+y^2>0$.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] uses neighbourhood-smooth maps as singular simplices and defines the signed boundary of a smooth singular one-simplex by $\partial\gamma=\gamma(1)-\gamma(0)$.

[F4] [[def-emx-lorentz-star]] defines the period of a closed form on a finite real smooth singular cycle by its simplex integrals and defines exactness as possessing a globally defined smooth primitive.

[F5] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines the integral on a smooth singular simplex by integrating the pullback form over its affine simplex.

[F6] [[thm-stokes-theorem-for-smooth-singular-chains]] states $\int_c d\omega=\int_{\partial c}\omega$ for every smooth singular chain $c$ of positive degree and smooth form $\omega$ of one lower degree, including a one-chain and a smooth zero-form.

[F7] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]] says every smooth closed $k$-form on a star-shaped open subset of $\mathbb R^n$ is exact for $k\ge1$.

[F8] [[cor-zero-total-derivative-on-a-convex-open-set-is-constant]] says a totally differentiable function with zero derivative on a convex open set is constant there.

[F9] [[def-sine-and-cosine-by-power-series]] defines sine and cosine by their real power series; [[lem-sine-and-cosine-series-converge-everywhere]] gives infinite radius for both, and [[cor-power-series-sums-are-smooth-with-coefficient-formula]] makes their sums smooth on all of $\mathbb R$.

[F10] [[thm-sine-and-cosine-derivatives]] gives $\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$ and $\cos0=1$; [[cor-trigonometric-parity-and-pythagorean-identity]] gives $\sin^2u+\cos^2u=1$ for every real $u$.

[F11] [[def-pi-via-first-positive-cosine-zero]] gives $\pi>0$, and [[thm-sine-cosine-zero-sets-and-fundamental-period]] gives the common period $2\pi$ of sine and cosine.

[F12] [[def-riemann-integral-over-a-jordan-set]] defines the Jordan-set integral by zero extension to a bounding rectangle. [[def-multidimensional-darboux-sums]] and [[def-multidimensional-darboux-integral]] define its rectangle integral by the lower and upper grid sums and their common extremal value; this includes a one-dimensional interval used as its own bounding rectangle.

## Verification

1.1 Put $s=x^2+y^2>0$, $P=-ys^{-1}$, and $Q=xs^{-1}$. By [F2], $\partial_xQ=s^{-1}-2x^2s^{-2}$ and $\partial_yP=-s^{-1}+2y^2s^{-2}$, so [F1] gives $dA=(2s^{-1}-2(x^2+y^2)s^{-2})\,dx\wedge dy=0$. [F1, F2, given, algebra]

1.2 By [F9], the coordinate functions of $\gamma(t)=(\cos(2\pi t),\sin(2\pi t))$ are smooth on all of $\mathbb R$, using composition with the affine function $2\pi t$ and the chain rule in [F2]. By [F10], $\cos^2(2\pi t)+\sin^2(2\pi t)=1$, so this extension takes values in the punctured plane. It therefore supplies the neighbourhood-smooth extension required for a singular one-simplex in [F3]. The zero values in [F10] and periodicity in [F11] give $\gamma(0)=\gamma(1)=(1,0)$, hence $\partial\gamma=0$. Differentiating by [F10] and the chain rule gives $\gamma^*dx=-2\pi\sin(2\pi t)\,dt$ and $\gamma^*dy=2\pi\cos(2\pi t)\,dt$. Thus the pulled-back numerator is $2\pi(\sin^2(2\pi t)+\cos^2(2\pi t))\,dt=2\pi\,dt$, and its denominator is $1$, so $\gamma^*A=2\pi\,dt$. In the positive affine coordinate on the standard one-simplex, [F5] and [F12] reduce its integral to the rectangle integral of the constant $2\pi$ on $[0,1]$. For any partition $0=t_0<\cdots<t_m=1$, every subinterval has infimum and supremum $2\pi$, so both Darboux sums equal $\sum_{i=0}^{m-1}2\pi(t_{i+1}-t_i)=2\pi$. Their lower supremum and upper infimum therefore agree at $2\pi$, proving $\int_\gamma A=2\pi>0$ by [F11]; [F4] identifies this as the period. If a globally defined smooth $\chi$ satisfied $A=d\chi$, then [F6] would give $\int_\gamma A=\int_\gamma d\chi=\int_{\partial\gamma}\chi=0$, contradicting that positive value. Thus $A$ is not globally exact. [F2, F3, F4, F5, F6, F9, F10, F11, F12, given, algebra]

2.1 Every point of $B$ has the whole segment to a chosen centre in $B$, so $B$ is star-shaped. The form $A$ is closed by step 1.1; [F7] therefore supplies a smooth local primitive on $B$. [F7, given, step 1.1]

3.1 If $A=d\chi_1=d\chi_2$ on $B$, then $d(\chi_1-\chi_2)=0$. The zero-form case of [F1] makes both coordinate partial derivatives of $\chi_1-\chi_2$ zero, so its total derivative vanishes throughout the convex open set $B$; [F8] makes it constant. [F1, F8, given] ∎
