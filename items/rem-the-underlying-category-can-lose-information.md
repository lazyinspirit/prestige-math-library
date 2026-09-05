---
id: rem-the-underlying-category-can-lose-information
kind: remark
title: "The underlying category can lose genuinely enriched information"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-the-underlying-ordinary-category-of-an-enriched-category]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.3"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Remark

Passing from $\mathcal A$ to $\mathcal A_0$
([[def-the-underlying-ordinary-category-of-an-enriched-category]]) keeps only
the global elements of each hom-object. That can forget real structure.

For $\mathcal V=\mathbf{Cat}$, the hom-object $\mathcal A(A,B)$ is a whole
category, but $\mathcal A_0(A,B)=\mathbf{Cat}(\mathbf 1,\mathcal A(A,B))$ sees
only its objects, so every 2-cell disappears. For differential graded or
chain-complex enrichments, the same construction keeps only degree-zero cycles.
Accordingly, an enriched limit, adjunction, or density statement may be
strictly stronger than the corresponding statement in the underlying ordinary
category.
