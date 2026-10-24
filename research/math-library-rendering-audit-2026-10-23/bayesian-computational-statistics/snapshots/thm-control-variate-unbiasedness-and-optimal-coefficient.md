---
id: thm-control-variate-unbiasedness-and-optimal-coefficient
kind: theorem
title: Unbiasedness and optimal coefficients for fixed controls
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-control-variate-estimator, def-identically-distributed-and-iid-random-variables, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, lem-measurable-functions-preserve-independence, thm-factorization-of-expectations-for-independent-variables, thm-change-of-variables-for-expectation, thm-covariance-bilinearity-and-symmetry]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.9, pp. 28–32
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.1, pp. 185–200
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
    - title: Jonathan Goodman, Lecture Notes on Monte Carlo Methods, Chapter 3, §2, pp. 1–3
      url: https://math.nyu.edu/faculty/goodman/teaching/MonteCarlo07/notes/VarianceReduction.pdf
---

## Statement

Let $n\ge1$, assume $P f^2<\infty$ and $P h_j^2<\infty$ for each component, and set $\mu=Pf$, $\theta=Ph$. Define the vector covariance matrix and cross-covariance vector by $\Sigma_{jk}=E_P[(h_j-\theta_j)(h_k-\theta_k)]$ and $c_j=E_P[(h_j-\theta_j)(f-\mu)]$. A matrix $\Sigma$ is positive definite when $v^{\mathsf T}\Sigma v>0$ for every nonzero $v$. For an IID sample $X_1,\ldots,X_n\sim P$ and a fixed $\beta\in\mathbb R^q$, the estimator in [[def-control-variate-estimator]] is unbiased and

$$\operatorname{Var}(\widehat\mu_\beta)=\frac1n\operatorname{Var}_P\bigl(f-\beta^{\mathsf T}h\bigr).$$

If $\Sigma$ is positive definite, the unique variance-minimizing vector coefficient and the minimum variance are

$$\beta^*=\Sigma^{-1}c,\qquad \operatorname{Var}(\widehat\mu_{\beta^*})=\frac1n\left(\operatorname{Var}_P(f)-c^{\mathsf T}\Sigma^{-1}c\right).$$

For a scalar control with $\operatorname{Var}_P(h)>0$, this reads $\beta^*=\operatorname{Cov}_P(f,h)/\operatorname{Var}_P(h)$. If controls are redundant, delete redundant directions or use the theorem only on a positive-definite covariance subspace; no inverse is asserted for a singular $\Sigma$.

## Facts & Assumptions

**Given:** The measurable functions, probability law, known control mean, IID sample, fixed coefficient, and second-moment hypotheses in the Statement.

[F1] [[def-control-variate-estimator]]: The estimator averages $f(X_i)-\beta^{\mathsf T}(h(X_i)-\theta)$, with $\theta=Ph$ known.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means identical law and mutual independence; no moments are implicit.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation of an integrable finite linear combination is the same linear combination of expectations.

[F4] [[lem-measurable-functions-preserve-independence]]: Applying the same measurable function coordinatewise to an independent family preserves independence.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: For independent integrable real variables, expectation of their product is the product of expectations.

[F6] [[thm-change-of-variables-for-expectation]]: If $X$ has law $P$ and $g(X)$ is integrable, then $E[g(X)]=\int g\,dP$.

[F7] [[def-moments-variance-and-covariance]]: Variance is $E[(Y-EY)^2]$ and covariance is $E[(Y-EY)(Z-EZ)]$ for square-integrable real variables.

[F8] [[thm-covariance-bilinearity-and-symmetry]]: Covariance is symmetric and bilinear on finite linear combinations of square-integrable variables.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For $Z_i=f(X_i)-\beta^{\mathsf T}(h(X_i)-\theta)$, the expectation convention [F6] and linearity [F3] give $E Z_i=Pf-\beta^{\mathsf T}(Ph-\theta)=\mu$. Thus $E\widehat\mu_\beta=\mu$. [F1, F3, F6]

1.2 The $Z_i$ are the same measurable function of the IID variables $X_i$, so [F2] and [F4] make them IID. [F2, F4]

1.3 By [F7]–[F8], the variance as a function of $\beta$ is $\operatorname{Var}_P(f)-2\beta^{\mathsf T}c+\beta^{\mathsf T}\Sigma\beta$. [F7, F8]

2.1 Expanding the centered square of $n^{-1}\sum_i Z_i$, the diagonal terms contribute $n^{-2}n\operatorname{Var}(Z_1)$. For $i\ne j$, $Z_i-EZ_i$ and $Z_j-EZ_j$ are independent integrable variables, so [F5] factors their product expectation into zero. Hence $\operatorname{Var}(\widehat\mu_\beta)=n^{-1}\operatorname{Var}(Z_1)=n^{-1}\operatorname{Var}_P(f-\beta^{\mathsf T}h)$. [F5, F7, step 1.2, algebra]

3.1 If $\Sigma$ is positive definite, substituting $c=\Sigma\beta^*$ and completing the square gives $\operatorname{Var}_P(f)-c^{\mathsf T}\Sigma^{-1}c+(\beta-\beta^*)^{\mathsf T}\Sigma(\beta-\beta^*)$. The last term is nonnegative and vanishes only at $\beta=\beta^*$; for $q=1$ the displayed scalar formula follows. [step 1.3, algebra] ∎
