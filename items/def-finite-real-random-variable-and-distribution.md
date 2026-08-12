---
id: def-finite-real-random-variable-and-distribution
kind: definition
title: "Real random variables on finite probability spaces and their finite distributions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-probability-space-and-event, def-function, def-finite-sum, thm-finite-additivity-of-probability]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Definition 1.1.6"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Definition A.4"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

A **real random variable** on a finite probability space $(\Omega,w)$ is a function $X:\Omega\to\mathbb R$. Its range $X(\Omega)$ is finite. The **distribution** or **law** of $X$ is the finite probability space on $X(\Omega)$ with
$$\mathbb P_X(x):=\mathbb P(\{\omega\in\Omega:X(\omega)=x\}).$$
The weights $\mathbb P_X(x)$ are nonnegative and sum to $1$ because the fibres of $X$ form a finite partition of $\Omega$ ([[thm-finite-additivity-of-probability]]).
