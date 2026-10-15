---
id: lem-iid-sample-covariance-converges
kind: lemma
title: Finite-second-moment IID sample covariance converges
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-partial-sums-and-sample-means
  - def-moments-variance-and-covariance
  - lem-measurable-functions-preserve-independence
  - thm-khinchin-weak-law-for-iid-integrable-variables
proof_strategy: direct
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
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §4"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §1"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Statement

Let $d\ge1$ be finite and let $X_1,X_2,\ldots$ be IID $\mathbb R^d$-valued random vectors with $\mathbb E\|X_1\|^2<\infty$. Put $\mu_j=\mathbb E X_{1j}$ and $\Sigma_{jk}=\mathbb E[(X_{1j}-\mu_j)(X_{1k}-\mu_k)]$, the coordinate covariance entries from [[def-moments-variance-and-covariance]]. Define
$$\bar X_n=\frac1n\sum_{i=1}^nX_i,\qquad \widehat\Sigma_n=\frac1n\sum_{i=1}^n(X_i-\bar X_n)(X_i-\bar X_n)^T.$$
Then $\bar X_n\to\mu$ in probability and every entry of $\widehat\Sigma_n$ converges in probability to the corresponding entry of $\Sigma$.

## Facts & Assumptions

**Given:** The IID vectors, finite second moment, and definitions in the statement.

[F1] IID means independent random elements with a common law; it has no moment assumption. [[def-identically-distributed-and-iid-random-variables]]

[F2] The covariance entry is $\Sigma_{jk}=\mathbb E[(X_{1j}-\mu_j)(X_{1k}-\mu_k)]$. [[def-moments-variance-and-covariance]]

[F3] For an integrable IID real sequence, its sample mean converges in $L^1$ and hence in probability to its expectation. [[thm-khinchin-weak-law-for-iid-integrable-variables]]

[F4] Measurable coordinatewise maps of an independent family remain independent. [[lem-measurable-functions-preserve-independence]]

## Proof

1.1 For each coordinate $j$, the sequence $(X_{ij})_i$ is IID by [F1] and [F4], and is integrable since $\mathbb E|X_{1j}|\le 1+\mathbb E|X_{1j}|^2<\infty$. For each pair $j,k$, $(X_{ij}X_{ik})_i$ is also IID by [F1] and [F4], and is integrable because $2|X_{1j}X_{1k}|\le X_{1j}^2+X_{1k}^2$. Apply [F3] to each of these finitely many sequences. This gives $\bar X_{n,j}\to\mu_j$ and $n^{-1}\sum_iX_{ij}X_{ik}\to\mathbb E[X_{1j}X_{1k}]$ in probability. [F1, F3, F4, given]

2.1 For each $j,k$, expand $\widehat\Sigma_{n,jk}=\frac1n\sum_iX_{ij}X_{ik}-\bar X_{n,j}\bar X_{n,k}.$ Step 1.1 makes the right side converge in probability to $\mathbb E[X_{1j}X_{1k}]-\mu_j\mu_k=\Sigma_{jk}$; the same step gives the claimed mean convergence. Since $d$ is finite, entrywise convergence holds simultaneously in probability. [F2, step 1.1, algebra] ∎
