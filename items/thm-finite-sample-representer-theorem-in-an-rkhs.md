---
id: thm-finite-sample-representer-theorem-in-an-rkhs
kind: theorem
title: Finite-sample representer theorem when a minimizer exists
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 5.8, printed pp. 168–170; Exercise 5.15 is not used as proof.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.2, printed pp. 132–133; the cited representer theorem is proved locally here.'
---

## Statement

Let $\mathcal H$ be a real reproducing kernel Hilbert space with kernel $k$, let $n\ge0$, let $x_1,\ldots,x_n$ be sample points, let $L:\mathbb R^n\to\mathbb R$ be finite-valued, and let $\Omega:[0,\infty)\to\mathbb R$ be nondecreasing. Define $J(f):=L(f(x_1),\ldots,f(x_n))+\Omega(\|f\|_{\mathcal H})$. If $J$ has a minimizer, then it has a minimizer in $\operatorname{span}\{k(\cdot,x_i):1\le i\le n\}$; equivalently, at least one minimizer has the finite expansion $f(\cdot)=\sum_{i=1}^n\alpha_i k(\cdot,x_i)$. This is an existence-conditional statement and asserts no minimizer exists when none is separately guaranteed.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §5.8](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.2](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

## Facts & Assumptions

**Given:** A real RKHS $\mathcal H$ with kernel $k$, finitely many sample points, a finite-valued loss $L$, a nondecreasing penalty $\Omega$, and a minimizer $f$ of $J$.

[F1] For each $x$, the section $k_x=k(\cdot,x)$ lies in the RKHS and $\langle h,k_x\rangle=h(x)$ ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

[F2] Every finite-dimensional subspace of a real inner-product space admits a unique orthogonal projection, the residual is orthogonal to the subspace, and the projection does not increase norm ([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

## Proof




1.1 Let $M:=\operatorname{span}\{k_{x_i}:1\le i\le n\}$. It is finite-dimensional. Apply [F2] to $f$ and $M$, and write $f=p+h$ with $p\in M$ and $h\perp M$. [given, F2, construct]


2.1 For every $i$, [F1] gives $h(x_i)=\langle h,k_{x_i}\rangle=0$, so $p(x_i)=f(x_i)$. Hence the loss terms in $J(p)$ and $J(f)$ agree. [step 1.1, F1, algebra]


3.1 The norm-contraction clause of [F2] gives $\|p\|_{\mathcal H}\le\|f\|_{\mathcal H}$. Monotonicity of $\Omega$ therefore gives $J(p)\le J(f)$. [step 1.1, step 2.1, F2]


4.1 Since $f$ is a minimizer, $J(f)\le J(p)$. Thus $J(p)=J(f)$ and $p$ is also a minimizer; by its definition $p$ is a finite linear combination of the sample kernel sections. [given, step 3.1] ∎

