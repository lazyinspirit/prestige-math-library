---
id: ex-gaussian-mixture-likelihood-unbounded
kind: example
title: "A two-point sample has unbounded Gaussian-mixture likelihood"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-finite-gaussian-mixture
  - thm-finite-gaussian-component-density-normalized
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §9.2.2"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §14.3.7"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
---

## Example

Assume AC. For the observations $x_1=0,x_2=1\in\mathbb R$, use two Gaussian components of weights $1/2,1/2$, both with mean $0$, with variances $\varepsilon^2$ and $1$ for $\varepsilon>0$. Write $\phi_1(x;0,s^2)=(2\pi s^2)^{-1/2}\exp(-x^2/(2s^2))$, $f_\varepsilon(x)=\tfrac12\phi_1(x;0,\varepsilon^2)+\tfrac12\phi_1(x;0,1)$, and $L_\varepsilon=f_\varepsilon(0)f_\varepsilon(1)$. Every parameter in this family has positive weights and positive-definite one-dimensional covariances. The likelihood $L_\varepsilon$ is unbounded above as $\varepsilon\downarrow0$; hence its log likelihood is unbounded above as well.

## Example references

[[def-finite-gaussian-mixture]] — the finite-mixture likelihood and Gaussian density formula.

[[thm-finite-gaussian-component-density-normalized]] — the component functions are normalized probability densities for every $\varepsilon>0$.

## Facts & Assumptions

**Given:** Assume AC; take observations $0,1$, two components with weights $1/2,1/2$, common mean $0$, and variances $\varepsilon^2$ and $1$ with $\varepsilon>0$.

[A1] [[def-axiom-of-choice]]: AC is the stated assumption of the finite-Gaussian definition and the local component-density normalization theorem.

[F1] [[def-finite-gaussian-mixture]]: the one-dimensional component density is $\phi_1(x;\mu,s^2)=(2\pi s^2)^{-1/2}e^{-(x-\mu)^2/(2s^2)}$ and the sample likelihood is the product of the mixture densities at the observations.

[F2] [[thm-finite-gaussian-component-density-normalized]]: for each $s^2>0$, the displayed component function is a normalized Gaussian density and is finite and positive at every real observation.

[F3] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is the increasing inverse of $\exp$, so $\log(\exp R)=R$ for every real $R$.

## Proof
1.1 Let $f_\varepsilon$ be the mixture density. From [F1], $f_\varepsilon(0)=\tfrac12\phi_1(0;0,\varepsilon^2)+\tfrac12\phi_1(0;0,1)\ge\frac{1}{2\sqrt{2\pi}\,\varepsilon}.$ Also $f_\varepsilon(1)=\tfrac12\phi_1(1;0,\varepsilon^2)+\tfrac12\phi_1(1;0,1)\ge\frac{e^{-1/2}}{2\sqrt{2\pi}}>0.$ These bounds hold for every $\varepsilon>0$, for which both variances are positive; [F2] supplies the stated density interpretation under [A1]. [A1, F1, F2, algebra]

2.1 The sample likelihood $L_\varepsilon=f_\varepsilon(0)f_\varepsilon(1)$ therefore satisfies $L_\varepsilon\ge\frac{e^{-1/2}}{8\pi\varepsilon}.$ Given any real $R$, choose $0<\varepsilon<e^{-1/2}/(8\pi e^R)$; then step 1.1 gives $L_\varepsilon>e^R$. By [F3], $\log L_\varepsilon>\log(e^R)=R$. Thus both the likelihood and its log are unbounded above. [F1, F3, step 1.1, algebra] ∎
