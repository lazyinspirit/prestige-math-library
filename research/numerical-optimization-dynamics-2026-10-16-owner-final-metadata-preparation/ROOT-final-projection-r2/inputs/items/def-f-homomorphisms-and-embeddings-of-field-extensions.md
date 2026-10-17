---
id: def-f-homomorphisms-and-embeddings-of-field-extensions
kind: definition
title: "$F$-homomorphisms and $F$-embeddings of field extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-homomorphism, def-field-extension-generated-subfields-and-simple-extension]
justified_by: []
aliases: []
landmark: false
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
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ and $L/F$ be field extensions
([[def-field-extension-generated-subfields-and-simple-extension]]). An
**$F$-homomorphism** $\sigma:K\to L$ is a field homomorphism
([[def-field-homomorphism]]) satisfying $\sigma(a)=a$ for every $a\in F$.
Because field homomorphisms are injective, it is also called an
**$F$-embedding**. A bijective $F$-homomorphism is an **$F$-isomorphism**, and an
$F$-isomorphism $K\to K$ is an **$F$-automorphism** of $K$.
