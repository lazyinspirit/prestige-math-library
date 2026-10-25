---
id: thm-glm-general-link-score-and-information
kind: theorem
title: General-link score and Fisher information
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-generalized-linear-model
  - def-glm-observation-family
  - lem-glm-product-density
  - lem-glm-mean-and-variance-identities
  - thm-chain-rule
  - thm-factorization-of-expectations-for-independent-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-glm-general-link-score-and-information.json
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 43–48"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 4–5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

Consider Generalized linear model with explicit conditioning at an admissible finite $\beta$ with common scale $a(\phi)>0$. Assume each $\eta_i\mapsto\theta_i$ is differentiable, each $\eta_i\mapsto\mu_i$ is differentiable with $\dot\mu_i:=d\mu_i/d\eta_i\ne0$, $V_i:=b''(\theta_i)>0$, the component scores have finite second moments, and the common-support, differentiability, and local integrable derivative-envelope conditions from Explicit exponential-family response contracts hold. Put

$$w_i=\frac{\dot\mu_i^2}{a(\phi)V_i},\qquad z_i=\eta_i+\frac{y_i-\mu_i}{\dot\mu_i}.$$

For every observed $y$ with $f_i(y_i;\theta_i,\phi)>0$ for each $i$, the score and expected score outer-product information are

$$U(\beta;y,\phi)=X^\mathsf T\left(\frac{\dot\mu_i(y_i-\mu_i)}{a(\phi)V_i}\right)_{i=1}^n,\qquad I(\beta,\phi)=X^\mathsf T\operatorname{diag}(w_i)X.$$

In particular, if $X$ has full column rank, then $I$ is positive definite.

## Statement references

[[def-generalized-linear-model]]

[[def-glm-observation-family]]

## Facts & Assumptions

**Given:** The finite independent-response GLM, common scale, differentiable link and component natural-parameter maps, an observed response vector with positive component densities, fixed common support, local derivative envelopes, and finite second moments in the Statement.

[F1] [[def-generalized-linear-model]]: $\mu_i=g^{-1}(\eta_i)$, $\eta_i=x_i^\mathsf T\beta$, the score is the gradient of the product log likelihood, and $I=\mathbb E[UU^\mathsf T]$ when finite.

[F2] [[def-glm-observation-family]]: the component responses are independent, have the displayed common-support response densities, and use the stated product sampling law.

[F3] [[lem-glm-mean-and-variance-identities]]: $\mathbb E[Y_i]=\mu_i$ and $\operatorname{Var}(Y_i)=a(\phi)V_i$ under the common-scale restriction.

[F4] [[thm-chain-rule]]: differentiating a composition multiplies the outer and inner derivatives under its stated hypotheses.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: for independent real random variables, expectations of products of integrable measurable coordinate functions factor.

## Proof

1.1 Differentiate $\mu_i=b'(\theta_i)$ with respect to $\eta_i$. The chain rule [F4] gives $\dot\mu_i=V_i\,d\theta_i/d\eta_i$, so $d\theta_i/d\eta_i=\dot\mu_i/V_i$. Differentiating the component log density $(y_i\theta_i-b(\theta_i))/a(\phi)+c_i(y_i,\phi)$ therefore gives the scalar score $s_i=\dot\mu_i(y_i-\mu_i)/(a(\phi)V_i)$. Since $\eta_i=x_i^\mathsf T\beta$, the full score is $U=\sum_i x_i s_i=X^\mathsf T(s_i)_{i=1}^n$. [F1, F3, F4, algebra]

2.1 By [F3], $\mathbb E[s_i]=0$ and $\mathbb E[s_i^2]=\dot\mu_i^2/(a(\phi)V_i)=w_i$. These second moments are finite by the hypotheses, and $|s_i|\le(1+s_i^2)/2$ makes each $s_i$ integrable. For $i\ne j$, independence and [F5] give $\mathbb E[s_is_j]=\mathbb E[s_i]\mathbb E[s_j]=0$. Expanding $\mathbb E[UU^\mathsf T]$ now leaves only $\sum_i x_ix_i^\mathsf T w_i=X^\mathsf T\operatorname{diag}(w_i)X$. If $v\ne0$ and $X$ has full column rank, then $Xv\ne0$ and $\sum_iw_i(x_i^\mathsf Tv)^2>0$ because each $w_i>0$, proving positive definiteness. [F1, F2, F3, F5, step 1.1, algebra] ∎
