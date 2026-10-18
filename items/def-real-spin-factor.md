---
id: def-real-spin-factor
kind: definition
title: Real spin-factor product
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 1
deps: [def-inner-product-space, def-jordan-algebra]
justified_by: [thm-real-spin-factor-is-jordan]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John C. Baez, The Octonions, §3.4, PDF pp. 27–28"
      url: https://arxiv.org/pdf/math/0105155v4
    - title: "Holger P. Petersson, Albert Algebras, §4.1"
      url: https://www.fieldsinstitute.ca/programs/scientific/11-12/exceptional/Alb.-alg.-Ottawa-2012-Vii-new.pdf
---

## Definition

Let $(V,\langle\cdot,\cdot\rangle)$ be a real inner-product space with the
positive-definite symmetric form of [[def-inner-product-space]]. On
$S(V):=V\oplus\mathbb R$ define

$$ (v,\alpha)\circ(w,\beta):=(\alpha w+\beta v,\langle v,w\rangle+\alpha\beta). $$

This is the **real spin-factor product**; [[thm-real-spin-factor-is-jordan]]
proves that it is a unital Jordan algebra.
