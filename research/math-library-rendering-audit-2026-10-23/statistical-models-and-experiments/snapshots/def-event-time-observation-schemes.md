---
id: def-event-time-observation-schemes
kind: definition
title: Event-time observation, censoring, and truncation schemes
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§1.1–1.3, 1.5, 1.7–1.8 and 2.1–2.2, PDF pp. 1–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §§2.1–2.2, PDF pp. 1–17"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Jeff Lin, NTPU, Chapter 2: Survival Function, Censoring and Truncation, likelihood construction slides 92–110"
      url: "https://web.ntpu.edu.tw/~stou/class/tku/07EN02SurvBasicPPT.pdf"
---

## Definition

An **event time** is a measurable real-valued map $T$ with values in $[0,\infty)$. A **covariate** is a measurable map $Z$ into a specified standard-Borel space $(\mathcal Z,\mathcal B)$, where standard Borel means measurably isomorphic to a Polish space ([[def-standard-borel-space]]). A **censoring or inspection time** is a measurable real-valued map $C$ with values in $[0,\infty)$. When conditional laws are used, they are probability kernels $K_T(z,\cdot)$ and $K_C(z,\cdot)$ in the sense of [[def-conditional-law-given-a-random-element]] and [[def-measure-kernel-and-probability-kernel]]. They are part of the specified model; their existence for real-valued targets and factorization through standard-Borel $Z$ follow under [[def-axiom-of-choice]] from [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]] and [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]].

The notation $T\perp\!\!\!\perp C\mid\sigma(Z)$ has the meaning in [[def-conditional-independence-given-a-sigma-algebra]]: for bounded measurable $a,b$, $\mathbb E[a(T)b(C)\mid\sigma(Z)]=\mathbb E[a(T)\mid\sigma(Z)]\mathbb E[b(C)\mid\sigma(Z)]$ almost surely. It is a model assumption about the conditional observation law, not a consequence of adjusting for $Z$ and not an empirical conclusion.

Under **right censoring**, the recorded pair is $U=\min(T,C)$ and $\delta=1\{T\le C\}$. Thus $\delta=1$ records an event at $U=T$, including a tie, while $\delta=0$ records censoring at $U=C$ and implies $T>C$. **Left censoring** at a known threshold $L$ records only $T\le L$. **Interval censoring** at known endpoints $L<R$ records $L<T\le R$. **Current-status observation** at an inspection time $C$ records only $\delta_C=1\{T\le C\}$.

**Left truncation**, also called delayed entry at $L$, selects a unit into the sample only when $T>L$; observation begins after that selection. **Right truncation** at $R$ selects a unit only when $T<R$. These are selection rules before the observed sample is formed, whereas censoring coarsens an event time after sampling. The strict and weak inequalities in these definitions fix the endpoint conventions. A random observation endpoint is called noninformative here only when it is fixed by design or is generated independently of $T$ conditional on the stated covariates under a parameter-distinct law; otherwise its joint observation law must be modeled.
