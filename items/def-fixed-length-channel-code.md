---
id: def-fixed-length-channel-code
kind: definition
title: "Fixed-length codes for a finite DMC"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the message set and all code alphabets are finite."
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

For a finite DMC $W$, a **length-$n$ code with $M$ messages** is a pair of maps $e:[M]\to\mathcal X^n$ and $d:\mathcal Y^n\to[M]$, where $n,M\ge1$ and $[M]:=\{1,\ldots,M\}$. A message $m$ is encoded as $e(m)$, passed through the block kernel $W^n$ of [[def-discrete-memoryless-channel]], and decoded as $d(Y^n)$. The encoder and decoder are deterministic; there is no feedback, and no input-cost constraint is imposed.
