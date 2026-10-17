---
id: def-locally-lipschitz-ito-sde-and-maximal-solution
kind: definition
title: "Locally Lipschitz Itô SDE on an open state domain"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-continuous-brownian-ito-process
  - def-d-dimensional-brownian-motion
  - def-continuous-time-stopping-time
  - lem-distance-to-set-is-lipschitz
  - thm-heine-borel-rn
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, §1"
      url: "https://arxiv.org/pdf/1010.3756"
    - title: "Desmond J. Higham, Xuerong Mao and Andrew M. Stuart, Strong convergence of Euler-type methods for nonlinear stochastic differential equations, §§3–4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Definition

Assume AC. Fix a finite horizon $T>0$, finite dimensions $d,m\ge1$, and an
open set $U\subseteq\mathbb R^d$. Use a complete usual filtered probability
space and an adapted standard $m$-dimensional Brownian motion whose increments
after time $s$ are independent of $\mathcal F_s$, as in
[[def-d-dimensional-brownian-motion]] and
[[def-continuous-brownian-ito-process]]. Let $b:[0,T]\times U\to\mathbb R^d$
and $\sigma:[0,T]\times U\to\mathbb R^{d\times m}$ be Borel maps. Require
that they are bounded on every compact subset of $[0,T]\times U$ and locally
Lipschitz in the state uniformly in time: for every compact $K\subset U$ there
is $L_K<\infty$ such that, for every $t\in[0,T]$ and $x,y\in K$,
$$|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_F\le L_K|x-y|.$$
Let $\xi$ be $\mathcal F_0$-measurable, take values in $U$ almost surely, be
independent of the future Brownian increments, and satisfy $\mathbb E|\xi|^2<\infty$.

For $n\ge1$, set
$$K_n=\{x\in U: |x|\le n,\ \operatorname{dist}(x,U^c)\ge n^{-1}\}.$$
When $U=\mathbb R^d$, interpret $\operatorname{dist}(x,U^c)=+\infty$.
If $U^c\ne\varnothing$, the distance function is $1$-Lipschitz, so each
$K_n$ is closed; it is bounded, hence compact by Heine--Borel. For
$U=\mathbb R^d$, each $K_n$ is a closed ball and is compact as well. As $n$
increases, the radius bound increases and the distance threshold decreases, so
the sets are nested. Every $x\in U$ belongs to $\operatorname{int}K_n$ for all
sufficiently large $n$: choose $n>|x|$ and, when $U^c\ne\varnothing$,
$n^{-1}<\operatorname{dist}(x,U^c)$. Thus their interiors exhaust $U$.
[[lem-distance-to-set-is-lipschitz]] [[thm-heine-borel-rn]]

A **local strong solution up to exit** is the compatible family of stopped
adapted continuous processes $X^{(n)}$ and stopping times $\tau_n$
[[def-continuous-time-stopping-time]] such that
$$\tau_n=\inf\{t\in[0,T]:X^{(n)}_t\notin\operatorname{int}K_n\}\wedge T, \qquad X^{(n)}_{t\wedge\tau_n}=\xi+\int_0^{t\wedge\tau_n}b(s,X^{(n)}_s)\,ds+ \int_0^{t\wedge\tau_n}\sigma(s,X^{(n)}_s)\,dW_s,$$
with the equation holding indistinguishably and with $X^{(n)}$ constant after
$\tau_n$. Empty early $K_n$ simply give $\tau_n=0$. Compatibility means that
for $m\ge n$, $X^{(m)}$ stopped at $\tau_n$ equals $X^{(n)}$ up to
indistinguishability. The maximal lifetime is $\zeta=\lim_n\tau_n$; for
$t<\zeta$, the common value of $X^{(n)}_t$ for sufficiently large $n$ defines
the maximal local solution $X_t$.

This definition records a local integral equation; it does not assert that a
solution exists or that $\zeta=T$. Those are separate theorem obligations.
The local coefficient conditions allow superlinear growth; global Lipschitz
hypotheses will be imposed only on the coefficient truncations used in the
existence proof.
