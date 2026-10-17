---
id: def-cycle-and-boundary-subobjects-of-a-complex
kind: definition
title: "Cycle and boundary subobjects of a complex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
verification:
  audited: 2026-08-30
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

Let $C_\bullet$ be a chain complex in an abelian category and fix $n\in\mathbb
Z$.

The **$n$th cycle subobject** of $C$ is
$$Z_n(C):=\ker(d_n)\hookrightarrow C_n.$$

The **$n$th boundary subobject** of $C$ is
$$B_n(C):=\operatorname{im}(d_{n+1})\hookrightarrow C_n.$$

Thus both are subobjects of $C_n$, one defined by the kernel of $d_n$ and the
other by the image of $d_{n+1}$.
