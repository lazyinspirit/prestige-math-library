---
id: rem-exponential-roadmap-and-circularity
kind: remark
title: "The exponential roadmap and its circularity hazards"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-exponential-definition-equivalence, cor-exponential-is-a-bijection-onto-positive-reals, thm-exponential-beats-every-polynomial, thm-e-is-irrational]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Remarks

The equivalence theorem [[thm-exponential-definition-equivalence]] is an identification after independent proofs, not a list of mutually supporting definitions. The power series first defines $\exp$; the addition law is proved by an absolutely convergent Cauchy product; differentiation is then termwise. Only after those steps are the differential-equation and functional-equation characterizations invoked.

The bijection onto the positive reals ([[cor-exponential-is-a-bijection-onto-positive-reals]]), polynomial domination ([[thm-exponential-beats-every-polynomial]]), and irrationality of $e$ ([[thm-e-is-irrational]]) use no logarithm. Each result is therefore independent of an inverse function and of real exponentiation.
