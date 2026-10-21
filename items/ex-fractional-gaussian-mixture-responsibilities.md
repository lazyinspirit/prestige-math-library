---
id: ex-fractional-gaussian-mixture-responsibilities
kind: example
title: "A tied observation keeps fractional Gaussian responsibilities"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-finite-gaussian-mixture
  - thm-equal-spherical-mixture-low-variance-kmeans-limit
  - thm-finite-gaussian-component-density-normalized
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §9.3.2 and Exercise 9.11"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, Exercise 13.1"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
---

## Example

Assume AC. Take one observation $x=0\in\mathbb R$, two Gaussian components with means $\mu_1=-1$ and $\mu_2=1$, common variance $\sigma^2>0$, and mixture weights $\pi_1=1/3$ and $\pi_2=2/3$. Their component density is $\phi_1(x;\mu,\sigma^2)=(2\pi\sigma^2)^{-1/2}\exp(-(x-\mu)^2/(2\sigma^2))$, and the responsibility of component $k$ is $\gamma_k=\pi_k\phi_1(0;\mu_k,\sigma^2)/\sum_{j=1}^2\pi_j\phi_1(0;\mu_j,\sigma^2)$. The two squared distances from the observation to the component means are both $1$. For every $\sigma>0$, the responsibility vector is exactly $(1/3,2/3)$; therefore as $\sigma\downarrow0$ it remains fractional rather than converging to $(1,0)$ or $(0,1)$.

## Example references

[[def-finite-gaussian-mixture]] — the positive-weight Gaussian component formula and responsibility definition.

[[thm-equal-spherical-mixture-low-variance-kmeans-limit]] — tied nearest centers receive limiting responsibilities proportional to their fixed mixture weights.

[[thm-finite-gaussian-component-density-normalized]] — each component formula is a normalized Gaussian density.

## Facts & Assumptions

**Given:** Assume AC; take one observation at $0$, means $-1$ and $1$, common variance $\sigma^2>0$, and positive weights $1/3,2/3$.

[A1] [[def-axiom-of-choice]]: AC is the stated assumption of the finite-Gaussian definition and the local component-density normalization theorem.

[F1] [[def-finite-gaussian-mixture]]: in one dimension, $\phi_1(x;\mu,\sigma^2)=(2\pi\sigma^2)^{-1/2}\exp(-(x-\mu)^2/(2\sigma^2))$, and the responsibility is the weighted component density divided by their sum.

[F2] [[thm-finite-gaussian-component-density-normalized]]: for positive variance, this component formula is finite and strictly positive and integrates to one.

[F3] [[thm-equal-spherical-mixture-low-variance-kmeans-limit]]: at a tied nearest-center set, fixed positive weights yield limiting responsibilities equal to those weights renormalized over the tied set.

## Proof

1.1 Substitution in [F1] gives $\phi_1(0;-1,\sigma^2)=(2\pi\sigma^2)^{-1/2}e^{-1/(2\sigma^2)}=\phi_1(0;1,\sigma^2)=:c_\sigma.$ By [F2], $c_\sigma$ is finite and positive under [A1]. [A1, F1, F2, algebra]

2.1 The responsibility denominator is $c_\sigma(1/3+2/3)=c_\sigma$. Dividing the two weighted component values by that denominator gives $\gamma_1=(1/3)c_\sigma/c_\sigma=1/3$ and $\gamma_2=(2/3)c_\sigma/c_\sigma=2/3$ for every $\sigma>0$. [F1, step 1.1, algebra]

3.1 Since the vector is constant for all positive $\sigma$, its limit as $\sigma\downarrow0$ is $(1/3,2/3)$, which is not one-hot. Both centers are nearest to $0$, so [F3] gives the same tied-center limit, proportional to the fixed weights. [F3, step 2.1, algebra] ∎
