---
id: lem-soft-margin-svm-primal-attainment
kind: lemma
title: The soft-margin SVM primal attains its minimum, including the unpenalized-bias boundary
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-hard-and-soft-margin-support-vector-machines
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.2.1, printed pp. 420–421; attainment is proved locally under the stated bias and label cases.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.4.1, printed pp. 141–144; the soft-margin objective and its finite sample scope.'
---

## Statement

Let $n\ge1$, let $C>0$, and let $(x_i,y_i)_{i=1}^n$ be a finite labeled sample with $y_i\in\{-1,+1\}$ in a real Hilbert feature space $\mathcal H$, with feature map $\phi$. The soft-margin SVM primal has a finite attained minimum. At least one minimizing tuple has its weight vector in $M:=\operatorname{span}\{\phi(x_i):1\le i\le n\}$. This conclusion includes samples with only one label and does not assert uniqueness of the bias or slack variables.

## Statement references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §12.2.1](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.4.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

## Facts & Assumptions

**Given:** The sample, a real Hilbert feature space, its feature map, and $C>0$.

[A1] The soft-margin primal minimizes $\frac12\|w\|^2+C\sum_i\xi_i$ over $w,b,\xi$ subject to $y_i(\langle w,\phi(x_i)\rangle+b)\ge1-\xi_i$ and $\xi_i\ge0$ ([[def-hard-and-soft-margin-support-vector-machines]]).

[F1] Projection onto a finite-dimensional subspace preserves inner products with that subspace and does not increase norm ([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

[F2] $|\langle u,v\rangle|\le\|u\|\|v\|$ in a real inner-product space ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F3] Every finite-dimensional real inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F4] A nonempty closed bounded subset of $\mathbb R^d$, $d\ge1$, is compact, and every continuous real-valued function on it attains a minimum ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

## Proof




1.1 The tuple $w=0$, $b=0$, and $\xi_i=1$ is feasible and has objective $Cn$. Every feasible objective is nonnegative, so the primal infimum lies in $[0,Cn]$. [given, A1, construct, algebra]


1.2 Let $M=\operatorname{span}\{\phi(x_i):1\le i\le n\}$. For any feasible tuple, project $w$ onto $M$ using [F1]. The residual is orthogonal to every $\phi(x_i)$, so all sample scores and constraints are unchanged, while the norm does not increase. Thus minimizing over $M\times\mathbb R\times\mathbb R^n$ has the same infimum as minimizing over the full feature space. [given, F1, A1]


2.1 If all labels are $+1$, then $w=0$, $b=1$, and $\xi=0$ is feasible with objective $0$, which is globally minimal by step 1.1. If all labels are $-1$, then $w=0$, $b=-1$, and $\xi=0$ gives the same conclusion. [step 1.1, A1, construct]


3.1 Suppose both labels occur. Set $R=\max_i\|\phi(x_i)\|$ and let $S$ be the subset of $M\times\mathbb R\times\mathbb R^n$ consisting of feasible tuples with objective at most $Cn$. By step 1.1, $S$ is nonempty. It is closed because the constraints are continuous affine inequalities and the objective is continuous; continuity of each score follows from [F2]. Every tuple in $S$ satisfies $\|w\|\le\sqrt{2Cn}$ and $0\le\xi_i\le n$. Choose indices $i_+$ and $i_-$ with labels $+1$ and $-1$. Their constraints and [F2] give $b\ge1-n-\sqrt{2Cn}R$ and $b\le n-1+\sqrt{2Cn}R$, so $b$ is bounded. By [F3], an orthonormal basis identifies the finite-dimensional product space with $\mathbb R^d$ for some $d\ge1$; hence $S$ is a nonempty closed bounded subset of that Euclidean space. By [F4], the continuous objective attains a minimum on $S$. Any feasible tuple outside $S$ has objective greater than $Cn$, whereas $S$ contains a feasible tuple of objective $Cn$; therefore this minimum is also the global primal minimum. By step 1.2 it is a full-space minimizer with $w\in M$. [step 1.1, step 1.2, A1, F2, F3, F4, choose, construct, algebra] ∎

