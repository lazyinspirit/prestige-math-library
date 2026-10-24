---
id: lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent
kind: lemma
title: "The printed all-scale probability cell-mass bound is inconsistent"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-probability-measure, prop-measure-monotonicity]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumption 3.1, clause 3; the local proof checks the literal quantifier $\epsilon>0$"
---

## Statement

Let $X$ be a nonempty measurable space, let $d\ge1$, let $c>0$, and let $\mu$ be a probability measure on $X$. There is no family of finite measurable partitions $\mathcal P_\varepsilon$ of $X$, one for every $\varepsilon>0$, for which every cell $E\in\mathcal P_\varepsilon$ satisfies $\mu(E)\ge c\varepsilon^d$.

## Statement references

[Shin et al., Assumption 3.1, clause 3: the all-$\epsilon>0$ lower cell-mass condition](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** A probability measure $\mu$ on nonempty $X$, an integer $d\ge1$, and a constant $c>0$.

[F1] A probability measure satisfies $\mu(X)=1$ ([[def-probability-measure]]).

[F2] If $E\subseteq X$ is measurable, then $\mu(E)\le\mu(X)$ ([[prop-measure-monotonicity]]).

## Proof

**Proof technique:** choose one scale at which the asserted lower bound exceeds total mass.

1.1 Choose $\varepsilon>c^{-1/d}$. Since $X$ is nonempty, any partition of $X$ has at least one cell $E$. The set $E$ is measurable and $E\subseteq X$, so [F1] and [F2] give $\mu(E)\le1$. [given, F1, F2, choose]

2.1 The asserted lower bound gives $\mu(E)\ge c\varepsilon^d>1$, contradicting step 1.1. Hence no such all-scale family of partitions exists. [given, step 1.1, algebra, contradiction] ∎ 