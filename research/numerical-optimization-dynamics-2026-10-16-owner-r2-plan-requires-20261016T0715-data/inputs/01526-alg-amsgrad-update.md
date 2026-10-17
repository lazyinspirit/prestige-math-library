---
id: alg-amsgrad-update
kind: algorithm
title: Bias-corrected AMSGrad update
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
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond, ICLR 2018, full text"
      url: https://arxiv.org/pdf/1904.09237
      locator: Section 4, AMSGrad discussion and Algorithm 2.
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Sections 1–3, adaptive online gradient methods and regret analysis.
---

## Definition

Fix a dimension d at least 1, an initial point x_1 in R^d, a constant step size eta>0, a denominator constant epsilon>0, and parameters beta_1,beta_2 in [0,1). Set m_0=v_0=\widehat v^{\max}_0=0. Given a gradient g_t in R^d at each integer time t>=1, calculate

$$
m_t=\beta_1m_{t-1}+(1-\beta_1)g_t,\qquad
v_t=\beta_2v_{t-1}+(1-\beta_2)(g_t\odot g_t),
$$

$$
\widehat m_t=\frac{m_t}{1-\beta_1^t},\qquad
\widehat v_t=\frac{v_t}{1-\beta_2^t},\qquad
\widehat v^{\max}_t=\max(\widehat v^{\max}_{t-1},\widehat v_t),
$$

where \odot and max are coordinatewise. Update

$$
x_{t+1}=x_t-\eta\frac{\widehat m_t}{\sqrt{\widehat v^{\max}_t}+\epsilon}
$$

coordinatewise. Each coordinate of v_t and \widehat v^{\max}_t is nonnegative, and the denominator is at least epsilon>0, so every finite update is defined.

This carrier follows the assigned bias-corrected denominator convention. Reddi–Kale–Kumar's Algorithm 2 takes its running maximum before bias correction. The two recurrences are not identified here. No AMSGrad convergence theorem is claimed.
