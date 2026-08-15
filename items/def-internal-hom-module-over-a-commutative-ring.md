---
id: def-internal-hom-module-over-a-commutative-ring
kind: definition
title: "The $R$-module $\\operatorname{Hom}_R(M,N)$ over a commutative ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hom-groups-and-induced-hom-maps, def-commutative-ring]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $M,N$ be $R$-modules. The abelian group $\operatorname{Hom}_R(M,N)$ of module homomorphisms ([[def-hom-groups-and-induced-hom-maps]]) becomes an $R$-module under pointwise scalar multiplication

$$(r f)(m):=r\,f(m).$$

The function $rf$ is $R$-linear because, for $s\in R$,

$$(rf)(sm)=r\,s f(m)=s\,r f(m)=s(rf)(m),$$

where the middle equality uses commutativity ([[def-commutative-ring]]). The remaining module laws hold pointwise in $N$. This module is the **internal Hom module** and is denoted $\operatorname{Hom}_R(M,N)$.
