---
id: def-epigraph-and-hypograph
kind: definition
title: "The epigraph and hypograph of a real-valued function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cartesian-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.7"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 2"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Definition

Let $A\subseteq\mathbb R^n$ and let $f:A\to\mathbb R$. The epigraph of $f:A\to\mathbb R$ is $\operatorname{epi}f=\{(x,s)\in A\times\mathbb R:f(x)\le s\}$.

Its **hypograph** is

$$\operatorname{hypo}f:=\{(x,s)\in A\times\mathbb R:s\le f(x)\}.$$

Both are subsets of the Cartesian product $A\times\mathbb R$ ([[def-cartesian-product]]). When $A$ is not closed, closedness of either set is understood relative to $A\times\mathbb R$ unless an ambient space is named.
