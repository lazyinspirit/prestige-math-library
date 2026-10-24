---
id: thm-divergence-integral-error-with-separate-quadrature
title: "Global divergence-integral error separates state and quadrature error"
kind: theorem
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-global-error-from-one-step-defect-and-stability
  - def-real-power
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $T>0$, $N\in\mathbb N$ with $N\ge1$, $h=T/N>0$, and $t_n=nh$. Let $K\subseteq\mathbb R^d$ be compact, let $x:[0,T]\to K$ be an exact path, and suppose every numerical state $x_n$ also belongs to $K$. Let $q:[0,T]\times K\to\mathbb R$ be a continuous scalar integrand. Define
$$I_n:=\int_{t_n}^{t_{n+1}}q(s,x(s))\,ds,\qquad \ell_n:=\ell_0+\sum_{j=0}^{n-1}I_j.$$
Suppose the one-step state method satisfies the hypotheses of [[thm-global-error-from-one-step-defect-and-stability]] at its positive integer order $p$, and write $K_x$ for its resulting constant, so $\max_n\|x_n-x(t_n)\|_2\le K_xh^p$. Let $Q_h(t_n,\cdot):K\to\mathbb R$ be the increment map in the numerical scalar update $\widehat\ell_{n+1}=\widehat\ell_n+Q_h(t_n,x_n)$, with $|\widehat\ell_0-\ell_0|\le C_{\ell,0}h^r$ for $r\in\mathbb R$ with $r\ge0$, using the real powers of [[def-real-power]]. If constants $K_q,D\ge0$ and an integer $m\ge1$ satisfy, uniformly for $n<N$ and $u,v\in K$,
$$|Q_h(t_n,u)-Q_h(t_n,v)|\le hK_q\|u-v\|_2,\qquad |Q_h(t_n,x(t_n))-I_n|\le Dh^{m+1},$$
then
$$\max_{0\le n\le N}|\widehat\ell_n-\ell_n|\le C_{\ell,0}h^r+TK_qK_xh^p+DT h^m.$$

## Facts & Assumptions

**Given:** The exact path, continuous integrand, numerical state and scalar updates, and the uniform state-solver, sensitivity, and quadrature-defect hypotheses in the Statement.

[F1] Under the full hypotheses of [[thm-global-error-from-one-step-defect-and-stability]], the state method has a fixed-time bound $K_xh^p$ with the explicit $L>0$ and $L=0$ constants. These hypotheses require a common compact time-state tube with positive margin in the open ODE domain, containing the entire exact path, all numerical grid states, and every method stage; the one-step map is defined on each grid-time fiber, with local-defect bound $Ch^{p+1}$, fiberwise stability factor $1+Lh$, and initial error bound $C_0h^p$, for constants independent of $N$ and $n$.

[A1] For each step, the scalar update is Lipschitz in its starting state with constant $hK_q$ and has exact-start quadrature defect at most $Dh^{m+1}$; the initial scalar error is at most $C_{\ell,0}h^r$.

[F3] For $h>0$ and $r\in\mathbb R$, $h^r$ is the real power defined by $h^r=\exp(r\log h)$ ([[def-real-power]]).

## Proof

1.1 Let $e_n:=|\widehat\ell_n-\ell_n|$. By [F1], $\|x_n-x(t_n)\|_2\le K_xh^p$. The exact and numerical scalar updates, the triangle inequality, and [A1] give $e_{n+1}\le e_n+|Q_h(t_n,x_n)-Q_h(t_n,x(t_n))|+|Q_h(t_n,x(t_n))-I_n|\le e_n+hK_qK_xh^p+Dh^{m+1}$. [F1, A1, algebra]

2.1 Iterating the recurrence from step 1.1 for $n$ steps yields $e_n\le e_0+n(hK_qK_xh^p+Dh^{m+1})$. Since $n\le N=T/h$ and $e_0\le C_{\ell,0}h^r$, this is at most $C_{\ell,0}h^r+TK_qK_xh^p+DT h^m$. Taking the maximum proves the claim. [A1, F3, step 1.1, algebra] ∎

## Remarks

For a continuous normalizing flow, $q(t,x)=-\operatorname{div}_x f(t,x)$. This theorem bounds that divergence integral without identifying it as a probability log density; the separate identification is proved in [[thm-continuous-flow-log-density-equation]]. The bound makes a higher-order state solver insufficient by itself: the chosen divergence quadrature must also have the required order $m$ and state sensitivity bound.
