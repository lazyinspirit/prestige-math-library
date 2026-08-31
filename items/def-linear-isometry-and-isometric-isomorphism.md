---
id: def-linear-isometry-and-isometric-isomorphism
kind: definition
title: "Linear isometries and isometric isomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-isometry-and-metric-embedding,
       def-injection-surjection-bijection, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Definition

Let $V$ and $W$ be normed spaces over the same scalar field.

A linear map $T:V\to W$ ([[def-linear-map]]) is a **linear isometry** if
$$\|Tx\|=\|x\| \qquad \text{for every } x\in V.$$

A linear isometry is automatically an isometric embedding for the induced
metrics, because
$$\|T(x)-T(y)\|=\|T(x-y)\|=\|x-y\|.$$

A **linear isometric isomorphism** is a linear isometry that is bijective
([[def-injection-surjection-bijection]]). Equivalently, it is a bijective
isometry between the underlying metric spaces whose map is linear.

## Remarks

- The adjective "isometric" by itself refers to the metric notion of
  [[def-isometry-and-metric-embedding]]; the adjective "linear" is recorded
  separately because later pages need both embedding and surjective forms.
- A bijective linear isometry has a linear inverse, so a linear isometric
  isomorphism identifies two normed spaces without changing any distance.
