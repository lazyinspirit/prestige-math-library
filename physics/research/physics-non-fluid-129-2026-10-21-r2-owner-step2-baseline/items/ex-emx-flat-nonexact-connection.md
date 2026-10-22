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
  - thm-emx-local-potential-homotopy
  - thm-poincare-lemma-for-differential-forms-on-star-shaped-domains
  - cor-zero-total-derivative-on-a-convex-open-set-is-constant
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
dependency_roles:
  thm-emx-local-potential-homotopy: mathematical-premise
  thm-poincare-lemma-for-differential-forms-on-star-shaped-domains: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
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

[[thm-emx-local-potential-homotopy]]

[[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]

## Facts & Assumptions

**Given:** The punctured plane, the one-form $A$, and the smooth loop $\gamma$ in the Example.

[F1] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d(P\,dx+Q\,dy)=(\partial_xQ-\partial_yP)\,dx\wedge dy$.

[F2] [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]] justify differentiating the coefficients of $A$ where $x^2+y^2>0$.

[F3] [[thm-emx-local-potential-homotopy]] defines periods on smooth singular cycles and makes every nonzero period an obstruction to global exactness.

[F4] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]] says every smooth closed $k$-form on a star-shaped open subset of $\mathbb R^n$ is exact for $k\ge1$.

[F5] [[cor-zero-total-derivative-on-a-convex-open-set-is-constant]] says a totally differentiable function with zero derivative on a convex open set is constant there.

## Verification

1.1 Put $s=x^2+y^2>0$, $P=-ys^{-1}$, and $Q=xs^{-1}$. By [F2], $\partial_xQ=s^{-1}-2x^2s^{-2}$ and $\partial_yP=-s^{-1}+2y^2s^{-2}$, so [F1] gives $dA=(2s^{-1}-2(x^2+y^2)s^{-2})\,dx\wedge dy=0$. [F1, F2, given, algebra]

1.2 The loop has $\gamma(0)=\gamma(1)$, so its singular boundary is zero. Pulling back gives $\gamma^*A=2\pi\,dt$, because $-y\,dx+x\,dy=2\pi\,dt$ and $x^2+y^2=1$ along $\gamma$. Therefore $\int_\gamma A=2\pi$, and [F3] proves that $A$ is not globally exact. [F3, given, algebra]

2.1 Every point of $B$ has the whole segment to a chosen centre in $B$, so $B$ is star-shaped. The form $A$ is closed by step 1.1; [F4] therefore supplies a smooth local primitive on $B$. [F4, given, step 1.1]

3.1 If $A=d\chi_1=d\chi_2$ on $B$, then $d(\chi_1-\chi_2)=0$. The difference is totally differentiable and has zero total derivative throughout the convex open set $B$, so [F5] makes it constant. [F5, given] ∎
