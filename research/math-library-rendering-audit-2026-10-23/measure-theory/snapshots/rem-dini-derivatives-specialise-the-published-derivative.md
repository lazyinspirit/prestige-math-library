---
id: rem-dini-derivatives-specialise-the-published-derivative
kind: remark
title: "The Dini-derivative criterion is the extended-real shadow of the library's finite derivative convention"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.6"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Remark

The library's published notion of derivative, [[def-derivative]], is a finite
real number. For a function on an interval at an interior point,
[[thm-dini-derivatives-exist-are-ordered-and-detect-differentiability]] says
that the derivative exists exactly when the upper and lower right and left Dini
derivatives all agree and their common value is finite. At an interval endpoint,
the relative-domain derivative may exist while the two Dini derivatives on the
unavailable side are not defined.

The extended-real cases are deliberately kept outside the word "derivative" in
this library. If all four Dini derivatives agree at $+\infty$ or at
$-\infty$, that is still informative, but it is not recorded as "$f'(x)$
exists" because the finite-value contract of [[def-derivative]] would then be
false.
