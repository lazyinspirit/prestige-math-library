---
id: rem-the-image-preimage-adjunctions-explain-the-published-preservation-laws
kind: remark
title: 'The image-preimage adjunctions explain the set-operation preservation laws'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets, thm-preimages-commute-with-unions-intersections-and-differences, prop-images-of-unions-and-intersections-under-a-function]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.8'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

In [[thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets]], $f_!$ is a left adjoint, so its preservation of joins recovers the union law for images in [[prop-images-of-unions-and-intersections-under-a-function]]. The middle functor $f^{-1}$ is both a left and a right adjoint, so it preserves both joins and meets, agreeing with the union and intersection laws in [[thm-preimages-commute-with-unions-intersections-and-differences]]. The direct set proofs remain stronger as concrete formulas, including the difference law, which is not a bare consequence of adjointness.
