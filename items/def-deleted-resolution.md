---
id: def-deleted-resolution
kind: definition
title: "Deleted resolutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-injective-resolution-in-an-abelian-category]
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

If $$\cdots \to P_2\to P_1\to P_0\xrightarrow{\varepsilon}A\to0$$ is a projective resolution of $A$, its **deleted projective resolution** is the chain complex $$\cdots \to P_2\to P_1\to P_0\to0,$$ obtained by removing the resolved object $A$ and the augmentation.

Dually, if $$0\to A\to I^0\to I^1\to I^2\to\cdots$$ is an injective resolution, its **deleted injective resolution** is the cochain complex $$0\to I^0\to I^1\to I^2\to\cdots,$$ obtained by removing the coaugmentation from $A$.
