---
id: alg-ip-regularized-levenberg-marquardt
kind: algorithm
title: Regularized nonlinear Levenberg–Marquardt with discrepancy stopping
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-nonlinear-forward-map
  - def-frechet-derivative-between-banach-spaces
  - def-ip-product-tangential-cone-condition
  - def-countable-choice
  - def-hilbert-space-adjoint
  - lem-hilbert-tikhonov-normal-operator-invertible
justified_by:
  - lem-ip-lm-step-existence-and-residual-forcing
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, §11.2, equations (11.14)–(11.16)"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Inverse Problems – Applications and Solution Strategies, PDF p. 63"
      url: "https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Assume Countable Choice. Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$
be open, and let $F:U\to Y$ be continuously Fréchet differentiable, meaning
that $F$ is Fréchet differentiable at each point of $U$ and
$x\mapsto F'(x)$ is continuous in operator norm. The input consists of an
initial point $x_0\in U$, a datum $y^\delta\in Y$, a positive noise bound
$\delta>0$, a discrepancy factor $\tau>1$, a forcing fraction $\sigma\in(0,1)$,
a range-approximation margin $\gamma>1$, and a finite update budget
$N_{\max}\in\mathbb N_0:=\{0,1,2,\ldots\}$. Assume an exact solution $x^\dagger\in U$ exists
with $F(x^\dagger)=y$ and $\|y^\delta-y\|_Y\le\delta$. At every state
$x_n^\delta$ before the discrepancy stop, the admissible local range condition
is
$$\|F'(x_n^\delta)(x^\dagger-x_n^\delta)+F(x_n^\delta)-y^\delta\|_Y\le\frac{\sigma}{\gamma}\|F(x_n^\delta)-y^\delta\|_Y.$$

For $x_n^\delta\in U$ and $\alpha>0$, define $h_{n,\alpha}$ to be the unique
global minimizer over $h\in X$ of the regularized linearized least-squares
objective
$$J_{n,\alpha}(h):=\frac12\|F'(x_n^\delta)h+F(x_n^\delta)-y^\delta\|_Y^2+\frac\alpha2\|h\|_X^2.$$
Equivalently, it is the unique solution of
$$\bigl(F'(x_n^\delta)^*F'(x_n^\delta)+\alpha I_X\bigr)h_{n,\alpha}=F'(x_n^\delta)^*(y^\delta-F(x_n^\delta)).$$
Here $I_X$ is the identity operator on $X$.
The forcing rule selects any $\alpha_n>0$ for which
$$\|F'(x_n^\delta)h_{n,\alpha_n}+F(x_n^\delta)-y^\delta\|_Y=\sigma\|F(x_n^\delta)-y^\delta\|_Y,$$
and sets $x_{n+1}^\delta=x_n^\delta+h_{n,\alpha_n}$. The displayed range
condition is a sufficient condition for the forcing rule to have such a
parameter; it is not an input to either linearized minimization problem.

For a finite run, inspect $n=0,1,\ldots,N_{\max}$ in order. If
$x_n^\delta\notin U$, return $(x_n^\delta,n,\texttt{domain-failure})$. If
$\|F(x_n^\delta)-y^\delta\|_Y\le\tau\delta$, return
$(x_n^\delta,n,\texttt{discrepancy})$. If $n=N_{\max}$, return
$(x_n^\delta,n,\texttt{budget-exhausted})$. Otherwise request the exact
regularized minimizer and a positive parameter satisfying the forcing rule.
If the exact minimizer cannot be certified, return
$(x_n^\delta,n,\texttt{solve-unverified})$; if the parameter selector cannot
return a positive parameter satisfying the displayed equality, return
$(x_n^\delta,n,\texttt{forcing-unavailable})$. After both exact calls succeed,
set $x_{n+1}^\delta=x_n^\delta+h_{n,\alpha_n}$ and continue. Each return is a
triple of state, index, and status. No convergence claim is attached to the
failure statuses or to a budget-exhausted state.

## Definition references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps between real Hilbert spaces]]

[[def-frechet-derivative-between-banach-spaces|Fréchet differentiability on an open real Banach domain]]

[[def-ip-product-tangential-cone-condition|Product-type tangential cone condition]]

[[def-countable-choice|Axiom of Countable Choice]]

[[def-hilbert-space-adjoint|Hilbert-space adjoint under Countable Choice]]

[[lem-hilbert-tikhonov-normal-operator-invertible|Invertibility of the shifted normal operator]]

[Christian Clason, *Regularization of Inverse Problems*, §11.2, equations (11.14)–(11.16)](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, *Inverse Problems – Applications and Solution Strategies*, PDF p. 63](https://me.aau.at/~bkaltenb/AD12_kaltenbacher.pdf)

## Remarks

The iteration is unanchored: its increment minimizes the linearized residual plus a positive penalty on the increment. It has no $\alpha_n(x_0-x_n^\delta)$ term, and the anchored IRGNM theorem is not used for it. The theorem on this page uses exact regularized minimizers and exact residual-forcing parameters; it gives no guarantee for arbitrary inexact linear solves.
