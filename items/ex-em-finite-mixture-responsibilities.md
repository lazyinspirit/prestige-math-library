---
id: ex-em-finite-mixture-responsibilities
kind: example
title: "Responsibilities in a two-component mixture"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-expectation-maximization
  - def-latent-variable-joint-and-observed-data-factorization
  - thm-bayes-formula-for-dominated-kernels
  - thm-conditional-density-formula
  - thm-observed-density-is-latent-marginal-under-tonelli
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§1 and §2, complete-data marginalization and E-step, printed pp. 1–7"
    - title: "MIT OpenCourseWare, 18.655 Mathematical Statistics, Lecture 10: Methods of Estimation II (Spring 2016)"
      url: "https://live.ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/0049f07ae6b39d4a3fe02f6a4d8a3031_MIT18_655S16_LecNote10.pdf"
      locator: "Finite-mixture latent indicators, posterior responsibilities, and Q function, lecture pp. 38–42 (PDF pp. 37–41)"
---

## Example

Let $\mathsf X=\mathbb R$ with its Borel sigma-algebra and Lebesgue measure, and let latent labels $\mathsf Z=\{1,2\}$ have the power-set sigma-algebra and counting measure. Set $f_1(x)=2\mathbf1_{[0,1/2]}(x)$ and $f_2(x)=\mathbf1_{[0,1]}(x)$; both are probability densities. For mixture weights $\pi=(1/3,2/3)$, define the complete-data density $p_\pi(x,j)=\pi_j f_j(x)$. At the observation $x=1/4$, the observed density is $4/3$ and the conditional latent-label probabilities are $(1/2,1/2)$. For any positive candidate weights $\lambda=(\lambda_1,\lambda_2)$, the EM auxiliary function is the responsibility-weighted complete-data log density.

## Facts & Assumptions

**Given:** The two component densities, current weights $\pi=(1/3,2/3)$, observation $x=1/4$, and a candidate weight vector $\lambda$ with positive coordinates summing to one.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: a jointly measurable complete-data density is normalized over observation and latent coordinates; its observed marginal is the latent-coordinate integral.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: the observed density is that integral, and its positive finite fibers normalize the quotient to a latent probability density.

[F3] [[thm-bayes-formula-for-dominated-kernels]]: for a proper latent prior and a jointly measurable dominated sampling density, the posterior on a positive finite evidence fiber is prior times likelihood divided by the marginal evidence.

[F4] [[thm-conditional-density-formula]]: the normalized quotient on a positive finite fiber is a conditional distribution of the latent coordinate given the observation.

[F5] [[alg-expectation-maximization]]: $Q(\lambda\mid\pi)$ is the current conditional expectation of $\log p_\lambda(x,Z)$; this E-step formula is choice-free, and AC is used only by the KL-based candidate test.

## Verification

1.1 Each $f_j$ integrates to one, so $p_\pi$ is a probability density on $\mathsf X\times\mathsf Z$ because $\sum_j\pi_j=1$. At $x=1/4$, $f_1(x)=2$ and $f_2(x)=1$, hence the observed density is $m_\pi(x)=\sum_j\pi_jf_j(x)=4/3$. [given, F1, F2, algebra]

2.1 The latent conditional weights are $q_\pi(j\mid x)=\pi_jf_j(x)/m_\pi(x)$ by [F2] and [F3], giving $q_\pi(1\mid x)=(2/3)/(4/3)=1/2$ and $q_\pi(2\mid x)=(2/3)/(4/3)=1/2$. [given, F2, F3, step 1.1, algebra]

3.1 Using this conditional law in the definition [F5] yields $Q(\lambda\mid\pi)=\frac12\log(2\lambda_1)+\frac12\log(\lambda_2)$. The two coefficients are exactly the current responsibilities, so this is the complete-data log density averaged over the latent label. By [F4], these weights are also the conditional probabilities for the observation fiber. [given, F4, F5, step 2.1, algebra] ∎
