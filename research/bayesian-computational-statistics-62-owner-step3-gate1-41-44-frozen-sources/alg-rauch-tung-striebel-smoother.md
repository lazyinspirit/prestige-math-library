---
id: alg-rauch-tung-striebel-smoother
kind: algorithm
title: Rauch–Tung–Striebel fixed-interval Gaussian smoother
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-kalman-filter
  - def-linear-gaussian-state-space-model-with-independent-noises
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
axiom_use: The backward procedure is deterministic and uses no choice principle. The Gaussian interpretation of its inputs is inherited from the linear-Gaussian model and the forward-filter contract.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 8, §8.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3, §3.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: n/a
---

## Definition

Fix a finite-horizon linear-Gaussian model from
[[def-linear-gaussian-state-space-model-with-independent-noises]] and data
$y_{1:T}$ for which [[alg-kalman-filter]] is admissible. Its forward output
contains filtered means and covariances $m_{k|k},P_{k|k}$ and predicted means
and covariances $m_{k+1|k},P_{k+1|k}$. Assume each forecast covariance used
below is positive definite, meaning $u^TP_{k+1|k}u>0$ for every nonzero
$u\in\mathbb R^{d_{k+1}}$. Positive semidefinite means the same quadratic
form is nonnegative for every $u$.

The algorithm takes that forward output as input, initializes
$$m_{T|T}:=m_{T|T}^{\mathrm{filter}},\qquad P_{T|T}:=P_{T|T}^{\mathrm{filter}}$$
and for $k=T-1,T-2,\ldots,0$ performs the following steps:

1. Form the backward gain
$$C_k=P_{k|k}F_{k+1}^TP_{k+1|k}^{-1}.$$
For the computation, factor $P_{k+1|k}=L_kL_k^T$ with the unique
positive-diagonal Cholesky factor from
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]],
then compute the rows of $U_k$ in increasing order by
$$ (U_k)_{i,\cdot}=\frac{(F_{k+1}P_{k|k})_{i,\cdot}-\sum_{j=1}^{i-1}(L_k)_{ij}(U_k)_{j,\cdot}}{(L_k)_{ii}},\qquad i=1,\ldots,d_{k+1},$$
and compute the rows of $C_k^T$ in decreasing order by
$$ (C_k^T)_{i,\cdot}=\frac{(U_k)_{i,\cdot}-\sum_{j=i+1}^{d_{k+1}}(L_k)_{ji}(C_k^T)_{j,\cdot}}{(L_k)_{ii}},\qquad i=d_{k+1},\ldots,1.$$
These recurrences give $L_kU_k=F_{k+1}P_{k|k}$ and $L_k^TC_k^T=U_k$, so
$C_k=P_{k|k}F_{k+1}^TP_{k+1|k}^{-1}$; no inverse is formed in the procedure.
2. Update the smoothed mean and covariance:
$$m_{k|T}=m_{k|k}+C_k(m_{k+1|T}-m_{k+1|k})$$
$$P_{k|T}=P_{k|k}+C_k(P_{k+1|T}-P_{k+1|k})C_k^T$$

Return $(m_{k|T},P_{k|T})_{k=0}^T$. For $T=0$ the loop is empty and the
output is the initial filtered pair. The algorithm is undefined if a
forecast covariance to be solved is singular; it makes no pseudoinverse,
complexity, rounding-error, or numerical-stability claim. The theorem on
this page proves that the outputs are moments of the fixed-interval
conditional laws under these hypotheses.
