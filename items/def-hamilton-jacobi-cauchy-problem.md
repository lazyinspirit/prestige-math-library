---
id: def-hamilton-jacobi-cauchy-problem
kind: definition
title: The Hamilton--Jacobi Cauchy problem and its classical solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-metric-topology
- def-metric-continuity
- def-ck-and-multi-index-notation-in-several-variables
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
justified_by: []
aliases: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: 'Chapter 1: Cauchy problem (C), printed p. 9; stationary problem (S_lambda), printed p. 10; first-order Cauchy equation (1.1), printed p. 13. The closure regularity conventions are fixed locally.'
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 8, parabolic setting (8.1)--(8.4), printed pp. 49--50; closure regularity is fixed locally.
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $O\subseteq\mathbb R^n$ be nonempty and open
([[def-metric-topology]]), let $T>0$, and let
$H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous
([[def-metric-continuity]]). Write
$$Z:=O\times(0,T),\qquad \overline Z:=\overline O\times[0,T],\qquad \Gamma:=(O\times\{0\})\cup(\partial O\times[0,T])$$
for the open space--time cylinder, its closure in $\mathbb R^{n+1}$, and the
parabolic boundary. Given a continuous $u_0:O\to\mathbb R$, the
**Hamilton--Jacobi Cauchy problem** is
$$u_t+H(x,t,Du)=0\ \text{in }Z,\qquad u=u_0\ \text{on }O\times\{0\},$$
where $Du$ denotes the spatial gradient and $u_t$ the time derivative of the
unknown function ([[def-directional-and-partial-derivatives]],
[[def-total-derivative-in-euclidean-space]]).

A **classical solution** of this problem is a function
$u\in C^0(\overline Z)\cap C^1(Z)$
([[def-ck-and-multi-index-notation-in-several-variables]]) with
$u(x,0)=u_0(x)$ for every $x\in O$ and
$$u_t(x,t)+H(x,t,Du(x,t))=0\qquad\text{for every }(x,t)\in Z .$$
The continuity requirement $u\in C^0(\overline Z)$ ensures continuous attainment of the initial datum and also continuity on
the lateral and terminal faces; no condition on the lateral face
$\partial O\times[0,T]$ is imposed unless it is stated explicitly.

**Stationary specialization.** Suppose that $H$ does not depend on $t$ and
that $v\in C^1(O)$ satisfies $H(x,Dv(x))=0$ for every $x\in O$; such a $v$ is
called a **classical solution of the stationary Hamilton--Jacobi equation**
$H(x,Dv)=0$. If in addition $v$ extends continuously to $\overline O$, then
$u(x,t):=v(x)$ is a classical solution of the Cauchy problem with datum
$u_0:=v|_O$, because $u\in C^0(\overline Z)\cap C^1(Z)$ and
$u_t\equiv0$ on $Z$.

## Remarks

- **What the definition fixes.** The open cylinder $Z=O\times(0,T)$, its
  closure, the parabolic boundary $\Gamma$, the initial face $O\times\{0\}$ on
  which the datum is read, the Hamiltonian domain
  $O\times[0,T]\times\mathbb R^n$ with its continuity, and the regularity
  class $C^0(\overline Z)\cap C^1(Z)$ of a classical solution are the data
  used by every viscosity notion on this page. In particular, "the initial
  datum is attained" means continuous attainment on the initial face, not a
  merely pointwise boundary value on a larger set.

- **No lateral condition, no choice.** The definition imposes no condition on
  $\partial O\times[0,T]$; statements about bounded domains add whatever
  boundary comparison they need explicitly. Nothing is selected anywhere in
  the definition, so no choice principle is used.
