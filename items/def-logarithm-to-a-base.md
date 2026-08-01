---
id: def-logarithm-to-a-base
kind: definition
title: "The logarithm to a positive base other than one"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-natural-logarithm]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
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

For $b>0$ with $b\ne1$ and $x>0$, define
$$\log_b x:=\frac{\log x}{\log b}.$$

The denominator is nonzero: $\log b=0$ would imply $b=\exp(0)=1$ by the inverse identities of [[def-natural-logarithm]].
