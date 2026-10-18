---
id: def-discrete-memoryless-channel-operational-capacity
kind: definition
title: "Average-error and maximal-error DMC capacities"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; capacity is defined by sequences of finite codes."
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

A rate $R\ge0$ is **average-error achievable** for $W$ if there are length-$n$ codes for all sufficiently large $n$ with
$$\liminf_{n\to\infty}\frac{\ln M_n}{n}\ge R,\qquad \varepsilon_{\rm av}(n)\longrightarrow0.$$
It is **maximal-error achievable** if the same condition holds with $\varepsilon_{\max}(n)\to0$. Define $C_{\rm av}(W)$ and $C_{\max}(W)$ as the suprema of the respective achievable-rate sets. Rates use nats per channel use.
