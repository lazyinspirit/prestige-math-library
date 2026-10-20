---
id: alg-finite-grid-conformal-risk-control
kind: algorithm
title: "Finite-grid conformal risk control"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-finite-nested-decision-family-and-bounded-risk
justified_by:
  - thm-finite-grid-conformal-risk-control
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§1.1, display equation (4), including the maximum-grid fallback."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Input a deterministic ordered grid $\Lambda=\{\lambda_1<\cdots<\lambda_M\}$ with $M\ge1$, a calibration size $n\ge1$, a bound $B>0$, a target $\alpha\in[0,B)$, and calibration losses $L_i(\lambda_j)\in[0,B]$ for $1\le i\le n$ and $1\le j\le M$. Also supply the prediction rule $d_{\lambda_j}$ associated with each grid point. For $j=1,\ldots,M$ in order, compute
$$T_j=\frac{\sum_{i=1}^n L_i(\lambda_j)+B}{n+1}.$$
Return $(\lambda_j,d_{\lambda_j},\text{pass})$ at the first index for which $T_j\le\alpha$. If no index passes, return $(\lambda_M,d_{\lambda_M},\text{fallback})$. Monotonicity and the endpoint-safety assumption from the finite nested decision family are hypotheses for the risk theorem, not checks of the unobserved test loss.

## Definition references

[[def-finite-nested-decision-family-and-bounded-risk]]: the grid, bounded loss array, loss-nesting convention, endpoint-safety condition, and marginal expected test risk.

[Angelopoulos et al., Conformal Risk Control, §1.1, equation (4)](https://arxiv.org/pdf/2208.02814v4)
