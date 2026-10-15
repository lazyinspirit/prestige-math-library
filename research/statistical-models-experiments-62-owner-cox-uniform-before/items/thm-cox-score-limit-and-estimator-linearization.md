---
id: thm-cox-score-limit-and-estimator-linearization
kind: theorem
title: Cox partial-likelihood score expansion and estimator linearization
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-counting-process-intensity-and-compensator-contract
  - def-op-and-little-op-stochastic-bounds
  - def-statistic-and-estimator
  - lem-cox-partial-likelihood-hessian-convergence
  - lem-cox-uniform-risk-set-convergence
  - lem-cox-score-martingale-replacement
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Example of Martingale CLT with Cox's Model, PDF pp. 1–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox.pdf"
    - title: "Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory, PDF pp. 1–8"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Assume AC. Let $p<\infty$, $\tau>0$, and $\beta_0\in\mathbb R^p$. Let subjects $O_i=(T_i,C_i,Z_i(\cdot))$ be IID and independent. Assume the Cox model of [[def-cox-proportional-hazards-model-and-partial-likelihood]] with bounded predictable covariates $\|Z_i(t)\|_2\le K$, baseline $\lambda_0\in L^1[0,\tau]$, and no tied failures. Assume the coordinate risk-set classes and positive risk denominators of [[lem-cox-uniform-risk-set-convergence]] on a compact neighborhood $B$ of $\beta_0$. In one common filtration, assume the observed event counts $N_i(t)=1\{U_i\le t,\delta_i=1\}$ have compensators
$$ A_i(t)=\int_0^tY_i(u)e^{\beta_0^TZ_i(u)}\lambda_0(u)\,du $$
and that $M_i=N_i-A_i$ satisfies the square-integrable counting-process contract of [[def-counting-process-intensity-and-compensator-contract]]. This martingale contract is an explicit model assumption.

Let $I$ be the matrix in [[lem-cox-partial-likelihood-hessian-convergence]] and assume $I$ is positive definite. Let $\hat\beta_n$ be a measurable $\mathbb R^p$-valued estimator such that, with probability tending to one, it solves the partial-likelihood score equation $U_n(\hat\beta_n)=0$, and suppose $\hat\beta_n\to_P\beta_0$. Then
$$ \sqrt n(\hat\beta_n-\beta_0) =I^{-1}\frac1{\sqrt n}\sum_{i=1}^n \int_0^\tau\{Z_i(t)-\bar z(t)\}\,dM_i(t)+o_P(1), \qquad \bar z(t)=\frac{s^{(1)}(t,\beta_0)}{s^{(0)}(t,\beta_0)}. $$
The proof establishes the partial-likelihood score representation locally; it does not treat the score summands with the random risk-set mean as IID.

## Facts & Assumptions

**Given:** AC; the IID Cox model and risk-process conventions; the stated empirical-process and risk-support conditions; the square-integrable common-filtration counting-process contracts; no tied failures; $I\succ0$; and a measurable consistent score root.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: $L_p(\beta)$ is the product of untied event weights divided by the risk-set weight sums, with $Y_i(t)=1\{U_i\ge t\}$.

[F2] [[def-statistic-and-estimator]]: an estimator is a measurable statistic with the stated target space.

[F3] [[lem-cox-partial-likelihood-hessian-convergence]]: uniformly on $B$, $n^{-1}H_n(\beta)+J(\beta)\to_P0$, and $J(\beta_0)=I$.

[F4] [[lem-cox-score-martingale-replacement]]: $n^{-1/2}U_n(\beta_0)=n^{-1/2}\sum_i\xi_i+o_P(1)$, with IID centered $\xi_i$ of covariance $I$ and normalized sum $O_P(1)$.

[F5] [[def-op-and-little-op-stochastic-bounds]]: $o_P(1)$ is convergence in probability to zero and $O_P(1)$ is boundedness in probability.

[A1] AC is inherited from the observation, predictability, and counting-process martingale interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Use the uniform Hessian limit along the consistent root's line segment and the separately established score representation.

1.1 Put $\Delta_n=\hat\beta_n-\beta_0$ and $G_n=\int_0^1n^{-1}H_n(\beta_0+s\Delta_n)\,ds$. Since $\Delta_n\to_P0$, the segment lies in $B$ with probability tending to one. The Hessian lemma gives uniform convergence to $-J(\beta)$, and $J$ is continuous at $\beta_0$ by bounded covariates, the positive risk denominator, and $\lambda_0\in L^1$. Therefore $G_n\to_P-I$. [A1, F2, F3, F5, given]

2.1 Since $I$ is positive definite, it is invertible. Matrix inversion is continuous at the nonsingular matrix $-I$, so $G_n$ is invertible with probability tending to one and $G_n^{-1}\to_P-I^{-1}$. [given, step 1.1, algebra]

2.2 On the event that $\hat\beta_n$ is a score root and the segment lies in $B$, the fundamental theorem of calculus applied to the continuously differentiable finite-sample score gives $0=U_n(\hat\beta_n)=U_n(\beta_0)+nG_n\Delta_n$. Thus $\sqrt n\Delta_n=-G_n^{-1}\{U_n(\beta_0)/\sqrt n\}$. [F1, given, step 1.1]

3.1 Substitute [F4]. Its normalized IID sum is $O_P(1)$, so the product of that sum with $G_n^{-1}+I^{-1}=o_P(1)$ is $o_P(1)$. Hence $\sqrt n\Delta_n=I^{-1}n^{-1/2}\sum_{i=1}^n\xi_i+o_P(1)=I^{-1}n^{-1/2}\sum_{i=1}^n\int_0^\tau\{Z_i(t)-\bar z(t)\}\,dM_i(t)+o_P(1)$, which is the asserted expansion. [F4, F5, step 2.1, step 2.2, algebra] ∎

