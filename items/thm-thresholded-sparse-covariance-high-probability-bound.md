---
id: thm-thresholded-sparse-covariance-high-probability-bound
kind: theorem
title: "High-probability operator error for thresholded weak-lq covariance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - alg-entrywise-thresholded-sample-covariance
  - def-identically-distributed-and-iid-random-variables
  - def-weak-lq-sparse-covariance-class
  - lem-weak-lq-thresholded-covariance-row-sum
  - thm-weak-lq-sample-covariance-entrywise-deviation
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Section 4, equations (28)–(29)"
      url: "https://arxiv.org/pdf/1302.3030"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $X_1,\ldots,X_n$ be iid ([[def-identically-distributed-and-iid-random-variables]]) from $\mathcal P_q(\tau,c_{n,p})$ of [[def-weak-lq-sparse-covariance-class]], with $p\ge2$, $n\ge1$, $0\le q<1$, $\tau>0$, and $\log p\le n$. Use [[alg-entrywise-thresholded-sample-covariance]] with threshold
$$\lambda=8192\tau\sqrt{\frac{\log p}{n}}.$$
Then for a finite constant $C_q$ depending only on $q$,
$$\mathbb P\!\left( \|\widehat\Sigma-\Sigma\|_{\mathrm{op}} \le C_q\left[ c_{n,p}\left(\tau\sqrt{\frac{\log p}{n}}\right)^{1-q} +\tau\sqrt{\frac{\log p}{n}} \right]\right)\ge1-p^{-2}.$$
This is a high-probability bound; it does not assert an expected-risk or minimax lower bound.

## Facts & Assumptions

**Given:** The iid law, dimensions, tail parameter and weak-lq covariance class in the Statement, together with the thresholded estimator at the displayed $\lambda$.

[F1] On the entrywise event with error at most $\lambda/2$, thresholding gives operator error at most $C_q(c_{n,p}\lambda^{1-q}+\lambda)$ ([[lem-weak-lq-thresholded-covariance-row-sum]]).

[F2] For $u=\log(8p^4)$, the sample-centered covariance obeys $\max_{j,k}|\widehat\sigma^\ast_{jk}-\sigma_{jk}|\le192\tau(\sqrt{u/n}+u/n)$ with probability at least $1-p^{-2}$ ([[thm-weak-lq-sample-covariance-entrywise-deviation]]).

[F3] The algorithm leaves the diagonal unchanged and thresholds each off-diagonal entry at $\lambda$ ([[alg-entrywise-thresholded-sample-covariance]]).

## Proof



1.1 Put $m=\log p/n$ and $r=u/n$. Since $p\ge2$, $\log 8=3\log2\le3\log p$, so $u=\log8+4\log p\le7\log p$ and $r\le7m\le7$. Thus $\sqrt r+r\le(1+\sqrt7)\sqrt r<4\sqrt r<12\sqrt m$. By [F2], on an event of probability at least $1-p^{-2}$ the entrywise error is less than $2304\tau\sqrt m<4096\tau\sqrt m=\lambda/2$. [F2, given, algebra]

2.1 On the event in step 1.1, [F1] applies to the thresholded estimator of [F3] and yields $\|\widehat\Sigma-\Sigma\|_{\mathrm{op}}\le C_q(c_{n,p}\lambda^{1-q}+\lambda).$ Substituting $\lambda=8192\tau\sqrt m$ and absorbing the fixed factor $8192^{1-q}$ into a finite constant depending only on $q$ gives the stated bound. The event probability is at least $1-p^{-2}$. [F1, F3, step 1.1, algebra] ∎

