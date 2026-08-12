---
id: rem-logarithm-roadmap-and-circularity
kind: remark
title: "Roadmap and non-circularity of the logarithm characterisations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-logarithm-definition-equivalence,
       thm-exponential-definition-equivalence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Remark

The implication order is one-way until the bridge. The integral function $L$
is defined and proved differentiable, multiplicative-to-additive, unbounded,
and bijective without using the published exponential or natural logarithm.
Its inverse $E$ is then proved to satisfy $E'=E$ and $E(0)=1$. Only at that
point does IVP uniqueness identify $E$ with the published exponential; taking
inverses identifies $L$ with the published natural logarithm.

After the bridge, [[thm-logarithm-definition-equivalence]] compares already
proved descriptions: inverse exponential, the integral, the continued
Mercator series, the Landau limit, and the regular functional equation. This
does not use one description to establish a premise needed earlier in the
chain. It is the inverse-function counterpart of the separate exponential
roadmap in [[thm-exponential-definition-equivalence]].
