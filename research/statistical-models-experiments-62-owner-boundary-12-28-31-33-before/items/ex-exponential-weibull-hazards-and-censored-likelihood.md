---
id: ex-exponential-weibull-hazards-and-censored-likelihood
kind: example
title: Exponential and Weibull hazards with right-censored exposure
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-countable-choice
  - def-event-time-observation-schemes
  - def-likelihood-density
  - def-measure-with-density
  - def-parametric-survival-and-reliability
  - thm-censored-exponential-likelihood-and-mle
  - thm-exponential-and-weibull-survival-laws
  - thm-jump-hazard-survival-product
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §§8.1.2 and 8.4.1.2, PDF pp. 12–17 and 159–161"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §2.2, PDF pp. 5–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
---

## Example

Compare an exponential lifetime with rate $\lambda=0.2$ and a Weibull lifetime
with shape $k=2$ and scale $\eta=3$. For right-censored exponential data,
assume the three event times are iid $\mathrm{Exp}(0.2)$ and use fixed censoring
times $C_i=5$ with observed records $(U_i,\delta_i)=(2,1),(5,0),(3,1)$. The
resulting subject pairs are iid because the censoring time is deterministic.
The two exact event times are density observations under the continuous model,
not point events of positive probability.

## Facts & Assumptions

**Given:** Countable Choice, the exponential and Weibull families above, iid event times $T_1,T_2,T_3\sim\mathrm{Exp}(0.2)$ for the likelihood calculation, an atomic lifetime law $P(T=1)=0.4$, $P(T=3)=0.6$ for the jump calculation, and the fixed censoring design and right-censored records in the Example.

[F1] Exponential and Weibull densities, survivals, and density hazards are as stated. [[thm-exponential-and-weibull-survival-laws]]

[F2] At an atom $t$, $S(t)=S(t^-)(1-q(t))$; for finite atomic support the survival values are the corresponding finite product. [[thm-jump-hazard-survival-product]]

[F3] For right-censored exponential observations with an independent, parameter-distinct censor law, the likelihood is proportional in $\lambda$ to $\lambda^d e^{-\lambda E}$; if $d>0,E>0$ its unique maximum is $d/E$. [[thm-censored-exponential-likelihood-and-mle]]

[F4] A likelihood is an explicitly chosen density version and is defined only up to reference-measure null sets; it is not the point probability of an exact continuous observation. [[def-likelihood-density]]

[A1] The censoring law is the point mass $G=\delta_5$, dominated by $\nu=\delta_5$ with density $g(5)=1$, and it has no event-rate parameter. Fixed censoring is independent of the event time. [[def-event-time-observation-schemes]], [[def-measure-with-density]]

[F5] A single-lifetime survival curve describes a nonrepairable unit; repeated failures of a repaired system require a recurrent-event model. [[def-parametric-survival-and-reliability]]

[A2] Countable Choice is used by the family and jump results [F1]–[F2]. [[def-countable-choice]]

## Verification

**Proof technique:** direct.

1.1 For $\lambda=0.2$, [F1] gives constant hazard $0.2$; its integral is $\Lambda(t)=0.2t$, and the family survival is $S(3)=e^{-0.6}$. For $k=2,\eta=3$, the density hazard is $2t/9$, which is increasing on $t>0$, and $S(3)=e^{-1}$. [A2, F1, given, algebra]

1.2 In the two-point lifetime law, $q(1)=0.4/1=0.4$ and $q(3)=0.6/0.6=1$. Thus the jump-product formula gives $S(1)=1(1-0.4)=0.6$ and $S(3)=0.6(1-1)=0$, matching the probabilities $P(T>1)$ and $P(T>3)$. [A2, F2, given, algebra]

1.3 For the fixed censoring design, $\bar G(2)=\bar G(3)=1$ and the censor-only factor for the censored record at $5$ is $1$. Therefore $d=2$, $E=2+5+3=10$, and [F3] gives $L(\lambda)\propto\lambda^2e^{-10\lambda}$ with unique maximum $\widehat\lambda=2/10=0.2$. [A1, A2, F3, given, algebra]

1.4 The single-lifetime hazards above do not summarize repeated failures after repair. [F5, given]

2.1 The event observations at $2$ and $3$ are evaluated through their Lebesgue density values. Accordingly, [F4] makes the likelihood a density evaluation, not the point probability of observing either exact time. [F1, F4, step 1.3]

3.1 Earlier steps 1.1, 1.2, 1.3, 1.4, and 2.1 verify the continuous hazard, atomic jump, censored exposure calculation, recurrent-event qualification, and density interpretation under their stated models. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4] ∎