---
id: alg-amsgrad-update
kind: algorithm
title: Bias-corrected AMSGrad update
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-natural-numbers
  - def-integer-power
  - thm-of-square-roots
  - def-ordered-field
  - lem-power-monotone
  - lem-of-square-positive
  - lem-of-sign-rules
  - lem-of-zero-mult
  - lem-of-inverse-positive
  - def-max-min
  - lem-finite-set-has-max
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

$$m_t=\beta_1m_{t-1}+(1-\beta_1)g_t,\qquad v_t=\beta_2v_{t-1}+(1-\beta_2)(g_t\odot g_t),$$

$$\widehat m_t=\frac{m_t}{1-\beta_1^t},\qquad \widehat v_t=\frac{v_t}{1-\beta_2^t},\qquad \widehat v^{\max}_t=\max(\widehat v^{\max}_{t-1},\widehat v_t),$$

where \odot and max are coordinatewise. Update

$$
x_{t+1}=x_t-\eta\frac{\widehat m_t}{\sqrt{\widehat v^{\max}_t}+\epsilon}
$$

coordinatewise. Each coordinate of v_t and \widehat v^{\max}_t is nonnegative, and the denominator is at least epsilon>0, so every finite update is defined.

This carrier defines a bias-corrected AMSGrad variant under the assigned denominator convention. Reddi–Kale–Kumar's Algorithm 2 takes the running maximum of the uncorrected second-moment recurrence and uses that maximum directly in the denominator; it does not apply Adam's second-moment bias correction. The recurrences are not identified here. No AMSGrad convergence theorem is claimed.

## Remarks

For $0\le\beta_j<1$ and integer $t\ge1$, [[lem-power-monotone]] gives
$0\le\beta_j^t<1$, so each bias-correction denominator is positive. Induction
in the second-moment recurrence, [[lem-of-square-positive]],
[[lem-of-sign-rules]] and [[lem-of-zero-mult]] give $v_t\ge0$.
Division by the positive bias-correction factor preserves nonnegativity by
[[lem-of-inverse-positive]], so $\widehat v_t\ge0$ and its square root exists by
[[thm-of-square-roots]]. The coordinatewise maximum is the maximum of a
two-element real set, which exists by [[def-max-min]] and
[[lem-finite-set-has-max]] and is nonnegative because it is one of its two
nonnegative entries. Thus every denominator is at least $\epsilon>0$.
