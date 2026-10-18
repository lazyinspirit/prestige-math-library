---
id: thm-real-gaussian-rangefinder-expected-spectral-error
kind: theorem
title: Expected spectral error of the real Gaussian range finder
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [alg-gaussian-randomized-range-finder, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-matrix-has-full-row-rank-almost-surely, lem-wide-gaussian-pseudoinverse-frobenius-moments, lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail, lem-real-scaled-gaussian-product-expectation, lem-randomized-rangefinder-deterministic-svd-partition-error, thm-singular-value-decomposition, thm-eckart-young-best-rank-k-approximation, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-jensen-inequality-for-expectation, def-countable-choice, lem-finite-scan-range-basis-is-borel]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Theorem 10.6 and its proof"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Theorem 11.5"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability
measure. Let $A\in\mathbb R^{m\times n}$ be fixed, $k\ge2$, $p\ge2$,
$\ell=k+p\le\min(m,n)$, and draw $\Omega\in\mathbb R^{n\times\ell}$ with
iid standard real Gaussian entries. If $Q$ is an orthonormal basis for
$\operatorname{Ran}(A\Omega)$, then
$$\mathbb E\|A-QQ^*A\|_2\le \left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1} +\frac{e\sqrt{k+p}}{p}\left(\sum_{j>k}\sigma_j^2\right)^{1/2}.$$
The rank of $Q$ may be smaller than $\ell$; exact arithmetic is assumed.
The comparator $\sigma_{k+1}$ is the minimum spectral error among all
rank-at-most-$k$ approximations.

## Facts & Assumptions

**Given:** The inherited Countable Choice assumption for the Gaussian law, and the fixed matrix, oversampling conditions, a standard real Gaussian draw, and the exact range-finder output.

[F1] Orthogonal SVD coordinates split $V^*\Omega$ into independent standard Gaussian blocks ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F2] The $k\times\ell$ block $\Omega_1$ has full row rank almost surely ([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]]).

[F3] $\mathbb E\|\Omega_1^\dagger\|_F^2=k/(p-1)$ ([[lem-wide-gaussian-pseudoinverse-frobenius-moments]]).

[F4] $\mathbb E\|\Omega_1^\dagger\|_2\le e\sqrt{k+p}/p$ ([[lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail]]).

[F5] For real Gaussian $G$, $\mathbb E\|SGT\|_2\le\|S\|_2\|T\|_F+\|S\|_F\|T\|_2$ ([[lem-real-scaled-gaussian-product-expectation]]).

[F6] The deterministic SVD partition gives $\|(I-QQ^*)A\|_2\le\sigma_{k+1}+\|\Sigma_2\Omega_2\Omega_1^\dagger\|_2$ when $\Omega_1$ has full row rank ([[lem-randomized-rangefinder-deterministic-svd-partition-error]]).

[F7] Jensen's inequality gives $(\mathbb E X)^2\le\mathbb E X^2$ for nonnegative $X$ with finite second moment ([[thm-jensen-inequality-for-expectation]]).

[F8] The finite-dimensional expectation may be evaluated by iterated nonnegative integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] The best rank-at-most-$k$ spectral approximation error is $\sigma_{k+1}$ ([[thm-eckart-young-best-rank-k-approximation]]).

[A1] Countable Choice is used for the finite-dimensional Lebesgue Gaussian law ([[def-countable-choice]]).

[F10] The finite scan returns a Borel orthogonal projector onto the sample range ([[lem-finite-scan-range-basis-is-borel]]). Every orthonormal basis of that range gives the same projector: each projection has residual orthogonal to the range, so uniqueness of the orthogonal decomposition identifies them.

## Proof

1.1 By [F9], $\sigma_{k+1}$ is the optimal rank-$k$ comparator. Choose an SVD $A=U\Sigma V^*$ and write $V^*\Omega=[\Omega_1^T\ \Omega_2^T]^T$ with $k$ top rows. By [F1] the blocks are independent standard Gaussian matrices; by [F2] and the wide-row-rank result $\Omega_1$ has full row rank almost surely. Thus [F6] gives $\|A-QQ^*A\|_2\le\sigma_{k+1}+\|\Sigma_2\Omega_2\Omega_1^\dagger\|_2$ off a null set. By [F10], every basis choice gives the same Borel projector as the finite scan. The error is therefore measurable and bounded by $\|A\|_2$ for every draw, so the exceptional null set does not change its expectation. [given, F1, F2, F6, F9, F10, A1, choose]

2.1 Fix $\Omega_1$ and integrate first over the independent block $\Omega_2$. By [F5], $\mathbb E_{\Omega_2}\|\Sigma_2\Omega_2\Omega_1^\dagger\|_2\le\|\Sigma_2\|_2\|\Omega_1^\dagger\|_F+\|\Sigma_2\|_F\|\Omega_1^\dagger\|_2$. Tonelli [F8] and the finite moments [F3]–[F4] justify this iterated expectation. [step 1.1, F1, F3, F4, F5, F8]

3.1 Take expectation over $\Omega_1$. By [F7] and [F3], $\mathbb E\|\Omega_1^\dagger\|_F\le\sqrt{k/(p-1)}$; [F4] supplies $\mathbb E\|\Omega_1^\dagger\|_2\le e\sqrt{k+p}/p$. Since $\|\Sigma_2\|_2=\sigma_{k+1}$ and $\|\Sigma_2\|_F=(\sum_{j>k}\sigma_j^2)^{1/2}$, substituting into steps 1.1–2.1 gives the claimed bound. [step 1.1, step 2.1, F3, F4, F7, algebra] ∎
