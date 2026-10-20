---
id: alg-graphical-lasso-coordinate-descent
kind: algorithm
title: "Finite-budget block and cyclic-coordinate graphical-lasso procedure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-graphical-lasso-objective
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.2, Algorithm 17.2 and equations (17.26)–(17.27), printed pp. 635–636"
    - title: "Friedman, Hastie and Tibshirani, Sparse inverse covariance estimation with the lasso"
      url: "https://hastie.su.domains/Papers/graph.pdf"
      locator: "§§2–3, Algorithm 1 and equations (11)–(12), PDF pp. 3–5"
---

## Definition

Input $p\ge2$, a symmetric positive-semidefinite matrix $S$, $\lambda>0$, and positive integers $R$ and $K$. Let $I$ be the $p\times p$ identity, $t_+=\max(t,0)$, and define $\operatorname{sign}(t)=1$ for $t>0$, $0$ for $t=0$, and $-1$ for $t<0$. Initialize $W=S+\lambda I$. For each of $R$ outer sweeps and each $j=1,\ldots,p$, permute coordinates so row and column $j$ are last, set $V=W_{-j,-j}$ and $s=S_{-j,j}$, initialize $\beta=0$, and perform $K$ cyclic sweeps over $\ell=1,\ldots,p-1$ using
$$\beta_\ell\leftarrow\frac{\mathsf{Soft}(s_\ell-\sum_{k\ne\ell}V_{\ell k}\beta_k,\lambda)}{V_{\ell\ell}},\qquad \mathsf{Soft}(t,\lambda)=\operatorname{sign}(t)(|t|-\lambda)_+.$$
Replace $w_{-j,j}$ by $V\beta$ and its transpose, keeping $w_{jj}$ fixed. Compute a symmetric eigendecomposition of the candidate $W$; if any eigenvalue is nonpositive, return failure. After $R$ sweeps return $\Theta=W^{-1}$. This is a bounded truncation of the source's coupled block/lasso updates and makes no convergence or optimizer claim.

## Definition references

[The Elements of Statistical Learning, §17.3.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Friedman, Hastie and Tibshirani, §§2–3](https://hastie.su.domains/Papers/graph.pdf)

## Facts & Assumptions

**Given:** The inputs and instructions in the Definition.

[F1] The objective convention uses a symmetric positive-semidefinite sample covariance input and $\lambda>0$. [[def-graphical-lasso-objective]].

[F2] Every real symmetric matrix has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

## Verification

**Proof technique:** direct.

1.1 For any nonzero $x\in\mathbb R^p$, $x^TWx=x^TSx+\lambda\|x\|^2\ge\lambda\|x\|^2>0$, so the initialized $W$ is symmetric positive definite. [given, F1, algebra]

1.2 Suppose the current $W$ is positive definite. Its principal submatrix $V$ is positive definite, so $V_{\ell\ell}>0$ for each coordinate. With other coordinates fixed, the lasso objective $\tfrac12\beta^TV\beta-s^T\beta+\lambda\|\beta\|_1$ as a function of $\beta_\ell=t$ is $\tfrac12V_{\ell\ell}t^2-rt+\lambda|t|+\text{constant}$, where $r=s_\ell-\sum_{k\ne\ell}V_{\ell k}\beta_k$. Its unique minimizer is $(r-\lambda)/V_{\ell\ell}$ when $r>\lambda$, zero when $|r|\le\lambda$, and $(r+\lambda)/V_{\ell\ell}$ when $r<-\lambda$, exactly the displayed soft-threshold update. Hence every finite coordinate sweep is well-defined. [F1, step 1.1, algebra]

2.1 Each block candidate is a finite symmetric matrix. By [F2] it has a symmetric eigendecomposition, and all its eigenvalues are positive exactly when it is positive definite. The procedure accepts only candidates passing this finite test, so positive definiteness is invariant until either an explicit failure is returned or all $Rp$ blocks finish. [F2, step 1.2, algebra]

2.2 The fixed positive integers $R$ and $K$ bound all outer and inner loops, so the procedure terminates. On success the final $W$ is positive definite by step 2.1, hence $W^{-1}$ exists and is positive definite. The procedure makes no conclusion that this truncated output maximizes $F_{S,\lambda}$ or that increasing $R$ and $K$ converges. [given, step 2.1, algebra] ∎
