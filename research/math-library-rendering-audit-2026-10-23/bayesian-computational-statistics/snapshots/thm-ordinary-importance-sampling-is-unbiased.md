---
id: thm-ordinary-importance-sampling-is-unbiased
kind: theorem
title: Ordinary importance sampling is unbiased
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - thm-integration-against-a-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - alg-importance-sampling
  - thm-change-of-variables-for-expectation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Quan Zhou, STAT 689 Unit 1: Introduction, Rejection and Importance Sampling, §1.3, Theorem 1.2"
      url: "https://zhouquan34.github.io/Sampling/STAT689_Unit1_QuanZhou.pdf"
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §§4.3.1, 4.3.3"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
    - title: "Data Science and Statistical Modelling, Chapter 5 §5.3.1, Theorem 5.3"
      url: "https://www.louisaslett.com/Courses/DSSM/notes/simulation.html"
    - title: "Tuan Anh Le, Importance Sampling, §Importance Sampling"
      url: "https://www.tuananhle.co.uk/notes/is.html"
---

## Statement

Let $(\mathsf X,\mathcal X,\mu)$ be a measure space, let $\tilde p\ge0$ and $q\ge0$ be measurable densities with $Z_p=\int\tilde p\,d\mu\in(0,\infty)$ and $\int q\,d\mu=1$, and set $\pi(dx)=\tilde p(x)\mu(dx)/Z_p$ and $Q(dx)=q(x)\mu(dx)$. Let $f:\mathsf X\to\mathbb R$ be measurable with $\int|f|\tilde p\,d\mu<\infty$. Suppose $q>0$ $\mu$-almost everywhere on $\{f\tilde p\ne0\}$ and $X_1,\ldots,X_n$ are IID with law $Q$. For the ordinary importance sampling estimator in [[alg-importance-sampling]],
$$\mathbb E_Q[\hat\mu_{\mathrm{IS}}]=\int f\,d\pi.$$

## Facts & Assumptions

**Given:** The densities, integrability, support, and IID sampling hypotheses in the Statement.

[F1] [[alg-importance-sampling]]: With $Y_i=f(X_i)\tilde p(X_i)/(Z_pq(X_i))$ when $q(X_i)>0$ and $Y_i=0$ otherwise, the estimator is $\hat\mu_{\mathrm{IS}}=n^{-1}\sum_{i=1}^nY_i$.

[F2] [[thm-change-of-variables-for-expectation]]: For a random element $X$ with law $Q$, a nonnegative measurable $g$ satisfies $\mathbb E[g(X)]=\int g\,dQ$, possibly with value $+\infty$; if $g(X)$ is integrable, the same identity holds as a finite integral.

[F3] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The Lebesgue integral is linear on integrable functions; in particular, the expectation of a finite average of integrable random variables is the average of their expectations.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: The expectation of an integrable real random variable is its finite Lebesgue integral.

[F5] [[thm-integration-against-a-density]]: for a nonnegative measurable density $r$ and nonnegative measurable $h$, $\int h\,d(r\,d\mu)=\int hr\,d\mu$, including infinite values. [[def-integrable-real-and-complex-functions-and-their-integrals]]: an absolutely integrable real function has integral equal to the finite difference of the integrals of its positive and negative parts.

## Proof

**Given:** Use the target expectation $\theta:=\int f\,d\pi$ and the estimator specified in [[alg-importance-sampling]].

1.1 Use [F5] with density $r=q$ for integration against $Q$ and with $r=\tilde p/Z_p$ for integration against $\pi$. For every $i$, apply the nonnegative case of [F2] to $|Y_i|$. Since $X_i$ has law $Q$, $\mathbb E_Q|Y_i|=\int_{\{q>0\}}\frac{|f(x)|\tilde p(x)}{Z_pq(x)}q(x)\,d\mu(x)=\frac1{Z_p}\int_{\{q>0\}}|f|\tilde p\,d\mu\le\frac1{Z_p}\int_{\mathsf X}|f|\tilde p\,d\mu<\infty.$ Thus $Y_i$ is $Q$-integrable. For any real measurable $h$ whose absolute integral is finite against $r\,d\mu$, apply [F5] separately to $h^+=\max(h,0)$ and $h^-=\max(-h,0)$: both product integrals are finite because $h^\pm\le|h|$. Subtracting their finite identities yields $\int h\,d(r\,d\mu)=\int hr\,d\mu$, since $(hr)^\pm=h^\pm r$ for $r\ge0$ (with the density convention $0\cdot\infty=0$). The integrable case of [F2] therefore gives $\mathbb E_Q[Y_i]=\int_{\{q>0\}}\frac{f(x)\tilde p(x)}{Z_pq(x)}q(x)\,d\mu(x)=\frac1{Z_p}\int_{\{q>0\}}f\tilde p\,d\mu.$ The support condition makes $f\tilde p=0$ $\mu$-almost everywhere on $\{q=0\}$; hence this last integral equals $Z_p^{-1}\int_{\mathsf X}f\tilde p\,d\mu=\int f\,d\pi=\theta$. [given, F1, F2, F4, algebra, F5]

2.1 By [F1], $\hat\mu_{\mathrm{IS}}=n^{-1}\sum_{i=1}^nY_i$. Apply [F3] and step 1.1 to obtain $\mathbb E_Q[\hat\mu_{\mathrm{IS}}]=n^{-1}\sum_{i=1}^n\mathbb E_Q[Y_i]=\theta$. [F1, F3, F4, step 1.1, algebra] ∎
