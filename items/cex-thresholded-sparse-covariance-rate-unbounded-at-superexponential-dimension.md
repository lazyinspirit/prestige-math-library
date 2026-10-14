---
id: cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension
kind: counterexample
title: "The stated sparse-covariance minimax rate is unbounded for super-exponential dimension"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-layer-cake-formulas-for-random-variables
  - def-minimax-squared-operator-risk
  - def-sample-covariance-and-operator-norm-loss
  - def-weak-lq-sparse-covariance-class
  - lem-symmetric-matrix-operator-norm-rayleigh
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Theorem 1"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Statement refuted

The claim that, for every fixed $\beta>1$, $p\ge n^\beta$, $0\le q<1$, and
$c_{n,p}\le M n^{(1-q)/2}(\log p)^{-(3-q)/2}$, the minimax squared operator
risk over $\mathcal P_q(\tau,c_{n,p})$ is comparable to
$c_{n,p}^2(\log p/n)^{1-q}+\log p/n$ is false without an upper restriction on
$\log p/n$ or a cap on the risk expression.

## Facts & Assumptions

**Given:** Fix $\tau>0$ and $M>0$. For integers $n\ge1$, set
$p_n=\lceil e^{n^2}\rceil$, $\beta=2$, $q=0$, and
$c_{n,p_n}=M n^{1/2}(\log p_n)^{-3/2}$.

[F1] The class $\mathcal P_q(\tau,c_{n,p})$ consists of iid laws with covariance in $G_q(c_{n,p})$ and the stated directional tail bound; for $q=0$, $G_0(c)$ limits the number of nonzero off-diagonal entries per column ([[def-weak-lq-sparse-covariance-class]]).

[F2] For nonnegative $T$, $\mathbb E T=\int_0^\infty P(T>u)\,du$ ([[cor-layer-cake-formulas-for-random-variables]]).

[F3] The vector covariance matrix is $\Sigma=E[(X-EX)(X-EX)^{\mathsf T}]$ ([[def-sample-covariance-and-operator-norm-loss]]).

[F4] For a symmetric matrix, its operator norm is the maximum absolute Rayleigh quotient ([[lem-symmetric-matrix-operator-norm-rayleigh]]).

[F5] For an n-observation experiment, minimax squared operator risk is the infimum over measurable sample estimators of the supremum expected squared operator loss under $P^{\otimes n}$ ([[def-minimax-squared-operator-risk]]).

## Proof

1.1 Since $\log p_n\ge n^2$, $c_{n,p_n}\le M n^{-5/2}<1$ for all sufficiently large $n$; also $p_n\ge e^{n^2}\ge n^2$. The point mass at zero has zero covariance, zero off-diagonal entries, and directional tail probability zero, so it belongs to $\mathcal P_0(\tau,c_{n,p_n})$. Thus this class is nonempty. For any $P$ in it and any unit vector $v$, set $Y=v^{\mathsf T}(X-EX)$. By [F1]–[F2], $v^{\mathsf T}\Sigma(P)v=E_PY^2=\int_0^\infty P(Y^2>u)\,du \le\int_0^\infty e^{-u/(2\tau)}\,du=2\tau.$ By [F3], $\Sigma(P)$ is symmetric and $v^{\mathsf T}\Sigma(P)v=E_P[(v^{\mathsf T}(X-EX))^2]\ge0$. Taking the maximum over unit $v$ and using [F4] gives $\|\Sigma(P)\|_{\mathrm{op}}\le2\tau$. [F1, F2, F3, F4, given, algebra]

2.1 The constant estimator $\widehat\Sigma\equiv0$ is measurable on the n-sample space. By [F5] and step 1.1, $\mathfrak R_n\bigl(\mathcal P_0(\tau,c_{n,p_n})\bigr) \le\sup_{P\in\mathcal P_0}E_{P^{\otimes n}}\|\widehat\Sigma-\Sigma(P)\|_{\mathrm{op}}^2 \le4\tau^2.$ This bound is independent of $n$ and $p_n$. [F5, step 1.1, algebra]

3.1 Since $e^{n^2}\le p_n<e^{n^2}+1\le2e^{n^2}$, we have $n\le\log p_n/n\le n+(\log2)/n$, so $\log p_n/n\sim n$. Hence $c_{n,p_n}^2\frac{\log p_n}{n}+\frac{\log p_n}{n} \ge\frac{\log p_n}{n}\longrightarrow\infty.$ No positive comparison constant independent of $n$ can make this diverging expression a lower bound for the uniformly bounded minimax risk in step 2.1. This contradicts the claimed equivalence. [step 2.1, algebra] ∎

## Remarks

This refutes the uncapped rate assertion, independently of the particular thresholded estimator. The current theorem retains the lower dimension condition $p\ge n^\beta$ and caps the risk expression by $\min\{1,r_{n,p}\}$, avoiding this obstruction.
