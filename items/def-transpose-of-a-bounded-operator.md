---
id: def-transpose-of-a-bounded-operator
kind: definition
title: "The transpose of a bounded operator"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "lem-composition-operator-norm-inequality"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, §4.1.1, Definition 4.1, p.172"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $$T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$$ The duals are [[def-dual-space-of-a-normed-space]]. Composition is bounded by [[lem-composition-operator-norm-inequality]], so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.
