---
id: cex-collinear-design-coefficient-risk-unidentifiable
kind: counterexample
title: "Collinear columns identify a fitted mean, not its coefficients"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-fixed-design-projection-estimator
  - thm-gaussian-projection-risk
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-loss-function-and-risk
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, §§7–8"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Sylvain Arlot, Model/estimator selection, Lecture on model selection, §§1–2"
      url: "https://uq.math.cnrs.fr/media/210618_ecole_ete_cea-edf-inria__modsel_penmin_crossval.pdf"
---

## Statement refuted

For every fixed-design matrix $X$, the map $\theta\mapsto X\theta$ is injective;
therefore the coefficient vector is determined by its fitted mean.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the design matrix with two identical columns
$X_n=[\mathbf 1_n\ \mathbf 1_n]\in\mathbb R^{n\times2}$, the coefficient
vectors $\theta_1=(1,0)$ and $\theta_2=(0,1)$, and centered additive noise
whose law is the same at both parameter values and whose covariance is
$\sigma^2I_n$ with $\sigma^2>0$.

[F1] The least-squares fitted vector is the projection of the observation onto
the design column space ([[def-fixed-design-projection-estimator]]).

[F2] For centered noise with covariance $\sigma^2I_n$, projection onto a fixed
rank-$r$ subspace has expected squared error equal to squared approximation bias
plus $r\sigma^2$ ([[thm-gaussian-projection-risk]]).

[F3] Expectation is linear and preserves inequalities between integrable real random variables
([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F4] The risk of a procedure is the expected loss under its parameter law
([[def-loss-function-and-risk]]).

## Counterexample

1.1 Both coefficient vectors are distinct, but $X_n\theta_1=\mathbf 1_n=X_n\theta_2$. Thus the asserted injectivity fails, and the observation distributions under $\theta_1$ and $\theta_2$ are identical because the additive noise law is common. [given, algebra]

1.2 Let $T(Y)\in\mathbb R^2$ be any measurable coefficient estimator. For every $a\in\mathbb R^2$, completing squares gives $$\|a-\theta_1\|_2^2+\|a-\theta_2\|_2^2 =2\left\|a-\left(\frac12,\frac12\right)\right\|_2^2+1\ge1.$$ If either coefficient risk is infinite, their maximum is already at least $1/2$. Otherwise both squared losses are integrable under the common observation law. Their sum is integrable by [F3], so linearity and monotonicity in [F3] show that the sum of the two risks is at least $1$. Thus their maximum is at least $1/2$ for every $n$. [F3, F4, given, algebra]

2.1 The common fitted mean $\mu=\mathbf 1_n$ lies in $\operatorname{col}(X_n)$, which has rank $1$. By [F2], its projected least-squares fit has expected squared fitted-value risk $\sigma^2$, or $\sigma^2/n$ per observation by [F4]. This vanishes as $n$ grows while the coefficient-risk lower bound in step 1.2 stays at least $1/2$. [F1, F2, F4, step 1.2] ∎
