---
id: def-uniform-finite-probability-space
kind: definition
title: "The uniform probability space on a nonempty finite set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-probability-space-and-event, def-finite-cardinality, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Example A.2"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

Let $\Omega$ be a nonempty finite set. Its **uniform probability space** assigns every $\omega\in\Omega$ the weight $1/|\Omega|$. Thus every event $A\subseteq\Omega$ has
$$\mathbb P(A)=\frac{|A|}{|\Omega|}.$$
Nonemptiness is required so that the denominator is positive.
