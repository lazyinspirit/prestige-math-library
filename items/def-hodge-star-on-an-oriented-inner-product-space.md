---
id: def-hodge-star-on-an-oriented-inner-product-space
kind: definition
title: "The Hodge star on an oriented finite-dimensional real inner-product space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-gram-inner-product-on-kth-exterior-power, def-oriented-unit-volume-form]
justified_by: [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]
aliases: []
landmark: true
short: "Hodge star $\\star$"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Definition

Let $V$ be an oriented finite-dimensional real inner product space of dimension $n$, with Gram pairings on the exterior powers of [[def-gram-inner-product-on-kth-exterior-power]] and oriented unit volume form $\omega$ of [[def-oriented-unit-volume-form]]. For each degree $k$ with $0\le k\le n$, the **Hodge star**

$$\star:\Lambda^kV\longrightarrow\Lambda^{n-k}V$$

is the linear map characterized by

$$\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\,\omega\qquad\text{for all }\alpha,\beta\in\Lambda^kV.$$

Existence and uniqueness of $\star$ for every degree $0\le k\le n$ are proved in [[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]], which discharges the well-definedness obligation recorded above.

## Remarks

The Hodge star needs the metric (through the Gram pairing) and the orientation (through $\omega$); the bare vector-space structure does not determine it. With the opposite orientation $\omega$ is replaced by $-\omega$, and the star is replaced by $-\star$.
