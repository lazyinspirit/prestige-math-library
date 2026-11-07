---
id: rem-platt-run-output-is-required-for-independent-replay
kind: remark
title: "Local files lack Platt's per-character interval-sign and Turing zero-count certificates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - thm-platt-bounded-grh-for-primitive-dirichlet-l-functions
  - thm-platt-central-nonvanishing-through-conductor-2000000
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorems 7.1 and 7.2, printed pp. 14–15"
verification:
  precheck: n/a
---

## Replay limitation

Platt’s complete arXiv v1 paper reports the finite outcomes, aggregate counts and interval/Turing methods, but it does not include per-character interval-sign and zero-count certificates for the $q\le400{,}000$ result or per-character central-value rectangles for the $q\le2{,}000{,}000$ result. The existing focused source-investigation record reports that no complete public certificate package was obtained. No production replay was performed in this run. The two finite theorems on this page therefore rely on only the exact owner-authorized imported computation inputs; the source inspection documents the checked public artifacts and makes no universal claim about private or unindexed material.

## Replay limitation references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1](https://arxiv.org/pdf/1305.3087v1)

[[thm-platt-bounded-grh-for-primitive-dirichlet-l-functions]]

[[thm-platt-central-nonvanishing-through-conductor-2000000]]

[Focused Platt source-investigation record](../research/number-theory-all-141-2026-10-25-escalations/platt/findings.md)

[Exact owner authorization for the finite computation inputs](../research/number-theory-all-141-2026-10-25-external-computation-authorization.json)
