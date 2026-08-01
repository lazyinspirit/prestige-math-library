---
id: def-real-power
kind: definition
title: "Real powers for positive bases, with the zero-base positive-exponent convention"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-natural-logarithm, def-real-exponential-function-and-e]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Definition

For $a>0$ and $x\in\mathbb R$, define
$$a^x:=\exp(x\log a).$$
For the supplementary zero-base convention, define $0^x:=0$ when $x>0$.

The expressions $0^0$ and $0^x$ for $x<0$ are left undefined. Negative bases are not assigned arbitrary real powers.
