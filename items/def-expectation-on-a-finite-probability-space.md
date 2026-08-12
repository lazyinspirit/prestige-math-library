---
id: def-expectation-on-a-finite-probability-space
kind: definition
title: "Expectation of a real random variable on a finite probability space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-real-random-variable-and-distribution, def-finite-sum]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "M. Bucic, Probabilistic Method, Definition A.5"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

The **expectation** of a real random variable $X$ on a finite probability space $(\Omega,w)$ is
$$\mathbb E[X]:=\sum_{\omega\in\Omega}X(\omega)w(\omega).$$
For a real constant $c$, the notation $c$ also denotes the constant random variable $\omega\mapsto c$.
