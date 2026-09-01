---
id: def-coaugmented-cochain-complex-under-an-object
kind: definition
title: "Coaugmented cochain complexes under an object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cochain-complex-in-an-abelian-category]
verification:
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

Let $A$ be an object of an abelian category. A **coaugmented cochain complex under $A$** is a cochain complex in nonnegative degrees $$I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\xrightarrow{d^2}\cdots$$ together with a morphism $$\eta:A\to I^0$$ such that $$d^0\eta=0.$$

Equivalently, one has an extended cochain $$0\to A\to I^0\to I^1\to I^2\to\cdots$$ whose consecutive composites are zero.
