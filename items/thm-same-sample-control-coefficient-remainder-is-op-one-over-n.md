---
id: thm-same-sample-control-coefficient-remainder-is-op-one-over-n
kind: theorem
title: Same-sample coefficient remainder is of order $O_P(n^{-1})$
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-control-variate-estimator, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-factorization-of-expectations-for-independent-variables, thm-change-of-variables-for-expectation, thm-kolmogorov-iid-l1-strong-law, cor-chebyshev-inequality-for-random-variables, cor-cauchy-schwarz-for-random-variables, lem-measurable-functions-preserve-independence, thm-arithmetic-and-lattice-operations-preserve-measurability]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.9, pp. 31–32, equations (8.33)–(8.34)
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.1.3, p. 200
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Statement

Use the notation $Pg=\int g\,dP$ from [[def-control-variate-estimator]]. Let $q\ge1$ be fixed and let $(X_i)_{i\ge1}$ be an IID sequence on $(\Omega,\mathcal F,\mathbb P)$ with law $P$. For each $n\ge1$, assume $P|f|^4<\infty$ and $P|h_j|^4<\infty$ for each $j$. Set $\theta=Ph$, define $\Sigma_{jk}=E_P[(h_j-\theta_j)(h_k-\theta_k)]$ and $c_j=E_P[(h_j-\theta_j)(f-Pf)]$, and suppose $\Sigma$ is positive definite, meaning $v^{\mathsf T}\Sigma v>0$ for every nonzero vector $v$. Put $\beta^*=\Sigma^{-1}c$. Define $\bar f_n=n^{-1}\sum_i f(X_i)$, $\bar h_n=n^{-1}\sum_i h(X_i)$,

$$\widehat\Sigma_n=\frac1n\sum_i(h(X_i)-\bar h_n)(h(X_i)-\bar h_n)^{\mathsf T},\qquad \widehat c_n=\frac1n\sum_i(h(X_i)-\bar h_n)(f(X_i)-\bar f_n).$$

and let $\widehat\beta_n=\widehat\Sigma_n^{-1}\widehat c_n$ when $\widehat\Sigma_n$ is invertible and $0$ otherwise. Define the plug-in estimator pointwise by $\widehat\mu_{\widehat\beta_n}:=\bar f_n-\widehat\beta_n^{\mathsf T}(\bar h_n-\theta)$. For a scalar random sequence $R_n$, write $R_n=O_P(n^{-1})$ when $nR_n$ is bounded in probability: for each $\varepsilon>0$ some finite $M$ and $N$ satisfy $\mathbb P(|nR_n|>M)<\varepsilon$ for all $n\ge N$. For a fixed-dimensional vector or matrix, $O_P(a_n)$ means its Euclidean or Frobenius norm divided by $a_n$ is bounded in probability. Then

$$\widehat\mu_{\widehat\beta_n}-\widehat\mu_{\beta^*}=-(\widehat\beta_n-\beta^*)^{\mathsf T}(\bar h_n-\theta)=O_P(n^{-1}).$$

This result bounds only the same-sample coefficient-times-control-mean remainder; it does not assert that $\widehat\mu_{\widehat\beta_n}$ is unbiased.

## Facts & Assumptions

**Given:** The fixed-dimensional IID sample, finite fourth moments, positive-definite population control covariance, and estimators in the Statement.

[F1] [[def-control-variate-estimator]]: For a fixed coefficient $\beta$, $\widehat\mu_\beta=\bar f_n-\beta^{\mathsf T}(\bar h_n-\theta)$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The observations are mutually independent and have the same law.

[F3] [[def-moments-variance-and-covariance]]: The stated fourth moments make the displayed means and covariance entries finite; variance is the centered second moment.

[F4] [[thm-kolmogorov-iid-l1-strong-law]]: IID real variables with finite first absolute moment have sample means converging almost surely to their expectations.

[F5] [[cor-chebyshev-inequality-for-random-variables]]: For square-integrable $Z$, $\mathbb P(|Z-EZ|\ge a)\le\operatorname{Var}(Z)/a^2$.

[F6] [[thm-factorization-of-expectations-for-independent-variables]]: Products of independent integrable real variables have factored expectations.

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation is linear on finite integrable sums.

[F8] [[cor-cauchy-schwarz-for-random-variables]]: For square-integrable variables, $E|XY|\le(E X^2)^{1/2}(E Y^2)^{1/2}$.

[F9] [[thm-change-of-variables-for-expectation]]: If $X$ has law $P$ and $g(X)$ is integrable, then $E[g(X)]=\int g\,dP$.

[F10] [[lem-measurable-functions-preserve-independence]]: Applying measurable functions separately to an independent family preserves independence.

[F11] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Finite sums and products of measurable real-valued functions are measurable.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 The entries $h_j(X_i)$, $f(X_i)$, $h_j(X_i)h_k(X_i)$, and $h_j(X_i)f(X_i)$ are measurable by [F11]. Since each $X_i$ has law $P$, applying the same measurable function to each gives a common law; [F10] preserves their mutual independence, so each resulting sequence is IID by [F2]. The fourth-moment hypothesis and [F8] make every product entry integrable, and [F9] identifies its expectation with the corresponding integral under $P$. Applying [F4] to these IID sequences gives $\bar h_n\to\theta$, $\bar f_n\to Pf$, $n^{-1}\sum_i h(X_i)h(X_i)^{\mathsf T}\to E_P[hh^{\mathsf T}]$, and $n^{-1}\sum_i h(X_i)f(X_i)\to E_P[hf]$ almost surely. The centered formulas therefore give $\widehat\Sigma_n\to\Sigma$ and $\widehat c_n\to c$ almost surely; positive definiteness of $\Sigma$ and continuity of determinant imply $\widehat\Sigma_n$ is eventually invertible almost surely. The fallback definition makes $\widehat\beta_n$ measurable: on the open nonsingular set the inverse entries are ratios of polynomial functions, and on its closed complement the value is constant. [F2, F3, F4, F8, F9, F10, F11, given, algebra]

1.2 Put $W_i=h(X_i)-\theta$ and $V_i=f(X_i)-Pf$. The finite fourth-moment assumptions imply finite fourth moments for every component of $W_i$ and for $V_i$; for example, $|x-a|^4\le8(|x|^4+|a|^4)$. Then [F8] gives finite second moments for every product $W_{ij}W_{ik}$ and $W_{ij}V_i$. Each centered coordinate and product is a fixed measurable function of $X_i$, so [F2] and [F10] make each sequence IID. By [F9] and [F7], $E W_i=0$, $E V_i=0$, and the product means are $\Sigma$ and $c$. Independence and [F6] give variance equal to the one-observation variance divided by $n$ for each sample average. Applying [F5] with $a=M/\sqrt n$ and taking a finite union over the fixed $q$ coordinates and matrix entries proves $\bar h_n-\theta=O_P(n^{-1/2})$, $\bar f_n-Pf=O_P(n^{-1/2})$, $n^{-1}\sum_iW_iW_i^{\mathsf T}-\Sigma=O_P(n^{-1/2})$, and $n^{-1}\sum_iW_iV_i-c=O_P(n^{-1/2})$. The identities $$\widehat\Sigma_n=\frac1n\sum_iW_iW_i^{\mathsf T}-(\bar h_n-\theta)(\bar h_n-\theta)^{\mathsf T},\qquad \widehat c_n=\frac1n\sum_iW_iV_i-(\bar h_n-\theta)(\bar f_n-Pf)$$ show that the centering corrections are $O_P(n^{-1})$. Thus $\widehat\Sigma_n-\Sigma$ and $\widehat c_n-c$ are jointly $O_P(n^{-1/2})$. [F2, F3, F5, F6, F7, F8, F9, F10, algebra]

2.1 On the event that $\widehat\Sigma_n$ is invertible, $\widehat\beta_n-\beta^*=\widehat\Sigma_n^{-1}[(\widehat c_n-c)-(\widehat\Sigma_n-\Sigma)\beta^*]$, since $c=\Sigma\beta^*$. Step 1.1 and the adjugate-over-determinant formula show that the inverse converges to $\Sigma^{-1}$ almost surely on the eventually nonsingular set; extending it by zero on the singular event gives an $O_P(1)$ matrix sequence. Given $\varepsilon>0$, choose bounds for this inverse norm and for the bracket in step 1.2 after scaling by $\sqrt n$, with total failure probability less than $\varepsilon/2$. On their intersection the product is bounded after scaling by $\sqrt n$, so $\widehat\beta_n-\beta^*=O_P(n^{-1/2})$ there. The singular-event probability tends to zero by step 1.1; the fallback value $0$ therefore does not change this order in probability. [step 1.1, step 1.2, algebra]

3.1 By the plug-in definition in the Statement and [F1] for the fixed coefficient $\beta^*$, subtracting the two estimators cancels $\bar f_n$ and leaves exactly $-(\widehat\beta_n-\beta^*)^{\mathsf T}(\bar h_n-\theta)$. Given $\varepsilon>0$, choose finite bounds for each factor after scaling by $\sqrt n$ so that the probability either bound fails is less than $\varepsilon/2$; on their intersection, Cauchy--Schwarz in $\mathbb R^q$ bounds $n$ times the absolute inner product by the product of those bounds. Thus the inner product is $O_P(n^{-1})$ by definition. [F1, given, step 1.2, step 2.1, algebra] ∎
