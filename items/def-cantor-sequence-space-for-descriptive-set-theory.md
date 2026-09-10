---
id: def-cantor-sequence-space-for-descriptive-set-theory
kind: definition
title: "Cantor sequence space"
status: draft
origin: pipeline
deps: ["def-baire-sequence-space"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 1.7"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Work in ZF. Write $\mathcal N=\mathbb N^{\mathbb N}$ for [[def-baire-sequence-space]]. **Cantor sequence space** is the subspace

$$\mathcal C=\{x\in\mathcal N:(\forall n\in\mathbb N)\ x(n)\in\{0,1\}\}.$$

For $s\in\{0,1\}^n$, let $N_s^{\mathcal C}=\{x\in\mathcal C:x\upharpoonright n=s\}$. Its topology consists of unions of these cylinders. Indeed $N_s^{\mathcal C}=N_s^{\mathcal N}\cap\mathcal C$, while a Baire cylinder with a nonbinary coordinate has empty intersection with $\mathcal C$. Thus this is exactly the inherited cylinder topology. The cylinder of the empty word is $\mathcal C$. The constant-zero function is a point, so no product-nonemptiness axiom is used. The constants zero and one are distinct points.
