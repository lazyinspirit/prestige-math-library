---
id: cor-hopf-lax-preserves-a-modulus-of-continuity
kind: corollary
title: The Hopf--Lax operator preserves a modulus of continuity
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- def-metric-uniform-continuity
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
    locator: Chapter 2 Section 5.4, Theorem 2.23 and formula (2.19), printed pp. 67--68. The translation estimate is proved directly here.
verification:
  precheck: pass
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be convex and superlinear with Legendre
transform $L$, and let $u_0:\mathbb R^n\to\mathbb R$ be bounded and uniformly
continuous with a nondecreasing modulus of continuity $\omega$ satisfying
$\omega(r)\to0$ as $r\downarrow0$ and
$|u_0(y)-u_0(y')|\le\omega(|y-y'|)$. Then for every $t\ge0$ and all
$x,x'\in\mathbb R^n$,
$$|Q_tu_0(x)-Q_tu_0(x')|\le\omega(|x-x'|).$$
Thus every $Q_tu_0$ has the same modulus of continuity and the family is
spatially equicontinuous; this is the equicontinuity input of the
initial-trace and vanishing-viscosity arguments. No choice principle is used.

## Facts & Assumptions

**Given:** A convex superlinear $H$, its Legendre transform $L$, a bounded uniformly continuous $u_0$ with modulus $\omega$ as in the statement, the operators $Q_t$ of [[def-hopf-lax-operator]], and points $x,x'\in\mathbb R^n$ with $d:=x-x'$.

[F1] For $t>0$, $Q_tu_0(x)=\inf_{y\in\mathbb R^n}\{u_0(y)+tL((x-y)/t)\}$, with the infimum in $\mathbb R\cup\{+\infty\}$; $Q_0u_0=u_0$ ([[def-hopf-lax-operator]]).

[F2] Under the present hypotheses $L$ is real-valued, the infima above are attained, and $Q_tu_0(x)\in\mathbb R$ for every $x$ and every $t\ge0$ ([[lem-hopf-lax-infima-localise]]), so all infima compared below are real numbers.

[F3] The given modulus is a nondecreasing function $\omega$ with $\omega(r)\to0$ as $r\downarrow0$ and $|u_0(y)-u_0(y')|\le\omega(|y-y'|)$ for all $y,y'$. This is a hypothesis of the statement; it implies the epsilon--delta uniform continuity of [[def-metric-uniform-continuity]] by choosing $\delta>0$ with $\omega(\delta)<\varepsilon$.

## Proof

**Proof technique:** translate a competitor in the infimum.

1.1 Translation of a competitor. Fix $t>0$ and let $d:=x-x'$. For every $y'\in\mathbb R^n$ put $y:=y'+d$. Then $(x-y)/t=(x'-y')/t$ and, by [F3], $u_0(y)\ge u_0(y')-\omega(|d|)$; hence $u_0(y)+tL((x-y)/t)\ge u_0(y')+tL((x'-y')/t)-\omega(|d|)$. As $y'$ ranges over $\mathbb R^n$ so does $y$, so taking the infimum over $y'$ of the right-hand side and using [F1] and [F2] gives $Q_tu_0(x)\ge Q_tu_0(x')-\omega(|x-x'|)$. Exchanging $x$ and $x'$ gives the reverse inequality $Q_tu_0(x')\ge Q_tu_0(x)-\omega(|x-x'|)$. [F1, F2, F3, algebra]

2.1 Conclusion. For $t>0$ step 1.1 gives $|Q_tu_0(x)-Q_tu_0(x')|\le\omega(|x-x'|)$, and for $t=0$ the same inequality is the hypothesis $|u_0(x)-u_0(x')|\le\omega(|x-x'|)$ by [F1]. Hence every $Q_tu_0$ has modulus $\omega$, uniformly in $t$, and the estimate is translation invariant because $L$ does not depend on the space variable. [step 1.1, F1] ∎ 