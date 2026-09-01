---
id: def-augmented-chain-complex-over-an-object
kind: definition
title: "Augmented chain complexes over an object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category]
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

Let $A$ be an object of an abelian category. An **augmented chain complex over $A$** is a chain complex in nonnegative degrees $$\cdots \xrightarrow{d_3} P_2 \xrightarrow{d_2} P_1 \xrightarrow{d_1} P_0$$ together with a morphism $$\varepsilon:P_0\to A$$ such that $$\varepsilon d_1=0.$$

Equivalently, one has an extended chain $$\cdots \to P_2\to P_1\to P_0\to A\to0$$ whose consecutive composites are zero.
