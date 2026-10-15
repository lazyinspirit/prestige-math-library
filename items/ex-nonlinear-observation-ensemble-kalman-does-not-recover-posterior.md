---
id: ex-nonlinear-observation-ensemble-kalman-does-not-recover-posterior
kind: example
title: A nonlinear observation makes a symmetric two-member EnKF miss posterior spread
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-ensemble-kalman-filter
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - thm-bayes-formula-for-dominated-kernels
  - thm-nondegenerate-multivariate-normal-law-has-density
proof_strategy: direct
generation:
  role: example
axiom_use: Assume AC for the cited Gaussian laws and densities; the finite covariance calculation uses no additional choice.
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 8"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Example

Let the scalar prior be $X\sim N(0,1)$ and observe $Y=X^2+\epsilon$ with independent $\epsilon\sim N(0,\gamma)$, $\gamma>0$, at datum $y=0$. Use the finite EnKF forecast ensemble $x^1=-1,x^2=1$, identity forecast, and observation map $G(x)=x^2$. The perturbed-observation EnKF update leaves this ensemble unchanged, while the exact posterior has variance strictly below $1$.

## Facts & Assumptions

**Given:** AC, the scalar Gaussian prior and error model, $y=0$, and the forecast ensemble and observation map in the Example.

[A1] AC is assumed for the Gaussian law construction and density results. [[def-axiom-of-choice]]

[F1] The standard normal law has the strictly positive density $(2\pi)^{-1/2}e^{-x^2/2}$. [[def-standard-normal-and-normal-laws]]

[F2] $N(0,1)$ has mean zero and variance one. [[def-multivariate-normal-law]]

[F3] A nondegenerate multivariate normal has the Gaussian Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F4] Bayes' formula gives the posterior density proportional to prior density times likelihood when the marginal density is finite and positive. [[thm-bayes-formula-for-dominated-kernels]]

[F5] The EnKF gain uses the empirical state/observation cross-covariance and each member is updated by its own perturbed observation. [[alg-ensemble-kalman-filter]]

## Verification

**Given:** The hypotheses in the Example.

1.1 The predicted observations of both ensemble members equal $1$, so their empirical observation variance is $0$. Their empirical state-observation cross-covariance is also $0$, because the observation deviations are both zero. By [F5] and $\gamma>0$, the gain is zero; the update is therefore $x^{a,1}=-1$, $x^{a,2}=1$ for every perturbation realization. The updated empirical variance remains $1$. [F5, given, algebra]

2.1 By [A1], [F1], and [F3], the prior and Gaussian likelihood have densities. The likelihood is positive and bounded, so its prior integral is finite and positive; Bayes' formula [F4] makes the posterior density proportional to the even function $e^{-x^2/2}w(x^2)$, where $w(t)=e^{-t^2/(2\gamma)}$. The posterior mean is therefore zero by symmetry. Put $T=X^2$. Since $\mathbb ET=1$ by [F2], $\mathbb E[(T-1)w(T)]=\mathbb E[(T-1)(w(T)-w(1))]<0.$ The equality uses $\mathbb E(T-1)=0$. The inequality holds because $w$ is strictly decreasing on $[0,\infty)$, so the integrand is negative whenever $T\ne1$; the standard normal density gives $\mathbb P(T=1)=0$. The integrand is integrable since $0<w\le1$ and $\mathbb ET<\infty$. Thus the posterior variance is $\operatorname{Var}(X\mid Y=0)=\frac{\mathbb E[T w(T)]}{\mathbb E[w(T)]}<1.$ The finite EnKF ensemble variance from step 1.1 is $1$, so this admissible nonlinear finite-ensemble update does not equal the exact posterior law. [A1, F1, F2, F3, F4, given, step 1.1, algebra] ∎
