---
id: lem-near-iid-exchangeable-arrays-have-convergent-means
kind: lemma
title: A weak law for exchangeable arrays close to uncorrelated reference rows
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-holder-inequality-for-random-variables
proof_strategy: direct
axiom_use: No choice principle is used; the proof uses finite moments, exchangeability, and a variance calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §2, Lemma 2"
      url: "https://arxiv.org/pdf/0901.2951v2"
---

## Statement

For each integer $N\ge2$, let $(X_{N,i},U_{N,i})_{i=1}^N$ be a jointly exchangeable row of real random pairs: its law is invariant when the same permutation is applied to every index. Assume that $U_{N,1},\ldots,U_{N,N}$ are pairwise uncorrelated, all have the law of a fixed square-integrable random variable $U$, and
$$\|X_{N,1}-U_{N,1}\|_2:=\bigl(\mathbb E|X_{N,1}-U_{N,1}|^2\bigr)^{1/2}\longrightarrow0.$$
Here $\operatorname{Cov}(V,W):=\mathbb E[(V-\mathbb EV)(W-\mathbb EW)]$. Then the empirical mean $\bar X_N=N^{-1}\sum_{i=1}^N X_{N,i}$ converges to $\mathbb E U$ in $L^2$, meaning $\mathbb E|\bar X_N-\mathbb E U|^2\to0$, and hence in probability.

## Facts & Assumptions

**Given:** The exchangeable rows and moment hypotheses in the Statement.

[A1] Joint exchangeability means that the joint law of the paired row is invariant under every permutation of its $N$ indices.

[A2] The variables $U_{N,i}$ all have the law of $U$, with $\mathbb E U^2<\infty$, and $\operatorname{Cov}(U_{N,1},U_{N,2})=0$.

[A3] $\|X_{N,1}-U_{N,1}\|_2\to0$ as $N\to\infty$.

[F1] For square-integrable random variables, $|\mathbb E Z|\le(\mathbb E|Z|^2)^{1/2}$ and $\mathbb E|ZW|\le\|Z\|_2\|W\|_2$. [[cor-holder-inequality-for-random-variables]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [A1], all $X_{N,i}$ have the same distribution and every distinct pair has the same covariance. By [A3] and [F1], $\mathbb E X_{N,1}\to\mathbb E U$; the same $L^2$ convergence and $\mathbb E U^2<\infty$ give $\sup_N\|X_{N,1}\|_2<\infty$. [A1, A2, A3, F1, given, algebra]

2.1 Write $X_i=X_{N,i}$ and $U_i=U_{N,i}$. The identity $X_1X_2-U_1U_2=(X_1-U_1)X_2+U_1(X_2-U_2)$ and [F1] give $|\operatorname{Cov}(X_1,X_2)-\operatorname{Cov}(U_1,U_2)|\le \|X_1-U_1\|_2\|X_2\|_2+\|U_1\|_2\|X_2-U_2\|_2+|\mathbb EX_1\mathbb EX_2-\mathbb EU_1\mathbb EU_2|.$ By exchangeability the two $L^2$ differences have the same norm and both means converge as in step 1.1. Thus [A2]–[A3] imply $\operatorname{Cov}(X_{N,1},X_{N,2})\to0$. [A1, A2, A3, F1, given, step 1.1, algebra]

3.1 Expanding the variance and using [A1] yields $\operatorname{Var}(\bar X_N)=N^{-1}\operatorname{Var}(X_{N,1})+(1-N^{-1})\operatorname{Cov}(X_{N,1},X_{N,2})\longrightarrow0,$ because the first variance is uniformly bounded by step 1.1 and the second term tends to zero by step 2.1. Also $\mathbb E\bar X_N=\mathbb E X_{N,1}\to\mathbb E U$ by step 1.1. Hence $\mathbb E|\bar X_N-\mathbb E U|^2=\operatorname{Var}(\bar X_N)+|\mathbb E\bar X_N-\mathbb E U|^2\to0$. [A1, step 1.1, step 2.1, algebra] ∎
