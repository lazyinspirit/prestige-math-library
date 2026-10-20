---
id: ex-strongly-convex-regularized-loss-stability
kind: example
title: "Absolute-loss RKHS regularization has an explicit stability envelope"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-uniform-algorithmic-stability
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - thm-strongly-convex-regularized-erm-stability
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $\mathsf X=\{x_0\}$ and $\mathsf Y=\{0,1\}$ with their discrete sigma-algebras, and let $P(X=x_0,Y=1)=q$ and $P(X=x_0,Y=0)=1-q$ for $q\in[0,1]$. Take $\mathcal H=\mathbb R$ as the RKHS of the one-point kernel $K(x_0,x_0)=1$, so $f_t(x_0)=t$ and $\|f_t\|_{\mathcal H}=|t|$. Use absolute loss $c(t,y)=|t-y|$ and regularization parameter $\lambda>0$. For a size-$m$ sample and retained index set $J\subseteq[m]$, use the fixed-denominator objective $m^{-1}\sum_{j\in J}|t-y_j|+\lambda t^2$. If $p_J$ and $r_J$ count the labels $1$ and $0$ in $J$, respectively, its unique minimizer is $t_J=\min\{1,\max\{0,(p_J-r_J)/(2\lambda m)\}\}$. Thus all full and deleted outputs lie in $[0,1]$, every loss is bounded by $M=1$, and the deletion-stability coefficient satisfies $\beta_m\le1/(2\lambda m)$. For $0\le t\le1$, the population and empirical risks are $R_P(f_t)=q(1-t)+(1-q)t$ and $\widehat R_S(f_t)=m^{-1}\bigl[p_{[m]}(1-t)+r_{[m]}t\bigr]$.

## Example references

The full-size deletion convention and RKHS stability conclusion are given by [[thm-strongly-convex-regularized-erm-stability]].

Uniform deletion stability and its coefficient are defined by [[def-uniform-algorithmic-stability]].

The supervised prediction and loss setting is specified by [[def-supervised-learning-problem]].

Population risk is an integral and empirical risk is the finite sample average by [[def-population-and-empirical-risk]].

## Facts & Assumptions

**Given:** The one-point supervised model, $q\in[0,1]$, $m\ge1$, $\lambda>0$, and a sample with labels in $\{0,1\}$.

[F1] Population risk is the integral under $P$ and empirical risk is the sample average. [[def-population-and-empirical-risk]]

[F2] Uniform deletion stability is the supremum loss change from a full output to its indexed deletion output. [[def-uniform-algorithmic-stability]]

[F3] For a real RKHS with $K(x,x)\le\kappa^2$ and convex $\sigma$-Lipschitz loss, attained fixed-denominator regularized ERM minimizers have $\beta_m\le\sigma^2\kappa^2/(2\lambda m)$. [[thm-strongly-convex-regularized-erm-stability]]

[A1] Here $K(x_0,x_0)=1$ and $c(t,y)=|t-y|$; each retained sample uses denominator $m$ and $\lambda>0$. [[thm-strongly-convex-regularized-erm-stability]]

## Verification

1.1 For $t\in[0,1]$, the objective is $p_J/m+(r_J-p_J)t/m+\lambda t^2$, whose derivative vanishes at $(p_J-r_J)/(2\lambda m)$; strict convexity gives the clipped formula as the unique minimizer on this interval. For $t<0$ the objective is $p_J/m-|J|t/m+\lambda t^2$ and is decreasing toward $0$; for $t>1$ it is $|J|t/m-p_J/m+\lambda t^2$ and is increasing away from $1$. Hence no global minimizer lies outside $[0,1]$, including when $J=\varnothing$. [given, A1, algebra]

2.1 Since $t_J,y\in[0,1]$, $|t_J-y|\le1$, so the common loss bound is $M=1$. Formula [F1] gives $R_P(f_t)=q(1-t)+(1-q)t$ and $\widehat R_S(f_t)=m^{-1}[p_{[m]}(1-t)+r_{[m]}t]$ for $t\in[0,1]$. The map $t\mapsto|t-y|$ is convex and satisfies $||t-y|-|s-y||\le|t-s|$, so $\sigma=1$; the one-point RKHS has $\kappa=1$. [F1, A1, step 1.1]

3.1 By [F2] and [F3], the learner has uniform deletion-stability coefficient $\beta_m\le1/(2\lambda m)$; step 2.1 independently verifies the bounded-loss premise required by the high-probability theorem. [F2, F3, step 2.1, algebra] ∎
