---
id: def-cohen-macaulay-local-module-and-ring
title: Cohen--Macaulay local modules and rings
kind: definition
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, def-support-of-a-module]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Definition

Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M$ be a nonzero
finite $R$-module. The module $M$ is **Cohen--Macaulay** when
$$\operatorname{depth}(M)=\dim\operatorname{Supp}_R(M).$$
The zero module is excluded from this local definition. The local ring $R$ is
Cohen--Macaulay when it is Cohen--Macaulay as an $R$-module.
