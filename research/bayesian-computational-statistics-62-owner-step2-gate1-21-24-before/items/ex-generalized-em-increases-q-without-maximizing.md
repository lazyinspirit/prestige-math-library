---
id: ex-generalized-em-increases-q-without-maximizing
kind: example
title: "A generalized EM step can increase Q without maximizing it"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-latent-variable-joint-and-observed-data-factorization
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
sources:
  references:
    - title: "A. P. Dempster, N. M. Laird and D. B. Rubin, Maximum likelihood from incomplete data via the EM algorithm"
      url: "https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf"
      locator: "§3, generalized EM definition and Theorem 1, printed pp. 7–8"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, generalized EM discussion, PDF pp. 4–5"
---

## Example

Let $\Theta=(0,1)$ with its Borel sigma-algebra, and let $X=Z=\{0,1\}$ with the power-set sigma-algebra and counting measure. Under parameter $\theta$, take $X,Z$ independent Bernoulli$(\theta)$ variables, so $p_\theta(x,z)=\theta^{x+z}(1-\theta)^{2-x-z}$. Observe $x=1$ at current value $\theta_t=1/2$. The candidate $\theta=7/10$ strictly increases $Q$ but is not its exact maximizer; the observed log likelihood also increases.

## Facts & Assumptions

**Given:** AC for the finite-KL admissibility branch, the displayed two-coordinate Bernoulli model, observation $x=1$, current parameter $\theta_t=1/2$, and candidate $\theta=7/10$.

[A1] [[def-axiom-of-choice]]: AC supplies the Radon–Nikodym branch needed to evaluate finite KL when the current law is absolutely continuous with respect to the candidate law.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: each parameter fiber of a complete-data density integrates to one over observed and latent coordinates.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: integrating out the latent coordinate gives the observed-data density, and positive finite fibers yield a normalized conditional density.

[F3] [[def-kullback-leibler-divergence]]: under AC, $D(P\|Q)$ is directional and uses the Radon–Nikodym derivative when $P\ll Q$.

[F4] [[alg-expectation-maximization]]: $Q(\theta\mid\theta_t)$ averages the complete-data log density under the current latent law; exact mode selects an attained maximizer over an admissible candidate set containing the current iterate.

## Verification

1.1 For every $\theta\in(0,1)$, summing $p_\theta(x,z)$ over $(x,z)\in\{0,1\}^2$ gives $(\theta+(1-\theta))^2=1$. At $x=1$, $m_\theta(1)=\theta$ and the conditional law of $Z$ is Bernoulli$(\theta)$, so the current law is Bernoulli$(1/2)$. Every candidate has positive finite marginal, the same two-point latent support, and $D(q_t\|q_\theta)=\frac12\log(1/(2\theta))+\frac12\log(1/(2(1-\theta)))$ is finite by [A1, F3]. Their complete-data log values are finite, so every $\theta\in(0,1)$ is admissible by [F4]. [given, A1, F1, F2, F3, F4, algebra]

2.1 Averaging $\log p_\theta(1,Z)$ under that current conditional law gives $Q(\theta\mid1/2)=\frac32\log\theta+\frac12\log(1-\theta)=\frac12\log\bigl(\theta^3(1-\theta)\bigr)$. At $\theta=1/2$, this is $\log(1/4)$; at $\theta=7/10$, it is $\frac12\log(1029/10000)$. Their difference is $\frac12\log(1029/625)>0$, so the candidate strictly raises $Q$. [given, F2, step 1.1, algebra]

3.1 For $0<\theta<1$, $\frac{27}{256}-\theta^3(1-\theta)=(\theta-3/4)^2\bigl((\theta+1/4)^2+1/8\bigr)\ge0$, with equality only at $\theta=3/4$. Thus the exact maximizer of $Q$ is $3/4$, so $7/10$ is a genuinely nonmaximizing generalized step. The observed log-likelihood difference is $\log(7/10)-\log(1/2)=\log(7/5)>0$. [given, F4, step 2.1, algebra] ∎
