---
id: lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points
kind: lemma
title: A Hopf--Lax minimiser satisfies the characteristic Euler relation at differentiability points
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- def-total-derivative-in-euclidean-space
- thm-total-derivative-computes-directional-and-partial-derivatives
- thm-total-differentiability-gives-a-local-linear-bound-and-continuity
- def-directional-and-partial-derivatives
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2 Section 5.4, formula (2.19), printed pp. 67--68; the two differentiability-point Euler relations are proved locally.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear with Legendre
transform $L$, let $u_0:\mathbb R^n\to\mathbb R$ be bounded and continuous, and
let $t>0$, $x\in\mathbb R^n$. Let $y$ be a minimiser of
$\varphi(y):=u_0(y)+tL((x-y)/t)$, which exists by
[[lem-hopf-lax-infima-localise]], put $v:=(x-y)/t$, and set $u:=Q_tu_0$. Then:
(1) if $u_0$ is differentiable at $y$ and $L$ is differentiable at $v$, then
$Du_0(y)=DL(v)$; (2) if $L$ is differentiable at $v$ and $u$ is
differentiable at $x$, then $Du(x)=DL(v)$. No choice principle is used.

## Facts & Assumptions

**Given:** A convex superlinear $H$ with Legendre transform $L$, bounded continuous $u_0$, $t>0$, $x\in\mathbb R^n$, a minimiser $y$ of $\varphi(y)=u_0(y)+tL((x-y)/t)$, $v=(x-y)/t$, $u=Q_tu_0$, and the Euclidean norm $|\cdot|$.

[F1] $Q_tu_0(x)=\inf_{y\in\mathbb R^n}\{u_0(y)+tL((x-y)/t)\}$, and the infimum is attained under the present hypotheses ([[def-hopf-lax-operator]], [[lem-hopf-lax-infima-localise]]).

[F2] $f$ is differentiable at $a$ with derivative $Df(a)$ exactly when $f(a+h)=f(a)+Df(a)h+r(h)$ with $r(h)/|h|\to0$ as $h\to0$; in that case every directional derivative exists and equals $Df(a)h$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** expand the minimality inequality to first order in the direction of the perturbation.

1.1 First-order condition at a minimiser. Fix $h\in\mathbb R^n$ and $\tau\in(0,1)$; minimality of $y$ at the point $x$ gives $u_0(y)+tL(v)\le u_0(y+\tau h)+tL\bigl(v-\tau h/t\bigr)$, where $u_0(y)+tL(v)=Q_tu_0(x)$ by [F1]. Assume $u_0$ is differentiable at $y$ and $L$ at $v$. Then $u_0(y+\tau h)=u_0(y)+\tau\langle Du_0(y),h\rangle+r_u(\tau h)$ and $L(v-\tau h/t)=L(v)-\tau\langle DL(v),h/t\rangle+r_L(-\tau h/t)$ with $r_u(\tau h)/|\tau h|\to0$ and $r_L(-\tau h/t)/|\tau h|\to0$ as $\tau\downarrow0$ by [F2]. Substituting and cancelling $u_0(y)+tL(v)$ gives $\tau\langle Du_0(y),h\rangle+r_u(\tau h)\ge\tau\langle DL(v),h\rangle-tr_L(-\tau h/t)$; dividing by $\tau>0$ and letting $\tau\downarrow0$ gives $\langle Du_0(y),h\rangle\ge\langle DL(v),h\rangle$. [F1, F2, algebra]

2.1 The two equalities. The inequality of step 1.1 holds for every $h\in\mathbb R^n$; applying it to $-h$ as well gives $\langle Du_0(y)-DL(v),h\rangle\ge0$ and $\langle Du_0(y)-DL(v),-h\rangle\ge0$, that is $|\langle Du_0(y)-DL(v),h\rangle|\le0$ for all $h$. Taking $h=Du_0(y)-DL(v)$ gives $|Du_0(y)-DL(v)|^2\le0$, hence $Du_0(y)=DL(v)$, which is (1). For (2), minimality of $y$ at the point $x+\tau h$ gives $u(x+\tau h)=Q_tu_0(x+\tau h)\le u_0(y)+tL\bigl(v+\tau h/t\bigr)=u(x)+t\bigl(L(v+\tau h/t)-L(v)\bigr)$, and if $L$ is differentiable at $v$ and $u$ at $x$ then [F2] gives $u(x+\tau h)=u(x)+\tau\langle Du(x),h\rangle+r_1(\tau h)$ and $t(L(v+\tau h/t)-L(v))=\tau\langle DL(v),h\rangle+r_2(\tau h)$ with $r_i(\tau h)/(\tau|h|)\to0$. Dividing by $\tau$ and letting $\tau\downarrow0$ gives $\langle Du(x),h\rangle\le\langle DL(v),h\rangle$ for every $h$; applying this to $-h$ yields $Du(x)=DL(v)$ by the same argument as above, which is (2). [step 1.1, F2, algebra] ∎

## Remarks

- **Differentiability is assumed only where used.** The minimiser exists by the localisation lemma, and the first-order conditions are obtained by perturbing the minimiser in a direction and expanding: no global smoothness of $u_0$, $L$ or $Q_tu_0$ is asserted, and in the convex-quadratic case $H(p)=|p|^2/2$ a minimiser need not be unique when $u_0$ is merely continuous.
- **Direction of the two relations.** Part (1) relates the datum to the Lagrangian at the minimiser, part (2) relates the value function to the Lagrangian at the same minimiser; together they identify the slope of the minimising chord with the conjugate momentum.
