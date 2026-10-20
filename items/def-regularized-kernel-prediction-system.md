---
id: def-regularized-kernel-prediction-system
kind: definition
title: Regularized kernel prediction system
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 6 §6.2.2'
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
      locator: Equations (6.19)–(6.20), printed pp. 132–133.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $\mathcal X$ be a set, $k:\mathcal X\times\mathcal X\to\mathbb R$ a real positive-semidefinite kernel, and $\mathcal H$ a real reproducing-kernel Hilbert space with kernel $k$. Let $X=(x_i)_{i=1}^n$ be a nonempty finite ordered training list in $\mathcal X$, let $K=(k(x_i,x_j))_{i,j=1}^n$, let $y\in\mathbb R^n$, and let $\lambda>0$. Set $\tau=n\lambda$ and define the mean-square empirical objective

$$J(f)=\frac1n\sum_{i=1}^n(y_i-f(x_i))^2+\lambda\lVert f\rVert_{\mathcal H}^2. $$

For any finite real symmetric positive-semidefinite matrix $G\in\mathbb R^{n\times n}$, define its regularized kernel prediction system by $a_G=(G+\tau I_n)^{-1}y$ and $u_G=Ga_G$, where $I_n$ is the $n\times n$ identity matrix. The original training system uses $G=K$. The same definition applies to any positive-semidefinite matrix approximation $\widetilde K$ of $K$, with $a_{\widetilde K}=(\widetilde K+\tau I_n)^{-1}y$ and $u_{\widetilde K}=\widetilde K a_{\widetilde K}$. In either case $u_G=y-\tau a_G$. The scalar $\tau=n\lambda$ fixes the normalization between mean-square loss and the unnormalized finite linear system.

## Definition references

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces|A real positive-semidefinite kernel has nonnegative finite Gram quadratic forms, and its RKHS reproduces the kernel sections.]]

## Remarks

The definitions allow $K$ to be singular or zero. More generally, for every finite real symmetric positive-semidefinite $G$ and $\tau>0$, each nonzero $x$ satisfies $x^T(G+\tau I_n)x=x^TGx+\tau\lVert x\rVert_2^2\ge\tau\lVert x\rVert_2^2>0$. Thus each shifted matrix in the definition is positive definite and invertible, including when $G=K$ or $G=\widetilde K$; no full-rank assumption is placed on the kernel Gram matrix or on a sketch.
