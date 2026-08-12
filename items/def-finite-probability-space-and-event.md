---
id: def-finite-probability-space-and-event
kind: definition
title: "Finite probability spaces, outcome weights, events, and event probabilities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-finite-cardinality, def-finite-sum, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 1.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Sections 1.3.2-1.3.3"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Definition

A **finite probability space** is a pair $(\Omega,w)$ consisting of a finite set $\Omega$ and a function $w:\Omega\to\mathbb R$ such that $w(\omega)\ge0$ for every $\omega\in\Omega$ and
$$\sum_{\omega\in\Omega}w(\omega)=1.$$
The elements of $\Omega$ are **outcomes**. Every subset $A\subseteq\Omega$ is an **event**, and its probability is
$$\mathbb P(A):=\sum_{\omega\in A}w(\omega).$$

An outcome of weight zero remains an outcome. Thus an event can be nonempty and still have probability zero.
