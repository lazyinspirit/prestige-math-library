---
id: lem-independent-observation-posterior-denominator-lower-bound
kind: lemma
title: "Local KL and log-square mass bounds a non-IID posterior denominator"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-independent-random-elements
  - lem-measurable-functions-preserve-independence
  - def-moments-variance-and-covariance
  - def-natural-logarithm
  - def-measure-with-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-jensens-integral-inequality
  - thm-variance-of-a-finite-sum
  - thm-factorization-of-expectations-for-independent-variables
  - cor-chebyshev-inequality-for-random-variables
proof_strategy: direct
axiom_use: "AC is used for the directional KL/Radon–Nikodym convention."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3, Theorem 4"
      url: "https://arxiv.org/pdf/0708.0491"
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3"
      url: "https://arxiv.org/pdf/0806.3024"
---

## Statement

Assume AC. For each $n$, let $Y_1,\ldots,Y_n$ be independent, with true densities $p_{i0}$ and candidate densities $p_{i\theta}$ relative to supplied sigma-finite measures $\mu_i$. Assume $(\theta,y)\mapsto p_{i\theta}(y)$ is jointly measurable and let $\Pi$ be a prior. If a measurable set $K_n$ satisfies
$$\Pi(K_n)\ge e^{-Cn\epsilon_n^2},\quad \sup_{\theta\in K_n}\frac1n\sum_{i=1}^n\mathrm{KL}(P_{i0}\Vert P_{i\theta})\le\epsilon_n^2,\quad \sup_{\theta\in K_n}\frac1n\sum_{i=1}^n E_{i0}\!\left[\log\frac{p_{i\theta}(Y_i)}{p_{i0}(Y_i)}\right]^2\le\epsilon_n^2,$$
then the denominator
$$D_n=\int\prod_{i=1}^n\frac{p_{i\theta}(Y_i)}{p_{i0}(Y_i)}\,\Pi(d\theta)$$
is finite $P_0^{(n)}$-almost surely and satisfies
$$P_0^{(n)}\{D_n\ge e^{-(C+2)n\epsilon_n^2}\}\ge1-\frac1{n\epsilon_n^2}.$$

## Facts & Assumptions

**Given:** A jointly measurable dominated independent-observation model, prior $\Pi$, the measurable local set $K_n$, and its displayed average directional KL/log-square bounds.

[A1] Assume AC for [[def-kullback-leibler-divergence]] and finite-valued density representatives.

[F1] [[def-independent-random-elements]] and [[lem-measurable-functions-preserve-independence]]: measurable functions of distinct independent observations remain independent.

[F2] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of nonnegative products of independent functions factor.

[F3] [[thm-jensens-integral-inequality]]: for a probability average, the square of the average is at most the average of the square, and the average of a logarithm is at most the logarithm of the average.

[F4] [[thm-variance-of-a-finite-sum]]: the variance of a sum of independent square-integrable variables is the sum of their variances.

[F5] [[cor-chebyshev-inequality-for-random-variables]]: if $X$ has finite variance, $\Pr(|X-EX|\ge t)\le\operatorname{Var}(X)/t^2$.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions may be integrated in either order.

## Proof

1.1 On the $P_0^{(n)}$-full set where every $p_{i0}(Y_i)$ is positive and finite, put $R_n(\theta)=\prod_i p_{i\theta}(Y_i)/p_{i0}(Y_i)$. For fixed $\theta$, independence [F1]–[F2] gives $E_0R_n(\theta)=\prod_i\int_{\{p_{i0}>0\}}p_{i\theta}\,d\mu_i\le1.$ Tonelli [F6] then gives $E_0D_n\le1$, so $D_n<\infty$ almost surely. [A1, F1, F2, F6, given]

1.2 Let $\Pi_{K_n}$ be $\Pi$ conditioned on $K_n$ and set $Z_n=\int_{K_n}\sum_i\log\frac{p_{i\theta}(Y_i)}{p_{i0}(Y_i)}\,\Pi_{K_n}(d\theta).$ The finite local second moments make these integrals square-integrable. Directional KL gives $E_0Z_n\ge-n\epsilon_n^2$. Writing $Z_n=\sum_iV_i(Y_i)$, independence [F1] and [F4] give $\operatorname{Var}_0 Z_n\le\sum_iE_0V_i(Y_i)^2$. Jensen [F3] applied to the conditional prior integral yields $E_0V_i(Y_i)^2\le\int_{K_n}E_{i0}\!\left[\log\frac{p_{i\theta}(Y_i)}{p_{i0}(Y_i)}\right]^2\Pi_{K_n}(d\theta),$ so $\operatorname{Var}_0 Z_n\le n\epsilon_n^2$. [A1, F1, F3, F4, given, algebra]

2.1 Chebyshev [F5] implies $P_0^{(n)}\{Z_n<-2n\epsilon_n^2\}\le1/(n\epsilon_n^2)$, since $E_0Z_n\ge-n\epsilon_n^2$ and $\operatorname{Var}_0Z_n\le n\epsilon_n^2$. Jensen for $\log$ gives $D_n\ge\int_{K_n}R_n(\theta)\Pi(d\theta)\ge\Pi(K_n)\exp(Z_n).$ On the complementary event, this is at least $e^{-(C+2)n\epsilon_n^2}$. Together with step 1.1 this proves the claim. [F3, F5, step 1.1, step 1.2, given, algebra] ∎
