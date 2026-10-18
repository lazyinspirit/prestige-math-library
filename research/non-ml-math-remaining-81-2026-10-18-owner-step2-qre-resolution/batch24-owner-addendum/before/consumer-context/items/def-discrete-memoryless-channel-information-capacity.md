---
id: def-discrete-memoryless-channel-information-capacity
kind: definition
title: "Single-letter information capacity of a finite DMC"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel, def-finite-probability-vector, def-it-finite-mutual-information]
justified_by: [lem-discrete-memoryless-channel-capacity-is-attained]
aliases: []
axiom_use: "No choice axiom is used; the input simplex and all probability laws are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §§19.1–19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §§8.7.1–8.7.2, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Definition

For an input probability vector $P_X$ on $\mathcal X$ ([[def-finite-probability-vector]]), let $P_{XY}(x,y):=P_X(x)W(y\mid x)$ and $Q_{P_X}(y):=\sum_xP_X(x)W(y\mid x)$. Write $I(P_X;W):=I(X;Y)$ for this joint law, using [[def-it-finite-mutual-information]]. The **single-letter information capacity** is
$$C(W):=\sup_{P_X} I(P_X;W),$$
measured in nats per channel use. The finite-dimensional maximum is attained, as proved in [[lem-discrete-memoryless-channel-capacity-is-attained]].
