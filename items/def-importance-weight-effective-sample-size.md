---
id: def-importance-weight-effective-sample-size
kind: definition
title: Weight-based effective sample size
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [alg-self-normalized-importance-sampling]
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
    - title: "Monte Carlo Methods course notes, Chapter 6 §6.2, equations 6.41–6.43"
      url: "https://archive.math.arizona.edu/tgk/mc/book_chap6.pdf"
    - title: "Data Science and Statistical Modelling, Chapter 5 §5.3.3"
      url: "https://www.louisaslett.com/Courses/DSSM/notes/simulation.html"
    - title: "Thomas B. Schön and Fredrik Lindsten, Learning of dynamical systems: Particle filters and Markov chain methods, Chapter 4 §4.3.3"
      url: "https://www.ida.liu.se/divisions/stima/fokurser/smc2025/material/SMC2017.pdf"
---

## Definition

For the nonnegative importance weights $w_1,\ldots,w_n$ in [[alg-self-normalized-importance-sampling]], with $n\ge1$ and at least one positive weight, define the **weight-based effective sample size** by
$$\operatorname{ESS}_w:=\frac{(\sum_{i=1}^nw_i)^2}{\sum_{i=1}^nw_i^2}.$$
It is a diagnostic of observed weight imbalance. It depends only on the weights, not on the integrand, proposal regions that were never sampled, or target mass outside the observed sample. It does not certify support coverage, finite variance, accuracy, or convergence.
