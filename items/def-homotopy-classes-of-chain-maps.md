---
id: def-homotopy-classes-of-chain-maps
kind: definition
title: "Homotopy classes of chain maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-null-homotopic-maps-form-a-two-sided-additive-ideal]
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
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
pipeline_run: frontier-25
---

## Definition

Let $C_\bullet$ and $D_\bullet$ be chain complexes in an additive category
$\mathcal A$. Write $N(C,D)$ for the subgroup of
$$\operatorname{Hom}_{\operatorname{Ch}(\mathcal A)}(C,D)$$
consisting of null-homotopic chain maps.

The **homotopy class** of a chain map $f:C_\bullet\to D_\bullet$ is its coset
modulo $N(C,D)$, written $[f]$. The abelian group of all homotopy classes is
$$[C,D]_K:=\operatorname{Hom}_{\operatorname{Ch}(\mathcal A)}(C,D)/N(C,D).$$
