---
id: def-discrete-memoryless-channel
kind: definition
title: "Finite discrete memoryless channels"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-channel-sequence, def-finite-stochastic-kernel]
justified_by: [lem-discrete-memoryless-channel-block-kernels-are-stochastic]
aliases: []
axiom_use: "No choice axiom is used; all alphabets and products in this definition are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.1, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Definition

A **finite discrete memoryless channel (DMC)** is the channel sequence [[def-channel-sequence]] with fixed finite nonempty input and output alphabets $\mathcal X,\mathcal Y$ (with every subset measurable) and one stochastic kernel $W(y\mid x)$ from $\mathcal X$ to $\mathcal Y$ ([[def-finite-stochastic-kernel]]). At every blocklength its input and output alphabets are $\mathcal X^n,\mathcal Y^n$, and its block kernel is
$$W^n(y^n\mid x^n):=\prod_{i=1}^n W(y_i\mid x_i).$$
Thus the same single-use transition law is applied independently at each coordinate, conditional on the input word. This page imposes no feedback or input-cost constraint.
