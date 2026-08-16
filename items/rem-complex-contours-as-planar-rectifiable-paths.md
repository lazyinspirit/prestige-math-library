---
id: rem-complex-contours-as-planar-rectifiable-paths
kind: remark
title: "Complex contours as planar rectifiable paths: the Euclidean, coordinate-BV, and piecewise-C1 dictionaries"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-path-polygonal-length-and-rectifiability-in-rn, thm-rectifiable-iff-coordinate-functions-have-bounded-variation, cor-piecewise-c1-paths-have-additive-speed-integral-length]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

A complex path $\gamma=x+iy:[a,b]\to\mathbb C$ is read as the planar path $(x,y):[a,b]\to\mathbb R^2$ through [[rem-complex-plane-euclidean-dictionary]]. Its polygonal length and rectifiability are therefore those of [[def-path-polygonal-length-and-rectifiability-in-rn]]. By [[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]], it is rectifiable exactly when both $x$ and $y$ have bounded variation. Every piecewise-$C^1$ complex path is rectifiable, and [[cor-piecewise-c1-paths-have-additive-speed-integral-length]] gives its length as the sum of the speed integrals over its smooth pieces, allowing corners and zero-speed pieces.
