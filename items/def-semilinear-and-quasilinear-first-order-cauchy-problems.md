---
id: def-semilinear-and-quasilinear-first-order-cauchy-problems
kind: definition
title: "Semilinear and quasilinear first-order Cauchy problems on a parametrised hypersurface"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-semilinear-quasilinear-and-fully-nonlinear-pde, def-noncharacteristic-first-order-cauchy-surface]
justified_by: []
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Definition

Let $n\ge1$ and $V\subseteq\mathbb R^{n-1}$ be open, let $\gamma:V\to\mathbb R^n$
and $\phi:V\to\mathbb R$ be $C^1$, with
$\operatorname{rank}D\gamma(y)=n-1$ for every $y\in V$, and let
$a:O\to\mathbb R^n$ and $b:O\to\mathbb R$ be smooth on an open set
$O\subseteq\mathbb R^n\times\mathbb R$.  Assume that
$(\gamma(y),\phi(y))\in O$ for every $y\in V$.  The Cauchy problem for the
quasilinear equation is

$$a(x,u(x))\mathbin\cdot Du(x)=b(x,u(x)),\qquad u(\gamma(y))=\phi(y).$$

It is semilinear when $a=a(x)$ is independent of $u$.  At $y_0\in V$, a
classical local solution is a $C^1$ function $u$ on an open neighbourhood
$\Omega$ of $\gamma(y_0)$ such that $(x,u(x))\in O$ and the PDE holds for
every $x\in\Omega$, and such that there is a neighbourhood $W\subseteq V$ of
$y_0$ with $\gamma(W)\subseteq\Omega$ and
$u(\gamma(y))=\phi(y)$ for every $y\in W$.  This specializes the first-order
classification in [[def-linear-semilinear-quasilinear-and-fully-nonlinear-pde]];
the word noncharacteristic will be tested by the rank calculation below,
rather than by importing the space-time transport convention of
[[def-noncharacteristic-first-order-cauchy-surface]].
