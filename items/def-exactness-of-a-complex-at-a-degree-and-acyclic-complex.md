---
id: def-exactness-of-a-complex-at-a-degree-and-acyclic-complex
kind: definition
title: "Exactness of a complex at a degree and acyclic complexes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category,
       def-exactness-at-a-node,
       def-cycle-and-boundary-subobjects-of-a-complex,
       lem-the-boundary-subobject-factors-through-the-cycle-subobject]
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

Let $C_\bullet$ be a chain complex and let
$$\beta_n:B_n(C)\to Z_n(C)$$
be the canonical map from boundaries to cycles.

The complex is **exact at degree $n$** when $\beta_n$ is an isomorphism.
Equivalently, the pair
$$C_{n+1}\xrightarrow{d_{n+1}}C_n\xrightarrow{d_n}C_{n-1}$$
is exact at $C_n$ in the sense of [[def-exactness-at-a-node]], so that
$\operatorname{im}(d_{n+1})$ and $\ker(d_n)$ represent the same subobject of
$C_n$.

The complex is **acyclic** if it is exact at every degree.
