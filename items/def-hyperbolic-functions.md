---
id: def-hyperbolic-functions
kind: definition
title: "The six hyperbolic functions and their natural domains"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing]
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

For $x\in\mathbb R$, define
$$\sinh x:=\frac{\exp x-\exp(-x)}2,\qquad\cosh x:=\frac{\exp x+\exp(-x)}2,$$
$$\tanh x:=\frac{\sinh x}{\cosh x},\qquad\operatorname{sech}x:=\frac1{\cosh x}.$$
For $x\ne0$, define
$$\coth x:=\frac{\cosh x}{\sinh x},\qquad\operatorname{csch}x:=\frac1{\sinh x}.$$

The positivity of $\exp$ makes $\cosh x>0$ for every $x$. If $x\ne0$, then
$x\ne-x$, so strict increase of $\exp$ makes $\exp x\ne\exp(-x)$; hence
$\sinh x\ne0$. Thus all four quotients above are defined on exactly their
stated domains ([[cor-exponential-reciprocal-and-positivity]],
[[thm-exponential-is-strictly-increasing]]).
