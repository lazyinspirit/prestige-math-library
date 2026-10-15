---
id: thm-gaussian-regression-confidence-and-prediction-intervals
kind: theorem
title: "Exact confidence and prediction intervals in Gaussian regression"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 5
deps:
  - thm-exact-gaussian-linear-regression-inference
  - def-axiom-of-choice
  - def-pivot
  - def-confidence-set-and-coverage
  - thm-pivot-inversion-exact-coverage
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-chi-square-law
  - def-student-t-and-f-laws
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - thm-independent-random-elements-have-product-joint-law
  - lem-measurable-functions-preserve-independence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Section 15: Multiple Linear Regression, PDF pp. 4–7"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Lecture 4: Multivariate Normal Distribution, PDF pp. 1–4"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf"
    - title: "Charlotte Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 6–7"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Stanford University, Stats 203, Inference for Linear Regression, Lecture 4, sections on mean-response and prediction intervals"
      url: "https://web.stanford.edu/class/stats203/lectures/lecture4/"
---

## Statement

Use the fixed full-column-rank Gaussian regression model and notation of [[thm-exact-gaussian-linear-regression-inference]], with $\nu=n-p$. Let $0<\alpha<1$, let $t^*=t_{\nu,1-\alpha/2}$ be the unique $(1-\alpha/2)$ quantile of $t_\nu$, and put $v_c=c^T(X^TX)^{-1}c$ for $c\ne0$. Then
$$C_c(Y)=\left[c^T\widehat\beta-t^*s\sqrt{v_c},\ c^T\widehat\beta+t^*s\sqrt{v_c}\right]$$
has exact coverage $1-\alpha$ for $c^T\beta$.

For any $x_0\in\mathbb R^p$, put $h_0=x_0^T(X^TX)^{-1}x_0$. The mean-response interval
$$C_{\rm mean}(Y;x_0)=\left[x_0^T\widehat\beta-t^*s\sqrt{h_0},\ x_0^T\widehat\beta+t^*s\sqrt{h_0}\right]$$
has exact coverage $1-\alpha$ for $x_0^T\beta$ when $x_0\ne0$. If $x_0=0$, it is the singleton $\{0\}$ and has coverage $1$.

If $Y_0^*=x_0^T\beta+\epsilon_0^*$ is one future response with $\epsilon_0^*\sim N(0,\sigma^2)$ independent of the training data, then
$$C_{\rm pred}(Y;x_0)=\left[x_0^T\widehat\beta-t^*s\sqrt{1+h_0},\ x_0^T\widehat\beta+t^*s\sqrt{1+h_0}\right]$$
satisfies $\mathbb P_{\beta,\sigma^2}\{Y_0^*\in C_{\rm pred}(Y;x_0)\}=1-\alpha$. The added $1$ is the variance contribution of the future response's own error.

## Facts & Assumptions

**Given:** The Axiom of Choice, the Gaussian regression experiment in [[thm-exact-gaussian-linear-regression-inference]], $0<\alpha<1$, a contrast $c\ne0$, a predictor vector $x_0\in\mathbb R^p$, and, for prediction, an independent future Gaussian error $\epsilon_0^*\sim N(0,\sigma^2)$.

[A1] The Axiom of Choice is inherited from the Gaussian model and its normal-law suppliers. [[def-axiom-of-choice]]

[F1] In this model, $\widehat\beta\sim N_p(\beta,\sigma^2(X^TX)^{-1})$, $\widehat\beta$ is independent of $RSS_F$, and the stated nonzero-contrast pivot has law $t_\nu$. [[thm-exact-gaussian-linear-regression-inference]]

[F2] A pivot is a parameter-indexed family of measurable statistics with one common sampling law. [[def-pivot]]

[F3] A confidence-set procedure is measurable when each parameter-membership section is measurable, and coverage is the probability that the true parameter belongs to the set. [[def-confidence-set-and-coverage]]

[F4] Inverting a pivot acceptance set of probability $1-\alpha$ gives a confidence set with exact coverage $1-\alpha$. [[thm-pivot-inversion-exact-coverage]]

[F5] The $t_\nu$ CDF is symmetric, continuous, and strictly increasing, so $[-t_{\nu,1-\alpha/2},t_{\nu,1-\alpha/2}]$ has probability $1-\alpha$. [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

[F6] For a multivariate normal vector, every linear projection is normal with variance given by its covariance quadratic form; independent normal coordinates give the corresponding product normal law. [[def-multivariate-normal-law]]

[F7] Independent random elements have product joint law, and measurable functions of independent random elements remain independent. [[thm-independent-random-elements-have-product-joint-law]] [[lem-measurable-functions-preserve-independence]]

[F8] The future error has the centered normal law with variance $\sigma^2$, independently of the training data. [[def-standard-normal-and-normal-laws]]

[F9] For $\nu\ge1$, $t_\nu$ is the law of an independent standard normal divided by $\sqrt{\chi^2_\nu/\nu}$. [[def-student-t-and-f-laws]] [[def-chi-square-law]]

[F10] A positive-degree chi-square denominator is positive almost surely. [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $c\ne0$. Then $v_c>0$ because $X^TX$ is positive definite. For each full parameter $\theta=(\beta,\sigma^2)$, the statistic $q_\theta(Y)=(c^T\widehat\beta-c^T\beta)/(s\sqrt{v_c})$, assigned value $0$ when $s=0$, is a pivot by [F1] and [F2], with common law $t_\nu$. By [F5], $B=[-t^*,t^*]$ has probability $1-\alpha$. Define $D_c(Y)=\{(\beta',\sigma'^2)\in\Theta:c^T\beta'\in C_c(Y)\}$. For each fixed $(\beta',\sigma'^2)\in\Theta$, its membership event is $|c^T\widehat\beta-c^T\beta'|\le t^*s\sqrt{v_c}$, a closed, hence Borel, set because $\widehat\beta$ and $s$ are continuous functions of $Y$. Thus [F3] applies to $D_c$. Pivot inversion [F4] gives exact coverage for $D'_c(Y)=\{\theta'\in\Theta:|q_{\theta'}(Y)|\le t^*\}$. On $s>0$, $D_c(Y)=D'_c(Y)$; the exceptional event $s=0$ has probability zero for every parameter by [F1]. Therefore $D_c$ has exact coverage $1-\alpha$, which is precisely $\mathbb P_{\beta,\sigma^2}\{c^T\beta\in C_c(Y)\}=1-\alpha$. [A1, F1, F2, F3, F4, F5, algebra]

2.1 If $x_0\ne0$, the same argument with $c=x_0$ gives the displayed mean-response interval because $h_0=v_{x_0}$. If $x_0=0$, then $x_0^T\beta=x_0^T\widehat\beta=h_0=0$ for every parameter and data vector, so the interval is $\{0\}$ and contains the true mean with probability $1$. [F1, step 1.1, algebra]

3.1 Write $Z=(\widehat\beta-\beta)/\sigma$ and $G_*=\epsilon_0^*/\sigma$. By [F1] and [F8], $Z$ and $G_*$ are independent centered normal vectors/scalars with covariance $(X^TX)^{-1}$ and variance $1$. Their joint law is the product law by [F7], so [F6] gives $\frac{Y_0^*-x_0^T\widehat\beta}{\sigma\sqrt{1+h_0}}=\frac{G_*-x_0^TZ}{\sqrt{1+h_0}}\sim N(0,1)$, since the numerator has variance $1+x_0^T(X^TX)^{-1}x_0=1+h_0$. Because $G_*$ is independent of the training data, [F7] gives $\mathcal L(Z,RSS_F,G_*)=\mathcal L(Z,RSS_F)\otimes\mathcal L(G_*)$. Since $Z$ is a measurable affine function of $\widehat\beta$, [F1] and [F7] imply that $Z$ is independent of $RSS_F$; the joint law therefore factors as $\mathcal L(Z)\otimes\mathcal L(RSS_F)\otimes\mathcal L(G_*)$, so $(Z,G_*)$ is independent of $RSS_F$. The displayed standard normal is a measurable function of $(Z,G_*)$, so it is independent of $RSS_F/\sigma^2\sim\chi^2_\nu$ by [F7]. By [F9] and [F10], the ratio $(Y_0^*-x_0^T\widehat\beta)/(s\sqrt{1+h_0})$ has law $t_\nu$ with positive denominator almost surely. Its central acceptance interval has probability $1-\alpha$ by [F5], which is exactly the event $Y_0^*\in C_{\rm pred}(Y;x_0)$. [A1, F1, F5, F6, F7, F8, F9, F10, step 2.1, algebra] ∎
