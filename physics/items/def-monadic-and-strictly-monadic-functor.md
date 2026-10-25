---
id: def-monadic-and-strictly-monadic-functor
kind: definition
title: "Monadic and strictly monadic functors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-comparison-functor-exists-and-is-unique, def-equivalence-and-adjoint-equivalence-of-categories]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.3.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter VI"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let $U:\mathcal D\to\mathcal C$ have a left adjoint $F$, let $T=UF$ be the induced monad, and let $K:\mathcal D\to\mathcal C^T$ be the comparison functor of [[thm-the-comparison-functor-exists-and-is-unique]]. The functor $U$ is **monadic** when $K$ is an equivalence of categories ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

It is **strictly monadic** when $K$ is an isomorphism of categories, so its object and morphism correspondences, inverse, and equations hold on the nose. Strict monadicity implies monadicity; the converse is not part of the definition.
