---
id: ex-zero-exposure-censored-mle-boundary
kind: example
title: No observed failures with positive versus zero exposure
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-countable-choice
  - def-event-time-observation-schemes
  - thm-censored-exponential-likelihood-and-mle
  - thm-exponential-and-weibull-survival-laws
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.4.1.2, PDF pp. 159–161"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §2.2, PDF pp. 5–6"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
---

## Example

Assume Countable Choice.

Compare two right-censored exponential samples with no observed failures. In
each scenario, assume the two event times are iid $\mathrm{Exp}(\lambda)$.
In the first, two subjects are followed until fixed censoring time $5$ and both
are censored there. In the second, both subjects are censored immediately at
time $0$. The deterministic censoring times make the subject pairs iid in each
sample. Here $\lambda>0$ is the common event-rate parameter in both samples.

## Facts & Assumptions

**Given:** Right-censored records use $U_i=\min(T_i,C_i)$ and $\delta_i=1\{T_i\le C_i\}$; in each scenario the two event times are iid $\mathrm{Exp}(\lambda)$ and the censoring time is fixed and independent of the event times.

[F1] For $d=\sum_i\delta_i$ and $E=\sum_iU_i$, the event likelihood factor is $\lambda^d e^{-\lambda E}$. If $d=0,E>0$, its supremum occurs as $\lambda\downarrow0$ and is not attained for $\lambda>0$; if $d=0,E=0$, it is constant. The boundary $\lambda=0$ is not a proper exponential law on finite event times. [[thm-censored-exponential-likelihood-and-mle]]

[F2] An exponential event time has $P(T>0)=1$. [[thm-exponential-and-weibull-survival-laws]]

[A1] The two censoring designs form the family $G_c=\delta_c$ for $c\in\{0,5\}$, dominated by the fixed finite measure $\nu=\delta_0+\delta_5$ with specified density $g_c(u)=1_{\{c\}}(u)$; in particular $g_c(c)=1$. In scenario one $C_i=5$, and in scenario two $C_i=0$. [[def-event-time-observation-schemes]], [[def-measure-with-density]]

[A2] Countable Choice is inherited from the exponential-law supplier [F2] and the likelihood supplier [F1]. [[def-countable-choice]]

## Verification

**Proof technique:** direct.

1.1 In scenario one the records are $(U_i,\delta_i)=(5,0)$ for both subjects, so $d=0$, $E=10$, and $C_5=g_5(5)^2=1$. By [F1], the event likelihood factor is $e^{-10\lambda}$, whose supremum $1$ is approached only as $\lambda\downarrow0$. [A1, A2, F1, given, algebra]

1.2 In scenario two, [F2] gives $T_i>0$ almost surely, while $C_i=0$. Thus $U_i=0$ and $\delta_i=0$ almost surely for both subjects, so $d=0$, $E=0$, and $C_0=g_0(0)^2=1$. By [F1], the event likelihood factor is $1$ for every $\lambda>0$. [A1, A2, F1, F2, given, algebra]

1.3 The value $\lambda=0$ is only a formal likelihood boundary for the finite-time exponential model; including it as an actual law requires an extended event-time model that admits $T=\infty$. [A2, F1, given]

2.1 These samples have the same failure count but different likelihood maximizers: positive exposure gives only a boundary supremum, whereas zero exposure gives every positive rate as a maximizer. Thus the no-failure boundary claim requires $E>0$, in agreement with the full case distinction in [F1]. [F1, step 1.1, step 1.2, algebra]

3.1 Earlier steps 1.1, 1.2, and 1.3 establish the two boundary cases and the required positive exposure condition. [step 1.1, step 1.2, step 1.3] ∎