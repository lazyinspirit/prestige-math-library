---
id: def-p-elementary-and-p-hyperelementary-finite-groups
kind: definition
title: $p$-elementary and $p$-hyperelementary finite groups
status: published
origin: pipeline
deps: [def-finite-p-group, def-generated-subgroup, def-external-semidirect-product]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Definition 14.1.1
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $p$ be prime. A finite group is **$p$-elementary** if it is isomorphic to $C\times P$, where $C$ is cyclic of order prime to $p$ and $P$ is a finite $p$-group. It is **$p$-hyperelementary** (also called **$p$-quasi-elementary**) if it is isomorphic to $C\rtimes P$ with the same conditions. The trivial group is allowed for either factor. The family of elementary subgroups means the union of the $p$-elementary families over all primes.
