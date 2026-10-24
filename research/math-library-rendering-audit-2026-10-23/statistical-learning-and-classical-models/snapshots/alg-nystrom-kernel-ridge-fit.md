---
id: alg-nystrom-kernel-ridge-fit
kind: algorithm
title: Finite-budget Nyström kernel ridge fit with residual status
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-regularized-kernel-prediction-system
  - def-psd-nystrom-approximation
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-psd-nystrom-order-and-exactness
  - lem-regularized-gram-matrix-inverse-bound
  - thm-kernel-ridge-residual-prediction-certificate
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: 'Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2'
      url: https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf
      locator: Nyström formula (14.1) and its square-root projection representation, printed pp. 62–63.
    - title: 'Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1'
      url: https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf
      locator: Lemma 1 and Theorem 1, printed pp. 42–43.
---

## Definition

All matrix-vector operations below use exact real arithmetic. The inputs are a finite real symmetric matrix $K\in\mathbb R^{n\times n}$ with $n\ge1$ and $x^TKx\ge0$ for every $x\in\mathbb R^n$, a vector $y\in\mathbb R^n$, a scalar $\tau>0$, a finite sketch $S\in\mathbb R^{n\times s}$ with $s\ge0$, a residual tolerance $\eta\ge0$, and a finite nonnegative integer iteration budget $T$. Write $I_n$ for the identity matrix and $\lVert x\rVert_2=(\sum_i x_i^2)^{1/2}$ for the Euclidean norm. The Moore–Penrose inverse $M^\dagger$ is the unique matrix satisfying $MM^\dagger M=M$, $M^\dagger MM^\dagger=M^\dagger$, $(MM^\dagger)^T=MM^\dagger$, and $(M^\dagger M)^T=M^\dagger M$.

1. Form the Nyström matrix $\widetilde K=KS(S^TKS)^\dagger S^TK$. The formula is defined even when $S^TKS$ is singular or $s=0$.

2. Set $B=\widetilde K+\tau I_n$. Initialize $b_0=0$, $\widetilde r_0=y-Bb_0=y$, and $p_0=\widetilde r_0$.

3. For $j=0,1,\ldots,T$, recompute the actual residuals $\widetilde r_j=y-Bb_j$ and $r_j=y-(K+\tau I_n)b_j$. If both norms are at most $\eta$, return status `certified`, coefficient vector $b_j$, fitted vector $\widetilde Kb_j$, and both residuals. If $\widetilde r_j=0$ but $\lVert r_j\rVert_2>\eta$, return status `uncertified` with the same outputs. If $j=T$ and neither return condition holds, return status `budget-exhausted` with the same outputs.

4. Otherwise compute $q_j=Bp_j$. If $p_j^Tq_j=0$, return status `uncertified` with the current outputs. If $p_j^Tq_j>0$, set $\alpha_j=(\widetilde r_j^T\widetilde r_j)/(p_j^Tq_j)$, $b_{j+1}=b_j+\alpha_jp_j$, and $\widetilde r_{j+1}=\widetilde r_j-\alpha_jq_j$. If $\widetilde r_{j+1}=0$, recompute $r_{j+1}$ and return `certified` when $\lVert r_{j+1}\rVert_2\le\eta$, and otherwise return `uncertified`, together with the resulting outputs. If $\widetilde r_{j+1}\ne0$, set $\beta_j=(\widetilde r_{j+1}^T\widetilde r_{j+1})/(\widetilde r_j^T\widetilde r_j)$ and $p_{j+1}=\widetilde r_{j+1}+\beta_jp_j$, then continue at the next iteration.

The output always includes the actual residuals for both the Nyström system and the original system. `certified` asserts that both residuals meet the requested tolerance; `uncertified` and `budget-exhausted` make no solve-accuracy claim. In particular, exhausting the budget does not certify a solve. If $K$ is a Gram matrix and $\tau=n\lambda$, the original-system residual is the one used in the residual prediction certificate.

## Definition references

[[def-psd-nystrom-approximation]]: For a PSD matrix $K$, the Nyström matrix is $KS(S^TKS)^\dagger S^TK$.

[[thm-psd-nystrom-order-and-exactness]]: Every such Nyström matrix is positive semidefinite and is bounded above by $K$.

[[lem-regularized-gram-matrix-inverse-bound]]: Adding $\tau I$ with $\tau>0$ makes the Nyström system positive definite.

[[def-moore-penrose-pseudoinverse|The four equations stated above define a Moore–Penrose inverse.]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Every finite real matrix has a unique Moore–Penrose inverse, including singular and zero-sized matrices.]]

[[thm-kernel-ridge-residual-prediction-certificate|The original-system residual bounds coefficient and training fitted-vector errors.]]
