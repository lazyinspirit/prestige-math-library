---
id: def-fixed-length-channel-code-errors
kind: definition
title: "Average and maximal error of a fixed-length code"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-fixed-length-channel-code, def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; errors are finite sums over messages and outputs."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §§8.7.2–8.7.3, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Definition

For a length-$n$ code $(e,d)$, let
$$e_m:=W^n\{y^n:d(y^n)\ne m\mid e(m)\}.$$
Its **average error** is $\varepsilon_{\rm av}:=M^{-1}\sum_{m=1}^M e_m$, corresponding to a uniform message, and its **maximal error** is $\varepsilon_{\max}:=\max_{1\le m\le M}e_m$.
