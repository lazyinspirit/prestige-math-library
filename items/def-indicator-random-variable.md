---
id: def-indicator-random-variable
kind: definition
title: "The indicator random variable of an event"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-real-random-variable-and-distribution]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Definition 3.1.2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Section 2.1"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

For an event $A$ in a finite probability space, its **indicator random variable** is
$$\mathbf 1_A(\omega):=\begin{cases}1,&\omega\in A,\\0,&\omega\notin A.\end{cases}$$
