---
id: def-sine-and-cosine-by-power-series
kind: definition
title: "Sine and cosine defined by their real power series"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-power-series-and-radius-of-convergence]
justified_by: [lem-sine-and-cosine-series-converge-everywhere]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Definition

For $x\in\mathbb R$, define
$$\sin x:=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad\cos x:=\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}.$$

These are real power series in the sense of [[def-real-power-series-and-radius-of-convergence]]. Their convergence for every real argument is discharged by [[lem-sine-and-cosine-series-converge-everywhere]].
