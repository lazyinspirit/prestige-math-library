---
id: cor-global-log-density-error-from-state-and-quadrature
title: "Global continuous-flow log-density error from state and quadrature bounds"
kind: corollary
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-countable-choice
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-continuous-flow-log-density-equation
  - thm-divergence-integral-error-with-separate-quadrature
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only through the exact density interpretation in thm-continuous-flow-log-density-equation."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://jmlr.org/papers/volume22/19-1028/19-1028.pdf"
---

## Statement

Assume Countable Choice and the hypotheses of [[thm-continuous-flow-log-density-equation]]. Let $q(t,x):=-\operatorname{div}_x f(t,x)$, and suppose a numerical state method and scalar quadrature satisfy the hypotheses of [[thm-divergence-integral-error-with-separate-quadrature]], with numerical initial value satisfying $|\widehat\ell_0-\log p_0(x(0))|\le C_{\ell,0}h^r$. Then the numerical scalar values $\widehat\ell_n$ approximate the actual flow log densities and
$$\max_{0\le n\le N}\left|\widehat\ell_n-\log p_{t_n}(x(t_n))\right|\le C_{\ell,0}h^r+TK_qK_xh^p+DT h^m,$$
with the constants and orders from that theorem.

## Facts & Assumptions

**Given:** Countable Choice, a C¹ flow of diffeomorphisms with positive initial density, and numerical state and quadrature updates satisfying the separate error hypotheses.

[A1] Countable Choice is assumed only for the change-of-variables step that identifies the flow density ([[def-countable-choice]]).

[F1] Along the flow, $\frac{d}{dt}\log p_t(x(t))=-\operatorname{div}_x f(t,x(t))$ ([[thm-continuous-flow-log-density-equation]]).

[F2] For the divergence integrand and numerical updates in the Statement, the grid error is at most $C_{\ell,0}h^r+TK_qK_xh^p+DT h^m$ ([[thm-divergence-integral-error-with-separate-quadrature]]).

[F3] A solution of the scalar initial-value problem $\ell'=q(t,x(t))$ satisfies $\ell(t)=\ell(0)+\int_0^tq(s,x(s))\,ds$ ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

## Proof

1.1 By [F1], the exact log density along the trajectory solves the scalar IVP $\ell'(t)=q(t,x(t))$ with $\ell(0)=\log p_0(x(0))$. Applying [F3] on each step shows that its increment from $t_n$ to $t_{n+1}$ is exactly $I_n=\int_{t_n}^{t_{n+1}}q(s,x(s))\,ds$, so the exact scalar grid sequence in [F2] is $\ell_n=\log p_{t_n}(x(t_n))$. [A1, F1, F3, given]

2.1 Apply [F2] to the numerical state and scalar updates. The exact grid sequence is the log density by step 1.1, so the stated bound is precisely the numerical log-density error. [F2, step 1.1] ∎
