---
id: ex-kernel-ridge-small-regularizer-amplifies-coefficient-error
kind: example
title: Small regularization can amplify coefficient error
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-regularized-kernel-prediction-system
  - thm-kernel-ridge-gram-perturbation-bound
justified_by: []
proof_strategy: direct finite verification
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  task: Compute a scalar Gram perturbation whose coefficient error grows as the regularization tends to zero.
verification:
  precheck: pass
sources:
  references:
    - title: 'Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 6 §6.2.2'
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
      locator: The ridge coefficient system in equations (6.19)–(6.20), printed pp. 132–133.
---

## Example

Take $n=1$, $y=1$, original Gram matrix $K=[0]$, positive-semidefinite approximation $\widetilde K=[d]$ with fixed $d>0$, and regularization shift $\tau>0$. Then $\lVert K-\widetilde K\rVert_2=d$, the coefficient vectors are $a_K=1/\tau$ and $a_{\widetilde K}=1/(d+\tau)$, and their absolute difference is $d/(\tau(d+\tau))$, which diverges as $\tau\downarrow0$.

## Example references

[[def-regularized-kernel-prediction-system]]: The coefficient vector solves $(G+\tau I)a_G=y$.

[[thm-kernel-ridge-gram-perturbation-bound]]: The general coefficient perturbation bound scales as $\delta\lVert y\rVert_2/\tau^2$.

## Facts & Assumptions

**Given:** $n=1$, $y=1$, $K=[0]$, $\widetilde K=[d]$ with $d>0$, and $\tau>0$.

[A1] The scalar matrices and parameters are those in the Example.

[F1] [[def-regularized-kernel-prediction-system]]: $a_G=(G+\tau I)^{-1}y$ and $u_G=Ga_G$.

[F2] [[thm-kernel-ridge-gram-perturbation-bound]]: if both Gram matrices are positive semidefinite and differ in norm by $\delta$, then $\lvert a_K-a_{\widetilde K}\rvert\le\delta\lvert y\rvert/\tau^2$.

## Verification

**Given:** The scalar data in [A1].

1.1 Both $K$ and $\widetilde K$ are positive semidefinite, and their spectral-norm difference is $d$. Their shifted systems are the positive scalars $\tau$ and $d+\tau$, so [F1] gives $a_K=1/\tau$ and $a_{\widetilde K}=1/(d+\tau)$. [given, A1, F1, algebra]

2.1 Subtraction gives $\lvert a_K-a_{\widetilde K}\rvert=\left|\frac1\tau-\frac1{d+\tau}\right|=\frac{d}{\tau(d+\tau)}$. For $0<\tau\le d$, this is at least $1/(2\tau)$, so it diverges as $\tau\downarrow0$. The general upper bound in [F2] is $d/\tau^2$; it remains a valid scale-sensitive certificate and gives no uniform coefficient bound as $\tau$ approaches zero. [given, A1, F2, step 1.1, algebra] ∎
