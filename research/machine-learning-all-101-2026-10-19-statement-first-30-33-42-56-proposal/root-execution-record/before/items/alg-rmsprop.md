---
id: alg-rmsprop
kind: algorithm
title: RMSProp with an exponential second-moment estimate
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - thm-of-square-roots
  - lem-of-square-positive
  - lem-of-zero-mult
  - def-ordered-field
  - lem-of-sign-rules
  - cor-cauchy-reals-lub-complete
justified_by:
  - lem-adaptive-moment-updates-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf"
      locator: "RMSprop coordinatewise running-average update, PDF pp. 65–66."
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§2 generic adaptive setup and the discussion identifying RMSProp with the zero-first-moment special case, PDF pp. 2–3."
---

## Definition

Fix a dimension $d\ge1$, an initial vector $x_1\in\mathbb R^d$, a finite or infinite sequence of finite gradient vectors $g_t\in\mathbb R^d$, positive step sizes $\eta_t>0$, a decay parameter $\rho\in[0,1)$, and a denominator constant $\epsilon>0$. Set $r_0=0$. At each integer round $t\ge1$, update the second-moment estimate coordinatewise by

$$r_{t,i}=\rho r_{t-1,i}+(1-\rho)g_{t,i}^2\qquad(1\le i\le d),$$

and then set

$$x_{t+1,i}=x_{t,i}-\eta_t\frac{g_{t,i}}{\sqrt{r_{t,i}}+\epsilon}\qquad(1\le i\le d).$$

The root, addition, and division in the update are coordinatewise. The procedure makes no convergence or regret claim.

## Definition references

[[def-euclidean-inner-product]]: vectors in $\mathbb R^d$ have the stated real coordinates, and vector updates are interpreted coordinatewise.

[[lem-of-square-positive]]: every nonzero squared gradient coordinate is positive.

[[lem-of-zero-mult]]: a zero gradient coordinate has square zero.

[[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[[def-ordered-field]] and [[lem-of-sign-rules]]: the decay coefficients and their complements are nonnegative, so the moment recurrence preserves nonnegativity.

[Bottou, Curtis, and Nocedal, RMSprop update](https://leon.bottou.org/publications/pdf/tr-optml-2016.pdf)

[Reddi, Kale, and Kumar, adaptive-method setup](https://arxiv.org/pdf/1904.09237)

## Remarks

This is the no-momentum RMSProp variant with a positive constant added outside the square root. It has no bias correction and defines only an update procedure.
