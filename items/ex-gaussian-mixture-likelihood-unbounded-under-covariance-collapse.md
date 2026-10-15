---
id: ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse
kind: example
title: "Gaussian mixture likelihood is unbounded under covariance collapse"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - def-latent-variable-joint-and-observed-data-factorization
  - lem-normal-location-scale-density
  - rem-em-ascent-does-not-imply-global-optimality-or-convergence
  - thm-em-observed-log-likelihood-is-nondecreasing
  - thm-observed-density-is-latent-marginal-under-tonelli
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "AC is used through the positive-variance normal location-scale density supplier, which forms its normal law from the standard-normal law and applies the change-of-variables theorem."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§6.2, two-component Gaussian-mixture likelihood and unboundedness under variance collapse, PDF pp. 27–29"
---

## Example

Assume AC. Use $\Theta=(0,\infty)$ with its Borel sigma-algebra as the scale parameter space, with $\epsilon$ the first component's standard deviation; let $\mathsf X=\mathbb R$ with its Borel sigma-algebra and Lebesgue measure, and let latent labels $\mathsf Z=\{1,2\}$ have the power-set sigma-algebra and counting measure. Let $\varphi_{\mu,\sigma}(y)=(\sqrt{2\pi}\,\sigma)^{-1}\exp(-(y-\mu)^2/(2\sigma^2))$ for $\sigma>0$, the density of $N(\mu,\sigma^2)$ from [[lem-normal-location-scale-density]]. Put $a_1=0$, $s_1=\epsilon$, $a_2=1$, and $s_2=1$. For two independent observations and their two latent labels, use the complete-data density relative to Lebesgue measure on $\mathbb R^2$ and counting measure on $\{1,2\}^2$:
$$p_\epsilon(y_1,y_2,z_1,z_2)=\prod_{i=1}^2\frac12\varphi_{a_{z_i},s_{z_i}}(y_i).$$
Its one-observation marginal is the two-component mixture
$$g_\epsilon(y)=\frac12\varphi_{0,\epsilon}(y)+\frac12\varphi_{1,1}(y),\qquad \epsilon>0.$$
For observations $(0,1)$ the likelihood is $L_\epsilon=g_\epsilon(0)g_\epsilon(1)$. The Gaussian components are proper for every positive $\epsilon$, but $L_\epsilon\to\infty$ as $\epsilon\downarrow0$, so this observed likelihood has no finite global maximizer.

## Facts & Assumptions

**Given:** AC, the displayed Gaussian densities, mixture weights $1/2$, observations $(0,1)$, the two-label product model above, and the parameter $\epsilon>0$.

[A1] [[def-axiom-of-choice]]: AC is the hypothesis of the positive-variance normal location-scale density result used below.

[F1] [[lem-normal-location-scale-density]]: under AC, $N(m,\sigma^2)$ has Lebesgue density $(\sqrt{2\pi}\,\sigma)^{-1}e^{-(y-m)^2/(2\sigma^2)}$ for every $m\in\mathbb R$ and $\sigma>0$.

[F2] [[def-latent-variable-joint-and-observed-data-factorization]]: a complete-data density must be jointly measurable and normalized on each parameter fibre; its observed marginal is obtained by integrating over the latent coordinate.

[F3] [[thm-em-observed-log-likelihood-is-nondecreasing]]: the proved EM conclusion is a one-step nondecrease on admissible fibers and does not assert existence of a global likelihood maximum.

[F4] [[rem-em-ascent-does-not-imply-global-optimality-or-convergence]]: likelihood ascent alone supplies no global-optimality or convergence theorem.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for a nonnegative product-measurable function on sigma-finite measure spaces, the product integral equals either iterated integral.

## Verification

1.1 For each fixed label pair the displayed density is continuous in $(\epsilon,y_1,y_2)$ on $(0,\infty)\times\mathbb R^2$; the finite label space therefore makes it jointly measurable. For each observation coordinate, $\sum_{j=1}^2\int_{\mathbb R}\frac12\varphi_{a_j,s_j}(y)\,dy=1$ by [F1]. Lebesgue measure and finite counting measure are sigma-finite, so Tonelli [F5] gives integral $1\cdot1=1$ for the nonnegative two-coordinate product density. This verifies the requirements of [F2] directly. Summing over the two labels in each coordinate gives the observed joint density $g_\epsilon(y_1)g_\epsilon(y_2)$, so its value at $(0,1)$ is $L_\epsilon$. [given, A1, F1, F2, F5, algebra]

2.1 At the two observations, $g_\epsilon(0)\ge\frac{1}{2\sqrt{2\pi}\,\epsilon}$ and $g_\epsilon(1)\ge\frac{1}{2\sqrt{2\pi}}$. Thus $L_\epsilon\ge1/(8\pi\epsilon)$. For every $M>0$, choosing $0<\epsilon<1/(8\pi M)$ gives $L_\epsilon>M$, so the likelihood is unbounded while each fixed-$\epsilon$ value is finite. No finite parameter attains a global maximum. [given, step 1.1, algebra]

3.1 This is compatible with [F3]–[F4]: the ascent theorem only compares consecutive admissible iterates; it neither bounds the likelihood sequence nor supplies a parameter attaining its unbounded supremum. [F3, F4, step 2.1] ∎
