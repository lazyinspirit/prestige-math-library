---
id: ex-em-support-losing-candidate-violates-finite-kl-condition
kind: example
title: "A support-losing candidate has infinite directional KL"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-expectation-maximization
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
      locator: "§3, support and conditional-density terms in Lemma 1 and Theorem 1, printed pp. 6–8"
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, conditional-density KL expression, PDF pp. 3–5"
---

## Example

Let $\Theta=[0,1]$ with its Borel sigma-algebra, let the observation space be the singleton $\{x_0\}$ with counting measure, and let the latent space be $\{0,1\}$ with counting measure. Set $p_\theta(x_0,1)=\theta$ and $p_\theta(x_0,0)=1-\theta$. At current value $\theta_t=1/2$, the latent law is $(1/2,1/2)$; candidate $\theta=0$ has latent law $(1,0)$. The observed marginal is one at both parameters, but the current-to-candidate KL divergence is infinite. The extended diagnostic integral of $\log p_0(x_0,Z)$ under the current latent law is $-\infty$ when $\log0=-\infty$; the algorithm's $Q(0\mid1/2)$ is undefined because its Definition assigns $Q$ only when the integral is finite.

## Facts & Assumptions

**Given:** The displayed finite complete-data model, fixed observation $x_0$, current value $\theta_t=1/2$, candidate value $\theta=0$, and the convention $\log0=-\infty$.

[F1] [[def-latent-variable-joint-and-observed-data-factorization]]: a complete-data density is normalized over the observation and latent coordinates for every parameter.

[F2] [[def-kullback-leibler-divergence]]: if the first probability is not absolutely continuous with respect to the second, the directional divergence is $+\infty$; this branch uses no Radon–Nikodym representative or Axiom of Choice.

[F3] [[alg-expectation-maximization]]: Q is defined only when its integral is finite; admissibility requires finite directional KL and integrability of the candidate log density, and the $q_t\not\ll q_\theta$ rejection branch is choice-free while the $q_t\ll q_\theta$ finite-KL branch assumes AC.

## Verification

1.1 For each $\theta\in[0,1]$, the complete-data masses sum to $\theta+(1-\theta)=1$, and the observed marginal is $m_\theta(x_0)=1$. The current and candidate latent laws are therefore $q_t=(1/2,1/2)$ and $q_0=(1,0)$. [given, F1, algebra]

2.1 The singleton set $\{1\}$ has $q_0$-mass zero and $q_t$-mass $1/2$, so $q_t\not\ll q_0$ and $D(q_t\|q_0)=+\infty$ by [F2]. The extended diagnostic integral is $\frac12\log(1-0)+\frac12\log0=-\infty$; it is not a finite value of $Q(0\mid1/2)$ under [F3]. [given, F2, F3, step 1.1, algebra]

3.1 The observed log likelihood is zero at both parameters, but the candidate violates the support-compatible admissibility condition of [F3]. It is not an update allowed by the defined procedure. [F3, step 2.1] ∎
