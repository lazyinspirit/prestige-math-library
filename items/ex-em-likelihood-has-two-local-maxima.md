---
id: ex-em-likelihood-has-two-local-maxima
kind: example
title: "An EM likelihood with two strict local maxima"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - alg-expectation-maximization
  - def-axiom-of-choice
  - def-latent-variable-joint-and-observed-data-factorization
  - rem-em-ascent-does-not-imply-global-optimality-or-convergence
  - thm-em-observed-log-likelihood-is-nondecreasing
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
      locator: "§3 and discussion of multiple likelihood solutions, printed pp. 7–9 and 30–31"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§§2–3, multimodality and separate convergence conditions, PDF pp. 2–6"
---

## Example

Let $\Theta=[-2,2]$ with its Borel sigma-algebra, and let $X=Z=\{0,1\}$ with the power-set sigma-algebra and counting measure. Set
$$r(\theta)=\frac12-\frac{(\theta^2-1)^2}{36},\qquad p_\theta(x,z)=r(\theta)^x(1-r(\theta))^{1-x}\frac12.$$
For the observed value $x=1$, the likelihood has strict local maxima at $\theta=-1$ and $\theta=1$, and both points are global maximizers. Starting at $\theta_0=-1$, the exact Q maximizer set at either point contains both points. The fixed selector $\theta_{t+1}=-\theta_t$ therefore produces the infinite sequence $\theta_t=(-1)^{t+1}$, which does not converge.

## Facts & Assumptions

**Given:** AC, the displayed finite latent model and the fixed observation $x=1$.

[A1] [[def-axiom-of-choice]]: AC is required by the cited observed-likelihood ascent theorem used to contextualize the example.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: a complete-data density is normalized on each parameter fiber.

[F2] [[thm-observed-density-is-latent-marginal-under-tonelli]]: the observed density is the latent marginal, and its positive finite fibers define normalized latent conditional densities.

[F3] [[alg-expectation-maximization]]: exact mode selects an attained Q maximizer over an admissible set containing the current iterate.

[F4] [[thm-em-observed-log-likelihood-is-nondecreasing]]: every admissible exact update with nondecreasing Q does not decrease the observed log likelihood.

[F5] [[rem-em-ascent-does-not-imply-global-optimality-or-convergence]]: the ascent theorem supplies no unique-mode or parameter-convergence conclusion.

## Verification

1.1 Since $0\le(\theta^2-1)^2\le9$ on $[-2,2]$, $1/4\le r(\theta)\le1/2$. Thus $p_\theta$ is nonnegative and sums to one over $(x,z)\in\{0,1\}^2$ for every $\theta$. The observed density at $x=1$ is $m_\theta(1)=r(\theta)$. [given, F1, F2, algebra]

2.1 The squared term $(\theta^2-1)^2$ vanishes exactly at $\theta=\pm1$ and is positive elsewhere. Therefore $r(\theta)$, and hence the observed likelihood and log likelihood, have strict local maxima at those two distinct parameter values; both are global maximizers with equal value, so neither is a strict global maximum. [given, step 1.1, algebra]

3.1 For every current value $\theta_t=\pm1$, the latent conditional law is uniform on $Z$. For any candidate $\theta$, $Q(\theta\mid\theta_t)=\log r(\theta)-\log2$, so its exact maximizer set is again $\{-1,1\}$. Starting from $\theta_0=-1$, choosing $\theta_{t+1}=-\theta_t$ at each step is an attained exact M-step; all fibers have positive finite marginals and identical latent support, with finite Q and KL. The algorithm therefore emits the infinite alternating sequence, which has no limit while its log likelihood is constant. This verifies the limitation described in [F5] without contradicting the one-step ascent result [F4]. [given, A1, F3, F4, F5, step 1.1, algebra] ∎
