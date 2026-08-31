---
id: rem-catenarity-boundary
kind: remark
title: "Why the equal-chain statement stops at affine domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-maximal-chains-in-affine-domains-have-equal-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: remark
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.105: Catenary rings"
      url: "https://stacks.math.columbia.edu/tag/00NH"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Remark

The preceding corollary is deliberately stated only for finite-type domains over a field. That is the catenary range supplied by the page's affine-dimension package.

Outside that range, arbitrary Noetherian rings need not be catenary. In particular, one cannot promote the equal-length conclusion for saturated prime chains to a general theorem on this page without adding genuinely new hypotheses and proofs.
