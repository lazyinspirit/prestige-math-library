---
id: alg-adam-update
kind: algorithm
title: Bias-corrected Adam update
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-natural-numbers
  - def-integer-power
  - thm-of-square-roots
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Diederik P. Kingma and Jimmy Ba, Adam: A Method for Stochastic Optimization, ICLR 2015"
      url: https://arxiv.org/pdf/1412.6980
      locator: Section 2, Algorithm 1 and bias-correction equations (2)–(5).
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond, ICLR 2018, full text"
      url: https://arxiv.org/pdf/1904.09237
      locator: Section 2, generic adaptive methods and the Adam recurrence; Appendix F, Theorem 6 for the epsilon-denominator variant.
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Sections 1–3, adaptive online gradient methods and regret analysis.
---

## Definition

Fix a dimension d at least 1, an initial point x_1 in R^d, a constant step size eta>0, a denominator constant epsilon>0, and parameters beta_1,beta_2 in [0,1). Set m_0=v_0=0. Given a gradient g_t in R^d at each integer time t>=1, calculate

$$
m_t=\beta_1m_{t-1}+(1-\beta_1)g_t,\qquad
v_t=\beta_2v_{t-1}+(1-\beta_2)(g_t\odot g_t),
$$

where \odot denotes coordinatewise multiplication. Define the bias-corrected moments

$$
\widehat m_t=\frac{m_t}{1-\beta_1^t},\qquad
\widehat v_t=\frac{v_t}{1-\beta_2^t},
$$

and update, coordinatewise,

$$
x_{t+1}=x_t-\eta\frac{\widehat m_t}{\sqrt{\widehat v_t}+\epsilon}.
$$

All operations involving vectors in the update are coordinatewise except the ordinary vector addition in the moment recurrences. Since 1-\beta_j^t>0 for t>=1 and v_t has nonnegative coordinates, every denominator is positive; the procedure is defined at every finite step for every finite gradient sequence.

This item defines the update only. It makes no convergence or regret claim.
