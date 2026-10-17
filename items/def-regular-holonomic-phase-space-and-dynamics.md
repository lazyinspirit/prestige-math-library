---
id: def-regular-holonomic-phase-space-and-dynamics
kind: definition
title: Regular holonomic phase space and constrained dynamics
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1, §§VII.1.1–VII.1.4"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $U\subseteq\mathbb R^d$ be open, let $c:U\to\mathbb R^m$ be smooth (that is, $C^\infty$) with $1\le m<d$, let $M$ be a constant symmetric positive-definite $d\times d$ matrix, and let $V:U\to\mathbb R$ be smooth. A **holonomic constraint** is the position condition $c(q)=0$. Write $J(q)=Dc(q)$, let $Q=\{q\in U:c(q)=0\}$, and define its regular part by $Q_{\mathrm{reg}}=\{q\in Q:\operatorname{rank}J(q)=m\}$. For $q\in Q_{\mathrm{reg}}$, $A(q)=J(q)M^{-1}J(q)^T$ is positive definite. On a compact regular chart $K\subset Q_{\mathrm{reg}}$, $A^{-1}$ is uniformly bounded: $\sup_{q\in K}\|A(q)^{-1}\|_{\mathrm{op}}<\infty$.

A position-momentum pair $(q,p)$ is **consistent** when $q\in Q_{\mathrm{reg}}$ and $J(q)M^{-1}p=0$. The **regular constrained phase manifold** is
$$\mathcal M=\{(q,p)\in U\times\mathbb R^d:c(q)=0,\ J(q)M^{-1}p=0,\ q\in Q_{\mathrm{reg}}\}.$$
The ambient canonical two-form is $\omega_0=\sum_{i=1}^d dq_i\wedge dp_i$; its restriction to $\mathcal M$ is denoted $\omega_{\mathcal M}$.

For $v=M^{-1}p$, the constrained Hamilton equations are
$$\dot q=v,\qquad \dot p=-\nabla V(q)-J(q)^T\lambda,$$
with multiplier
$$\lambda=A(q)^{-1}\bigl(D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)\bigr).$$
Here $D^2c(q)[v,v]\in\mathbb R^m$ has components $v^TD^2c_j(q)v$. This multiplier is the one that keeps both $c(q)=0$ and $J(q)M^{-1}p=0$ satisfied.
