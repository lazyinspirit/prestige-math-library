---
id: def-idempotent-complete-category
kind: definition
title: "Idempotent complete category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-idempotent-and-split-idempotent]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.4, Definition 12.4.1"
      url: "https://stacks.math.columbia.edu/tag/09SF"
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Definition 2.1"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
pipeline_run: frontier-20
---

## Definition

A category is **idempotent complete** (or **Karoubian**) when every idempotent
endomorphism splits in the sense of [[def-idempotent-and-split-idempotent]].
