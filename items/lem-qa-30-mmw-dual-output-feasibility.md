---
id: lem-qa-30-mmw-dual-output-feasibility
kind: lemma
title: "No-failure MMW rounds yield an approximate dual-feasible vector"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qa-30-sdp-primal-dual-pair
  - def-qa-30-mmw-game
  - lem-qa-30-exp-quadratic-bound
  - thm-qa-30-mmw-regret-bound
  - lem-qa-30-positive-product-trace-nonnegative
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joran van Apeldoorn et al., Quantum SDP-solvers: Better upper and lower bounds"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $n,m\ge1$ and consider a primal-dual pair with $A_1=I_n$, $b_1=R>0$, $\|A_j\|,\|C\|\le1$, and a dual optimum attained by some vector of $\ell_1$ norm at most $r\ge1$. Set $w=r+1$. Suppose for $t=1,\ldots,T$ the MMW update uses losses
$$M_t=\frac{\sum_jy_{t,j}A_j-C}{w},$$
where $y_t\ge0$, $\|y_t\|_1\le r$, $b\cdot y_t\le\alpha$, and supplied estimates satisfy $|\widetilde a_{t,j}-\operatorname{tr}(A_j\rho_t)|\le\theta$, $|\widetilde c_t-\operatorname{tr}(C\rho_t)|\le\theta$, and $\sum_jy_{t,j}\widetilde a_{t,j}-\widetilde c_t\ge-w\theta$. If $0<\eta\le1$ and $\gamma\ge w(2\theta+\eta+\ln(n)/(\eta T))$, then $\bar y=\gamma e_1+T^{-1}\sum_ty_t$ is dual feasible and $b\cdot\bar y\le\alpha+\gamma R$.

## Facts & Assumptions

**Given:** The normalized finite SDP, each round's multiplier vector and trace estimates, and the MMW regret bound.

[F1] [[def-qa-30-sdp-primal-dual-pair]]: dual feasibility requires nonnegative coordinates and positive semidefinite slack $\sum_j y_jA_j-C$.

[F2] [[def-qa-30-mmw-game]]: the round density matrix is $\rho_t$ and the round loss is $\operatorname{tr}(M_t\rho_t)$.

[F3] [[thm-qa-30-mmw-regret-bound]]: $\sum_t\operatorname{tr}(M_t\rho_t)\le\lambda_{\min}(\sum_tM_t)+\eta T+\ln(n)/\eta$.

## Proof

**Proof technique:** direct.

1.1 By $\|A_j\|,\|C\|\le1$ and $\|y_t\|_1\le r$, the triangle inequality gives $\|M_t\|\le(r+1)/w=1$, so the regret bound applies. The trace-estimate assumptions and $\sum_jy_{t,j}\le r$ give $\left|\sum_jy_{t,j}\widetilde a_{t,j}-\widetilde c_t-\operatorname{tr}\!\left(\left(\sum_jy_{t,j}A_j-C\right)\rho_t\right)\right|\le(r+1)\theta=w\theta.$ Together with the shifted-oracle inequality, this implies $\operatorname{tr}(M_t\rho_t)\ge-2\theta$. [given, F2, algebra]

2.1 Sum the lower bounds from step 1.1 and combine them with [F3]. Writing $S=\sum_tM_t$, we get $-2\theta T\le\lambda_{\min}(S)+\eta T+\ln(n)/\eta$, hence $\lambda_{\min}(S/T)\ge-(2\theta+\eta+\ln(n)/(\eta T))$. [given, F3, step 1.1, algebra]

3.1 The dual slack of $\bar y$ is $\sum_j\bar y_jA_j-C=\gamma I+(w/T)S$, because the identity coefficient contributes $\gamma A_1=\gamma I$. Step 2.1 and the lower bound on $\gamma$ make this matrix positive semidefinite. Also $\bar y\ge0$ and $b\cdot\bar y=\gamma R+T^{-1}\sum_tb\cdot y_t\le\gamma R+\alpha$. These are exactly the dual feasibility and objective claims in [F1]. [given, F1, step 2.1, algebra] ∎
