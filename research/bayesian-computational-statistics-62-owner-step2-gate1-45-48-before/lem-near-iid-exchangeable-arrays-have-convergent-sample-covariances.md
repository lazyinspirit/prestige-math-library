---
id: lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances
kind: lemma
title: Sample covariance converges for exchangeable arrays close in L4 to iid rows
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-near-iid-exchangeable-arrays-have-convergent-means
  - cor-holder-inequality-for-random-variables
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §2, Lemma 3"
      url: "https://arxiv.org/pdf/0901.2951v2"
---

## Statement

Let $d\ge1$. For each $N\ge2$, let $(X_{N,i},U_{N,i})_{i=1}^N$ be jointly exchangeable random pairs in $\mathbb R^d$. Assume that $U_{N,1},\ldots,U_{N,N}$ are iid with the law of a fixed $U$, $\mathbb E\|U\|^4<\infty$, and $\|X_{N,1}-U_{N,1}\|_4\to0$. Define
$$\bar X_N=N^{-1}\sum_iX_{N,i},\qquad C_N=N^{-1}\sum_i(X_{N,i}-\bar X_N)(X_{N,i}-\bar X_N)^T.$$
Here $\operatorname{Cov}(U):=\mathbb E[(U-\mathbb EU)(U-\mathbb EU)^T]$. Then $\bar X_N\to\mathbb EU$ and $C_N\to\operatorname{Cov}(U)$ in probability, entry by entry.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[A1] Joint exchangeability means invariance of the paired row under a common permutation of its index.

[A2] $U_{N,i}$ are iid with finite fourth moment, and $\|X_{N,1}-U_{N,1}\|_4\to0$.

[F1] The preceding weak law states that if exchangeable rows are pairwise uncorrelated and are close in $L^2$ to a common row, their empirical means converge in $L^2$. [[lem-near-iid-exchangeable-arrays-have-convergent-means]]

[F2] Holder's inequality implies $\|ZW\|_2\le\|Z\|_4\|W\|_4$. [[cor-holder-inequality-for-random-variables]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Holder's inequality [F2] on a probability space gives $\|X_{N,1}-U_{N,1}\|_2\le\|X_{N,1}-U_{N,1}\|_4$. Apply [F1] to each coordinate to obtain $\bar X_N\to\mathbb EU$ in probability. [A1, A2, F1, F2, given]

2.1 Fix coordinates $r,s\in\{1,\ldots,d\}$ and set $V_{N,i}=X_{N,i,r}X_{N,i,s}$ and $W_{N,i}=U_{N,i,r}U_{N,i,s}$. The rows $(V_{N,i},W_{N,i})$ are jointly exchangeable. By Cauchy–Schwarz, $\|V_{N,1}-W_{N,1}\|_2\le\|X_{N,1,r}-U_{N,1,r}\|_4\|X_{N,1,s}\|_4+\|U_{N,1,r}\|_4\|X_{N,1,s}-U_{N,1,s}\|_4\to0.$ The product bounds follow from [F2]; the factors tending to zero follow from [A2], and the remaining fourth moments are bounded by [A2]. Since the $W_{N,i}$ are iid and square-integrable, they are pairwise uncorrelated. Thus [F1] applied to these scalar rows gives $N^{-1}\sum_iX_{N,i,r}X_{N,i,s}\to\mathbb E[U_rU_s]$ in probability. [A1, A2, F1, F2, step 1.1, algebra]

3.1 Entrywise, $C_N=N^{-1}\sum_iX_{N,i}X_{N,i}^T-\bar X_N\bar X_N^T$. The first term converges to $\mathbb E[UU^T]$ by step 2.1 and the second to $(\mathbb EU)(\mathbb EU)^T$ by step 1.1. Their difference is $\operatorname{Cov}(U)$, proving the claim. [step 1.1, step 2.1, algebra] ∎
