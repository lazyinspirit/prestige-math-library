---
id: rem-why-this-library-takes-unit-counit-as-the-definition
kind: remark
title: 'The unit-counit definition imposes no local-smallness hypothesis'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Sections 4.1–4.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 2.2'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

The data in [[def-adjunction-by-unit-counit-and-triangle-identities]] consist only of functors and natural transformations, so they are meaningful for legitimate large categories even when a hom-class is not a set. By contrast, a Set-valued family of hom-set bijections presupposes local smallness as defined in [[def-small-locally-small-and-large-category]]. The hom-set formulation remains equivalent under that hypothesis, but it is not used as the definition here because the size condition belongs to that encoding rather than to adjunctions themselves.
