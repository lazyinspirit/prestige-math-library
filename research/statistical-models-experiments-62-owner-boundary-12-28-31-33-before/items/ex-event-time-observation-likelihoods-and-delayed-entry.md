---
id: ex-event-time-observation-likelihoods-and-delayed-entry
kind: example
title: Exponential event-time observations with censoring and delayed entry
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-event-time-observation-schemes
  - thm-likelihood-contributions-under-censoring-and-delayed-entry
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§1.2–1.3 and 2.1–2.2, PDF pp. 2–5 and 10–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §§2.1–2.2, PDF pp. 1–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Jeff Lin, NTPU, Chapter 2: Survival Function, Censoring and Truncation, likelihood construction slides 92–110"
      url: "https://web.ntpu.edu.tw/~stou/class/tku/07EN02SurvBasicPPT.pdf"
---

## Example

Let $T$ have exponential density $f_\lambda(t)=\lambda e^{-\lambda t}$ on $[0,\infty)$, where $\lambda>0$. Use fixed administrative censoring times where specified, and use delayed entry at $L=1$ only for subjects selected by $T>1$. Compute the event-model factors for right-censoring, interval observation, current status, delayed entry, and right truncation.

## Facts & Assumptions

**Given:** The exponential event-time density above; the observation conventions in [[def-event-time-observation-schemes]]; and the conditional likelihood formulas in [[thm-likelihood-contributions-under-censoring-and-delayed-entry]].

[F1] Right censoring records $U=\min(T,C)$ and $\delta=1\{T\le C\}$; interval observation records $L<T\le R$; current status records $1\{T\le C\}$; delayed entry selects $T>L$. [[def-event-time-observation-schemes]]

[F2] Under the stated continuous event law, the right-censored event term is $f_\lambda(U)^\delta S_\lambda(U)^{1-\delta}$; the interval term is $F_\lambda(R)-F_\lambda(L)$; the current-status term is $F_\lambda(C)^\delta S_\lambda(C)^{1-\delta}$; delayed entry divides the event term by $S_\lambda(L)$. [[thm-likelihood-contributions-under-censoring-and-delayed-entry]]

## Verification

1.1 Integrating the density gives $F_\lambda(t)=1-e^{-\lambda t}$ and $S_\lambda(t)=e^{-\lambda t}$ for $t\ge0$; in particular $F_\lambda(0)=0$ and $S_\lambda(0)=1$. [given, algebra]

2.1 With fixed censoring time $C=2$, an event observed at $U=1$ has event factor $f_\lambda(1)=\lambda e^{-\lambda}$ and censor factor $1$. A censored observation at $U=2$ has event factor $S_\lambda(2)=e^{-2\lambda}$ and censor factor $1$ relative to the point-mass censoring law. [F1, F2, step 1.1]

2.2 An interval observation $1<T\le2$ has probability $F_\lambda(2)-F_\lambda(1)=(1-e^{-2\lambda})-(1-e^{-\lambda})=e^{-\lambda}-e^{-2\lambda}$. [F2, step 1.1, algebra]

2.3 At fixed inspection time $C=1$, current status $\delta=1$ has event factor $F_\lambda(1)=1-e^{-\lambda}$, and $\delta=0$ has event factor $S_\lambda(1)=e^{-\lambda}$. [F2, step 1.1, algebra]

2.4 After delayed entry $L=1$, with fixed censoring time $C=3$, an event observed at $U=2$ has conditional event factor $f_\lambda(2)/S_\lambda(1)=\lambda e^{-2\lambda}/e^{-\lambda}=\lambda e^{-\lambda}$. A censored observation at $U=3$ has conditional event factor $S_\lambda(3)/S_\lambda(1)=e^{-2\lambda}$. [F2, step 1.1, algebra]

2.5 If instead the sample is right-truncated at $R=2$, the selected-sample density is $\lambda e^{-\lambda t}/(1-e^{-2\lambda})$ for $0\le t<2$, since $P(T<2)=F_\lambda(2)=1-e^{-2\lambda}$. This is a conditional event-time density, not a right-censoring contribution. [F2, step 1.1, algebra]

3.1 The censoring and truncation examples use different event factors: ordinary right censoring uses $f_\lambda(u)$ or $S_\lambda(u)$, delayed entry divides by $S_\lambda(1)$, and right truncation divides by $P(T<2)$. [step 2.1, step 2.4, step 2.5] ∎