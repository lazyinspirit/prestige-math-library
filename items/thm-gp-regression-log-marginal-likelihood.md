---
id: thm-gp-regression-log-marginal-likelihood
kind: theorem
title: Log marginal likelihood for a finite Gaussian-process regression model
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-gaussian-process
  - def-gaussian-process-regression-observation-model
  - def-multivariate-normal-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-nondegenerate-multivariate-normal-law-has-density
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from Gaussian-process and multivariate-normal construction and is required by the positive-definite density theorem; the covariance and logarithm calculations are choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2 §§2.2–2.3
      url: https://gaussianprocess.org/gpml/chapters/RW2.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
---

## Statement

Assume AC. Let $\mathcal X$ be a set, let $f=(f_t)_{t\in\mathcal X}$ be a
real Gaussian process with mean $m$ and symmetric positive-semidefinite
covariance kernel $k$, and let $X=(x_i)_{i=1}^n\in\mathcal X^n$ with $n\ge1$.
For independent observation noise $\varepsilon\sim N_n(0,R)$ with symmetric
positive-semidefinite covariance $R$, set $Y=f_X+\varepsilon$,
$m_X=(m(x_i))$, $K_{XX}=(k(x_i,x_j))$, and $A_X=K_{XX}+R$. Suppose
$A_X$ is positive definite. Define the log marginal likelihood at
$y\in\mathbb R^n$ as the logarithm of the Lebesgue density of $Y$ at $y$
under this prior-predictive model. Then $Y\sim N_n(m_X,A_X)$ and
$$\log p(y\mid X,m,k,R)=-\frac12(y-m_X)^TA_X^{-1}(y-m_X)-\frac12\log\det(A_X)-\frac n2\log(2\pi).$$
This formula is asserted only for the nonsingular observed-covariance case
$A_X\succ0$.

## Statement references

[Rasmussen and Williams, GPML, Chapter 2 §§2.2–2.3, equations (2.28)–(2.30), printed pp. 18–20](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

[Bishop, PRML, §6.4.2, equations (6.61)–(6.62), printed pp. 306–307](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

## Facts & Assumptions

**Given:** AC; the finite Gaussian-process observation model, a nonempty evaluation list $X$, independent noise $\varepsilon\sim N_n(0,R)$ with $R\succeq0$, and $A_X=K_{XX}+R\succ0$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] The finite observation model defines $Y=f_X+\varepsilon$, $m_X$, $K_{XX}$, and $A_X=K_{XX}+R$, with $\varepsilon$ independent of $f$. [[def-gaussian-process-regression-observation-model]]

[F2] A Gaussian process has multivariate-normal finite evaluation vectors, including singular covariance matrices. [[def-gaussian-process]]

[F3] Under AC, a multivariate-normal law is characterized by its normal scalar projections and allows symmetric positive-semidefinite covariance. [[def-multivariate-normal-law]]

[F4] A finite stack of independent Gaussian vectors is jointly multivariate normal with block-diagonal covariance. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[F5] Under AC, $N_n(a,\Sigma)$ with $\Sigma\succ0$ has Lebesgue density $(2\pi)^{-n/2}\det(\Sigma)^{-1/2}\exp\!\bigl(-\frac12(x-a)^T\Sigma^{-1}(x-a)\bigr)$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1] and [F2], $f_X\sim N_n(m_X,K_{XX})$. The independent noise has law $N_n(0,R)$, so [F4] makes $U=(f_X,\varepsilon)$ jointly Gaussian with mean $(m_X,0)$ and block-diagonal covariance $\operatorname{diag}(K_{XX},R)$. For any $a\in\mathbb R^n$, $a^TY=(a^T,a^T)U$ is a normal scalar projection by [F3]; its mean is $a^Tm_X$ and its variance is $a^T(K_{XX}+R)a$. Thus the projection definition [F3] gives $Y\sim N_n(m_X,A_X)$. [A1, F1, F2, F3, F4, given, algebra]

2.1 Apply [F5] to the law from step 1.1, using the hypothesis $A_X\succ0$. Its density at $y$ is $(2\pi)^{-n/2}\det(A_X)^{-1/2}\exp\!\bigl(-\frac12(y-m_X)^TA_X^{-1}(y-m_X)\bigr)$. This is positive, so taking its logarithm and expanding products gives the displayed formula. [A1, F5, given, step 1.1, algebra] ∎
