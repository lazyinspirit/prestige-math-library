---
id: alg-amsgrad
kind: algorithm
title: Uncorrected AMSGrad with a coordinatewise historical maximum
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-natural-numbers
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
  - thm-of-square-roots
  - lem-of-square-positive
  - lem-of-zero-mult
  - def-ordered-field
  - lem-of-sign-rules
  - cor-cauchy-reals-lub-complete
  - def-max-min
  - lem-finite-set-has-max
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by:
  - lem-adaptive-moment-updates-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§4 Algorithm 2 and Theorem 4, PDF pp. 4–6; Appendix D."
---

## Definition

Fix a dimension $d\ge1$, a finite horizon $T\ge1$, a nonempty compact convex set $F\subseteq\mathbb R^d$, an initial point $x_1\in F$, positive step sizes $\alpha_t>0$, a fixed parameter $\beta_2\in(0,1)$, and parameters $\beta_{1,t}\in[0,1)$ for $1\le t\le T$. At round $t$, receive a finite subgradient vector $g_t\in\mathbb R^d$. Set $m_0=v_0=\widehat v_0=0$ and update coordinatewise by

$$m_{t,i}=\beta_{1,t}m_{t-1,i}+(1-\beta_{1,t})g_{t,i},\qquad v_{t,i}=\beta_2v_{t-1,i}+(1-\beta_2)g_{t,i}^2,$$

$$\widehat v_{t,i}=\max\{\widehat v_{t-1,i},v_{t,i}\}.$$

If $\widehat v_{t,i}>0$, set $y_{t+1,i}=x_{t,i}-\alpha_t m_{t,i}/\sqrt{\widehat v_{t,i}}$; if $\widehat v_{t,i}=0$, set $y_{t+1,i}=x_{t,i}$. Choose any minimizer

$$x_{t+1}\in\operatorname*{argmin}_{x\in F}\sum_{i=1}^d\sqrt{\widehat v_{t,i}}(x_i-y_{t+1,i})^2.$$

Return the trajectory through $x_{T+1}$. The procedure uses the uncorrected first and second moments and the coordinatewise running maximum of the raw second moment. It contains no denominator stabilizer.

## Definition references

[[def-euclidean-inner-product]]: vectors use the stated real coordinates and coordinatewise operations.

[[def-convex-subset-of-euclidean-space]]: the feasible set contains every segment between two of its points.

[[thm-of-square-roots]]: each nonnegative second-moment coordinate has a unique nonnegative square root.

[[def-max-min]] and [[lem-finite-set-has-max]]: the maximum of the two real second-moment values exists.

[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real-valued function on the nonempty compact feasible set attains its minimum.

[[alg-amsgrad-update]]: the published procedure instead maxes bias-corrected second moments; it is not this raw-moment update.

[Reddi, Kale, and Kumar, AMSGrad Algorithm 2 and Theorem 4](https://arxiv.org/pdf/1904.09237)

## Remarks

This is the source-matched online AMSGrad procedure for the regret theorem on this page. It is distinct from the published bias-corrected procedure. The moment well-definedness result justifies the zero-coordinate convention and existence of each finite minimization step.
