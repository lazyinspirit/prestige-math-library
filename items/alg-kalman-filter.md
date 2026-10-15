---
id: alg-kalman-filter
kind: algorithm
title: Exact linear-Gaussian Kalman filter
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-state-space-filtering-laws
  - def-forward-and-back-substitution-for-triangular-systems
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
axiom_use: Assume AC as inherited from the linear-Gaussian state-space model and filtering-law conventions. The procedure introduces no additional choice.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 4, §§4.1–4.3"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4, §4.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Fix a finite horizon $T\ge0$, positive state dimensions $d_0,\ldots,d_T$,
and positive observation dimensions $p_1,\ldots,p_T$. The input is a
linear-Gaussian model from
[[def-linear-gaussian-state-space-model-with-independent-noises]], with
matrices $F_k\in\mathbb R^{d_k\times d_{k-1}}$ and
$H_k\in\mathbb R^{p_k\times d_k}$, initial mean $m_0$, and symmetric
positive-semidefinite covariances $P_0,Q_k,R_k$. Its state and observation
equations are
$$X_k=F_kX_{k-1}+q_k,\qquad Y_k=H_kX_k+r_k,$$
where $q_k\sim N(0,Q_k)$ and $r_k\sim N(0,R_k)$ are centered and mutually
independent across all times and of $X_0$.

The admissible data are vectors $y_k\in\mathbb R^{p_k}$ for which every
innovation covariance encountered below is positive definite. Positive
definite means $u^TS_ku>0$ for every nonzero $u\in\mathbb R^{p_k}$. The
algorithm returns predicted and updated means and covariances and the
innovation and gain at each time. Initialize
$$m_{0|0}=m_0,\qquad P_{0|0}=P_0.$$
For $k=1,\ldots,T$, perform:

1. Predict:
$$m_{k|k-1}=F_km_{k-1|k-1},\qquad P_{k|k-1}=F_kP_{k-1|k-1}F_k^T+Q_k.$$
2. Form the innovation and its covariance:
$$v_k=y_k-H_km_{k|k-1},\qquad S_k=H_kP_{k|k-1}H_k^T+R_k.$$
3. Factor $S_k=L_kL_k^T$ with lower-triangular $L_k$ having positive
diagonal, using
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].
Solve $L_kU_k=H_kP_{k|k-1}$ and $L_k^TK_k^T=U_k$ by triangular solves. This
defines $K_k^T=S_k^{-1}H_kP_{k|k-1}$, hence
$K_k=P_{k|k-1}H_k^TS_k^{-1}$, without explicitly forming $S_k^{-1}$.
4. Update:
$$m_{k|k}=m_{k|k-1}+K_kv_k,\qquad P_{k|k}=P_{k|k-1}-K_kS_kK_k^T.$$

For $T=0$ the loop is empty and the returned pair is $(m_0,P_0)$. No
inverse of $P_0$, $Q_k$, or $R_k$ is used. This item defines the procedure
and makes no complexity, rounding-error, or numerical-stability claim.
