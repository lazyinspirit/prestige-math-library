---
id: rem-catenarity-boundary
kind: remark
title: "Why the equal-chain statement stops at affine domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-choice, cor-maximal-chains-in-affine-domains-have-equal-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: remark
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.105: Catenary rings"
      url: "https://stacks.math.columbia.edu/tag/00NH"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Remark

Under the Axiom of Choice ([[def-axiom-of-choice]]), the preceding corollary gives equal lengths for saturated prime chains in finite-type domains over a field. That is the catenary range supplied by the page's affine-dimension package.

Outside that range, arbitrary Noetherian rings need not be catenary. In particular, one cannot promote the equal-length conclusion for saturated prime chains to a general theorem on this page without adding genuinely new hypotheses and proofs.
