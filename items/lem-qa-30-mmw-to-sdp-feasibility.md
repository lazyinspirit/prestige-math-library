---
id: lem-qa-30-mmw-to-sdp-feasibility
kind: lemma
title: Matrix-weights regret implies SDP threshold feasibility
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-normalized-sdp-strong-duality
  - thm-qa-30-mmw-regret-bound
  - lem-qa-30-estimated-polytope-threshold-soundness
  - lem-qa-30-two-sparse-estimated-oracle
  - thm-qa-30-flagged-trace-error-and-cost
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Lemma 6 and Meta-Algorithm 1
      url: https://arxiv.org/pdf/1705.01843v4
---

## Statement

Consider a nonempty normalized finite Hermitian SDP with $n,m\ge1$, $R>0$, $A_1=I$, $b_1=R$, $\|A_j\|,\|C\|\le1$, and a dual optimum attained by a vector of $\ell_1$ norm at most $r\ge1$. For the finite threshold construction require rationally encoded $b_j,R,r,e$, with $0<e<R/4$. Write $v$ for its common primal/dual optimum and set $w=r+1$, with
$$\ell=\ln(\max(2,n)),\quad\theta=e/(24Rr),\quad T=\left\lceil36w^2R^2\ell/e^2\right\rceil,\quad\eta=\sqrt{\ell/T}.$$
For a rational threshold $\alpha$, use exact losses $M_t=(\sum_jy_{t,j}A_j-C)/w$ and ideal round densities $\rho_t\propto\exp(-\eta\sum_{s<t}M_s)$. Implement the round trace labels by the frozen flagged-trace construction and its controlled/inverse access from [[thm-qa-30-flagged-trace-error-and-cost]], including the bad-label/operator-hybrid budget required by [[lem-qa-30-two-sparse-estimated-oracle]]. On the joint good event, the finite threshold loop has exactly these alternatives:

- A round returns `EMPTY`, which implies $\alpha<v$; its `HIGHER` response is a threshold exclusion.
- All $T$ rounds return two-sparse weights. Then $\bar y=(e/R)e_1+T^{-1}\sum_ty_t$ is dual feasible, its matrix slack is at least $(e/(2R))I$, and $b\cdot\bar y\le\alpha+e$.

Exact rational returned weights and their finite average may be retained without coefficient rounding. If the predictable conditional bad-probability budgets of the actual adaptive calls sum to at most $\delta$, both implications hold simultaneously with probability at least $1-\delta$. Unproved numerical failures or absent access implementations are not covered by this probability premise. Bounded-dual emptiness is used for threshold exclusion; it does not assert an unproved dense primal certificate.

## Facts & Assumptions

**Given:** The normalized SDP, exact round updates, finite trace/score implementations and their supplied conditional guarantees.

[F1] [[lem-qa-30-normalized-sdp-strong-duality]] identifies the two optimal values and puts them in $[-R,R]$ without strict primal feasibility.

[F2] [[lem-qa-30-two-sparse-estimated-oracle]] gives a nonnegative two-sparse vector with $\ell_1$ norm at most $r$, objective at most $\alpha$, and true round trace slack at least $-2(r+1)\theta$, or a good-event threshold exclusion.

[F3] [[thm-qa-30-mmw-regret-bound]] gives $\sum_t\operatorname{tr}(M_t\rho_t)\le\lambda_{\min}(\sum_tM_t)+\eta T+\ln n/\eta$ for the exact MMW densities and contractions.

[F4] [[lem-qa-30-estimated-polytope-threshold-soundness]] proves the estimated-polytope inclusions, bounded-optimum contrapositive, and adaptive conditional union bound.

[F5] [[thm-qa-30-flagged-trace-error-and-cost]] gives $\theta$-good labels from fixed coherent flag samplers, with its explicit norm, confidence, work and access conditions.

## Proof

1.1 The rational input data give rational $\theta=e/(24Rr)$, so the scalar labels and round parameters satisfy [F2]'s rational-input requirements; $e/R$ and every returned finite average are rational as well. The ideal $\eta$ and Gibbs densities may be real, since their finite implementations carry the declared error budgets. On the supplied good event, [F5] and [F2] apply to every reached density. If the oracle reports `EMPTY`, [F2] and [F4] imply $\alpha<v$. Otherwise its exact finite weights have $y_t\ge0$, $\|y_t\|_1\le r$, and $b\cdot y_t\le\alpha$; their true trace residual is at least $-2w\theta$, hence $\operatorname{tr}(M_t\rho_t)\ge-2\theta$. Also $\|M_t\|\le(\sum_jy_{t,j}+1)/w\le1$. If two selected labels have the same index, [F2] merges their weights and takes a good convex-averaged estimate; this leaves the same bounds. [given, F1, F2, F4, F5, algebra]

2.1 The parameter choice gives $\eta\le e/(6wR)<1$ and $\ln n/(\eta T)\le\ell/(\eta T)=\eta$. Since $w/r\le2$, $w(2\theta+\eta+\ln n/(\eta T))\le we/(12Rr)+e/(3R)\le e/(2R)$. By [F3] and step 1.1, $\lambda_{\min}(T^{-1}\sum_tM_t)\ge-2\theta-\eta-\ln n/(\eta T)$. Multiplying by $w$ makes the unshifted average dual slack at least $-(e/(2R))I$. Adding $(e/R)e_1$ therefore gives matrix slack at least $(e/(2R))I$ and keeps all coordinates nonnegative. Its objective is $e+T^{-1}\sum_tb\cdot y_t\le\alpha+e$. This proves the precise no-failure dual alternative and its reserve margin. [given, F3, step 1.1, algebra]

3.1 Every reached input is determined by the prior finite history. Apply [F4]'s conditional union bound to the actual supplied call budgets; it needs no independence of adaptively chosen matrices or thresholds. Outside their union of bad events, steps 1.1–2.1 establish all claimed alternatives. A capped minimum may be wrong only within its proved budget; a timeout lacking such a contract remains a separate failure. The returned sparse rational list already has a finite encoding and does not require a dense spectral feasibility check or an unsupported rounding step. [given, F4, step 1.1, step 2.1] ∎
