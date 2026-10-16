---
id: thm-qa-30-mmw-regret-bound
kind: theorem
title: "Matrix multiplicative-weights regret bound"
status: published
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
  - thm-trace-of-ab-equals-trace-of-ba
  - prop-trace-is-linear
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - def-factorial-and-falling-factorial
  - def-natural-logarithm
  - thm-exponential-is-strictly-increasing
  - thm-complex-exponential-addition-and-real-extension
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $n\ge1$, $T\ge1$, $0<\eta\le1$, and let $M_1,\ldots,M_T$ be Hermitian with $-I\preceq M_t\preceq I$. For the update of [[def-qa-30-mmw-game]],
$$\sum_{t=1}^T\operatorname{tr}(M_t\rho_t)\le\lambda_{\min}\!\left(\sum_{t=1}^TM_t\right)+\eta T+\frac{\ln n}{\eta}.$$

## Facts & Assumptions

**Given:** The MMW update, Golden–Thompson for finite Hermitian matrices, and the local exponential and positive-trace lemmas.

[F1] [[def-qa-30-mmw-game]]: $S_t=\sum_{s\le t}M_s$, $\rho_t=e^{-\eta S_{t-1}}/\operatorname{tr}(e^{-\eta S_{t-1}})$, and its verification proves each $\rho_t$ is positive with trace one.

[F2] [[lem-qa-30-exp-quadratic-bound]]: $e^{-\eta M_t}\preceq I-\eta M_t+\eta^2I$.

[F3] [[lem-finite-dimensional-golden-thompson-trace-inequality]]: for Hermitian $H,K$, $\operatorname{tr}(e^{H+K})\le\operatorname{tr}(e^He^K)$.

[F4] [[lem-qa-30-positive-product-trace-nonnegative]]: the trace of a product of positive semidefinite matrices is nonnegative.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: the eigenvalues of a Hermitian matrix are real, and its trace and exponential are the corresponding eigenvalue sums.

[F6] [[lem-qa-30-hermitian-product-trace-real]]: the trace of two Hermitian matrices product is real.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is invariant under unitary conjugation and cyclic for compatible products.

[F8] [[def-real-exponential-function-and-e]] defines the scalar exponential by its factorial series, [[lem-exponential-series-has-infinite-radius]] gives absolute convergence, and [[def-factorial-and-falling-factorial]] gives the factorial recursion used to group its tail under the canonical real embedding.

[F9] [[prop-trace-is-linear]]: trace distributes over finite sums and scalar multiples.

[F10] [[def-natural-logarithm]] defines $\ln x$ as the inverse of $\exp$ for $x>0$.

[F11] [[thm-exponential-is-strictly-increasing]] makes this inverse strictly increasing, and [[thm-complex-exponential-addition-and-real-extension]] supplies $\exp(x+y)=\exp(x)\exp(y)$ for real inputs.

## Proof

**Proof technique:** direct.

1.1 Put $Z_t=\operatorname{tr}(e^{-\eta S_t})$ and $m_t=\operatorname{tr}(M_t\rho_t)$. By [F5], write $M_t=U\operatorname{diag}(\lambda_1,\ldots,\lambda_n)U^*$; the loss bounds imply $\lambda_k\in[-1,1]$. The matrix $\sigma=U^*\rho_tU$ is positive with trace one by [F1] and [F7]. Thus $q_k=\sigma_{kk}\ge0$ and $\sum_kq_k=1$. Trace cyclicity and the diagonal-sum formula give $m_t=\sum_k\lambda_kq_k\in[-1,1]$, consistently with [F6]. Hence $1-\eta m_t+\eta^2\ge1-\eta+\eta^2=(\eta-1/2)^2+3/4>0$. Since $S_t$ is Hermitian, Golden–Thompson [F3] gives $Z_t\le\operatorname{tr}(e^{-\eta S_{t-1}}e^{-\eta M_t})$. By [F2], $(I-\eta M_t+\eta^2I)-e^{-\eta M_t}\succeq0$; [F4] compares its trace product with the positive matrix $e^{-\eta S_{t-1}}$, and [F9] expands the result as $Z_t\le Z_{t-1}(1-\eta m_t+\eta^2)$. Put $s=-\eta m_t+\eta^2$, so $s\ge\eta^2-\eta\ge-1/4$. If $s\ge0$, the series [F8] gives $\exp(s)\ge1+s$. If $s=-v$ with $0<v\le1/4$, absolute convergence [F8] permits pairing the tail after its linear term as $\sum_{j\ge0}\frac{v^{2j+2}}{(2j+2)!}(1-\frac{v}{2j+3})\ge0$, so again $\exp(s)\ge1+s$. Therefore $Z_t\le Z_{t-1}\exp(-\eta m_t+\eta^2)$. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, algebra]

2.1 Iterating step 1.1 from $Z_0=n$ gives $Z_T\le n\exp(-\eta\sum_tm_t+\eta^2T)$. If $S_T$ has eigenvalues $\lambda_1,\ldots,\lambda_n$, [F5] gives $Z_T=\sum_ke^{-\eta\lambda_k}\ge\exp(-\eta\lambda_{\min}(S_T))$. Since $n>0$, [F10]–[F11] give $n\exp(-\eta\sum_tm_t+\eta^2T)=\exp(\ln n-\eta\sum_tm_t+\eta^2T)$. Strict increase of $\exp$ and the inverse relation in [F10] therefore imply $-\eta\lambda_{\min}(S_T)\le\ln n-\eta\sum_tm_t+\eta^2T$. Rearranging and dividing by $\eta>0$ proves the inequality. [given, F5, F10, F11, step 1.1, algebra] ∎
