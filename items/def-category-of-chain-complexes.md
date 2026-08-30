---
id: def-category-of-chain-complexes
kind: definition
title: "The category of chain complexes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-map,
       prop-identities-and-composites-of-chain-maps-are-chain-maps,
       def-bounded-bounded-below-and-bounded-above-complex]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

The **category of chain complexes** in an abelian category $\mathcal A$ is
denoted
$$\operatorname{Ch}(\mathcal A).$$
Its objects are chain complexes in $\mathcal A$, and its morphisms are chain
maps.

By [[prop-identities-and-composites-of-chain-maps-are-chain-maps]], identities
and composition are defined degreewise.

The full subcategories on bounded below, bounded above, and bounded complexes
are denoted
$$\operatorname{Ch}^+(\mathcal A),\qquad \operatorname{Ch}^-(\mathcal A),\qquad \operatorname{Ch}^b(\mathcal A).$$
