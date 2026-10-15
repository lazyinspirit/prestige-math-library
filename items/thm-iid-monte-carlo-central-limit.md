---
id: thm-iid-monte-carlo-central-limit
title: "Lindeberg–Lévy limit for the IID Monte Carlo mean"
kind: theorem
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-monte-carlo-estimators
  - def-identically-distributed-and-iid-random-variables
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-continuous-mapping-theorem
justified_by: []
proof_strategy: direct
axiom_use: "AC is explicitly assumed and is inherited from thm-lindeberg-levy-iid-central-limit-theorem and the library normal-law definition; no additional choice is used in the Monte Carlo rewrite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(Y_i)_{i\ge1}$ be a real IID sequence with $\mu=\mathbb E[Y_1]$ and $0<\sigma^2:=\operatorname{Var}(Y_1)<\infty$. Then
$$\sqrt n\,(\bar Y_n-\mu)\Rightarrow N(0,\sigma^2).$$

## Facts & Assumptions

**Given:** AC, a real IID sequence $(Y_i)_{i\ge1}$, and $\mu=\mathbb E[Y_1]$ with $0<\sigma^2:=\operatorname{Var}(Y_1)<\infty$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function; the present theorem assumes this axiom.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means that all variables have the same law and the whole family is mutually independent.

[F2] [[def-iid-monte-carlo-estimators]]: $\bar Y_n=n^{-1}\sum_{i=1}^nY_i$.

[F3] [[thm-lindeberg-levy-iid-central-limit-theorem]]: Assuming AC, for real IID variables with mean $m$ and variance $0<\sigma^2<\infty$, $(\sum_{i=1}^nY_i-nm)/(\sigma\sqrt n)\Rightarrow N(0,1)$.

[F4] [[thm-continuous-mapping-theorem]]: If $X_n\Rightarrow X$ and $g$ is continuous, then $g(X_n)\Rightarrow g(X)$.

[F5] [[def-standard-normal-and-normal-laws]]: Assuming AC, $N(m,\sigma^2)$ is the law of $x\mapsto m+\sigma x$ under $N(0,1)$.

## Proof

1.1 The hypotheses of [F3] hold by [A1], [F1], and the given positive finite variance. Since [F2] gives $\sum_{i=1}^nY_i=n\bar Y_n$, [F3] yields $Z_n:=\sqrt n(\bar Y_n-\mu)/\sigma\Rightarrow N(0,1)$. [A1, F1, F2, F3, given, algebra]

2.1 The map $x\mapsto\sigma x$ is continuous because $\sigma>0$. Applying [F4] to step 1.1 gives $\sigma Z_n\Rightarrow\sigma Z$ for $Z\sim N(0,1)$. By [A1] and [F5], the law of $\sigma Z$ is $N(0,\sigma^2)$, and $\sigma Z_n=\sqrt n(\bar Y_n-\mu)$. This is the stated convergence. [A1, F4, F5, step 1.1, algebra] ∎
