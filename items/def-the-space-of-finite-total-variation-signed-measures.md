---
id: def-the-space-of-finite-total-variation-signed-measures
kind: definition
title: "The space of finite total variation signed measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-signed-measure, def-total-variation-of-a-signed-or-complex-measure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Fix a measurable space $(X,\mathcal A)$. Write
$$\mathcal M(X,\mathcal A):=\{\nu:\nu\text{ is a signed measure on }(X,\mathcal A)\text{ and }|\nu|(X)<+\infty\}.$$

For $\nu\in\mathcal M(X,\mathcal A)$, define its **variation norm candidate**
by
$$\|\nu\|:=|\nu|(X).$$

The next theorem proves that $\mathcal M(X,\mathcal A)$ is a real vector space
under pointwise addition and scalar multiplication and that $\|\cdot\|$ is a
norm in the sense of [[def-norm-and-normed-space]].
