---
id: def-euler-gamma-function
kind: definition
title: "Euler's Gamma function on the right half-plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: [lem-gamma-integral-converges-locally-uniformly]
forward_refs: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

For $z\in\mathbb C$ with $\operatorname{Re}z>0$, define

$$\Gamma(z):=\int_0^\infty t^{z-1}e^{-t}\,dt,$$

where for $t>0$ one uses the real logarithm convention
$t^{z-1}:=\exp((z-1)\log t)$.

The next lemma proves that the improper integral converges locally uniformly on
the open right half-plane, so this definition is well posed exactly on the
displayed domain.
