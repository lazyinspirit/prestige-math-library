---
id: cex-unseparated-m-estimator-is-inconsistent
kind: counterexample
title: "An exact M-estimator can fail without population separation"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-consistency-in-probability, def-identically-distributed-and-iid-random-variables, def-m-estimator, def-metric-space, lem-real-line-is-a-metric-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, separation hypothesis and proof, PDF pp. 6–8"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
---

## Statement refuted

Without a separated population maximizer, every exact empirical M-estimator is still consistent for any fixed population maximizer.

## Facts & Assumptions

**Given:** The sample space $\mathcal X=\{0\}$ with its full power-set sigma-algebra and IID observations with $P(X=0)=1$; the parameter space is $\Theta=\{0,1\}$ with distance $d(\theta,\eta)=|\theta-\eta|$, and $m_\theta(x)=0$ for both parameters.

[F1] [[def-m-estimator]]: An exact M-estimator is a measurable estimator that attains the empirical criterion maximum.

[F2] [[def-consistency-in-probability]]: Consistency for a fixed target requires the probability of each fixed positive metric error to tend to zero.

[F3] [[lem-real-line-is-a-metric-space]]: The usual metric on $\mathbb R$ is $d(x,y)=|x-y|$; on $\Theta=\{0,1\}$ the distance used here is its restriction, which remains a metric because the metric axioms persist on subsets.

[F4] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence of the whole family.

[A1] The observations are IID with common law $\delta_0$, and the fixed population maximizer under consideration is $\theta_0=0$.

## Counterexample

**Given:** The objects and hypotheses specified above.

1.1 By [A1] and [F4], every observation equals $0$ almost surely and the sequence is IID. Thus $P_nm_0=P_nm_1=Pm_0=Pm_1=0$ for every $n$. Both parameters are population maximizers, and every data-measurable choice is an exact M-estimator by [F1]. The uniform error is identically zero, but the population maximum is not separated from the other parameter. [A1, F1, F4, given]

2.1 Choose the deterministic estimator $\hat\theta_n=1$ for odd $n$ and $\hat\theta_n=0$ for even $n$. For each $n$ it is a constant function of the data, so every inverse image is empty or the full sample space and it is measurable; by step 1.1 it is exact. For the fixed population maximizer $\theta_0=0$ and $\varepsilon=1/2$, $P\{d(\hat\theta_n,\theta_0)>\varepsilon\}$ equals $1$ for odd $n$ and $0$ for even $n$, so the error probability has no zero limit. [A1, F1, F2, F3, given, step 1.1]

3.1 This exact M-estimator is not consistent for $\theta_0=0$ by [F2]. Thus the unseparated population maximum does not guarantee consistency, even when the empirical criterion equals its population version exactly. [F2, step 2.1, given] ∎
