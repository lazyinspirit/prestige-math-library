---
id: def-homotopy-category-of-chain-complexes
kind: definition
title: "The homotopy category of chain complexes"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-classes-of-chain-maps, lem-composition-of-homotopy-classes-is-well-defined]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Definition

Let $\mathcal A$ be an additive category. The **homotopy category of chain
complexes** on $\mathcal A$ is the category
$$K(\mathcal A).$$
Its objects are the chain complexes in $\mathcal A$, and for chain complexes
$C_\bullet,D_\bullet$ its morphisms are the homotopy classes
$$\operatorname{Hom}_{K(\mathcal A)}(C,D):=[C,D]_K.$$

Composition is induced from composition of representatives and is well defined
by [[lem-composition-of-homotopy-classes-is-well-defined]].
