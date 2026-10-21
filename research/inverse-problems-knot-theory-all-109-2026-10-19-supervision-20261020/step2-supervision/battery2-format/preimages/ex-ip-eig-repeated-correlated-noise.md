---
id: ex-ip-eig-repeated-correlated-noise
kind: example
title: Repeated measurements with correlated noise
status: draft
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
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, expected information criterion for the normal linear model."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§3.1 and p. 594, information criteria with correlated or design-dependent noise."
---

## Example

Assume AC. Let $\theta\sim N(0,1)$ and take two repeated observations with $A=(1,1)^T$ and noise covariance $\Gamma_\rho=\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}$, where $-1<\rho<1$. The matrix $\Gamma_\rho$ is positive definite. The expected information gain is $\frac12\log\left(1+\frac{2}{1+\rho}\right)$. In particular, correlation $\rho=\frac12$ gives $\frac12\log(7/3)$, less than the independent-noise value $\frac12\log 3$ at $\rho=0$.

## Example references

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §3.1](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

## Facts & Assumptions

**Given:** AC, scalar prior covariance $C=1$, repeated-observation matrix $A=(1,1)^T$, and $-1<\rho<1$.

[A1] AC is inherited from the EIG/KL convention. [[def-axiom-of-choice]]

[F1] For $C\succeq0$ and $\Gamma\succ0$, linear-Gaussian EIG is the log determinant in the Statement of the cited theorem. [[thm-ip-linear-gaussian-information-gain-logdet]]

[F2] The natural logarithm is strictly increasing. [[thm-natural-logarithm-laws]]

## Verification

**Given:** The hypotheses in the Example.

1.1 The vectors $(1,1)^T$ and $(1,-1)^T$ are eigenvectors of $\Gamma_\rho$ with eigenvalues $1+\rho$ and $1-\rho$. Both are positive for $-1<\rho<1$, so $\Gamma_\rho\succ0$. The predictive covariance is
$S_\rho=ACA^T+\Gamma_\rho=\begin{pmatrix}2&1+\rho\\1+\rho&2\end{pmatrix}$
Thus $\det S_\rho=4-(1+\rho)^2$ and $\det\Gamma_\rho=1-\rho^2$. [given, algebra]

1.2 By [F1], $\operatorname{EIG}(\rho)=\frac12\log(\det S_\rho/\det\Gamma_\rho)=\frac12\log\left(\frac{4-(1+\rho)^2}{1-\rho^2}\right)$. Factoring numerator and denominator gives $\frac{4-(1+\rho)^2}{1-\rho^2}=\frac{(3+\rho)(1-\rho)}{(1-\rho)(1+\rho)}=1+\frac{2}{1+\rho}$, proving the formula. [A1, F1, step 1.1, algebra]

2.1 At $\rho=\frac12$, the ratio is $7/3$; at $\rho=0$, it is $3$. Since $7/3<3$, [F2] gives the strict EIG comparison in the Example. [F2, step 1.2, algebra] ∎
