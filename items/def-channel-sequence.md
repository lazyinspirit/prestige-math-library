---
id: def-channel-sequence
kind: definition
title: "Channel sequences"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-measure-kernel-and-probability-kernel]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; this definition quantifies over supplied kernels and selects no versions."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
---

## Definition

For each integer $n\ge1$, let $(\mathcal X_n,\mathcal A_n)$ and $(\mathcal Y_n,\mathcal B_n)$ be measurable spaces and let $W_n$ be a probability kernel from the first space to the second ([[def-measure-kernel-and-probability-kernel]]). The sequence $(W_n)_{n\ge1}$ is a **channel sequence**, and $n$ is its blocklength. A length-$n$ transmission sends an input in $\mathcal X_n$ and produces an output with conditional law $W_n$. No consistency between different blocklengths is assumed.
