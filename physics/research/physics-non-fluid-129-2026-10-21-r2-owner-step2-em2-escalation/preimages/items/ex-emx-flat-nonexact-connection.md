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

## Verification

1.1 Put $s=x^2+y^2>0$, $P=-ys^{-1}$, and $Q=xs^{-1}$. By [F2], $\partial_xQ=s^{-1}-2x^2s^{-2}$ and $\partial_yP=-s^{-1}+2y^2s^{-2}$, so [F1] gives $dA=(2s^{-1}-2(x^2+y^2)s^{-2})\,dx\wedge dy=0$. [F1, F2, given, algebra]

1.2 The loop $\gamma(t)=(\cos(2\pi t),\sin(2\pi t))$ has smooth coordinate functions on all of $\mathbb R$, so its restriction to $[0,1]$ is a smooth singular one-simplex; $\gamma(0)=\gamma(1)$ and [F3] gives $\partial\gamma=0$. Pulling back gives $\gamma^*A=2\pi\,dt$, because $-y\,dx+x\,dy=2\pi\,dt$ and $x^2+y^2=1$ along $\gamma$; hence [F4] identifies $\int_\gamma A=2\pi$ as its period. If a globally defined smooth $\chi$ satisfied $A=d\chi$, then [F6] would give $\int_\gamma A=\int_\gamma d\chi=\int_{\partial\gamma}\chi=0$, contradicting this value. Thus $A$ is not globally exact. [F3, F4, F5, F6, given, algebra]

2.1 Every point of $B$ has the whole segment to a chosen centre in $B$, so $B$ is star-shaped. The form $A$ is closed by step 1.1; [F7] therefore supplies a smooth local primitive on $B$. [F7, given, step 1.1]

3.1 If $A=d\chi_1=d\chi_2$ on $B$, then $d(\chi_1-\chi_2)=0$. The zero-form case of [F1] makes both coordinate partial derivatives of $\chi_1-\chi_2$ zero, so its total derivative vanishes throughout the convex open set $B$; [F8] makes it constant. [F1, F8, given] ∎
