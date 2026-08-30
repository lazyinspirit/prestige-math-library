---
id: def-hankel-contour-and-power-branch
kind: definition
title: "The Hankel contour and the principal power branch"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Definition

The **Hankel contour** $H$ is the standard negatively cut contour: it runs from
$+\infty$ along the lower side of the negative real axis to a small circle about
$0$, traverses that circle counterclockwise, and returns to $+\infty$ along the
upper side of the negative real axis.

On $\mathbb C\setminus(-\infty,0]$, the **principal logarithm** is the branch
$\operatorname{Log} t$ with $-\pi<\arg t<\pi$, and the associated principal power is

$$t^{-z}:=\exp(-z\operatorname{Log} t).$$

This is the branch used in the Hankel representation formula below.
