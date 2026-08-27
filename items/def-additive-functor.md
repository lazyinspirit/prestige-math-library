---
id: def-additive-functor
kind: definition
title: "Additive functor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-preadditive-category, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Additive functors"
      url: "https://stacks.math.columbia.edu/tag/010M"
pipeline_run: frontier-20
---

## Definition

Let $\mathcal C$ and $\mathcal D$ be preadditive categories
([[def-preadditive-category]]). A functor $F:\mathcal C\to\mathcal D$
([[def-functor-and-contravariant-functor]]) is **additive** when for every pair
of objects $A,B$ the induced map

$$F_{A,B}:\mathcal C(A,B)\to\mathcal D(FA,FB),\qquad f\mapsto Ff,$$

is a homomorphism of abelian groups. Equivalently,

$$F(f+g)=Ff+Fg$$

for all parallel morphisms $f,g$.
