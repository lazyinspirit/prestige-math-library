---
id: rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality
kind: remark
title: "Enriched naturality can be strictly stronger than ordinary naturality of the underlying components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-natural-transformation, thm-the-compact-square-form-of-enriched-naturality]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Remark 3.5.11"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Remark

The data of a $\mathcal V$-natural transformation are only the components
$\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$
([[def-enriched-natural-transformation]]), so at first sight they look like the
components of an ordinary natural transformation between the underlying
functors. The content sits in the naturality equation:
[[thm-the-compact-square-form-of-enriched-naturality]] requires a commuting
square in the base category $\mathcal V$, not merely a commuting square after
applying the underlying-set or underlying-hom functor. For bases such as
$\mathbf{Cat}$ or differential graded modules, that enriched square retains
morphism-level information that the underlying ordinary naturality equation
forgets.
