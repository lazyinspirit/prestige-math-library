---
id: rem-divisor-voronoi-proof-source-is-access-gated
kind: remark
title: "From the pointwise divisor identity to the weighted endpoint formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: [thm-voronoi-divisor-weighted-k0-y0-summation-formula, thm-voronoi-divisor-summation-formula]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, endpoint convention following formulas (3.1)–(3.3), printed p. 47"
    - title: "Tom Meurman, A Simple Proof of Voronoi's Identity"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "printed pp. 265–267, formulas (1.1)–(1.2)"
verification:
  precheck: n/a
---

## Remark

The endpoint-averaged pointwise divisor identity is proved locally in its improper sine-cosine integral normalization, including bounded convergence on every positive compact interval and uniform convergence away from integers. A separate local integral evaluation identifies its $K_1/Y_1$ kernel in the displayed power-series normalization. For the weighted finite-interval $K_0/Y_0$ identity, integrate the finite primitive sums by parts and then pass to their limit, using the common compact bound and uniform convergence outside small neighborhoods of the finitely many integer points. Evaluating each endpoint atom gives the required half weights. This supplies the full stated $C^2([a,b])$ test class; it does not differentiate a conditionally convergent infinite series term by term.

## Remark references

[Ivić, Chapter 3, §1](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Meurman, printed pp. 265–267](https://numdam.org/item/AST_1992__209__265_0.pdf)
