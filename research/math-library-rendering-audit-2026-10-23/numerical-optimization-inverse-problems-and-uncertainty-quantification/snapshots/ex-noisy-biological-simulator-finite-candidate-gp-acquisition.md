---
id: ex-noisy-biological-simulator-finite-candidate-gp-acquisition
kind: example
title: A noisy biological simulator search is conditional on its chosen Gaussian-process model
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound-examples
dependency_level: 3
deps: [alg-finite-candidate-gp-acquisition-search, thm-adaptive-finite-candidate-gp-search-posterior-correct, thm-finite-gaussian-process-posterior-and-predictive-laws]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Peter I. Frazier, A Tutorial on Bayesian Optimization, §§2–5"
      url: "https://arxiv.org/pdf/1807.02811"
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2"
      url: "https://gaussianprocess.org/gpml/chapters/RW2.pdf"
---

## Example

A biological simulator has two candidate designs $X=(a,b)$. For this search model, suppose the prior mean is zero, the prior covariance on $(a,b)$ is the identity matrix, the observation noise variance is $1$, and the acquisition coefficient is $b_1=1$. Run the procedure with initial list $((a,0))$, whose site was fixed before its observation, horizon $N=2$, and an observation oracle that returns a finite real value at the selected site. This is a specified surrogate model; no assertion is made that the simulator's actual law is this Gaussian process.

## Facts & Assumptions

**Given:** A two-point Gaussian-process model with $K=I_2$, independent $N(0,1)$ observation errors, the fixed initial observation $y(a)=0$, and the finite-candidate rule in [[alg-finite-candidate-gp-acquisition-search]].

[F1] For an observed covariance $C\succ0$, the finite GP posterior mean and covariance are the standard conditional-Gaussian formulas; the observed covariance is the only matrix inverted. [[thm-finite-gaussian-process-posterior-and-predictive-laws]]

[F2] The acquisition rule maximizes posterior mean plus a nonnegative multiple of posterior standard deviation over the finite ordered list. [[alg-finite-candidate-gp-acquisition-search]]

## Verification

1.1 Here $K_{aa}=1$, $K_{ba}=0$, and $C=K_{aa}+1=2>0$. Conditioning on the observation $y(a)=0$ gives $\mu(a)=0$, $v(a)=1-1/2=1/2$, $\mu(b)=0$, and $v(b)=1$. [given, F1, algebra]

1.2 The two acquisition values are $a_1(a)=\sqrt{1/2}<1=a_1(b)$. The exact least-index finite scan therefore selects $b$, with maximization error $\delta_1=0$. [given, F2, algebra]

2.1 The procedure calls the observation oracle at $b$; if it returns a finite real value, that value is appended. The new observed covariance is $C_2=2I_2$, so the algorithm computes the posterior at history length $N=2$ and returns `complete`. These posterior and acquisition values are conditional on the chosen kernel and noise model. They do not state a regret bound, a global guarantee for the biological simulator, or that the actual simulator is distributed as the surrogate GP. [step 1.1, step 1.2, given] ∎

