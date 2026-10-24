---
id: thm-backdoor-adjustment-sufficiency
kind: theorem
title: "Backdoor adjustment identifies an interventional law"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-potential-outcomes-and-consistency
  - lem-backdoor-criterion-implies-counterfactual-exchangeability
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - def-axiom-of-choice
  - def-parametric-statistical-model
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - thm-identifiability-iff-constant-on-equivalence-classes
proof_strategy: direct
axiom_use: "Assume AC for regular conditional distributions, disintegration and conditional independence. No further choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-1, pp. 674–675"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, §§7.2–7.3, pp. 87–89"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC and a finite Markovian SCM on a finite DAG $G$. Let $A$ and $Y$ be
distinct observed vertices, with $A$ a countable-valued treatment and $Y$ an
observed standard-Borel outcome. Let $L$ be an observed finite vector of
standard-Borel vertices whose vertex set is disjoint from $\{A,Y\}$ and
contains no descendant of $A$. Fix an atom $a$ with $P(A=a)>0$. Suppose (i) $L$
d-separates $A$ and $Y$ in $G_{\underline A}$ and (ii) a regular conditional
propensity $e_a(L)=P(A=a\mid L)$ is strictly positive $P_L$-almost surely.
Then for every Borel set $B$ in the state space of $Y$,
$$P(Y^a\in B)=\int P(Y\in B\mid A=a,L=l)\,P_L(dl).$$
The right side depends only on the observed law. Thus the law of $Y^a$ is an
identifiable estimand on any statistical model consisting of such SCMs with
the same observed variables. If $Y$ is real and $Y^a$ is integrable, applying
the identity to bounded truncations and taking limits gives
$$E[Y^a]=\int E(Y\mid A=a,L=l)\,P_L(dl).$$
For a continuous treatment, the corresponding regular conditional formula is
identified only for $P_A$-almost every $a$; this theorem makes no pointwise
claim at a null treatment value.

## Facts & Assumptions

**Given:** The SCM, observed variables, atom $a$, backdoor separation, and positivity stated above.

[F1] The graph criterion implies $Y^a\perp A\mid L$ in the Markovian SCM. [[lem-backdoor-criterion-implies-counterfactual-exchangeability]]

[F2] Under AC, standard-Borel variables have regular conditional laws and joint laws disintegrate in either declared coordinate direction. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F3] On $\{A=a\}$ the structural response agrees with the factual outcome: $Y=Y^a$. [[def-recursive-structural-causal-model-and-dag]]

[F4] An estimand is identifiable when it is constant over parameter values with the same observational law. [[def-parametric-statistical-model]], [[def-observational-equivalence]], [[def-estimand-on-a-statistical-model]], [[def-identifiability-of-an-estimand]], [[thm-identifiability-iff-constant-on-equivalence-classes]]

## Proof
**Proof technique:** conditional exchangeability, consistency, and positivity give the adjustment functional.

**Given:** The hypotheses in the statement.

1.1 By [F1], $Y^a$ and $A$ are conditionally independent given $L$. By [F2] take regular conditional laws of $Y^a$ given $L$ and given $(A,L)$. The conditional-independence identity implies that, for $P_{A,L}$-almost every $(a',l)$, the latter law equals the former law at $l$. Since $a$ is an atom with $e_a(l)>0$ for $P_L$-almost every $l$, the measure $P_{L\mid A=a}$ is equivalent to $P_L$: its density with respect to $P_L$ is $e_a(l)/P(A=a)$, which is positive and integrates to one. Hence the conditional-law equality at $A=a$ holds for $P_L$-almost every $l$. [F1, F2, given]

2.1 On the event $A=a$, the factual structural recursion and the recursion with the $A$ equation replaced by $a$ agree at $A$. Induction down the fixed topological order shows that they agree at every descendant, in particular $Y=Y^a$. Therefore the conditional law of $Y^a$ given $A=a,L=l$ equals that of $Y$ given $A=a,L=l$ for $P_L$-almost every $l$. Combining with step 1.1 identifies the conditional law of $Y^a$ given $L=l$ with the observed conditional law in the formula. [given, F3, step 1.1, algebra]

3.1 Disintegrating the joint law of $(Y^a,L)$ by [F2] gives $P(Y^a\in B)=\int P(Y^a\in B\mid L=l)P_L(dl)$. Substitute the equality from step 2.1 to obtain the displayed formula. If two SCM parameter values induce the same observed law, the integrand kernel and $P_L$ agree outside their common null sets; positivity makes those sets null for the target integral. Hence the right side, and so the estimand, is constant on each observational-equivalence class by [F4]. The real-valued expectation formula follows by applying the distribution identity to bounded truncations of $Y$ and using integrability to pass to the limit. [step 2.1, F2, F4, algebra] ∎
