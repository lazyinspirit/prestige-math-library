---
id: ex-hyperparameter-uncertainty-can-induce-group-dependence
kind: example
title: "A shared hyperparameter can couple group parameters"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-hierarchical-bayesian-model
  - def-standard-borel-space
  - def-type-ii-marginal-likelihood-and-empirical-bayes-posterior
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
justified_by: []
proof_strategy: direct
axiom_use: "None. The finite hierarchy, posterior normalization, and calculations use no choice axiom."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §§5.1, 5.3–5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §§5.1 and 5.3–5.4, printed pp. 102–118: full hyperparameter posterior, conditional group posteriors, and the difference from substituting point estimates."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16, §§16.3–16.4"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Full official chapter inspected, §§16.3–16.4: shared global hyperparameters, group-specific parameters, and posterior distributions retaining uncertainty in both layers."
---

## Example

Give $H=\Theta=\{0,1\}$ their discrete sigma-algebras. Let $\eta\in\{0,1\}$
have prior probability $1/2$ at each value. Given $\eta$,
let $\theta_1,\theta_2$ be conditionally independent with
$\theta_j=\eta$ almost surely. For each group, let the observation space be
the singleton $\{*\}$ with its full sigma-algebra and counting measure
$\nu_j(\{*\})=1$. Let the observation kernel be point mass at $*$, with
specified jointly measurable density $f_j(\theta_j,*)=1$ relative to $\nu_j$.
The data contain no information about $\eta$.

## Facts & Assumptions

**Given:** The finite two-group hierarchy and singleton observation kernels
specified in the Example.

[F1] In a finite-group hierarchy, a proper hyperprior and conditional group
kernel define the latent prior; the groups are conditionally independent
given the shared hyperparameter. [[def-hierarchical-bayesian-model]]

[F2] On a fiber with positive finite evidence, the hierarchical posterior is
the normalized joint likelihood times latent prior. [[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]]

[F3] Type-II maximum marginal likelihood selects an attained maximizer only
where it exists, and its plug-in posterior fixes the chosen hyperparameter.
[[def-type-ii-marginal-likelihood-and-empirical-bayes-posterior]]

[F4] A measurable space is standard Borel when it is bimeasurably isomorphic
to a Polish space. The finite discrete spaces here are Polish.
[[def-standard-borel-space]]

## Verification

**Given:** The hierarchy and singleton observations in the Example.

1.1 The finite discrete spaces are standard Borel by [F4]. The two-point hyperprior is proper, $G_0=\delta_0$ and $G_1=\delta_1$ are probability kernels, and each singleton observation measure $\nu_j$ is finite, hence sigma-finite. Its observation kernel has the specified density $f_j(\theta_j,*)=1$, jointly measurable on the finite product space. Thus the hierarchy in [F1] is well-defined and its joint evidence is $Z(*)=1$. By [F2], the full posterior equals the prior: it assigns probability $1/2$ to $(\eta,\theta_1,\theta_2)=(0,0,0)$ and $1/2$ to $(1,1,1)$. [F1, F2, F4, given]

2.1 For either fixed $\eta$, the conditional marginal likelihood is $m(*\mid\eta)=1$, so both values attain the maximum. The map from the singleton data space to $\eta=0$ is measurable, hence [F3] permits the plug-in choice $\widehat\eta(*)=0$; its posterior is $\delta_0\otimes\delta_0$. [F1, F3, step 1.1, given]

3.1 Under the full posterior in step 1.1, $\Pr(\theta_1=1)=\Pr(\theta_2=1)=1/2$ but $\Pr(\theta_1=1,\theta_2=1)=1/2\ne1/4$. Therefore the group parameters are dependent after the shared hyperparameter is integrated out, and the full posterior differs from the plug-in posterior in step 2.1. [step 1.1, step 2.1, algebra] ∎
