---
id: rem-triangulated-sign-convention
kind: remark
title: "The triangulated rotation-sign convention"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rotation-of-a-triangle, def-triangulated-category]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, equation 13.3.2.1"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

The library uses $-f[1]$ as the last map of a left rotation. Consequently the
unrolled sequence has the signed translated arrows
$$\cdots\to Z[-1]\xrightarrow{-h[-1]}X\xrightarrow fY\xrightarrow gZ\xrightarrow hX[1]\xrightarrow{-f[1]}Y[1]\to\cdots.$$
Imported cone and long-exact-Hom formulas are read after translating to this
convention.
