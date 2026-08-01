---
id: def-natural-logarithm
kind: definition
title: "The natural logarithm as the inverse of the exponential function"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-exponential-is-a-bijection-onto-positive-reals]
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

For $x>0$, define $\log x$ to be the unique real $y$ such that $\exp(y)=x$. This is well-defined because [[cor-exponential-is-a-bijection-onto-positive-reals]] states that $\exp:\mathbb R\to(0,\infty)$ is a bijection.

Thus $\log:(0,\infty)\to\mathbb R$ is the inverse function of $\exp$. In particular, $\log(\exp y)=y$ for every $y\in\mathbb R$ and $\exp(\log x)=x$ for every $x>0$.

## Remarks

The domain is exactly $(0,\infty)$. This definition assigns no real logarithm to $0$ or to a negative number.
