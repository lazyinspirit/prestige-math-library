---
id: def-dirichlet-series
kind: definition
title: "Dirichlet series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-exponential, def-natural-logarithm]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.1"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Definition

A **Dirichlet series** is a series of the form

$$D(s) = \sum_{n \ge 1} a_n n^{-s},$$

where $s \in \mathbb C$, each $a_n \in \mathbb C$, and

$$n^{-s} := \exp(-s \log n)$$

uses the real logarithm of the positive integer $n$.
