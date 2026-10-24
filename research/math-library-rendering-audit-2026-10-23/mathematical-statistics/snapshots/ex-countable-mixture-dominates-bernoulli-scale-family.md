---
id: ex-countable-mixture-dominates-bernoulli-scale-family
kind: example
title: "Two endpoint laws dominate the Bernoulli scale family"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-probability-measure
  - def-measure-with-density
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Example

Let $\mathcal X=\{0,1\}$ and $P_\theta=\operatorname{Bernoulli}(\theta)$ for $0\le\theta\le1$. The positive mixture $Q=\tfrac12P_0+\tfrac12P_1$ dominates every $P_\theta$.

## Facts & Assumptions

**Given:** the two-point sample space and the Bernoulli family including both endpoints.

[F1] [[def-probability-measure]]: each model member and the displayed mixture is a probability measure on the two-point space.

[F2] [[def-measure-with-density]]: a nonnegative function $q$ defines the measure $q\,dQ$ by $A\mapsto\int_Aq\,dQ$.
## Proof

1.1 The endpoint laws are $P_0=\delta_0$ and $P_1=\delta_1$, so $Q=\tfrac12\delta_0+\tfrac12\delta_1$ assigns mass $1/2$ to each point. This is a probability measure. [F1, given, algebra]

2.1 For every $A\subseteq\{0,1\}$, if $Q(A)=0$ then $A=\varnothing$, so $P_\theta(A)=0$; hence $P_\theta\ll Q$. Define $q_\theta(0)=2(1-\theta)$ and $q_\theta(1)=2\theta$. For each subset $A$, $\int_Aq_\theta\,dQ=1_{\{0\in A\}}(1-\theta)+1_{\{1\in A\}}\theta=P_\theta(A)$. Thus $q_\theta=dP_\theta/dQ$, including its zero values at endpoints, and the displayed finite mixture directly dominates every member. [F1, F2, step 1.1, given, algebra] ∎
