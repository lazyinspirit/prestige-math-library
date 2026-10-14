---
id: thm-bias-variance-decomposition
kind: theorem
title: "Bias–variance decomposition"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-bias-and-mean-squared-error
  - def-moments-variance-and-covariance
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-cauchy-schwarz-inequality-for-l-two
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 5, PDF pp. 29–31"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, STAT 713 Lecture 6: Best Unbiased Estimators, Rao-Blackwell Theorem, PDF pp. 2–8"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_06_slides_annotated.pdf"
---

## Statement

In a statistical experiment, let $\psi:\Theta\to\mathbb R$ and let $T$ be a
real estimator with $\mathbb E_\theta[T^2]<\infty$. For every $\theta$,
$$\operatorname{MSE}_\theta(T)=\operatorname{Var}_\theta(T)+\operatorname{Bias}_\theta(T)^2.$$

## Facts & Assumptions

**Given:** A statistical experiment, a real estimand $\psi$, and an estimator $T$ that is square-integrable under each parameter law considered.

[F1] Bias is $\mathbb E_\theta[T]-\psi(\theta)$ and MSE is $\mathbb E_\theta[(T-\psi(\theta))^2]$. ([[def-bias-and-mean-squared-error]])

[F2] For square-integrable real $T$, $\operatorname{Var}_\theta(T)=\mathbb E_\theta[(T-\mathbb E_\theta T)^2]$. ([[def-moments-variance-and-covariance]])

[F3] The Lebesgue integral is linear on finite linear combinations of integrable functions. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F4] Cauchy–Schwarz gives $\int |fg|\,d\mu\leq\|f\|_2\|g\|_2$ for square-integrable $f,g$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

**Proof technique:** direct.

1.1 Fix $\theta$. Since $P_\theta$ is a probability measure, the constant $1$ has $L^2(P_\theta)$ norm $1$. Applying [F4] to $T$ and $1$ gives $\mathbb E_\theta|T|\leq(\mathbb E_\theta[T^2])^{1/2}<\infty$. Put $\mu=\mathbb E_\theta[T]$ and $b=\mu-\psi(\theta)$. Then [F1] gives $b=\operatorname{Bias}_\theta(T)$ and $T-\psi(\theta)=(T-\mu)+b$. [given, F1, F4]

2.1 Since $T,\mu\in L^1(P_\theta)$ by step 1.1 and $P_\theta(\mathcal X)=1$, [F3] gives $\mathbb E_\theta[T-\mu]=\mathbb E_\theta[T]-\mu\mathbb E_\theta[1]=0$. For every finite $c$, $(T-c)^2\leq2T^2+2c^2$, so the centered square and squared error are integrable. Expanding $(T-\psi(\theta))^2=((T-\mu)+b)^2$ now gives $\operatorname{MSE}_\theta(T)=\mathbb E_\theta[(T-\mu)^2]+b^2=\operatorname{Var}_\theta(T)+\operatorname{Bias}_\theta(T)^2$ by [F1] and [F2]. [step 1.1, F1, F2, F3, algebra] ∎
