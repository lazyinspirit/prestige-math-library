---
id: def-moment-generating-function
kind: definition
title: "The moment generating function $M_X(t)=\\mathbb E[e^{tX}]$ on a finite probability space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-expectation-on-a-finite-probability-space, def-real-exponential-function-and-e]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 4.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Definition

For a finite real random variable $X$, its **moment generating function** is the everywhere-defined function
$$M_X(t):=\mathbb E[\exp(tX)],\qquad t\in\mathbb R.$$
Finiteness of the outcome space makes this a finite sum, so no convergence hypothesis is needed.
