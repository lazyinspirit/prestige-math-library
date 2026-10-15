---
id: def-poisson-law
kind: definition
title: "Exposure-parameterized Poisson law"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
proof_strategy: definition
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapter 1"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Definition

For exposure $e\ge0$ and rate $\lambda>0$, define
$Y\sim\operatorname{Pois}(e\lambda)$ to have [[def-scalar-poisson-count-law|the scalar Poisson count law]] with
parameter $e\lambda$. Thus for $e>0$,
$$\mathbb P(Y=y\mid\lambda,e)=e^{-e\lambda}\frac{(e\lambda)^y}{y!}, \qquad y\in\mathbb N_0,$$
with $0^0=1$; when $e=0$ this is the point mass at $y=0$. The law is normalized
by [[lem-poisson-count-law-normalization-and-moments]]. A zero-exposure
positive count has likelihood zero.
