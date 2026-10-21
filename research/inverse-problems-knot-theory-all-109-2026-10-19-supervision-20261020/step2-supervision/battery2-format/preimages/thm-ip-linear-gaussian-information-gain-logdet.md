---
id: thm-ip-linear-gaussian-information-gain-logdet
kind: theorem
title: Linear Gaussian information gain has a log-determinant formula
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - thm-ip-eig-is-joint-relative-entropy
  - thm-ip-finite-linear-gaussian-posterior
  - def-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-non-negative-square-root-exists-and-is-unique
  - def-determinant-of-a-square-matrix
  - def-natural-logarithm
  - thm-determinant-multiplicative
  - def-axiom-of-choice
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is inherited from the library KL convention, finite Gaussian and
  conditional-law interfaces. The expectation and finite matrix algebra in the
  local proof use no stronger choice principle and never require an inverse of
  the possibly singular state covariance.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§2.2, normal-linear Bayesian D-optimality and its determinant criterion."
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§3.1, equations (3.4)–(3.6), Gaussian information gain from a determinant ratio."
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, MIT Press (2006)"
      url: "https://gaussianprocess.org/gpml/chapters/RW.pdf"
      locator: "Chapter 2 §§2.1–2.2, finite Gaussian conditioning and predictive laws."
---

## Statement

Assume the Axiom of Choice. Let $n,m\ge1$, let $m_0\in\mathbb R^n$, let $C\in\mathbb R^{n\times n}$ be symmetric positive semidefinite, let $A\in\mathbb R^{m\times n}$, and let $\Gamma\in\mathbb R^{m\times m}$ be symmetric positive definite. Suppose $\theta\sim N_n(m_0,C)$ and $\eta\sim N_m(0,\Gamma)$ are independent, and observe $Y=A\theta+\eta$. With $S=ACA^T+\Gamma$, the expected information gain of this experiment is
$$\operatorname{EIG}=\frac12\log\det\!\left(I_m+\Gamma^{-1/2}ACA^T\Gamma^{-1/2}\right).$$
Here $\Gamma^{-1/2}$ is the inverse of the unique symmetric positive-definite square root of $\Gamma$, and $\log$ is the natural logarithm. The matrix inside the log determinant is positive definite. This formula permits singular $C$ and never uses differential entropy of $\theta$; the mean $m_0$ cancels. Noise depending on $\theta$ is outside the hypotheses and need not satisfy the formula.

## Statement references

[[thm-ip-eig-is-joint-relative-entropy|Expected information gain is the joint KL divergence of parameter and observation from the product of their marginals.]]

[[thm-ip-finite-linear-gaussian-posterior|For singular prior covariance and positive-definite observation noise, the finite linear Gaussian posterior exists and only the observation covariance is inverted.]]

[[def-multivariate-normal-law|A finite multivariate Gaussian law may have singular covariance.]]

[[thm-nondegenerate-multivariate-normal-law-has-density|Positive-definite Gaussian covariance gives the stated Lebesgue density.]]

[[def-natural-logarithm|Logarithms use the natural logarithm.]]

[Chaloner and Verdinelli, §2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

[MacKay, §3.1](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

[Rasmussen and Williams, Chapter 2](https://gaussianprocess.org/gpml/chapters/RW.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Statement, with the expected information gain defined for the dominated conditional Gaussian likelihood and its proper Gaussian prior.

[A1] AC is the explicit hypothesis of the finite Gaussian posterior interface and the library KL convention. [[def-axiom-of-choice]]

[F1] The joint-KL identity gives $\operatorname{EIG}=D(P_{\theta,Y}\|P_\theta\otimes P_Y)$ under the dominated model. [[thm-ip-eig-is-joint-relative-entropy]]

[F2] For $\theta\sim N_n(m_0,C)$ and independent $\eta\sim N_m(0,\Gamma)$ with $C\succeq0$ and $\Gamma\succ0$, $S=ACA^T+\Gamma$ is positive definite and the posterior formula uses only $S^{-1}$; singular $C$ is permitted. [[thm-ip-finite-linear-gaussian-posterior]]

[F3] A finite independent stack of possibly singular Gaussian vectors is jointly Gaussian, and linear projections of a multivariate normal have the corresponding projected mean and covariance. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]] [[def-multivariate-normal-law]]

[F4] A positive-definite multivariate normal with covariance $V$ has density $(2\pi)^{-m/2}\det(V)^{-1/2}\exp(-\tfrac12(y-a)^TV^{-1}(y-a))$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] A positive-definite symmetric matrix has a unique positive-definite square root; determinants are multiplicative. [[thm-non-negative-square-root-exists-and-is-unique]] [[thm-determinant-multiplicative]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For every nonzero $v\in\mathbb R^m$, $v^TSv=(A^Tv)^TC(A^Tv)+v^T\Gamma v>0$ because $C\succeq0$ and $\Gamma\succ0$. Thus $S\succ0$ and both observation covariances have positive determinants. The same conclusion is recorded in [F2]. [given, F2, algebra]

1.2 By [F3], $(\theta,\eta)$ is jointly Gaussian, so its linear image $Y=A\theta+\eta$ is Gaussian with mean $Am_0$ and covariance $S$. Conditional on $\theta$, $Y$ is a translate of $\eta$ and has covariance $\Gamma$. Since both $S$ and $\Gamma$ are positive definite, [F4] gives the positive conditional and predictive densities needed in [F1]. [A1, F3, F4, step 1.1, algebra]

2.1 Write $z=Y-Am_0$ and $e=Y-A\theta=\eta$. By [F4], the log likelihood ratio in [F1] is $\log\frac{p(Y\mid\theta)}{p_Y(Y)}=\frac12\log\frac{\det S}{\det\Gamma}-\frac12e^T\Gamma^{-1}e+\frac12z^TS^{-1}z$. The two quadratic terms have finite expectations: expanding each finite sum and using $\mathbb E[ee^T]=\Gamma$ and $\mathbb E[zz^T]=S$ gives $\mathbb E[e^T\Gamma^{-1}e]=\operatorname{tr}(\Gamma^{-1}\Gamma)=m$ and $\mathbb E[z^TS^{-1}z]=\operatorname{tr}(S^{-1}S)=m$. Their expectations cancel, so [F1] yields $\operatorname{EIG}=\frac12\log(\det S/\det\Gamma)$. [F1, F4, step 1.1, step 1.2, algebra]

3.1 Let $W=\Gamma^{-1/2}$. Since $\Gamma^{1/2}W=I_m$, matrix multiplication gives $S=\Gamma^{1/2}(I_m+WACA^TW)\Gamma^{1/2}$. The middle matrix is positive definite because $ACA^T\succeq0$. By [F5], $\det S=\det(\Gamma^{1/2})^2\det(I_m+WACA^TW)=\det\Gamma\,\det(I_m+WACA^TW)$. Substitution in step 2.1 proves the formula. No inverse or determinant of $C$ was used, so singular $C$ is included; centering by $m_0$ in $z$ proves the mean cancellation. [F5, step 2.1, algebra] ∎
