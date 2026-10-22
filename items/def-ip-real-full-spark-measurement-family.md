---
id: def-ip-real-full-spark-measurement-family
kind: definition
title: Full-spark real measurement families
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-real-frame-phase-retrieval
  - def-linear-independence
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015), §3.2"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), Corollary 2.6"
      url: "https://arxiv.org/pdf/math/0412411"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $d\ge1$, $m\ge d$, and let $\Phi=(a_i)_{i\in[m]}$ be a finite family in $\mathbb R^d$. The family is **full spark** if for every list of distinct labels $i_1,\ldots,i_d\in[m]$, the vectors $a_{i_1},\ldots,a_{i_d}$ are linearly independent over $\mathbb R$.

## Definition references

[[def-ip-real-frame-phase-retrieval|Finite real measurement families and labels]]

[[def-linear-independence|Linear independence over a specified field]]

[Radu Balan, full-spark definition, §3.2](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)

[Radu Balan, Pete Casazza, and Dan Edidin, full-spark sufficiency, Corollary 2.6](https://arxiv.org/pdf/math/0412411)
