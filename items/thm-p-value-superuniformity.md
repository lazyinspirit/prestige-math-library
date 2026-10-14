---
id: thm-p-value-superuniformity
kind: theorem
title: "Valid p-values yield level tests for nonempty disjoint alternatives"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-p-value
  - def-test-size-and-power
  - def-randomized-test
  - def-measurable-function-between-measurable-spaces
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-of-an-indicator-is-probability
  - def-probability-measure
  - lem-measurable-rejection-function-defines-randomized-test
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Karl B. Gregory, USC STAT 713 Lecture 10: Tests of Hypotheses, Size, Power, and p-values, PDF pp. 17–20"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_10_slides_annotated.pdf"
---

## Statement

Let $p$ be a valid p-value for a nonempty null hypothesis $\Theta_0$ in a
statistical experiment. For every $\alpha\in[0,1]$, the deterministic test
with rejection function
$$\varphi_\alpha(x)=\mathbf 1_{\{p(x)\le\alpha\}}$$
satisfies
$$P_\theta(p(X)\le\alpha)=E_\theta[\varphi_\alpha(X)]\le\alpha \qquad(\theta\in\Theta_0).$$
Consequently, whenever a nonempty alternative hypothesis
$\Theta_1\subseteq\Theta\setminus\Theta_0$ is specified, this test has size
at most $\alpha$ and hence level $\alpha$ in the sense of
[[def-test-size-and-power]].

## Facts & Assumptions

**Given:** An experiment, a valid p-value statistic $p:\mathcal X\to[0,1]$ for $\Theta_0\ne\varnothing$, and $\alpha\in[0,1]$. The pointwise bound does not require an alternative hypothesis.

[F1] [[def-p-value]]: validity means $P_\theta(\{x:p(x)\le u\})\le u$ for every $\theta\in\Theta_0$ and $u\in[0,1]$.

[F2] [[def-measurable-function-between-measurable-spaces]]: a statistic is measurable when inverse images of Borel sets are measurable.

[F3] [[lem-measurable-rejection-function-defines-randomized-test]]: every measurable $\varphi:\mathcal X\to[0,1]$ defines a binary randomized test with rejection function $\varphi$.

[F4] [[cor-expectation-of-an-indicator-is-probability]]: the expectation of an event indicator under $P_\theta$ equals the probability of that event.

[F5] [[def-test-size-and-power]]: when a nonempty alternative disjoint from $\Theta_0$ is specified, size is $\sup_{\theta\in\Theta_0}E_\theta[\varphi(X)]$ and level $\alpha$ means size at most $\alpha$.

## Proof

**Proof technique:** direct.

1.1 Let $A_\alpha=\{x:p(x)\le\alpha\}$. This event is measurable because $p$ is a statistic and $[0,\alpha]$ is Borel in $[0,1]$. Thus $\varphi_\alpha=\mathbf 1_{A_\alpha}$ is a measurable map into $[0,1]$, and [F3] supplies a randomized test with this rejection function. Since $\varphi_\alpha$ takes only the values $0$ and $1$, that kernel assigns probability one to the corresponding action, so the test is deterministic. [given, F2, F3, construct]

2.1 For every $\theta\in\Theta_0$, [F4] and validity [F1] give $E_\theta[\varphi_\alpha(X)]=P_\theta(A_\alpha)\le\alpha$, proving the pointwise bound. If a nonempty $\Theta_1\subseteq\Theta\setminus\Theta_0$ is specified, taking the supremum over the nonempty set $\Theta_0$ gives size at most $\alpha$ by [F5], and therefore level $\alpha$. [F1, F4, F5, step 1.1, algebra] ∎
