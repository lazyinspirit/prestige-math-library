---
id: lem-gaussian-sample-covariance-operator-concentration
kind: lemma
title: Gaussian sample covariance converges in operator norm when dimension is little-o of sample size
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - cor-markov-inequality-for-random-variables
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "AC is inherited from the stated finite-dimensional Gaussian realization; the net and Chernoff argument uses no DC or countable choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, Appendix K"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
---

## Statement

Assume AC. Let $d_k,n_k\ge1$ be integer sequences with $d_k/n_k\to0$. For each $k$, let $G_k\in\mathbb R^{n_k\times d_k}$ have mutually independent $N(0,1)$ entries. Then

$$\left\|\frac{G_k^{\mathsf T}G_k}{n_k}-I_{d_k}\right\|_{\mathrm{op}}\xrightarrow[k\to\infty]{\mathbb P}0.$$

## Statement references

[Wainwright, Appendix K, Gaussian matrix spectral-norm concentration](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Facts & Assumptions

**Given:** AC, integer sequences $d_k,n_k\ge1$ with $d_k/n_k\to0$, and matrices $G_k$ with independent standard-normal entries.

[A1] The finite-dimensional Gaussian construction assumes AC and gives standard-normal linear projections with the stated covariance ([[def-axiom-of-choice]], [[def-multivariate-normal-law]]).

[F1] A standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F2] For a nonnegative random variable $U$ and $a>0$, $\mathbb P(U\ge a)\le\mathbb E[U]/a$ ([[cor-markov-inequality-for-random-variables]]).

[F3] For a real symmetric matrix $H$, $\|H\|_{\mathrm{op}}=\sup_{\|x\|_2=1}|x^{\mathsf T}Hx|$ ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] The Euclidean inner product satisfies $|x^{\mathsf T}y|\le\|x\|_2\|y\|_2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 Fix $k$, abbreviate $d=d_k$, $n=n_k$, and take a fixed unit $v\in\mathbb R^d$. The row products $Z_i=(G_kv)_i$ are independent $N(0,1)$ by [A1]. From [F1], $\mathbb E e^{tZ_i^2}=(1-2t)^{-1/2}$ for $t<1/2$; applying [F2] at $t=\delta/(2(1+\delta))$ gives $\mathbb P(n^{-1}\sum_iZ_i^2\ge1+\delta)\le e^{-n[\delta-\log(1+\delta)]/2}\le e^{-n\delta^2/8}$ for $0<\delta\le1$, since $\delta-\log(1+\delta)=\int_0^\delta t/(1+t)\,dt\ge\delta^2/4$. For $0<\delta<1$, applying [F2] at $u=\delta/(2(1-\delta))$ gives $\mathbb P(n^{-1}\sum_iZ_i^2\le1-\delta)\le e^{-n[-\delta-\log(1-\delta)]/2}\le e^{-n\delta^2/4}$, since $-\delta-\log(1-\delta)=\int_0^\delta t/(1-t)\,dt\ge\delta^2/2$; at $\delta=1$ this event requires all $Z_i=0$ and has probability zero. Thus $\mathbb P(|v^{\mathsf T}(G_k^{\mathsf T}G_k/n-I_d)v|>\delta)\le2e^{-n\delta^2/8}$. [A1, F1, F2, given, algebra]

2.1 Fix $0<\varepsilon<1$ and greedily add unit vectors at distance greater than $1/4$ from those already chosen whenever possible. The open balls of radius $1/8$ around a finite separated set are disjoint and lie in the radius-$9/8$ ball, so volume comparison gives $|\mathcal N|(1/8)^d\le(9/8)^d$; hence the process terminates within $9^d$ choices and its maximal set is a $1/4$-net. Applying step 1.1 with $\delta=\varepsilon/2$ and taking a union bound yields $\mathbb P(\max_{v\in\mathcal N}|v^{\mathsf T}(G_k^{\mathsf T}G_k/n-I_d)v|>\varepsilon/2)\le2\exp(d\log9-n\varepsilon^2/32)\to0$ because $d/n\to0$. [step 1.1, choose, algebra]

3.1 For any symmetric $H$, [F3] gives $\|H\|_{\mathrm{op}}=\sup_{\|x\|_2=1}|x^{\mathsf T}Hx|$. For each unit $x$, choose $v\in\mathcal N$ with $\|x-v\|_2\le1/4$. By [F4] and the operator-norm definition, $$|x^{\mathsf T}Hx-v^{\mathsf T}Hv|=|(x-v)^{\mathsf T}Hx+v^{\mathsf T}H(x-v)|\le2(1/4)\|H\|_{\mathrm{op}}.$$ Hence $\|H\|_{\mathrm{op}}\le2\max_{v\in\mathcal N}|v^{\mathsf T}Hv|$. On the complementary event in step 2.1, take $H=G_k^{\mathsf T}G_k/n-I_d$ to obtain $\|H\|_{\mathrm{op}}\le\varepsilon$. Since this holds for every $0<\varepsilon<1$, larger tolerances follow by monotonicity, and the claimed convergence in probability follows. [F3, F4, step 2.1, algebra] ∎

