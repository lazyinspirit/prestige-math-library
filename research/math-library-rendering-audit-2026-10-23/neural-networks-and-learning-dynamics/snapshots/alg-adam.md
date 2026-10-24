---
id: alg-adam
kind: algorithm
title: Uncorrected Adam for online convex losses
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-natural-numbers
  - def-euclidean-inner-product
  - thm-of-square-roots
  - lem-of-square-positive
  - lem-of-zero-mult
  - def-ordered-field
  - lem-of-sign-rules
  - cor-cauchy-reals-lub-complete
  - def-max-min
  - lem-finite-set-has-max
  - def-interval
justified_by:
  - lem-adaptive-moment-updates-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§2 Algorithm 1 generic adaptive update and §3 counterexample conventions, PDF pp. 2–4; Appendix F for the inside-root epsilon variant."
    - title: "Diederik P. Kingma and Jimmy Ba, Adam: A Method for Stochastic Optimization"
      url: "https://arxiv.org/pdf/1412.6980"
      locator: "Algorithm 1 and §§2–3, bias-corrected moment recurrence and denominator convention, PDF pp. 2–3."
---

## Definition

Fix a finite horizon $T\ge1$, an initial scalar $x_1\in[-1,1]$, a step parameter $\alpha>0$, moment parameters $\beta_1\in[0,1)$ and $\beta_2\in(0,1)$, a denominator parameter $\epsilon\ge0$, and a sequence of scalar gradients $g_1,\ldots,g_T$. Set $m_0=v_0=0$. At round $t$, update

$$m_t=\beta_1m_{t-1}+(1-\beta_1)g_t,\qquad v_t=\beta_2v_{t-1}+(1-\beta_2)g_t^2.$$

The input is admissible only when $v_t+\epsilon>0$ at every update. Set $\alpha_t=\alpha/\sqrt t$, compute $y_{t+1}=x_t-\alpha_t m_t/\sqrt{v_t+\epsilon}$, and set $x_{t+1}=\max(-1,\min(1,y_{t+1}))$. Thus the iterate is projected onto $[-1,1]$ after the update. Return the trajectory $(x_1,\ldots,x_{T+1})$, whose final iterate is $x_{T+1}$. The denominator parameter is added inside the square root. No moment bias correction is applied.

## Definition references

[[def-natural-numbers]]: the finite round indices are natural numbers.

[[def-interval]]: $[-1,1]$ is the closed scalar interval used for initialization and clipping.

[[thm-of-square-roots]]: every nonnegative real radicand has a unique nonnegative square root.

[[def-max-min]]

[[lem-finite-set-has-max]]: the displayed clipping operation is the maximum and minimum of finite real sets.

[[alg-adam-update]]: the published bias-corrected Adam procedure instead divides by $\sqrt{\widehat v_t}+\epsilon$; it is a distinct update convention.

[Reddi, Kale, and Kumar, Algorithm 1 and the inside-root epsilon variant](https://arxiv.org/pdf/1904.09237)

[Kingma and Ba, Adam Algorithm 1](https://arxiv.org/pdf/1412.6980)

## Remarks

This is the uncorrected scalar online variant used for the cited regret counterexamples. Its $\epsilon=0$ mode is defined only on gradient sequences with positive $v_t$ at every round; the counterexample sequences in the theorem meet that condition. The fixed-$\epsilon$ mode uses the source's addition inside the square root, not the published bias-corrected denominator convention.
