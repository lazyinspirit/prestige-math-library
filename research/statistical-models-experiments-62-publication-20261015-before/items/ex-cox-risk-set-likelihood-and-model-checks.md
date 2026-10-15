---
id: ex-cox-risk-set-likelihood-and-model-checks
kind: example
title: Risk-set likelihood and time-varying hazard-ratio check
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-progressively-measurable-and-predictable-process
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 5: Cox's Proportional Hazards Model, PDF pp. 7–14"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit7.pdf"
    - title: "Lu Tian, STAT331 Unit 7: Cox's Model: Extensions, PDF pp. 8–11"
      url: "https://web.stanford.edu/~lutian/coursepdf/Coxextensionunit9.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Example

At one untied failure time $t$, suppose the risk set is $R(t)=\{1,2,3\}$, the failing subject is $2$, and the covariate values at that time are $Z_1(t)=0$, $Z_2(t)=1$, and $Z_3(t)=2$. The partial-likelihood contribution is
$$\frac{e^\beta}{1+e^\beta+e^{2\beta}}.$$
For a separate survival comparison, take baseline hazard $\lambda_0(t)=1$ on $[0,1]$, $\beta_0=\log 2$, and fixed covariates $z=1$ and $z'=0$. Their hazard ratio is $2$, while their event-risk ratio by time $1$ is $1+e^{-1}$. If instead $Z_1(t)=t$ and $Z_2(t)=0$, their instantaneous hazard ratio is $2^t$, so the between-path hazard ratio varies over time even though $\beta$ is fixed.

## Verification

**Given:** Use the Cox partial likelihood, survival, and hazard-ratio definitions in [F1]–[F3], and the predictability definition in [F4]. Verify the risk-set contribution and the two hazard comparisons.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: for untied failures, the partial likelihood uses each event subject's exponential weight divided by the sum of exponential weights over its risk set.

[F2] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: at times with positive baseline hazard, the fixed-value hazard ratio is $e^{\beta^T(z-z')}$.

[F3] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: for a constant covariate value $z$, the event survival function is $S(t\mid z)=\exp\{-e^{\beta_0^Tz}\Lambda_0(t)\}$.

[F4] [[def-progressively-measurable-and-predictable-process]]: deterministic Borel functions of time are predictable.

1.1 Substituting $w_j(t)=e^{\beta Z_j(t)}$ for the three risk-set members in the no-tie partial-likelihood formula of [F1], subject $2$ contributes $e^\beta/(1+e^\beta+e^{2\beta})$. [given, F1, algebra]

1.2 For constant covariate $z$, the survival formula [F3] with $\lambda_0(t)=1$ gives $P(T\le1\mid z)=1-e^{-e^{\beta z}}$. At $\beta_0=\log2$, the risks for $z=1$ and $z'=0$ are $1-e^{-2}$ and $1-e^{-1}$, so their ratio is $(1-e^{-2})/(1-e^{-1})=1+e^{-1}<2$, although their hazard ratio from [F2] is $e^{\beta_0(z-z')}=2$. [given, F2, F3, algebra]

2.1 By [F4], the deterministic paths $Z_1(t)=t$ and $Z_2(t)=0$ are predictable. Substitution into the relative hazard factor of [F2] at $\beta_0=\log2$ gives $e^{(\log2)t}=2^t$, which equals $1$ at $t=0$ and $2$ at $t=1$. Thus a fixed regression coefficient does not force the hazard ratio between changing covariate paths to be constant. [given, F2, F4, algebra] ∎

