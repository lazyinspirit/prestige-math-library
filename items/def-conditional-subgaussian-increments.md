---
id: def-conditional-subgaussian-increments
kind: definition
title: Conditionally sub-Gaussian increments
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
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
    - title: Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences, The Annals of Statistics 49(2) (2021), §§2–3
      url: https://arxiv.org/pdf/1810.08240
    - title: Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform Chernoff bounds via nonnegative supermartingales, Probability Surveys 17 (2020), Definition 1
      url: https://arxiv.org/pdf/1808.03204
---

## Definition

Assume the Axiom of Choice (AC) [[def-axiom-of-choice]] for the conditional-expectation existence convention. Let
$(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0},P)$ be a discrete filtered probability space
[[def-filtration-and-filtered-probability-space]], and let $(X_t)_{t\ge1}$ be a real-valued adapted process
[[def-adapted-and-integrable-stochastic-process]]. Fix $\mu\in\mathbb R$ and a proxy $\sigma^2>0$.
The increments are **conditionally sub-Gaussian around $\mu$ with proxy $\sigma^2$** when, for every
integer $t\ge1$ and every fixed $\lambda\in\mathbb R$, $e^{\lambda(X_t-\mu)}$ is integrable and
$$\mathbb E_P[e^{\lambda(X_t-\mu)}\mid\mathcal F_{t-1}]\le e^{\lambda^2\sigma^2/2}\quad P\text{-almost surely},$$
where conditional expectation means the class of integrable versions of
[[def-conditional-expectation-as-an-ae-class]] represented as in
[[def-conditional-expectation-given-a-sigma-algebra]]. The exceptional null set may depend on $t$ and
$\lambda$; no common null set over the uncountable set $\mathbb R$ is assumed.

The integrability of $X_t$ follows from the two cases $\lambda=1$ and $\lambda=-1$: conditional
expectation preserves the integral, so both $e^{X_t-\mu}$ and $e^{-(X_t-\mu)}$ have finite expectation,
and $|X_t-\mu|\le e^{X_t-\mu}+e^{-(X_t-\mu)}$. The proxy is an upper bound in the conditional
moment-generating-function inequality; it is not asserted to be a variance. Independence and identical
distribution of the increments are not part of this definition.
