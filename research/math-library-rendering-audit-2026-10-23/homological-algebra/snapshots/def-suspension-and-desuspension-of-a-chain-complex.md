---
id: def-suspension-and-desuspension-of-a-chain-complex
kind: definition
title: "Suspension and desuspension of a chain complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-shift-of-a-chain-complex]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Definition

For a chain complex $C_\bullet$, its **suspension** is the shift
$$\Sigma C:=C[1],$$
and its **desuspension** is the shift
$$\Sigma^{-1}C:=C[-1].$$

This fixes the sign convention for later cone and triangle constructions.
