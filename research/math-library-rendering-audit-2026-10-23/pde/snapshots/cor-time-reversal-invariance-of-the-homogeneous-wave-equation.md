---
id: cor-time-reversal-invariance-of-the-homogeneous-wave-equation
kind: corollary
title: "Time reversal of the homogeneous wave equation"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-wave-equation-cauchy-data-and-wave-speed, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: reversibility in time as a qualitative property of the wave equation"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 173: the time-reflection symmetry used in the odd-dimensional reduction"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.1, printed p. 46: the wave operator with the sign convention $\\Box_c=\\partial_t^2-c^2\\partial_x^2$"
---


## Statement

Let $c>0$, let $I\subseteq\mathbb R$ be an open interval and let $u\in C^2(\mathbb R^n\times I)$ satisfy $\Box_cu=0$ on $\mathbb R^n\times I$. For $\tau\in I$ define $v(x,t):=u(x,2\tau-t)$ for $t\in2\tau-I$. Then $\Box_cv=0$ on $\mathbb R^n\times(2\tau-I)$, and
$$v(\cdot,\tau)=u(\cdot,\tau),\qquad \partial_tv(\cdot,\tau)=-\partial_tu(\cdot,\tau).$$
Thus the homogeneous wave flow is reversible: the same equation propagates the time-reversed state, and the velocity is negated.

## Facts & Assumptions

**Given:** an open interval $I$, a parameter $\tau\in I$, a $C^2$ function $u$ on $\mathbb R^n\times I$ with $\Box_cu=0$, and $v(x,t)=u(x,2\tau-t)$ on $\mathbb R^n\times(2\tau-I)$.

[F1] If $g$ is totally differentiable at $a$ and $f$ at $g(a)$, then $f\circ g$ is totally differentiable at $a$ with $D(f\circ g)(a)=Df(g(a))\circ Dg(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F2] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules and derivatives; in particular the affine map $t\mapsto2\tau-t$ has derivative $-1$ ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Apply [F1] to the composition $(x,t)\mapsto(x,2\tau-t)\mapsto u(x,2\tau-t)$: the inner map is affine with differential $(h,s)\mapsto(h,-s)$, so $\partial_tv(x,t)=-\partial_tu(x,2\tau-t)$; applying the same rule once more, $\partial_t^2v(x,t)=(-1)^2\partial_t^2u(x,2\tau-t)=\partial_t^2u(x,2\tau-t)$. In the spatial directions the inner map is the identity, so $\partial_{x_j}v(x,t)=\partial_{x_j}u(x,2\tau-t)$ for each $j$ and hence $\Delta v(x,t)=\Delta u(x,2\tau-t)$. [F1, F2, algebra]

2.1 Therefore for every $(x,t)$ with $t\in2\tau-I$, $\Box_cv(x,t)=\partial_t^2u(x,2\tau-t)-c^2\Delta u(x,2\tau-t)=\Box_cu(x,2\tau-t)=0$, while at $t=\tau$ the substitutions $2\tau-\tau=\tau$ give $v(x,\tau)=u(x,\tau)$ and $\partial_tv(x,\tau)=-\partial_tu(x,\tau)$. This is the reversibility of the homogeneous wave flow. [F2, algebra] ∎ 