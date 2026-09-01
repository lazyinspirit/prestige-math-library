---
id: def-augmentation-preserving-map-of-projective-resolutions
kind: definition
title: "Augmentation-preserving maps of projective resolutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-chain-map]
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

Let $$\cdots\to P_1\to P_0\xrightarrow{\varepsilon_P}A\to0$$ and $$\cdots\to Q_1\to Q_0\xrightarrow{\varepsilon_Q}B\to0$$ be projective resolutions, and let $u:A\to B$ be a morphism.

An **augmentation-preserving map of projective resolutions lifting $u$** is a chain map $f_\bullet:P_\bullet\to Q_\bullet$ such that $$\varepsilon_Qf_0=u\varepsilon_P.$$

Thus the degree-zero square with the augmentations commutes, and the higher maps are compatible with the differentials because $f_\bullet$ is a chain map.
