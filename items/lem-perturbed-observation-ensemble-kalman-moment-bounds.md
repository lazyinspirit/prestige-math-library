---
id: lem-perturbed-observation-ensemble-kalman-moment-bounds
kind: lemma
title: Uniform finite-horizon moment bounds for perturbed-observation EnKF ensembles
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-ensemble-kalman-filter
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-holder-inequality-for-random-variables
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: induction
axiom_use: Assume AC through the cited finite-dimensional Gaussian laws. The moment estimates and induction use no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §4, Lemma 5"
      url: "https://arxiv.org/pdf/0901.2951v2"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
---

## Statement

Fix a finite horizon linear-Gaussian model from [[def-linear-gaussian-state-space-model-with-independent-noises]], with each observation covariance $R_k\succ0$. Run the perturbed-observation procedure of [[alg-ensemble-kalman-filter]] with iid Gaussian initial members and independent Gaussian process and observation perturbations having the model's laws. For every finite $p\ge1$, there are constants $c_{k,p}$ for $0\le k\le T$ and $b_{k,p}$ for $1\le k\le T$, independent of ensemble size $N\ge2$ and member index $i$, such that
$$\sup_{N,i}\mathbb E\|X_{N,i}^{a,k}\|^p\le c_{k,p}\quad(0\le k\le T),\qquad \sup_N\mathbb E\|K_N^k\|_{\rm op}^p\le b_{k,p}\quad(1\le k\le T).$$
Here $\|\cdot\|_{\rm op}$ is the Euclidean operator norm. The claim is for each fixed finite horizon, not a bound uniform in $k$ as the horizon grows.

## Facts & Assumptions

**Given:** The finite-horizon model, strictly positive-definite $R_k$, iid Gaussian initialization and independent per-member Gaussian noises in the Statement.

[A1] AC is assumed for the multivariate-normal laws. [[def-axiom-of-choice]]

[F1] The algorithm uses the divisor-$N$ empirical covariance, gain $K_N=C_{xz}(C_{zz}+R_k)^{-1}$, and perturbed-observation update. [[alg-ensemble-kalman-filter]]

[F2] Gaussian vectors with positive-semidefinite covariance are affine images of vectors with independent standard-normal coordinates. [[def-multivariate-normal-law]]

[F3] A standard normal has density proportional to $e^{-x^2/2}$; hence it has finite absolute moments of every finite order. [[def-standard-normal-and-normal-laws]]

[F4] A real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F5] Holder's inequality bounds an expected product by the corresponding conjugate-moment norms. [[cor-holder-inequality-for-random-variables]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [A1] and [F2]–[F3], each Gaussian vector is an affine image of finitely many standard normals. For every finite $p$, the integral of $|x|^p e^{-x^2/2}$ is finite because for sufficiently large $|x|$, $|x|^p\le e^{x^2/4}$ and $e^{-x^2/4}$ is integrable; bounded intervals contribute a finite integral. Finite-dimensional triangle inequalities then give finite moments for each vector input, with laws independent of $N$ and $i$. This proves the asserted state bound at $k=0$. [A1, F2, F3, given, base, algebra]

2.1 Assume the induction hypothesis that at time $k-1$ the state moments are bounded uniformly in $N,i$ at every finite order. The forecast formula in [F1] is a fixed linear map plus a Gaussian process-error draw. The triangle inequality and $ (a+b)^p\le2^{p-1}(a^p+b^p)$ for $a,b\ge0$ therefore give uniform bounds at every order for the forecast members $X_{N,i}^{f,k}$. [F1, F2, F3, given, step 1.1, IH]

3.1 Write the forecast sample covariance as $C_N=N^{-1}\sum_iX_iX_i^T-\bar X\bar X^T$. Since $\|xx^T\|_{\rm op}=\|x\|^2$, Jensen's inequality for finite averages bounds the $p$th moment of the first term by $N^{-1}\sum_i\mathbb E\|X_i\|^{2p}$ and bounds $\mathbb E\|\bar X\|^{2p}$ by the same average. Thus [F1] and the forecast bounds in step 2.1 give $\sup_N\mathbb E\|C_N\|_{\rm op}^p<\infty$ for every finite $p$. [F1, step 2.1, algebra]

4.1 The matrix $H_kC_NH_k^T$ is positive semidefinite, so $S_N=H_kC_NH_k^T+R_k$ has quadratic form at least that of $R_k$. Let $r_k>0$ be the least eigenvalue of $R_k$, which exists by [F4]. Every eigenvalue of $S_N$ is at least $r_k$, hence $\|S_N^{-1}\|_{\rm op}\le r_k^{-1}$. It follows from $K_N=C_NH_k^TS_N^{-1}$ and step 3.1 that $\sup_N\mathbb E\|K_N\|_{\rm op}^p<\infty$ at every finite order. [F1, F4, given, step 3.1, algebra]

5.1 Let $D_i=y_k+\eta_{N,i}^k$. The update in [F1] gives $\|X_{N,i}^{a,k}\|\le\|X_{N,i}^{f,k}\|+\|K_N\|_{\rm op}\|H_kX_{N,i}^{f,k}\|+\|K_N\|_{\rm op}\|D_i\|$. Apply [F5] with exponent pair $(2,2)$ to the middle product; for the last product use that $D_i$ is independent of $K_N$ and has finite Gaussian moments. The forecast, gain, and perturbation bounds in steps 2.1 and 4.1 therefore bound the $p$th moment of the updated state uniformly in $N,i$. This proves the induction step at time $k$. [F1, F3, F5, given, step 2.1, step 4.1, algebra]

6.1 Step 1.1 proves the state bound at time zero. For each $k\in\{1,\ldots,T\}$, step 5.1 derives both the state and gain bounds at time $k$ from the state bound at time $k-1$. Finite induction therefore proves the state bounds for every $0\le k\le T$ and the gain bounds for every $1\le k\le T$, for each finite $p$. [step 1.1, step 5.1, discharge-induction: step 1.1, step 5.1] ∎
