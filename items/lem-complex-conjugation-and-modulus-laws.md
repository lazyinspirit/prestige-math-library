---
id: lem-complex-conjugation-and-modulus-laws
kind: lemma
title: "Conjugation laws, $z\\overline z=|z|^2$, multiplicativity of modulus, and the triangle inequality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, thm-complex-numbers-form-a-field, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For complex $z,w$, conjugation respects sums and products, $z\overline z=|z|^2$, $|zw|=|z||w|$, and $|z+w|\le|z|+|w|$. The conventions and prerequisite facts used below are recorded in [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-complex-numbers-form-a-field]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]].

## Facts & Assumptions

**Given:** $z=x+iy$ and $w=u+iv$.

## Proof

**Proof technique:** direct.

1.1 Expand the coordinate definitions to prove the conjugation laws and $z\overline z=x^2+y^2=|z|^2$. [algebra]

1.2 Squaring both nonnegative sides proves multiplicativity of the modulus. [algebra]

2.1 The Euclidean norm triangle inequality on $\mathbb R^2$ is exactly $|z+w|\le|z|+|w|$. [given] ∎
