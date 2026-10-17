---
id: thm-m-step-dobrushin-stationary-residual-bound
kind: theorem
title: "m-step Dobrushin certificate for a stationary probability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-column-stochastic-matrix-and-law
  - lem-column-stochastic-l1-nonexpansive
  - lem-dobrushin-zero-sum-l1-coefficient
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-every-finite-transition-matrix-has-a-stationary-distribution
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; finite-state stationarity follows from the published Cesàro-existence theorem and all remaining arguments use finite-dimensional inequalities."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; ℓ1 contraction on the zero-sum subspace."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, equation (1.3), PDF p. 2; Seneta's norm-wise stationary perturbation estimate under a strict ergodicity coefficient."
verification:
  precheck: pass
---

## Statement

Let $P$ be a finite column-stochastic matrix and let $m\ge1$. Put $q=\delta(P^m)$, where $\delta$ is the zero-sum coefficient from [[lem-dobrushin-zero-sum-l1-coefficient]]. If $q<1$, then P has a unique stationary probability vector $\pi$. Every column probability vector $x$ satisfies

$$\|x-\pi\|_1\le\frac{\|P^m x-x\|_1}{1-q}\le\frac{m\|Px-x\|_1}{1-q}.$$

The condition $q<1$ is a certified uniqueness and error condition; when a computed upper bound for $q$ is at least one, this theorem supplies no accuracy certificate.

## Facts & Assumptions

**Given:** A finite column-stochastic matrix P, an integer $m\ge1$, and $q=\delta(P^m)<1$.

[F1] [[def-finite-column-stochastic-matrix-and-law]]: $P$ acts on column probability vectors, and the zero-sum space is $H=\{z:\mathbf1^{\mathsf T}z=0\}$ with $\|z\|_1=\sum_i|z_i|$.

[F2] [[lem-column-stochastic-l1-nonexpansive]]: P preserves coordinate sums and satisfies $\|Pz\|_1\le\|z\|_1$ for every real vector z.

[F3] [[lem-dobrushin-zero-sum-l1-coefficient]]: $\|P^m z\|_1\le q\|z\|_1$ for every $z\in H$.

[F4] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: for the row kernel $K=P^{\mathsf T}$, a stationary law is an invariant probability row vector $\pi K=\pi$; transposing gives $P\pi^{\mathsf T}=\pi^{\mathsf T}$.

[F5] [[thm-every-finite-transition-matrix-has-a-stationary-distribution]]: every finite transition matrix on a nonempty finite state space has an invariant probability; the theorem gives existence only.

## Proof

**Given:** P, m, and q as above, and a column probability vector x.

**Proof technique:** use contraction on zero-sum errors and telescope the one-step residual.

1.1 The transpose $K=P^{\mathsf T}$ is a finite row transition matrix by [F1]. By [F5] it has an invariant probability row vector, and [F4] transposes this to a stationary column probability $\pi$ for P. [F1, F4, F5, given]

2.1 If $\pi_1,\pi_2$ are stationary column probabilities, then $z=\pi_1-\pi_2$ lies in H and $P^m z=z$. By [F3], $\|z\|_1=\|P^m z\|_1\le q\|z\|_1$; since $q<1$, this forces $z=0$. Thus $\pi$ is unique. [F1, F3, step 1.1, algebra]

2.2 Let $e=x-\pi$. Both vectors have coordinate sum one, so $e\in H$. Since $P^m\pi=\pi$, reverse triangle inequality and [F3] give $\|P^m x-x\|_1=\|P^m e-e\|_1\ge\|e\|_1-\|P^m e\|_1\ge(1-q)\|e\|_1$. Dividing by $1-q>0$ proves the first bound. [F1, F3, step 1.1, algebra]

3.1 The telescoping identity $P^m x-x=\sum_{k=0}^{m-1}P^k(Px-x)$ follows by cancellation of adjacent terms. Applying [F2] repeatedly gives $\|P^k(Px-x)\|_1\le\|Px-x\|_1$ for each k; the triangle inequality therefore yields $\|P^m x-x\|_1\le m\|Px-x\|_1$. [F2, step 2.2, algebra]

4.1 Combine steps 2.2 and 3.1. The proof does not require irreducibility or aperiodicity once the stated m-step contraction is certified; if $q\ge1$, the division step is unavailable and no bound is asserted. [step 2.2, step 3.1, given] ∎
