---
id: rem-three-lines-and-complex-interpolation
kind: remark
title: "Hadamard three-lines and complex interpolation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-hadamard-three-lines]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. A. Tropp, Matrix Analysis, Lecture 7, §7.3"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

The normalization in [[thm-hadamard-three-lines]] is the scalar mechanism behind complex interpolation arguments. One builds a bounded holomorphic scalar function on a strip, estimates its two boundary lines, and lets the three-lines inequality interpolate the interior exponent. Turning that mechanism into an operator interpolation theorem requires additional normed-space and duality hypotheses; no such operator theorem is asserted here.
