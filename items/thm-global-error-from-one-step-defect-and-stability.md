---
id: thm-global-error-from-one-step-defect-and-stability
title: "Global error from uniform one-step defect and stability"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - def-real-exponential-function-and-e
  - def-one-step-ode-method-local-defect-order-and-stability
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $d,N,p\ge1$, $T>0$, $h=T/N$, and $t_n=nh$. Let $y:[0,T]\to\mathbb R^d$ solve an initial-value problem in an open time-state domain $D$. Use the Euclidean norm $\|v\|_2=(\sum_{i=1}^d v_i^2)^{1/2}$ of [[def-euclidean-inner-product]], whose triangle inequality is proved in [[thm-cauchy-schwarz-and-the-euclidean-norm]]. Let $\mathcal T\subset D$ be a common compact time-state tube with positive margin in $D$, and write $\mathcal T_t:=\{v\in\mathbb R^d:(t,v)\in\mathcal T\}$. Suppose a one-step map $\Psi_{h,n}$ is defined on $\mathcal T_{t_n}$, produces $y_{n+1}=\Psi_{h,n}(y_n)$, and the entire exact path, all numerical grid states, and every method stage lie in $\mathcal T$. If constants $C,C_0,L\ge0$, independent of $N$ and $n$, satisfy
$$\|y_0-y(0)\|_2\le C_0h^p,\qquad \|\Psi_{h,n}(y(t_n))-y(t_{n+1})\|_2\le Ch^{p+1},$$
and
$$\|\Psi_{h,n}(u)-\Psi_{h,n}(v)\|_2\le(1+Lh)\|u-v\|_2$$
for every $u,v\in\mathcal T_{t_n}$ and $0\le n<N$, then, for $L>0$,
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le\left(C_0\exp(LT)+C\frac{\exp(LT)-1}{L}\right)h^p,$$
and, for $L=0$,
$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le(C_0+CT)h^p.$$

## Facts & Assumptions

**Given:** An exact first-order initial-value problem, the stated one-step map and tube, and the local-defect, stability, and initial-error bounds.

[F1] A solution of a first-order system satisfies $x(t_0)=x_0$ and $x'(t)=F(t,x(t))$ on its interval ([[def-first-order-ode-initial-value-problem-and-solution]]).

[F2] For a one-step map, the local defect is the difference between its exact-start output and the exact next state; uniform local order $p$ bounds its norm by $Ch^{p+1}$, and one-step Lipschitz stability bounds changes in the output by $(1+Lh)$ times the input change ([[def-one-step-ode-method-local-defect-order-and-stability]]).

[F3] The Euclidean norm on $\mathbb R^d$ satisfies $\|u+v\|_2\le\|u\|_2+\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F4] $\exp$ is the real exponential defined by its factorial power series, with $e:=\exp(1)$ ([[def-real-exponential-function-and-e]]).

[L1] For $h=T/N$ and $e_{n+1}\le(1+Lh)e_n+Ch^{p+1}$ with $e_0\le C_0h^p$, the finite recurrence has the two bounds stated in this item's conclusion ([[lem-discrete-one-step-error-recurrence-bound]]).

[A1] The one-step map is defined on each stated time fiber, the entire exact path, numerical grid states and method stages remain in $\mathcal T$, and its uniform local defect and fiberwise stability inequalities in the Statement hold.

## Proof

1.1 By [F1], each $y(t_n)$ is a defined reference state of the exact initial-value problem; [F2] identifies the two uniform inequalities in [A1] as the one-step stability and local-defect bounds. Put $e_n:=\|y_n-y(t_n)\|_2$. The Euclidean triangle inequality [F3] and those bounds give $e_{n+1}\le\|\Psi_{h,n}(y_n)-\Psi_{h,n}(y(t_n))\|_2+\|\Psi_{h,n}(y(t_n))-y(t_{n+1})\|_2\le(1+Lh)e_n+Ch^{p+1}$. [F1, F2, F3, A1, algebra]

2.1 Apply [L1] to the nonnegative sequence $(e_n)_{n=0}^N$ using the recurrence from step 1.1 and the initial bound in [A1]. The two cases $L>0$ and $L=0$ give exactly the displayed conclusions, with exponential notation as in [F4]. [A1, F4, L1, step 1.1] ∎
