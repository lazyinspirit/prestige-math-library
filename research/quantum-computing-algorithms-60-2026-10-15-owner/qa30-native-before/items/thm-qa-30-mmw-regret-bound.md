---
id: thm-qa-30-mmw-regret-bound
kind: theorem
title: "Matrix multiplicative-weights regret bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-30-mmw-game
  - lem-qa-30-exp-quadratic-bound
  - lem-finite-dimensional-golden-thompson-trace-inequality
  - def-trace-of-a-square-matrix
  - def-qc-dirac-notation-conversion
  - lem-qa-30-positive-product-trace-nonnegative
  - lem-qa-30-hermitian-product-trace-real
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $T\ge1$, $0<\eta\le1$, and let $M_1,\ldots,M_T$ be Hermitian with $-I\preceq M_t\preceq I$. For the update of [[def-qa-30-mmw-game]],
$$\sum_{t=1}^T\operatorname{tr}(M_t\rho_t)\le\lambda_{\min}\!\left(\sum_{t=1}^TM_t\right)+\eta T+\frac{\ln n}{\eta}.$$

## Facts & Assumptions

**Given:** The MMW update, Golden–Thompson for finite Hermitian matrices, and the local exponential and positive-trace lemmas.

[F1] [[def-qa-30-mmw-game]]: $S_t=\sum_{s\le t}M_s$, $\rho_t=e^{-\eta S_{t-1}}/\operatorname{tr}(e^{-\eta S_{t-1}})$.

[F2] [[lem-qa-30-exp-quadratic-bound]]: $e^{-\eta M_t}\preceq I-\eta M_t+\eta^2I$.

[F3] [[lem-finite-dimensional-golden-thompson-trace-inequality]]: for Hermitian $H,K$, $\operatorname{tr}(e^{H+K})\le\operatorname{tr}(e^He^K)$.

[F4] [[lem-qa-30-positive-product-trace-nonnegative]]: the trace of a product of positive semidefinite matrices is nonnegative.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: the eigenvalues of a Hermitian matrix are real, and its trace and exponential are the corresponding eigenvalue sums.

[F6] [[lem-qa-30-hermitian-product-trace-real]]: the trace of two Hermitian matrices product is real.

## Proof

**Proof technique:** direct.

1.1 Put $Z_t=\operatorname{tr}(e^{-\eta S_t})$ and $m_t=\operatorname{tr}(M_t\rho_t)$. Since $S_t$ is Hermitian, [F3] gives $Z_t\le\operatorname{tr}(e^{-\eta S_{t-1}}e^{-\eta M_t})$. By [F2], the difference $(I-\eta M_t+\eta^2I)-e^{-\eta M_t}$ is positive semidefinite; apply [F4] with the positive matrix $e^{-\eta S_{t-1}}$ to compare traces. The result is $Z_t\le Z_{t-1}(1-\eta m_t+\eta^2)$. Also $m_t\in[-1,1]$, so $1-\eta m_t+\eta^2>0$, and $1+u\le e^u$ yields $Z_t\le Z_{t-1}e^{-\eta m_t+\eta^2}$. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 Iterating step 1.1 from $Z_0=n$ gives $Z_T\le n\exp(-\eta\sum_tm_t+\eta^2T)$. If $S_T$ has eigenvalues $\lambda_1,\ldots,\lambda_n$, [F5] gives $Z_T=\sum_ke^{-\eta\lambda_k}\ge e^{-\eta\lambda_{\min}(S_T)}$. Taking natural logarithms and rearranging proves the inequality. [given, F5, step 1.1, algebra] ∎
