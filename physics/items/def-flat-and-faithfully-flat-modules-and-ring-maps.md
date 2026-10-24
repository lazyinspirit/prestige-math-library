---
id: def-flat-and-faithfully-flat-modules-and-ring-maps
kind: definition
title: "Flat and faithfully flat modules and ring homomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-right-exactness-of-tensor-products, def-exact-and-short-exact-sequences-of-modules, def-ring-homomorphism]
aliases: []
landmark: true
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
    - title: "Stacks Project, Section 10.39: Flat modules and flat ring maps"
      url: "https://stacks.math.columbia.edu/tag/00H9"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $M$ be an $R$-module. The module $M$ is **flat** if the functor $-\otimes_RM$ preserves exact sequences: whenever $A\to B\to C$ is exact, so is

$$A\otimes_RM\longrightarrow B\otimes_RM\longrightarrow C\otimes_RM.$$

Since tensoring is always right exact ([[thm-right-exactness-of-tensor-products]], [[def-exact-and-short-exact-sequences-of-modules]]), the definition asks for the remaining left-hand exactness. Its equivalent formulation as preservation of injections is proved separately rather than built into the definition.

The module $M$ is **faithfully flat** if a sequence of $R$-modules is exact exactly when its tensor with $M$ is exact.

For a unital ring homomorphism $f:R\to S$ ([[def-ring-homomorphism]]) between commutative rings, $S$ is an $R$-module by $r\cdot s=f(r)s$. The map $f$ is **flat**, respectively **faithfully flat**, when this $R$-module is flat, respectively faithfully flat.
