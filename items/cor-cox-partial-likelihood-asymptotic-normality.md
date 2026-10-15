---
id: cor-cox-partial-likelihood-asymptotic-normality
kind: corollary
title: Asymptotic normality of the Cox partial-likelihood estimator
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-covariance-matrix-of-a-random-vector
  - def-statistic-and-estimator
  - lem-cox-score-martingale-replacement
  - thm-cox-score-limit-and-estimator-linearization
  - thm-iid-terminal-influence-limit
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory, PDF pp. 6–10"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Assume the hypotheses of [[thm-cox-score-limit-and-estimator-linearization]] and AC. Then
$$\sqrt n(\hat\beta_n-\beta_0)\ \Rightarrow\ N_p(0,I^{-1}).$$
This terminal normal limit follows from the separately proved influence expansion; it is not used to prove that expansion.

## Facts & Assumptions

**Given:** The measurable consistent score root and the expansion from [[thm-cox-score-limit-and-estimator-linearization]], the IID subject influence variables from [[lem-cox-score-martingale-replacement]], and AC.

[F1] [[lem-cox-score-martingale-replacement]]: $\xi_i$ are IID centered square-integrable vectors with covariance $I$.

[F2] [[thm-cox-score-limit-and-estimator-linearization]]: $\sqrt n(\hat\beta_n-\beta_0)=I^{-1}n^{-1/2}\sum_i\xi_i+o_P(1)$.

[F3] [[thm-iid-terminal-influence-limit]]: under AC, an IID measurable estimator with centered finite-second-moment influence function and a separately established $o_P(n^{-1/2})$ expansion is asymptotically normal with influence-function covariance.

[F4] [[def-covariance-matrix-of-a-random-vector]]: covariance is $E[(X-EX)(X-EX)^T]$ for a square-integrable finite-dimensional random vector.

[A1] AC is required by the terminal influence-limit theorem. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Identify the one-subject influence function and apply the terminal IID influence theorem only after the estimator expansion is established.

1.1 Define $\phi(O_i)=I^{-1}\xi_i$. By [F1], $E\phi=0$ and $\phi$ is square-integrable. Since $I$ is symmetric positive definite, [F4] gives $\operatorname{Cov}(\phi)=I^{-1}\operatorname{Cov}(\xi_i)(I^{-1})^T=I^{-1}II^{-1}=I^{-1}$. The map is a measurable function of one subject record because $M_i$, $Z_i$, and the compensator $A_i$ are subject-specific and $\bar z$ is deterministic. [A1, F1, F4, given, algebra]

2.1 By [F2], the expansion is $\hat\beta_n-\beta_0=n^{-1}\sum_{i=1}^n\phi(O_i)+r_n$ with $r_n=o_P(n^{-1/2})$. The sample records are IID, $\hat\beta_n$ is measurable, $\phi$ is centered with finite second moment, and AC holds. These are exactly the hypotheses of [F3]; applying it with covariance from step 1.1 proves the stated limit. [A1, F2, F3, step 1.1] ∎

