---
id: def-injective-resolution-in-an-abelian-category
kind: definition
title: "Injective resolutions in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coaugmented-cochain-complex-under-an-object, def-injective-object, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Definition

Let $A$ be an object of an abelian category. An **injective resolution of $A$** is a coaugmented cochain complex $$0\to A\xrightarrow{\eta}I^0\to I^1\to I^2\to\cdots$$ such that every $I^n$ is injective and the coaugmented complex is exact at every displayed term.

Thus the object $A$ sits as the initial term of an exact cochain complex of injective objects.
