---
id: rem-biholomorphisms-are-conformal-with-holomorphic-inverse
kind: remark
title: "Biholomorphisms are conformal and have holomorphic inverse"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-biholomorphic-map, thm-holomorphic-inverse-function-theorem]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §2.3 Conformal Mapping"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Remark

A biholomorphism is holomorphic and has a holomorphic inverse by
[[def-biholomorphic-map]], so it is **conformal** in the orientation-preserving
sense this page uses: holomorphic with nowhere-vanishing derivative. The
derivative cannot vanish at any point of its domain, because the local inverse
supplied by [[thm-holomorphic-inverse-function-theorem]] has derivative
$g'(w)=1/f'(g(w))$; a vanishing $f'$ would make that expression undefined.
Such a map preserves the magnitude and the orientation of angles between
tangent directions at every point.

The convention here is deliberately orientation-sensitive: complex conjugation
$z\mapsto\overline z$ preserves angle magnitudes but reverses orientation, so it
is **not** conformal in this library's sense. That exclusion is exercised by the
companion page's conjugation counterexample.
