---
id: thm-unlabeled-law-alone-does-not-identify-labels
kind: theorem
title: "The unlabeled marginal alone does not identify labels"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $\mathcal X$ be a finite nonempty feature set with its discrete sigma-algebra, and let $\mu:\mathcal X\to[0,1]$ satisfy $\sum_{x\in\mathcal X}\mu(x)=1$. Let $\mathcal S\subsetneq\mathcal X$ be a nonempty set of observed labeled inputs, and choose $x_\star\in\mathcal X\setminus\mathcal S$ with $q=\mu(x_\star)>0$. Let $h_0,h_1:\mathcal X\to\{0,1\}$ agree on $\mathcal X\setminus\{x_\star\}$ and differ at $x_\star$. For $j\in\{0,1\}$, let $P_j$ be the joint law assigning mass $\mu(x)$ to $(x,h_j(x))$. Both laws have the same feature marginal and the same observed labels on $\mathcal S$. Let $\mathcal H=\{g:\mathcal X\to\{0,1\}\}$, and let $Q:\mathcal H\to[0,1]$ satisfy $\sum_{g\in\mathcal H}Q(g)=1$, so it is a probability vector; take the same $Q$ under both laws, as a predictor rule using their common information must do. For the zero-one population risk
$$R_{P_j}(g)=\sum_{x\in\mathcal X}\mu(x)\mathbf 1\{g(x)\ne h_j(x)\},$$
the expected risks satisfy
$$\max_{j\in\{0,1\}}\sum_{g\in\mathcal H}Q(g)R_{P_j}(g)\ge\frac q2.$$

## Statement references

[[def-supervised-learning-problem]]: a prediction problem supplies a joint law, measurable predictors, and a measurable loss.

[[def-population-and-empirical-risk]]: population risk is the integral of the loss under the joint law; for these finite discrete laws it is the displayed finite sum.

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 1 §§1.3.2–1.3.3](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf)

## Facts & Assumptions

**Given:** A finite discrete feature set, a probability mass function $\mu$, a nonempty observed-input set $\mathcal S$, an unseen atom $x_\star\notin\mathcal S$ with positive mass $q$, two binary label functions that differ only at $x_\star$, and a common randomized predictor distribution $Q$. Prove the worst of the two expected zero-one population risks is at least $q/2$.

[A1] The feature set $\mathcal X$ is finite and discrete, $\mu$ is a probability mass function, $x_\star\notin\mathcal S$ has mass $q>0$, and $h_0,h_1$ agree away from $x_\star$ and differ there.

[F1] [[def-supervised-learning-problem]]: a supervised problem has measurable instance and label spaces, a probability law on their product, measurable predictors, and a nonnegative measurable loss. Every map on a finite discrete feature set is measurable.

[F2] [[def-population-and-empirical-risk]]: $R_P(g)$ is the integral of the loss $\ell(g(x),y)$ under the joint law $P$; on the finite laws here with zero-one loss it equals the sum in the Statement.

## Proof

1.1 For each $j$, assigning mass $\mu(x)$ to $(x,h_j(x))$ defines a probability law because the masses are nonnegative and sum to one. The feature marginal is $\mu$ for both laws, and $h_0=h_1$ on $\mathcal S$, so the observed labeled input and unlabeled marginal are identical. Finiteness and the discrete sigma-algebra make every predictor and zero-one loss measurable, so [F2] gives the risk formula in the Statement. [given, A1, F1, F2]

2.1 Fix $g\in\mathcal H$. At each $x\ne x_\star$, the two risk summands agree because $h_0(x)=h_1(x)$. At $x_\star$, the binary labels differ, so exactly one of the two indicators $\mathbf1\{g(x_\star)\ne h_0(x_\star)\}$ and $\mathbf1\{g(x_\star)\ne h_1(x_\star)\}$ equals one. Therefore $R_{P_0}(g)+R_{P_1}(g)\ge q$. [given, A1, step 1.1, algebra]

3.1 Multiply the inequality in step 2.1 by $Q(g)\ge0$ and sum over the finite class $\mathcal H$. Since $\sum_gQ(g)=1$, the two expected risks sum to at least $q$, so at least one is at least $q/2$. This proves the claimed maximum. [given, step 2.1, algebra] ∎
