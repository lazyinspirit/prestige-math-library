---
id: cex-informative-censoring-does-not-identify-event-law
kind: counterexample
title: Informative censoring can hide distinct event-time laws
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-event-time-observation-schemes
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§1.2.2–1.3 and 1.7, PDF pp. 3–5 and 9"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §2.1, PDF pp. 1–4"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
---

## Statement refuted

If two studies have the same observed right-censored law of $(U,\delta)$, then they have the same event-time law of $T$, even when censoring may depend on $T$.

## Facts & Assumptions

**Given:** Right-censored data are $U=\min(T,C)$ and $\delta=1\{T\le C\}$ as in [[def-event-time-observation-schemes]]. In Model A, $P(T=1)=P(T=3)=1/2$, with $C=4$ when $T=1$ and $C=1/2$ when $T=3$. In Model B, $P(T=1)=P(T=2)=1/2$, with $C=4$ when $T=1$ and $C=1/2$ when $T=2$. In both models, a separate study selects $T\sim\mathrm{Unif}(0,3)$ subjects only when $T>1$.

[F1] Right-censored observation records the minimum and the event indicator; left truncation selects only individuals with $T>L$. Informative censoring requires its joint observation law to be modeled. [[def-event-time-observation-schemes]]

[A1] Model A and Model B are the two finite joint laws for $(T,C)$ specified in **Given**.

[A2] The separate truncation example has unconditional density $1/3$ on $(0,3)$ and inclusion event $T>1$.

## Counterexample

1.1 In Model A, the outcome $T=1$ has probability $1/2$ and gives $(U,\delta)=(1,1)$ because $C=4$. The outcome $T=3$ has probability $1/2$ and gives $(U,\delta)=(1/2,0)$ because $C=1/2<T$. [F1, A1, algebra]

1.2 In Model B, $T=1$ again gives $(U,\delta)=(1,1)$ with probability $1/2$, while $T=2$ gives $(U,\delta)=(1/2,0)$ with probability $1/2$. [F1, A1, algebra]

1.3 For the truncation example, $P(T>1)=\int_1^3(1/3)\,dt=2/3$. [A2, algebra]

2.1 Both observed laws assign probability $1/2$ to each of $(1,1)$ and $(1/2,0)$, although the censoring time is a deterministic function of $T$ in each model. [step 1.1, step 1.2, algebra]

2.2 Conditional on inclusion, the event-time density is $(1/3)/(2/3)=1/2$ on $(1,3)$ and zero outside, whereas the unselected density is $1/3$ on $(0,3)$. Thus left truncation changes the sampled event-time law. [A2, step 1.3, algebra]

3.1 The event-time laws differ: $P_A(T\le2)=1/2$ and $P_B(T\le2)=1$. Equal observed laws with different event-time laws contradict the refuted statement. [step 2.1, A1, algebra]

4.1 The finite censoring construction refutes the claim about equal observed laws, and the uniform calculation shows that truncation changes the sampling distribution by selection. Informative censoring requires its joint observation law to be modeled. [step 3.1, step 2.2, F1] ∎
