---
id: lem-glm-mean-and-variance-identities
kind: lemma
title: Mean and variance from the cumulant function
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-glm-observation-family
  - cor-mean-value-theorem
  - thm-dominated-convergence
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-moments-variance-and-covariance
  - thm-integration-against-a-density
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 16–22"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 1–4"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

Fix $i$ and $\phi$ in [[def-glm-observation-family]], and write $a=a_i(\phi)$. Under its fixed-support, twice differentiable density, local integrable derivative-envelope, and finite-second-moment hypotheses,

$$\mathbb E_{\theta_i,\phi}[Y_i]=b'(\theta_i),\qquad \operatorname{Var}_{\theta_i,\phi}(Y_i)=a\,b''(\theta_i).$$

## Facts & Assumptions

**Given:** The normalized density $f_i(y;\theta_i,\phi)$ on the open interval $J$, its fixed support, locally uniform integrable envelopes for its first two parameter derivatives, and $\mathbb E_{\theta_i,\phi}[Y_i^2]<\infty$.

[F1] [[def-glm-observation-family]]: $f_i(y;\theta_i,\phi)=\exp\{(y\theta_i-b(\theta_i))/a+c_i(y,\phi)\}$ is normalized for every $\theta_i$ on a fixed support, with $b\in C^2(J)$ and the stated derivative envelopes.

[F2] [[cor-mean-value-theorem]]: if a function is continuous on a closed interval and differentiable in its interior, an endpoint difference equals its derivative at an interior point times the interval length.

[F3] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant permits passing the limit through the integral.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of an integrable real random variable is its finite signed integral.

[F6] [[thm-integration-against-a-density]]: if $P=f\,d\nu$, then for nonnegative measurable $g$, $\int g\,dP=\int gf\,d\nu$; the signed identity follows by positive and negative parts once absolute integrability is verified.

[F7] [[def-integrable-real-and-complex-functions-and-their-integrals]]: a real measurable function is integrable exactly when the integral of its absolute value is finite.

[F8] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous for nonnegative scalars.

[F9] [[def-moments-variance-and-covariance]]: for a square-integrable real random variable, variance is the expectation of its centered square.

## Proof

1.1 Differentiating the displayed density pointwise on its fixed support gives $\partial_{\theta_i}f_i=f_i(y-b'(\theta_i))/a$ and $\partial_{\theta_i}^2f_i=f_i\{(y-b'(\theta_i))^2/a^2-b''(\theta_i)/a\}$. The density is zero off the fixed support, so these formulas also describe the parameter derivatives there as zero. [F1, algebra]

2.1 For any sequence of nonzero $h_k\to0$ with $\theta_i+h_k\in J$, the difference quotients $(f_i(\,\cdot\,;\theta_i+h_k,\phi)-f_i(\,\cdot\,;\theta_i,\phi))/h_k$ converge pointwise almost everywhere to $\partial_{\theta_i}f_i$. The mean value theorem [F2] bounds their absolute values by the local first-derivative envelope, so [F3] passes the limit through the integral. Each quotient has integral $(1-1)/h_k=0$ by normalization and [F4]; hence $\int\partial_{\theta_i}f_i\,d\nu_i=0$. Since $2|y|\le1+y^2$, monotonicity and homogeneity [F8], normalization, linearity [F4], and the density identity [F6] give $\mathbb E|Y_i|\le\tfrac12(1+\mathbb E[Y_i^2])<\infty$. Thus $Y_i$ is integrable by [F7], so its positive and negative parts are integrable. Applying [F6] to those two parts and subtracting by [F4] and [F5] identifies $\mathbb E[Y_i]=\int y f_i\,d\nu_i$. Substituting step 1.1 into $\int\partial_{\theta_i}f_i\,d\nu_i=0$, and using normalization [F1] and linearity [F4], gives $\int y f_i\,d\nu_i=b'(\theta_i)$. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Apply the same sequential difference-quotient argument to $\partial_{\theta_i}f_i$, now using the local second-derivative envelope, to get $\int\partial_{\theta_i}^2f_i\,d\nu_i=0$. Substituting step 1.1 gives $\int (y-b'(\theta_i))^2 f_i\,d\nu_i=a\,b''(\theta_i)$. By [F6] this is $\mathbb E[(Y_i-b'(\theta_i))^2]$; by step 2.1, $b'(\theta_i)=\mathbb E[Y_i]$, so [F9] identifies the centered second moment with the variance. [F1, F2, F3, F4, F5, F6, F9, step 1.1, step 2.1, algebra] ∎
