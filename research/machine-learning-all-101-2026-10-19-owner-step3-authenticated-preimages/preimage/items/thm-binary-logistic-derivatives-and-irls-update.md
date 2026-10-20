---
id: thm-binary-logistic-derivatives-and-irls-update
kind: theorem
title: Binary logistic derivatives and the exact Newton/IRLS update
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-binary-logistic-and-multiclass-softmax-models
  - def-binary-logistic-log-likelihood-and-l1-penalty
  - thm-hessian-characterises-convexity
  - thm-least-squares-solutions-and-normal-equation
  - alg-fisher-scoring-irls
  - thm-irls-is-fisher-scoring-step
  - thm-glm-general-link-score-and-information
  - def-generalized-linear-model
  - def-glm-observation-family
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Statement

Let $n,q\ge1$ be finite, let $X\in\mathbb R^{n\times q}$ be a fixed design matrix whose first column is the intercept column of ones, and let $y\in\{0,1\}^n$. For finite $\beta\in\mathbb R^q$, put $\eta=X\beta$, $p_i=\sigma(\eta_i)$, $W=\operatorname{diag}(p_i(1-p_i))$, and $\ell(\beta)=\sum_i[y_i\eta_i-\log(1+e^{\eta_i})]$. Then
$$
\nabla\ell(\beta)=X^T(y-p),\qquad \nabla^2\ell(\beta)=-X^TWX.
$$
The diagonal entries of $W$ are positive, so $-\ell$ is convex; if $X$ has full column rank, $X^TWX$ is positive definite. In that full-rank case, the exact Newton step for maximizing the unpenalized log-likelihood is
$$
\beta_{\mathrm{new}}=\beta+(X^TWX)^{-1}X^T(y-p)=(X^TWX)^{-1}X^TWz,\qquad z=X\beta+W^{-1}(y-p).
$$
This is the Bernoulli-logit IRLS step with the weighted least-squares convention using weights $p_i(1-p_i)$. The identities describe one update and do not assert convergence of repeated updates.

## Statement references

[[def-binary-logistic-and-multiclass-softmax-models]]

[[def-binary-logistic-log-likelihood-and-l1-penalty]]

[[thm-hessian-characterises-convexity]]

[[thm-least-squares-solutions-and-normal-equation]]

[[def-generalized-linear-model]]

[[def-glm-observation-family]]

[[thm-glm-general-link-score-and-information]]

[[alg-fisher-scoring-irls]]

[[thm-irls-is-fisher-scoring-step]]

[Hastie, Tibshirani, and Friedman, ESL, §§4.4.1 and 4.4.4, equations (4.20)–(4.31)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §§2.1 and 3.2.2](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)

## Facts & Assumptions

**Given:** The finite fixed design, binary responses, finite current coefficient vector, binary conditional logistic model, and log-likelihood in the Statement.

[F1] The binary conditional model has $\Pr(Y=1\mid x)=\sigma(\beta_0+x^T\beta)$, with $0<\sigma(t)<1$ for finite $t$. [[def-binary-logistic-and-multiclass-softmax-models]]

[F2] The fixed-design log-likelihood is $\ell(\beta)=\sum_i[y_i x_i^T\beta-\log(1+e^{x_i^T\beta})]$. [[def-binary-logistic-log-likelihood-and-l1-penalty]]

[F3] A Bernoulli GLM observation family has fixed support, finite second moments, and locally integrable first- and second-derivative envelopes when those moment identities are used. [[def-glm-observation-family]]

[F4] For a canonical link, the natural parameter is the linear predictor; the GLM uses its specified common scale. [[def-generalized-linear-model]]

[F5] Under the stated GLM hypotheses, $U=X^T(\dot\mu_i(y_i-\mu_i)/(aV_i))_i$ and $I=X^T\operatorname{diag}(\dot\mu_i^2/(aV_i))X$; with positive weights and full column rank, $I$ is positive definite. [[thm-glm-general-link-score-and-information]]

[F6] The IRLS procedure uses $z_i=\eta_i+(y_i-\mu_i)/\dot\mu_i$, $w_i=\dot\mu_i^2/(aV_i)$ and returns a weighted least-squares minimizer. [[alg-fisher-scoring-irls]]

[F7] Under the stated differentiability, common-support, moment and invertible-information hypotheses, the IRLS output equals $\beta+I^{-1}U$. [[thm-irls-is-fisher-scoring-step]]

[F8] A weighted least-squares minimizer satisfies the normal equation and is unique when the weighted design has trivial kernel. [[thm-least-squares-solutions-and-normal-equation]]

[F9] A $C^2$ function on an open convex Euclidean domain is convex when its Hessian is positive semidefinite everywhere. [[thm-hessian-characterises-convexity]]

## Proof

1.1 For one observation, $\ell_i(\eta_i)=y_i\eta_i-\log(1+e^{\eta_i})$ has derivative $y_i-\sigma(\eta_i)$ and second derivative $-\sigma(\eta_i)(1-\sigma(\eta_i))$. Applying the coordinate chain rule to $\eta=X\beta$ gives $\nabla\ell=X^T(y-p)$ and $\nabla^2\ell=-\sum_i p_i(1-p_i)x_ix_i^T=-X^TWX$. [F1, F2, algebra]

1.2 Every finite $\eta_i$ gives $0<p_i<1$, so $W$ is positive diagonal and $h^TX^TWXh=\sum_i p_i(1-p_i)(x_i^Th)^2\ge0$. Therefore the Hessian of $-\ell$ is positive semidefinite on $\mathbb R^q$, an open convex domain; [F9] gives convexity. If $X$ has full column rank, $h\ne0$ implies $Xh\ne0$, so at least one squared term is nonzero and the same sum is positive. [F1, F9, algebra]

1.3 For Bernoulli data the mass is $\exp(y_i\eta_i-\log(1+e^{\eta_i}))$ on $\{0,1\}$ with counting measure, common support, $a=1$, canonical natural parameter $\theta_i=\eta_i$, $b(\theta)=\log(1+e^\theta)$, $\mu_i=p_i$, $V_i=b''(\theta_i)=p_i(1-p_i)$, and $\dot\mu_i=p_i(1-p_i)$. The response has finite second moment and bounded score; on every compact interval of finite $\eta_i$ the mass and its first two derivatives are bounded on the finite support, giving the stated local envelopes. Thus the response-family and canonical-link conditions [F3, F4] hold. [F3, F4, given, algebra]

2.1 By [F5], the score is $U=X^T(y-p)$ and the expected information is $I=X^TWX$. Full column rank makes $I$ positive definite. The observed Hessian in step 1.1 is $-I$, so the maximizing Newton formula $\beta-(\nabla^2\ell)^{-1}\nabla\ell$ equals $\beta+I^{-1}U$. The generic IRLS result [F7] gives the same $\beta+I^{-1}U$ update under these verified hypotheses. [F5, F7, step 1.1, step 1.3, algebra]

3.1 By [F6], the Bernoulli working response is $z=X\beta+W^{-1}(y-p)$ and the weights are $W$. The weighted normal equation [F8] and full rank give the unique IRLS fit $\beta_{\mathrm{new}}=(X^TWX)^{-1}X^TWz$. Expanding $z$ yields $\beta+(X^TWX)^{-1}X^T(y-p)$, the Newton step from step 2.1. [F6, F8, step 1.3, step 2.1, algebra] ∎
