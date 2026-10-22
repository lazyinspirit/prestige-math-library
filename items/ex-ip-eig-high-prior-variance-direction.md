---
id: ex-ip-eig-high-prior-variance-direction
kind: example
title: Sensor placement along a high prior-variance direction
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-ip-expected-information-gain
  - thm-ip-linear-gaussian-information-gain-logdet
  - def-axiom-of-choice
  - thm-natural-logarithm-laws
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: AC is inherited from the finite Gaussian EIG and library KL interfaces.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, expected information and Gaussian linear design criterion."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§3.1, Gaussian information gain and prior predictive variance."
---

## Example

Assume AC. Let $\theta\sim N_2(0,C)$ with $C=\operatorname{diag}(9,1)$. Compare two zero-cost one-sensor designs with independent unit-variance Gaussian noise: $d_1$ observes $A_1\theta$ with $A_1=(1,0)$, and $d_2$ observes $A_2\theta$ with $A_2=(0,1)$. Their expected information gains are $\frac12\log 10$ and $\frac12\log 2$, respectively, so the sensor measuring the higher prior-variance direction is uniquely preferred.

## Example references

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §3.1](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

## Facts & Assumptions

**Given:** AC, the prior covariance $C=\operatorname{diag}(9,1)$, the two row operators, and independent observation noise with covariance $1$ for both designs.

[A1] AC is inherited from the EIG/KL convention. [[def-axiom-of-choice]]

[F1] For $C\succeq0$ and $\Gamma\succ0$, $\operatorname{EIG}=\frac12\log\det(I+\Gamma^{-1/2}ACA^T\Gamma^{-1/2})$. [[thm-ip-linear-gaussian-information-gain-logdet]]

[F2] The natural logarithm is strictly increasing and $\log1=0$. [[thm-natural-logarithm-laws]]

## Verification

**Given:** The hypotheses in the Example.

1.1 For $d_1$, $A_1CA_1^T=9$ and $\Gamma_1=1$, so [F1] gives $\operatorname{EIG}(d_1)=\frac12\log(1+9)=\frac12\log 10$. For $d_2$, $A_2CA_2^T=1$ and $\Gamma_2=1$, so [F1] gives $\operatorname{EIG}(d_2)=\frac12\log(1+1)=\frac12\log 2$. [A1, F1, given, algebra]

2.1 The costs are equal and $10>2>0$, so strict increase of the logarithm [F2] gives $\operatorname{EIG}(d_1)>\operatorname{EIG}(d_2)$. Thus $d_1$ is the unique maximizer among the two candidates. [F2, step 1.1, algebra] ∎

