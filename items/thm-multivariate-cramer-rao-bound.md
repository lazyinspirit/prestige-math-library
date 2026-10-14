---
id: thm-multivariate-cramer-rao-bound
kind: theorem
title: "Multivariate Cramér–Rao bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - thm-score-mean-zero-and-information-identity
  - def-unbiased-estimator-and-umvu
  - def-statistic-and-estimator
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Theorem 5.9 and proof sketch, PDF pp. 32–33"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture 13: Unbiased Estimation and Risk Inequalities, Theorems 3.4.3–3.4.4, PDF pp. 18–19"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf"
---

## Statement

Assume AC for the selected density representatives. Let
$\Theta\subseteq\mathbb R^d$ be open and fix $\theta\in\Theta$. Let
$T:\mathcal X\to\mathbb R^k$ be a measurable estimator
([[def-statistic-and-estimator]]) with finite second moments and
$\mathbb E_\theta T=\psi(\theta)$ coordinatewise (this is the meaning of
unbiasedness here), where
$\psi:\Theta\to\mathbb R^k$ is differentiable at $\theta$. Let the score
vector $S_\theta$ be square-integrable, have mean zero, and have nonsingular
information matrix $I(\theta)=\mathbb E_\theta[S_\theta S_\theta^\mathsf T]$.
Assume the vector score-derivative identity
$$\mathbb E_\theta[(T-\psi(\theta))S_\theta^\mathsf T]=D\psi(\theta),$$
where $D\psi(\theta)$ is the $k\times d$ Jacobian matrix with entries
$\partial\psi_a/\partial\theta_j$. Then
$$\operatorname{Cov}_\theta(T)\succeq D\psi(\theta)I(\theta)^{-1}D\psi(\theta)^\mathsf T.$$
Here $A\succeq B$ means $a^\mathsf T(A-B)a\ge0$ for every
$a\in\mathbb R^k$, and $\operatorname{Cov}_\theta(T)$ is the matrix whose
$a,b$ entry is $\operatorname{Cov}_\theta(T_a,T_b)$. The mean-zero and
score-derivative identities are
explicit hypotheses; common support with suitable derivative-interchange
conditions is one sufficient regular route, not the only possible route. If each coordinate $T_a$ is a finite-variance unbiased estimator of the real
estimand $\psi_a$ in the sense of [[def-unbiased-estimator-and-umvu]],
then $T$ satisfies the pointwise mean and moment premises; the score-derivative identity remains a separate condition.

## Facts & Assumptions

**Given:** AC; an open $d$-dimensional parameter set; a measurable $\mathbb R^k$-valued estimator $T$ with finite second moments and mean $\psi(\theta)$; a square-integrable score vector $S_\theta$ with mean zero and nonsingular $I(\theta)=\mathbb E_\theta[S_\theta S_\theta^\mathsf T]$; the vector derivative identity; and the stated quadratic-form definition of $\succeq$.

[A1] [[def-axiom-of-choice]]: AC supplies the arbitrary-index family of selected density representatives used by the score.

[F1] [[def-score-and-fisher-information]]: the score is the gradient of the log density and $I(\theta)$ has entries $\mathbb E_\theta[S_{\theta,i}S_{\theta,j}]$.

[F2] [[thm-score-mean-zero-and-information-identity]]: under its regularity hypotheses, the score mean is zero and the information matrix is its second-moment matrix.

[F3] [[def-statistic-and-estimator]]: an estimator is a measurable statistic with its target measurable space specified.

[F4] [[def-moments-variance-and-covariance]]: covariance is the expectation of centered coordinate products; for a vector, this defines the covariance matrix entrywise.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is integration against the sampling probability measure.

[F6] [[def-unbiased-estimator-and-umvu]], applied to each real coordinate: if $T_a$ is finite-variance unbiased for $\psi_a$, then $\mathbb E_\eta T_a=\psi_a(\eta)$ and $\mathbb E_\eta T_a^2<\infty$ at every parameter.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: expectation is linear on integrable real random variables. Finite second moments imply first moments on a probability space (use $|z|\le(1+z^2)/2$), and all products of coordinates in the covariance expansion are integrable by $2|YZ|\le Y^2+Z^2$.

## Proof

**Proof technique:** direct.

1.1 Applying [F6] to each coordinate of a globally finite-variance unbiased vector estimator shows that it satisfies the theorem's pointwise mean and moment premises; the score-derivative identity is separately assumed. Define $R:=T-\psi(\theta)-D\psi(\theta)I(\theta)^{-1}S_\theta$. The stated mean assumptions and expectation linearity [F7] give $\mathbb E_\theta R=0$, so $\operatorname{Cov}_\theta(R)=\mathbb E_\theta[RR^\mathsf T]$. [A1, F1, F2, F3, F4, F5, F6, F7, given, construct]

2.1 Expand the residual covariance using expectation linearity [F7], $\mathbb E_\theta[(T-\psi)S_\theta^\mathsf T]=D\psi$, $\mathbb E_\theta[S_\theta(T-\psi)^\mathsf T]=D\psi^\mathsf T$, and $\mathbb E_\theta[S_\theta S_\theta^\mathsf T]=I$. The products are integrable by the coordinate bound in [F7]. Since $I$ is symmetric and nonsingular, $I^{-1}$ is symmetric, and matrix multiplication yields $$\operatorname{Cov}_\theta(R) =\operatorname{Cov}_\theta(T)-D\psi(\theta)I(\theta)^{-1}D\psi(\theta)^\mathsf T.$$ [F1, F4, F7, step 1.1, given, algebra]

3.1 For every $a\in\mathbb R^k$, $a^\mathsf T\operatorname{Cov}_\theta(R)a =\mathbb E_\theta[(a^\mathsf T R)^2]\ge0$. By the definition of $\succeq$ in the Statement and step 2.1, this is exactly $\operatorname{Cov}_\theta(T)\succeq D\psi(\theta)I(\theta)^{-1}D\psi(\theta)^\mathsf T$. [step 2.1, given, algebra] ∎
