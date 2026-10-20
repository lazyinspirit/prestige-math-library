---
id: ex-empirical-risk-sgd-oracle-is-unbiased
kind: example
title: "Uniform empirical-risk sampling gives an unbiased bounded-variance gradient"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-minibatch-stochastic-gradient-descent
  - thm-stochastic-direction-expected-average-stationarity
  - def-population-and-empirical-risk
  - def-supervised-learning-problem
  - def-axiom-of-choice
  - def-probability-measure
  - def-measure
  - def-random-element-and-real-random-variable
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-variance
  - lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-derivative
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct

---

## Example

Assume AC for the conditional-expectation stationarity bound below. Take instance space $(\{*\},2^{\{*\}})$, action and label spaces $(\mathbb R,\mathcal B(\mathbb R))$, the probability law $P=\delta_{(*,0)}$, the nonempty predictor class $\mathcal F=\{h_\theta:\theta\in\mathbb R\}$ with $h_\theta(*)=\theta$, and squared loss $\ell(a,y)=\frac12(a-y)^2$. Fix an ordered sample $S=((*,y_1),\ldots,(*,y_m))$ of integer length $m\ge1$ with $y_i\in\mathbb R$, and let $\bar y=m^{-1}\sum_i y_i$ and $v_S=m^{-1}\sum_i(y_i-\bar y)^2$. For an integer batch size $b\ge1$ and integer horizon $T\ge1$, sample all indices independently and uniformly with replacement from $\{1,\ldots,m\}$ on the finite uniform space $\{1,\ldots,m\}^{bT}$, and at iteration $t$ average the $b$ component gradients $\theta_t-y_{I_{t,j}}$ before the SGD update. For the fixed-sample empirical risk $\widehat R_S(h_\theta)$, this minibatch direction has conditional mean $\theta_t-\bar y=\frac{d}{d\theta}\widehat R_S(h_{\theta_t})$ and conditional variance $v_S/b$. The objective has $1$-Lipschitz gradient and global infimum $v_S/2$, so for constant $0<\alpha\le1$ the expected-average theorem yields
$$\frac1T\sum_{t=1}^T\mathbb E\left|\frac{d}{d\theta}\widehat R_S(h_{\theta_t})\right|^2\le\frac{\alpha v_S}{b}+\frac{(\theta_1-\bar y)^2}{T\alpha}.$$
The sampling law here is over the fixed empirical sample; no population-risk gradient identity is asserted.

## Example references

[[def-supervised-learning-problem|Supervised prediction-problem definition]]: fixes the measurable prediction and loss setting.

[[def-population-and-empirical-risk|Population and empirical-risk definition]]: defines the fixed-sample empirical objective.

[[alg-minibatch-stochastic-gradient-descent|Minibatch SGD procedure]]: specifies the averaged direction and update.

[[thm-stochastic-direction-expected-average-stationarity|Expected-average stationarity theorem]]: supplies the conditional-moment guarantee applied here.

## Facts & Assumptions

**Given:** The supervised setup, fixed sample, finite product index law, batch procedure, and AC assumption in the Example.

[A1] [[def-axiom-of-choice]]: AC supplies conditional-expectation classes for the final theorem application.

[F1] [[def-supervised-learning-problem]]: predictors are measurable maps and the loss is measurable on the action-label product.

[F2] [[def-population-and-empirical-risk]]: the empirical risk is the finite average of the sample losses.

[F3] [[def-derivative]]: the derivative at $\theta$ is the limit of the difference quotient.

[F4] [[alg-minibatch-stochastic-gradient-descent]]: the update uses the average of the batch vectors at the current iterate.

[F5] [[def-probability-measure]] and [[def-measure]]: the finite uniform space is a probability space with countably additive probability.

[F6] [[def-filtration-and-filtered-probability-space]] and [[def-adapted-and-integrable-stochastic-process]]: the filtration records prior index batches and the current iterate is measurable with respect to that history.

[F7] [[def-random-element-and-real-random-variable]]: each finite index and scalar component gradient is a measurable random variable.

[F8] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are almost-sure classes.

[F9] [[def-conditional-variance]] and [[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]]: conditional variance is the conditional second moment of the centered scalar direction.

[F10] [[thm-stochastic-direction-expected-average-stationarity]]: for an unbiased oracle with $\mu=\mu_G=1$, constant step $\alpha\le1/L$, variance bound $M$, and lower bound $F_{\inf}$, the average gradient-square bound is $\alpha LM+2(f(\theta_1)-F_{\inf})/(T\alpha)$.

[F11] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: finite-space expectations are finite weighted sums.

## Verification

1.1 Each $h_\theta$ is measurable on the singleton instance space, and the squared loss is continuous, hence measurable; with the stated nonempty predictor class and probability law, these data satisfy the supervised-problem interface [F1]. By the empirical-risk definition [F2], $F_S(\theta)=\widehat R_S(h_\theta)=\frac1{2m}\sum_{i=1}^m(\theta-y_i)^2$. For $h\ne0$, $[F_S(\theta+h)-F_S(\theta)]/h=m^{-1}\sum_i(\theta-y_i)+h/2=\theta-\bar y+h/2$, whose limit as $h\to0$ is $\theta-\bar y$ by [F3]. Expanding around $\bar y$ also gives $F_S(\theta)=\frac12(\theta-\bar y)^2+v_S/2$, so $F'_S(\theta)=\theta-\bar y$, its gradient is $1$-Lipschitz, and its global infimum is $v_S/2$. [F1, F2, F3, given, algebra]

1.2 Conditional on any past index batches, each new batch tuple is uniform on $\{1,\ldots,m\}^b$. For each component, $\mathbb E[\theta_t-y_{I_{t,j}}\mid\mathcal F_t]=\theta_t-\bar y$. Its centered value is $\bar y-y_{I_{t,j}}$, with conditional second moment $v_S$; for $i\ne j$, the cross moment is $m^{-2}(\sum_r(\bar y-y_r))^2=0$. Therefore the average direction has conditional mean $\theta_t-\bar y$ and conditional variance $b^{-2}(bv_S)=v_S/b$. [F4, F5, F6, F7, F8, F9, F11, given, algebra]

2.1 The mean and variance in step 1.2 satisfy the unbiased branch of [F10] with $\mu=\mu_G=1$, $M=v_S/b$, $M_V=0$, $L=1$, and $F_{\inf}=v_S/2$. Since $0<\alpha\le1=\mu/(LM_G)$, substitute these values into [F10] to obtain the displayed expected-average bound. The data sample $S$ is fixed throughout; no expectation over a population law is used. [A1, F10, step 1.1, step 1.2, given, algebra] ∎
